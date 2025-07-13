"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionalAuth = exports.authenticateToken = void 0;
const jwt_1 = require("../utils/jwt");
const constants_1 = require("../utils/constants");
const database_1 = __importDefault(require("../utils/database"));
const authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
        if (!token) {
            return res.status(401).json({
                success: false,
                message: constants_1.ERROR_MESSAGES.UNAUTHORIZED,
                error: 'No token provided'
            });
        }
        // Verify the token
        const decoded = (0, jwt_1.verifyToken)(token);
        // Check if user still exists in database
        const user = await database_1.default.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, email: true, name: true }
        });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: constants_1.ERROR_MESSAGES.UNAUTHORIZED,
                error: 'User not found'
            });
        }
        // Attach user to request object
        req.user = {
            id: user.id,
            email: user.email
        };
        return next();
    }
    catch (error) {
        return res.status(401).json({
            success: false,
            message: constants_1.ERROR_MESSAGES.UNAUTHORIZED,
            error: 'Invalid or expired token'
        });
    }
};
exports.authenticateToken = authenticateToken;
// Optional authentication - doesn't fail if no token
const optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token) {
            const decoded = (0, jwt_1.verifyToken)(token);
            const user = await database_1.default.user.findUnique({
                where: { id: decoded.userId },
                select: { id: true, email: true, name: true }
            });
            if (user) {
                req.user = {
                    id: user.id,
                    email: user.email
                };
            }
        }
        return next();
    }
    catch (error) {
        // Ignore authentication errors in optional auth
        return next();
    }
};
exports.optionalAuth = optionalAuth;
//# sourceMappingURL=auth.middleware.js.map