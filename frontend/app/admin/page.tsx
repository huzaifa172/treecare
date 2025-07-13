'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { 
  Users, 
  Trees, 
  Building2, 
  Activity, 
  Shield, 
  Brain, 
  Award, 
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  TrendingDown,
  Eye,
  Settings,
  Download
} from 'lucide-react';
import { useCurrentUser } from '@/hooks/useAuth';

interface SystemStats {
  totalUsers: number;
  totalTrees: number;
  totalOrganizations: number;
  activeCampaigns: number;
  totalPoints: number;
  aiInteractions: number;
  suspiciousActivities: number;
  systemHealth: number;
}

interface FraudAlert {
  id: string;
  userId: string;
  userName: string;
  activity: string;
  riskScore: number;
  timestamp: string;
  status: 'pending' | 'reviewed' | 'resolved';
  description: string;
}

interface AIAudit {
  id: string;
  model: string;
  accuracy: number;
  responseTime: number;
  cost: number;
  usage: number;
  lastUpdated: string;
}

interface RewardConfig {
  id: string;
  name: string;
  points: number;
  category: string;
  isActive: boolean;
  usage: number;
}

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFraudAlert, setSelectedFraudAlert] = useState<FraudAlert | null>(null);
  const [showFraudDetails, setShowFraudDetails] = useState(false);

  const { data: user } = useCurrentUser();

  // Mock data - in real app, these would be API calls
  const systemStats: SystemStats = {
    totalUsers: 15420,
    totalTrees: 45678,
    totalOrganizations: 234,
    activeCampaigns: 89,
    totalPoints: 1234567,
    aiInteractions: 89012,
    suspiciousActivities: 23,
    systemHealth: 98.5
  };

  const fraudAlerts: FraudAlert[] = [
    {
      id: '1',
      userId: 'user123',
      userName: 'John Doe',
      activity: 'Multiple tree registrations in short time',
      riskScore: 85,
      timestamp: '2024-01-15T10:30:00Z',
      status: 'pending',
      description: 'User registered 15 trees within 2 hours, which is unusual for normal usage patterns.'
    },
    {
      id: '2',
      userId: 'user456',
      userName: 'Jane Smith',
      activity: 'GPS location mismatch',
      riskScore: 72,
      timestamp: '2024-01-15T09:15:00Z',
      status: 'reviewed',
      description: 'Tree photos show different location than GPS coordinates provided.'
    }
  ];

  const aiAuditData: AIAudit[] = [
    {
      id: '1',
      model: 'TreeVision AI',
      accuracy: 94.2,
      responseTime: 1200,
      cost: 0.045,
      usage: 45678,
      lastUpdated: '2024-01-15T08:00:00Z'
    },
    {
      id: '2',
      model: 'GuardianBot',
      accuracy: 89.7,
      responseTime: 800,
      cost: 0.032,
      usage: 23456,
      lastUpdated: '2024-01-15T07:30:00Z'
    },
    {
      id: '3',
      model: 'FraudGuard AI',
      accuracy: 96.8,
      responseTime: 1500,
      cost: 0.058,
      usage: 12345,
      lastUpdated: '2024-01-15T09:00:00Z'
    }
  ];

  const rewardConfigs: RewardConfig[] = [
    {
      id: '1',
      name: 'Tree Registration',
      points: 50,
      category: 'Planting',
      isActive: true,
      usage: 1234
    },
    {
      id: '2',
      name: 'Monthly Care Update',
      points: 25,
      category: 'Maintenance',
      isActive: true,
      usage: 5678
    },
    {
      id: '3',
      name: 'Tree Adoption',
      points: 75,
      category: 'Community',
      isActive: true,
      usage: 890
    }
  ];

  const handleFraudAction = (alertId: string, action: 'approve' | 'reject') => {
    toast.success(`Fraud alert ${action === 'approve' ? 'approved' : 'rejected'} successfully`);
    setShowFraudDetails(false);
    setSelectedFraudAlert(null);
  };

  const handleExportData = (type: string) => {
    toast.success(`${type} data exported successfully`);
  };

  const tabs = [
    { id: 'overview', label: 'System Overview', icon: BarChart3 },
    { id: 'fraud', label: 'FraudGuard AI', icon: Shield },
    { id: 'ai-audit', label: 'AI Audit Dashboard', icon: Brain },
    { id: 'rewards', label: 'Reward Configuration', icon: Award },
    { id: 'analytics', label: 'Global Analytics', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Control Panel</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.name}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">System Online</span>
              </div>
              <button
                onClick={() => handleExportData('system')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Download size={16} />
                <span>Export Data</span>
              </button>
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
                      ? 'border-blue-500 text-blue-600'
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
            {/* System Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">{systemStats.totalUsers.toLocaleString()}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+12% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Trees className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Total Trees</p>
                    <p className="text-2xl font-bold text-gray-900">{systemStats.totalTrees.toLocaleString()}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+8% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">Organizations</p>
                    <p className="text-2xl font-bold text-gray-900">{systemStats.totalOrganizations}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">+5% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Activity className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">System Health</p>
                    <p className="text-2xl font-bold text-gray-900">{systemStats.systemHealth}%</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                  <span className="text-green-600">All systems operational</span>
                </div>
              </div>
            </div>

            {/* AI Performance Overview */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">AI Performance Overview</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{systemStats.aiInteractions.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total AI Interactions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{systemStats.totalPoints.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Total Points Distributed</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-red-600">{systemStats.suspiciousActivities}</p>
                    <p className="text-sm text-gray-600">Suspicious Activities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'fraud' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🔐 FraudGuard AI - Suspicious Activity Detection</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {fraudAlerts.map((alert) => (
                    <div
                      key={alert.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setSelectedFraudAlert(alert);
                        setShowFraudDetails(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            alert.riskScore >= 80 ? 'bg-red-500' :
                            alert.riskScore >= 60 ? 'bg-yellow-500' : 'bg-green-500'
                          }`}></div>
                          <div>
                            <p className="font-medium text-gray-900">{alert.userName}</p>
                            <p className="text-sm text-gray-600">{alert.activity}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">Risk: {alert.riskScore}%</p>
                          <p className="text-xs text-gray-500">
                            {new Date(alert.timestamp).toLocaleString()}
                          </p>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            alert.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            alert.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {alert.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'ai-audit' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">🧠 AI Audit Dashboard</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {aiAuditData.map((model) => (
                    <div key={model.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-medium text-gray-900">{model.model}</h4>
                        <span className="text-sm text-gray-500">
                          Last updated: {new Date(model.lastUpdated).toLocaleString()}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Accuracy</p>
                          <p className="text-lg font-semibold text-gray-900">{model.accuracy}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Response Time</p>
                          <p className="text-lg font-semibold text-gray-900">{model.responseTime}ms</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Cost</p>
                          <p className="text-lg font-semibold text-gray-900">${model.cost}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Usage</p>
                          <p className="text-lg font-semibold text-gray-900">{model.usage.toLocaleString()}</p>
                        </div>
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
                <h3 className="text-lg font-medium text-gray-900">🎁 Reward Configuration</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {rewardConfigs.map((reward) => (
                    <div key={reward.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900">{reward.name}</h4>
                          <p className="text-sm text-gray-600">{reward.category}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="text-lg font-semibold text-gray-900">{reward.points} points</p>
                            <p className="text-sm text-gray-600">{reward.usage} uses</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              reward.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {reward.isActive ? 'Active' : 'Inactive'}
                            </span>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <Settings size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">📊 Global Analytics</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">User Growth</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">This Month</span>
                        <span className="text-sm font-medium">+1,234</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Last Month</span>
                        <span className="text-sm font-medium">+987</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Growth Rate</span>
                        <span className="text-sm font-medium text-green-600">+25%</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-4">Tree Planting Impact</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">CO2 Absorbed</span>
                        <span className="text-sm font-medium">1,234 tons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Oxygen Produced</span>
                        <span className="text-sm font-medium">890 tons</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Environmental Score</span>
                        <span className="text-sm font-medium text-green-600">94/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fraud Alert Details Modal */}
      {showFraudDetails && selectedFraudAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Fraud Alert Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">User</label>
                <p className="text-gray-900">{selectedFraudAlert.userName} ({selectedFraudAlert.userId})</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Activity</label>
                <p className="text-gray-900">{selectedFraudAlert.activity}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Risk Score</label>
                <p className="text-gray-900">{selectedFraudAlert.riskScore}%</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <p className="text-gray-900">{selectedFraudAlert.description}</p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Timestamp</label>
                <p className="text-gray-900">{new Date(selectedFraudAlert.timestamp).toLocaleString()}</p>
              </div>
            </div>
            <div className="flex space-x-2 mt-6">
              <button
                onClick={() => setShowFraudDetails(false)}
                className="flex-1 px-4 py-2 border rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => handleFraudAction(selectedFraudAlert.id, 'reject')}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                Reject
              </button>
              <button
                onClick={() => handleFraudAction(selectedFraudAlert.id, 'approve')}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}