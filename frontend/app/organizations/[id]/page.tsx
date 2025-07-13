'use client';

import { useParams } from 'next/navigation';
import ProtectedRoute from '../../../components/auth/ProtectedRoute';
import OrganizationRole from '../../../components/auth/OrganizationRole';
import { useOrganization } from '../../../hooks/useOrganizations';
import { FiUsers, FiCalendar, FiMail, FiPhone, FiGlobe, FiMapPin } from 'react-icons/fi';
import { GiTreeBranch } from 'react-icons/gi';

export default function OrganizationDetailPage() {
  const params = useParams();
  const organizationId = params.id as string;
  const { data: organizationData, isLoading } = useOrganization(organizationId);

  if (isLoading) {
    return (
      <ProtectedRoute requiredRole="user">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  const organization = organizationData?.data?.organization;

  if (!organization) {
    return (
      <ProtectedRoute requiredRole="user">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-6xl mb-4">❌</div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Organization Not Found</h1>
            <p className="text-gray-600">The organization you're looking for doesn't exist or you don't have access to it.</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute requiredRole="user">
      <OrganizationRole organizationId={organizationId} requiredRole="member">
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{organization.name}</h1>
                  <p className="text-gray-600">{organization.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Your Role</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    organization.role === 'owner' ? 'bg-purple-100 text-purple-800' :
                    organization.role === 'admin' ? 'bg-blue-100 text-blue-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {organization.role}
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {organization.contactEmail && (
                  <div className="flex items-center text-sm text-gray-600">
                    <FiMail className="w-4 h-4 mr-2" />
                    <span>{organization.contactEmail}</span>
                  </div>
                )}
                {organization.contactPhone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <FiPhone className="w-4 h-4 mr-2" />
                    <span>{organization.contactPhone}</span>
                  </div>
                )}
                {organization.website && (
                  <div className="flex items-center text-sm text-gray-600">
                    <FiGlobe className="w-4 h-4 mr-2" />
                    <a href={organization.website} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
                      {organization.website}
                    </a>
                  </div>
                )}
                {organization.address && (
                  <div className="flex items-center text-sm text-gray-600">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    <span>{organization.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{organization.memberCount}</div>
                    <div className="text-sm text-gray-600">Members</div>
                  </div>
                  <FiUsers className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{organization.totalTrees}</div>
                    <div className="text-sm text-gray-600">Trees Planted</div>
                  </div>
                  <GiTreeBranch className="w-8 h-8 text-green-600" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{organization.totalCampaigns}</div>
                    <div className="text-sm text-gray-600">Active Campaigns</div>
                  </div>
                  <FiCalendar className="w-8 h-8 text-orange-600" />
                </div>
              </div>
            </div>

            {/* Campaigns Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Campaigns</h2>
              {organization.campaigns && organization.campaigns.length > 0 ? (
                <div className="space-y-4">
                  {organization.campaigns.slice(0, 3).map((campaign) => (
                    <div key={campaign.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                          campaign.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {campaign.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{campaign.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{campaign.plantedTrees} / {campaign.targetTrees} trees</span>
                        <span>{Math.round((campaign.plantedTrees / campaign.targetTrees) * 100)}% complete</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="text-gray-600">No campaigns yet</p>
                </div>
              )}
            </div>

            {/* Members Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Organization Members</h2>
              {organization.members && organization.members.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {organization.members.map((member) => (
                    <div key={member.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{member.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          member.role === 'owner' ? 'bg-purple-100 text-purple-800' :
                          member.role === 'admin' ? 'bg-blue-100 text-blue-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {member.role}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{member.email}</p>
                      <div className="text-sm text-gray-500">
                        {member.treesContributed} trees contributed
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">👥</div>
                  <p className="text-gray-600">No members found</p>
                </div>
              )}
            </div>
          </div>
        </OrganizationRole>
      </ProtectedRoute>
    </ProtectedRoute>
  );
}