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
          photoUrl: 'https://example.com/photo.jpg',
          location: {
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            address: req.body.address
          },
          plantedAt: new Date().toISOString(),
          guardianId: req.user.id,
          status: 'active'
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
    const { page = 1, limit = 10, status, species } = req.query;
    
    res.json({
      success: true,
      message: 'Trees retrieved successfully',
      data: {
        trees: [
          {
            id: 'tree-1',
            species: 'Mango',
            qrCode: 'QR123456',
            photoUrl: 'https://example.com/tree1.jpg',
            location: {
              latitude: 25.2048,
              longitude: 55.2708,
              address: 'Dubai, UAE'
            },
            plantedAt: '2024-01-15T10:30:00Z',
            lastCareAt: '2024-07-10T14:20:00Z',
            healthScore: 95,
            status: 'active',
            careLogs: 12,
            totalPoints: 320
          }
        ],
        pagination: {
          currentPage: parseInt(page as string),
          totalPages: 1,
          totalTrees: 1,
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
    const { latitude, longitude, radius = 10 } = req.query;
    
    res.json({
      success: true,
      message: 'Adoptable trees retrieved successfully',
      data: {
        adoptableTrees: [
          {
            id: 'tree-adopt-1',
            species: 'Oak',
            photoUrl: 'https://example.com/oak.jpg',
            location: {
              latitude: 25.2048,
              longitude: 55.2708,
              address: 'Dubai Marina'
            },
            plantedAt: '2023-06-15T10:30:00Z',
            previousGuardian: 'John Doe',
            reasonForAdoption: 'Moving to another city',
            healthScore: 88
          }
        ]
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
          qrCode: 'QR123456',
          photoUrl: 'https://example.com/tree.jpg',
          location: {
            latitude: 25.2048,
            longitude: 55.2708,
            address: 'Dubai, UAE'
          },
          plantedAt: '2024-01-15T10:30:00Z',
          lastCareAt: '2024-07-10T14:20:00Z',
          healthScore: 95,
          status: 'active',
          guardian: {
            id: 'user-1',
            name: 'John Doe',
            avatar: 'https://example.com/avatar.jpg'
          },
          careLogs: [
            {
              id: 'log-1',
              type: 'watering',
              description: 'Regular watering completed',
              photoUrl: 'https://example.com/care1.jpg',
              createdAt: '2024-07-10T14:20:00Z',
              pointsEarned: 20
            }
          ],
          totalPoints: 320,
          milestones: [
            {
              type: 'first_month',
              achievedAt: '2024-02-15T10:30:00Z',
              pointsEarned: 100
            }
          ]
        }
      }
    });
  }
);

// PUT /api/trees/:id - Update tree details
router.put(
  '/:id',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Tree updated successfully',
      data: {
        tree: {
          id: req.params.id,
          species: req.body.species,
          location: req.body.location,
          updatedAt: new Date().toISOString()
        }
      }
    });
  }
);

// POST /api/trees/:id/care - Submit care log
router.post(
  '/:id/care',
  authenticateToken,
  uploadMiddleware.single('photo'),
  (req, res) => {
    res.json({
      success: true,
      message: 'Care log submitted successfully',
      data: {
        careLog: {
          id: 'log-new',
          treeId: req.params.id,
          type: req.body.type, // watering, pruning, fertilizing, etc.
          description: req.body.description,
          photoUrl: req.file ? 'https://example.com/care-photo.jpg' : null,
          createdAt: new Date().toISOString(),
          pointsEarned: 20
        },
        treeHealthUpdate: {
          healthScore: 95,
          lastCareAt: new Date().toISOString()
        }
      }
    });
  }
);

// POST /api/trees/:id/adopt - Adopt a tree
router.post(
  '/:id/adopt',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Tree adopted successfully',
      data: {
        tree: {
          id: req.params.id,
          guardianId: req.user.id,
          adoptedAt: new Date().toISOString(),
          status: 'active'
        },
        pointsEarned: 30
      }
    });
  }
);

// POST /api/trees/:id/transfer - Transfer tree ownership
router.post(
  '/:id/transfer',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Tree transfer request sent successfully',
      data: {
        transferRequest: {
          id: 'transfer-1',
          treeId: req.params.id,
          fromGuardianId: req.user.id,
          toGuardianId: req.body.newGuardianId,
          status: 'pending',
          createdAt: new Date().toISOString()
        }
      }
    });
  }
);

// GET /api/trees/:id/care-logs - Get tree care history
router.get(
  '/:id/care-logs',
  optionalAuth,
  (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    
    res.json({
      success: true,
      message: 'Care logs retrieved successfully',
      data: {
        careLogs: [
          {
            id: 'log-1',
            type: 'watering',
            description: 'Regular watering completed',
            photoUrl: 'https://example.com/care1.jpg',
            createdAt: '2024-07-10T14:20:00Z',
            pointsEarned: 20,
            guardian: {
              id: 'user-1',
              name: 'John Doe',
              avatar: 'https://example.com/avatar.jpg'
            }
          }
        ],
        pagination: {
          currentPage: parseInt(page as string),
          totalPages: 1,
          totalLogs: 1,
          hasNext: false,
          hasPrev: false
        }
      }
    });
  }
);

// DELETE /api/trees/:id - Delete tree (admin only or owner)
router.delete(
  '/:id',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Tree deleted successfully'
    });
  }
);

export default router;