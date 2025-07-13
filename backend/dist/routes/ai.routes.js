"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const error_middleware_1 = require("../middleware/error.middleware");
const auth_middleware_1 = require("../middleware/auth.middleware");
const aiController = __importStar(require("../controllers/ai.controller"));
const router = (0, express_1.Router)();
// Apply authentication to all AI routes
router.use(auth_middleware_1.authenticateToken);
// POST /api/ai/analyze-health - Analyze tree health
router.post('/analyze-health/:treeId', (0, error_middleware_1.asyncHandler)(aiController.analyzeTreeHealth));
// POST /api/ai/recommendations - Generate care recommendations
router.post('/recommendations', (0, error_middleware_1.asyncHandler)(aiController.generateCareRecommendations));
// POST /api/ai/predict-growth/:treeId - Predict tree growth
router.post('/predict-growth/:treeId', (0, error_middleware_1.asyncHandler)(aiController.predictGrowthAndImpact));
// POST /api/ai/environmental-report - Generate environmental report
router.post('/environmental-report', (0, error_middleware_1.asyncHandler)(aiController.generateEnvironmentalReport));
// POST /api/ai/care-schedule - Create personalized care schedule
router.post('/care-schedule', (0, error_middleware_1.asyncHandler)(aiController.createCareSchedule));
// GET /api/ai/insights - Get user AI insights
router.get('/insights', (0, error_middleware_1.asyncHandler)(aiController.getUserInsights));
// GET /api/ai/recommendations - Get user AI recommendations
router.get('/recommendations', (0, error_middleware_1.asyncHandler)(aiController.getUserRecommendations));
// POST /api/ai/mark-recommendation-read/:id - Mark recommendation as read
router.post('/mark-recommendation-read/:id', (0, error_middleware_1.asyncHandler)(aiController.markRecommendationRead));
// POST /api/ai/apply-recommendation/:id - Apply a recommendation
router.post('/apply-recommendation/:id', (0, error_middleware_1.asyncHandler)(aiController.applyRecommendation));
// GET /api/ai/analytics - Get AI usage analytics
router.get('/analytics', (0, error_middleware_1.asyncHandler)(aiController.getAIAnalytics));
exports.default = router;
//# sourceMappingURL=ai.routes.js.map