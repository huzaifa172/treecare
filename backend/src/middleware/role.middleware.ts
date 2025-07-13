import { Request, Response, NextFunction } from 'express';
import { CustomError } from './error.middleware';
import { ERROR_MESSAGES } from '../utils/constants';
import prisma from '../utils/database';

// Role types
export type UserRole = 'user' | 'admin';
export type OrganizationRole = 'owner' | 'admin' | 'member';

// Role hierarchy
const ROLE_HIERARCHY = {
  user: 1,
  admin: 2,
  member: 1,
  organization_admin: 2,
  owner: 3,
};

// Check if user has required role
function hasRole(userRole: string, requiredRole: string): boolean {
  const userLevel = ROLE_HIERARCHY[userRole as keyof typeof ROLE_HIERARCHY] || 0;
  const requiredLevel = ROLE_HIERARCHY[requiredRole as keyof typeof ROLE_HIERARCHY] || 0;
  return userLevel >= requiredLevel;
}

// Middleware to check user role (simplified for current schema)
export const requireRole = (requiredRole: UserRole) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      
      if (!user) {
        throw new CustomError(ERROR_MESSAGES.UNAUTHORIZED, 401);
      }

      // For now, all authenticated users are considered 'user' role
      // Admin role would need to be added to the User model
      if (requiredRole === 'admin') {
        throw new CustomError(ERROR_MESSAGES.FORBIDDEN, 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

// Middleware to check if user owns the resource
export const requireOwnership = (resourceType: 'tree' | 'organization' | 'campaign') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const resourceId = req.params.id;
      
      if (!user || !resourceId) {
        throw new CustomError(ERROR_MESSAGES.UNAUTHORIZED, 401);
      }

      let isOwner = false;

      switch (resourceType) {
        case 'tree':
          const tree = await prisma.tree.findUnique({
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
        throw new CustomError(ERROR_MESSAGES.FORBIDDEN, 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

// Middleware to check if user can access tree
export const requireTreeAccess = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const treeId = req.params.treeId || req.params.id;
      
      if (!user || !treeId) {
        throw new CustomError(ERROR_MESSAGES.UNAUTHORIZED, 401);
      }

      // Check if user owns the tree
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        select: { ownerId: true }
      });

      if (!tree) {
        throw new CustomError(ERROR_MESSAGES.NOT_FOUND, 404);
      }

      const isOwner = tree.ownerId === user.id;

      if (!isOwner) {
        throw new CustomError(ERROR_MESSAGES.FORBIDDEN, 403);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

// Helper function to check if user can perform action
export const canPerformAction = async (
  userId: string, 
  action: string, 
  resourceType: string, 
  resourceId: string
): Promise<boolean> => {
  try {
    switch (resourceType) {
      case 'tree':
        const tree = await prisma.tree.findUnique({
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
  } catch (error) {
    return false;
  }
};