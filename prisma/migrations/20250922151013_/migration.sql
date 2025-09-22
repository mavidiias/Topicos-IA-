/*
  Warnings:

  - You are about to drop the column `neme` on the `Option` table. All the data in the column will be lost.
  - Added the required column `name` to the `Option` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Option" DROP COLUMN "neme",
ADD COLUMN     "name" TEXT NOT NULL;
