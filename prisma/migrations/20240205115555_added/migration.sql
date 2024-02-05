/*
  Warnings:

  - Added the required column `password` to the `register` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "register" ADD COLUMN     "password" TEXT NOT NULL;
