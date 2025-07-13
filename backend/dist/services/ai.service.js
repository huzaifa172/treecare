"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiService = void 0;
const generative_ai_1 = require("@google/generative-ai");
const client_1 = require("../generated/client");
const prisma = new client_1.PrismaClient();
// Initialize Gemini AI
const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
class AIService {
    model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    /**
     * Analyze tree health using AI
     */
    async analyzeTreeHealth(treeId, updateData) {
        try {
            const tree = await prisma.tree.findUnique({
                where: { id: treeId },
                include: {
                    updates: { orderBy: { createdAt: 'desc' }, take: 5 },
                    owner: true,
                },
            });
            if (!tree) {
                throw new Error('Tree not found');
            }
            const prompt = `
        Analyze the health of this tree based on the following data:
        
        Tree Information:
        - Species: ${tree.species}
        - Planted: ${tree.plantedAt}
        - Current Health: ${tree.currentHealthStatus}
        - Location: ${JSON.stringify(tree.location)}
        
        Recent Updates:
        ${tree.updates.map(update => `
          - Date: ${update.createdAt}
          - Health: ${update.healthStatus}
          - Notes: ${update.notes || 'None'}
          - Growth: ${JSON.stringify(update.growthMeasurements || {})}
        `).join('\n')}
        
        Latest Update:
        - Health Status: ${updateData.healthStatus}
        - Notes: ${updateData.notes || 'None'}
        - Growth Measurements: ${JSON.stringify(updateData.growthMeasurements || {})}
        
        Please provide:
        1. Health score (0-100)
        2. Key health indicators
        3. Potential issues
        4. Recommendations
        5. Growth analysis
        6. Environmental factors to consider
        
        Format as JSON with fields: healthScore, indicators, issues, recommendations, growthAnalysis, environmentalFactors
      `;
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const analysis = JSON.parse(response.text());
            // Store AI insight
            const insight = await prisma.aIInsight.create({
                data: {
                    type: 'HEALTH_TREND',
                    title: 'Tree Health Analysis',
                    content: `AI analysis of ${tree.species} health status`,
                    data: analysis,
                    confidence: 0.85,
                    treeId: treeId,
                    userId: tree.ownerId,
                },
            });
            // Update tree with AI health score
            await prisma.tree.update({
                where: { id: treeId },
                data: {
                    aiHealthScore: analysis.healthScore,
                    aiCareRecommendations: analysis.recommendations,
                },
            });
            return {
                type: 'HEALTH_TREND',
                title: 'Tree Health Analysis',
                description: `AI analysis of ${tree.species} health status`,
                data: analysis,
                confidence: 0.85,
                timestamp: new Date(),
            };
        }
        catch (error) {
            console.error('AI Tree Health Analysis Error:', error);
            throw new Error('Failed to analyze tree health');
        }
    }
    /**
     * Generate personalized care recommendations
     */
    async generateCareRecommendations(userId, treeId) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: {
                    trees: {
                        include: {
                            updates: { orderBy: { createdAt: 'desc' }, take: 3 },
                        },
                    },
                },
            });
            if (!user) {
                throw new Error('User not found');
            }
            const trees = treeId
                ? user.trees.filter(t => t.id === treeId)
                : user.trees;
            const prompt = `
        Generate personalized tree care recommendations for this user:
        
        User Profile:
        - Name: ${user.name}
        - Location: ${user.city}, ${user.country}
        - Experience Level: Based on ${user.trees.length} trees
        - Green Points: ${user.greenPoints}
        
        Trees to Care For:
        ${trees.map(tree => `
          - Species: ${tree.species}
          - Health: ${tree.currentHealthStatus}
          - Planted: ${tree.plantedAt}
          - Recent Updates: ${tree.updates.length}
          - AI Health Score: ${tree.aiHealthScore || 'N/A'}
        `).join('\n')}
        
        Generate 3-5 specific, actionable recommendations including:
        1. Immediate actions needed
        2. Seasonal care tips
        3. Long-term maintenance
        4. Environmental optimization
        5. Growth enhancement
        
        For each recommendation include:
        - Priority (LOW/MEDIUM/HIGH)
        - Estimated time commitment
        - Expected impact
        - Difficulty level
        - Required resources
        
        Format as JSON array with fields: type, title, description, priority, data, actionable, estimatedImpact
      `;
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const recommendations = JSON.parse(response.text());
            // Store recommendations
            const storedRecommendations = await Promise.all(recommendations.map((rec) => prisma.aIRecommendation.create({
                data: {
                    type: 'MAINTENANCE',
                    title: rec.title,
                    description: rec.description,
                    priority: rec.priority,
                    data: rec.data,
                    userId: userId,
                    treeId: treeId,
                },
            })));
            return storedRecommendations.map(rec => ({
                type: rec.type,
                title: rec.title,
                description: rec.description,
                priority: rec.priority,
                data: rec.data,
                actionable: true,
                estimatedImpact: rec.data.estimatedImpact || 'Medium',
            }));
        }
        catch (error) {
            console.error('AI Care Recommendations Error:', error);
            throw new Error('Failed to generate care recommendations');
        }
    }
    /**
     * Predict tree growth and environmental impact
     */
    async predictGrowthAndImpact(treeId) {
        try {
            const tree = await prisma.tree.findUnique({
                where: { id: treeId },
                include: {
                    updates: { orderBy: { createdAt: 'desc' }, take: 10 },
                    owner: true,
                },
            });
            if (!tree) {
                throw new Error('Tree not found');
            }
            const prompt = `
        Predict the growth and environmental impact of this tree:
        
        Tree Data:
        - Species: ${tree.species}
        - Age: ${Math.floor((Date.now() - new Date(tree.plantedAt).getTime()) / (1000 * 60 * 60 * 24 * 365))} years
        - Current Health: ${tree.currentHealthStatus}
        - Location: ${JSON.stringify(tree.location)}
        
        Growth History:
        ${tree.updates.map(update => `
          - Date: ${update.createdAt}
          - Growth: ${JSON.stringify(update.growthMeasurements || {})}
        `).join('\n')}
        
        Predict for the next 1, 5, and 10 years:
        1. Expected height and canopy spread
        2. CO2 sequestration potential
        3. Oxygen production
        4. Soil improvement impact
        5. Wildlife habitat value
        6. Maintenance requirements
        7. Potential challenges
        
        Include confidence levels and environmental factors.
        
        Format as JSON with fields: shortTerm, mediumTerm, longTerm, environmentalImpact, maintenanceNeeds, challenges
      `;
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const prediction = JSON.parse(response.text());
            // Store AI insight
            const insight = await prisma.aIInsight.create({
                data: {
                    type: 'GROWTH_PATTERN',
                    title: 'Growth and Impact Prediction',
                    content: `AI prediction for ${tree.species} growth and environmental impact`,
                    data: prediction,
                    confidence: 0.80,
                    treeId: treeId,
                    userId: tree.ownerId,
                },
            });
            // Update tree with growth prediction
            await prisma.tree.update({
                where: { id: treeId },
                data: {
                    aiGrowthPrediction: prediction,
                },
            });
            return {
                type: 'GROWTH_PATTERN',
                title: 'Growth and Impact Prediction',
                description: `AI prediction for ${tree.species} growth and environmental impact`,
                data: prediction,
                confidence: 0.80,
                timestamp: new Date(),
            };
        }
        catch (error) {
            console.error('AI Growth Prediction Error:', error);
            throw new Error('Failed to predict growth and impact');
        }
    }
    /**
     * Generate environmental impact report
     */
    async generateEnvironmentalReport(userId, timeframe = 'month') {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: {
                    trees: {
                        include: {
                            updates: { orderBy: { createdAt: 'desc' } },
                        },
                    },
                },
            });
            if (!user) {
                throw new Error('User not found');
            }
            const prompt = `
        Generate an environmental impact report for this tree guardian:
        
        Guardian Profile:
        - Name: ${user.name}
        - Trees Managed: ${user.trees.length}
        - Green Points: ${user.greenPoints}
        - Location: ${user.city}, ${user.country}
        
        Tree Portfolio:
        ${user.trees.map(tree => `
          - Species: ${tree.species}
          - Age: ${Math.floor((Date.now() - new Date(tree.plantedAt).getTime()) / (1000 * 60 * 60 * 24 * 365))} years
          - Health: ${tree.currentHealthStatus}
          - Updates: ${tree.updates.length}
        `).join('\n')}
        
        Timeframe: ${timeframe}
        
        Calculate and analyze:
        1. Total CO2 sequestered
        2. Oxygen produced
        3. Water filtered
        4. Soil improved
        5. Wildlife supported
        6. Carbon footprint offset
        7. Environmental contribution ranking
        8. Future impact projections
        9. Recommendations for optimization
        
        Include comparisons to common benchmarks and actionable insights.
        
        Format as JSON with fields: summary, metrics, impact, projections, recommendations, benchmarks
      `;
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const report = JSON.parse(response.text());
            // Store AI insight
            const insight = await prisma.aIInsight.create({
                data: {
                    type: 'CLIMATE_IMPACT',
                    title: `${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}ly Environmental Report`,
                    content: `Environmental impact report for ${user.name}`,
                    data: report,
                    confidence: 0.90,
                    userId: userId,
                },
            });
            return {
                type: 'CLIMATE_IMPACT',
                title: `${timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}ly Environmental Report`,
                description: `Environmental impact report for ${user.name}`,
                data: report,
                confidence: 0.90,
                timestamp: new Date(),
            };
        }
        catch (error) {
            console.error('AI Environmental Report Error:', error);
            throw new Error('Failed to generate environmental report');
        }
    }
    /**
     * Create personalized care schedule
     */
    async createCareSchedule(userId) {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
                include: {
                    trees: {
                        include: {
                            updates: { orderBy: { createdAt: 'desc' }, take: 1 },
                        },
                    },
                },
            });
            if (!user) {
                throw new Error('User not found');
            }
            const prompt = `
        Create a personalized tree care schedule for this guardian:
        
        Guardian Profile:
        - Name: ${user.name}
        - Location: ${user.city}, ${user.country}
        - Trees: ${user.trees.length}
        - Experience: ${user.greenPoints} green points
        
        Trees:
        ${user.trees.map(tree => `
          - Species: ${tree.species}
          - Health: ${tree.currentHealthStatus}
          - Last Update: ${tree.updates[0]?.createdAt || 'Never'}
          - Age: ${Math.floor((Date.now() - new Date(tree.plantedAt).getTime()) / (1000 * 60 * 60 * 24 * 365))} years
        `).join('\n')}
        
        Create a 3-month care schedule with:
        1. Daily tasks (watering, monitoring)
        2. Weekly tasks (detailed inspection, minor care)
        3. Monthly tasks (major maintenance, updates)
        4. Seasonal tasks (pruning, fertilization, protection)
        5. Priority-based scheduling
        6. Time estimates for each task
        7. Required tools and resources
        
        Consider local climate, tree species, and guardian's experience level.
        
        Format as JSON array with fields: type, title, description, priority, data, actionable, estimatedImpact
      `;
            const result = await this.model.generateContent(prompt);
            const response = await result.response;
            const schedule = JSON.parse(response.text());
            // Store schedule as recommendations
            const storedSchedule = await Promise.all(schedule.map((item) => prisma.aIRecommendation.create({
                data: {
                    type: 'MAINTENANCE',
                    title: item.title,
                    description: item.description,
                    priority: item.priority,
                    data: item.data,
                    userId: userId,
                },
            })));
            return storedSchedule.map(item => ({
                type: item.type,
                title: item.title,
                description: item.description,
                priority: item.priority,
                data: item.data,
                actionable: true,
                estimatedImpact: item.data.estimatedImpact || 'High',
            }));
        }
        catch (error) {
            console.error('AI Care Schedule Error:', error);
            throw new Error('Failed to create care schedule');
        }
    }
    /**
     * Log AI interaction for analytics
     */
    async logInteraction(userId, type, input, output, treeId) {
        try {
            await prisma.aIInteraction.create({
                data: {
                    type: type,
                    input,
                    output,
                    model: 'gemini-pro',
                    tokensUsed: 0, // Could be calculated if needed
                    responseTime: 0, // Could be measured
                    success: true,
                    userId,
                    treeId,
                },
            });
        }
        catch (error) {
            console.error('Failed to log AI interaction:', error);
        }
    }
    /**
     * Get AI insights for user
     */
    async getUserInsights(userId, limit = 10) {
        try {
            const insights = await prisma.aIInsight.findMany({
                where: { userId },
                orderBy: { createdAt: 'desc' },
                take: limit,
            });
            return insights.map(insight => ({
                type: insight.type,
                title: insight.title,
                description: insight.content,
                data: insight.data,
                confidence: insight.confidence,
                timestamp: insight.createdAt,
            }));
        }
        catch (error) {
            console.error('Failed to get user insights:', error);
            throw new Error('Failed to retrieve AI insights');
        }
    }
    /**
     * Get AI recommendations for user
     */
    async getUserRecommendations(userId, limit = 10) {
        try {
            const recommendations = await prisma.aIRecommendation.findMany({
                where: { userId, isRead: false },
                orderBy: { createdAt: 'desc' },
                take: limit,
            });
            return recommendations.map(rec => ({
                type: rec.type,
                title: rec.title,
                description: rec.description,
                priority: rec.priority,
                data: rec.data,
                actionable: true,
                estimatedImpact: rec.data?.estimatedImpact || 'Medium',
            }));
        }
        catch (error) {
            console.error('Failed to get user recommendations:', error);
            throw new Error('Failed to retrieve AI recommendations');
        }
    }
}
exports.aiService = new AIService();
//# sourceMappingURL=ai.service.js.map