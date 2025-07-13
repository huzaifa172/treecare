'use client';

import { useAuth } from '../../hooks/useAuth';
import { useUserTrees } from '../../hooks/useTrees';

export default function DashboardOverview() {
  const { user } = useAuth();
  const { data: treesData, isLoading } = useUserTrees();

  const trees = treesData?.data?.trees || [];
  const totalTrees = trees.length;
  const healthyTrees = trees.filter(tree => tree.healthScore >= 80).length;
  const needsAttention = trees.filter(tree => tree.healthScore < 70).length;
  const totalPoints = trees.reduce((sum, tree) => sum + tree.totalPoints, 0);

  const stats = [
    {
      title: "Total Trees",
      value: totalTrees,
      change: "+2",
      changeType: "positive" as const,
      icon: "🌳",
      color: "text-green-600"
    },
    {
      title: "Healthy Trees",
      value: healthyTrees,
      change: "+1",
      changeType: "positive" as const,
      icon: "✅",
      color: "text-green-600"
    },
    {
      title: "Needs Attention",
      value: needsAttention,
      change: needsAttention > 0 ? `${needsAttention}` : "0",
      changeType: needsAttention > 0 ? "negative" as const : "positive" as const,
      icon: "⚠️",
      color: needsAttention > 0 ? "text-red-600" : "text-green-600"
    },
    {
      title: "Total Points",
      value: totalPoints,
      change: "+150",
      changeType: "positive" as const,
      icon: "🏆",
      color: "text-yellow-600"
    }
  ];

  const quickActions = [
    {
      title: "Register New Tree",
      description: "Add a new tree to your collection",
      icon: "🌱",
      action: "register",
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      title: "Submit Care Log",
      description: "Log care activities for your trees",
      icon: "📝",
      action: "care",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      title: "Adopt Tree",
      description: "Find trees available for adoption",
      icon: "🤝",
      action: "adopt",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      title: "View Analytics",
      description: "Check your environmental impact",
      icon: "📊",
      action: "analytics",
      color: "bg-orange-500 hover:bg-orange-600"
    }
  ];

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-24"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">
              Welcome back, {user?.firstName || 'Tree Guardian'}! 🌿
            </h1>
            <p className="text-green-100">
              You're making a difference with {totalTrees} trees under your care
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-4xl">🌳</div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-6">Your Tree Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">{stat.icon}</span>
                <span className={`text-sm font-medium ${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                {stat.value.toLocaleString()}
              </div>
              <div className="text-sm text-green-600">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className={`${action.color} text-white rounded-lg p-4 text-left transition-all duration-200 transform hover:scale-105`}
            >
              <div className="text-2xl mb-2">{action.icon}</div>
              <h3 className="font-semibold mb-1">{action.title}</h3>
              <p className="text-sm opacity-90">{action.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-green-800 mb-6">Recent Activity</h2>
        {trees.length > 0 ? (
          <div className="space-y-4">
            {trees.slice(0, 3).map((tree) => (
              <div key={tree.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🌳</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-green-800">{tree.species}</h3>
                  <p className="text-sm text-green-600">{tree.location.address}</p>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    tree.healthScore >= 80 ? 'text-green-600' : 
                    tree.healthScore >= 70 ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {tree.healthScore}%
                  </div>
                  <div className="text-xs text-green-600">Health</div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">No trees yet</h3>
            <p className="text-green-600 mb-4">Start your journey by registering your first tree</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Register Your First Tree
            </button>
          </div>
        )}
      </div>
    </div>
  );
}