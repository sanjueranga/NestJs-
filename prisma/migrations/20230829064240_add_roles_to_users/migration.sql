/*
  Warnings:

  - You are about to drop the `_RoleToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_RoleToUser" DROP CONSTRAINT "_RoleToUser_B_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "roles" TEXT[];

-- DropTable
DROP TABLE "_RoleToUser";

-- DropTable
DROP TABLE "roles";
