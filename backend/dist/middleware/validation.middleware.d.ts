import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
export declare const validateSchema: (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export declare const validateQuery: (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export declare const validateParams: (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
//# sourceMappingURL=validation.middleware.d.ts.map