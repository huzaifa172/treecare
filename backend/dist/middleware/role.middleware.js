"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.canPerformAction = exports.requireTreeAccess = exports.requireOwnership = exports.requireRole = void 0;
const error_middleware_1 = require("./error.middleware");
const constants_1 = require("../utils/constants");
const database_1 = __importDefault(require("../utils/database"));
// Role hierarchy
const ROLE_HIERARCHY = {
    user: 1,
    admin: 2,
    member: 1,
    organization_admin: 2,
    owner: 3,
};
// Check if user has required role
function hasRole(userRole, requiredRole) {
    const userLevel = ROLE_HIERARCHY[userRole] || 0;
    const requiredLevel = ROLE_HIERARCHY[requiredRole] || 0;
    return userLevel >= requiredLevel;
}
// Middleware to check user role (simplified for current schema)
const requireRole = (requiredRole) => {
    return async (req, res, next) => {
        try {
            const user = req.user;
            if (!user) {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.UNAUTHORIZED, 401);
            }
            // For now, all authenticated users are considered 'user' role
            // Admin role would need to be added to the User model
            if (requiredRole === 'admin') {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.FORBIDDEN, 403);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.requireRole = requireRole;
// Middleware to check if user owns the resource
const requireOwnership = (resourceType) => {
    return async (req, res, next) => {
        try {
            const user = req.user;
            const resourceId = req.params.id;
            if (!user || !resourceId) {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.UNAUTHORIZED, 401);
            }
            let isOwner = false;
            switch (resourceType) {
                case 'tree':
                    const tree = await database_1.default.tree.findUnique({
                        where: { id: resourceId },
                        select: { ownerId: true }
                    });
                    isOwner = tree?.ownerId === user.id;
                    break;
                case 'organization':
                    // Organization ownership would need to be implemented
                    // For now, we'll assume the user has access
                    isOwner = true;
                    break;
                case 'campaign':
                    // Campaign ownership would need to be implemented
                    // For now, we'll assume the user has access
                    isOwner = true;
                    break;
            }
            if (!isOwner) {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.FORBIDDEN, 403);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.requireOwnership = requireOwnership;
// Middleware to check if user can access tree
const requireTreeAccess = () => {
    return async (req, res, next) => {
        try {
            const user = req.user;
            const treeId = req.params.treeId || req.params.id;
            if (!user || !treeId) {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.UNAUTHORIZED, 401);
            }
            // Check if user owns the tree
            const tree = await database_1.default.tree.findUnique({
                where: { id: treeId },
                select: { ownerId: true }
            });
            if (!tree) {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.NOT_FOUND, 404);
            }
            const isOwner = tree.ownerId === user.id;
            if (!isOwner) {
                throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.FORBIDDEN, 403);
            }
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
exports.requireTreeAccess = requireTreeAccess;
// Helper function to check if user can perform action
const canPerformAction = async (userId, action, resourceType, resourceId) => {
    try {
        switch (resourceType) {
            case 'tree':
                const tree = await database_1.default.tree.findUnique({
                    where: { id: resourceId },
                    select: { ownerId: true }
                });
                return tree?.ownerId === userId;
            case 'organization':
                // Organization access would need to be implemented
                return true;
            default:
                return false;
        }
    }
    catch (error) {
        return false;
    }
};
exports.canPerformAction = canPerformAction;
//# sourceMappingURL=role.middleware.js.map