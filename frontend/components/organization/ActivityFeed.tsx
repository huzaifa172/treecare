'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiHome, FiTarget, FiUsers, FiCalendar, FiMapPin } from 'react-icons/fi';

interface Activity {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  userId?: string;
  userName?: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export default function ActivityFeed({ activities }: ActivityFeedProps) {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'TREE_PLANTED':
        return <FiHome className="w-4 h-4 text-green-600" />;
      case 'CAMPAIGN_CREATED':
        return <FiTarget className="w-4 h-4 text-blue-600" />;
      case 'MEMBER_JOINED':
        return <FiUsers className="w-4 h-4 text-purple-600" />;
      case 'TREE_CARE':
        return <FiHome className="w-4 h-4 text-forest-600" />;
      default:
        return <FiUser className="w-4 h-4 text-gray-600" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'TREE_PLANTED':
        return 'bg-green-100';
      case 'CAMPAIGN_CREATED':
        return 'bg-blue-100';
      case 'MEMBER_JOINED':
        return 'bg-purple-100';
      case 'TREE_CARE':
        return 'bg-forest-100';
      default:
        return 'bg-gray-100';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now.getTime() - activityTime.getTime()) / 1000);

    if (diffInSeconds < 60) {
      return 'Just now';
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    }
  };

  if (!activities || activities.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <FiCalendar className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <p>No recent activity</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex items-start space-x-3"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${getActivityColor(activity.type)}`}>
            {getActivityIcon(activity.type)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              {activity.description}
            </p>
            <div className="flex items-center space-x-2 mt-1">
              {activity.userName && (
                <span className="text-xs text-gray-500">
                  by {activity.userName}
                </span>
              )}
              <span className="text-xs text-gray-400">
                {formatTimeAgo(activity.timestamp)}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
      
      <div className="pt-4 border-t border-gray-200">
        <button className="text-sm text-forest-600 hover:text-forest-700 font-medium transition-colors">
          View all activity
        </button>
      </div>
    </div>
  );
}