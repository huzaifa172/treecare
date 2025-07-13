'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { organizationAPI, type OrganizationData, type CampaignData, type MemberInviteData } from '../lib/organizations';
import { toast } from 'react-hot-toast';

export const useUserOrganizations = () => {
  return useQuery({
    queryKey: ['organizations', 'user'],
    queryFn: () => organizationAPI.getUserOrganizations(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useOrganization = (id: string) => {
  return useQuery({
    queryKey: ['organizations', id],
    queryFn: () => organizationAPI.getOrganization(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateOrganization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: organizationAPI.createOrganization,
    onSuccess: (data) => {
      // Invalidate user organizations
      queryClient.invalidateQueries({ queryKey: ['organizations', 'user'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create organization');
    },
  });
};

export const useUpdateOrganization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<OrganizationData> }) =>
      organizationAPI.updateOrganization(id, data),
    onSuccess: (data, variables) => {
      // Update specific organization in cache
      queryClient.setQueryData(['organizations', variables.id], data);
      
      // Invalidate user organizations list
      queryClient.invalidateQueries({ queryKey: ['organizations', 'user'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update organization');
    },
  });
};

export const useDeleteOrganization = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: organizationAPI.deleteOrganization,
    onSuccess: (data, organizationId) => {
      // Remove organization from cache
      queryClient.removeQueries({ queryKey: ['organizations', organizationId] });
      
      // Invalidate user organizations list
      queryClient.invalidateQueries({ queryKey: ['organizations', 'user'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete organization');
    },
  });
};

export const useOrganizationCampaigns = (organizationId: string) => {
  return useQuery({
    queryKey: ['organizations', organizationId, 'campaigns'],
    queryFn: () => organizationAPI.getOrganizationCampaigns(organizationId),
    enabled: !!organizationId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateCampaign = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ organizationId, data }: { organizationId: string; data: CampaignData }) =>
      organizationAPI.createCampaign(organizationId, data),
    onSuccess: (data, variables) => {
      // Invalidate organization campaigns
      queryClient.invalidateQueries({ queryKey: ['organizations', variables.organizationId, 'campaigns'] });
      
      // Invalidate organization details
      queryClient.invalidateQueries({ queryKey: ['organizations', variables.organizationId] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create campaign');
    },
  });
};

export const useOrganizationMembers = (organizationId: string) => {
  return useQuery({
    queryKey: ['organizations', organizationId, 'members'],
    queryFn: () => organizationAPI.getOrganizationMembers(organizationId),
    enabled: !!organizationId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useInviteMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ organizationId, data }: { organizationId: string; data: MemberInviteData }) =>
      organizationAPI.inviteMember(organizationId, data),
    onSuccess: (data, variables) => {
      // Invalidate organization members
      queryClient.invalidateQueries({ queryKey: ['organizations', variables.organizationId, 'members'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to invite member');
    },
  });
};

export const useUpdateMemberRole = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ organizationId, memberId, role }: { organizationId: string; memberId: string; role: 'admin' | 'member' }) =>
      organizationAPI.updateMemberRole(organizationId, memberId, role),
    onSuccess: (data, variables) => {
      // Invalidate organization members
      queryClient.invalidateQueries({ queryKey: ['organizations', variables.organizationId, 'members'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update member role');
    },
  });
};

export const useRemoveMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ organizationId, memberId }: { organizationId: string; memberId: string }) =>
      organizationAPI.removeMember(organizationId, memberId),
    onSuccess: (data, variables) => {
      // Invalidate organization members
      queryClient.invalidateQueries({ queryKey: ['organizations', variables.organizationId, 'members'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to remove member');
    },
  });
};

export const useBulkUploadTrees = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ organizationId, file }: { organizationId: string; file: File }) =>
      organizationAPI.bulkUploadTrees(organizationId, file),
    onSuccess: (data, variables) => {
      // Invalidate organization details
      queryClient.invalidateQueries({ queryKey: ['organizations', variables.organizationId] });
      
      // Invalidate user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      toast.success(`${data.message} - ${data.data.uploaded} trees uploaded successfully`);
      
      if (data.data.errors.length > 0) {
        toast.error(`${data.data.errors.length} errors occurred during upload`);
      }
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to upload trees');
    },
  });
};