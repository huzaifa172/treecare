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

// API Functions
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const getAuthHeaders = () => {
  const token = localStorage.getItem('auth_token');
  return {
    'Authorization': `Bearer ${token}`,
  };
};

export const treeAPI = {
  // Get user's trees
  async getUserTrees(params?: { page?: number; limit?: number; status?: string; species?: string }) {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.status) searchParams.append('status', params.status);
    if (params?.species) searchParams.append('species', params.species);

    const response = await fetch(`${API_BASE_URL}/trees?${searchParams}`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch trees');
    }

    return response.json();
  },

  // Get specific tree
  async getTree(id: string) {
    const response = await fetch(`${API_BASE_URL}/trees/${id}`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tree');
    }

    return response.json();
  },

  // Register new tree
  async registerTree(data: TreeRegistrationData) {
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

    if (!response.ok) {
      throw new Error('Failed to register tree');
    }

    return response.json();
  },

  // Update tree
  async updateTree(id: string, data: Partial<Tree>) {
    const response = await fetch(`${API_BASE_URL}/trees/${id}`, {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update tree');
    }

    return response.json();
  },

  // Submit care log
  async submitCareLog(treeId: string, data: CareLogData) {
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

    if (!response.ok) {
      throw new Error('Failed to submit care log');
    }

    return response.json();
  },

  // Get care logs
  async getCareLogs(treeId: string, params?: { page?: number; limit?: number }) {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());

    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/care-logs?${searchParams}`, {
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch care logs');
    }

    return response.json();
  },

  // Get adoptable trees
  async getAdoptableTrees(params?: { latitude?: number; longitude?: number; radius?: number }) {
    const searchParams = new URLSearchParams();
    if (params?.latitude) searchParams.append('latitude', params.latitude.toString());
    if (params?.longitude) searchParams.append('longitude', params.longitude.toString());
    if (params?.radius) searchParams.append('radius', params.radius.toString());

    const response = await fetch(`${API_BASE_URL}/trees/adoptable?${searchParams}`);

    if (!response.ok) {
      throw new Error('Failed to fetch adoptable trees');
    }

    return response.json();
  },

  // Adopt tree
  async adoptTree(treeId: string) {
    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/adopt`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to adopt tree');
    }

    return response.json();
  },

  // Transfer tree
  async transferTree(treeId: string, newGuardianId: string) {
    const response = await fetch(`${API_BASE_URL}/trees/${treeId}/transfer`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newGuardianId }),
    });

    if (!response.ok) {
      throw new Error('Failed to transfer tree');
    }

    return response.json();
  },

  // Delete tree
  async deleteTree(treeId: string) {
    const response = await fetch(`${API_BASE_URL}/trees/${treeId}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error('Failed to delete tree');
    }

    return response.json();
  },
};