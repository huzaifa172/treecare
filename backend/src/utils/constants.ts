// Point system constants
export const POINTS = {
  TREE_REGISTRATION: 50,
  MONTHLY_UPDATE: 20,
  TREE_ADOPTION: 100,
  YEARLY_CARE: 300,
  FRIEND_REFERRAL: 50,
  CAMPAIGN_PARTICIPATION: 75
} as const;

// Badge requirements
export const BADGE_REQUIREMENTS = {
  SEED_STARTER: { trees_planted: 1 },
  FOREST_BUILDER: { trees_planted: 10 },
  CAREGIVER: { months_of_updates: 6 },
  GUARDIAN_ANGEL: { trees_adopted: 3 },
  CLIMATE_WARRIOR: { rank_percentage: 5 }
} as const;

// Tree species list
export const TREE_SPECIES = [
  'Mango',
  'Neem',
  'Banyan',
  'Peepal',
  'Coconut',
  'Papaya',
  'Guava',
  'Lemon',
  'Orange',
  'Apple',
  'Jackfruit',
  'Drumstick',
  'Curry Leaf',
  'Teak',
  'Eucalyptus',
  'Bamboo',
  'Rose',
  'Jasmine',
  'Bougainvillea',
  'Tulsi'
] as const;

// Health status mapping
export const HEALTH_STATUS_SCORE = {
  EXCELLENT: 100,
  HEALTHY: 85,
  GOOD: 70,
  FAIR: 55,
  POOR: 40,
  CRITICAL: 25,
  DEAD: 0
} as const;

// CO2 absorption rates (kg per year for different tree types)
export const CO2_ABSORPTION_RATES = {
  'Mango': 22,
  'Neem': 48,
  'Banyan': 50,
  'Peepal': 35,
  'Coconut': 15,
  'Papaya': 8,
  'Guava': 12,
  'Lemon': 10,
  'Orange': 10,
  'Apple': 18,
  'Jackfruit': 25,
  'Drumstick': 7,
  'Curry Leaf': 5,
  'Teak': 35,
  'Eucalyptus': 22,
  'Bamboo': 12,
  'Rose': 3,
  'Jasmine': 2,
  'Bougainvillea': 4,
  'Tulsi': 1,
  'default': 20 // fallback rate
} as const;

// File upload constants
export const UPLOAD_LIMITS = {
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
  ALLOWED_PDF_TYPES: ['application/pdf']
} as const;

// Notification templates
export const NOTIFICATION_TEMPLATES = {
  TREE_UPDATE_REMINDER: {
    title: "Time to check on your {species} tree!",
    message: "It's been {days} days since your last update. Your tree misses you! 🌱"
  },
  ADOPTION_REQUEST: {
    title: "Someone wants to adopt your tree!",
    message: "A tree lover wants to adopt your {species} tree. Review the request."
  },
  BADGE_EARNED: {
    title: "New badge earned! 🏆",
    message: "Congratulations! You've earned the '{badgeName}' badge for {description}."
  },
  POINT_MILESTONE: {
    title: "Green Points milestone reached! 🌟",
    message: "Amazing! You've reached {points} Green Points. Keep making an impact!"
  }
} as const;

// Error messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: 'Authentication required',
  FORBIDDEN: 'Access denied',
  NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation failed',
  TREE_NOT_OWNED: 'You do not own this tree',
  INSUFFICIENT_POINTS: 'Insufficient Green Points',
  ALREADY_ADOPTED: 'Tree has already been adopted',
  TREE_NOT_ADOPTABLE: 'Tree is not available for adoption',
  EMAIL_ALREADY_EXISTS: 'Email already registered',
  INVALID_CREDENTIALS: 'Invalid email or password',
  RATE_LIMIT_EXCEEDED: 'Too many requests, please try again later'
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  USER_REGISTERED: 'User registered successfully',
  LOGIN_SUCCESSFUL: 'Login successful',
  TREE_REGISTERED: 'Tree registered successfully',
  TREE_UPDATED: 'Tree updated successfully',
  TREE_ADOPTED: 'Tree adopted successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  REWARD_REDEEMED: 'Reward redeemed successfully',
  NOTIFICATION_READ: 'Notification marked as read'
} as const;

// API response structure
export const API_RESPONSE = {
  SUCCESS: (message: string, data?: any) => ({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString()
  }),
  ERROR: (message: string, error?: string, statusCode?: number) => ({
    success: false,
    message,
    error,
    statusCode,
    timestamp: new Date().toISOString()
  })
} as const;