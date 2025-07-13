'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authAPI, authStorage, type LoginCredentials, type SignupData, type User } from '../lib/auth';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      // Store token and user data
      authStorage.setToken(data.token);
      authStorage.setUser(data.user);
      
      // Update cache
      queryClient.setQueryData(['user'], data.user);
      
      // Redirect to dashboard
      router.push('/dashboard');
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      // Store token and user data
      authStorage.setToken(data.token);
      authStorage.setUser(data.user);
      
      // Update cache
      queryClient.setQueryData(['user'], data.user);
      
      // Redirect to dashboard
      router.push('/dashboard');
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authAPI.logout,
    onSuccess: () => {
      // Clear storage
      authStorage.clear();
      
      // Clear cache
      queryClient.clear();
      
      // Redirect to home
      router.push('/');
    },
  });
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: authAPI.getCurrentUser,
    enabled: !!authStorage.getToken(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useAuth = () => {
  const { data: user, isLoading, error } = useCurrentUser();
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const logoutMutation = useLogout();

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isSignupLoading: signupMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
  };
};