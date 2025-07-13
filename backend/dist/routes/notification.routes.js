"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// GET /api/notifications - Get user notifications
router.get('/', auth_middleware_1.authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Notifications retrieved successfully',
        data: {
            notifications: [],
            unreadCount: 0
        }
    });
});
// PUT /api/notifications/:id/read - Mark notification as read
router.put('/:id/read', auth_middleware_1.authenticateToken, (req, res) => {
    res.json({
        success: true,
        message: 'Notification marked as read',
        data: { notificationId: req.params.id }
    });
});
exports.default = router;
//# sourceMappingURL=notification.routes.js.map