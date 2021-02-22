-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_2`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_2`;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`priorityId`) REFERENCES `Priority`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
