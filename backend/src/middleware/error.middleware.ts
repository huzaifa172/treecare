import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export interface AppError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export const errorHandler = (
  error: AppError | ZodError | PrismaClientKnownRequestError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = 'Internal server error';
  let errorDetails: any = null;

  // Handle Zod validation errors
  if (error instanceof ZodError) {
    statusCode = 400;
    message = 'Validation error';
    errorDetails = error.errors.map(err => ({
      field: err.path.join('.'),
      message: err.message,
      code: err.code
    }));
  }
  // Handle Prisma errors
  else if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002':
        statusCode = 409;
        message = 'Resource already exists';
        errorDetails = `Duplicate value for ${error.meta?.target}`;
        break;
      case 'P2025':
        statusCode = 404;
        message = 'Resource not found';
        errorDetails = error.meta?.cause;
        break;
      case 'P2003':
        statusCode = 400;
        message = 'Invalid foreign key reference';
        errorDetails = error.meta?.field_name;
        break;
      default:
        statusCode = 500;
        message = 'Database error';
        errorDetails = process.env.NODE_ENV === 'development' ? error.message : 'Internal database error';
    }
  }
  // Handle JWT errors
  else if (error.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token';
    errorDetails = error.message;
  }
  else if (error.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token expired';
    errorDetails = error.message;
  }
  // Handle custom app errors
  else if (error.statusCode) {
    statusCode = error.statusCode;
    message = error.message;
  }
  // Handle generic errors
  else {
    message = error.message || 'Internal server error';
    errorDetails = process.env.NODE_ENV === 'development' ? error.stack : null;
  }

  // Log error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('🚨 Error:', {
      message: error.message,
      stack: error.stack,
      url: req.url,
      method: req.method,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message,
    error: errorDetails,
    statusCode,
    timestamp: new Date().toISOString(),
    path: req.url,
    method: req.method
  });
};

// Create custom error class
export class CustomError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Async error wrapper
export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};