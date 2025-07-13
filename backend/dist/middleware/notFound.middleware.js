"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const notFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} not found`,
        error: 'ENDPOINT_NOT_FOUND',
        timestamp: new Date().toISOString(),
        availableEndpoints: {
            auth: '/api/auth/*',
            trees: '/api/trees/*',
            users: '/api/users/*',
            map: '/api/map/*',
            rewards: '/api/rewards/*',
            notifications: '/api/notifications/*',
            learn: '/api/learn/*',
            stats: '/api/stats/*'
        }
    });
};
exports.notFound = notFound;
//# sourceMappingURL=notFound.middleware.js.map