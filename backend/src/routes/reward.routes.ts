import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// GET /api/rewards - Get available rewards
router.get('/', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Rewards retrieved successfully',
    data: { rewards: [] }
  });
});

// POST /api/rewards/:id/redeem - Redeem a reward
router.post('/:id/redeem', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Reward redeemed successfully',
    data: { redemption: { id: req.params.id } }
  });
});

export default router;