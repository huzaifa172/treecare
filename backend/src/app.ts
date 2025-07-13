import dotenv from 'dotenv';
import path from 'path';
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { connectDatabase } from './utils/database';
// Import routes
import authRoutes from './routes/auth.routes';
import treeRoutes from './routes/tree.routes';
import userRoutes from './routes/user.routes';
import mapRoutes from './routes/map.routes';
import rewardRoutes from './routes/reward.routes';
import notificationRoutes from './routes/notification.routes';
import learnRoutes from './routes/learn.routes';
import statsRoutes from './routes/stats.routes';
import organizationRoutes from './routes/organization.routes';
import aiRoutes from './routes/ai.routes';

// Import middleware
import { errorHandler } from './middleware/error.middleware';
import { notFound } from './middleware/notFound.middleware';


const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy for rate limiting
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());
app.use(compression());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.',
    error: 'RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Authentication rate limiting (more reasonable)
const authLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes  
  max: parseInt(process.env.AUTH_RATE_LIMIT_MAX_REQUESTS || '20'), // limit each IP to 20 requests per windowMs for auth endpoints
  message: {
    success: false,
    message: 'Too many authentication attempts, please try again later.',
    error: 'AUTH_RATE_LIMIT_EXCEEDED'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting
app.use('/api/', limiter);
app.use('/api/auth/', authLimiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'GreenGuardian API is running!',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/trees', treeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/map', mapRoutes);
app.use('/api/rewards', rewardRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/learn', learnRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/organizations', organizationRoutes);
app.use('/api/ai', aiRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🌿 Welcome to GreenGuardian API!',
    description: 'Fighting climate change by empowering individuals to become verified guardians of nature — one tree at a time.',
    documentation: '/api/docs',
    health: '/health'
  });
});

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

// Start server
if (process.env.NODE_ENV !== 'test') {
  connectDatabase().then(() => {
    app.listen(PORT, () => {
      console.log(`🌱 GreenGuardian API Server running on port ${PORT}`);
      console.log(`🔗 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
    });
  }).catch((err) => {
    console.error('❌ Failed to start server due to database error:', err);
    process.exit(1);
  });
}


export default app;