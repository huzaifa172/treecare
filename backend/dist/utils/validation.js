"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderboardQuerySchema = exports.notificationQuerySchema = exports.redeemRewardSchema = exports.adoptableTreesSchema = exports.mapQuerySchema = exports.treeQuerySchema = exports.paginationSchema = exports.updateProfileSchema = exports.adoptTreeSchema = exports.transferTreeSchema = exports.updateTreeSchema = exports.createTreeSchema = exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
// Auth validation schemas
exports.registerSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters').max(100, 'Password must be less than 100 characters')
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format'),
    password: zod_1.z.string().min(1, 'Password is required')
});
exports.forgotPasswordSchema = zod_1.z.object({
    email: zod_1.z.string().email('Invalid email format')
});
exports.resetPasswordSchema = zod_1.z.object({
    token: zod_1.z.string().min(1, 'Reset token is required'),
    password: zod_1.z.string().min(6, 'Password must be at least 6 characters')
});
// Tree validation schemas
exports.createTreeSchema = zod_1.z.object({
    species: zod_1.z.string().min(1, 'Tree species is required').max(100, 'Species name too long'),
    source: zod_1.z.enum(['NURSERY', 'HOMEGROWN', 'GRAFTED', 'WILD_SEEDLING']),
    commitmentDuration: zod_1.z.number().min(1, 'Commitment duration must be at least 1 month').max(60, 'Maximum commitment is 60 months'),
    initialHealthStatus: zod_1.z.enum(['EXCELLENT', 'HEALTHY', 'GOOD', 'FAIR', 'POOR', 'CRITICAL', 'DEAD']),
    location: zod_1.z.object({
        latitude: zod_1.z.number().min(-90).max(90),
        longitude: zod_1.z.number().min(-180).max(180),
        address: zod_1.z.string().min(1, 'Address is required')
    })
});
exports.updateTreeSchema = zod_1.z.object({
    healthStatus: zod_1.z.enum(['EXCELLENT', 'HEALTHY', 'GOOD', 'FAIR', 'POOR', 'CRITICAL', 'DEAD']),
    notes: zod_1.z.string().optional(),
    growthMeasurements: zod_1.z.object({
        height: zod_1.z.string().optional(),
        trunk_diameter: zod_1.z.string().optional(),
        canopy_width: zod_1.z.string().optional()
    }).optional(),
    gpsLocation: zod_1.z.object({
        latitude: zod_1.z.number().min(-90).max(90),
        longitude: zod_1.z.number().min(-180).max(180)
    }).optional()
});
exports.transferTreeSchema = zod_1.z.object({
    transferReason: zod_1.z.string().min(1, 'Transfer reason is required'),
    makePublic: zod_1.z.boolean(),
    newOwnerId: zod_1.z.string().optional()
});
exports.adoptTreeSchema = zod_1.z.object({
    commitmentMessage: zod_1.z.string().min(1, 'Commitment message is required'),
    commitmentDuration: zod_1.z.number().min(1).max(60)
});
// User validation schemas
exports.updateProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(100).optional(),
    bio: zod_1.z.string().max(500).optional(),
    isProfilePublic: zod_1.z.boolean().optional(),
    emailNotifications: zod_1.z.boolean().optional(),
    city: zod_1.z.string().max(100).optional(),
    country: zod_1.z.string().max(100).optional()
});
// Query validation schemas
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z.coerce.number().min(1).default(1),
    limit: zod_1.z.coerce.number().min(1).max(100).default(10)
});
exports.treeQuerySchema = exports.paginationSchema.extend({
    status: zod_1.z.enum(['active', 'transferred', 'needs_attention']).optional(),
    species: zod_1.z.string().optional()
});
exports.mapQuerySchema = zod_1.z.object({
    bounds: zod_1.z.string().regex(/^-?\d+\.?\d*,-?\d+\.?\d*,-?\d+\.?\d*,-?\d+\.?\d*$/, 'Invalid bounds format'),
    zoom: zod_1.z.coerce.number().min(1).max(20),
    filter: zod_1.z.enum(['all', 'my_trees', 'adoptable']).default('all')
});
exports.adoptableTreesSchema = zod_1.z.object({
    latitude: zod_1.z.coerce.number().min(-90).max(90).optional(),
    longitude: zod_1.z.coerce.number().min(-180).max(180).optional(),
    radius: zod_1.z.coerce.number().min(1).max(50).default(5),
    species: zod_1.z.string().optional(),
    page: zod_1.z.coerce.number().min(1).default(1),
    limit: zod_1.z.coerce.number().min(1).max(50).default(10)
});
// Reward validation schemas
exports.redeemRewardSchema = zod_1.z.object({
    shippingAddress: zod_1.z.object({
        street: zod_1.z.string().min(1),
        city: zod_1.z.string().min(1),
        state: zod_1.z.string().min(1),
        postalCode: zod_1.z.string().min(1),
        country: zod_1.z.string().min(1)
    }).optional()
});
// Notification validation schemas
exports.notificationQuerySchema = exports.paginationSchema.extend({
    type: zod_1.z.enum(['all', 'tree_update_reminder', 'adoption_request', 'badge_earned', 'point_milestone', 'system_update', 'community_news']).default('all')
});
// Leaderboard validation schemas
exports.leaderboardQuerySchema = zod_1.z.object({
    type: zod_1.z.enum(['points', 'trees_planted', 'co2_offset']).default('points'),
    period: zod_1.z.enum(['weekly', 'monthly', 'all_time']).default('all_time'),
    limit: zod_1.z.coerce.number().min(1).max(100).default(50)
});
//# sourceMappingURL=validation.js.map