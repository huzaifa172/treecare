'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiTrendingUp, 
  FiTarget, 
  FiCalendar, 
  FiBarChart,
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiZap,
  FiDroplet,
  FiSun
} from 'react-icons/fi';
import { GiBrain, GiTreeBranch } from 'react-icons/gi';
import { useAI } from '../hooks/useAI';
import { useAuth } from '../hooks/useAuth';

export default function AIDashboard() {
  const { user } = useAuth();
  const {
    insights,
    recommendations,
    analytics,
    insightsLoading,
    recommendationsLoading,
    analyticsLoading,
    analyzeTreeHealth,
    generateCareRecommendations,
    predictGrowthAndImpact,
    generateEnvironmentalReport,
    createCareSchedule,
    markRecommendationRead,
    applyRecommendation,
    isAnalyzingHealth,
    isGeneratingRecommendations,
    isPredictingGrowth,
    isGeneratingReport,
    isCreatingSchedule,
  } = useAI();

  const [selectedTimeframe, setSelectedTimeframe] = useState<'week' | 'month' | 'year'>('month');

  const handleGenerateReport = () => {
    generateEnvironmentalReport({ timeframe: selectedTimeframe });
  };

  const handleCreateSchedule = () => {
    createCareSchedule();
  };

  const handleMarkRead = (id: string) => {
    markRecommendationRead({ id });
  };

  const handleApplyRecommendation = (id: string) => {
    applyRecommendation({ id });
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'URGENT': return 'text-red-600 bg-red-50';
      case 'HIGH': return 'text-orange-600 bg-orange-50';
      case 'MEDIUM': return 'text-yellow-600 bg-yellow-50';
      case 'LOW': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'URGENT': return <FiAlertCircle className="w-4 h-4" />;
      case 'HIGH': return <FiZap className="w-4 h-4" />;
      case 'MEDIUM': return <FiClock className="w-4 h-4" />;
      case 'LOW': return <FiCheckCircle className="w-4 h-4" />;
      default: return <FiCheckCircle className="w-4 h-4" />;
    }
  };

  if (insightsLoading || recommendationsLoading || analyticsLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-600 to-teal-600 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <GiBrain className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">AI Guardian Assistant</h2>
            <p className="text-forest-100">Your intelligent tree care companion</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
            <FiBarChart className="w-5 h-5" />
            <span className="font-semibold">AI Interactions</span>
          </div>
            <div className="text-2xl font-bold">{analytics?.totalInteractions || 0}</div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <FiTrendingUp className="w-5 h-5" />
              <span className="font-semibold">Success Rate</span>
            </div>
            <div className="text-2xl font-bold">{analytics?.successRate || 0}%</div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <FiTarget className="w-5 h-5" />
              <span className="font-semibold">Insights</span>
            </div>
            <div className="text-2xl font-bold">{analytics?.totalInsights || 0}</div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <FiCheckCircle className="w-5 h-5" />
              <span className="font-semibold">Recommendations</span>
            </div>
            <div className="text-2xl font-bold">{analytics?.totalRecommendations || 0}</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleGenerateReport}
          disabled={isGeneratingReport}
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <FiBarChart className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Environmental Report</div>
              <div className="text-sm opacity-90">Generate impact analysis</div>
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleCreateSchedule}
          disabled={isCreatingSchedule}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <FiCalendar className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Care Schedule</div>
              <div className="text-sm opacity-90">Create personalized plan</div>
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => generateCareRecommendations({})}
          disabled={isGeneratingRecommendations}
          className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <FiTarget className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Get Recommendations</div>
              <div className="text-sm opacity-90">AI-powered care tips</div>
            </div>
          </div>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => predictGrowthAndImpact({ treeId: 'sample' })}
          disabled={isPredictingGrowth}
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50"
        >
          <div className="flex items-center space-x-3">
            <FiTrendingUp className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Growth Prediction</div>
              <div className="text-sm opacity-90">Forecast tree development</div>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Timeframe Selector for Reports */}
      <div className="bg-white rounded-xl p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Environmental Report Settings</h3>
        <div className="flex items-center space-x-4">
          <span className="text-gray-600">Timeframe:</span>
          <div className="flex space-x-2">
            {(['week', 'month', 'year'] as const).map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => setSelectedTimeframe(timeframe)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedTimeframe === timeframe
                    ? 'bg-forest-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights */}
      {insights.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <GiBrain className="w-5 h-5 text-forest-600" />
            <span>Recent AI Insights</span>
          </h3>
          <div className="space-y-4">
            {insights.slice(0, 3).map((insight) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-forest-50 to-teal-50 rounded-lg p-4 border border-forest-100"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-forest-800">{insight.title}</h4>
                    <p className="text-sm text-forest-600 mt-1">{insight.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-forest-500">
                      <span>Confidence: {Math.round(insight.confidence * 100)}%</span>
                      <span>{new Date(insight.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center">
                      <GiTreeBranch className="w-4 h-4 text-forest-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* AI Recommendations */}
      {recommendations.length > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <FiTarget className="w-5 h-5 text-forest-600" />
            <span>AI Recommendations</span>
          </h3>
          <div className="space-y-4">
            {recommendations.slice(0, 5).map((recommendation) => (
              <motion.div
                key={recommendation.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`border rounded-lg p-4 ${
                  recommendation.isRead ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getPriorityColor(recommendation.priority)}`}>
                        {getPriorityIcon(recommendation.priority)}
                        <span>{recommendation.priority}</span>
                      </span>
                      {!recommendation.isRead && (
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900">{recommendation.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{recommendation.description}</p>
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      <span>Impact: {recommendation.estimatedImpact}</span>
                      <span>{new Date(recommendation.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex space-x-2">
                    {!recommendation.isRead && (
                      <button
                        onClick={() => handleMarkRead(recommendation.id)}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm hover:bg-blue-200 transition-colors"
                      >
                        Mark Read
                      </button>
                    )}
                    {recommendation.actionable && !recommendation.isApplied && (
                      <button
                        onClick={() => handleApplyRecommendation(recommendation.id)}
                        className="px-3 py-1 bg-green-100 text-green-600 rounded-lg text-sm hover:bg-green-200 transition-colors"
                      >
                        Apply
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* AI Features Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <FiZap className="w-5 h-5 text-forest-600" />
            <span>AI Features</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-forest-50 rounded-lg">
              <GiBrain className="w-5 h-5 text-forest-600" />
              <div>
                <div className="font-medium">Tree Health Analysis</div>
                <div className="text-sm text-gray-600">AI-powered health assessment</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
              <FiTrendingUp className="w-5 h-5 text-teal-600" />
              <div>
                <div className="font-medium">Growth Prediction</div>
                <div className="text-sm text-gray-600">Future growth forecasting</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <FiTarget className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-medium">Care Recommendations</div>
                <div className="text-sm text-gray-600">Personalized care tips</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <FiCalendar className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-medium">Care Scheduling</div>
                <div className="text-sm text-gray-600">Automated care planning</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
            <FiBarChart className="w-5 h-5 text-forest-600" />
            <span>Environmental Impact</span>
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <GiTreeBranch className="w-5 h-5 text-green-600" />
                <span className="font-medium">CO₂ Sequestered</span>
              </div>
              <span className="text-lg font-bold text-green-600">25.5 kg</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FiDroplet className="w-5 h-5 text-blue-600" />
                <span className="font-medium">Water Filtered</span>
              </div>
              <span className="text-lg font-bold text-blue-600">1,200 L</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <FiSun className="w-5 h-5 text-yellow-600" />
                <span className="font-medium">Oxygen Produced</span>
              </div>
              <span className="text-lg font-bold text-yellow-600">22 kg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}