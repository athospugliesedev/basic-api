/*
  Warnings:

  - Added the required column `isActive` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImage` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "isActive" BOOLEAN NOT NULL,
ADD COLUMN     "profileImage" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;
