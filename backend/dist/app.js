"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const database_1 = require("./utils/database");
// Import routes
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const tree_routes_1 = __importDefault(require("./routes/tree.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const map_routes_1 = __importDefault(require("./routes/map.routes"));
const reward_routes_1 = __importDefault(require("./routes/reward.routes"));
const notification_routes_1 = __importDefault(require("./routes/notification.routes"));
const learn_routes_1 = __importDefault(require("./routes/learn.routes"));
const stats_routes_1 = __importDefault(require("./routes/stats.routes"));
const organization_routes_1 = __importDefault(require("./routes/organization.routes"));
const ai_routes_1 = __importDefault(require("./routes/ai.routes"));
// Import middleware
const error_middleware_1 = require("./middleware/error.middleware");
const notFound_middleware_1 = require("./middleware/notFound.middleware");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Trust proxy for rate limiting
app.set('trust proxy', 1);
// Security middleware
app.use((0, helmet_1.default)());
app.use((0, compression_1.default)());
// CORS configuration
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Rate limiting
const limiter = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.',
        error: 'RATE_LIMIT_EXCEEDED'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
// Authentication rate limiting (more reasonable)
const authLimiter = (0, express_rate_limit_1.default)({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes  
    max: parseInt(process.env.AUTH_RATE_LIMIT_MAX_REQUESTS || '20'), // limit each IP to 20 requests per windowMs for auth endpoints
    message: {
        success: false,
        message: 'Too many authentication attempts, please try again later.',
        error: 'AUTH_RATE_LIMIT_EXCEEDED'
    },
    standardHeaders: true,
    legacyHeaders: false,
});
// Apply rate limiting
app.use('/api/', limiter);
app.use('/api/auth/', authLimiter);
// Body parsing middleware
app.use(express_1.default.json({ limit: '10mb' }));
app.use(express_1.default.urlencoded({ extended: true, limit: '10mb' }));
// Logging
if (process.env.NODE_ENV === 'development') {
    app.use((0, morgan_1.default)('dev'));
}
else {
    app.use((0, morgan_1.default)('combined'));
}
// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'GreenGuardian API is running!',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
    });
});
// API routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/trees', tree_routes_1.default);
app.use('/api/users', user_routes_1.default);
app.use('/api/map', map_routes_1.default);
app.use('/api/rewards', reward_routes_1.default);
app.use('/api/notifications', notification_routes_1.default);
app.use('/api/learn', learn_routes_1.default);
app.use('/api/stats', stats_routes_1.default);
app.use('/api/organizations', organization_routes_1.default);
app.use('/api/ai', ai_routes_1.default);
// Welcome route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🌿 Welcome to GreenGuardian API!',
        description: 'Fighting climate change by empowering individuals to become verified guardians of nature — one tree at a time.',
        documentation: '/api/docs',
        health: '/health'
    });
});
// Error handling middleware (must be last)
app.use(notFound_middleware_1.notFound);
app.use(error_middleware_1.errorHandler);
// Start server
if (process.env.NODE_ENV !== 'test') {
    (0, database_1.connectDatabase)().then(() => {
        app.listen(PORT, () => {
            console.log(`🌱 GreenGuardian API Server running on port ${PORT}`);
            console.log(`🔗 Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
        });
    }).catch((err) => {
        console.error('❌ Failed to start server due to database error:', err);
        process.exit(1);
    });
}
exports.default = app;
//# sourceMappingURL=app.js.map