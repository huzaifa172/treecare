'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMapPin, FiMail, FiCalendar, FiEdit, FiAward, FiTrendingUp } from 'react-icons/fi';
import { User } from '../../lib/auth';

interface UserHeaderProps {
  user: User;
}

export default function UserHeader({ user }: UserHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-forest-100 rounded-xl flex items-center justify-center">
              {user.profilePicture ? (
                <img 
                  src={user.profilePicture} 
                  alt={user.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
              ) : (
                <FiUser className="w-8 h-8 text-forest-600" />
              )}
            </div>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-900"
              >
                Welcome back, {user.name}!
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center space-x-4 mt-2 text-sm text-gray-500"
              >
                <div className="flex items-center space-x-1">
                  <FiMail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                
                {user.city && user.country && (
                  <div className="flex items-center space-x-1">
                    <FiMapPin className="w-4 h-4" />
                    <span>{user.city}, {user.country}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-1">
                  <FiCalendar className="w-4 h-4" />
                  <span>Member since {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="flex items-center space-x-2">
                <FiAward className="w-5 h-5 text-yellow-500" />
                <span className="text-lg font-bold text-gray-900">{user.greenPoints}</span>
              </div>
              <p className="text-sm text-gray-500">Green Points</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <FiEdit className="w-4 h-4" />
              <span>Edit Profile</span>
            </motion.button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Trees Planted</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <FiTrendingUp className="w-8 h-8 opacity-80" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Care Sessions</p>
                <p className="text-2xl font-bold">48</p>
              </div>
              <FiAward className="w-8 h-8 opacity-80" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">CO₂ Sequestered</p>
                <p className="text-2xl font-bold">156 kg</p>
              </div>
              <FiTrendingUp className="w-8 h-8 opacity-80" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Badges Earned</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <FiAward className="w-8 h-8 opacity-80" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}