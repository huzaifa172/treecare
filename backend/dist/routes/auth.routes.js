"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_middleware_1 = require("../middleware/validation.middleware");
const validation_1 = require("../utils/validation");
const error_middleware_1 = require("../middleware/error.middleware");
const authController = __importStar(require("../controllers/auth.controller"));
const router = (0, express_1.Router)();
// POST /api/auth/register - Register new user
router.post('/register', (0, validation_middleware_1.validateSchema)(validation_1.registerSchema), (0, error_middleware_1.asyncHandler)(authController.register));
// POST /api/auth/login - Login user
router.post('/login', (0, validation_middleware_1.validateSchema)(validation_1.loginSchema), (0, error_middleware_1.asyncHandler)(authController.login));
// POST /api/auth/forgot - Request password reset
router.post('/forgot', (0, validation_middleware_1.validateSchema)(validation_1.forgotPasswordSchema), (0, error_middleware_1.asyncHandler)(authController.forgotPassword));
// POST /api/auth/reset - Reset password with token
router.post('/reset', (0, validation_middleware_1.validateSchema)(validation_1.forgotPasswordSchema), (0, error_middleware_1.asyncHandler)(authController.resetPassword));
// POST /api/auth/refresh - Refresh JWT token
router.post('/refresh', (0, error_middleware_1.asyncHandler)(authController.refreshToken));
// GET /api/auth/verify - Verify token validity
router.get('/verify', (0, error_middleware_1.asyncHandler)(authController.verifyToken));
exports.default = router;
//# sourceMappingURL=auth.routes.js.map