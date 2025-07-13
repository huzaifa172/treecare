# 🌱 GreenGuardian - AI-Powered Tree Care Platform

GreenGuardian is a comprehensive, AI-powered platform that empowers individuals and organizations to become verified guardians of nature. The platform integrates advanced AI features using Gemini APIs to provide automated tree care, species detection, health analysis, and environmental impact tracking.

## 🚀 Features

### 🤖 AI-Powered Features
- **TreeVision AI**: Automatic species detection from photos
- **GeoVerify AI**: GPS location validation and environmental analysis
- **GuardianBot**: AI care assistant with personalized recommendations
- **FraudGuard AI**: Suspicious activity detection and prevention
- **Impact Analyzer**: CO2 calculation and environmental impact tracking
- **AutoReminderBot**: Automated care reminders and scheduling
- **ProofBot**: Organization data validation
- **Reward Optimizer**: Dynamic point adjustment based on AI analysis

### 👥 User Types & Dashboards
- **Simple Users**: Personal tree management and gamification
- **Organizations**: Campaign management and member coordination
- **Vendors/Field Agents**: Mobile panel with QR scanning and care logging
- **Super Admins**: System overview, fraud detection, and AI analytics

### 🎮 Gamification System
- **Points System**: Earn points for tree care activities
- **Badge Collection**: Unlock achievements and milestones
- **Leaderboards**: Compete with other tree guardians
- **Reward Store**: Redeem points for eco-friendly rewards
- **Level Progression**: Level up through consistent care

### 📱 Mobile-First Design
- **PWA Support**: Progressive web app for mobile devices
- **QR Code Scanner**: Easy tree identification and care logging
- **GPS Integration**: Precise location tracking and validation
- **Offline Mode**: Work without internet connection

## 🏗️ Architecture

### Backend (Node.js + Express + Prisma)
```
backend/
├── src/
│   ├── routes/           # API endpoints
│   ├── controllers/      # Business logic
│   ├── middleware/       # Authentication & authorization
│   ├── services/         # AI services & external integrations
│   ├── utils/           # Helper functions
│   └── generated/       # Prisma client
├── prisma/
│   └── schema.prisma    # Database schema
└── package.json
```

### Frontend (Next.js + TypeScript + Tailwind CSS)
```
frontend/
├── app/                 # Next.js 13+ app directory
│   ├── (auth)/         # Authentication pages
│   ├── dashboard/      # User dashboard
│   ├── trees/          # Tree management
│   ├── organizations/  # Organization features
│   ├── vendor/         # Vendor mobile panel
│   ├── admin/          # Admin control panel
│   └── gamification/   # Gamification hub
├── components/         # Reusable components
├── hooks/             # Custom React hooks
├── lib/               # API functions & utilities
└── package.json
```

## 🛠️ Technology Stack

### Backend
- **Node.js** with Express.js
- **Prisma** ORM with PostgreSQL
- **JWT** authentication
- **Google Gemini AI** APIs
- **Rate limiting** and security middleware
- **Redis** for caching (optional)

### Frontend
- **Next.js 13+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **TanStack Query** for state management
- **React Hot Toast** for notifications
- **Lucide React** for icons

### AI Integration
- **Google Gemini Pro Vision** for image analysis
- **Google Gemini Pro** for text processing
- **Custom AI models** for specific tasks

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database
- Google Gemini API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/greenguardian.git
cd greenguardian
```

2. **Install dependencies**
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. **Environment Setup**
```bash
# Backend (.env)
DATABASE_URL="postgresql://user:password@localhost:5432/greenguardian"
JWT_SECRET="your-jwt-secret"
GEMINI_API_KEY="your-gemini-api-key"
FRONTEND_URL="http://localhost:3000"

# Frontend (.env.local)
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
```

4. **Database Setup**
```bash
cd backend
npx prisma generate
npx prisma db push
```

5. **Start Development Servers**
```bash
# Backend (Terminal 1)
cd backend
npm run dev

# Frontend (Terminal 2)
cd frontend
npm run dev
```

## 📊 Database Schema

### Core Entities
- **Users**: Authentication and profile management
- **Trees**: Tree registration and health tracking
- **Organizations**: Group management and campaigns
- **Care Logs**: Tree care history and activities
- **AI Interactions**: AI usage tracking and analytics
- **Rewards**: Gamification system management

### AI-Specific Tables
- **AI Insights**: Generated insights for users
- **AI Recommendations**: Personalized recommendations
- **AI Interactions**: Usage tracking and cost analysis

## 🔐 Authentication & Authorization

### Role-Based Access Control
- **USER**: Basic tree management and gamification
- **ORGANIZATION_ADMIN**: Organization management
- **VENDOR**: Field agent capabilities
- **SUPER_ADMIN**: System administration

### Protected Routes
- Frontend middleware for route protection
- Backend middleware for API security
- Organization-specific access control

## 🤖 AI Features Deep Dive

### TreeVision AI
```typescript
// Species detection from photos
const result = await aiService.detectTreeSpecies(imageBase64);
// Returns: species, confidence, description, care tips
```

### GuardianBot
```typescript
// AI care assistant
const response = await aiService.getCareRecommendations(treeId, userId, context);
// Returns: personalized care recommendations
```

### FraudGuard AI
```typescript
// Suspicious activity detection
const alert = await aiService.detectSuspiciousActivity(activityData);
// Returns: risk score, suspicious patterns, recommendations
```

## � Mobile Features

### Vendor Panel
- QR code scanning for tree identification
- GPS photo upload with validation
- Care checklist and logging
- GuardianBot integration for assistance

### PWA Capabilities
- Offline mode for field work
- Push notifications for care reminders
- Camera and GPS integration
- Sync when online

## 🎮 Gamification System

### Points System
- **Tree Registration**: 50 points
- **Monthly Care Update**: 25 points
- **Tree Adoption**: 75 points
- **AI Interactions**: 5-15 points
- **Streak Bonuses**: 10-50 points

### Badges & Achievements
- **First Tree**: Plant your first tree
- **Tree Guardian**: Plant 10 trees
- **Care Taker**: Submit 5 care logs
- **Community Hero**: Adopt 3 trees
- **Streak Master**: 30-day streak
- **AI Explorer**: Use AI features 20 times

## 📈 Analytics & Reporting

### User Analytics
- Tree planting impact
- Care consistency tracking
- Environmental contribution
- AI usage patterns

### Organization Analytics
- Campaign performance
- Member engagement
- Geographic distribution
- Impact metrics

### Admin Analytics
- System health monitoring
- AI model performance
- Fraud detection metrics
- Cost optimization

## 🔧 API Documentation

### Authentication
```bash
POST /api/auth/register
POST /api/auth/login
POST /api/auth/refresh
```

### Trees
```bash
GET /api/trees
POST /api/trees
GET /api/trees/:id
PUT /api/trees/:id
DELETE /api/trees/:id
```

### AI Services
```bash
POST /api/ai/detect-species
POST /api/ai/analyze-health
POST /api/ai/validate-location
POST /api/ai/guardian-bot
POST /api/ai/detect-fraud
```

### Organizations
```bash
GET /api/organizations
POST /api/organizations
GET /api/organizations/:id/members
POST /api/organizations/:id/campaigns
```

## 🚀 Deployment

### Backend Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables
```bash
# Production environment variables
NODE_ENV=production
DATABASE_URL=your-production-db-url
JWT_SECRET=your-production-jwt-secret
GEMINI_API_KEY=your-production-gemini-key
FRONTEND_URL=https://your-domain.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for advanced AI capabilities
- Prisma for excellent database tooling
- Next.js team for the amazing framework
- Tailwind CSS for beautiful styling utilities

## � Support

For support and questions:
- Email: support@greenguardian.com
- Documentation: https://docs.greenguardian.com
- Issues: https://github.com/your-username/greenguardian/issues

---

**🌱 Together, let's make the world greener, one tree at a time!**