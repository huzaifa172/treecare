import { Router } from 'express';
import { authenticateToken, optionalAuth } from '../middleware/auth.middleware';
import { uploadMiddleware } from '../middleware/upload.middleware';

const router = Router();

// POST /api/trees - Register new tree (requires auth + file upload)
router.post(
  '/',
  authenticateToken,
  uploadMiddleware.single('photo'),
  (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Tree registered successfully',
      data: {
        tree: {
          id: 'tree-123',
          species: req.body.species,
          qrCode: 'QR123456',
          photoUrl: 'https://example.com/photo.jpg'
        },
        pointsEarned: 50
      }
    });
  }
);

// GET /api/trees - Get user's trees (requires auth)
router.get(
  '/',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Trees retrieved successfully',
      data: {
        trees: [],
        pagination: {
          currentPage: 1,
          totalPages: 1,
          totalTrees: 0,
          hasNext: false,
          hasPrev: false
        }
      }
    });
  }
);

// GET /api/trees/adoptable - Get adoptable trees nearby
router.get(
  '/adoptable',
  optionalAuth,
  (req, res) => {
    res.json({
      success: true,
      message: 'Adoptable trees retrieved successfully',
      data: {
        adoptableTrees: []
      }
    });
  }
);

// GET /api/trees/:id - Get specific tree details
router.get(
  '/:id',
  optionalAuth,
  (req, res) => {
    res.json({
      success: true,
      message: 'Tree details retrieved successfully',
      data: {
        tree: {
          id: req.params.id,
          species: 'Mango',
          plantedAt: new Date().toISOString(),
          photoUrl: 'https://example.com/tree.jpg'
        }
      }
    });
  }
);

export default router;