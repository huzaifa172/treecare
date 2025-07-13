import { Request, Response, NextFunction } from 'express';
export type UserRole = 'user' | 'admin';
export type OrganizationRole = 'owner' | 'admin' | 'member';
export declare const requireRole: (requiredRole: UserRole) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const requireOwnership: (resourceType: "tree" | "organization" | "campaign") => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const requireTreeAccess: () => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const canPerformAction: (userId: string, action: string, resourceType: string, resourceId: string) => Promise<boolean>;
//# sourceMappingURL=role.middleware.d.ts.map