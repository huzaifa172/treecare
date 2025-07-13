'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiCalendar, FiShield, FiMoreVertical, FiEdit, FiTrash2 } from 'react-icons/fi';
import { Member } from '../../hooks/useOrganization';

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  const getRoleColor = (role: string) => {
    switch (role) {
      case 'OWNER':
        return 'bg-purple-100 text-purple-800';
      case 'ADMIN':
        return 'bg-red-100 text-red-800';
      case 'VENDOR':
        return 'bg-orange-100 text-orange-800';
      case 'MEMBER':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'INACTIVE':
        return 'bg-gray-100 text-gray-800';
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
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
            {member.user?.avatar ? (
              <img 
                src={member.user.avatar} 
                alt={member.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <FiUser className="w-6 h-6 text-forest-600" />
            )}
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">
              {member.user?.name || member.email}
            </h3>
            <p className="text-sm text-gray-500">{member.email}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-1">
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <FiEdit className="w-4 h-4" />
          </button>
          <button className="p-1 text-gray-400 hover:text-red-600 transition-colors">
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <FiShield className="w-4 h-4" />
            <span>Role</span>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleColor(member.role)}`}>
            {member.role}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <FiCalendar className="w-4 h-4" />
            <span>Joined</span>
          </div>
          <span className="text-sm text-gray-900">{formatDate(member.joinedAt)}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <FiMail className="w-4 h-4" />
            <span>Status</span>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
            {member.status}
          </span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Member since {formatDate(member.joinedAt)}
          </div>
          
          <button className="text-forest-600 hover:text-forest-700 text-sm font-medium transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  );
}