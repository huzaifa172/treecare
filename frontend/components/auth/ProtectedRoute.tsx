'use client';

import { useAuth } from '../../hooks/useAuth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'USER' | 'ADMIN' | 'organization_admin' | 'organization_owner';
  organizationId?: string;
  fallback?: React.ReactNode;
}

export default function ProtectedRoute({ 
  children, 
  requiredRole = 'USER',
  organizationId,
  fallback 
}: ProtectedRouteProps) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const loginUrl = `/login${redirect ? `?redirect=${redirect}` : ''}`;
      router.push(loginUrl);
      toast.error('Please login to access this page');
      return;
    }

    if (!isLoading && isAuthenticated && user) {
      // Check role-based access
      if (requiredRole === 'ADMIN' && user.role !== 'ADMIN') {
        router.push('/dashboard');
        toast.error('Access denied. Admin privileges required.');
        return;
      }

      // For organization-specific routes, check organization membership
      if (organizationId && (requiredRole === 'organization_admin' || requiredRole === 'organization_owner')) {
        // This would need to be implemented with organization membership check
        // For now, we'll assume the user has access if they're authenticated
        // In a real implementation, you'd fetch the user's organization roles
      }
    }
  }, [isLoading, isAuthenticated, user, requiredRole, organizationId, router, redirect]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Show fallback or redirect if not authenticated
  if (!isAuthenticated) {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // Check role-based access
  if (requiredRole === 'ADMIN' && user?.role !== 'ADMIN') {
    return fallback || (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">You don't have permission to access this page.</p>
          <button 
            onClick={() => router.push('/dashboard')}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  // Render children if all checks pass
  return <>{children}</>;
}