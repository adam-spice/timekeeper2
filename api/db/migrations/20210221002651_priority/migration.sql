/*
  Warnings:

  - You are about to drop the column `priority` on the `project` table. All the data in the column will be lost.
  - Added the required column `priorityId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_2`;

-- AlterTable
ALTER TABLE `project` DROP COLUMN `priority`,
    ADD COLUMN     `priorityId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `priority` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`priorityId`) REFERENCES `priority`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
