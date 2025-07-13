'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiMapPin, FiCalendar, FiTrendingUp, FiFilter, FiDownload } from 'react-icons/fi';
import { useQuery } from '@tanstack/react-query';
import { organizationApi } from '../../lib/api/organization';

interface TreeStatsProps {
  organizationId: string;
}

export default function TreeStats({ organizationId }: TreeStatsProps) {
  const [filters, setFilters] = useState({
    status: '',
    species: '',
    page: 1,
    limit: 10
  });

  const { data: treesData, isLoading } = useQuery({
    queryKey: ['organization-trees', filters],
    queryFn: () => organizationApi.getTrees(filters),
    enabled: !!organizationId
  });

  const trees = treesData?.trees || [];
  const total = treesData?.total || 0;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'HEALTHY':
        return 'bg-green-100 text-green-800';
      case 'NEEDS_CARE':
        return 'bg-yellow-100 text-yellow-800';
      case 'SICK':
        return 'bg-red-100 text-red-800';
      case 'DEAD':
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Tree Inventory</h2>
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            <FiFilter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 bg-forest-600 text-white px-3 py-2 rounded-lg hover:bg-forest-700 transition-colors">
            <FiDownload className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="HEALTHY">Healthy</option>
              <option value="NEEDS_CARE">Needs Care</option>
              <option value="SICK">Sick</option>
              <option value="DEAD">Dead</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Species</label>
            <input
              type="text"
              value={filters.species}
              onChange={(e) => setFilters({ ...filters, species: e.target.value })}
              placeholder="Filter by species..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Show</label>
            <select
              value={filters.limit}
              onChange={(e) => setFilters({ ...filters, limit: Number(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            >
              <option value={10}>10 per page</option>
              <option value={25}>25 per page</option>
              <option value={50}>50 per page</option>
              <option value={100}>100 per page</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Trees</p>
              <p className="text-2xl font-bold text-gray-900">{total}</p>
            </div>
                         <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
               <FiHome className="w-6 h-6 text-green-600" />
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Healthy</p>
              <p className="text-2xl font-bold text-gray-900">
                {trees.filter(t => t.status === 'HEALTHY').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <FiTrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Needs Care</p>
              <p className="text-2xl font-bold text-gray-900">
                {trees.filter(t => t.status === 'NEEDS_CARE').length}
              </p>
            </div>
                         <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
               <FiHome className="w-6 h-6 text-yellow-600" />
             </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Sick/Dead</p>
              <p className="text-2xl font-bold text-gray-900">
                {trees.filter(t => ['SICK', 'DEAD'].includes(t.status)).length}
              </p>
            </div>
                         <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
               <FiHome className="w-6 h-6 text-red-600" />
             </div>
          </div>
        </div>
      </div>

      {/* Trees List */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Tree List</h3>
        </div>
        
        {isLoading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-600 mx-auto"></div>
          </div>
        ) : trees.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No trees found matching your criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tree
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Species
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Planted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {trees.map((tree: any) => (
                  <motion.tr
                    key={tree.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                                                 <div className="w-8 h-8 bg-forest-100 rounded-lg flex items-center justify-center mr-3">
                           <FiHome className="w-4 h-4 text-forest-600" />
                         </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            Tree #{tree.id.slice(-6)}
                          </div>
                          <div className="text-sm text-gray-500">
                            {tree.height}m tall
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tree.species}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-500">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        {tree.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(tree.status)}`}>
                        {tree.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {formatDate(tree.plantedAt)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-forest-600 hover:text-forest-700 mr-3">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-700">
                        Edit
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {total > filters.limit && (
        <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border">
          <div className="text-sm text-gray-700">
            Showing {((filters.page - 1) * filters.limit) + 1} to {Math.min(filters.page * filters.limit, total)} of {total} trees
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setFilters({ ...filters, page: Math.max(1, filters.page - 1) })}
              disabled={filters.page === 1}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
              disabled={filters.page * filters.limit >= total}
              className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}