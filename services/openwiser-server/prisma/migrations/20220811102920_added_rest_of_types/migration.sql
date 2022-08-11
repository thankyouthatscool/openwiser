/*
  Warnings:

  - A unique constraint covering the columns `[author,title,type]` on the table `Source` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coverUrl` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Source` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Source` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ClippingType" AS ENUM ('HIGHLIGHT', 'NOTE');

-- AlterTable
ALTER TABLE "Source" ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "coverUrl" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Clipping" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" INTEGER NOT NULL,
    "page" INTEGER NOT NULL,
    "sourceId" TEXT NOT NULL,
    "type" "ClippingType" NOT NULL,

    CONSTRAINT "Clipping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotionPage" (
    "id" TEXT NOT NULL,
    "notionId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,

    CONSTRAINT "NotionPage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NotionPage_notionId_key" ON "NotionPage"("notionId");

-- CreateIndex
CREATE UNIQUE INDEX "NotionPage_sourceId_key" ON "NotionPage"("sourceId");

-- CreateIndex
CREATE UNIQUE INDEX "Source_author_title_type_key" ON "Source"("author", "title", "type");

-- AddForeignKey
ALTER TABLE "Clipping" ADD CONSTRAINT "Clipping_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotionPage" ADD CONSTRAINT "NotionPage_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
