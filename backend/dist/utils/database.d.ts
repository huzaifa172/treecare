import { PrismaClient } from '../generated/client';
declare global {
    var __prisma: PrismaClient | undefined;
}
declare const prisma: PrismaClient<import("../generated/client").Prisma.PrismaClientOptions, never, import("../generated/client/runtime/library").DefaultArgs>;
export default prisma;
export declare const connectDatabase: () => Promise<void>;
export declare const disconnectDatabase: () => Promise<void>;
//# sourceMappingURL=database.d.ts.map