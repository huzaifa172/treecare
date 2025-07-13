export interface AIAnalysisRequest {
    type: 'tree_health' | 'care_recommendation' | 'growth_prediction' | 'environmental_impact' | 'care_schedule';
    treeData?: any;
    userData?: any;
    environmentalData?: any;
    context?: string;
}
export interface AIRecommendation {
    type: string;
    title: string;
    description: string;
    priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
    data: any;
    actionable: boolean;
    estimatedImpact: string;
}
export interface AIInsight {
    type: string;
    title: string;
    description: string;
    data: any;
    confidence: number;
    timestamp: Date;
}
declare class AIService {
    private model;
    /**
     * Analyze tree health using AI
     */
    analyzeTreeHealth(treeId: string, updateData: any): Promise<AIInsight>;
    /**
     * Generate personalized care recommendations
     */
    generateCareRecommendations(userId: string, treeId?: string): Promise<AIRecommendation[]>;
    /**
     * Predict tree growth and environmental impact
     */
    predictGrowthAndImpact(treeId: string): Promise<AIInsight>;
    /**
     * Generate environmental impact report
     */
    generateEnvironmentalReport(userId: string, timeframe?: 'week' | 'month' | 'year'): Promise<AIInsight>;
    /**
     * Create personalized care schedule
     */
    createCareSchedule(userId: string): Promise<AIRecommendation[]>;
    /**
     * Log AI interaction for analytics
     */
    logInteraction(userId: string, type: string, input: any, output: any, treeId?: string): Promise<void>;
    /**
     * Get AI insights for user
     */
    getUserInsights(userId: string, limit?: number): Promise<AIInsight[]>;
    /**
     * Get AI recommendations for user
     */
    getUserRecommendations(userId: string, limit?: number): Promise<AIRecommendation[]>;
}
export declare const aiService: AIService;
export {};
//# sourceMappingURL=ai.service.d.ts.map