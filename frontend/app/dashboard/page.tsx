import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, 
  Camera, 
  MapPin, 
  TrendingUp, 
  Award,
  Users,
  Gift,
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  Share2,
  Heart,
  Zap,
  Target,
  Calendar,
  BarChart
} from 'lucide-react';

// 3D Tree Forest Scene using Three.js
function TreeForestScene() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Load Three.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.onload = () => {
      initScene();
    };
    document.head.appendChild(script);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  const initScene = () => {
    if (!window.THREE || !mountRef.current) return;

    const scene = new window.THREE.Scene();
    const camera = new window.THREE.PerspectiveCamera(50, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new window.THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight = new window.THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    const pointLight = new window.THREE.PointLight(0x90EE90, 0.3);
    pointLight.position.set(-10, -10, -5);
    scene.add(pointLight);

    // Create trees
    const createTree = (x, z, color) => {
      const group = new window.THREE.Group();
      
      // Trunk
      const trunkGeometry = new window.THREE.CylinderGeometry(0.1, 0.15, 1, 8);
      const trunkMaterial = new window.THREE.MeshStandardMaterial({ color: 0x8B4513 });
      const trunk = new window.THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(0, 0, 0);
      group.add(trunk);

      // Leaves
      const leavesGeometry = new window.THREE.SphereGeometry(0.6, 12, 8);
      const leavesMaterial = new window.THREE.MeshStandardMaterial({ color: color });
      const leaves = new window.THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.set(0, 0.8, 0);
      group.add(leaves);

      group.position.set(x, 0, z);
      return group;
    };

    // Add trees to scene
    const trees = [
      createTree(-2, 0, 0x228B22),
      createTree(0, 0, 0x32CD32),
      createTree(2, 0, 0x90EE90),
      createTree(-1, -2, 0x228B22),
      createTree(1, -2, 0x32CD32)
    ];

    trees.forEach(tree => scene.add(tree));

    // Set camera position
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    // Animation loop
    let rotationY = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      
      // Auto-rotate scene
      rotationY += 0.005;
      scene.rotation.y = rotationY;

      // Animate trees (floating effect)
      trees.forEach((tree, index) => {
        tree.position.y = Math.sin(Date.now() * 0.001 + index) * 0.05;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Handle resize
    const handleResize = () => {
      if (mountRef.current) {
        camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  return <div ref={mountRef} className="h-64 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl" />;
}

// Stats Card Component
function StatsCard({ icon: Icon, title, value, change, color = "green" }) {
  const isPositive = change.startsWith('+');
  
  const colorClasses = {
    green: 'bg-green-100 text-green-600',
    blue: 'bg-blue-100 text-blue-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    forest: 'bg-green-100 text-green-600'
  };
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClasses[color] || colorClasses.green}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
}

// Tree Card Component
function TreeCard({ tree }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
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
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">{tree.location}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">
          Planted {tree.plantedDate} • {tree.age} old
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{tree.height}</div>
              <div className="text-xs text-gray-500">Height</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-green-600">{tree.updates}</div>
              <div className="text-xs text-gray-500">Updates</div>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Camera className="w-4 h-4 text-green-600" />
            </button>
            <button className="p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <TrendingUp className="w-4 h-4 text-green-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Badge Component
function Badge({ badge }) {
  const IconComponent = badge.icon;
  
  return (
    <div className={`relative p-4 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300 ${
      badge.earned ? 'bg-gradient-to-br from-yellow-100 to-yellow-200' : 'bg-gray-100'
    }`}>
      <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
        badge.earned ? 'bg-yellow-300' : 'bg-gray-300'
      }`}>
        <IconComponent className={`w-8 h-8 ${badge.earned ? 'text-yellow-800' : 'text-gray-500'}`} />
      </div>
      <h3 className={`font-bold text-sm mb-1 ${badge.earned ? 'text-yellow-800' : 'text-gray-500'}`}>
        {badge.name}
      </h3>
      <p className={`text-xs ${badge.earned ? 'text-yellow-700' : 'text-gray-400'}`}>
        {badge.description}
      </p>
      {badge.earned && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
          <Award className="w-3 h-3 text-white" />
        </div>
      )}
    </div>
  );
}

// Tree Icon Component
function TreeIcon({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"/>
      <path d="M12 11c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
      <path d="M12 18v3c0 .55-.45 1-1 1s-1-.45-1-1v-3h2z"/>
    </svg>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = [
    { icon: TreeIcon, title: 'Trees Planted', value: '12', change: '+2 this month', color: 'green' },
    { icon: TrendingUp, title: 'Green Points', value: '850', change: '+120 this week', color: 'blue' },
    { icon: Zap, title: 'CO₂ Offset', value: '25kg', change: '+5kg this month', color: 'green' },
    { icon: Award, title: 'Badges Earned', value: '8', change: '+1 this week', color: 'yellow' }
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
    { icon: TreeIcon, name: 'Seed Starter', description: 'Plant your first tree', earned: true },
    { icon: Camera, name: 'Photo Pro', description: '10 tree photos', earned: true },
    { icon: TreeIcon, name: 'Forest Builder', description: 'Plant 10 trees', earned: true },
    { icon: Heart, name: 'Caregiver', description: '50 updates', earned: false },
    { icon: Users, name: 'Community Star', description: 'Help 5 guardians', earned: false },
    { icon: Target, name: 'Goal Achiever', description: 'Complete yearly goal', earned: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <TreeIcon className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">GreenGuardian</span>
              </div>
              <div className="hidden md:block h-6 w-px bg-gray-300" />
              <div className="hidden md:block">
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search trees..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <button className="relative p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">3</span>
              </button>
              
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, Tree Guardian! 🌱
            </h2>
            <p className="text-gray-600">
              You've made incredible environmental impact. Keep growing your forest!
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatsCard {...stat} />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tree Forest Visualization */}
            <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:0.4s] bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Your Tree Forest</h3>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Export</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
              
              <TreeForestVisualization />
            </div>

            {/* My Trees */}
            <div className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] [animation-delay:0.5s] bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">My Trees</h3>
                <div className="flex space-x-2">
                  <button className="flex items-center space-x-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span>Plant New Tree</span>
                  </button>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {myTrees.map((tree, index) => (
                  <div
                    key={tree.id}
                    className="opacity-0 animate-[fadeInLeft_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <TreeCard tree={tree} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="opacity-0 animate-[fadeInRight_0.6s_ease-out_forwards] [animation-delay:0.3s] bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                  <Camera className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Update Tree Progress</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-800">Find Adoptable Trees</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <Gift className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-800">Redeem Rewards</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 p-3 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-colors">
                  <BarChart className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-yellow-800">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Achievements */}
            <div className="opacity-0 animate-[fadeInRight_0.6s_ease-out_forwards] [animation-delay:0.4s] bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Achievements</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={badge.name}
                    className="opacity-0 animate-[fadeInScale_0.6s_ease-out_forwards]"
                    style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <Badge badge={badge} />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="opacity-0 animate-[fadeInRight_0.6s_ease-out_forwards] [animation-delay:0.5s] bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Camera className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Photo update for Mango Tree</p>
                    <p className="text-sm text-gray-500">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Earned "Photo Pro" badge</p>
                    <p className="text-sm text-gray-500">1 day ago</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <TreeIcon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Planted new Pine Tree</p>
                    <p className="text-sm text-gray-500">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}