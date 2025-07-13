'use client';

import ProtectedRoute from '../../components/auth/ProtectedRoute';
import { useUserOrganizations } from '../../hooks/useOrganizations';
import { useRouter } from 'next/navigation';
import { FiPlus, FiUsers, FiCalendar } from 'react-icons/fi';
import { GiTreeBranch } from 'react-icons/gi';

export default function OrganizationsPage() {
  const { data: organizationsData, isLoading } = useUserOrganizations();
  const router = useRouter();

  const organizations = organizationsData?.data?.organizations || [];

  if (isLoading) {
    return (
      <ProtectedRoute requiredRole="user">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requiredRole="user">
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Organizations</h1>
              <p className="text-gray-600">Manage your tree planting organizations and campaigns</p>
            </div>
            <button
              onClick={() => router.push('/organizations/create')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors"
            >
              <FiPlus className="w-5 h-5" />
              <span>Create Organization</span>
            </button>
          </div>

          {/* Organizations Grid */}
          {organizations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {organizations.map((org) => (
                <div
                  key={org.id}
                  onClick={() => router.push(`/organizations/${org.id}`)}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900">{org.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      org.role === 'owner' ? 'bg-purple-100 text-purple-800' :
                      org.role === 'admin' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {org.role}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">{org.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiUsers className="w-4 h-4 mr-2" />
                      <span>{org.memberCount} members</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <GiTreeBranch className="w-4 h-4 mr-2" />
                      <span>{org.totalTrees} trees</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="w-4 h-4 mr-2" />
                      <span>{org.totalCampaigns} campaigns</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🏢</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Organizations Yet</h3>
              <p className="text-gray-600 mb-6">
                Create your first organization to start managing tree planting campaigns
              </p>
              <button
                onClick={() => router.push('/organizations/create')}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Create Your First Organization
              </button>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}