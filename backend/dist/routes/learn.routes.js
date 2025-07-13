"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// GET /api/learn/modules - Get learning modules
router.get('/modules', auth_middleware_1.optionalAuth, (req, res) => {
    res.json({
        success: true,
        message: 'Learning modules retrieved successfully',
        data: {
            modules: [
                {
                    id: 'tree_planting_101',
                    title: 'Tree Planting 101',
                    description: 'Learn the basics of planting trees',
                    duration: 10,
                    difficulty: 'beginner',
                    topics: ['soil_preparation', 'watering', 'location_selection'],
                    thumbnailUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
                }
            ]
        }
    });
});
exports.default = router;
//# sourceMappingURL=learn.routes.js.map