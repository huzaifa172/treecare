# 🌐 GreenGuardian API Reference

## Base URL
```
Development: http://localhost:5000/api
Production: https://api.greenguardian.com/api
```

## Authentication
All protected endpoints require a JWT token in the Authorization header:
```
Authorization: Bearer <jwt_token>
```

## Response Format
All API responses follow this structure:
```json
{
  "success": boolean,
  "message": string,
  "data": object | array | null,
  "error": string | null
}
```

## HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## 🔐 Authentication Endpoints

### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "greenPoints": 0,
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

### Login User
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "greenPoints": 150
    },
    "token": "jwt_token_here"
  }
}
```

### Refresh Token
```http
POST /api/auth/refresh
```
*Requires valid JWT token*

### Forgot Password
```http
POST /api/auth/forgot
```

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

---

## 🌳 Tree Management Endpoints

### Register New Tree
```http
POST /api/trees
```
*Requires authentication*

**Request Body (multipart/form-data):**
```json
{
  "species": "Mango",
  "location": {
    "latitude": 28.6139,
    "longitude": 77.2090,
    "address": "New Delhi, India"
  },
  "source": "nursery",
  "commitmentDuration": 12,
  "initialHealthStatus": "healthy",
  "photo": "file_upload"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Tree registered successfully",
  "data": {
    "tree": {
      "id": "tree_uuid",
      "qrCode": "unique_qr_code",
      "species": "Mango",
      "location": {
        "latitude": 28.6139,
        "longitude": 77.2090,
        "address": "New Delhi, India"
      },
      "photoUrl": "https://cloudinary.com/image.jpg",
      "plantedAt": "2024-01-01T00:00:00.000Z",
      "owner": {
        "id": "user_uuid",
        "name": "John Doe"
      }
    },
    "certificate": {
      "url": "https://certificates.greenguardian.com/cert123.pdf",
      "id": "cert123"
    },
    "pointsEarned": 50
  }
}
```

### Get User's Trees
```http
GET /api/trees?page=1&limit=10&status=active
```
*Requires authentication*

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `status` (optional): Filter by status (active, transferred, needs_attention)

**Response:**
```json
{
  "success": true,
  "data": {
    "trees": [
      {
        "id": "tree_uuid",
        "species": "Mango",
        "plantedAt": "2024-01-01T00:00:00.000Z",
        "photoUrl": "https://cloudinary.com/image.jpg",
        "healthStatus": "healthy",
        "lastUpdate": "2024-01-15T00:00:00.000Z",
        "daysSinceLastUpdate": 15,
        "location": {
          "latitude": 28.6139,
          "longitude": 77.2090,
          "address": "New Delhi, India"
        }
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 3,
      "totalTrees": 25,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

### Get Specific Tree
```http
GET /api/trees/:treeId
```

**Response:**
```json
{
  "success": true,
  "data": {
    "tree": {
      "id": "tree_uuid",
      "species": "Mango",
      "qrCode": "unique_qr_code",
      "location": {
        "latitude": 28.6139,
        "longitude": 77.2090,
        "address": "New Delhi, India"
      },
      "plantedAt": "2024-01-01T00:00:00.000Z",
      "photoUrl": "https://cloudinary.com/image.jpg",
      "currentOwner": {
        "id": "user_uuid",
        "name": "John Doe",
        "profilePicture": "https://cloudinary.com/profile.jpg"
      },
      "timeline": [
        {
          "id": "update_uuid",
          "date": "2024-01-15T00:00:00.000Z",
          "photoUrl": "https://cloudinary.com/update1.jpg",
          "healthStatus": "healthy",
          "notes": "Tree is growing well, added fertilizer",
          "growthMeasurements": {
            "height": "2.5 feet",
            "trunk_diameter": "3 inches"
          }
        }
      ],
      "adoptionHistory": [
        {
          "previousOwner": "Jane Smith",
          "currentOwner": "John Doe",
          "transferDate": "2024-01-01T00:00:00.000Z",
          "reason": "Original planter moved cities"
        }
      ],
      "stats": {
        "totalUpdates": 3,
        "daysUnderCare": 45,
        "healthScore": 85,
        "co2Offset": "2.5 kg"
      }
    }
  }
}
```

### Update Tree Timeline
```http
POST /api/trees/:treeId/update
```
*Requires authentication and tree ownership*

**Request Body (multipart/form-data):**
```json
{
  "healthStatus": "healthy",
  "notes": "Added fertilizer, tree is growing well",
  "growthMeasurements": {
    "height": "3 feet",
    "trunk_diameter": "4 inches"
  },
  "photo": "file_upload"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Tree updated successfully",
  "data": {
    "update": {
      "id": "update_uuid",
      "date": "2024-01-15T00:00:00.000Z",
      "photoUrl": "https://cloudinary.com/update.jpg",
      "healthStatus": "healthy",
      "notes": "Added fertilizer, tree is growing well"
    },
    "pointsEarned": 20
  }
}
```

---

## 🤝 Tree Adoption Endpoints

### Transfer Tree Ownership
```http
POST /api/trees/:treeId/transfer
```
*Requires authentication and tree ownership*

**Request Body:**
```json
{
  "transferReason": "Moving to another city",
  "makePublic": true,
  "newOwnerId": "user_uuid" // Optional: direct transfer
}
```

**Response:**
```json
{
  "success": true,
  "message": "Tree listed for adoption",
  "data": {
    "adoptionListing": {
      "id": "listing_uuid",
      "treeId": "tree_uuid",
      "listedAt": "2024-01-15T00:00:00.000Z",
      "reason": "Moving to another city",
      "isPublic": true
    }
  }
}
```

### Adopt a Tree
```http
POST /api/trees/:treeId/adopt
```
*Requires authentication*

**Request Body:**
```json
{
  "commitmentMessage": "I'll take great care of this beautiful mango tree",
  "commitmentDuration": 12
}
```

**Response:**
```json
{
  "success": true,
  "message": "Tree adopted successfully",
  "data": {
    "adoption": {
      "id": "adoption_uuid",
      "treeId": "tree_uuid",
      "adoptedAt": "2024-01-15T00:00:00.000Z",
      "previousOwner": "Jane Smith",
      "newOwner": "John Doe"
    },
    "pointsEarned": 100
  }
}
```

### Get Adoptable Trees
```http
GET /api/trees/adoptable?latitude=28.6139&longitude=77.2090&radius=10
```

**Query Parameters:**
- `latitude` (optional): User's latitude
- `longitude` (optional): User's longitude  
- `radius` (optional): Search radius in km (default: 5)
- `species` (optional): Filter by tree species
- `page` (optional): Page number
- `limit` (optional): Items per page

**Response:**
```json
{
  "success": true,
  "data": {
    "adoptableTrees": [
      {
        "id": "tree_uuid",
        "species": "Neem",
        "photoUrl": "https://cloudinary.com/tree.jpg",
        "location": {
          "latitude": 28.6140,
          "longitude": 77.2095,
          "address": "CP, New Delhi",
          "distance": "1.2 km"
        },
        "plantedAt": "2024-01-01T00:00:00.000Z",
        "previousOwner": "Jane Smith",
        "transferReason": "Moving to another city",
        "healthStatus": "healthy",
        "lastUpdate": "2024-01-10T00:00:00.000Z"
      }
    ]
  }
}
```

---

## 👤 User Profile & Rewards

### Get User Profile
```http
GET /api/users/profile
```
*Requires authentication*

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_uuid",
      "name": "John Doe",
      "email": "john@example.com",
      "profilePicture": "https://cloudinary.com/profile.jpg",
      "bio": "Passionate tree planter and environment lover",
      "joinedAt": "2024-01-01T00:00:00.000Z",
      "greenPoints": 350,
      "badges": [
        {
          "id": "seed_starter",
          "name": "Seed Starter",
          "description": "Planted first tree",
          "icon": "🌱",
          "earnedAt": "2024-01-01T00:00:00.000Z"
        }
      ],
      "stats": {
        "treesPlanted": 5,
        "treesAdopted": 2,
        "totalUpdates": 15,
        "co2Offset": "12.5 kg",
        "rank": "Climate Warrior",
        "rankPosition": 123
      },
      "settings": {
        "isProfilePublic": true,
        "emailNotifications": true,
        "location": {
          "city": "New Delhi",
          "country": "India"
        }
      }
    }
  }
}
```

### Update User Profile
```http
PUT /api/users/profile
```
*Requires authentication*

**Request Body:**
```json
{
  "name": "John Doe Jr",
  "bio": "Environmental activist and tree lover",
  "profilePicture": "file_upload",
  "settings": {
    "isProfilePublic": false,
    "emailNotifications": true
  }
}
```

### Get Leaderboard
```http
GET /api/users/leaderboard?type=points&period=monthly&limit=50
```

**Query Parameters:**
- `type`: points | trees_planted | co2_offset
- `period`: weekly | monthly | all_time
- `limit`: Number of users to return

**Response:**
```json
{
  "success": true,
  "data": {
    "leaderboard": [
      {
        "rank": 1,
        "user": {
          "id": "user_uuid",
          "name": "Top Guardian",
          "profilePicture": "https://cloudinary.com/profile.jpg"
        },
        "score": 1250,
        "badge": "🏆"
      }
    ],
    "userRank": {
      "rank": 123,
      "score": 350
    }
  }
}
```

---

## 🗺️ Map & Location Endpoints

### Get Trees on Map
```http
GET /api/map/trees?bounds=28.5,77.1,28.7,77.3&zoom=12
```

**Query Parameters:**
- `bounds`: Bounding box (south,west,north,east)
- `zoom`: Map zoom level
- `filter`: all | my_trees | adoptable

**Response:**
```json
{
  "success": true,
  "data": {
    "trees": [
      {
        "id": "tree_uuid",
        "species": "Mango",
        "location": {
          "latitude": 28.6139,
          "longitude": 77.2090
        },
        "status": "healthy",
        "owner": "John Doe",
        "isAdoptable": false,
        "plantedAt": "2024-01-01T00:00:00.000Z"
      }
    ],
    "stats": {
      "totalTrees": 156,
      "healthyTrees": 142,
      "adoptableTrees": 8
    }
  }
}
```

---

## 📊 Analytics & Statistics

### Get Global Stats
```http
GET /api/stats/global
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalTrees": 15420,
    "totalUsers": 3250,
    "co2Offset": "2.5 tons",
    "countriesActive": 12,
    "treesThisMonth": 450,
    "adoptionsThisMonth": 23
  }
}
```

### Get User Analytics
```http
GET /api/stats/user
```
*Requires authentication*

**Response:**
```json
{
  "success": true,
  "data": {
    "timeline": {
      "treesPerMonth": [2, 1, 3, 0, 1],
      "updatesPerMonth": [6, 4, 8, 2, 3]
    },
    "impact": {
      "co2OffsetByMonth": [1.2, 0.8, 2.1, 0.5, 0.9],
      "totalImpact": "5.5 kg CO2"
    }
  }
}
```

---

## 🎓 Educational Content

### Get Learning Modules
```http
GET /api/learn/modules
```

**Response:**
```json
{
  "success": true,
  "data": {
    "modules": [
      {
        "id": "tree_planting_101",
        "title": "Tree Planting 101",
        "description": "Learn the basics of planting trees",
        "duration": "10 minutes",
        "difficulty": "beginner",
        "topics": ["soil_preparation", "watering", "location_selection"],
        "thumbnail": "https://cloudinary.com/module1.jpg"
      }
    ]
  }
}
```

---

## 🛒 Rewards Marketplace

### Get Available Rewards
```http
GET /api/rewards
```
*Requires authentication*

**Response:**
```json
{
  "success": true,
  "data": {
    "rewards": [
      {
        "id": "eco_tshirt",
        "name": "Eco-Friendly T-Shirt",
        "description": "100% organic cotton t-shirt",
        "pointsCost": 200,
        "category": "merchandise",
        "imageUrl": "https://cloudinary.com/tshirt.jpg",
        "inStock": true
      }
    ]
  }
}
```

### Redeem Reward
```http
POST /api/rewards/:rewardId/redeem
```
*Requires authentication*

**Request Body:**
```json
{
  "shippingAddress": {
    "street": "123 Green Street",
    "city": "New Delhi",
    "state": "Delhi",
    "postalCode": "110001",
    "country": "India"
  }
}
```

---

## 📧 Notification Endpoints

### Get Notifications
```http
GET /api/notifications?page=1&limit=20&type=all
```
*Requires authentication*

**Response:**
```json
{
  "success": true,
  "data": {
    "notifications": [
      {
        "id": "notif_uuid",
        "type": "tree_update_reminder",
        "title": "Time to check on your Mango tree!",
        "message": "It's been 30 days since your last update",
        "isRead": false,
        "createdAt": "2024-01-15T00:00:00.000Z",
        "data": {
          "treeId": "tree_uuid",
          "treeName": "My Mango Tree"
        }
      }
    ],
    "unreadCount": 3
  }
}
```

### Mark Notification as Read
```http
PUT /api/notifications/:notificationId/read
```
*Requires authentication*

---

## ❌ Error Handling

### Common Error Responses

**400 Bad Request:**
```json
{
  "success": false,
  "message": "Validation error",
  "error": "Email is required",
  "details": {
    "field": "email",
    "code": "REQUIRED"
  }
}
```

**401 Unauthorized:**
```json
{
  "success": false,
  "message": "Authentication required",
  "error": "Invalid or expired token"
}
```

**403 Forbidden:**
```json
{
  "success": false,
  "message": "Access denied",
  "error": "You don't own this tree"
}
```

**404 Not Found:**
```json
{
  "success": false,
  "message": "Resource not found",
  "error": "Tree with ID 'xyz' not found"
}
```

**500 Internal Server Error:**
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Database connection failed"
}
```

---

## 📝 Rate Limiting

API endpoints are rate limited to prevent abuse:

- **Authentication endpoints**: 5 requests per minute per IP
- **Tree registration**: 10 requests per hour per user
- **General API**: 100 requests per minute per user
- **Map endpoints**: 200 requests per minute per IP

Rate limit headers are included in responses:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```