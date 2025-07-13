'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { 
  Trophy, 
  Award, 
  Star, 
  Users, 
  TrendingUp, 
  Gift, 
  Target,
  CheckCircle,
  Clock,
  Zap,
  Crown,
  Medal,
  Badge,
  ShoppingCart,
  Coins
} from 'lucide-react';
import { useCurrentUser } from '@/hooks/useAuth';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  isUnlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
}

interface LeaderboardEntry {
  id: string;
  name: string;
  avatar: string;
  points: number;
  rank: number;
  treesPlanted: number;
  badgesEarned: number;
}

interface Reward {
  id: string;
  name: string;
  description: string;
  pointsCost: number;
  category: string;
  isAvailable: boolean;
  imageUrl: string;
  stock: number;
}

interface UserStats {
  totalPoints: number;
  currentLevel: number;
  levelProgress: number;
  treesPlanted: number;
  badgesEarned: number;
  rank: number;
  streakDays: number;
  achievements: number;
}

export default function GamificationHub() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);

  const { data: user } = useCurrentUser();

  // Mock data - in real app, these would be API calls
  const userStats: UserStats = {
    totalPoints: 2840,
    currentLevel: 8,
    levelProgress: 75,
    treesPlanted: 12,
    badgesEarned: 15,
    rank: 42,
    streakDays: 7,
    achievements: 8
  };

  const badges: Badge[] = [
    {
      id: '1',
      name: 'First Tree',
      description: 'Plant your first tree',
      icon: '🌱',
      category: 'Planting',
      isUnlocked: true,
      unlockedAt: '2024-01-10T10:30:00Z',
      progress: 1,
      maxProgress: 1
    },
    {
      id: '2',
      name: 'Tree Guardian',
      description: 'Plant 10 trees',
      icon: '🌳',
      category: 'Planting',
      isUnlocked: true,
      unlockedAt: '2024-01-15T14:20:00Z',
      progress: 12,
      maxProgress: 10
    },
    {
      id: '3',
      name: 'Care Taker',
      description: 'Submit 5 care logs',
      icon: '💧',
      category: 'Maintenance',
      isUnlocked: true,
      unlockedAt: '2024-01-12T09:15:00Z',
      progress: 8,
      maxProgress: 5
    },
    {
      id: '4',
      name: 'Community Hero',
      description: 'Adopt 3 trees',
      icon: '🤝',
      category: 'Community',
      isUnlocked: false,
      progress: 1,
      maxProgress: 3
    },
    {
      id: '5',
      name: 'Streak Master',
      description: 'Maintain a 30-day streak',
      icon: '🔥',
      category: 'Consistency',
      isUnlocked: false,
      progress: 7,
      maxProgress: 30
    },
    {
      id: '6',
      name: 'AI Explorer',
      description: 'Use AI features 20 times',
      icon: '🤖',
      category: 'Technology',
      isUnlocked: false,
      progress: 12,
      maxProgress: 20
    }
  ];

  const leaderboard: LeaderboardEntry[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      avatar: 'https://via.placeholder.com/40x40?text=SJ',
      points: 15420,
      rank: 1,
      treesPlanted: 45,
      badgesEarned: 28
    },
    {
      id: '2',
      name: 'Mike Chen',
      avatar: 'https://via.placeholder.com/40x40?text=MC',
      points: 12850,
      rank: 2,
      treesPlanted: 38,
      badgesEarned: 25
    },
    {
      id: '3',
      name: 'Emma Davis',
      avatar: 'https://via.placeholder.com/40x40?text=ED',
      points: 11230,
      rank: 3,
      treesPlanted: 32,
      badgesEarned: 22
    },
    {
      id: '4',
      name: 'Alex Rodriguez',
      avatar: 'https://via.placeholder.com/40x40?text=AR',
      points: 9870,
      rank: 4,
      treesPlanted: 28,
      badgesEarned: 20
    },
    {
      id: '5',
      name: 'Lisa Wang',
      avatar: 'https://via.placeholder.com/40x40?text=LW',
      points: 8450,
      rank: 5,
      treesPlanted: 25,
      badgesEarned: 18
    }
  ];

  const rewards: Reward[] = [
    {
      id: '1',
      name: 'Eco-Friendly Water Bottle',
      description: 'Reusable stainless steel water bottle with GreenGuardian branding',
      pointsCost: 500,
      category: 'Merchandise',
      isAvailable: true,
      imageUrl: 'https://via.placeholder.com/200x200?text=Water+Bottle',
      stock: 15
    },
    {
      id: '2',
      name: 'Tree Planting Kit',
      description: 'Complete kit with seeds, soil, and planting guide',
      pointsCost: 1000,
      category: 'Planting',
      isAvailable: true,
      imageUrl: 'https://via.placeholder.com/200x200?text=Planting+Kit',
      stock: 8
    },
    {
      id: '3',
      name: 'Premium Tree Guardian Badge',
      description: 'Exclusive digital badge for top contributors',
      pointsCost: 2000,
      category: 'Digital',
      isAvailable: true,
      imageUrl: 'https://via.placeholder.com/200x200?text=Premium+Badge',
      stock: 999
    },
    {
      id: '4',
      name: 'Eco Workshop Ticket',
      description: 'Free ticket to environmental conservation workshop',
      pointsCost: 1500,
      category: 'Experience',
      isAvailable: true,
      imageUrl: 'https://via.placeholder.com/200x200?text=Workshop',
      stock: 5
    }
  ];

  const handleRedeemReward = (reward: Reward) => {
    if (userStats.totalPoints >= reward.pointsCost) {
      toast.success(`Reward "${reward.name}" redeemed successfully!`);
      setSelectedReward(null);
    } else {
      toast.error('Not enough points to redeem this reward');
    }
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Target },
    { id: 'badges', label: 'Badges', icon: Award },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'rewards', label: 'Reward Store', icon: Gift }
  ];

  const getLevelInfo = (level: number) => {
    const baseXP = 100;
    const xpForLevel = level * baseXP;
    const nextLevelXP = (level + 1) * baseXP;
    return { currentXP: xpForLevel, nextLevelXP, progress: userStats.levelProgress };
  };

  const levelInfo = getLevelInfo(userStats.currentLevel);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🎮 Gamification Hub</h1>
              <p className="text-sm text-gray-600">Level up your environmental impact!</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-yellow-100 px-3 py-1 rounded-full">
                <Coins className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">{userStats.totalPoints} points</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1 rounded-full">
                <Crown className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Level {userStats.currentLevel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* User Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Points</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.totalPoints.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Crown className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Current Level</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.currentLevel}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{userStats.levelProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${userStats.levelProgress}%` }}
                    ></div>
                  </div>
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
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Zap className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Streak Days</p>
                    <p className="text-2xl font-bold text-gray-900">{userStats.streakDays}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Recent Achievements</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {badges.filter(b => b.isUnlocked).slice(0, 3).map((badge) => (
                    <div key={badge.id} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
                        {badge.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{badge.name}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                        <p className="text-xs text-gray-500">
                          Unlocked {badge.unlockedAt ? new Date(badge.unlockedAt).toLocaleDateString() : 'recently'}
                        </p>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Next Goals */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Next Goals</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {badges.filter(b => !b.isUnlocked).slice(0, 3).map((badge) => (
                    <div key={badge.id} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-2xl">
                        {badge.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{badge.name}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                        <div className="mt-2">
                          <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{badge.progress}/{badge.maxProgress}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <Clock className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'badges' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🏆 Badge Collection</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`border rounded-lg p-4 transition-all duration-200 ${
                        badge.isUnlocked 
                          ? 'bg-green-50 border-green-200 hover:bg-green-100' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-3xl ${
                          badge.isUnlocked ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          {badge.icon}
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{badge.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                        
                        {badge.isUnlocked ? (
                          <div className="flex items-center justify-center space-x-1 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            <span className="text-sm font-medium">Unlocked</span>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm text-gray-600">
                              <span>Progress</span>
                              <span>{badge.progress}/{badge.maxProgress}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gray-400 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🏆 Global Leaderboard</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {leaderboard.map((entry, index) => (
                    <div
                      key={entry.id}
                      className={`flex items-center space-x-4 p-4 rounded-lg ${
                        index === 0 ? 'bg-yellow-50 border border-yellow-200' :
                        index === 1 ? 'bg-gray-50 border border-gray-200' :
                        index === 2 ? 'bg-orange-50 border border-orange-200' :
                        'bg-white border border-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 ? 'bg-yellow-500 text-white' :
                          index === 1 ? 'bg-gray-500 text-white' :
                          index === 2 ? 'bg-orange-500 text-white' :
                          'bg-gray-300 text-gray-700'
                        }`}>
                          {entry.rank}
                        </div>
                        <img
                          src={entry.avatar}
                          alt={entry.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">{entry.name}</h4>
                          <p className="text-sm text-gray-600">
                            {entry.treesPlanted} trees • {entry.badgesEarned} badges
                          </p>
                        </div>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-lg font-bold text-gray-900">{entry.points.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">points</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rewards' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🎁 Reward Store</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rewards.map((reward) => (
                    <div
                      key={reward.id}
                      className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
                    >
                      <img
                        src={reward.imageUrl}
                        alt={reward.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{reward.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            <Coins className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-medium text-gray-900">{reward.pointsCost}</span>
                          </div>
                          <button
                            onClick={() => setSelectedReward(reward)}
                            disabled={!reward.isAvailable || userStats.totalPoints < reward.pointsCost}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                              reward.isAvailable && userStats.totalPoints >= reward.pointsCost
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {reward.isAvailable && userStats.totalPoints >= reward.pointsCost ? 'Redeem' : 'Not Enough Points'}
                          </button>
                        </div>
                        {reward.stock < 10 && (
                          <p className="text-xs text-orange-600 mt-2">
                            Only {reward.stock} left in stock!
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reward Redemption Modal */}
      {selectedReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Redeem Reward</h3>
            <div className="space-y-4">
              <img
                src={selectedReward.imageUrl}
                alt={selectedReward.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div>
                <h4 className="font-medium text-gray-900">{selectedReward.name}</h4>
                <p className="text-sm text-gray-600">{selectedReward.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Coins className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-900">{selectedReward.pointsCost} points</span>
                </div>
                <div className="text-sm text-gray-600">
                  Your balance: {userStats.totalPoints} points
                </div>
              </div>
            </div>
            <div className="flex space-x-2 mt-6">
              <button
                onClick={() => setSelectedReward(null)}
                className="flex-1 px-4 py-2 border rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRedeemReward(selectedReward)}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Confirm Redemption
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}