'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { treeAPI, type TreeRegistrationData, type CareLogData, type Tree, type CareLog } from '../lib/trees';
import { toast } from 'react-hot-toast';

export const useUserTrees = (params?: { page?: number; limit?: number; status?: string; species?: string }) => {
  return useQuery({
    queryKey: ['trees', 'user', params],
    queryFn: () => treeAPI.getUserTrees(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useTree = (id: string) => {
  return useQuery({
    queryKey: ['trees', id],
    queryFn: () => treeAPI.getTree(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useRegisterTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.registerTree,
    onSuccess: (data) => {
      // Invalidate and refetch user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      // Show success message with points earned
      toast.success(`${data.message} +${data.data.pointsEarned} points earned!`);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to register tree');
    },
  });
};

export const useUpdateTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Tree> }) =>
      treeAPI.updateTree(id, data),
    onSuccess: (data, variables) => {
      // Update specific tree in cache
      queryClient.setQueryData(['trees', variables.id], data);
      
      // Invalidate user trees list
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update tree');
    },
  });
};

export const useSubmitCareLog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, data }: { treeId: string; data: CareLogData }) =>
      treeAPI.submitCareLog(treeId, data),
    onSuccess: (data, variables) => {
      // Invalidate tree details and care logs
      queryClient.invalidateQueries({ queryKey: ['trees', variables.treeId] });
      queryClient.invalidateQueries({ queryKey: ['trees', variables.treeId, 'care-logs'] });
      
      // Invalidate user trees list
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      // Show success message with points earned
      toast.success(`${data.message} +${data.data.careLog.pointsEarned} points earned!`);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to submit care log');
    },
  });
};

export const useCareLogs = (treeId: string, params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ['trees', treeId, 'care-logs', params],
    queryFn: () => treeAPI.getCareLogs(treeId, params),
    enabled: !!treeId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useAdoptableTrees = (params?: { latitude?: number; longitude?: number; radius?: number }) => {
  return useQuery({
    queryKey: ['trees', 'adoptable', params],
    queryFn: () => treeAPI.getAdoptableTrees(params),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useAdoptTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.adoptTree,
    onSuccess: (data, treeId) => {
      // Invalidate adoptable trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'adoptable'] });
      
      // Invalidate user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      // Show success message with points earned
      toast.success(`${data.message} +${data.data.pointsEarned} points earned!`);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to adopt tree');
    },
  });
};

export const useTransferTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, newGuardianId }: { treeId: string; newGuardianId: string }) =>
      treeAPI.transferTree(treeId, newGuardianId),
    onSuccess: (data) => {
      // Invalidate user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to transfer tree');
    },
  });
};

export const useDeleteTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.deleteTree,
    onSuccess: (data, treeId) => {
      // Remove tree from cache
      queryClient.removeQueries({ queryKey: ['trees', treeId] });
      
      // Invalidate user trees list
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
      
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete tree');
    },
  });
};