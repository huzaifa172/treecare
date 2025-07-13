// Types
export interface User {
  id: string;
  name: string;
  email: string;
  greenPoints: number;
  profilePicture?: string;
  isProfilePublic?: boolean;
  lastLoginAt?: string;
  role: 'user' | 'admin';
  createdAt: string;
  updatedAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
  timestamp: string;
}

export interface APIErrorResponse {
  success: false;
  message: string;
  error?: string;
  statusCode?: number;
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

export const authAPI = {
  // Login
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    return handleResponse(response);
  },

  // Signup
  async signup(data: SignupData): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return handleResponse(response);
  },

  // Get current user
  async getCurrentUser(): Promise<User> {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      throw new APIError('No token found', 401);
    }

    const response = await fetch(`${API_BASE_URL}/auth/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    const data = await handleResponse(response);
    return data.data.user;
  },

  // Forgot password
  async forgotPassword(email: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/forgot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    return handleResponse(response);
  },

  // Reset password
  async resetPassword(token: string, password: string): Promise<{ success: boolean; message: string }> {
    const response = await fetch(`${API_BASE_URL}/auth/reset`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password }),
    });

    return handleResponse(response);
  },

  // Refresh token
  async refreshToken(): Promise<{ success: boolean; data: any }> {
    const token = localStorage.getItem('auth_token');
    
    if (!token) {
      throw new APIError('No token found', 401);
    }

    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return handleResponse(response);
  },

  // Logout
  async logout(): Promise<void> {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },
};

// Local storage helpers
export const authStorage = {
  setToken(token: string) {
    localStorage.setItem('auth_token', token);
  },

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  },

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  },

  getUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  clear() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
  },
};