"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// GET /api/rewards - Get available rewards
router.get('/', auth_middleware_1.authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Rewards retrieved successfully',
        data: { rewards: [] }
    });
});
// POST /api/rewards/:id/redeem - Redeem a reward
router.post('/:id/redeem', auth_middleware_1.authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Reward redeemed successfully',
        data: { redemption: { id: req.params.id } }
    });
});
exports.default = router;
//# sourceMappingURL=reward.routes.js.map