-- CreateTable
CREATE TABLE `neon_products` (
    `IdProduct` INTEGER NOT NULL AUTO_INCREMENT,
    `Product_name` VARCHAR(191) NULL,
    `Price` DOUBLE NOT NULL,
    `Product_description` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`IdProduct`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
