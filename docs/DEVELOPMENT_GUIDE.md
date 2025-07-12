# 🛠️ GreenGuardian Development Guide

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.x or higher
- **npm** 9.x or higher  
- **PostgreSQL** 14.x or higher
- **Git** for version control
- **VS Code** (recommended IDE)

### Development Environment Setup

#### 1. Clone Repository
```bash
git clone <repository-url>
cd green-guardian
```

#### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install workspace dependencies
npm install --workspaces
```

#### 3. Environment Configuration
```bash
# Copy environment template
cp .env.example .env

# Configure your environment variables
nano .env
```

**Required Environment Variables:**
```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/greenguardian"

# JWT Authentication
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRE="7d"

# Cloudinary (Image Storage)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Email Service (Resend)
RESEND_API_KEY="your-resend-api-key"

# Google Maps
GOOGLE_MAPS_API_KEY="your-google-maps-api-key"

# Frontend URL (for CORS)
FRONTEND_URL="http://localhost:3000"

# Environment
NODE_ENV="development"
```

#### 4. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# (Optional) Seed database with sample data
npm run db:seed
```

#### 5. Start Development Servers
```bash
# Start both frontend and backend
npm run dev

# Or start individually
npm run backend:dev    # Backend on :5000
npm run frontend:dev   # Frontend on :3000
```

#### 6. Access Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Database Studio**: http://localhost:5555 (run `npm run db:studio`)

---

## 🏗️ Project Architecture

### Monorepo Structure
```
green-guardian/
├── apps/
│   ├── backend/              # Express.js API Server
│   │   ├── src/
│   │   │   ├── controllers/  # Route handlers
│   │   │   ├── middleware/   # Express middleware
│   │   │   ├── models/       # Database models
│   │   │   ├── routes/       # API routes
│   │   │   ├── services/     # Business logic
│   │   │   ├── utils/        # Helper functions
│   │   │   └── app.ts        # Express app setup
│   │   ├── tests/            # Backend tests
│   │   └── package.json
│   │
│   └── frontend/             # Next.js Application
│       ├── app/              # App Router pages
│       ├── components/       # React components
│       ├── lib/              # Utility functions
│       ├── hooks/            # Custom React hooks
│       ├── stores/           # Zustand stores
│       ├── types/            # TypeScript types
│       └── public/           # Static assets
│
├── packages/
│   └── ui/                   # Shared UI components
│       ├── components/       # Reusable components
│       └── styles/           # Shared styles
│
├── prisma/
│   ├── schema.prisma         # Database schema
│   ├── migrations/           # Database migrations
│   └── seed.ts              # Database seeding
│
└── docs/                     # Documentation
```

### Backend Architecture
```
backend/src/
├── controllers/
│   ├── auth.controller.ts    # Authentication logic
│   ├── tree.controller.ts    # Tree management
│   ├── user.controller.ts    # User profile
│   └── map.controller.ts     # Map & location
│
├── middleware/
│   ├── auth.middleware.ts    # JWT verification
│   ├── upload.middleware.ts  # File upload handling
│   ├── validation.middleware.ts  # Request validation
│   └── error.middleware.ts   # Error handling
│
├── services/
│   ├── auth.service.ts       # Authentication business logic
│   ├── tree.service.ts       # Tree operations
│   ├── email.service.ts      # Email sending
│   ├── upload.service.ts     # File upload to Cloudinary
│   └── notification.service.ts  # Push notifications
│
├── routes/
│   ├── auth.routes.ts        # /api/auth/*
│   ├── tree.routes.ts        # /api/trees/*
│   ├── user.routes.ts        # /api/users/*
│   └── map.routes.ts         # /api/map/*
│
└── utils/
    ├── database.ts           # Prisma client
    ├── jwt.ts               # JWT utilities
    ├── validation.ts        # Zod schemas
    └── constants.ts         # App constants
```

### Frontend Architecture
```
frontend/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Auth route group
│   ├── dashboard/           # User dashboard
│   ├── trees/               # Tree management
│   ├── map/                 # Interactive map
│   └── profile/             # User profile
│
├── components/
│   ├── ui/                  # Basic UI components
│   ├── forms/               # Form components
│   ├── layout/              # Layout components
│   └── features/            # Feature-specific components
│
├── lib/
│   ├── api.ts               # API client
│   ├── auth.ts              # Authentication utilities
│   ├── utils.ts             # General utilities
│   └── constants.ts         # Frontend constants
│
├── hooks/
│   ├── useAuth.ts           # Authentication hook
│   ├── useApi.ts            # API fetching hook
│   └── useUpload.ts         # File upload hook
│
└── stores/
    ├── auth.store.ts        # Authentication state
    ├── tree.store.ts        # Tree management state
    └── ui.store.ts          # UI state (modals, etc.)
```

---

## 🎨 Development Workflow

### 1. Feature Development Process
1. **Create Feature Branch**
   ```bash
   git checkout -b feature/tree-adoption-system
   ```

2. **Backend Development**
   - Add database models in `prisma/schema.prisma`
   - Create service functions in `services/`
   - Add controllers in `controllers/`
   - Define routes in `routes/`
   - Write tests in `tests/`

3. **Frontend Development**
   - Create UI components in `components/`
   - Add pages in `app/`
   - Implement API integration
   - Add form validation with Zod
   - Style with TailwindCSS

4. **Testing**
   ```bash
   # Backend tests
   cd apps/backend && npm test
   
   # Frontend tests
   cd apps/frontend && npm test
   
   # E2E tests
   npm run test:e2e
   ```

5. **Code Review & Merge**
   - Create pull request
   - Automated CI/CD checks
   - Code review approval
   - Merge to main branch

### 2. Database Development

#### Schema Changes
```bash
# 1. Modify prisma/schema.prisma
# 2. Generate migration
npx prisma migrate dev --name add-tree-adoption

# 3. Generate Prisma client
npm run db:generate
```

#### Adding New Models
```prisma
model TreeAdoption {
  id            String   @id @default(uuid())
  treeId        String   @unique
  tree          Tree     @relation(fields: [treeId], references: [id])
  previousOwner String
  newOwner      String
  adoptedAt     DateTime @default(now())
  reason        String?
  
  @@map("tree_adoptions")
}
```

#### Seeding Data
```bash
# Run seed script
npm run db:seed

# Or reset and seed
npm run db:reset
```

### 3. API Development

#### Creating New Endpoints
1. **Define Zod Schema**
   ```typescript
   // utils/validation.ts
   export const createTreeSchema = z.object({
     species: z.string().min(1),
     location: z.object({
       latitude: z.number(),
       longitude: z.number(),
       address: z.string()
     }),
     source: z.enum(['nursery', 'homegrown', 'grafted'])
   })
   ```

2. **Create Service Function**
   ```typescript
   // services/tree.service.ts
   export const createTree = async (data: CreateTreeData, userId: string) => {
     const tree = await prisma.tree.create({
       data: { ...data, ownerId: userId }
     })
     return tree
   }
   ```

3. **Add Controller**
   ```typescript
   // controllers/tree.controller.ts
   export const createTreeController = async (req: Request, res: Response) => {
     try {
       const validatedData = createTreeSchema.parse(req.body)
       const tree = await createTree(validatedData, req.user.id)
       res.status(201).json({ success: true, data: tree })
     } catch (error) {
       next(error)
     }
   }
   ```

4. **Define Route**
   ```typescript
   // routes/tree.routes.ts
   router.post('/', authMiddleware, validateSchema(createTreeSchema), createTreeController)
   ```

### 4. Frontend Component Development

#### Component Structure
```typescript
// components/TreeCard.tsx
interface TreeCardProps {
  tree: Tree
  onUpdate?: (tree: Tree) => void
  className?: string
}

export const TreeCard: React.FC<TreeCardProps> = ({ tree, onUpdate, className }) => {
  return (
    <Card className={cn("p-4", className)}>
      {/* Component content */}
    </Card>
  )
}
```

#### API Integration
```typescript
// hooks/useApi.ts
export const useCreateTree = () => {
  return useMutation({
    mutationFn: (data: CreateTreeData) => api.post('/trees', data),
    onSuccess: (tree) => {
      toast.success('Tree registered successfully!')
      queryClient.invalidateQueries(['trees'])
    }
  })
}
```

#### Form Handling
```typescript
// components/forms/TreeRegistrationForm.tsx
const form = useForm<TreeFormData>({
  resolver: zodResolver(treeRegistrationSchema),
  defaultValues: {
    species: '',
    location: { latitude: 0, longitude: 0, address: '' }
  }
})

const onSubmit = async (data: TreeFormData) => {
  await createTree.mutateAsync(data)
}
```

---

## 🧪 Testing Strategy

### Backend Testing
```bash
# Unit tests
npm run test:unit

# Integration tests  
npm run test:integration

# Test coverage
npm run test:coverage
```

**Test Structure:**
```typescript
// tests/tree.test.ts
describe('Tree API', () => {
  beforeEach(async () => {
    await clearDatabase()
    await seedTestData()
  })

  describe('POST /api/trees', () => {
    it('should create a new tree', async () => {
      const response = await request(app)
        .post('/api/trees')
        .set('Authorization', `Bearer ${userToken}`)
        .send(validTreeData)
        .expect(201)

      expect(response.body.data.tree).toHaveProperty('id')
    })
  })
})
```

### Frontend Testing
```bash
# Component tests
npm run test:components

# E2E tests
npm run test:e2e
```

**Component Test Example:**
```typescript
// components/__tests__/TreeCard.test.tsx
import { render, screen } from '@testing-library/react'
import { TreeCard } from '../TreeCard'

describe('TreeCard', () => {
  it('displays tree information correctly', () => {
    const mockTree = {
      id: '1',
      species: 'Mango',
      plantedAt: new Date('2024-01-01'),
      photoUrl: 'https://example.com/tree.jpg'
    }

    render(<TreeCard tree={mockTree} />)
    
    expect(screen.getByText('Mango')).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', mockTree.photoUrl)
  })
})
```

---

## 🔧 Development Tools

### VS Code Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Prisma** - Database schema syntax highlighting
- **Tailwind CSS IntelliSense** - CSS class autocomplete
- **Auto Rename Tag** - HTML/JSX tag renaming
- **Bracket Pair Colorizer** - Bracket visualization
- **GitLens** - Git integration
- **Thunder Client** - API testing

### Browser Extensions
- **React Developer Tools** - React debugging
- **Redux DevTools** - State management debugging

### Useful Scripts
```bash
# Database
npm run db:studio         # Open Prisma Studio
npm run db:reset          # Reset database
npm run db:seed           # Seed database

# Development
npm run type-check        # TypeScript checking
npm run lint              # ESLint checking
npm run format            # Prettier formatting

# Testing
npm run test:watch        # Watch mode testing
npm run test:coverage     # Test coverage report

# Production
npm run build:all         # Build all workspaces
npm run start:production  # Start production server
```

---

## 📦 Package Management

### Adding Dependencies
```bash
# Backend dependencies
npm install express-rate-limit --workspace=backend

# Frontend dependencies  
npm install react-query --workspace=frontend

# Shared dependencies
npm install lodash --workspaces
```

### Version Management
- Use exact versions for critical dependencies
- Pin major versions for stability
- Regular dependency audits with `npm audit`

---

## 🐛 Debugging Guide

### Backend Debugging
```typescript
// Add debugging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body)
  next()
})

// Debug database queries
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error']
})
```

### Frontend Debugging
```typescript
// Debug API calls
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000
})

api.interceptors.request.use(request => {
  console.log('Starting Request', request)
  return request
})
```

### Common Issues & Solutions

**Database Connection Issues:**
```bash
# Check database status
sudo systemctl status postgresql

# Reset database connection
npm run db:reset
```

**Port Already in Use:**
```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 <PID>
```

**Build Errors:**
```bash
# Clear build cache
rm -rf .next node_modules/.cache

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 🚀 Performance Optimization

### Backend Optimization
- **Database Indexing**: Add indexes for frequently queried fields
- **Query Optimization**: Use Prisma's `select` and `include` efficiently
- **Caching**: Implement Redis for frequently accessed data
- **Rate Limiting**: Prevent API abuse

### Frontend Optimization
- **Code Splitting**: Dynamic imports for large components
- **Image Optimization**: Next.js Image component
- **Bundle Analysis**: Analyze bundle size with `@next/bundle-analyzer`
- **Caching**: Implement proper cache strategies

### Database Optimization
```prisma
model Tree {
  id        String @id @default(uuid())
  ownerId   String @db.Uuid
  species   String @db.VarChar(100)
  location  Json
  createdAt DateTime @default(now())
  
  // Add indexes for performance
  @@index([ownerId])
  @@index([species])
  @@index([createdAt])
}
```

---

## 📚 Resources & References

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form](https://react-hook-form.com/)

### Helpful Tools
- [Prisma Studio](https://www.prisma.io/studio) - Database GUI
- [Thunder Client](https://www.thunderclient.com/) - API testing
- [Postman](https://www.postman.com/) - API development
- [Figma](https://www.figma.com/) - Design collaboration

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Prisma Discord](https://discord.gg/prisma)
- [React Community](https://discord.gg/react)

---

**Happy coding! 🌱 Let's build a greener future together! 🌍**