"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectDatabase = exports.connectDatabase = void 0;
const client_1 = require("../generated/client");
// Prevent multiple instances of Prisma Client in development
const prisma = globalThis.__prisma || new client_1.PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});
if (process.env.NODE_ENV === 'development') {
    globalThis.__prisma = prisma;
}
exports.default = prisma;
// Database connection helper
const connectDatabase = async () => {
    try {
        await prisma.$connect();
        console.log('🗃️  Database connected successfully');
    }
    catch (error) {
        console.error('❌ Database connection failed:', error);
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
// Database disconnection helper
const disconnectDatabase = async () => {
    try {
        await prisma.$disconnect();
        console.log('🗃️  Database disconnected successfully');
    }
    catch (error) {
        console.error('❌ Database disconnection failed:', error);
    }
};
exports.disconnectDatabase = disconnectDatabase;
//# sourceMappingURL=database.js.map