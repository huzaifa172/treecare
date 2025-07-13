'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { aiAPI, type AIInsight, type AIRecommendation, type AIAnalytics } from '../lib/ai';
import { toast } from 'react-hot-toast';

export const useAnalyzeTreeHealth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId, updateData }: { treeId: string; updateData: any }) =>
      aiAPI.analyzeTreeHealth(treeId, updateData),
    onSuccess: (data) => {
      toast.success('Tree health analysis completed!');
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['trees'] });
      queryClient.invalidateQueries({ queryKey: ['ai-insights'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to analyze tree health');
    },
  });
};

export const useGenerateCareRecommendations = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId }: { treeId?: string }) =>
      aiAPI.generateCareRecommendations(treeId),
    onSuccess: (data) => {
      toast.success('Care recommendations generated!');
      // Invalidate recommendations
      queryClient.invalidateQueries({ queryKey: ['ai-recommendations'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to generate recommendations');
    },
  });
};

export const usePredictGrowthAndImpact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ treeId }: { treeId: string }) =>
      aiAPI.predictGrowthAndImpact(treeId),
    onSuccess: (data) => {
      toast.success('Growth prediction completed!');
      // Invalidate related queries
      queryClient.invalidateQueries({ queryKey: ['trees'] });
      queryClient.invalidateQueries({ queryKey: ['ai-insights'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to predict growth');
    },
  });
};

export const useGenerateEnvironmentalReport = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ timeframe }: { timeframe: 'week' | 'month' | 'year' }) =>
      aiAPI.generateEnvironmentalReport(timeframe),
    onSuccess: (data) => {
      toast.success('Environmental report generated!');
      // Invalidate insights
      queryClient.invalidateQueries({ queryKey: ['ai-insights'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to generate environmental report');
    },
  });
};

export const useCreateCareSchedule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => aiAPI.createCareSchedule(),
    onSuccess: (data) => {
      toast.success('Care schedule created!');
      // Invalidate recommendations
      queryClient.invalidateQueries({ queryKey: ['ai-recommendations'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create care schedule');
    },
  });
};

export const useUserInsights = (limit: number = 10) => {
  return useQuery({
    queryKey: ['ai-insights', limit],
    queryFn: () => aiAPI.getUserInsights(limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: (failureCount, error: any) => {
      if (error.statusCode === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useUserRecommendations = (limit: number = 10) => {
  return useQuery({
    queryKey: ['ai-recommendations', limit],
    queryFn: () => aiAPI.getUserRecommendations(limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: (failureCount, error: any) => {
      if (error.statusCode === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useMarkRecommendationRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string }) => aiAPI.markRecommendationRead(id),
    onSuccess: () => {
      // Invalidate recommendations
      queryClient.invalidateQueries({ queryKey: ['ai-recommendations'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to mark recommendation as read');
    },
  });
};

export const useApplyRecommendation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id }: { id: string }) => aiAPI.applyRecommendation(id),
    onSuccess: () => {
      toast.success('Recommendation applied successfully!');
      // Invalidate recommendations
      queryClient.invalidateQueries({ queryKey: ['ai-recommendations'] });
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to apply recommendation');
    },
  });
};

export const useAIAnalytics = () => {
  return useQuery({
    queryKey: ['ai-analytics'],
    queryFn: () => aiAPI.getAIAnalytics(),
    staleTime: 1000 * 60 * 10, // 10 minutes
    retry: (failureCount, error: any) => {
      if (error.statusCode === 401) {
        return false;
      }
      return failureCount < 3;
    },
  });
};

// Combined AI hook for easy access
export const useAI = () => {
  const analyzeTreeHealth = useAnalyzeTreeHealth();
  const generateCareRecommendations = useGenerateCareRecommendations();
  const predictGrowthAndImpact = usePredictGrowthAndImpact();
  const generateEnvironmentalReport = useGenerateEnvironmentalReport();
  const createCareSchedule = useCreateCareSchedule();
  const markRecommendationRead = useMarkRecommendationRead();
  const applyRecommendation = useApplyRecommendation();

  const { data: insights, isLoading: insightsLoading } = useUserInsights();
  const { data: recommendations, isLoading: recommendationsLoading } = useUserRecommendations();
  const { data: analytics, isLoading: analyticsLoading } = useAIAnalytics();

  return {
    // Mutations
    analyzeTreeHealth: analyzeTreeHealth.mutate,
    generateCareRecommendations: generateCareRecommendations.mutate,
    predictGrowthAndImpact: predictGrowthAndImpact.mutate,
    generateEnvironmentalReport: generateEnvironmentalReport.mutate,
    createCareSchedule: createCareSchedule.mutate,
    markRecommendationRead: markRecommendationRead.mutate,
    applyRecommendation: applyRecommendation.mutate,

    // Loading states
    isAnalyzingHealth: analyzeTreeHealth.isPending,
    isGeneratingRecommendations: generateCareRecommendations.isPending,
    isPredictingGrowth: predictGrowthAndImpact.isPending,
    isGeneratingReport: generateEnvironmentalReport.isPending,
    isCreatingSchedule: createCareSchedule.isPending,
    isMarkingRead: markRecommendationRead.isPending,
    isApplyingRecommendation: applyRecommendation.isPending,

    // Data
    insights: insights?.data || [],
    recommendations: recommendations?.data || [],
    analytics: analytics?.data,

    // Loading states for queries
    insightsLoading,
    recommendationsLoading,
    analyticsLoading,
  };
};