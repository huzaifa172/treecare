'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiFilter, 
  FiSearch, 
  FiMapPin, 
  FiUsers, 
  FiHeart,
  FiEye,
  FiShare2,
  FiNavigation,
  FiInfo,
  FiStar,
  FiCalendar,
  FiTrendingUp,
  FiX
} from 'react-icons/fi';
import { 
  GiTreeBranch, 
  GiSeedling, 
  GiForest,
  GiOakLeaf
} from 'react-icons/gi';

// Types
interface TreeData {
  id: number;
  species: string;
  guardian: string | null;
  location: string;
  coordinates: [number, number];
  plantedDate: string;
  health: 'healthy' | 'growing' | 'young' | 'needs-care';
  height: string;
  updates: number;
  points: number;
  image: string;
  description: string;
  adoptable: boolean;
}

interface GlobalStats {
  totalTrees: number;
  totalGuardians: number;
  co2Offset: string;
  countriesActive: number;
}

// Mock tree data
const treeData: TreeData[] = [
  {
    id: 1,
    species: 'Mango Tree',
    guardian: 'John Doe',
    location: 'Central Park, NYC',
    coordinates: [40.7829, -73.9654],
    plantedDate: '2024-03-15',
    health: 'healthy',
    height: '1.2m',
    updates: 12,
    points: 150,
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop',
    description: 'A beautiful mango tree thriving in the heart of Central Park.',
    adoptable: false
  },
  {
    id: 2,
    species: 'Oak Tree',
    guardian: 'Sarah Johnson',
    location: 'Riverside Park',
    coordinates: [40.7589, -73.9851],
    plantedDate: '2024-01-20',
    health: 'growing',
    height: '2.1m',
    updates: 8,
    points: 200,
    image: 'https://images.unsplash.com/photo-1574263867128-2e2e7e2c7e6e?w=300&h=200&fit=crop',
    description: 'Strong oak tree providing shade by the riverside.',
    adoptable: false
  },
  {
    id: 3,
    species: 'Pine Tree',
    guardian: null,
    location: 'Bryant Park',
    coordinates: [40.7536, -73.9832],
    plantedDate: '2024-05-10',
    health: 'young',
    height: '0.8m',
    updates: 3,
    points: 75,
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=300&h=200&fit=crop',
    description: 'Young pine tree looking for a caring guardian.',
    adoptable: true
  },
  {
    id: 4,
    species: 'Cherry Blossom',
    guardian: 'Mike Chen',
    location: 'Washington Square',
    coordinates: [40.7308, -73.9973],
    plantedDate: '2024-02-14',
    health: 'healthy',
    height: '1.8m',
    updates: 15,
    points: 300,
    image: 'https://images.unsplash.com/photo-1522169080813-e06b1f4e03c5?w=300&h=200&fit=crop',
    description: 'Stunning cherry blossom spreading beauty across the square.',
    adoptable: false
  },
  {
    id: 5,
    species: 'Maple Tree',
    guardian: 'Emily Davis',
    location: 'Brooklyn Bridge Park',
    coordinates: [40.7022, -73.9969],
    plantedDate: '2024-04-01',
    health: 'growing',
    height: '1.5m',
    updates: 6,
    points: 180,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    description: 'Beautiful maple tree with stunning autumn colors.',
    adoptable: false
  },
  {
    id: 6,
    species: 'Willow Tree',
    guardian: null,
    location: 'Central Park West',
    coordinates: [40.7794, -73.9632],
    plantedDate: '2024-06-05',
    health: 'young',
    height: '0.9m',
    updates: 2,
    points: 60,
    image: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?w=300&h=200&fit=crop',
    description: 'Graceful willow tree near the lake, seeking a guardian.',
    adoptable: true
  }
];

// Stats data
const globalStats: GlobalStats = {
  totalTrees: 15420,
  totalGuardians: 3250,
  co2Offset: '25.3 tons',
  countriesActive: 12
};

// Simple Map Component (replacing Leaflet)
function SimpleMap({ trees, onTreeClick }: { trees: TreeData[], onTreeClick: (tree: TreeData) => void }) {
  const [selectedTreeId, setSelectedTreeId] = useState<number | null>(null);

  const handleTreeClick = (tree: TreeData) => {
    setSelectedTreeId(tree.id);
    onTreeClick(tree);
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-blue-100/30">
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-green-200/50"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Tree Markers */}
      {trees.map((tree, index) => (
        <motion.div
          key={tree.id}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
            selectedTreeId === tree.id ? 'z-20' : 'z-10'
          }`}
          style={{
            left: `${20 + (index * 15) % 60}%`,
            top: `${20 + (index * 12) % 60}%`
          }}
          onClick={() => handleTreeClick(tree)}
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
              tree.health === 'healthy' ? 'bg-green-500' :
              tree.health === 'growing' ? 'bg-blue-500' :
              tree.health === 'young' ? 'bg-yellow-500' :
              'bg-orange-500'
            } ${selectedTreeId === tree.id ? 'ring-4 ring-white shadow-2xl' : ''}`}
          >
            <GiSeedling className="w-6 h-6 text-white" />
            
            {/* Pulse animation for adoptable trees */}
            {tree.adoptable && (
              <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-75"></div>
            )}
          </motion.div>

          {/* Tree Info Popup */}
          <AnimatePresence>
            {selectedTreeId === tree.id && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl p-3 min-w-[200px] z-30"
              >
                <div className="text-sm">
                  <div className="font-semibold text-gray-900 mb-1">{tree.species}</div>
                  <div className="text-gray-600 text-xs mb-2">{tree.location}</div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded text-xs ${
                      tree.health === 'healthy' ? 'bg-green-100 text-green-800' :
                      tree.health === 'growing' ? 'bg-blue-100 text-blue-800' :
                      tree.health === 'young' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {tree.health}
                    </span>
                    <button className="text-green-600 hover:text-green-700 text-xs font-medium">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex flex-col space-y-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg font-bold text-gray-700">+</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <span className="text-lg font-bold text-gray-700">−</span>
        </motion.button>
      </div>
    </div>
  );
}

// Tree Info Modal Component
function TreeInfoModal({ tree, isOpen, onClose }: { tree: TreeData | null, isOpen: boolean, onClose: () => void }) {
  if (!tree) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={tree.image} 
                alt={tree.species}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <FiX className="w-4 h-4 text-gray-600" />
              </button>
              <div className="absolute bottom-3 left-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tree.health === 'healthy' ? 'bg-green-100 text-green-800' :
                  tree.health === 'growing' ? 'bg-blue-100 text-blue-800' :
                  tree.health === 'young' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-orange-100 text-orange-800'
                }`}>
                  {tree.health}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{tree.species}</h2>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <FiMapPin className="w-4 h-4" />
                    <span>{tree.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{tree.points}</div>
                  <div className="text-sm text-gray-500">Green Points</div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{tree.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{tree.height}</div>
                  <div className="text-sm text-gray-500">Current Height</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-gray-900">{tree.updates}</div>
                  <div className="text-sm text-gray-500">Updates</div>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-600">Guardian</span>
                  {tree.guardian ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                      <span className="font-medium">{tree.guardian}</span>
                    </div>
                  ) : (
                    <span className="text-orange-600 font-medium">Available for adoption</span>
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Planted</span>
                  <span className="font-medium">{new Date(tree.plantedDate).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                {tree.adoptable ? (
                  <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                    <FiHeart className="w-4 h-4 mr-2" />
                    Adopt This Tree
                  </button>
                ) : (
                  <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <FiEye className="w-4 h-4 mr-2" />
                    Follow Updates
                  </button>
                )}
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <FiShare2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Filter Panel Component
function FilterPanel({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-40 overflow-y-auto"
        >
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Filters</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Tree Species</label>
              <div className="space-y-2">
                {['All Species', 'Mango', 'Oak', 'Pine', 'Cherry Blossom', 'Maple', 'Willow'].map((species) => (
                  <label key={species} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700">{species}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Health Status</label>
              <div className="space-y-2">
                {['Healthy', 'Growing', 'Young', 'Needs Care'].map((health) => (
                  <label key={health} className="flex items-center">
                    <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                    <span className="ml-2 text-sm text-gray-700">{health}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Availability</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="ml-2 text-sm text-gray-700">Available for adoption</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                  <span className="ml-2 text-sm text-gray-700">Has guardian</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Planting Date</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option>Any time</option>
                <option>Last week</option>
                <option>Last month</option>
                <option>Last 3 months</option>
                <option>Last year</option>
              </select>
            </div>
          </div>
          
          <div className="p-6 border-t">
            <div className="flex space-x-3">
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Clear All
              </button>
              <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function MapPage() {
  const [selectedTree, setSelectedTree] = useState<TreeData | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Client-side only rendering
  if (!isClient) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-green-700 font-medium">Loading Tree Map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 z-30">
        <div className="max-w-none px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <GiTreeBranch className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">GreenGuardian</span>
              </div>
              <div className="hidden md:block h-6 w-px bg-gray-300" />
              <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-gray-900">Global Tree Map</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search location, species..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <button 
                onClick={() => setShowFilters(true)}
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                <FiFilter className="w-4 h-4 mr-2" />
                Filters
              </button>
              
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <FiNavigation className="w-4 h-4 mr-2" />
                My Location
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 relative">
        {/* Map */}
        <div className="absolute inset-0">
          <SimpleMap 
            trees={treeData} 
            onTreeClick={setSelectedTree}
          />
        </div>

        {/* Stats Panel */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute bottom-6 left-6 right-6 z-20"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg backdrop-blur-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-3 mx-auto">
                  <GiForest className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{globalStats.totalTrees.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Trees Planted</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-3 mx-auto">
                  <FiUsers className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{globalStats.totalGuardians.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Tree Guardians</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-3 mx-auto">
                  <FiTrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{globalStats.co2Offset}</div>
                <div className="text-sm text-gray-600">CO₂ Offset</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-3 mx-auto">
                  <FiStar className="w-6 h-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{globalStats.countriesActive}</div>
                <div className="text-sm text-gray-600">Active Countries</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-6 right-6 z-20"
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg">
            <h4 className="font-medium text-gray-900 mb-3">Tree Status</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Healthy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Growing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Young</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Tree Info Modal */}
      <TreeInfoModal 
        tree={selectedTree} 
        isOpen={!!selectedTree} 
        onClose={() => setSelectedTree(null)} 
      />

      {/* Filter Panel */}
      <FilterPanel 
        isOpen={showFilters} 
        onClose={() => setShowFilters(false)} 
      />
    </div>
  );
}