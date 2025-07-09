import { Router } from 'express';
import { validateSchema } from '../middleware/validation.middleware';
import { registerSchema, loginSchema, forgotPasswordSchema } from '../utils/validation';
import { asyncHandler } from '../middleware/error.middleware';
import * as authController from '../controllers/auth.controller';

const router = Router();

// POST /api/auth/register - Register new user
router.post(
  '/register',
  validateSchema(registerSchema),
  asyncHandler(authController.register)
);

// POST /api/auth/login - Login user
router.post(
  '/login',
  validateSchema(loginSchema),
  asyncHandler(authController.login)
);

// POST /api/auth/forgot - Request password reset
router.post(
  '/forgot',
  validateSchema(forgotPasswordSchema),
  asyncHandler(authController.forgotPassword)
);

// POST /api/auth/reset - Reset password with token
router.post(
  '/reset',
  validateSchema(forgotPasswordSchema),
  asyncHandler(authController.resetPassword)
);

// POST /api/auth/refresh - Refresh JWT token
router.post('/refresh', asyncHandler(authController.refreshToken));

// GET /api/auth/verify - Verify token validity
router.get('/verify', asyncHandler(authController.verifyToken));

export default router;