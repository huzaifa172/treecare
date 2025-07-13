import { GoogleGenerativeAI } from '@google/generative-ai';
import prisma from '../utils/database';
import { CustomError } from '../middleware/error.middleware';
import { ERROR_MESSAGES } from '../utils/constants';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export class AIService {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro' });
  private visionModel = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

  // Tree Health Analysis
  async analyzeTreeHealth(treeId: string, photoUrl?: string, notes?: string) {
    try {
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        include: {
          updates: {
            orderBy: { createdAt: 'desc' },
            take: 5
          },
          owner: {
            select: { name: true, city: true, country: true }
          }
        }
      });

      if (!tree) {
        throw new CustomError('Tree not found', 404);
      }

      const prompt = this.buildHealthAnalysisPrompt(tree, photoUrl, notes);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const analysis = response.text();

      // Parse AI response and extract structured data
      const structuredAnalysis = this.parseHealthAnalysis(analysis);

      // Save AI interaction
      await prisma.aIInteraction.create({
        data: {
          type: 'TREE_HEALTH_ANALYSIS',
          input: { treeId, photoUrl, notes },
          output: structuredAnalysis,
          model: 'gemini-pro',
          tokensUsed: response.usageMetadata?.totalTokenCount || 0,
          userId: tree.ownerId,
          treeId: tree.id,
          success: true
        }
      });

      // Update tree with AI insights
      await prisma.tree.update({
        where: { id: treeId },
        data: {
          aiHealthScore: structuredAnalysis.healthScore,
          aiCareRecommendations: structuredAnalysis.recommendations,
          currentHealthStatus: structuredAnalysis.healthStatus
        }
      });

      return structuredAnalysis;
    } catch (error) {
      console.error('AI Health Analysis Error:', error);
      throw new CustomError('Failed to analyze tree health', 500);
    }
  }

  // Generate Care Recommendations
  async generateCareRecommendations(treeId: string, userId: string) {
    try {
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        include: {
          updates: {
            orderBy: { createdAt: 'desc' },
            take: 10
          },
          owner: {
            select: { name: true, city: true, country: true }
          }
        }
      });

      if (!tree) {
        throw new CustomError('Tree not found', 404);
      }

      const prompt = this.buildCareRecommendationPrompt(tree);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const recommendations = response.text();

      const structuredRecommendations = this.parseCareRecommendations(recommendations);

      // Save recommendations
      for (const rec of structuredRecommendations) {
        await prisma.aIRecommendation.create({
          data: {
            type: rec.type,
            title: rec.title,
            description: rec.description,
            priority: rec.priority,
            data: rec.data,
            userId: userId,
            treeId: treeId
          }
        });
      }

      return structuredRecommendations;
    } catch (error) {
      console.error('AI Care Recommendations Error:', error);
      throw new CustomError('Failed to generate care recommendations', 500);
    }
  }

  // Species Identification
  async identifySpecies(photoUrl: string, location?: { latitude: number; longitude: number }) {
    try {
      const prompt = `Analyze this tree photo and identify the species. 
      Consider the location: ${location ? `${location.latitude}, ${location.longitude}` : 'Unknown'}
      
      Provide:
      1. Species name (common and scientific)
      2. Confidence level (0-100%)
      3. Key identifying features
      4. Care requirements
      5. Growth characteristics
      6. Environmental benefits`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const identification = response.text();

      return this.parseSpeciesIdentification(identification);
    } catch (error) {
      console.error('AI Species Identification Error:', error);
      throw new CustomError('Failed to identify species', 500);
    }
  }

  // Growth Prediction
  async predictGrowth(treeId: string, months: number = 12) {
    try {
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        include: {
          updates: {
            orderBy: { createdAt: 'desc' },
            take: 20
          }
        }
      });

      if (!tree) {
        throw new CustomError('Tree not found', 404);
      }

      const prompt = this.buildGrowthPredictionPrompt(tree, months);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const prediction = response.text();

      const structuredPrediction = this.parseGrowthPrediction(prediction);

      // Update tree with growth prediction
      await prisma.tree.update({
        where: { id: treeId },
        data: {
          aiGrowthPrediction: structuredPrediction
        }
      });

      return structuredPrediction;
    } catch (error) {
      console.error('AI Growth Prediction Error:', error);
      throw new CustomError('Failed to predict growth', 500);
    }
  }

  // Climate Impact Analysis
  async analyzeClimateImpact(treeId: string) {
    try {
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        include: {
          owner: {
            select: { city: true, country: true }
          }
        }
      });

      if (!tree) {
        throw new CustomError('Tree not found', 404);
      }

      const prompt = this.buildClimateImpactPrompt(tree);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const analysis = response.text();

      const structuredAnalysis = this.parseClimateImpact(analysis);

      // Save AI insight
      await prisma.aIInsight.create({
        data: {
          type: 'CLIMATE_IMPACT',
          title: 'Climate Impact Analysis',
          content: structuredAnalysis.summary,
          data: structuredAnalysis,
          confidence: structuredAnalysis.confidence,
          userId: tree.ownerId,
          treeId: tree.id
        }
      });

      return structuredAnalysis;
    } catch (error) {
      console.error('AI Climate Impact Error:', error);
      throw new CustomError('Failed to analyze climate impact', 500);
    }
  }

  // Generate Care Schedule
  async generateCareSchedule(treeId: string, userId: string) {
    try {
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        include: {
          owner: {
            select: { city: true, country: true }
          }
        }
      });

      if (!tree) {
        throw new CustomError('Tree not found', 404);
      }

      const prompt = this.buildCareSchedulePrompt(tree);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const schedule = response.text();

      const structuredSchedule = this.parseCareSchedule(schedule);

      return structuredSchedule;
    } catch (error) {
      console.error('AI Care Schedule Error:', error);
      throw new CustomError('Failed to generate care schedule', 500);
    }
  }

  // Organization Insights
  async generateOrganizationInsights(organizationId: string) {
    try {
      const organization = await prisma.organization.findUnique({
        where: { id: organizationId },
        include: {
          trees: {
            include: {
              updates: {
                orderBy: { createdAt: 'desc' },
                take: 5
              }
            }
          },
          campaigns: true,
          members: true
        }
      });

      if (!organization) {
        throw new CustomError('Organization not found', 404);
      }

      const prompt = this.buildOrganizationInsightsPrompt(organization);
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const insights = response.text();

      const structuredInsights = this.parseOrganizationInsights(insights);

      // Save insights
      for (const insight of structuredInsights) {
        await prisma.aIInsight.create({
          data: {
            type: insight.type,
            title: insight.title,
            content: insight.content,
            data: insight.data,
            confidence: insight.confidence,
            organizationId: organizationId
          }
        });
      }

      return structuredInsights;
    } catch (error) {
      console.error('AI Organization Insights Error:', error);
      throw new CustomError('Failed to generate organization insights', 500);
    }
  }

  // Helper methods for building prompts
  private buildHealthAnalysisPrompt(tree: any, photoUrl?: string, notes?: string): string {
    return `Analyze the health of this ${tree.species} tree.

Tree Information:
- Species: ${tree.species}
- Planted: ${tree.plantedAt}
- Location: ${tree.location}
- Current Health Status: ${tree.currentHealthStatus}
- Owner: ${tree.owner.name} (${tree.owner.city}, ${tree.owner.country})

Recent Updates: ${tree.updates.map(u => `- ${u.createdAt}: ${u.healthStatus} - ${u.notes}`).join('\n')}

${photoUrl ? 'Photo URL: ' + photoUrl : ''}
${notes ? 'Additional Notes: ' + notes : ''}

Provide analysis in JSON format:
{
  "healthScore": 85,
  "healthStatus": "HEALTHY",
  "issues": ["slight yellowing of leaves"],
  "recommendations": ["increase watering frequency"],
  "confidence": 0.9,
  "summary": "Tree is generally healthy with minor care needed"
}`;
  }

  private buildCareRecommendationPrompt(tree: any): string {
    return `Generate care recommendations for this ${tree.species} tree.

Tree Details:
- Age: ${this.calculateAge(tree.plantedAt)} months
- Current Health: ${tree.currentHealthStatus}
- Location: ${tree.location}
- Recent Care: ${tree.updates.map(u => `${u.createdAt}: ${u.notes}`).join(', ')}

Provide recommendations in JSON format:
[
  {
    "type": "WATERING_SCHEDULE",
    "title": "Adjust Watering",
    "description": "Increase watering frequency during dry season",
    "priority": "HIGH",
    "data": {"frequency": "twice weekly", "amount": "2 liters"}
  }
]`;
  }

  private buildGrowthPredictionPrompt(tree: any, months: number): string {
    return `Predict growth for this ${tree.species} tree over the next ${months} months.

Tree History:
- Planted: ${tree.plantedAt}
- Growth History: ${tree.updates.map(u => `${u.createdAt}: ${JSON.stringify(u.growthMeasurements)}`).join('\n')}

Provide prediction in JSON format:
{
  "height": {"current": 1.5, "predicted": 2.1, "unit": "meters"},
  "trunkDiameter": {"current": 0.05, "predicted": 0.08, "unit": "meters"},
  "canopyWidth": {"current": 1.0, "predicted": 1.8, "unit": "meters"},
  "confidence": 0.85,
  "factors": ["good care", "optimal climate"]
}`;
  }

  private buildClimateImpactPrompt(tree: any): string {
    return `Analyze the climate impact of this ${tree.species} tree.

Tree Details:
- Species: ${tree.species}
- Location: ${tree.location}
- Age: ${this.calculateAge(tree.plantedAt)} months

Provide analysis in JSON format:
{
  "co2Absorbed": 25.5,
  "oxygenProduced": 22.0,
  "airQualityImpact": "high",
  "temperatureReduction": 2.5,
  "confidence": 0.9,
  "summary": "This tree significantly contributes to local climate improvement"
}`;
  }

  private buildCareSchedulePrompt(tree: any): string {
    return `Generate a care schedule for this ${tree.species} tree.

Tree Information:
- Species: ${tree.species}
- Location: ${tree.location}
- Current Health: ${tree.currentHealthStatus}

Provide schedule in JSON format:
{
  "watering": {"frequency": "weekly", "amount": "2 liters", "bestTime": "morning"},
  "fertilization": {"frequency": "monthly", "type": "organic", "amount": "100g"},
  "pruning": {"frequency": "quarterly", "type": "light pruning"},
  "pestControl": {"frequency": "as needed", "method": "natural repellents"}
}`;
  }

  private buildOrganizationInsightsPrompt(organization: any): string {
    return `Generate insights for organization: ${organization.name}

Organization Data:
- Total Trees: ${organization.trees.length}
- Total Members: ${organization.members.length}
- Active Campaigns: ${organization.campaigns.length}
- Trees by Health: ${this.groupTreesByHealth(organization.trees)}

Provide insights in JSON format:
[
  {
    "type": "HEALTH_TREND",
    "title": "Overall Tree Health",
    "content": "85% of trees are in good health",
    "confidence": 0.9,
    "data": {"healthyTrees": 85, "totalTrees": 100}
  }
]`;
  }

  // Helper methods for parsing AI responses
  private parseHealthAnalysis(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : { error: 'Invalid response format' };
    } catch (error) {
      return { error: 'Failed to parse response' };
    }
  }

  private parseCareRecommendations(response: string): any[] {
    try {
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch (error) {
      return [];
    }
  }

  private parseSpeciesIdentification(response: string): any {
    try {
      const lines = response.split('\n');
      const result: any = {};
      
      lines.forEach(line => {
        if (line.includes('Species:')) result.species = line.split(':')[1].trim();
        if (line.includes('Confidence:')) result.confidence = parseFloat(line.split(':')[1].replace('%', ''));
        if (line.includes('Features:')) result.features = line.split(':')[1].trim();
      });
      
      return result;
    } catch (error) {
      return { error: 'Failed to parse identification' };
    }
  }

  private parseGrowthPrediction(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : { error: 'Invalid response format' };
    } catch (error) {
      return { error: 'Failed to parse prediction' };
    }
  }

  private parseClimateImpact(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : { error: 'Invalid response format' };
    } catch (error) {
      return { error: 'Failed to parse climate impact' };
    }
  }

  private parseCareSchedule(response: string): any {
    try {
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : { error: 'Invalid response format' };
    } catch (error) {
      return { error: 'Failed to parse care schedule' };
    }
  }

  private parseOrganizationInsights(response: string): any[] {
    try {
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      return jsonMatch ? JSON.parse(jsonMatch[0]) : [];
    } catch (error) {
      return [];
    }
  }

  // Utility methods
  private calculateAge(plantedAt: string): number {
    const planted = new Date(plantedAt);
    const now = new Date();
    return Math.floor((now.getTime() - planted.getTime()) / (1000 * 60 * 60 * 24 * 30));
  }

  private groupTreesByHealth(trees: any[]): any {
    const healthCounts: any = {};
    trees.forEach(tree => {
      const status = tree.currentHealthStatus;
      healthCounts[status] = (healthCounts[status] || 0) + 1;
    });
    return healthCounts;
  }
}

export const aiService = new AIService();