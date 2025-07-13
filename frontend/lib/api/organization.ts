import { apiClient } from './client';
import { Organization, Campaign, Member, OrganizationStats } from '../../hooks/useOrganization';

export interface CreateCampaignData {
  name: string;
  description: string;
  goal: string;
  startDate: string;
  endDate: string;
  area: string;
}

export interface InviteMemberData {
  email: string;
  role: 'MEMBER' | 'ADMIN' | 'VENDOR';
}

export interface UpdateMemberRoleData {
  memberId: string;
  role: 'MEMBER' | 'ADMIN' | 'VENDOR';
}

export interface UpdateOrganizationData {
  name?: string;
  description?: string;
  website?: string;
  address?: string;
  phone?: string;
  email?: string;
}

export const organizationApi = {
  // Get organization details
  getOrganization: async (): Promise<Organization> => {
    const response = await apiClient.get('/organizations/me');
    return response.data;
  },

  // Update organization
  updateOrganization: async (data: UpdateOrganizationData): Promise<Organization> => {
    const response = await apiClient.put('/organizations/me', data);
    return response.data;
  },

  // Get campaigns
  getCampaigns: async (): Promise<Campaign[]> => {
    const response = await apiClient.get('/organizations/me/campaigns');
    return response.data;
  },

  // Create campaign
  createCampaign: async (data: CreateCampaignData): Promise<Campaign> => {
    const response = await apiClient.post('/organizations/me/campaigns', data);
    return response.data;
  },

  // Get members
  getMembers: async (): Promise<Member[]> => {
    const response = await apiClient.get('/organizations/me/members');
    return response.data;
  },

  // Invite member
  inviteMember: async (data: InviteMemberData): Promise<{ message: string }> => {
    const response = await apiClient.post('/organizations/me/members/invite', data);
    return response.data;
  },

  // Remove member
  removeMember: async (memberId: string): Promise<{ message: string }> => {
    const response = await apiClient.delete(`/organizations/me/members/${memberId}`);
    return response.data;
  },

  // Update member role
  updateMemberRole: async (data: UpdateMemberRoleData): Promise<Member> => {
    const response = await apiClient.put(`/organizations/me/members/${data.memberId}/role`, {
      role: data.role
    });
    return response.data;
  },

  // Get organization stats
  getStats: async (): Promise<OrganizationStats> => {
    const response = await apiClient.get('/organizations/me/stats');
    return response.data;
  },

  // Upload trees (CSV)
  uploadTrees: async (file: File): Promise<{ message: string; count: number }> => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post('/organizations/me/trees/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Get organization trees
  getTrees: async (params?: {
    page?: number;
    limit?: number;
    status?: string;
    species?: string;
  }): Promise<{
    trees: any[];
    total: number;
    page: number;
    limit: number;
  }> => {
    const response = await apiClient.get('/organizations/me/trees', { params });
    return response.data;
  },

  // Get organization activities
  getActivities: async (params?: {
    page?: number;
    limit?: number;
    type?: string;
  }): Promise<{
    activities: any[];
    total: number;
    page: number;
    limit: number;
  }> => {
    const response = await apiClient.get('/organizations/me/activities', { params });
    return response.data;
  }
};