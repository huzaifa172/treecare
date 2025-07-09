import { z } from 'zod';

// Auth validation schemas
export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Invalid email format'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(100, 'Password must be less than 100 characters')
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(1, 'Password is required')
});

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email format')
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Reset token is required'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

// Tree validation schemas
export const createTreeSchema = z.object({
  species: z.string().min(1, 'Tree species is required').max(100, 'Species name too long'),
  source: z.enum(['NURSERY', 'HOMEGROWN', 'GRAFTED', 'WILD_SEEDLING']),
  commitmentDuration: z.number().min(1, 'Commitment duration must be at least 1 month').max(60, 'Maximum commitment is 60 months'),
  initialHealthStatus: z.enum(['EXCELLENT', 'HEALTHY', 'GOOD', 'FAIR', 'POOR', 'CRITICAL', 'DEAD']),
  location: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
    address: z.string().min(1, 'Address is required')
  })
});

export const updateTreeSchema = z.object({
  healthStatus: z.enum(['EXCELLENT', 'HEALTHY', 'GOOD', 'FAIR', 'POOR', 'CRITICAL', 'DEAD']),
  notes: z.string().optional(),
  growthMeasurements: z.object({
    height: z.string().optional(),
    trunk_diameter: z.string().optional(),
    canopy_width: z.string().optional()
  }).optional(),
  gpsLocation: z.object({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180)
  }).optional()
});

export const transferTreeSchema = z.object({
  transferReason: z.string().min(1, 'Transfer reason is required'),
  makePublic: z.boolean(),
  newOwnerId: z.string().optional()
});

export const adoptTreeSchema = z.object({
  commitmentMessage: z.string().min(1, 'Commitment message is required'),
  commitmentDuration: z.number().min(1).max(60)
});

// User validation schemas
export const updateProfileSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  bio: z.string().max(500).optional(),
  isProfilePublic: z.boolean().optional(),
  emailNotifications: z.boolean().optional(),
  city: z.string().max(100).optional(),
  country: z.string().max(100).optional()
});

// Query validation schemas
export const paginationSchema = z.object({
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(10)
});

export const treeQuerySchema = paginationSchema.extend({
  status: z.enum(['active', 'transferred', 'needs_attention']).optional(),
  species: z.string().optional()
});

export const mapQuerySchema = z.object({
  bounds: z.string().regex(/^-?\d+\.?\d*,-?\d+\.?\d*,-?\d+\.?\d*,-?\d+\.?\d*$/, 'Invalid bounds format'),
  zoom: z.coerce.number().min(1).max(20),
  filter: z.enum(['all', 'my_trees', 'adoptable']).default('all')
});

export const adoptableTreesSchema = z.object({
  latitude: z.coerce.number().min(-90).max(90).optional(),
  longitude: z.coerce.number().min(-180).max(180).optional(),
  radius: z.coerce.number().min(1).max(50).default(5),
  species: z.string().optional(),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(50).default(10)
});

// Reward validation schemas
export const redeemRewardSchema = z.object({
  shippingAddress: z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    postalCode: z.string().min(1),
    country: z.string().min(1)
  }).optional()
});

// Notification validation schemas
export const notificationQuerySchema = paginationSchema.extend({
  type: z.enum(['all', 'tree_update_reminder', 'adoption_request', 'badge_earned', 'point_milestone', 'system_update', 'community_news']).default('all')
});

// Leaderboard validation schemas
export const leaderboardQuerySchema = z.object({
  type: z.enum(['points', 'trees_planted', 'co2_offset']).default('points'),
  period: z.enum(['weekly', 'monthly', 'all_time']).default('all_time'),
  limit: z.coerce.number().min(1).max(100).default(50)
});