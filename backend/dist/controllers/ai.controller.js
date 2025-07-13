"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAIAnalytics = exports.applyRecommendation = exports.markRecommendationRead = exports.getUserRecommendations = exports.getUserInsights = exports.createCareSchedule = exports.generateEnvironmentalReport = exports.predictGrowthAndImpact = exports.generateCareRecommendations = exports.analyzeTreeHealth = void 0;
const ai_service_1 = require("../services/ai.service");
const constants_1 = require("../utils/constants");
const analyzeTreeHealth = async (req, res, next) => {
    try {
        const { treeId } = req.params;
        const updateData = req.body;
        const userId = req.user.id;
        const insight = await ai_service_1.aiService.analyzeTreeHealth(treeId, updateData);
        // Log the interaction
        await ai_service_1.aiService.logInteraction(userId, 'TREE_HEALTH_ANALYSIS', { treeId, updateData }, insight);
        res.json(constants_1.API_RESPONSE.SUCCESS('Tree health analysis completed', insight));
    }
    catch (error) {
        next(error);
    }
};
exports.analyzeTreeHealth = analyzeTreeHealth;
const generateCareRecommendations = async (req, res, next) => {
    try {
        const { treeId } = req.body;
        const userId = req.user.id;
        const recommendations = await ai_service_1.aiService.generateCareRecommendations(userId, treeId);
        // Log the interaction
        await ai_service_1.aiService.logInteraction(userId, 'CARE_RECOMMENDATION', { treeId }, recommendations);
        res.json(constants_1.API_RESPONSE.SUCCESS('Care recommendations generated', recommendations));
    }
    catch (error) {
        next(error);
    }
};
exports.generateCareRecommendations = generateCareRecommendations;
const predictGrowthAndImpact = async (req, res, next) => {
    try {
        const { treeId } = req.params;
        const userId = req.user.id;
        const prediction = await ai_service_1.aiService.predictGrowthAndImpact(treeId);
        // Log the interaction
        await ai_service_1.aiService.logInteraction(userId, 'GROWTH_PREDICTION', { treeId }, prediction);
        res.json(constants_1.API_RESPONSE.SUCCESS('Growth prediction completed', prediction));
    }
    catch (error) {
        next(error);
    }
};
exports.predictGrowthAndImpact = predictGrowthAndImpact;
const generateEnvironmentalReport = async (req, res, next) => {
    try {
        const { timeframe = 'month' } = req.body;
        const userId = req.user.id;
        const report = await ai_service_1.aiService.generateEnvironmentalReport(userId, timeframe);
        // Log the interaction
        await ai_service_1.aiService.logInteraction(userId, 'CLIMATE_IMPACT', { timeframe }, report);
        res.json(constants_1.API_RESPONSE.SUCCESS('Environmental report generated', report));
    }
    catch (error) {
        next(error);
    }
};
exports.generateEnvironmentalReport = generateEnvironmentalReport;
const createCareSchedule = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const schedule = await ai_service_1.aiService.createCareSchedule(userId);
        // Log the interaction
        await ai_service_1.aiService.logInteraction(userId, 'CARE_SCHEDULE', {}, schedule);
        res.json(constants_1.API_RESPONSE.SUCCESS('Care schedule created', schedule));
    }
    catch (error) {
        next(error);
    }
};
exports.createCareSchedule = createCareSchedule;
const getUserInsights = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { limit = 10 } = req.query;
        const insights = await ai_service_1.aiService.getUserInsights(userId, Number(limit));
        res.json(constants_1.API_RESPONSE.SUCCESS('AI insights retrieved', insights));
    }
    catch (error) {
        next(error);
    }
};
exports.getUserInsights = getUserInsights;
const getUserRecommendations = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { limit = 10 } = req.query;
        const recommendations = await ai_service_1.aiService.getUserRecommendations(userId, Number(limit));
        res.json(constants_1.API_RESPONSE.SUCCESS('AI recommendations retrieved', recommendations));
    }
    catch (error) {
        next(error);
    }
};
exports.getUserRecommendations = getUserRecommendations;
const markRecommendationRead = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        // Update recommendation as read
        const { PrismaClient } = require('../generated/client');
        const prisma = new PrismaClient();
        await prisma.aIRecommendation.update({
            where: { id, userId },
            data: { isRead: true }
        });
        res.json(constants_1.API_RESPONSE.SUCCESS('Recommendation marked as read'));
    }
    catch (error) {
        next(error);
    }
};
exports.markRecommendationRead = markRecommendationRead;
const applyRecommendation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        // Mark recommendation as applied
        const { PrismaClient } = require('../generated/client');
        const prisma = new PrismaClient();
        await prisma.aIRecommendation.update({
            where: { id, userId },
            data: { isApplied: true }
        });
        res.json(constants_1.API_RESPONSE.SUCCESS('Recommendation applied successfully'));
    }
    catch (error) {
        next(error);
    }
};
exports.applyRecommendation = applyRecommendation;
const getAIAnalytics = async (req, res, next) => {
    try {
        const userId = req.user.id;
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
        res.json(constants_1.API_RESPONSE.SUCCESS('AI analytics retrieved', analytics));
    }
    catch (error) {
        next(error);
    }
};
exports.getAIAnalytics = getAIAnalytics;
//# sourceMappingURL=ai.controller.js.map