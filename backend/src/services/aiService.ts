import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '../generated/client';

const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export class AIService {
  private model = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });
  private textModel = genAI.getGenerativeModel({ model: 'gemini-pro' });

  // TreeVision AI - Species Detection
  async detectTreeSpecies(imageBase64: string): Promise<{
    species: string;
    confidence: number;
    description: string;
    careTips: string[];
  }> {
    try {
      const prompt = `
        Analyze this tree image and identify the species. Provide:
        1. Species name (common and scientific if possible)
        2. Confidence level (0-100)
        3. Brief description
        4. 3-5 care tips for this species
        
        Format response as JSON:
        {
          "species": "species name",
          "confidence": 85,
          "description": "brief description",
          "careTips": ["tip1", "tip2", "tip3"]
        }
      `;

      const result = await this.model.generateContent([
        prompt,
        {
          inlineData: {
            data: imageBase64,
            mimeType: 'image/jpeg'
          }
        }
      ]);

      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Species detection error:', error);
      return {
        species: 'Unknown',
        confidence: 0,
        description: 'Unable to detect species',
        careTips: ['Provide regular watering', 'Ensure adequate sunlight', 'Monitor for pests']
      };
    }
  }

  // TreeVision AI - Health Analysis
  async analyzeTreeHealth(imageBase64: string, previousHealth?: string): Promise<{
    healthStatus: 'HEALTHY' | 'MODERATE' | 'POOR' | 'CRITICAL';
    healthScore: number;
    issues: string[];
    recommendations: string[];
    growthProgress: number;
  }> {
    try {
      const prompt = `
        Analyze this tree's health status. Consider:
        - Leaf color and condition
        - Trunk health
        - Overall appearance
        - Previous health: ${previousHealth || 'N/A'}
        
        Provide health assessment with:
        1. Health status (HEALTHY/MODERATE/POOR/CRITICAL)
        2. Health score (0-100)
        3. Issues found
        4. Care recommendations
        5. Growth progress estimate (0-100)
        
        Format as JSON response.
      `;

      const result = await this.model.generateContent([
        prompt,
        {
          inlineData: {
            data: imageBase64,
            mimeType: 'image/jpeg'
          }
        }
      ]);

      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Health analysis error:', error);
      return {
        healthStatus: 'MODERATE',
        healthScore: 50,
        issues: ['Unable to analyze health'],
        recommendations: ['Provide regular care', 'Monitor growth'],
        growthProgress: 50
      };
    }
  }

  // GeoVerify AI - GPS Validation
  async validateLocation(imageBase64: string, gpsData: { lat: number; lng: number }): Promise<{
    isValid: boolean;
    confidence: number;
    locationType: string;
    environmentalFactors: string[];
  }> {
    try {
      const prompt = `
        Validate if this image location matches GPS coordinates: ${gpsData.lat}, ${gpsData.lng}
        
        Analyze:
        1. Location consistency
        2. Environmental factors
        3. Suitability for tree planting
        
        Provide validation result with:
        1. Is location valid (true/false)
        2. Confidence level (0-100)
        3. Location type (urban/rural/forest/etc)
        4. Environmental factors
        
        Format as JSON response.
      `;

      const result = await this.model.generateContent([
        prompt,
        {
          inlineData: {
            data: imageBase64,
            mimeType: 'image/jpeg'
          }
        }
      ]);

      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Location validation error:', error);
      return {
        isValid: true,
        confidence: 50,
        locationType: 'Unknown',
        environmentalFactors: ['Unable to analyze location']
      };
    }
  }

  // Impact Analyzer - CO2 Calculation
  async calculateEnvironmentalImpact(treeData: {
    species: string;
    age: number;
    health: string;
    location: string;
  }): Promise<{
    co2Absorbed: number;
    oxygenProduced: number;
    environmentalScore: number;
    impactMetrics: Record<string, number>;
  }> {
    try {
      const prompt = `
        Calculate environmental impact for:
        - Species: ${treeData.species}
        - Age: ${treeData.age} months
        - Health: ${treeData.health}
        - Location: ${treeData.location}
        
        Provide:
        1. CO2 absorbed (kg/year)
        2. Oxygen produced (kg/year)
        3. Environmental score (0-100)
        4. Additional impact metrics
        
        Format as JSON response.
      `;

      const result = await this.textModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Impact calculation error:', error);
      return {
        co2Absorbed: 22.5,
        oxygenProduced: 16.5,
        environmentalScore: 75,
        impactMetrics: {
          'air_quality_improvement': 15,
          'soil_erosion_prevention': 20,
          'biodiversity_support': 10
        }
      };
    }
  }

  // GuardianBot - Care Assistant
  async getCareRecommendations(
    treeId: string,
    userId: string,
    context: string
  ): Promise<{
    recommendations: string[];
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
    nextCareDate: string;
    careChecklist: string[];
  }> {
    try {
      const tree = await prisma.tree.findUnique({
        where: { id: treeId },
        include: {
          updates: { orderBy: { createdAt: 'desc' }, take: 5 },
          owner: true
        }
      });

      if (!tree) throw new Error('Tree not found');

      const prompt = `
        Provide personalized care recommendations for:
        - Tree: ${tree.species} (${tree.id})
        - Owner: ${tree.owner.name}
        - Current health: ${tree.currentHealthStatus}
        - Recent updates: ${JSON.stringify(tree.updates)}
        - Context: ${context}
        
        Provide:
        1. 3-5 specific recommendations
        2. Priority level
        3. Next care date
        4. Care checklist
        
        Format as JSON response.
      `;

      const result = await this.textModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Care recommendations error:', error);
      return {
        recommendations: ['Water regularly', 'Monitor for pests', 'Prune if needed'],
        priority: 'MEDIUM',
        nextCareDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        careChecklist: ['Check soil moisture', 'Inspect leaves', 'Measure growth']
      };
    }
  }

  // FraudGuard AI - Suspicious Activity Detection
  async detectSuspiciousActivity(activityData: {
    userId: string;
    action: string;
    data: any;
    timestamp: string;
  }): Promise<{
    isSuspicious: boolean;
    riskScore: number;
    reasons: string[];
    recommendations: string[];
  }> {
    try {
      const prompt = `
        Analyze this activity for suspicious behavior:
        - User: ${activityData.userId}
        - Action: ${activityData.action}
        - Data: ${JSON.stringify(activityData.data)}
        - Timestamp: ${activityData.timestamp}
        
        Check for:
        1. Unusual patterns
        2. Data inconsistencies
        3. Geographic anomalies
        4. Time-based anomalies
        
        Provide risk assessment with:
        1. Is suspicious (true/false)
        2. Risk score (0-100)
        3. Reasons for suspicion
        4. Recommendations
        
        Format as JSON response.
      `;

      const result = await this.textModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Fraud detection error:', error);
      return {
        isSuspicious: false,
        riskScore: 0,
        reasons: [],
        recommendations: ['Continue monitoring']
      };
    }
  }

  // Reward Optimizer - Dynamic Point Adjustment
  async optimizeRewards(userId: string): Promise<{
    suggestedPoints: number;
    reasoning: string;
    multiplier: number;
  }> {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          trees: true,
          badges: true,
          updates: { orderBy: { createdAt: 'desc' }, take: 10 }
        }
      });

      if (!user) throw new Error('User not found');

      const prompt = `
        Optimize reward points for user:
        - Current points: ${user.greenPoints}
        - Trees owned: ${user.trees.length}
        - Badges earned: ${user.badges.length}
        - Recent activity: ${user.updates.length} updates
        
        Suggest:
        1. Optimal point adjustment
        2. Reasoning
        3. Multiplier factor
        
        Format as JSON response.
      `;

      const result = await this.textModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Reward optimization error:', error);
      return {
        suggestedPoints: 10,
        reasoning: 'Standard reward for activity',
        multiplier: 1.0
      };
    }
  }

  // AutoReminderBot - Care Reminders
  async generateCareReminders(): Promise<{
    reminders: Array<{
      userId: string;
      treeId: string;
      message: string;
      priority: string;
      dueDate: string;
    }>;
  }> {
    try {
      const treesNeedingCare = await prisma.tree.findMany({
        where: {
          isActive: true,
          lastUpdateAt: {
            lt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) // 30 days ago
          }
        },
        include: {
          owner: true,
          updates: { orderBy: { createdAt: 'desc' }, take: 1 }
        }
      });

      const reminders = treesNeedingCare.map(tree => ({
        userId: tree.ownerId,
        treeId: tree.id,
        message: `Time to check on your ${tree.species}! It's been ${Math.floor((Date.now() - tree.lastUpdateAt!.getTime()) / (24 * 60 * 60 * 1000))} days since the last update.`,
        priority: 'MEDIUM',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      }));

      return { reminders };
    } catch (error) {
      console.error('Reminder generation error:', error);
      return { reminders: [] };
    }
  }

  // ProofBot - Validate Organization Data
  async validateOrganizationData(orgId: string): Promise<{
    isValid: boolean;
    issues: string[];
    recommendations: string[];
    verificationScore: number;
  }> {
    try {
      const org = await prisma.organization.findUnique({
        where: { id: orgId },
        include: {
          trees: true,
          members: true,
          campaigns: true
        }
      });

      if (!org) throw new Error('Organization not found');

      const prompt = `
        Validate organization data for: ${org.name}
        
        Data to validate:
        - Trees: ${org.trees.length}
        - Members: ${org.members.length}
        - Campaigns: ${org.campaigns.length}
        - Verification status: ${org.isVerified}
        
        Check for:
        1. Data consistency
        2. Suspicious patterns
        3. Verification requirements
        4. Quality indicators
        
        Provide validation result with:
        1. Is valid (true/false)
        2. Issues found
        3. Recommendations
        4. Verification score (0-100)
        
        Format as JSON response.
      `;

      const result = await this.textModel.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const parsed = JSON.parse(text);
      
      return parsed;
    } catch (error) {
      console.error('Organization validation error:', error);
      return {
        isValid: false,
        issues: ['Unable to validate data'],
        recommendations: ['Manual review required'],
        verificationScore: 0
      };
    }
  }

  // Log AI interaction for analytics
  async logInteraction(
    userId: string,
    type: string,
    input: any,
    output: any,
    treeId?: string
  ): Promise<void> {
    try {
      await prisma.aIInteraction.create({
        data: {
          userId,
          treeId,
          type: type as any,
          input,
          output,
          model: 'gemini-pro',
          tokensUsed: 0, // Calculate based on input/output
          cost: 0, // Calculate based on tokens
          responseTime: 0, // Calculate response time
          success: true
        }
      });
    } catch (error) {
      console.error('Failed to log AI interaction:', error);
    }
  }
}

export const aiService = new AIService();