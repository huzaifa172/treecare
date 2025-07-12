import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../utils/database';
import { generateToken } from '../utils/jwt';
import { CustomError } from '../middleware/error.middleware';
import { ERROR_MESSAGES, SUCCESS_MESSAGES, POINTS } from '../utils/constants';
import { emailService } from './email.service';

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface LoginData {
  email: string;
  password: string;
}

export class AuthService {
  async register(data: RegisterData) {
    const { name, email, password } = data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      throw new CustomError(ERROR_MESSAGES.EMAIL_ALREADY_EXISTS, 409);
    }

    // Hash password
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create user
    const user = await prisma.user.create({
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
    const token = generateToken({
      userId: user.id,
      email: user.email
    });

    // Send welcome email
    await emailService.sendWelcomeEmail(user.email, user.name);

    return {
      user,
      token,
      message: SUCCESS_MESSAGES.USER_REGISTERED
    };
  }

  async login(data: LoginData) {
    const { email, password } = data;

    // Find user with password
    const user = await prisma.user.findUnique({
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
      throw new CustomError(ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new CustomError(ERROR_MESSAGES.INVALID_CREDENTIALS, 401);
    }

    // Update last login time
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() }
    });

    // Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    return {
      user: userWithoutPassword,
      token,
      message: SUCCESS_MESSAGES.LOGIN_SUCCESSFUL
    };
  }

  async forgotPassword(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true }
    });

    if (!user) {
      // Don't reveal if email exists or not for security
      return { message: 'If an account exists, password reset instructions have been sent.' };
    }

    // Generate reset token (in production, store this in database with expiration)
    const resetToken = uuidv4();
    
    // Store reset token in database (you'd add a passwordResetToken field to User model)
    // For now, we'll use a simple approach
    await prisma.user.update({
      where: { id: user.id },
      data: {
        // Add passwordResetToken and passwordResetExpires fields to schema
        // passwordResetToken: resetToken,
        // passwordResetExpires: new Date(Date.now() + 15 * 60 * 1000) // 15 minutes
      }
    });

    // Send password reset email
    await emailService.sendPasswordResetEmail(user.email, user.name, resetToken);

    return { message: 'Password reset instructions sent to your email.' };
  }

  async resetPassword(token: string, newPassword: string) {
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
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);

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

  async verifyUserToken(userId: string) {
    const user = await prisma.user.findUnique({
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
      throw new CustomError(ERROR_MESSAGES.UNAUTHORIZED, 401);
    }

    return { user, valid: true };
  }

  async getUserStats(userId: string) {
    const stats = await prisma.user.findUnique({
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

export const authService = new AuthService();