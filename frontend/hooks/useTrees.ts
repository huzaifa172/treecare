'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { treeAPI, type Tree, type TreeRegistrationData, type CareLogData } from '../lib/trees';

export const useUserTrees = (params?: { page?: number; limit?: number; status?: string; species?: string }) => {
  return useQuery({
    queryKey: ['trees', 'user', params],
    queryFn: () => treeAPI.getUserTrees(params),
    staleTime: 1000 * 60 * 2, // 2 minutes
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
    onSuccess: () => {
      // Invalidate and refetch user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
    },
  });
};

export const useUpdateTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Tree> }) => treeAPI.updateTree(id, data),
    onSuccess: (data, variables) => {
      // Update specific tree in cache
      queryClient.setQueryData(['trees', variables.id], data);
      // Invalidate user trees list
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
    },
  });
};

export const useSubmitCareLog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, data }: { treeId: string; data: CareLogData }) => treeAPI.submitCareLog(treeId, data),
    onSuccess: (data, variables) => {
      // Invalidate tree details and care logs
      queryClient.invalidateQueries({ queryKey: ['trees', variables.treeId] });
      queryClient.invalidateQueries({ queryKey: ['trees', variables.treeId, 'care-logs'] });
      // Invalidate user trees list
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
    },
  });
};

export const useCareLogs = (treeId: string, params?: { page?: number; limit?: number }) => {
  return useQuery({
    queryKey: ['trees', treeId, 'care-logs', params],
    queryFn: () => treeAPI.getCareLogs(treeId, params),
    enabled: !!treeId,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

export const useAdoptableTrees = (params?: { latitude?: number; longitude?: number; radius?: number }) => {
  return useQuery({
    queryKey: ['trees', 'adoptable', params],
    queryFn: () => treeAPI.getAdoptableTrees(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useAdoptTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.adoptTree,
    onSuccess: (data, variables) => {
      // Invalidate adoptable trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'adoptable'] });
      // Invalidate user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
    },
  });
};

export const useTransferTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, newGuardianId }: { treeId: string; newGuardianId: string }) => 
      treeAPI.transferTree(treeId, newGuardianId),
    onSuccess: (data, variables) => {
      // Invalidate user trees
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
    },
  });
};

export const useDeleteTree = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: treeAPI.deleteTree,
    onSuccess: (data, variables) => {
      // Remove tree from cache
      queryClient.removeQueries({ queryKey: ['trees', variables] });
      // Invalidate user trees list
      queryClient.invalidateQueries({ queryKey: ['trees', 'user'] });
    },
  });
};