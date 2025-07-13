// Types
export interface Organization {
  id: string;
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  contactEmail: string;
  contactPhone?: string;
  address: string;
  createdAt: string;
  ownerId: string;
  memberCount: number;
  totalTrees: number;
  totalCampaigns: number;
  role?: 'owner' | 'admin' | 'member';
}

export interface Campaign {
  id: string;
  organizationId: string;
  name: string;
  description: string;
  targetTrees: number;
  plantedTrees: number;
  status: 'active' | 'completed' | 'paused';
  startDate: string;
  endDate: string;
  location?: {
    area: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  budget?: number;
  progress: number;
  vendors?: Array<{
    id: string;
    name: string;
    assignedTrees: number;
    completedTrees: number;
  }>;
}

export interface OrganizationMember {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: string;
  treesContributed: number;
}

export interface OrganizationData {
  name: string;
  description: string;
  logoUrl?: string;
  website?: string;
  contactEmail: string;
  contactPhone?: string;
  address: string;
}

export interface CampaignData {
  name: string;
  description: string;
  targetTrees: number;
  startDate: string;
  endDate: string;
  location?: {
    area: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  budget?: number;
}

export interface MemberInviteData {
  email: string;
  role: 'admin' | 'member';
}

export interface APIResponse<T> {
  success: boolean;
  message: string;
  data: T;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  message: string;
  data: {
    [key: string]: T[] | {
      currentPage: number;
      totalPages: number;
      totalItems: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
  timestamp: string;
}

// API Functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public error?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

const getAuthHeaders = () => {
  const token = localStorage.getItem('auth_token');
  return {
    'Authorization': `Bearer ${token}`,
  };
};

const handleResponse = async (response: Response): Promise<any> => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new APIError(
      data.message || 'An error occurred',
      response.status,
      data.error
    );
  }
  
  return data;
};

export const organizationAPI = {
  // Create organization
  async createOrganization(data: OrganizationData): Promise<APIResponse<{ organization: Organization }>> {
    const response = await fetch(`${API_BASE_URL}/organizations`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  // Get user's organizations
  async getUserOrganizations(): Promise<APIResponse<{ organizations: Organization[] }>> {
    const response = await fetch(`${API_BASE_URL}/organizations`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get organization details
  async getOrganization(id: string): Promise<APIResponse<{ 
    organization: Organization & {
      campaigns: Campaign[];
      members: OrganizationMember[];
    };
  }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${id}`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Create campaign
  async createCampaign(organizationId: string, data: CampaignData): Promise<APIResponse<{ campaign: Campaign }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/campaigns`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  // Get organization campaigns
  async getOrganizationCampaigns(organizationId: string): Promise<APIResponse<{ campaigns: Campaign[] }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/campaigns`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Invite member
  async inviteMember(organizationId: string, data: MemberInviteData): Promise<APIResponse<{ invitation: any }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/members`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  // Get organization members
  async getOrganizationMembers(organizationId: string): Promise<APIResponse<{ members: OrganizationMember[] }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/members`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Update member role
  async updateMemberRole(organizationId: string, memberId: string, role: 'admin' | 'member'): Promise<APIResponse<{ member: OrganizationMember }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/members/${memberId}`, {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ role }),
    });

    return handleResponse(response);
  },

  // Remove member
  async removeMember(organizationId: string, memberId: string): Promise<APIResponse<null>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/members/${memberId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Bulk upload trees
  async bulkUploadTrees(organizationId: string, file: File): Promise<APIResponse<{ 
    uploaded: number; 
    errors: string[]; 
    trees: any[] 
  }>> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/organizations/${organizationId}/bulk-upload`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    });

    return handleResponse(response);
  },

  // Update organization
  async updateOrganization(id: string, data: Partial<OrganizationData>): Promise<APIResponse<{ organization: Organization }>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${id}`, {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  // Delete organization
  async deleteOrganization(id: string): Promise<APIResponse<null>> {
    const response = await fetch(`${API_BASE_URL}/organizations/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },
};