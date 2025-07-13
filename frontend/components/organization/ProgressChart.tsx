'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiTrendingUp } from 'react-icons/fi';

interface ProgressData {
  campaignId: string;
  campaignName: string;
  progress: number;
  goal: number;
  current: number;
}

interface ProgressChartProps {
  data: ProgressData[];
}

export default function ProgressChart({ data }: ProgressChartProps) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <FiTarget className="w-12 h-12 mx-auto mb-4 text-gray-300" />
        <p>No campaign data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.map((campaign, index) => (
        <motion.div
          key={campaign.campaignId}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="space-y-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FiTarget className="w-4 h-4 text-forest-600" />
              <span className="text-sm font-medium text-gray-900">
                {campaign.campaignName}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">
                {campaign.current} / {campaign.goal}
              </span>
              <span className="text-sm font-medium text-gray-900">
                {campaign.progress}%
              </span>
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${campaign.progress}%` }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-forest-600 h-2 rounded-full relative"
            >
              {campaign.progress > 50 && (
                <div className="absolute inset-0 bg-gradient-to-r from-forest-600 to-forest-500 rounded-full"></div>
              )}
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Overall Progress</span>
          <div className="flex items-center space-x-1">
            <FiTrendingUp className="w-4 h-4 text-green-600" />
            <span className="font-medium text-green-600">
              {Math.round(data.reduce((acc, campaign) => acc + campaign.progress, 0) / data.length)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}