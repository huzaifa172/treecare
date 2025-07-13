import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { aiService } from '../services/aiService';
import { PrismaClient } from '../generated/client';

const router = Router();
const prisma = new PrismaClient();

// TreeVision AI - Species Detection
router.post('/detect-species', authenticateToken, async (req, res) => {
  try {
    const { imageBase64 } = req.body;
    
    if (!imageBase64) {
      return res.status(400).json({
        success: false,
        message: 'Image data is required'
      });
    }

    const result = await aiService.detectTreeSpecies(imageBase64);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'SPECIES_DETECTION',
      { imageSize: imageBase64.length },
      result
    );

    res.json({
      success: true,
      message: 'Species detected successfully',
      data: result
    });
  } catch (error) {
    console.error('Species detection error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to detect species'
    });
  }
});

// TreeVision AI - Health Analysis
router.post('/analyze-health', authenticateToken, async (req, res) => {
  try {
    const { imageBase64, treeId, previousHealth } = req.body;
    
    if (!imageBase64) {
      return res.status(400).json({
        success: false,
        message: 'Image data is required'
      });
    }

    const result = await aiService.analyzeTreeHealth(imageBase64, previousHealth);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'HEALTH_ANALYSIS',
      { imageSize: imageBase64.length, treeId, previousHealth },
      result,
      treeId
    );

    res.json({
      success: true,
      message: 'Health analysis completed',
      data: result
    });
  } catch (error) {
    console.error('Health analysis error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to analyze health'
    });
  }
});

// GeoVerify AI - GPS Validation
router.post('/validate-location', authenticateToken, async (req, res) => {
  try {
    const { imageBase64, gpsData } = req.body;
    
    if (!imageBase64 || !gpsData) {
      return res.status(400).json({
        success: false,
        message: 'Image and GPS data are required'
      });
    }

    const result = await aiService.validateLocation(imageBase64, gpsData);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'LOCATION_VALIDATION',
      { imageSize: imageBase64.length, gpsData },
      result
    );

    res.json({
      success: true,
      message: 'Location validated successfully',
      data: result
    });
  } catch (error) {
    console.error('Location validation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to validate location'
    });
  }
});

// Impact Analyzer - CO2 Calculation
router.post('/calculate-impact', authenticateToken, async (req, res) => {
  try {
    const { treeData } = req.body;
    
    if (!treeData) {
      return res.status(400).json({
        success: false,
        message: 'Tree data is required'
      });
    }

    const result = await aiService.calculateEnvironmentalImpact(treeData);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'IMPACT_CALCULATION',
      { treeData },
      result
    );

    res.json({
      success: true,
      message: 'Environmental impact calculated',
      data: result
    });
  } catch (error) {
    console.error('Impact calculation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to calculate impact'
    });
  }
});

// GuardianBot - Care Assistant
router.post('/guardian-bot', authenticateToken, async (req, res) => {
  try {
    const { message, treeId, context } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    const result = await aiService.getCareRecommendations(treeId, req.user.id, context);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'GUARDIAN_BOT',
      { message, treeId, context },
      result,
      treeId
    );

    res.json({
      success: true,
      message: 'GuardianBot response generated',
      data: result
    });
  } catch (error) {
    console.error('GuardianBot error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get GuardianBot response'
    });
  }
});

// FraudGuard AI - Suspicious Activity Detection
router.post('/detect-fraud', authenticateToken, async (req, res) => {
  try {
    const { activityData } = req.body;
    
    if (!activityData) {
      return res.status(400).json({
        success: false,
        message: 'Activity data is required'
      });
    }

    const result = await aiService.detectSuspiciousActivity(activityData);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'FRAUD_DETECTION',
      { activityData },
      result
    );

    res.json({
      success: true,
      message: 'Fraud detection completed',
      data: result
    });
  } catch (error) {
    console.error('Fraud detection error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to detect fraud'
    });
  }
});

// Reward Optimizer - Dynamic Point Adjustment
router.post('/optimize-rewards', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: 'User ID is required'
      });
    }

    const result = await aiService.optimizeRewards(userId);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'REWARD_OPTIMIZATION',
      { targetUserId: userId },
      result
    );

    res.json({
      success: true,
      message: 'Rewards optimized successfully',
      data: result
    });
  } catch (error) {
    console.error('Reward optimization error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to optimize rewards'
    });
  }
});

// AutoReminderBot - Care Reminders
router.post('/generate-reminders', authenticateToken, async (req, res) => {
  try {
    const result = await aiService.generateCareReminders();
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'REMINDER_GENERATION',
      {},
      result
    );

    res.json({
      success: true,
      message: 'Care reminders generated',
      data: result
    });
  } catch (error) {
    console.error('Reminder generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate reminders'
    });
  }
});

// ProofBot - Validate Organization Data
router.post('/validate-organization', authenticateToken, async (req, res) => {
  try {
    const { orgId } = req.body;
    
    if (!orgId) {
      return res.status(400).json({
        success: false,
        message: 'Organization ID is required'
      });
    }

    const result = await aiService.validateOrganizationData(orgId);
    
    // Log AI interaction
    await aiService.logInteraction(
      req.user.id,
      'ORGANIZATION_VALIDATION',
      { orgId },
      result
    );

    res.json({
      success: true,
      message: 'Organization validation completed',
      data: result
    });
  } catch (error) {
    console.error('Organization validation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to validate organization'
    });
  }
});

// Get AI Insights for User
router.get('/insights', authenticateToken, async (req, res) => {
  try {
    const insights = await prisma.aIInsight.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    res.json({
      success: true,
      message: 'AI insights retrieved',
      data: { insights }
    });
  } catch (error) {
    console.error('Get insights error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get AI insights'
    });
  }
});

// Get AI Recommendations for User
router.get('/recommendations', authenticateToken, async (req, res) => {
  try {
    const recommendations = await prisma.aIRecommendation.findMany({
      where: { 
        userId: req.user.id,
        isRead: false
      },
      orderBy: { createdAt: 'desc' },
      take: 10
    });

    res.json({
      success: true,
      message: 'AI recommendations retrieved',
      data: { recommendations }
    });
  } catch (error) {
    console.error('Get recommendations error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get AI recommendations'
    });
  }
});

// Mark AI Recommendation as Read
router.patch('/recommendations/:id/read', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    
    const recommendation = await prisma.aIRecommendation.update({
      where: { 
        id,
        userId: req.user.id
      },
      data: { isRead: true }
    });

    res.json({
      success: true,
      message: 'Recommendation marked as read',
      data: { recommendation }
    });
  } catch (error) {
    console.error('Mark recommendation read error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to mark recommendation as read'
    });
  }
});

// Get AI Interaction History
router.get('/interactions', authenticateToken, async (req, res) => {
  try {
    const { page = 1, limit = 20, type } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    
    const where: any = { userId: req.user.id };
    if (type) where.type = type;

    const interactions = await prisma.aIInteraction.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: Number(limit)
    });

    const total = await prisma.aIInteraction.count({ where });

    res.json({
      success: true,
      message: 'AI interactions retrieved',
      data: {
        interactions,
        pagination: {
          currentPage: Number(page),
          totalPages: Math.ceil(total / Number(limit)),
          totalItems: total,
          hasNext: skip + Number(limit) < total,
          hasPrev: Number(page) > 1
        }
      }
    });
  } catch (error) {
    console.error('Get interactions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get AI interactions'
    });
  }
});

// Get AI Analytics (Admin only)
router.get('/analytics', authenticateToken, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    const [
      totalInteractions,
      totalCost,
      averageResponseTime,
      modelUsage
    ] = await Promise.all([
      prisma.aIInteraction.count(),
      prisma.aIInteraction.aggregate({
        _sum: { cost: true }
      }),
      prisma.aIInteraction.aggregate({
        _avg: { responseTime: true }
      }),
      prisma.aIInteraction.groupBy({
        by: ['model'],
        _count: { id: true },
        _sum: { cost: true }
      })
    ]);

    res.json({
      success: true,
      message: 'AI analytics retrieved',
      data: {
        totalInteractions,
        totalCost: totalCost._sum.cost || 0,
        averageResponseTime: averageResponseTime._avg.responseTime || 0,
        modelUsage
      }
    });
  } catch (error) {
    console.error('Get analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get AI analytics'
    });
  }
});

export default router;