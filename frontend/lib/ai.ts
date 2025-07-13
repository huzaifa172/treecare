// Types
export interface AIAnalysisRequest {
  type: 'tree_health' | 'care_recommendation' | 'growth_prediction' | 'environmental_impact' | 'care_schedule';
  treeData?: any;
  userData?: any;
  environmentalData?: any;
  context?: string;
}

export interface AIRecommendation {
  id: string;
  type: string;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  data: any;
  actionable: boolean;
  estimatedImpact: string;
  isRead: boolean;
  isApplied: boolean;
  createdAt: string;
}

export interface AIInsight {
  id: string;
  type: string;
  title: string;
  description: string;
  data: any;
  confidence: number;
  timestamp: string;
}

export interface AIAnalytics {
  totalInteractions: number;
  totalInsights: number;
  totalRecommendations: number;
  successRate: number;
  averageResponseTime: number;
  mostUsedFeature: string;
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

const getAuthHeaders = () => {
  const token = localStorage.getItem('auth_token');
  return {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };
};

export const aiAPI = {
  // Analyze tree health
  async analyzeTreeHealth(treeId: string, updateData: any): Promise<{ data: AIInsight }> {
    const response = await fetch(`${API_BASE_URL}/ai/analyze-health/${treeId}`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(updateData),
    });

    return handleResponse(response);
  },

  // Generate care recommendations
  async generateCareRecommendations(treeId?: string): Promise<{ data: AIRecommendation[] }> {
    const response = await fetch(`${API_BASE_URL}/ai/recommendations`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ treeId }),
    });

    return handleResponse(response);
  },

  // Predict tree growth and impact
  async predictGrowthAndImpact(treeId: string): Promise<{ data: AIInsight }> {
    const response = await fetch(`${API_BASE_URL}/ai/predict-growth/${treeId}`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Generate environmental report
  async generateEnvironmentalReport(timeframe: 'week' | 'month' | 'year' = 'month'): Promise<{ data: AIInsight }> {
    const response = await fetch(`${API_BASE_URL}/ai/environmental-report`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ timeframe }),
    });

    return handleResponse(response);
  },

  // Create personalized care schedule
  async createCareSchedule(): Promise<{ data: AIRecommendation[] }> {
    const response = await fetch(`${API_BASE_URL}/ai/care-schedule`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get user AI insights
  async getUserInsights(limit: number = 10): Promise<{ data: AIInsight[] }> {
    const response = await fetch(`${API_BASE_URL}/ai/insights?limit=${limit}`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get user AI recommendations
  async getUserRecommendations(limit: number = 10): Promise<{ data: AIRecommendation[] }> {
    const response = await fetch(`${API_BASE_URL}/ai/recommendations?limit=${limit}`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Mark recommendation as read
  async markRecommendationRead(id: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/ai/mark-recommendation-read/${id}`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Apply a recommendation
  async applyRecommendation(id: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/ai/apply-recommendation/${id}`, {
      method: 'POST',
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },

  // Get AI analytics
  async getAIAnalytics(): Promise<{ data: AIAnalytics }> {
    const response = await fetch(`${API_BASE_URL}/ai/analytics`, {
      headers: getAuthHeaders(),
    });

    return handleResponse(response);
  },
};