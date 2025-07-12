import { Request, Response, NextFunction } from 'express';
import { verifyToken, JWTPayload } from '../utils/jwt';
import { ERROR_MESSAGES } from '../utils/constants';
import prisma from '../utils/database';

// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        email: string;
      };
    }
  }
}

export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({
        success: false,
        message: ERROR_MESSAGES.UNAUTHORIZED,
        error: 'No token provided'
      });
    }

    // Verify the token
    const decoded: JWTPayload = verifyToken(token);

    // Check if user still exists in database
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true }
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: ERROR_MESSAGES.UNAUTHORIZED,
        error: 'User not found'
      });
    }

    // Attach user to request object
    req.user = {
      id: user.id,
      email: user.email
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: ERROR_MESSAGES.UNAUTHORIZED,
      error: 'Invalid or expired token'
    });
  }
};

// Optional authentication - doesn't fail if no token
export const optionalAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
      const decoded: JWTPayload = verifyToken(token);
      const user = await prisma.user.findUnique({
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

    next();
  } catch (error) {
    // Ignore authentication errors in optional auth
    next();
  }
};