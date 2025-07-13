"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// GET /api/users/profile - Get user profile
router.get('/profile', auth_middleware_1.authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Profile retrieved successfully',
        data: { user: req.user }
    });
});
// PUT /api/users/profile - Update user profile
router.put('/profile', auth_middleware_1.authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Profile updated successfully',
        data: { user: req.user }
    });
});
// GET /api/users/leaderboard - Get leaderboard
router.get('/leaderboard', (req, res) => {
    res.json({
        success: true,
        message: 'Leaderboard retrieved successfully',
        data: { leaderboard: [] }
    });
});
exports.default = router;
//# sourceMappingURL=user.routes.js.map