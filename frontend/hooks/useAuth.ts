'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authAPI, authStorage, type LoginCredentials, type SignupData, type User } from '../lib/auth';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      // Store token and user data
      authStorage.setToken(data.data.token);
      authStorage.setUser(data.data.user);
      
      // Update cache
      queryClient.setQueryData(['user'], data.data.user);
      
      // Show success message
      toast.success(data.message);
      
      // Redirect to dashboard
      router.push('/dashboard');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Login failed');
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
      authStorage.setToken(data.data.token);
      authStorage.setUser(data.data.user);
      
      // Update cache
      queryClient.setQueryData(['user'], data.data.user);
      
      // Show success message
      toast.success(data.message);
      
      // Redirect to dashboard
      router.push('/dashboard');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Signup failed');
    },
  });
};

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authAPI.forgotPassword,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to send reset email');
    },
  });
};

export const useResetPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      authAPI.resetPassword(token, password),
    onSuccess: (data) => {
      toast.success(data.message);
      router.push('/login');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to reset password');
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
      
      // Show success message
      toast.success('Logged out successfully');
      
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
    retry: (failureCount, error: any) => {
      if (error.statusCode === 401) {
        // Clear invalid token
        authStorage.clear();
        return false;
      }
      return failureCount < 3;
    },
  });
};

export const useAuth = () => {
  const { data: user, isLoading, error } = useCurrentUser();
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const forgotPasswordMutation = useForgotPassword();
  const resetPasswordMutation = useResetPassword();
  const logoutMutation = useLogout();

  return {
    user,
    isLoading,
    error,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
    signup: signupMutation.mutate,
    forgotPassword: forgotPasswordMutation.mutate,
    resetPassword: resetPasswordMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginLoading: loginMutation.isPending,
    isSignupLoading: signupMutation.isPending,
    isForgotPasswordLoading: forgotPasswordMutation.isPending,
    isResetPasswordLoading: resetPasswordMutation.isPending,
    isLogoutLoading: logoutMutation.isPending,
  };
};