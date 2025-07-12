import { Router } from 'express';
import { authenticateToken, optionalAuth } from '../middleware/auth.middleware';

const router = Router();

// GET /api/stats/global - Get global statistics
router.get('/global', optionalAuth, (req, res) => {
  res.json({
    success: true,
    message: 'Global statistics retrieved successfully',
    data: {
      totalTrees: 15420,
      totalUsers: 3250,
      co2Offset: "2.5 tons",
      countriesActive: 12,
      treesThisMonth: 450,
      adoptionsThisMonth: 23
    }
  });
});

// GET /api/stats/user - Get user analytics
router.get('/user', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'User analytics retrieved successfully',
    data: {
      timeline: {
        treesPerMonth: [2, 1, 3, 0, 1],
        updatesPerMonth: [6, 4, 8, 2, 3]
      },
      impact: {
        co2OffsetByMonth: [1.2, 0.8, 2.1, 0.5, 0.9],
        totalImpact: "5.5 kg CO2"
      }
    }
  });
});

export default router;