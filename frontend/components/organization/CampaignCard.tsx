'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiCalendar, FiMapPin, FiTrendingUp, FiEye, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Campaign } from '../../hooks/useOrganization';

interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({ campaign }: CampaignCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800';
      case 'COMPLETED':
        return 'bg-blue-100 text-blue-800';
      case 'PLANNED':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-forest-100 rounded-lg flex items-center justify-center">
            <FiTarget className="w-5 h-5 text-forest-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
              {campaign.status}
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <FiEye className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <FiEdit className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {campaign.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FiTarget className="w-4 h-4" />
          <span>Goal: {campaign.goal}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FiMapPin className="w-4 h-4" />
          <span>{campaign.area}</span>
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <FiCalendar className="w-4 h-4" />
          <span>{formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-1">
          <span className="text-gray-600">Progress</span>
          <span className="font-medium text-gray-900">{campaign.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-forest-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${campaign.progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <FiTrendingUp className="w-4 h-4" />
          <span>Active</span>
        </div>
        
        <button className="text-forest-600 hover:text-forest-700 text-sm font-medium transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
}