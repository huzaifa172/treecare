import { Router } from 'express';
import { validateSchema } from '../middleware/validation.middleware';
import { asyncHandler } from '../middleware/error.middleware';
import { authenticateToken } from '../middleware/auth.middleware';
import * as aiController from '../controllers/ai.controller';

const router = Router();

// Apply authentication to all AI routes
router.use(authenticateToken);

// POST /api/ai/analyze-health - Analyze tree health
router.post(
  '/analyze-health/:treeId',
  asyncHandler(aiController.analyzeTreeHealth)
);

// POST /api/ai/recommendations - Generate care recommendations
router.post(
  '/recommendations',
  asyncHandler(aiController.generateCareRecommendations)
);

// POST /api/ai/predict-growth/:treeId - Predict tree growth
router.post(
  '/predict-growth/:treeId',
  asyncHandler(aiController.predictGrowthAndImpact)
);

// POST /api/ai/environmental-report - Generate environmental report
router.post(
  '/environmental-report',
  asyncHandler(aiController.generateEnvironmentalReport)
);

// POST /api/ai/care-schedule - Create personalized care schedule
router.post(
  '/care-schedule',
  asyncHandler(aiController.createCareSchedule)
);

// GET /api/ai/insights - Get user AI insights
router.get(
  '/insights',
  asyncHandler(aiController.getUserInsights)
);

// GET /api/ai/recommendations - Get user AI recommendations
router.get(
  '/recommendations',
  asyncHandler(aiController.getUserRecommendations)
);

// POST /api/ai/mark-recommendation-read/:id - Mark recommendation as read
router.post(
  '/mark-recommendation-read/:id',
  asyncHandler(aiController.markRecommendationRead)
);

// POST /api/ai/apply-recommendation/:id - Apply a recommendation
router.post(
  '/apply-recommendation/:id',
  asyncHandler(aiController.applyRecommendation)
);

// GET /api/ai/analytics - Get AI usage analytics
router.get(
  '/analytics',
  asyncHandler(aiController.getAIAnalytics)
);

export default router;