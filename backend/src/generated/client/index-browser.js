
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  profilePicture: 'profilePicture',
  bio: 'bio',
  greenPoints: 'greenPoints',
  isProfilePublic: 'isProfilePublic',
  emailNotifications: 'emailNotifications',
  city: 'city',
  country: 'country',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastLoginAt: 'lastLoginAt'
};

exports.Prisma.TreeScalarFieldEnum = {
  id: 'id',
  qrCode: 'qrCode',
  species: 'species',
  source: 'source',
  commitmentDuration: 'commitmentDuration',
  initialHealthStatus: 'initialHealthStatus',
  currentHealthStatus: 'currentHealthStatus',
  location: 'location',
  photoUrl: 'photoUrl',
  plantedAt: 'plantedAt',
  isActive: 'isActive',
  isAdoptable: 'isAdoptable',
  transferReason: 'transferReason',
  lastUpdateAt: 'lastUpdateAt',
  ownerId: 'ownerId'
};

exports.Prisma.TreeUpdateScalarFieldEnum = {
  id: 'id',
  healthStatus: 'healthStatus',
  notes: 'notes',
  photoUrl: 'photoUrl',
  growthMeasurements: 'growthMeasurements',
  gpsLocation: 'gpsLocation',
  createdAt: 'createdAt',
  treeId: 'treeId',
  userId: 'userId'
};

exports.Prisma.TreeAdoptionScalarFieldEnum = {
  id: 'id',
  reason: 'reason',
  commitmentMessage: 'commitmentMessage',
  commitmentDuration: 'commitmentDuration',
  adoptedAt: 'adoptedAt',
  treeId: 'treeId',
  previousOwnerId: 'previousOwnerId',
  newOwnerId: 'newOwnerId'
};

exports.Prisma.BadgeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  icon: 'icon',
  category: 'category',
  requirement: 'requirement',
  pointsValue: 'pointsValue',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.UserBadgeScalarFieldEnum = {
  id: 'id',
  earnedAt: 'earnedAt',
  userId: 'userId',
  badgeId: 'badgeId'
};

exports.Prisma.RewardScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  pointsCost: 'pointsCost',
  category: 'category',
  imageUrl: 'imageUrl',
  inStock: 'inStock',
  isActive: 'isActive',
  createdAt: 'createdAt'
};

exports.Prisma.RewardRedemptionScalarFieldEnum = {
  id: 'id',
  pointsSpent: 'pointsSpent',
  shippingAddress: 'shippingAddress',
  status: 'status',
  redeemedAt: 'redeemedAt',
  shippedAt: 'shippedAt',
  deliveredAt: 'deliveredAt',
  userId: 'userId',
  rewardId: 'rewardId'
};

exports.Prisma.CertificateScalarFieldEnum = {
  id: 'id',
  type: 'type',
  pdfUrl: 'pdfUrl',
  metadata: 'metadata',
  issuedAt: 'issuedAt',
  userId: 'userId',
  treeId: 'treeId'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  type: 'type',
  title: 'title',
  message: 'message',
  data: 'data',
  isRead: 'isRead',
  createdAt: 'createdAt',
  userId: 'userId'
};

exports.Prisma.LearningModuleScalarFieldEnum = {
  id: 'id',
  title: 'title',
  description: 'description',
  content: 'content',
  duration: 'duration',
  difficulty: 'difficulty',
  topics: 'topics',
  thumbnailUrl: 'thumbnailUrl',
  isActive: 'isActive',
  order: 'order',
  createdAt: 'createdAt'
};

exports.Prisma.GlobalStatsScalarFieldEnum = {
  id: 'id',
  totalTrees: 'totalTrees',
  totalUsers: 'totalUsers',
  totalUpdates: 'totalUpdates',
  totalAdoptions: 'totalAdoptions',
  co2OffsetKg: 'co2OffsetKg',
  countriesActive: 'countriesActive',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.TreeSource = exports.$Enums.TreeSource = {
  NURSERY: 'NURSERY',
  HOMEGROWN: 'HOMEGROWN',
  GRAFTED: 'GRAFTED',
  WILD_SEEDLING: 'WILD_SEEDLING'
};

exports.HealthStatus = exports.$Enums.HealthStatus = {
  EXCELLENT: 'EXCELLENT',
  HEALTHY: 'HEALTHY',
  GOOD: 'GOOD',
  FAIR: 'FAIR',
  POOR: 'POOR',
  CRITICAL: 'CRITICAL',
  DEAD: 'DEAD'
};

exports.BadgeCategory = exports.$Enums.BadgeCategory = {
  STARTER: 'STARTER',
  GROWTH: 'GROWTH',
  CARE: 'CARE',
  COMMUNITY: 'COMMUNITY',
  IMPACT: 'IMPACT',
  SPECIAL: 'SPECIAL'
};

exports.RewardCategory = exports.$Enums.RewardCategory = {
  MERCHANDISE: 'MERCHANDISE',
  DISCOUNTS: 'DISCOUNTS',
  EVENTS: 'EVENTS',
  DIGITAL: 'DIGITAL',
  PHYSICAL: 'PHYSICAL'
};

exports.RedemptionStatus = exports.$Enums.RedemptionStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.CertificateType = exports.$Enums.CertificateType = {
  TREE_OWNERSHIP: 'TREE_OWNERSHIP',
  ADOPTION: 'ADOPTION',
  ACHIEVEMENT: 'ACHIEVEMENT',
  PARTICIPATION: 'PARTICIPATION'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  TREE_UPDATE_REMINDER: 'TREE_UPDATE_REMINDER',
  ADOPTION_REQUEST: 'ADOPTION_REQUEST',
  BADGE_EARNED: 'BADGE_EARNED',
  POINT_MILESTONE: 'POINT_MILESTONE',
  SYSTEM_UPDATE: 'SYSTEM_UPDATE',
  COMMUNITY_NEWS: 'COMMUNITY_NEWS'
};

exports.Difficulty = exports.$Enums.Difficulty = {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Tree: 'Tree',
  TreeUpdate: 'TreeUpdate',
  TreeAdoption: 'TreeAdoption',
  Badge: 'Badge',
  UserBadge: 'UserBadge',
  Reward: 'Reward',
  RewardRedemption: 'RewardRedemption',
  Certificate: 'Certificate',
  Notification: 'Notification',
  LearningModule: 'LearningModule',
  GlobalStats: 'GlobalStats'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
