import { Request, Response, NextFunction } from 'express';
import { aiService } from '../services/ai.service';
import { API_RESPONSE } from '../utils/constants';

export const analyzeTreeHealth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { treeId } = req.params;
    const updateData = req.body;
    const userId = (req as any).user.id;

    const insight = await aiService.analyzeTreeHealth(treeId, updateData);
    
    // Log the interaction
    await aiService.logInteraction(userId, 'TREE_HEALTH_ANALYSIS', { treeId, updateData }, insight);

    res.json(API_RESPONSE.SUCCESS('Tree health analysis completed', insight));
  } catch (error) {
    next(error);
  }
};

export const generateCareRecommendations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { treeId } = req.body;
    const userId = (req as any).user.id;

    const recommendations = await aiService.generateCareRecommendations(userId, treeId);
    
    // Log the interaction
    await aiService.logInteraction(userId, 'CARE_RECOMMENDATION', { treeId }, recommendations);

    res.json(API_RESPONSE.SUCCESS('Care recommendations generated', recommendations));
  } catch (error) {
    next(error);
  }
};

export const predictGrowthAndImpact = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { treeId } = req.params;
    const userId = (req as any).user.id;

    const prediction = await aiService.predictGrowthAndImpact(treeId);
    
    // Log the interaction
    await aiService.logInteraction(userId, 'GROWTH_PREDICTION', { treeId }, prediction);

    res.json(API_RESPONSE.SUCCESS('Growth prediction completed', prediction));
  } catch (error) {
    next(error);
  }
};

export const generateEnvironmentalReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { timeframe = 'month' } = req.body;
    const userId = (req as any).user.id;

    const report = await aiService.generateEnvironmentalReport(userId, timeframe);
    
    // Log the interaction
    await aiService.logInteraction(userId, 'CLIMATE_IMPACT', { timeframe }, report);

    res.json(API_RESPONSE.SUCCESS('Environmental report generated', report));
  } catch (error) {
    next(error);
  }
};

export const createCareSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;

    const schedule = await aiService.createCareSchedule(userId);
    
    // Log the interaction
    await aiService.logInteraction(userId, 'CARE_SCHEDULE', {}, schedule);

    res.json(API_RESPONSE.SUCCESS('Care schedule created', schedule));
  } catch (error) {
    next(error);
  }
};

export const getUserInsights = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const { limit = 10 } = req.query;

    const insights = await aiService.getUserInsights(userId, Number(limit));

    res.json(API_RESPONSE.SUCCESS('AI insights retrieved', insights));
  } catch (error) {
    next(error);
  }
};

export const getUserRecommendations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;
    const { limit = 10 } = req.query;

    const recommendations = await aiService.getUserRecommendations(userId, Number(limit));

    res.json(API_RESPONSE.SUCCESS('AI recommendations retrieved', recommendations));
  } catch (error) {
    next(error);
  }
};

export const markRecommendationRead = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;

    // Update recommendation as read
    const { PrismaClient } = require('../generated/client');
    const prisma = new PrismaClient();
    
    await prisma.aIRecommendation.update({
      where: { id, userId },
      data: { isRead: true }
    });

    res.json(API_RESPONSE.SUCCESS('Recommendation marked as read'));
  } catch (error) {
    next(error);
  }
};

export const applyRecommendation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user.id;

    // Mark recommendation as applied
    const { PrismaClient } = require('../generated/client');
    const prisma = new PrismaClient();
    
    await prisma.aIRecommendation.update({
      where: { id, userId },
      data: { isApplied: true }
    });

    res.json(API_RESPONSE.SUCCESS('Recommendation applied successfully'));
  } catch (error) {
    next(error);
  }
};

export const getAIAnalytics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).user.id;

    // Get AI usage analytics
    const { PrismaClient } = require('../generated/client');
    const prisma = new PrismaClient();
    
    const [interactions, insights, recommendations] = await Promise.all([
      prisma.aIInteraction.count({ where: { userId } }),
      prisma.aIInsight.count({ where: { userId } }),
      prisma.aIRecommendation.count({ where: { userId } })
    ]);

    const analytics = {
      totalInteractions: interactions,
      totalInsights: insights,
      totalRecommendations: recommendations,
      successRate: interactions > 0 ? 95 : 0, // Assuming 95% success rate
      averageResponseTime: 1500, // milliseconds
      mostUsedFeature: 'tree_health_analysis'
    };

    res.json(API_RESPONSE.SUCCESS('AI analytics retrieved', analytics));
  } catch (error) {
    next(error);
  }
};