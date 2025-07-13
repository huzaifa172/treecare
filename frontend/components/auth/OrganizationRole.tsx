'use client';

import { useOrganization } from '../../hooks/useOrganizations';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

interface OrganizationRoleProps {
  children: React.ReactNode;
  organizationId: string;
  requiredRole: 'member' | 'admin' | 'owner';
  fallback?: React.ReactNode;
}

export default function OrganizationRole({ 
  children, 
  organizationId,
  requiredRole,
  fallback 
}: OrganizationRoleProps) {
  const { user } = useAuth();
  const { data: organizationData, isLoading } = useOrganization(organizationId);
  const router = useRouter();
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    if (!isLoading && organizationData?.data?.organization) {
      const organization = organizationData.data.organization;
      const userRole = organization.members?.find(member => member.id === user?.id)?.role;
      
      let access = false;
      
      switch (requiredRole) {
        case 'owner':
          access = userRole === 'owner';
          break;
        case 'admin':
          access = userRole === 'owner' || userRole === 'admin';
          break;
        case 'member':
          access = userRole === 'owner' || userRole === 'admin' || userRole === 'member';
          break;
      }
      
      setHasAccess(access);
      
      if (!access) {
        toast.error(`Access denied. ${requiredRole} role required.`);
        router.push('/organizations');
      }
    }
  }, [isLoading, organizationData, user, requiredRole, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
          <p className="text-sm text-gray-600">Checking permissions...</p>
        </div>
      </div>
    );
  }

  // Show fallback if no access
  if (!hasAccess) {
    return fallback || (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-4xl mb-2">🚫</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Access Denied</h3>
          <p className="text-sm text-gray-600 mb-3">
            You need {requiredRole} role to access this feature.
          </p>
          <button 
            onClick={() => router.push('/organizations')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
          >
            Back to Organizations
          </button>
        </div>
      </div>
    );
  }

  // Render children if access is granted
  return <>{children}</>;
}