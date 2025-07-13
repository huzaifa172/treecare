import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { organizationApi } from '../lib/api/organization';
import { toast } from 'react-hot-toast';

export interface Organization {
  id: string;
  name: string;
  description?: string;
  website?: string;
  logo?: string;
  address?: string;
  phone?: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Campaign {
  id: string;
  name: string;
  description: string;
  goal: string;
  startDate: string;
  endDate: string;
  area: string;
  status: 'ACTIVE' | 'COMPLETED' | 'PLANNED';
  progress: number;
  organizationId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Member {
  id: string;
  email: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER' | 'VENDOR';
  status: 'ACTIVE' | 'PENDING' | 'INACTIVE';
  joinedAt: string;
  user?: {
    id: string;
    name: string;
    avatar?: string;
  };
}

export interface OrganizationStats {
  totalTrees: number;
  activeCampaigns: number;
  totalMembers: number;
  totalCO2: number;
  campaignProgress: Array<{
    campaignId: string;
    campaignName: string;
    progress: number;
    goal: number;
    current: number;
  }>;
  recentActivity: Array<{
    id: string;
    type: string;
    description: string;
    timestamp: string;
    userId?: string;
    userName?: string;
  }>;
}

export function useOrganization() {
  const queryClient = useQueryClient();

  // Get organization details
  const {
    data: organization,
    isLoading: isLoadingOrg,
    error: orgError
  } = useQuery({
    queryKey: ['organization'],
    queryFn: organizationApi.getOrganization,
    retry: 1
  });

  // Get campaigns
  const {
    data: campaigns,
    isLoading: isLoadingCampaigns
  } = useQuery({
    queryKey: ['campaigns'],
    queryFn: organizationApi.getCampaigns,
    enabled: !!organization?.id
  });

  // Get members
  const {
    data: members,
    isLoading: isLoadingMembers
  } = useQuery({
    queryKey: ['members'],
    queryFn: organizationApi.getMembers,
    enabled: !!organization?.id
  });

  // Get stats
  const {
    data: stats,
    isLoading: isLoadingStats
  } = useQuery({
    queryKey: ['organization-stats'],
    queryFn: organizationApi.getStats,
    enabled: !!organization?.id
  });

  // Create campaign mutation
  const createCampaignMutation = useMutation({
    mutationFn: organizationApi.createCampaign,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['campaigns'] });
      queryClient.invalidateQueries({ queryKey: ['organization-stats'] });
      toast.success('Campaign created successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create campaign');
    }
  });

  // Invite member mutation
  const inviteMemberMutation = useMutation({
    mutationFn: organizationApi.inviteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      toast.success('Invitation sent successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to send invitation');
    }
  });

  // Upload trees mutation
  const uploadTreesMutation = useMutation({
    mutationFn: organizationApi.uploadTrees,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization-stats'] });
      toast.success('Trees uploaded successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to upload trees');
    }
  });

  // Update organization mutation
  const updateOrganizationMutation = useMutation({
    mutationFn: organizationApi.updateOrganization,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organization'] });
      toast.success('Organization updated successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update organization');
    }
  });

  // Remove member mutation
  const removeMemberMutation = useMutation({
    mutationFn: organizationApi.removeMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      toast.success('Member removed successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to remove member');
    }
  });

  // Update member role mutation
  const updateMemberRoleMutation = useMutation({
    mutationFn: organizationApi.updateMemberRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      toast.success('Member role updated successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update member role');
    }
  });

  return {
    // Data
    organization,
    campaigns,
    members,
    stats,
    
    // Loading states
    isLoading: isLoadingOrg || isLoadingCampaigns || isLoadingMembers || isLoadingStats,
    isLoadingOrg,
    isLoadingCampaigns,
    isLoadingMembers,
    isLoadingStats,
    
    // Mutation loading states
    isCreatingCampaign: createCampaignMutation.isPending,
    isInvitingMember: inviteMemberMutation.isPending,
    isUploadingTrees: uploadTreesMutation.isPending,
    isUpdatingOrg: updateOrganizationMutation.isPending,
    isRemovingMember: removeMemberMutation.isPending,
    isUpdatingMemberRole: updateMemberRoleMutation.isPending,
    
    // Actions
    createCampaign: createCampaignMutation.mutate,
    inviteMember: inviteMemberMutation.mutate,
    uploadTrees: uploadTreesMutation.mutate,
    updateOrganization: updateOrganizationMutation.mutate,
    removeMember: removeMemberMutation.mutate,
    updateMemberRole: updateMemberRoleMutation.mutate,
    
    // Errors
    error: orgError
  };
}