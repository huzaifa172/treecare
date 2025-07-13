# GreenGuardian - AI-Powered Tree Care Platform

A comprehensive, AI-powered platform for tree guardians to track, care for, and manage their trees with intelligent insights and automated recommendations.

## � Recent Updates & Fixes

### ✅ Issues Fixed

1. **429 Too Many Requests Error**
   - Fixed rate limiting configuration in `backend/src/app.ts`
   - Added environment-based rate limit settings
   - Improved error handling for rate limit responses

2. **Login Redirect Issues**
   - Fixed authentication flow in `frontend/hooks/useAuth.ts`
   - Added proper router refresh and redirect handling
   - Improved state management for login success

3. **Prisma Schema Issues**
   - Fixed duplicate relation definitions
   - Updated enum types to match Prisma schema
   - Corrected AI model relationships

4. **Path Import Issues**
   - Fixed Windows path import in `backend/src/app.ts`
   - Updated to use standard path module

### 🤖 AI Integration

The platform now features comprehensive AI integration using Google's Gemini API:

#### AI Features Implemented

1. **Tree Health Analysis**
   - AI-powered health assessment
   - Automated health scoring (0-100)
   - Issue detection and recommendations
   - Growth analysis and environmental factors

2. **Care Recommendations**
   - Personalized care tips based on tree species and location
   - Priority-based recommendations (LOW, MEDIUM, HIGH, URGENT)
   - Actionable insights with estimated impact
   - Seasonal and long-term care planning

3. **Growth Prediction**
   - Future growth forecasting (1, 5, 10 years)
   - CO₂ sequestration potential
   - Oxygen production estimates
   - Maintenance requirement predictions

4. **Environmental Impact Reports**
   - Weekly, monthly, and yearly impact analysis
   - CO₂ offset calculations
   - Water filtration estimates
   - Wildlife habitat value assessment

5. **Personalized Care Schedules**
   - 3-month automated care planning
   - Daily, weekly, monthly, and seasonal tasks
   - Time estimates and required resources
   - Climate and species-specific recommendations

#### AI Architecture

- **Backend**: `backend/src/services/ai.service.ts`
- **API Routes**: `backend/src/routes/ai.routes.ts`
- **Controllers**: `backend/src/controllers/ai.controller.ts`
- **Frontend API**: `frontend/lib/ai.ts`
- **React Hooks**: `frontend/hooks/useAI.ts`
- **UI Component**: `frontend/components/AIDashboard.tsx`

## �️ Technology Stack

### Backend
- **Node.js** with Express.js
- **TypeScript** for type safety
- **Prisma** ORM with PostgreSQL
- **Google Gemini AI** for intelligent features
- **JWT** authentication
- **Rate limiting** and security middleware

### Frontend
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TanStack Query** for state management
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **React Hook Form** with Zod validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Google Gemini API key

### Environment Setup

1. **Backend Environment** (`backend/.env`):
```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/greenguardian?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"
JWT_REFRESH_EXPIRES_IN="30d"

# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL="http://localhost:3000"

# AI Configuration
GEMINI_API_KEY="your-gemini-api-key-here"
AI_ENABLED=true

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
AUTH_RATE_LIMIT_MAX_REQUESTS=20
```

2. **Frontend Environment** (`frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Installation

1. **Clone and install dependencies**:
```bash
# Backend
cd backend
npm install
npx prisma generate
npx prisma db push

# Frontend
cd frontend
npm install
```

2. **Start the development servers**:
```bash
# Backend (Terminal 1)
cd backend
npm run dev

# Frontend (Terminal 2)
cd frontend
npm run dev
```

## � AI Features Usage

### 1. Tree Health Analysis
```typescript
const { analyzeTreeHealth } = useAI();

// Analyze tree health with update data
analyzeTreeHealth({
  treeId: 'tree-id',
  updateData: {
    healthStatus: 'HEALTHY',
    notes: 'Tree looks good',
    growthMeasurements: { height: 2.5, trunkDiameter: 0.08 }
  }
});
```

### 2. Generate Care Recommendations
```typescript
const { generateCareRecommendations } = useAI();

// Get personalized recommendations
generateCareRecommendations({ treeId: 'optional-tree-id' });
```

### 3. Environmental Impact Report
```typescript
const { generateEnvironmentalReport } = useAI();

// Generate monthly impact report
generateEnvironmentalReport({ timeframe: 'month' });
```

### 4. Create Care Schedule
```typescript
const { createCareSchedule } = useAI();

// Create personalized 3-month care schedule
createCareSchedule();
```

## 🔒 Security Features

- **Rate Limiting**: Configurable rate limits for API endpoints
- **Authentication**: JWT-based authentication with refresh tokens
- **Role-Based Access**: User and admin role management
- **Protected Routes**: Frontend and backend route protection
- **Input Validation**: Zod schema validation for all inputs

## 📈 Performance Optimizations

- **Query Caching**: TanStack Query for efficient data fetching
- **Database Indexing**: Optimized Prisma schema with proper indexes
- **Rate Limiting**: Prevents API abuse and ensures fair usage
- **Error Handling**: Comprehensive error handling and user feedback

## 🎯 Key Features

### User Management
- User registration and authentication
- Profile management with green points
- Role-based access control

### Tree Management
- Tree registration and tracking
- Health status monitoring
- Growth measurements and updates
- Photo uploads and location tracking

### AI-Powered Insights
- Automated health analysis
- Personalized care recommendations
- Growth predictions
- Environmental impact calculations

### Organization Features
- Organization creation and management
- Member management with roles
- Campaign creation and tracking
- Bulk tree uploads

### Dashboard & Analytics
- Real-time dashboard with AI insights
- Tree statistics and health overview
- Recent activity tracking
- Environmental impact metrics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## � License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the API endpoints

## 🔮 Future Enhancements

- **Mobile App**: React Native application
- **Advanced AI**: Computer vision for tree species identification
- **IoT Integration**: Sensor data integration
- **Blockchain**: Carbon credit tracking
- **Social Features**: Community challenges and leaderboards