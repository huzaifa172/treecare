'use client';

import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D } from '@react-three/drei';
import { 
  FiPlus, 
  FiCamera, 
  FiMapPin, 
  FiTrendingUp, 
  FiAward,
  FiUsers,
  FiGift,
  FiBell,
  FiSettings,
  FiSearch,
  FiFilter,
  FiDownload,
  FiShare2,
  FiHeart,
  FiZap,
  FiTarget,
  FiCalendar,
  FiBarChart
} from 'react-icons/fi';
import { 
  GiTreeBranch, 
  GiSeedling, 
  GiForest,
  GiOakLeaf
} from 'react-icons/gi';

// 3D Tree Component for Dashboard
function DashboardTree({ color = "#228B22", position = [0, 0, 0] }: { color?: string, position?: [number, number, number] }) {
  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.6, 12, 8]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </Float>
    </group>
  );
}

// 3D Scene for Tree Forest
function TreeForestScene() {
  return (
    <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#90EE90" />
      
      <Suspense fallback={null}>
        <DashboardTree position={[-2, 0, 0]} color="#228B22" />
        <DashboardTree position={[0, 0, 0]} color="#32CD32" />
        <DashboardTree position={[2, 0, 0]} color="#90EE90" />
        <DashboardTree position={[-1, 0, -2]} color="#228B22" />
        <DashboardTree position={[1, 0, -2]} color="#32CD32" />
        
        <Environment preset="forest" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Suspense>
    </Canvas>
  );
}

// Stats Card Component
function StatsCard({ icon: Icon, title, value, change, color = "forest" }: {
  icon: any,
  title: string,
  value: string,
  change: string,
  color?: string
}) {
  const isPositive = change.startsWith('+');
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </motion.div>
  );
}

// Tree Card Component
function TreeCard({ tree }: { tree: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-48 bg-gradient-to-br from-green-100 to-teal-100">
        <img 
          src={tree.image || 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'}
          alt={tree.species}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            tree.health === 'healthy' ? 'bg-green-100 text-green-800' :
            tree.health === 'growing' ? 'bg-blue-100 text-blue-800' :
            'bg-yellow-100 text-yellow-800'
          }`}>
            {tree.health}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-gray-900">{tree.species}</h3>
          <div className="flex items-center space-x-1">
            <FiMapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{tree.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          Planted {tree.plantedDate} • {tree.age} old
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-bold text-forest-600">{tree.height}</div>
              <div className="text-xs text-gray-500">Height</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-forest-600">{tree.updates}</div>
              <div className="text-xs text-gray-500">Updates</div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 bg-forest-50 rounded-lg hover:bg-forest-100 transition-colors">
              <FiCamera className="w-4 h-4 text-forest-600" />
            </button>
            <button className="p-2 bg-forest-50 rounded-lg hover:bg-forest-100 transition-colors">
              <FiTrendingUp className="w-4 h-4 text-forest-600" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Badge Component
function Badge({ badge }: { badge: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative p-4 rounded-2xl text-center ${
        badge.earned ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : 'bg-gray-100'
      }`}
    >
      <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
        badge.earned ? 'bg-yellow-300' : 'bg-gray-300'
      }`}>
        <badge.icon className={`w-8 h-8 ${badge.earned ? 'text-yellow-800' : 'text-gray-500'}`} />
      </div>
      <h3 className={`font-bold text-sm mb-1 ${badge.earned ? 'text-yellow-800' : 'text-gray-500'}`}>
        {badge.name}
      </h3>
      <p className={`text-xs ${badge.earned ? 'text-yellow-700' : 'text-gray-400'}`}>
        {badge.description}
      </p>
      {badge.earned && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
        >
          <FiAward className="w-3 h-3 text-white" />
        </motion.div>
      )}
    </motion.div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = [
    { icon: GiSeedling, title: 'Trees Planted', value: '12', change: '+2 this month', color: 'forest' },
    { icon: FiTrendingUp, title: 'Green Points', value: '850', change: '+120 this week', color: 'blue' },
    { icon: FiZap, title: 'CO₂ Offset', value: '25kg', change: '+5kg this month', color: 'green' },
    { icon: FiAward, title: 'Badges Earned', value: '8', change: '+1 this week', color: 'yellow' }
  ];

  const myTrees = [
    {
      id: 1,
      species: 'Mango Tree',
      location: 'Central Park',
      plantedDate: '3 months ago',
      age: '8 months',
      health: 'healthy',
      height: '1.2m',
      updates: 6,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      species: 'Oak Tree',
      location: 'Riverside',
      plantedDate: '6 months ago',
      age: '1 year',
      health: 'growing',
      height: '2.1m',
      updates: 12,
      image: 'https://images.unsplash.com/photo-1574263867128-2e2e7e2c7e6e?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      species: 'Pine Tree',
      location: 'Mountain View',
      plantedDate: '2 weeks ago',
      age: '3 months',
      health: 'young',
      height: '0.8m',
      updates: 2,
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c13a?w=400&h=300&fit=crop'
    }
  ];

  const badges = [
    { icon: GiSeedling, name: 'Seed Starter', description: 'Plant your first tree', earned: true },
    { icon: FiCamera, name: 'Photo Pro', description: '10 tree photos', earned: true },
    { icon: GiForest, name: 'Forest Builder', description: 'Plant 10 trees', earned: true },
    { icon: FiHeart, name: 'Caregiver', description: '50 updates', earned: false },
    { icon: FiUsers, name: 'Community Star', description: 'Help 5 guardians', earned: false },
    { icon: FiTarget, name: 'Goal Achiever', description: 'Complete yearly goal', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <GiTreeBranch className="w-8 h-8 text-forest-600" />
                <span className="text-2xl font-bold text-gradient">GreenGuardian</span>
              </div>
              <div className="hidden md:block h-6 w-px bg-gray-300" />
              <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search trees..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                />
              </div>
              
              <button className="relative p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <FiBell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <FiSettings className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="w-8 h-8 bg-forest-gradient rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Tree Guardian! 🌱
            </h2>
            <p className="text-gray-600">
              You've made incredible environmental impact. Keep growing your forest!
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatsCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* 3D Forest Visualization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Your Tree Forest</h3>
                <div className="flex space-x-2">
                  <button className="btn-ghost text-sm">
                    <FiDownload className="w-4 h-4 mr-2" />
                    Export
                  </button>
                  <button className="btn-ghost text-sm">
                    <FiShare2 className="w-4 h-4 mr-2" />
                    Share
                  </button>
                </div>
              </div>
              
              <div className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                <TreeForestScene />
              </div>
            </motion.div>

            {/* My Trees */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">My Trees</h3>
                <div className="flex space-x-2">
                  <button className="btn-ghost text-sm">
                    <FiFilter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                  <button className="btn-primary text-sm">
                    <FiPlus className="w-4 h-4 mr-2" />
                    Plant New Tree
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {myTrees.map((tree, index) => (
                  <motion.div
                    key={tree.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <TreeCard tree={tree} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-forest-50 rounded-xl hover:bg-forest-100 transition-colors">
                  <FiCamera className="w-5 h-5 text-forest-600" />
                  <span className="font-medium text-forest-800">Update Tree Progress</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <FiMapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Find Adoptable Trees</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <FiGift className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-800">Redeem Rewards</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
                  <FiBarChart className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800">View Analytics</span>
                </button>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Badge badge={badge} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiCamera className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Photo update for Mango Tree</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <FiAward className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Earned "Photo Pro" badge</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <GiSeedling className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Planted new Pine Tree</p>
                    <p className="text-sm text-gray-500">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}