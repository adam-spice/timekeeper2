-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_2`;

-- DropForeignKey
ALTER TABLE `project` DROP FOREIGN KEY `project_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_1`;

-- DropForeignKey
ALTER TABLE `work` DROP FOREIGN KEY `work_ibfk_2`;

-- CreateTable
CREATE TABLE `Test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`priorityId`) REFERENCES `Priority`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Project` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Work` ADD FOREIGN KEY (`projectId`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
