'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiGlobe, FiPhone, FiMail, FiEdit } from 'react-icons/fi';
import { Organization } from '../../hooks/useOrganization';

interface OrganizationHeaderProps {
  organization: Organization;
}

export default function OrganizationHeader({ organization }: OrganizationHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-forest-100 rounded-xl flex items-center justify-center">
              {organization.logo ? (
                <img 
                  src={organization.logo} 
                  alt={organization.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              ) : (
                <span className="text-2xl font-bold text-forest-600">
                  {organization.name.charAt(0).toUpperCase()}
                </span>
              )}
            </div>
            
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-900"
              >
                {organization.name}
              </motion.h1>
              
              {organization.description && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 mt-1"
                >
                  {organization.description}
                </motion.p>
              )}
              
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                {organization.address && (
                  <div className="flex items-center space-x-1">
                    <FiMapPin className="w-4 h-4" />
                    <span>{organization.address}</span>
                  </div>
                )}
                
                {organization.website && (
                  <a 
                    href={organization.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 hover:text-forest-600 transition-colors"
                  >
                    <FiGlobe className="w-4 h-4" />
                    <span>Website</span>
                  </a>
                )}
                
                {organization.phone && (
                  <div className="flex items-center space-x-1">
                    <FiPhone className="w-4 h-4" />
                    <span>{organization.phone}</span>
                  </div>
                )}
                
                {organization.email && (
                  <div className="flex items-center space-x-1">
                    <FiMail className="w-4 h-4" />
                    <span>{organization.email}</span>
                  </div>
                )}
              </div>
            </div>
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
    </div>
  );
}