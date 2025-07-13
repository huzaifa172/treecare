'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiUsers, 
  FiTarget, 
  FiTrendingUp, 
  FiMapPin, 
  FiCalendar,
  FiPlus,
  FiBarChart,
  FiDownload,
  FiSettings,
  FiBell,
  FiStar,
  FiAward,
  FiHome,
  FiUserPlus,
  FiUpload,
  FiEye,
  FiEdit,
  FiTrash2
} from 'react-icons/fi';
import { useOrganization } from '../../../hooks/useOrganization';
import { useAuth } from '../../../hooks/useAuth';
import ProtectedRoute from '../../../components/auth/ProtectedRoute';
import OrganizationHeader from '../../../components/organization/OrganizationHeader';
import CampaignCard from '../../../components/organization/CampaignCard';
import MemberCard from '../../../components/organization/MemberCard';
import TreeStats from '../../../components/organization/TreeStats';
import ProgressChart from '../../../components/organization/ProgressChart';
import ActivityFeed from '../../../components/organization/ActivityFeed';

export default function OrganizationDashboard() {
  const { user } = useAuth();
  const { 
    organization, 
    campaigns, 
    members, 
    stats, 
    isLoading,
    createCampaign,
    inviteMember,
    uploadTrees,
    isCreatingCampaign,
    isInvitingMember,
    isUploadingTrees
  } = useOrganization();

  const [activeTab, setActiveTab] = useState('overview');
  const [showCreateCampaign, setShowCreateCampaign] = useState(false);
  const [showInviteMember, setShowInviteMember] = useState(false);
  const [showUploadTrees, setShowUploadTrees] = useState(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-600"></div>
      </div>
    );
  }

  if (!organization) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">No Organization Found</h2>
        <p className="text-gray-600 mb-6">You need to be part of an organization to access this dashboard.</p>
        <button className="bg-forest-600 text-white px-6 py-3 rounded-lg hover:bg-forest-700 transition-colors">
          Join Organization
        </button>
      </div>
    );
  }

  return (
    <ProtectedRoute requiredRole="USER">
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <OrganizationHeader organization={organization} />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCreateCampaign(true)}
                disabled={isCreatingCampaign}
                className="flex items-center space-x-2 bg-forest-600 text-white px-4 py-2 rounded-lg hover:bg-forest-700 transition-colors disabled:opacity-50"
              >
                <FiPlus className="w-4 h-4" />
                <span>Create Campaign</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowInviteMember(true)}
                disabled={isInvitingMember}
                className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <FiUserPlus className="w-4 h-4" />
                <span>Invite Member</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowUploadTrees(true)}
                disabled={isUploadingTrees}
                className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                <FiUpload className="w-4 h-4" />
                <span>Upload Trees</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <FiDownload className="w-4 h-4" />
                <span>Export Report</span>
              </motion.button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', icon: FiBarChart },
                  { id: 'campaigns', label: 'Campaigns', icon: FiTarget },
                  { id: 'members', label: 'Members', icon: FiUsers },
                  { id: 'trees', label: 'Trees', icon: FiHome },
                  { id: 'analytics', label: 'Analytics', icon: FiTrendingUp },
                  { id: 'activity', label: 'Activity', icon: FiBell }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-forest-500 text-forest-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Trees</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.totalTrees || 0}</p>
                      </div>
                                             <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                         <FiHome className="w-6 h-6 text-green-600" />
                       </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Active Campaigns</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.activeCampaigns || 0}</p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <FiTarget className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Members</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.totalMembers || 0}</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <FiUsers className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">CO₂ Sequestered</p>
                        <p className="text-2xl font-bold text-gray-900">{stats?.totalCO2 || 0} kg</p>
                      </div>
                      <div className="w-12 h-12 bg-forest-100 rounded-xl flex items-center justify-center">
                        <FiTrendingUp className="w-6 h-6 text-forest-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Campaign Progress</h3>
                    <ProgressChart data={stats?.campaignProgress || []} />
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm border">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <ActivityFeed activities={stats?.recentActivity || []} />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'campaigns' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Campaigns</h2>
                  <button
                    onClick={() => setShowCreateCampaign(true)}
                    className="bg-forest-600 text-white px-4 py-2 rounded-lg hover:bg-forest-700 transition-colors"
                  >
                    Create Campaign
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {campaigns?.map((campaign) => (
                    <CampaignCard key={campaign.id} campaign={campaign} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'members' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Members</h2>
                  <button
                    onClick={() => setShowInviteMember(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Invite Member
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {members?.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'trees' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <TreeStats organizationId={organization.id} />
              </motion.div>
            )}

            {activeTab === 'analytics' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4">Analytics Dashboard</h3>
                  <p className="text-gray-600">Detailed analytics and insights coming soon...</p>
                </div>
              </motion.div>
            )}

            {activeTab === 'activity' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-xl p-6 shadow-sm border">
                  <h3 className="text-lg font-semibold mb-4">Activity Feed</h3>
                  <ActivityFeed activities={stats?.recentActivity || []} />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Modals */}
        {showCreateCampaign && (
          <CreateCampaignModal
            isOpen={showCreateCampaign}
            onClose={() => setShowCreateCampaign(false)}
            onCreate={createCampaign}
            isLoading={isCreatingCampaign}
          />
        )}

        {showInviteMember && (
          <InviteMemberModal
            isOpen={showInviteMember}
            onClose={() => setShowInviteMember(false)}
            onInvite={inviteMember}
            isLoading={isInvitingMember}
          />
        )}

        {showUploadTrees && (
          <UploadTreesModal
            isOpen={showUploadTrees}
            onClose={() => setShowUploadTrees(false)}
            onUpload={uploadTrees}
            isLoading={isUploadingTrees}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}

// Modal Components
function CreateCampaignModal({ isOpen, onClose, onCreate, isLoading }: any) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    goal: '',
    startDate: '',
    endDate: '',
    area: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Create Campaign</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Campaign Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Goal</label>
            <input
              type="text"
              value={formData.goal}
              onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="e.g., Plant 1000 trees"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Area/Zone</label>
            <input
              type="text"
              value={formData.area}
              onChange={(e) => setFormData({ ...formData, area: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="e.g., Central Park, New York"
              required
            />
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-forest-600 text-white rounded-lg hover:bg-forest-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Creating...' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function InviteMemberModal({ isOpen, onClose, onInvite, isLoading }: any) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('MEMBER');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInvite({ email, role });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Invite Member</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            >
              <option value="MEMBER">Member</option>
              <option value="ADMIN">Admin</option>
              <option value="VENDOR">Vendor</option>
            </select>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Inviting...' : 'Send Invitation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function UploadTreesModal({ isOpen, onClose, onUpload, isLoading }: any) {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">Upload Trees</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CSV File</label>
            <input
              type="file"
              accept=".csv"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Upload a CSV file with tree data (species, location, etc.)
            </p>
          </div>
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading || !file}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Uploading...' : 'Upload Trees'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}