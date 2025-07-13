import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

// GET /api/notifications - Get user notifications
router.get('/', authenticateToken, (req, res) => {
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
router.put('/:id/read', authenticateToken, (req, res) => {
  res.json({
    success: true,
    message: 'Notification marked as read',
    data: { notificationId: req.params.id }
  });
});

export default router;