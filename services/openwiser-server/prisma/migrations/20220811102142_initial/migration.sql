-- CreateEnum
CREATE TYPE "SourceType" AS ENUM ('BOOK', 'ARTICLE');

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL,
    "type" "SourceType" NOT NULL,

    CONSTRAINT "Source_pkey" PRIMARY KEY ("id")
);
