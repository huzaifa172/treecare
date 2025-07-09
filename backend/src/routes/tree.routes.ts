import { Router } from 'express';
import { authenticateToken, optionalAuth } from '../middleware/auth.middleware';
import { validateSchema, validateQuery, validateParams } from '../middleware/validation.middleware';
import {
  createTreeSchema,
  updateTreeSchema,
  transferTreeSchema,
  adoptTreeSchema,
  treeQuerySchema,
  adoptableTreesSchema
} from '../utils/validation';
import { asyncHandler } from '../middleware/error.middleware';
import * as treeController from '../controllers/tree.controller';
import { uploadMiddleware } from '../middleware/upload.middleware';

const router = Router();

// POST /api/trees - Register new tree (requires auth + file upload)
router.post(
  '/',
  authenticateToken,
  uploadMiddleware.single('photo'),
  validateSchema(createTreeSchema),
  asyncHandler(treeController.createTree)
);

// GET /api/trees - Get user's trees (requires auth)
router.get(
  '/',
  authenticateToken,
  validateQuery(treeQuerySchema),
  asyncHandler(treeController.getUserTrees)
);

// GET /api/trees/adoptable - Get adoptable trees nearby
router.get(
  '/adoptable',
  optionalAuth,
  validateQuery(adoptableTreesSchema),
  asyncHandler(treeController.getAdoptableTrees)
);

// GET /api/trees/:id - Get specific tree details
router.get(
  '/:id',
  optionalAuth,
  validateParams({ id: z.string().uuid() }),
  asyncHandler(treeController.getTreeById)
);

// POST /api/trees/:id/update - Add timeline update (requires auth + ownership)
router.post(
  '/:id/update',
  authenticateToken,
  uploadMiddleware.single('photo'),
  validateParams({ id: z.string().uuid() }),
  validateSchema(updateTreeSchema),
  asyncHandler(treeController.updateTree)
);

// POST /api/trees/:id/transfer - Transfer tree ownership (requires auth + ownership)
router.post(
  '/:id/transfer',
  authenticateToken,
  validateParams({ id: z.string().uuid() }),
  validateSchema(transferTreeSchema),
  asyncHandler(treeController.transferTree)
);

// POST /api/trees/:id/adopt - Adopt a tree (requires auth)
router.post(
  '/:id/adopt',
  authenticateToken,
  validateParams({ id: z.string().uuid() }),
  validateSchema(adoptTreeSchema),
  asyncHandler(treeController.adoptTree)
);

// DELETE /api/trees/:id - Delete tree (requires auth + ownership)
router.delete(
  '/:id',
  authenticateToken,
  validateParams({ id: z.string().uuid() }),
  asyncHandler(treeController.deleteTree)
);

// GET /api/trees/:id/timeline - Get tree timeline
router.get(
  '/:id/timeline',
  optionalAuth,
  validateParams({ id: z.string().uuid() }),
  asyncHandler(treeController.getTreeTimeline)
);

// GET /api/trees/:id/certificate - Generate/get tree certificate
router.get(
  '/:id/certificate',
  authenticateToken,
  validateParams({ id: z.string().uuid() }),
  asyncHandler(treeController.getTreeCertificate)
);

export default router;