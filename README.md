# 🌿 GreenGuardian

**Own. Nurture. Impact.**

> Fighting climate change by empowering individuals to become verified guardians of nature — one tree at a time.

![GreenGuardian Hero](docs/assets/hero.png)

## 📖 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🚀 Quick Start](#-quick-start)
- [🏗️ Architecture](#️-architecture)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🎯 Overview

GreenGuardian is a comprehensive web platform that fights climate change by empowering individuals to become verified guardians of nature. Our mission is to create a global community where every tree planted has a digital identity, every caretaker has an impact story, and every action contributes to a greener future.

### 🌟 Core Concept
- **Tree Registration**: Plant a tree, upload a photo, get a QR code
- **Digital Ownership**: Become the verified guardian of your tree
- **Timeline Tracking**: Monthly updates with photos and growth metrics
- **Adoption System**: Transfer care when you can't continue
- **Gamification**: Earn points, badges, and rewards for your environmental impact
- **Community**: Connect with other tree guardians worldwide

## ✨ Features

### 🌳 Tree Management
- **📱 Tree Registration**: Simple photo upload with GPS location
- **🏷️ QR Code Generation**: Unique identifier for each tree
- **📊 Growth Tracking**: Monthly updates with photos and measurements
- **🔄 Adoption System**: Transfer tree ownership to nearby guardians
- **📈 Timeline View**: Visual history of tree's growth journey

### 🎮 Gamification & Rewards
- **🏆 Achievement System**: Earn badges for different milestones
- **💚 Green Points**: Accumulate points for every tree action
- **📈 Leaderboards**: Compete with friends and global community
- **🛍️ Reward Store**: Redeem points for eco-friendly products
- **🎯 Challenges**: Monthly tree-planting campaigns

### 🗺️ Interactive Features
- **🌍 Global Tree Map**: See all trees planted worldwide
- **📍 Nearby Trees**: Discover adoptable trees in your area
- **🔍 Filter System**: Find trees by species, status, location
- **📱 Mobile Responsive**: Perfect experience on all devices

### 👥 Social Impact
- **📊 Impact Dashboard**: Personal environmental contribution
- **🌱 Public Profiles**: Share your green journey
- **📧 Email Notifications**: Stay engaged with reminder system
- **📈 Analytics**: Track CO₂ offset and environmental impact

### 🎓 Educational Content
- **📚 Learning Modules**: Tree care guides and best practices
- **🌱 Species Information**: Learn about different tree types
- **📅 Seasonal Tips**: What to plant when and where
- **🔬 Environmental Science**: Understanding climate impact

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL 14+
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/green-guardian.git
   cd green-guardian
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Database setup**
   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

5. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or individually
   npm run backend:dev    # API Server (Port 5000)
   npm run frontend:dev   # Next.js App (Port 3000)
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api
   - Database Studio: http://localhost:5555

### 🔧 Environment Variables

**Backend (.env)**
```env
DATABASE_URL="postgresql://username:password@localhost:5432/greenguardian"
JWT_SECRET="your-secret-key"
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
RESEND_API_KEY="your-resend-key"
GOOGLE_MAPS_API_KEY="your-maps-key"
```

**Frontend (Next.js)**
```env
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-maps-key"
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
```

## 🏗️ Architecture

### Technology Stack

**Backend**
- **Runtime**: Node.js + TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: JWT
- **File Storage**: Cloudinary
- **Email**: Resend
- **Validation**: Zod

**Frontend**
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **UI Components**: ShadCN UI
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Maps**: Leaflet
- **Animations**: Framer Motion

### Project Structure
```
green-guardian/
├── apps/
│   ├── backend/          # Express.js API
│   └── frontend/         # Next.js App
├── packages/
│   └── ui/              # Shared components
├── prisma/              # Database schema
├── docs/                # Documentation
└── README.md
```

### API Endpoints

```
🔐 Authentication
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/forgot
POST   /api/auth/reset

🌳 Tree Management
GET    /api/trees
POST   /api/trees
GET    /api/trees/:id
POST   /api/trees/:id/update
POST   /api/trees/:id/adopt
POST   /api/trees/:id/transfer

👤 User Management
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users/leaderboard

🗺️ Map & Location
GET    /api/map/trees
GET    /api/trees/adoptable

🏆 Rewards & Badges
GET    /api/rewards
POST   /api/rewards/:id/redeem
GET    /api/users/badges

📊 Analytics & Stats
GET    /api/stats/global
GET    /api/stats/user
```

## 📚 Documentation

- [📖 **Complete Documentation**](docs/README.md) - Comprehensive guide
- [🔌 **API Reference**](docs/API_REFERENCE.md) - Detailed API documentation  
- [🛠️ **Development Guide**](docs/DEVELOPMENT_GUIDE.md) - Setup and development workflow
- [🎨 **Design System**](docs/DESIGN_SYSTEM.md) - UI/UX guidelines
- [🧪 **Testing Guide**](docs/TESTING.md) - Testing strategies and examples

## 🎨 Design System

### Color Palette
```css
--forest-green: #228B22    /* Primary brand color */
--warm-yellow: #F6C453     /* Accent for highlights */
--earth-brown: #5A4A3F     /* Secondary natural tone */
--teal-accent: #3BB273     /* Success and growth */
--off-white: #F4F4F4       /* Background color */
```

### Typography
- **Headings**: Inter (Bold)
- **Body**: DM Sans (Regular)
- **Accent**: Plus Jakarta Sans

### Component System
- Rounded corners (8px, 12px, 16px)
- Soft shadows for depth
- Card-based layouts
- Mobile-first responsive design

## 🌍 Environmental Impact

### Real Metrics
- **Trees Registered**: Track actual tree plantings
- **CO₂ Absorption**: Calculate based on tree species and age
- **Global Coverage**: Monitor worldwide participation
- **Growth Tracking**: Document tree health and growth

### Impact Visualization
- Individual user dashboards
- Community impact reports  
- City and country statistics
- Global environmental contribution

## 🎮 Gamification System

### Points System
```
🌱 Tree Registration:     50 points
📸 Monthly Update:        20 points  
🤝 Tree Adoption:        100 points
🎂 One Year Care:        300 points
👥 Friend Referral:      50 points
```

### Achievement Badges
- 🌱 **Seed Starter** - First tree planted
- 🌳 **Forest Builder** - 10+ trees planted
- 💧 **Caregiver** - 6 months of consistent updates
- 🛡️ **Guardian Angel** - 3+ trees adopted
- 🔥 **Climate Warrior** - Top 5% of users

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Standards
- TypeScript strict mode
- ESLint + Prettier formatting
- Conventional commit messages
- Test coverage for new features
- Documentation updates

### Areas for Contribution
- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🧪 Test coverage expansion
- 🌍 Internationalization
- ♿ Accessibility improvements

## 📊 Project Status

### Current Version: 1.0.0

### Roadmap
- **Phase 1**: Core tree management ✅
- **Phase 2**: Mobile app (React Native)
- **Phase 3**: AI-powered tree health analysis
- **Phase 4**: Blockchain integration (Tree NFTs)
- **Phase 5**: Corporate partnerships

### Statistics
- 🌳 Trees Registered: 0 (just launched!)
- 👥 Active Users: Growing daily
- 🌍 Countries: Available worldwide
- 📱 Platform: Web (mobile app coming soon)

## 🙏 Acknowledgments

- **Environmental Organizations** for inspiring our mission
- **Open Source Community** for the amazing tools
- **Tree Planters Worldwide** for making a real difference
- **Contributors** who help build a greener future

## 📞 Support & Community

### Getting Help
- 📋 [GitHub Issues](https://github.com/your-org/green-guardian/issues) for bug reports
- 💬 [GitHub Discussions](https://github.com/your-org/green-guardian/discussions) for questions
- 📧 Email: support@greenguardian.com
- 🐦 Twitter: [@GreenGuardianApp](https://twitter.com/GreenGuardianApp)

### Community Guidelines
- 🌱 Respect our environmental mission
- 🤝 Collaborate and help others
- 🌍 Inclusive and welcoming environment
- 💚 Quality contributions only

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🌱 Together, we're growing a greener future, one tree at a time! 🌍**

Made with 💚 by the GreenGuardian Team

[Website](https://greenguardian.com) • [Documentation](docs/) • [GitHub](https://github.com/your-org/green-guardian)

</div>