// Types
export interface Tree {
  id: string;
  species: string;
  qrCode: string;
  photoUrl: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  plantedAt: string;
  lastCareAt?: string;
  healthScore: number;
  status: 'active' | 'inactive' | 'adopted';
  careLogs: number;
  totalPoints: number;
  guardianId?: string;
  guardian?: {
    id: string;
    name: string;
    avatar: string;
  };
  milestones?: Array<{
    type: string;
    achievedAt: string;
    pointsEarned: number;
  }>;
}

export interface CareLog {
  id: string;
  treeId: string;
  type: 'watering' | 'pruning' | 'fertilizing' | 'pest_control' | 'other';
  description: string;
  photoUrl?: string;
  createdAt: string;
  pointsEarned: number;
  guardian?: {
    id: string;
    name: string;
    avatar: string;
  };
}

export interface AdoptableTree {
  id: string;
  species: string;
  photoUrl: string;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  plantedAt: string;
  previousGuardian: string;
  reasonForAdoption: string;
  healthScore: number;
}

export interface TreeRegistrationData {
  species: string;
  latitude: number;
  longitude: number;
  address: string;
  photo: File;
}

export interface CareLogData {
  type: string;
  description: string;
  photo?: File;
}

export interface TransferRequest {
  treeId: string;
  newGuardianId: string;
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

export const treeAPI = {
  // Get user's trees
  async getUserTrees(params?: { page?: number; limit?: number; status?: string; species?: string }): Promise<PaginatedResponse<Tree>> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.status) searchParams.append('status', params.status);
    if (params?.species) searchParams.append('species', params.species);

    const response = await fetch(`${API_BASE_URL}/trees?${searchParams}`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get specific tree
  async getTree(id: string): Promise<APIResponse<{ tree: Tree }>> {
    const response = await fetch(`${API_BASE_URL}/trees/${id}`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Register new tree
  async registerTree(data: TreeRegistrationData): Promise<APIResponse<{ tree: Tree; pointsEarned: number }>> {
    const formData = new FormData();
    formData.append('species', data.species);
    formData.append('latitude', data.latitude.toString());
    formData.append('longitude', data.longitude.toString());
    formData.append('address', data.address);
    formData.append('photo', data.photo);

    const response = await fetch(`${API_BASE_URL}/trees`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    });

    return handleResponse(response);
  },

  // Update tree
  async updateTree(id: string, data: Partial<Tree>): Promise<APIResponse<{ tree: Tree }>> {
    const response = await fetch(`${API_BASE_URL}/trees/${id}`, {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  // Submit care log
  async submitCareLog(treeId: string, data: CareLogData): Promise<APIResponse<{ careLog: CareLog; treeHealthUpdate: { healthScore: number; lastCareAt: string } }>> {
    const formData = new FormData();
    formData.append('type', data.type);
    formData.append('description', data.description);
    if (data.photo) {
      formData.append('photo', data.photo);
    }

    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/care`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData,
    });

    return handleResponse(response);
  },

  // Get care logs
  async getCareLogs(treeId: string, params?: { page?: number; limit?: number }): Promise<PaginatedResponse<CareLog>> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/care-logs?${searchParams}`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get adoptable trees
  async getAdoptableTrees(params?: { latitude?: number; longitude?: number; radius?: number }): Promise<APIResponse<{ adoptableTrees: AdoptableTree[] }>> {
    const searchParams = new URLSearchParams();
    if (params?.latitude) searchParams.append('latitude', params.latitude.toString());
    if (params?.longitude) searchParams.append('longitude', params.longitude.toString());
    if (params?.radius) searchParams.append('radius', params.radius.toString());

    const response = await fetch(`${API_BASE_URL}/trees/adoptable?${searchParams}`);

    return handleResponse(response);
  },

  // Adopt tree
  async adoptTree(treeId: string): Promise<APIResponse<{ tree: Tree; pointsEarned: number }>> {
    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/adopt`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Transfer tree
  async transferTree(treeId: string, newGuardianId: string): Promise<APIResponse<{ transferRequest: any }>> {
    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/transfer`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newGuardianId }),
    });

    return handleResponse(response);
  },

  // Delete tree
  async deleteTree(treeId: string): Promise<APIResponse<null>> {
    const response = await fetch(`${API_BASE_URL}/trees/${treeId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get assigned trees for vendors/field agents
  async getAssignedTrees(): Promise<APIResponse<{ assignedTrees: Tree[] }>> {
    const response = await fetch(`${API_BASE_URL}/trees/assigned`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Update tree care (for vendors/field agents)
  async updateTreeCare(data: {
    treeId: string;
    healthStatus: string;
    notes: string;
    photoUrl: string;
    gpsLocation?: { lat: number; lng: number };
    careChecklist?: string[];
  }): Promise<APIResponse<{ treeUpdate: any }>> {
    const response = await fetch(`${API_BASE_URL}/trees/${data.treeId}/care`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },
};