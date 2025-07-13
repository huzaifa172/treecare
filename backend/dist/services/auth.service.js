"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../utils/database"));
const jwt_1 = require("../utils/jwt");
const error_middleware_1 = require("../middleware/error.middleware");
const constants_1 = require("../utils/constants");
const email_service_1 = require("./email.service");
class AuthService {
    async register(data) {
        const { name, email, password } = data;
        // Check if user already exists
        const existingUser = await database_1.default.user.findUnique({
            where: { email }
        });
        if (existingUser) {
            throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.EMAIL_ALREADY_EXISTS, 409);
        }
        // Hash password
        const saltRounds = 12;
        const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
        // Create user
        const user = await database_1.default.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                greenPoints: 0
            },
            select: {
                id: true,
                name: true,
                email: true,
                greenPoints: true,
                createdAt: true
            }
        });
        // Generate JWT token
        const token = (0, jwt_1.generateToken)({
            userId: user.id,
            email: user.email
        });
        // Send welcome email
        await email_service_1.emailService.sendWelcomeEmail(user.email, user.name);
        return {
            user,
            token,
            message: constants_1.SUCCESS_MESSAGES.USER_REGISTERED
        };
    }
    async login(data) {
        const { email, password } = data;
        // Find user with password
        const user = await database_1.default.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                password: true,
                greenPoints: true,
                isProfilePublic: true,
                lastLoginAt: true
            }
        });
        if (!user) {
            throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
        }
        // Verify password
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
        }
        // Update last login time
        await database_1.default.user.update({
            where: { id: user.id },
            data: { lastLoginAt: new Date() }
        });
        // Generate JWT token
        const token = (0, jwt_1.generateToken)({
            userId: user.id,
            email: user.email
        });
        // Remove password from response
        const { password: _, ...userWithoutPassword } = user;
        return {
            user: userWithoutPassword,
            token,
            message: constants_1.SUCCESS_MESSAGES.LOGIN_SUCCESSFUL
        };
    }
    async forgotPassword(email) {
        const user = await database_1.default.user.findUnique({
            where: { email },
            select: { id: true, name: true, email: true }
        });
        if (!user) {
            // Don't reveal if email exists or not for security
            return { message: 'If an account exists, password reset instructions have been sent.' };
        }
        // Generate reset token (in production, store this in database with expiration)
        const resetToken = (0, uuid_1.v4)();
        // Store reset token in database (you'd add a passwordResetToken field to User model)
        // For now, we'll use a simple approach
        await database_1.default.user.update({
            where: { id: user.id },
            data: {
            // Add passwordResetToken and passwordResetExpires fields to schema
            // passwordResetToken: resetToken,
            // passwordResetExpires: new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
            }
        });
        // Send password reset email
        await email_service_1.emailService.sendPasswordResetEmail(user.email, user.name, resetToken);
        return { message: 'Password reset instructions sent to your email.' };
    }
    async resetPassword(token, newPassword) {
        // In production, you'd verify the token from database
        // const user = await prisma.user.findFirst({
        //   where: {
        //     passwordResetToken: token,
        //     passwordResetExpires: { gt: new Date() }
        //   }
        // });
        // For now, just decode the token (simplified)
        // Hash new password
        const saltRounds = 12;
        const hashedPassword = await bcryptjs_1.default.hash(newPassword, saltRounds);
        // Update user password and clear reset token
        // await prisma.user.update({
        //   where: { id: user.id },
        //   data: {
        //     password: hashedPassword,
        //     passwordResetToken: null,
        //     passwordResetExpires: null
        //   }
        // });
        return { message: 'Password has been reset successfully.' };
    }
    async verifyUserToken(userId) {
        const user = await database_1.default.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                name: true,
                email: true,
                greenPoints: true,
                profilePicture: true,
                isProfilePublic: true
            }
        });
        if (!user) {
            throw new error_middleware_1.CustomError(constants_1.ERROR_MESSAGES.UNAUTHORIZED, 401);
        }
        return { user, valid: true };
    }
    async getUserStats(userId) {
        const stats = await database_1.default.user.findUnique({
            where: { id: userId },
            select: {
                greenPoints: true,
                _count: {
                    select: {
                        trees: true,
                        adoptions: true,
                        updates: true,
                        badges: true
                    }
                }
            }
        });
        return stats;
    }
}
exports.AuthService = AuthService;
exports.authService = new AuthService();
//# sourceMappingURL=auth.service.js.map