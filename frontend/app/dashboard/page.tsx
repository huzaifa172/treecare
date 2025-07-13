'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { 
  Trees, 
  TrendingUp, 
  Award, 
  MapPin, 
  Brain, 
  MessageCircle,
  Activity,
  Calendar,
  Target,
  Zap,
  Crown,
  Coins,
  BarChart3,
  Bell,
  Settings,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import { useCurrentUser } from '@/hooks/useAuth';
import { useUserTrees } from '@/hooks/useTrees';

interface AIInsight {
  id: string;
  type: string;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  createdAt: string;
}

interface AIRecommendation {
  id: string;
  type: string;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  isRead: boolean;
  createdAt: string;
}

interface UserStats {
  totalTrees: number;
  totalPoints: number;
  currentLevel: number;
  levelProgress: number;
  streakDays: number;
  badgesEarned: number;
  rank: number;
  treesNeedingCare: number;
  recentActivity: number;
}

export default function Dashboard() {
  const [guardianBotMessage, setGuardianBotMessage] = useState('');
  const [isGuardianBotOpen, setIsGuardianBotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{type: 'user' | 'ai', content: string}>>([
    { type: 'ai', content: 'Hello! I\'m GuardianBot, your AI care assistant. How can I help you today?' }
  ]);

  const { data: user } = useCurrentUser();
  const { data: treesData } = useUserTrees();
  const trees = Array.isArray(treesData?.data) ? treesData.data : [];

  // Mock data - in real app, these would be API calls
  const userStats: UserStats = {
    totalTrees: trees.length,
    totalPoints: 2840,
    currentLevel: 8,
    levelProgress: 75,
    streakDays: 7,
    badgesEarned: 15,
    rank: 42,
    treesNeedingCare: 3,
    recentActivity: 5
  };

  const aiInsights: AIInsight[] = [
    {
      id: '1',
      type: 'HEALTH_ALERT',
      title: 'Tree Health Improvement',
      description: 'Your Oak tree has shown 15% improvement in health over the last month. Great care!',
      priority: 'LOW',
      createdAt: '2024-01-15T10:30:00Z'
    },
    {
      id: '2',
      type: 'CARE_REMINDER',
      title: 'Watering Schedule',
      description: 'Based on weather patterns, consider increasing watering frequency for your Maple trees.',
      priority: 'MEDIUM',
      createdAt: '2024-01-15T09:15:00Z'
    },
    {
      id: '3',
      type: 'GROWTH_MILESTONE',
      title: 'Growth Milestone Reached',
      description: 'Your Pine tree has reached a new growth milestone! You\'ve earned 50 bonus points.',
      priority: 'LOW',
      createdAt: '2024-01-14T16:45:00Z'
    }
  ];

  const aiRecommendations: AIRecommendation[] = [
    {
      id: '1',
      type: 'CARE_OPTIMIZATION',
      title: 'Optimize Care Schedule',
      description: 'Your trees would benefit from a more structured care schedule. Would you like me to create one?',
      priority: 'MEDIUM',
      isRead: false,
      createdAt: '2024-01-15T08:00:00Z'
    },
    {
      id: '2',
      type: 'SPECIES_SPECIFIC',
      title: 'Species-Specific Care',
      description: 'I noticed you have Oak trees. Here are some specific care tips for optimal growth.',
      priority: 'LOW',
      isRead: false,
      createdAt: '2024-01-14T14:30:00Z'
    }
  ];

  // GuardianBot AI assistant
  const getGuardianBotResponse = async (message: string) => {
    try {
      const response = await fetch('/api/ai/guardian-bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          context: 'dashboard'
        })
      });
      const data = await response.json();
      return data.data?.recommendations?.[0] || 'I\'m here to help with your tree care!';
    } catch (error) {
      return 'Sorry, I\'m having trouble connecting right now.';
    }
  };

  const handleSendMessage = async () => {
    if (!guardianBotMessage.trim()) return;
    
    const userMessage = guardianBotMessage;
    setGuardianBotMessage('');
    
    // Add user message to chat
    const userMsg: { type: 'user' | 'ai'; content: string } = { type: 'user', content: userMessage };
    setChatMessages(prev => [...prev, userMsg]);
    
    // Get AI response
    const aiResponse = await getGuardianBotResponse(userMessage);
    const aiMsg: { type: 'user' | 'ai'; content: string } = { type: 'ai', content: aiResponse };
    setChatMessages(prev => [...prev, aiMsg]);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return 'bg-red-100 text-red-800';
      case 'HIGH': return 'bg-orange-100 text-orange-800';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
      case 'LOW': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'CRITICAL': return '🚨';
      case 'HIGH': return '⚠️';
      case 'MEDIUM': return '📋';
      case 'LOW': return '💡';
      default: return 'ℹ️';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsGuardianBotOpen(!isGuardianBotOpen)}
                className="p-2 bg-green-100 rounded-full text-green-600 hover:bg-green-200"
              >
                <MessageCircle size={20} />
              </button>
              <Link
                href="/trees/register"
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Plus size={16} />
                <span>Add Tree</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Trees className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Trees</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.totalTrees}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600">+2 this month</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Coins className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Points</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.totalPoints.toLocaleString()}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <Crown className="w-4 h-4 text-blue-500 mr-1" />
              <span className="text-blue-600">Level {userStats.currentLevel}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Badges Earned</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.badgesEarned}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <Zap className="w-4 h-4 text-orange-500 mr-1" />
              <span className="text-orange-600">{userStats.streakDays} day streak</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Needs Care</p>
                <p className="text-2xl font-bold text-gray-900">{userStats.treesNeedingCare}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <Calendar className="w-4 h-4 text-red-500 mr-1" />
              <span className="text-red-600">Due for update</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Insights */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🧠 AI Insights</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {aiInsights.map((insight) => (
                    <div key={insight.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <span className="text-2xl">{getPriorityIcon(insight.priority)}</span>
                          <div>
                            <h4 className="font-medium text-gray-900">{insight.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{insight.description}</p>
                            <p className="text-xs text-gray-500 mt-2">
                              {new Date(insight.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                          {insight.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Trees */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🌳 Recent Trees</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {trees.slice(0, 5).map((tree) => (
                    <div key={tree.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                      <img
                        src={tree.photoUrl}
                        alt={tree.species}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{tree.species}</h4>
                        <p className="text-sm text-gray-600">{tree.location.address}</p>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-xs text-gray-500">
                            Planted: {new Date(tree.plantedAt).toLocaleDateString()}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            tree.healthScore >= 80 ? 'bg-green-100 text-green-700' :
                            tree.healthScore >= 60 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {tree.healthScore}% health
                          </span>
                        </div>
                      </div>
                      <Link
                        href={`/trees/${tree.id}`}
                        className="px-3 py-1 text-sm text-green-600 hover:text-green-700"
                      >
                        View
                      </Link>
                    </div>
                  ))}
                </div>
                {trees.length > 5 && (
                  <div className="mt-4 text-center">
                    <Link
                      href="/trees"
                      className="text-sm text-green-600 hover:text-green-700"
                    >
                      View all trees →
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Recommendations */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🤖 AI Recommendations</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {aiRecommendations.map((recommendation) => (
                    <div key={recommendation.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <Brain className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{recommendation.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(recommendation.priority)}`}>
                              {recommendation.priority}
                            </span>
                            {!recommendation.isRead && (
                              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">⚡ Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <Link
                    href="/trees/register"
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-5 h-5 text-green-600" />
                    <span className="text-gray-900">Register New Tree</span>
                  </Link>
                  <Link
                    href="/gamification"
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Award className="w-5 h-5 text-yellow-600" />
                    <span className="text-gray-900">View Achievements</span>
                  </Link>
                  <Link
                    href="/map"
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-900">View Map</span>
                  </Link>
                  <Link
                    href="/organizations"
                    className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <BarChart3 className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-900">Join Organization</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Level Progress */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🏆 Level Progress</h3>
              </div>
              <div className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{userStats.currentLevel}</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">Level {userStats.currentLevel}</h4>
                  <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{userStats.levelProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${userStats.levelProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {100 - userStats.levelProgress}% to next level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GuardianBot Chat */}
      {isGuardianBotOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-lg border flex flex-col">
          <div className="bg-green-600 text-white p-3 rounded-t-lg">
            <h3 className="font-semibold">🤖 GuardianBot</h3>
          </div>
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.type === 'user' 
                    ? 'bg-blue-100 ml-8' 
                    : 'bg-gray-100 mr-8'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            ))}
          </div>
          <div className="p-3 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={guardianBotMessage}
                onChange={(e) => setGuardianBotMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask GuardianBot..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}