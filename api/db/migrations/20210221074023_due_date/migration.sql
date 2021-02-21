/*
  Warnings:

  - Added the required column `due` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_2`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_2`;

-- AlterTable
ALTER TABLE `project` ADD COLUMN     `due` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`priorityId`) REFERENCES `Priority`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
