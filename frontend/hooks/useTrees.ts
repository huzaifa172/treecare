'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { treeAPI } from '@/lib/trees';
import { toast } from 'react-hot-toast';

// Hook for getting user's trees
export const useUserTrees = (params?: { page?: number; limit?: number; status?: string; species?: string }) => {
  return useQuery({
    queryKey: ['user-trees', params],
    queryFn: () => treeAPI.getUserTrees(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for getting a specific tree
export const useTree = (id: string) => {
  return useQuery({
    queryKey: ['tree', id],
    queryFn: () => treeAPI.getTree(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

// Hook for getting assigned trees (for vendors/field agents)
export const useAssignedTrees = () => {
  return useQuery({
    queryKey: ['assigned-trees'],
    queryFn: () => treeAPI.getAssignedTrees(),
    staleTime: 2 * 60 * 1000, // 2 minutes for real-time updates
  });
};

// Hook for tree registration
export const useRegisterTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.registerTree,
    onSuccess: (data) => {
      toast.success(`Tree registered successfully! +${data.data.pointsEarned} points earned`);
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to register tree');
    },
  });
};

// Hook for updating tree
export const useUpdateTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => treeAPI.updateTree(id, data),
    onSuccess: (data, variables) => {
      toast.success('Tree updated successfully');
      queryClient.invalidateQueries({ queryKey: ['tree', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update tree');
    },
  });
};

// Hook for submitting care log
export const useSubmitCareLog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, data }: { treeId: string; data: any }) => treeAPI.submitCareLog(treeId, data),
    onSuccess: (data) => {
      toast.success(`Care log submitted! +${data.data.careLog.pointsEarned} points earned`);
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
      queryClient.invalidateQueries({ queryKey: ['care-logs'] });
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to submit care log');
    },
  });
};

// Hook for updating tree care (for vendors/field agents)
export const useUpdateTreeCare = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.updateTreeCare,
    onSuccess: () => {
      toast.success('Tree care updated successfully');
      queryClient.invalidateQueries({ queryKey: ['assigned-trees'] });
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update tree care');
    },
  });
};

// Hook for getting care logs
export const useCareLogs = (treeId: string, params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ['care-logs', treeId, params],
    queryFn: () => treeAPI.getCareLogs(treeId, params),
    enabled: !!treeId,
    staleTime: 2 * 60 * 1000,
  });
};

// Hook for getting adoptable trees
export const useAdoptableTrees = (params?: { latitude?: number; longitude?: number; radius?: number }) => {
  return useQuery({
    queryKey: ['adoptable-trees', params],
    queryFn: () => treeAPI.getAdoptableTrees(params),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Hook for adopting a tree
export const useAdoptTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.adoptTree,
    onSuccess: (data) => {
      toast.success(`Tree adopted successfully! +${data.data.pointsEarned} points earned`);
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
      queryClient.invalidateQueries({ queryKey: ['adoptable-trees'] });
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to adopt tree');
    },
  });
};

// Hook for transferring a tree
export const useTransferTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, newGuardianId }: { treeId: string; newGuardianId: string }) => 
      treeAPI.transferTree(treeId, newGuardianId),
    onSuccess: () => {
      toast.success('Transfer request sent successfully');
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to transfer tree');
    },
  });
};

// Hook for deleting a tree
export const useDeleteTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.deleteTree,
    onSuccess: () => {
      toast.success('Tree deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['user-trees'] });
      queryClient.invalidateQueries({ queryKey: ['user-stats'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete tree');
    },
  });
};