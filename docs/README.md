# 🌿 GreenGuardian - Complete Documentation

## 🎯 Project Overview
**GreenGuardian** is a comprehensive web platform that fights climate change by empowering individuals to become verified guardians of nature — one tree at a time.

### Mission Statement
"Fighting climate change by empowering individuals to become verified guardians of nature — one tree at a time."

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Git

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd green-guardian

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Setup database
npm run db:generate
npm run db:push

# Start development servers
npm run dev
```

## 🏗️ Project Structure
```
green-guardian/
├── apps/
│   ├── backend/          # Node.js + Express API
│   └── frontend/         # Next.js Application
├── packages/
│   └── ui/              # Shared UI Components
├── docs/                # Documentation
├── prisma/             # Database Schema
└── README.md
```

## 🔧 Tech Stack

### Backend
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **Email Service**: Resend
- **Geolocation**: Google Maps API

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Maps**: Leaflet
- **Forms**: React Hook Form + Zod
- **State Management**: Zustand

## 🌟 Core Features

### 1. Tree Registration System
- Photo upload with GPS location
- Tree species selection
- Ownership certificates
- Unique QR codes for each tree

### 2. Tree Timeline & Updates
- Monthly check-ins with photos
- Growth tracking
- Health status monitoring
- Care commitment duration

### 3. Tree Adoption System
- Transfer tree ownership
- Adoption notifications
- Nearby tree discovery
- Care transition tracking

### 4. Gamification & Rewards
- Green Points (GP) system
- Achievement badges
- Public leaderboards
- Reward marketplace

### 5. Interactive Map
- Global tree visualization
- Filter by ownership, status
- Nearby trees discovery
- Adoption opportunities

### 6. Social Features
- Public green profiles
- Impact sharing
- Community feeds
- Achievement celebrations

### 7. Educational Content
- Tree care guides
- Seasonal planting tips
- Environmental impact education
- Best practices sharing

## 🎮 Gamification System

### Green Points (GP) Earning
- Register a tree: **50 GP**
- Monthly updates: **20 GP**
- Adopt abandoned tree: **100 GP**
- Complete 1 year care: **300 GP**
- Refer a friend: **50 GP**

### Achievement Badges
- 🌱 **Seed Starter** - First tree planted
- 🌳 **Forest Builder** - 10+ trees planted
- 💧 **Caregiver** - 6 months of consistent updates
- 🛡️ **Guardian Angel** - 3+ trees adopted
- 🔥 **Climate Warrior** - Top 5% of users

### Rewards Marketplace
- Eco-friendly product discounts
- Green event passes
- Exclusive merchandise
- Tree adoption sponsorships

## 🗺️ API Documentation

### Authentication Endpoints
```
POST /api/auth/register     # User registration
POST /api/auth/login        # User login
POST /api/auth/refresh      # Token refresh
POST /api/auth/forgot       # Password reset
```

### Tree Management
```
POST /api/trees             # Register new tree
GET /api/trees              # Get user's trees
GET /api/trees/:id          # Get specific tree
PUT /api/trees/:id          # Update tree info
POST /api/trees/:id/update  # Add timeline update
DELETE /api/trees/:id       # Delete tree
```

### Adoption System
```
POST /api/trees/:id/transfer    # Transfer tree ownership
POST /api/trees/:id/adopt       # Adopt a tree
GET /api/trees/adoptable        # Get adoptable trees
GET /api/trees/nearby           # Get nearby trees
```

### User Profile & Rewards
```
GET /api/users/profile          # Get user profile
PUT /api/users/profile          # Update profile
GET /api/users/points           # Get user points
GET /api/users/badges           # Get user badges
GET /api/users/leaderboard      # Get leaderboard
```

## 🎨 Design System

### Color Palette
- **Primary Green**: `#228B22` (Forest Green)
- **Background**: `#F4F4F4` (Off White)
- **Accent**: `#F6C453` (Warm Yellow)
- **Earth**: `#5A4A3F` (Earth Brown)
- **Secondary**: `#3BB273` (Teal)

### Typography
- **Headings**: Inter Bold
- **Body Text**: DM Sans Regular
- **Emphasis**: Plus Jakarta Sans

### Component Guidelines
- Rounded corners (8px, 12px, 16px)
- Soft shadows for elevation
- Card-based layouts
- Mobile-first responsive design

## 🔒 Security & Privacy

### Data Protection
- JWT-based authentication
- Password hashing with bcrypt
- Image timestamping for authenticity
- GPS data verification
- HTTPS encryption

### Privacy Features
- Optional public profiles
- Configurable data sharing
- Right to data deletion
- Location privacy controls

## 🌍 Environmental Impact

### Real-time Metrics
- Total trees planted
- CO₂ offset calculations
- User participation stats
- Geographic distribution

### Impact Visualization
- Individual user dashboards
- Community impact reports
- City-wise statistics
- Global environmental contribution

## 🚀 Deployment Guide

### Environment Variables
```bash
# Database
DATABASE_URL="postgresql://..."

# Authentication
JWT_SECRET="your-secret-key"
JWT_EXPIRE="7d"

# File Storage
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email Service
RESEND_API_KEY="your-resend-key"

# Maps
GOOGLE_MAPS_API_KEY="your-maps-key"
```

### Production Deployment
1. **Database**: PostgreSQL on Supabase/NeonDB
2. **Backend**: Railway/Render/Fly.io
3. **Frontend**: Vercel
4. **CDN**: Cloudinary for images
5. **Monitoring**: Sentry for error tracking

## 🧪 Testing Strategy

### Backend Testing
- Unit tests with Jest
- API endpoint testing with Supertest
- Database testing with test containers
- Authentication flow testing

### Frontend Testing
- Component tests with React Testing Library
- E2E tests with Playwright
- Visual regression testing
- Performance testing

## 📱 Future Roadmap

### Phase 2 Features
- Mobile app (React Native)
- AI-powered tree health analysis
- Blockchain-based tree NFTs
- AR tree visualization
- Multi-language support

### Advanced Features
- Satellite monitoring integration
- Corporate partnership portal
- Carbon credit marketplace
- Advanced analytics dashboard
- IoT sensor integration

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch
3. Make changes with tests
4. Submit pull request
5. Code review process

### Code Standards
- TypeScript strict mode
- ESLint + Prettier formatting
- Conventional commit messages
- Component documentation
- API documentation updates

## 📞 Support & Community

### Getting Help
- GitHub Issues for bugs
- Discussions for features
- Documentation wiki
- Community Discord server

### Community Guidelines
- Respect environmental mission
- Collaborative development
- Inclusive participation
- Quality contributions

---

**🌱 Together, we're growing a greener future, one tree at a time! 🌱**