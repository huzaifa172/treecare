import { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service';
import { verifyToken as verifyJWT } from '../utils/jwt';
import { API_RESPONSE } from '../utils/constants';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json(API_RESPONSE.SUCCESS(result.message, {
      user: result.user,
      token: result.token
    }));
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.login(req.body);
    res.json(API_RESPONSE.SUCCESS(result.message, {
      user: result.user,
      token: result.token
    }));
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const result = await authService.forgotPassword(email);
    res.json(API_RESPONSE.SUCCESS(result.message));
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { token, password } = req.body;
    const result = await authService.resetPassword(token, password);
    res.json(API_RESPONSE.SUCCESS(result.message));
  } catch (error) {
    next(error);
  }
};

export const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json(API_RESPONSE.ERROR('No token provided', 'UNAUTHORIZED'));
    }

    const decoded = verifyJWT(token);
    const result = await authService.verifyUserToken(decoded.userId);
    
    res.json(API_RESPONSE.SUCCESS('Token is valid', result));
  } catch (error) {
    next(error);
  }
};

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      return res.status(401).json(API_RESPONSE.ERROR('No token provided', 'UNAUTHORIZED'));
    }

    const decoded = verifyJWT(token);
    const result = await authService.verifyUserToken(decoded.userId);
    
    res.json(API_RESPONSE.SUCCESS('Token verified successfully', result));
  } catch (error) {
    next(error);
  }
};