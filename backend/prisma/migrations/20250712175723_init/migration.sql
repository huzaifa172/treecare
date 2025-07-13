-- CreateEnum
CREATE TYPE "TreeSource" AS ENUM ('NURSERY', 'HOMEGROWN', 'GRAFTED', 'WILD_SEEDLING');

-- CreateEnum
CREATE TYPE "HealthStatus" AS ENUM ('EXCELLENT', 'HEALTHY', 'GOOD', 'FAIR', 'POOR', 'CRITICAL', 'DEAD');

-- CreateEnum
CREATE TYPE "BadgeCategory" AS ENUM ('STARTER', 'GROWTH', 'CARE', 'COMMUNITY', 'IMPACT', 'SPECIAL');

-- CreateEnum
CREATE TYPE "RewardCategory" AS ENUM ('MERCHANDISE', 'DISCOUNTS', 'EVENTS', 'DIGITAL', 'PHYSICAL');

-- CreateEnum
CREATE TYPE "RedemptionStatus" AS ENUM ('PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "CertificateType" AS ENUM ('TREE_OWNERSHIP', 'ADOPTION', 'ACHIEVEMENT', 'PARTICIPATION');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('TREE_UPDATE_REMINDER', 'ADOPTION_REQUEST', 'BADGE_EARNED', 'POINT_MILESTONE', 'SYSTEM_UPDATE', 'COMMUNITY_NEWS');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "profilePicture" VARCHAR(500),
    "bio" TEXT,
    "greenPoints" INTEGER NOT NULL DEFAULT 0,
    "isProfilePublic" BOOLEAN NOT NULL DEFAULT true,
    "emailNotifications" BOOLEAN NOT NULL DEFAULT true,
    "city" VARCHAR(100),
    "country" VARCHAR(100),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trees" (
    "id" UUID NOT NULL,
    "qrCode" VARCHAR(50) NOT NULL,
    "species" VARCHAR(100) NOT NULL,
    "source" "TreeSource" NOT NULL,
    "commitmentDuration" INTEGER NOT NULL,
    "initialHealthStatus" "HealthStatus" NOT NULL,
    "currentHealthStatus" "HealthStatus" NOT NULL DEFAULT 'HEALTHY',
    "location" JSONB NOT NULL,
    "photoUrl" VARCHAR(500) NOT NULL,
    "plantedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "isAdoptable" BOOLEAN NOT NULL DEFAULT false,
    "transferReason" TEXT,
    "lastUpdateAt" TIMESTAMP(3),
    "ownerId" UUID NOT NULL,

    CONSTRAINT "trees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tree_updates" (
    "id" UUID NOT NULL,
    "healthStatus" "HealthStatus" NOT NULL,
    "notes" TEXT,
    "photoUrl" VARCHAR(500) NOT NULL,
    "growthMeasurements" JSONB,
    "gpsLocation" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "treeId" UUID NOT NULL,
    "userId" UUID NOT NULL,

    CONSTRAINT "tree_updates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tree_adoptions" (
    "id" UUID NOT NULL,
    "reason" TEXT,
    "commitmentMessage" TEXT,
    "commitmentDuration" INTEGER,
    "adoptedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "treeId" UUID NOT NULL,
    "previousOwnerId" UUID NOT NULL,
    "newOwnerId" UUID NOT NULL,

    CONSTRAINT "tree_adoptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badges" (
    "id" UUID NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "icon" VARCHAR(10) NOT NULL,
    "category" "BadgeCategory" NOT NULL,
    "requirement" JSONB NOT NULL,
    "pointsValue" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_badges" (
    "id" UUID NOT NULL,
    "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "badgeId" UUID NOT NULL,

    CONSTRAINT "user_badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rewards" (
    "id" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "pointsCost" INTEGER NOT NULL,
    "category" "RewardCategory" NOT NULL,
    "imageUrl" VARCHAR(500),
    "inStock" BOOLEAN NOT NULL DEFAULT true,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reward_redemptions" (
    "id" UUID NOT NULL,
    "pointsSpent" INTEGER NOT NULL,
    "shippingAddress" JSONB,
    "status" "RedemptionStatus" NOT NULL DEFAULT 'PENDING',
    "redeemedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shippedAt" TIMESTAMP(3),
    "deliveredAt" TIMESTAMP(3),
    "userId" UUID NOT NULL,
    "rewardId" UUID NOT NULL,

    CONSTRAINT "reward_redemptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "certificates" (
    "id" UUID NOT NULL,
    "type" "CertificateType" NOT NULL,
    "pdfUrl" VARCHAR(500) NOT NULL,
    "metadata" JSONB NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "treeId" UUID,

    CONSTRAINT "certificates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "id" UUID NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "message" TEXT NOT NULL,
    "data" JSONB,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "learning_modules" (
    "id" UUID NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "duration" INTEGER NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "topics" TEXT[],
    "thumbnailUrl" VARCHAR(500),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "learning_modules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "global_stats" (
    "id" UUID NOT NULL,
    "totalTrees" INTEGER NOT NULL DEFAULT 0,
    "totalUsers" INTEGER NOT NULL DEFAULT 0,
    "totalUpdates" INTEGER NOT NULL DEFAULT 0,
    "totalAdoptions" INTEGER NOT NULL DEFAULT 0,
    "co2OffsetKg" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "countriesActive" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "global_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "trees_qrCode_key" ON "trees"("qrCode");

-- CreateIndex
CREATE INDEX "trees_ownerId_idx" ON "trees"("ownerId");

-- CreateIndex
CREATE INDEX "trees_species_idx" ON "trees"("species");

-- CreateIndex
CREATE INDEX "trees_plantedAt_idx" ON "trees"("plantedAt");

-- CreateIndex
CREATE INDEX "trees_isAdoptable_idx" ON "trees"("isAdoptable");

-- CreateIndex
CREATE INDEX "tree_updates_treeId_idx" ON "tree_updates"("treeId");

-- CreateIndex
CREATE INDEX "tree_updates_createdAt_idx" ON "tree_updates"("createdAt");

-- CreateIndex
CREATE INDEX "tree_adoptions_treeId_idx" ON "tree_adoptions"("treeId");

-- CreateIndex
CREATE INDEX "tree_adoptions_adoptedAt_idx" ON "tree_adoptions"("adoptedAt");

-- CreateIndex
CREATE UNIQUE INDEX "badges_name_key" ON "badges"("name");

-- CreateIndex
CREATE INDEX "user_badges_userId_idx" ON "user_badges"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "user_badges_userId_badgeId_key" ON "user_badges"("userId", "badgeId");

-- CreateIndex
CREATE INDEX "reward_redemptions_userId_idx" ON "reward_redemptions"("userId");

-- CreateIndex
CREATE INDEX "reward_redemptions_redeemedAt_idx" ON "reward_redemptions"("redeemedAt");

-- CreateIndex
CREATE INDEX "certificates_userId_idx" ON "certificates"("userId");

-- CreateIndex
CREATE INDEX "certificates_issuedAt_idx" ON "certificates"("issuedAt");

-- CreateIndex
CREATE INDEX "notifications_userId_isRead_idx" ON "notifications"("userId", "isRead");

-- CreateIndex
CREATE INDEX "notifications_createdAt_idx" ON "notifications"("createdAt");

-- CreateIndex
CREATE INDEX "learning_modules_difficulty_idx" ON "learning_modules"("difficulty");

-- CreateIndex
CREATE INDEX "learning_modules_isActive_order_idx" ON "learning_modules"("isActive", "order");

-- AddForeignKey
ALTER TABLE "trees" ADD CONSTRAINT "trees_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_updates" ADD CONSTRAINT "tree_updates_treeId_fkey" FOREIGN KEY ("treeId") REFERENCES "trees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_updates" ADD CONSTRAINT "tree_updates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_adoptions" ADD CONSTRAINT "tree_adoptions_treeId_fkey" FOREIGN KEY ("treeId") REFERENCES "trees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_adoptions" ADD CONSTRAINT "tree_adoptions_previousOwnerId_fkey" FOREIGN KEY ("previousOwnerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tree_adoptions" ADD CONSTRAINT "tree_adoptions_newOwnerId_fkey" FOREIGN KEY ("newOwnerId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_badges" ADD CONSTRAINT "user_badges_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_badges" ADD CONSTRAINT "user_badges_badgeId_fkey" FOREIGN KEY ("badgeId") REFERENCES "badges"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reward_redemptions" ADD CONSTRAINT "reward_redemptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reward_redemptions" ADD CONSTRAINT "reward_redemptions_rewardId_fkey" FOREIGN KEY ("rewardId") REFERENCES "rewards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_treeId_fkey" FOREIGN KEY ("treeId") REFERENCES "trees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
