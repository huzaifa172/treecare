import { Router } from 'express';
import { optionalAuth } from '../middleware/auth.middleware';

const router = Router();

// GET /api/map/trees - Get trees for map display
router.get('/trees', optionalAuth, (req, res) => {
  res.json({
    success: true,
    message: 'Map trees retrieved successfully',
    data: {
      trees: [],
      stats: {
        totalTrees: 0,
        healthyTrees: 0,
        adoptableTrees: 0
      }
    }
  });
});

export default router;