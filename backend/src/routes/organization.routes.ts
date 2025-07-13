import { Router } from 'express';
import { authenticateToken } from '../middleware/auth.middleware';
import { uploadMiddleware } from '../middleware/upload.middleware';

const router = Router();

// POST /api/organizations - Create new organization
router.post(
  '/',
  authenticateToken,
  (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Organization created successfully',
      data: {
        organization: {
          id: 'org-123',
          name: req.body.name,
          description: req.body.description,
          logoUrl: req.body.logoUrl,
          website: req.body.website,
          contactEmail: req.body.contactEmail,
          contactPhone: req.body.contactPhone,
          address: req.body.address,
          createdAt: new Date().toISOString(),
          ownerId: req.user.id,
          memberCount: 1,
          totalTrees: 0,
          totalCampaigns: 0
        }
      }
    });
  }
);

// GET /api/organizations - Get user's organizations
router.get(
  '/',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Organizations retrieved successfully',
      data: {
        organizations: [
          {
            id: 'org-1',
            name: 'Green Dubai Initiative',
            description: 'Making Dubai greener one tree at a time',
            logoUrl: 'https://example.com/logo.jpg',
            website: 'https://greendubai.ae',
            contactEmail: 'info@greendubai.ae',
            contactPhone: '+971501234567',
            address: 'Dubai, UAE',
            createdAt: '2024-01-15T10:30:00Z',
            ownerId: req.user.id,
            memberCount: 25,
            totalTrees: 150,
            totalCampaigns: 3,
            role: 'owner' // owner, admin, member
          }
        ]
      }
    });
  }
);

// GET /api/organizations/:id - Get organization details
router.get(
  '/:id',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Organization details retrieved successfully',
      data: {
        organization: {
          id: req.params.id,
          name: 'Green Dubai Initiative',
          description: 'Making Dubai greener one tree at a time',
          logoUrl: 'https://example.com/logo.jpg',
          website: 'https://greendubai.ae',
          contactEmail: 'info@greendubai.ae',
          contactPhone: '+971501234567',
          address: 'Dubai, UAE',
          createdAt: '2024-01-15T10:30:00Z',
          ownerId: 'user-1',
          memberCount: 25,
          totalTrees: 150,
          totalCampaigns: 3,
          campaigns: [
            {
              id: 'campaign-1',
              name: 'Dubai Marina Trees',
              description: 'Planting trees along Dubai Marina',
              status: 'active',
              targetTrees: 100,
              plantedTrees: 75,
              startDate: '2024-06-01T00:00:00Z',
              endDate: '2024-12-31T23:59:59Z'
            }
          ],
          members: [
            {
              id: 'user-1',
              name: 'John Doe',
              email: 'john@example.com',
              avatar: 'https://example.com/avatar.jpg',
              role: 'owner',
              joinedAt: '2024-01-15T10:30:00Z',
              treesContributed: 15
            }
          ]
        }
      }
    });
  }
);

// POST /api/organizations/:id/campaigns - Create new campaign
router.post(
  '/:id/campaigns',
  authenticateToken,
  (req, res) => {
    res.status(201).json({
      success: true,
      message: 'Campaign created successfully',
      data: {
        campaign: {
          id: 'campaign-new',
          organizationId: req.params.id,
          name: req.body.name,
          description: req.body.description,
          targetTrees: req.body.targetTrees,
          plantedTrees: 0,
          status: 'active',
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          location: req.body.location,
          budget: req.body.budget,
          createdAt: new Date().toISOString(),
          createdBy: req.user.id
        }
      }
    });
  }
);

// GET /api/organizations/:id/campaigns - Get organization campaigns
router.get(
  '/:id/campaigns',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Campaigns retrieved successfully',
      data: {
        campaigns: [
          {
            id: 'campaign-1',
            name: 'Dubai Marina Trees',
            description: 'Planting trees along Dubai Marina',
            status: 'active',
            targetTrees: 100,
            plantedTrees: 75,
            startDate: '2024-06-01T00:00:00Z',
            endDate: '2024-12-31T23:59:59Z',
            location: {
              area: 'Dubai Marina',
              coordinates: {
                latitude: 25.2048,
                longitude: 55.2708
              }
            },
            budget: 50000,
            progress: 75,
            vendors: [
              {
                id: 'vendor-1',
                name: 'Green Landscaping Co.',
                assignedTrees: 50,
                completedTrees: 40
              }
            ]
          }
        ]
      }
    });
  }
);

// POST /api/organizations/:id/members - Invite member
router.post(
  '/:id/members',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Member invitation sent successfully',
      data: {
        invitation: {
          id: 'invite-1',
          organizationId: req.params.id,
          email: req.body.email,
          role: req.body.role || 'member',
          status: 'pending',
          invitedBy: req.user.id,
          invitedAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
        }
      }
    });
  }
);

// PUT /api/organizations/:id/members/:memberId - Update member role
router.put(
  '/:id/members/:memberId',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Member role updated successfully',
      data: {
        member: {
          id: req.params.memberId,
          role: req.body.role,
          updatedAt: new Date().toISOString()
        }
      }
    });
  }
);

// DELETE /api/organizations/:id/members/:memberId - Remove member
router.delete(
  '/:id/members/:memberId',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Member removed successfully'
    });
  }
);

// POST /api/organizations/:id/campaigns/:campaignId/vendors - Assign vendor to campaign
router.post(
  '/:id/campaigns/:campaignId/vendors',
  authenticateToken,
  (req, res) => {
    res.json({
      success: true,
      message: 'Vendor assigned successfully',
      data: {
        assignment: {
          id: 'assignment-1',
          campaignId: req.params.campaignId,
          vendorId: req.body.vendorId,
          assignedTrees: req.body.assignedTrees,
          assignedAt: new Date().toISOString(),
          status: 'active'
        }
      }
    });
  }
);

// POST /api/organizations/:id/campaigns/:campaignId/trees/bulk - Bulk upload trees
router.post(
  '/:id/campaigns/:campaignId/trees/bulk',
  authenticateToken,
  uploadMiddleware.single('csvFile'),
  (req, res) => {
    res.json({
      success: true,
      message: 'Trees uploaded successfully',
      data: {
        upload: {
          id: 'upload-1',
          campaignId: req.params.campaignId,
          totalTrees: 50,
          uploadedTrees: 50,
          failedTrees: 0,
          uploadedAt: new Date().toISOString()
        }
      }
    });
  }
);

export default router;