import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// GET /api/users/profile - Get user profile
router.get('/profile', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Profile retrieved successfully',
    data: { user: req.user }
  });
});

// PUT /api/users/profile - Update user profile
router.put('/profile', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Profile updated successfully',
    data: { user: req.user }
  });
});

// GET /api/users/leaderboard - Get leaderboard
router.get('/leaderboard', (req, res) => {
  res.json({
    success: true,
    message: 'Leaderboard retrieved successfully',
    data: { leaderboard: [] }
  });
});

export default router;