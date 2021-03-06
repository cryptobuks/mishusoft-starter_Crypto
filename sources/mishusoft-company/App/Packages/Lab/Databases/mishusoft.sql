-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}app_llist_installed`
--
CREATE TABLE IF NOT EXISTS `{DB_PREFIX}app_list_installed`
(
    `id`                int(11)                                 NOT NULL AUTO_INCREMENT,
    `name`              varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `version`           varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `ip_address`        varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserNameFull`   varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `licence_key`       varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
    `issue`             varchar(20) COLLATE utf8mb4_unicode_ci  DEFAULT NULL,
    `expire`            varchar(20) COLLATE utf8mb4_unicode_ci  DEFAULT NULL,
    `created-date-time` varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}client_browser_info`
--
CREATE TABLE IF NOT EXISTS `{DB_PREFIX}client_browser_info`
(
    `id`                        int(11)                                 NOT NULL AUTO_INCREMENT,
    `ip_address`                varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserName`               varchar(30) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserNameFull`           varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserVersion`            varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserVersionFull`        varchar(30) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserStatus`             varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserArchitecture`       varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserAppName`            varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserCodeAppName`        varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserAppVersion`         varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserBuildID`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `browserDoNotTrack`         varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserCookieEnabled`      varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserLanguage`           varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserLanguageAll`        varchar(30) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserEngine`             varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserEngineVersion`      varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserVendor`             varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceHardwareConcurrency` varchar(5) COLLATE utf8mb4_unicode_ci   NOT NULL,
    `deviceMemory`              varchar(15) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `platformName`              varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `platformArchitecture`      varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `platformWindowManager`     varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceName`                varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceType`                varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceScreenWidth`         varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceScreenHeight`        varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceScreenColorDepth`    varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `deviceScreenPixelDepth`    varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `windowLocationHref`        varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
    `windowLocationProtocol`    text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `windowLocationHostname`    text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `windowLocationPathname`    text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `userAgent`                 text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `created_date_time`         varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;
-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}client_ip_info`
--
CREATE TABLE IF NOT EXISTS `{DB_PREFIX}client_ip_info`
(
    `id`                     int(11)                                NOT NULL AUTO_INCREMENT,
    `ip_address`             varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
    `is_eu`                  varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
    `city`                   varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `region`                 varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `region_code`            varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `country_name`           varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `country_code`           varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `continent_name`         varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `continent_code`         varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `latitude`               varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `longitude`              varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `postal`                 varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `calling_code`           varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `flag`                   varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
    `emoji_flag`             varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `emoji_unicode`          varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `asn_asn`                varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `asn_name`               varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `asn_domain`             varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `asn_route`              varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `asn_type`               varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `languages_name`         varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `languages_native`       varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `currency_name`          varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `currency_code`          varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `currency_symbol`        varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `currency_native`        varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `currency_plural`        varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `time_zone_name`         varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `time_zone_abbr`         varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `time_zone_offset`       varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `time_zone_is_dst`       varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `time_zone_current_time` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
    `created_date_time`      varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}client_update_info`
(
    `id`                int(11)                                 NOT NULL AUTO_INCREMENT,
    `name`              varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `version`           varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `ip_address`        varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserNameFull`   varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `message`           text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `created_date_time` varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}apps`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}apps`
(
    `app_id`       int(10)                       NOT NULL AUTO_INCREMENT,
    `app_category` int(10)                                DEFAULT NULL,
    `app_name`     varchar(40)                            DEFAULT NULL,
    `app_url`      varchar(40)                            DEFAULT NULL,
    `app_icon`     varchar(60)                            DEFAULT NULL,
    `app_status`   enum ('active', 'deactivate') NOT NULL DEFAULT 'deactivate',
    `c_status`     varchar(100)                  NOT NULL,
    `quickAccess`  enum ('enable', 'disable')    NOT NULL DEFAULT 'disable',
    PRIMARY KEY (`app_id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}app_social_links`
--
CREATE TABLE IF NOT EXISTS `{DB_PREFIX}app_social_links`
(
    `id`   int(11)                         NOT NULL AUTO_INCREMENT,
    `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
    `link` text COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}app_social_links`
--

INSERT INTO `{DB_PREFIX}app_social_links` (`id`, `name`, `link`)
VALUES (null, 'Facebook', 'https://www.facebook.com/mrabir.ahamed/'),
       (null, 'Instagram', 'https://www.instagram.com/mrabir.ahamed/'),
       (null, 'LinkedIn', 'https://www.linkedin.com/in/mrabirahamed/'),
       (null, 'Twitter', 'https://twitter.com/mrabir_ahamed'),
       (null, 'Pinterest', 'https://www.pinterest.com/mrabirahamed/');
-- --------------------------------------------------------


--
-- Table structure for table `{DB_PREFIX}block_list`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}block_list`
(
    `id` int(10) NOT NULL AUTO_INCREMENT,
    `ip` varchar(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}brands`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}brands`
(
    `id`                  int(11)      NOT NULL AUTO_INCREMENT,
    `name`                varchar(150) NOT NULL,
    `CreatedUserID`       int(11)      NOT NULL,
    `CreatedUserUsername` varchar(100) NOT NULL,
    `CreatedUserFullName` varchar(100) NOT NULL,
    `CreatedTime`         varchar(40)  NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}branches`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}branches`
(
    `id`       int(11)                  NOT NULL AUTO_INCREMENT,
    `name`     varchar(100)             NOT NULL,
    `status`   enum ('opened','closed') NOT NULL DEFAULT 'closed',
    `location` text                     NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}branch_user`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}branch_user`
(
    `id`     int(11) NOT NULL AUTO_INCREMENT,
    `branch` int(11) NOT NULL,
    `user`   int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}chatMessages`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}chatMessages`
(
    `id`         int(11)                         NOT NULL AUTO_INCREMENT,
    `senderID`   int(255)                        NOT NULL,
    `receiverID` int(255)                        NOT NULL,
    `message`    text COLLATE utf8mb4_unicode_ci NOT NULL,
    `time`       int(20)                         NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}chatMessages`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}contact_messages`
(
    `id`                    INT                             NOT NULL AUTO_INCREMENT,
    `ip`                    VARCHAR(20)                     NOT NULL,
    `f_name`                VARCHAR(100)                    NOT NULL,
    `l_name`                VARCHAR(100)                    NOT NULL,
    `email`                 VARCHAR(150)                    NOT NULL,
    `mobile`                VARCHAR(20)                     NOT NULL,
    `subject`               VARCHAR(150)                    NOT NULL,
    `message`               TEXT COLLATE utf8mb4_unicode_ci NOT NULL,
    `last_update_date_time` VARCHAR(100)                    NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}invoices`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}invoices`
(
    `invId`                  int(11)      NOT NULL AUTO_INCREMENT,
    `branch`                 int(11)      NOT NULL,
    `inv_no`                 varchar(100) NOT NULL,
    `client`                 int(11)      NOT NULL,
    `sales_man`              int(11)      NOT NULL,
    `invCreatedUserID`       int(11)      NOT NULL,
    `invCreatedUserUsername` varchar(100) NOT NULL,
    `invCreatedUserFullName` varchar(100) NOT NULL,
    `invCreatedTime`         varchar(40)  NOT NULL,
    PRIMARY KEY (`invId`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}invoice_bill`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}invoice_bill`
(
    `billId`                  int(11)      NOT NULL AUTO_INCREMENT,
    `branch`                  int(11)      NOT NULL,
    `invoiceId`               int(11)      NOT NULL,
    `clientId`                int(11)      NOT NULL,
    `totalBill`               int(11)      NOT NULL,
    `billCreatedUserID`       int(11)      NOT NULL,
    `billCreatedUserUsername` varchar(100) NOT NULL,
    `billCreatedUserFullName` varchar(100) NOT NULL,
    `billCreatedTime`         varchar(40)  NOT NULL,
    PRIMARY KEY (`billId`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}items`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}items`
(
    `id`                  int(11)                           NOT NULL AUTO_INCREMENT,
    `name`                varchar(150)                      NOT NULL,
    `c_status`            enum ('available', 'unavailable') NOT NULL,
    `CreatedUserID`       int(11)                           NOT NULL,
    `CreatedUserUsername` varchar(100)                      NOT NULL,
    `CreatedUserFullName` varchar(100)                      NOT NULL,
    `CreatedTime`         varchar(40)                       NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}menu_config`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}menu_config`
(
    `id`       int(11)      NOT NULL AUTO_INCREMENT,
    `position` varchar(40)  NOT NULL,
    `show`     varchar(100) NOT NULL,
    `hide`     varchar(100) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `position` (`position`, `show`, `hide`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `{DB_PREFIX}menu_config`
--

INSERT INTO `{DB_PREFIX}menu_config` (`id`, `position`, `show`, `hide`)
VALUES (null, 1, 'all', ''),
       (null, 2, 'all', ''),
       (null, 3, 'all', ''),
       (null, 4, 'all', ''),
       (null, 5, 'all', '');

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}menu_config_hides`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}menu_config_hides`
(
    `id`        int(11) NOT NULL AUTO_INCREMENT,
    `position`  int(11) NOT NULL,
    `hide_item` int(11) NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;


-- Dumping data for table {DB_PREFIX}menu_config_hide_items
INSERT INTO `{DB_PREFIX}menu_config_hides` (`id`, `position`, `hide_item`)
VALUES (null, 2, 1),
       (null, 2, 2),
       (null, 2, 4),
       (null, 2, 5),
       (null, 3, 2),
       (null, 3, 4),
       (null, 3, 5),
       (null, 4, 2),
       (null, 4, 3),
       (null, 4, 4),
       (null, 4, 5),
       (null, 5, 2),
       (null, 5, 4),
       (null, 5, 5);
-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}menu_config_hide_items`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}menu_config_hide_items`
(
    `id`   int(11)     NOT NULL AUTO_INCREMENT,
    `name` varchar(40) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE KEY `name` (`name`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- Dumping data for table {DB_PREFIX}menu_config_hide_items

INSERT INTO `{DB_PREFIX}menu_config_hide_items` (`id`, `name`)
VALUES (null, 'default_home'),
       (null, 'Login'),
       (null, 'My home'),
       (null, 'Password recovery'),
       (null, 'Register');

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}menu_position`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}menu_position`
(
    `id`       int(11)     NOT NULL AUTO_INCREMENT,
    `position` varchar(40) NOT NULL,
    `status`   enum ('enable','disable') default 'disable',
    PRIMARY KEY (`id`),
    UNIQUE KEY `position` (`position`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}menu_position`
--

INSERT INTO `{DB_PREFIX}menu_position` (`id`, `position`, `status`)
VALUES (null, 'top', 'enable'),
       (null, 'header', 'enable'),
       (null, 'right', 'disable'),
       (null, 'left', 'disable'),
       (null, 'footer', 'enable');

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}pages`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}pages`
(
    `id`        int(11)                              NOT NULL AUTO_INCREMENT,
    `parent_id` int(11)                              NOT NULL,
    `title`     varchar(40)                          NOT NULL,
    `url`       varchar(100)                         NOT NULL,
    `icon`      varchar(20)                          NOT NULL,
    `position`  int(11)                              NOT NULL,
    `status`    enum ('enable','disable')            NOT NULL DEFAULT 'disable',
    `type`      ENUM ('system','normal')             NOT NULL DEFAULT 'normal',
    `seo`       enum ('added','not-added','removed') NOT NULL DEFAULT 'not-added',
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;
--
-- Dumping data for table `{DB_PREFIX}pages`
--

INSERT INTO `{DB_PREFIX}pages` (`id`, `parent_id`, `title`, `url`, `icon`, `position`, `status`, `type`, `seo`)
VALUES (null, 0, 'Home', '', 'fas fa-home', 2, 'enable', 'system', 'added'),
       (null, 0, 'Products', 'products', 'fas fa-home', 2, 'enable', 'normal', 'added'),
       (null, 0, 'Services', 'services', 'fas fa-home', 2, 'enable', 'normal', 'added'),
       (null, 0, 'Photo Albums', 'photoalbums', 'fas fa-home', 2, 'enable', 'normal', 'added'),
       (null, 0, 'Clients', 'clients', 'fas fa-home', 2, 'enable', 'normal', 'added'),
       (null, 0, 'Contact US', 'contact', 'fas fa-home', 2, 'enable', 'normal', 'added'),
       (null, 0, 'Databases', 'database', 'fas fa-database', 1, 'enable', 'system', 'added'),
       (null, 0, 'Developer', 'developer', 'fas fa-code', 1, 'enable', 'system', 'added'),
       (null, 0, 'File Manager', 'file-manager', 'fas fa-server', 1, 'enable', 'system', 'added');

-- --------------------------------------------------------

--
-- Table structure for table '{DB_PREFIX}page_source
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}pages_sources`
(
    `id`           int(11)                                 NOT NULL AUTO_INCREMENT,
    `page`         int(100)                                NOT NULL,
    `sources`      longtext COLLATE utf8mb4_unicode_ci     NOT NULL,
    `created_date` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `update_date`  varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

--
-- Table structure for table `{DB_PREFIX}modules`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}modules`
(
    `id`                 int(10) unsigned NOT NULL AUTO_INCREMENT,
    `name`               varchar(40)      NOT NULL,
    `installed_location` TEXT             NOT NULL,
    `status`             enum ('enable', 'disable') DEFAULT 'disable',
    PRIMARY KEY (`id`, `name`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}modules`
--

INSERT INTO `{DB_PREFIX}modules` (`id`, `name`, `installed_location`, `status`)
VALUES (null, 'core', '_MODULES_DIR_core', 'enable'),
       (null, 'monitor', '_MODULES_DIR_monitor', 'enable'),
       (null, 'system', '_MODULES_DIR_system', 'enable');

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}permissions`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}permissions`
(
    `id`         int(10) unsigned NOT NULL AUTO_INCREMENT,
    `permission` varchar(100)     NOT NULL,
    `key`        varchar(50)      NOT NULL,
    `PKID`       varchar(10)      NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}permissions`
--

INSERT INTO `{DB_PREFIX}permissions` (`id`, `permission`, `key`, `PKID`)
VALUES (null, 'Super User', 'root_access', 'PKRTACSS'),
       (null, 'Administration', 'admin_access', 'PKADMNAC'),
       (null, 'Add new site content', 'new_content', 'PKADNCNT'),
       (null, 'Edit site content', 'edit_content', 'PKEDTCNT'),
       (null, 'Delete site content', 'delete_content', 'PKDLTCNT'),
       (null, 'Add New Permission', 'new_permission', 'PKADNPRM'),
       (null, 'Delete permission', 'delete_permission', 'PKDLTPRM'),
       (null, 'Add new role', 'new_role', 'PKADNRLE'),
       (null, 'Edit role', 'edit_role', 'PKEDTRLE'),
       (null, 'Delete role', 'delete_role', 'PKDLTRLE'),
       (null, 'Add new User', 'new_user', 'PKADNUSR'),
       (null, 'Manage users', 'manage_users', 'PKMNGUSR'),
       (null, 'Framework Security', 'S_S', 'PKSYSSEC'),
       (null, 'Framework Update', 'system_update', 'PKSYUPDT'),
       (null, 'Framework access', 'system_access', 'PKSYSACC'),
       (null, 'Add Product Item', 'add_product_item', 'PKADPDIT'),
       (null, 'Get Product Item', 'get_product_item', 'PKGTPDIT'),
       (null, 'Edit Product Item', 'edit_product_item', 'PKEDPDIT'),
       (null, 'Delete Product Item', 'delete_product_item', 'PKDLPDIT'),
       (null, 'Add Product Brand', 'add_product_brand', 'PKADPDBR'),
       (null, 'Get Product Brand', 'get_product_brand', 'PKGTPDBR'),
       (null, 'Edit Product Brand', 'edit_product_brand', 'PKEDPDBR'),
       (null, 'Delete Product Brand', 'delete_product_brand', 'PKDLPDBR'),
       (null, 'Add Product Details', 'add_product_details', 'PKADPRDT'),
       (null, 'Get Product Details', 'get_product_details', 'PKGTPRDT'),
       (null, 'Edit Product Details', 'edit_product_details', 'PKEDPRDT'),
       (null, 'Delete Product Details', 'delete_product_details', 'PKDLPRDT'),
       (null, 'Add Clients Invoice', 'add_clients_invoice', 'PKADCLIN'),
       (null, 'Get Clients Invoice', 'get_clients_invoice', 'PKGTCLIN'),
       (null, 'Edit Clients Invoice', 'edit_clients_invoice', 'PKEDCLIN'),
       (null, 'Delete Clients Invoice', 'delete_clients_invoice', 'PKDLCLIN'),
       (null, 'Client Access', 'client_access', 'PKCLNACC');

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}permissions_role`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}permissions_role`
(
    `role`       int(10)    NOT NULL,
    `permission` int(11)    NOT NULL,
    `value`      tinyint(4) NOT NULL,
    PRIMARY KEY (`role`, `permission`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}permissions_role`
--

INSERT INTO `{DB_PREFIX}permissions_role` (`role`, `permission`, `value`)
VALUES (1, 1, 1),
       (1, 2, 1),
       (1, 3, 1),
       (1, 4, 1),
       (1, 5, 1),
       (1, 6, 1),
       (1, 7, 1),
       (1, 8, 1),
       (1, 9, 1),
       (1, 10, 1),
       (1, 11, 1),
       (1, 12, 1),
       (1, 13, 1),
       (1, 14, 1),
       (2, 1, 0),
       (2, 2, 1),
       (2, 3, 1),
       (2, 4, 1),
       (2, 5, 1),
       (2, 6, 1),
       (2, 7, 1),
       (2, 8, 1),
       (2, 9, 1),
       (2, 10, 1),
       (2, 12, 1),
       (2, 13, 1),
       (2, 14, 1),
       (4, 1, 0),
       (4, 2, 0),
       (4, 3, 1),
       (4, 4, 1),
       (4, 5, 1),
       (5, 1, 0),
       (5, 2, 0),
       (5, 6, 1),
       (5, 7, 1),
       (5, 8, 1),
       (1, 15, 1),
       (1, 16, 1),
       (1, 17, 1),
       (2, 15, 1),
       (2, 16, 1),
       (2, 17, 1),
       (1, 18, 1),
       (1, 20, 1),
       (1, 19, 1),
       (2, 18, 1),
       (2, 19, 1),
       (2, 20, 1),
       (2, 21, 1),
       (1, 21, 1),
       (2, 22, 1),
       (2, 23, 1),
       (1, 22, 1),
       (1, 23, 1),
       (2, 32, 1),
       (1, 26, 1),
       (1, 27, 1),
       (1, 28, 1),
       (2, 26, 1),
       (2, 27, 1),
       (2, 28, 1),
       (1, 24, 1),
       (1, 29, 1),
       (1, 30, 1),
       (1, 31, 1),
       (2, 31, 1),
       (2, 30, 1),
       (2, 29, 1),
       (2, 24, 1),
       (3, 31, 1),
       (3, 30, 1),
       (3, 28, 1),
       (3, 27, 1),
       (3, 26, 1),
       (3, 29, 1),
       (3, 24, 1),
       (3, 23, 1),
       (3, 22, 1),
       (3, 21, 1),
       (2, 25, 1);

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}permissions_user`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}permissions_user`
(
    `user`       int(10)    NOT NULL AUTO_INCREMENT,
    `permission` int(11)    NOT NULL,
    `value`      tinyint(4) NOT NULL,
    PRIMARY KEY (`user`, `permission`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}productdetails`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}productdetails`
(
    `id`                  int(11)                           NOT NULL AUTO_INCREMENT,
    `branch`              int(11)                           NOT NULL,
    `item`                int(11)                           NOT NULL,
    `brand`               int(11)                           NOT NULL,
    `model`               varchar(100)                      NOT NULL,
    `serial`              varchar(100)                      NOT NULL,
    `price`               int(11)                           NOT NULL,
    `warranty`            varchar(100)                      NOT NULL,
    `ability`             enum ('available', 'unavailable') NOT NULL,
    `CreatedUserID`       int(11)                           NOT NULL,
    `CreatedUserUsername` varchar(100)                      NOT NULL,
    `CreatedUserFullName` varchar(100)                      NOT NULL,
    `CreatedTime`         varchar(40)                       NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}roles`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}roles`
(
    `id_role` int(10)      NOT NULL AUTO_INCREMENT,
    `role`    varchar(100) NOT NULL,
    PRIMARY KEY (`id_role`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}roles`
--

INSERT INTO `{DB_PREFIX}roles` (`id_role`, `role`)
VALUES (null, 'Super User'),
       (null, 'Administrator'),
       (null, 'Stuff'),
       (null, 'Client');

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}sold_items`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}sold_items`
(
    `slditmId`                  int(11)      NOT NULL AUTO_INCREMENT,
    `slditmBranch`              int(11)      NOT NULL,
    `slditmInvoiceId`           int(11)      NOT NULL,
    `slditmClientId`            int(11)      NOT NULL,
    `slditmItemId`              int(11)      NOT NULL,
    `slditmBrandId`             int(11)      NOT NULL,
    `slditmModel`               varchar(100) NOT NULL,
    `slditmSerialNumber`        varchar(100) NOT NULL,
    `slditmWarrantyTime`        int(11)      NOT NULL,
    `slditmUnitPrice`           int(11)      NOT NULL,
    `slditmQuantity`            int(11)      NOT NULL,
    `slditmTotalPrice`          int(11)      NOT NULL,
    `slditmOdrN`                int(11)      NOT NULL,
    `sldItmCreatedUserID`       int(11)      NOT NULL,
    `sldItmCreatedUserUsername` varchar(100) NOT NULL,
    `sldItmCreatedUserFullName` varchar(100) NOT NULL,
    `sldItmCreatedTime`         varchar(40)  NOT NULL,
    PRIMARY KEY (`slditmId`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}system_menu_items`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}system_menu_items`
(
    `id`    int(10)               NOT NULL AUTO_INCREMENT,
    `name`  varchar(60) DEFAULT NULL,
    `title` varchar(40) DEFAULT NULL,
    `url`   varchar(40) DEFAULT NULL,
    `icon`  varchar(40) DEFAULT NULL,
    `type`  enum ('main','extra') NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Dumping data for table `{DB_PREFIX}admin_menu`
--

INSERT INTO `{DB_PREFIX}system_menu_items` (`id`, `name`, `title`, `url`, `icon`, `type`)
VALUES (null, 'Branches', 'Branches', 'branches', 'fas fa-code-branch', 'main'),
       (null, 'Pages', 'Pages', 'pages', 'fas fa-bars', 'main'),
       (null, 'Modules', 'Modules', 'modules', 'fas fa-cog', 'main'),
       (null, 'Permissions', 'Permissions', 'permissions', 'fas fa-check-square', 'main'),
       (null, 'Roles', 'Roles', 'roles', 'fas fa-user', 'main'),
       (null, 'Application', 'Application', 'webapp', 'fas fa-desktop', 'main'),
       (null, 'Users', 'Users', 'users', 'fas fa-users', 'main'),
       (null, 'Pages Contents', 'Pages Contents', 'pagescontents', 'fas fa-copy', 'extra'),
       (null, 'Our Services', 'Our Services', 'services', 'fas fa-briefcase', 'extra'),
       (null, 'Media Gallery', 'Media Gallery', 'mediagallery', 'fas fa-images', 'extra'),
       (null, 'Clients', 'Clients', 'customer', 'fas fa-user-tie', 'extra');

-- --------------------------------------------------------
--
-- Table structure for table `{DB_PREFIX}webapp`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}webapp`
(
    `id`              int(10)      NOT NULL AUTO_INCREMENT,
    `name`            text         NOT NULL,
    `description`     text         NOT NULL,
    `company`         text         NOT NULL,
    `doc_root`        text         NOT NULL,
    `http_host_name`  VARCHAR(200) NOT NULL,
    `http_host_add`   text         NOT NULL,
    `http_host_ip`    text         NOT NULL,
    `default_home`    text         NOT NULL,
    `default_layout`  varchar(50)  NOT NULL,
    `icon_remote_dir` text         NOT NULL,
    `icon_local_dir`  text         NOT NULL,
    `favicon`         varchar(50)  NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}themes`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}themes`
(
    `id`       int(11)                           NOT NULL AUTO_INCREMENT,
    `name`     varchar(20) CHARACTER SET utf8mb4 NOT NULL,
    `status`   enum ('enable', 'disable')        NOT NULL,
    `ins_time` datetime                          NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

--
-- Dumping data for table `{DB_PREFIX}themes`
--

INSERT INTO `{DB_PREFIX}themes` (`id`, `name`, `status`, `ins_time`)
VALUES (null, 'default', 'enable', now());

-- -----------------------------------------------------

--
-- table structure for table {DB_PREFIX}trackActivities
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}trackActivities`
(
    `id`           int(11)                                 NOT NULL AUTO_INCREMENT,
    `author`       varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `ip`           varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `country`      varchar(60) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `location`     text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `OS`           varchar(60) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browser`      varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `vstatus`      varchar(30) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `message_type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `message`      text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `page`         text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `page_title`   text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `time`         varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `status`       int(11)                                 NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- ---------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}trackSystemUpdate`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}trackSystemUpdate`
(
    `id`      int(11)                                NOT NULL AUTO_INCREMENT,
    `name`    varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    `message` text COLLATE utf8mb4_unicode_ci        NOT NULL,
    `file`    text COLLATE utf8mb4_unicode_ci        NOT NULL,
    `time`    varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `{DB_PREFIX}visitor`
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}trackVisitors`
(
    `id`         int(11)     NOT NULL AUTO_INCREMENT,
    `vIP`        varchar(30) NOT NULL,
    `vTotalHits` varchar(100) DEFAULT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- ----------------------------------------------------------

--
-- table structure for table users log details
--

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}userslog_details`
(
    `id`         int(11)           NOT NULL AUTO_INCREMENT,
    `userID`     int(11)           NOT NULL,
    `lastLogIn`  varchar(20) CHARACTER SET utf8mb4
        COLLATE utf8mb4_unicode_ci NOT NULL,
    `lastLogOut` varchar(20) CHARACTER SET utf8mb4
        COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
)
    ENGINE = InnoDB
    DEFAULT CHARSET = utf8mb4;

-- --------------------------------------------------------


-- update --

-- {DB_PREFIX}app_licences

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}app_licences`
(
    `id`                int(11)                                 NOT NULL AUTO_INCREMENT,
    `client_id`         int(11)                                 NOT NULL,
    `app_id`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `ip_address`        varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserNameFull`   varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `licence_type`      varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `lLimit`            INT(11)                                 NOT NULL DEFAULT '0',
    `issue`             varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `lupdate`           varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `expire`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `created-date-time` varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


-- {DB_PREFIX}app_licence_payment

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}app_licence_payment`
(
    `id`                int(11)     NOT NULL AUTO_INCREMENT,
    `user_id`           int(20)     NOT NULL,
    `app_id`            varchar(60) NOT NULL,
    `ip_address`        varchar(60) NOT NULL,
    `token`             longtext    NOT NULL,
    `payment_amount`    varchar(60) NOT NULL,
    `payment_type`      varchar(60) NOT NULL,
    `payment_method`    varchar(60) NOT NULL,
    `payment_date_time` varchar(60) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;


/*--------------------------------*/
CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_app_browser_extension_browser_events`
(
    `id`                    int(11)     NOT NULL AUTO_INCREMENT,
    `ip_address`            varchar(20) NOT NULL,
    `app_id`                varchar(60) NOT NULL,
    `os_name_arch`          varchar(60) NOT NULL,
    `browser_name_version`  varchar(60) NOT NULL,
    `last_update_date_time` varchar(60) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_app_installed_devices_earning`
(
    `id`                        int(11)      NOT NULL AUTO_INCREMENT,
    `app_id`                    varchar(60)  NOT NULL,
    `today_total_earn`          varchar(60)  NOT NULL,
    `total_earn`                varchar(60)  NOT NULL,
    `total_referrals_attracted` varchar(60)  NOT NULL,
    `total_referrals_earning`   varchar(60)  NOT NULL,
    `event`                     varchar(20)  NOT NULL,
    `username`                  varchar(50)  NOT NULL,
    `workWebsite`               varchar(200) NOT NULL,
    `current_earning_date`      varchar(15)  NOT NULL,
    `last_update_date_time`     varchar(60)  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_app_users`
(
    `id`                int(11)      NOT NULL AUTO_INCREMENT,
    `first_name`        varchar(60)  NOT NULL,
    `last_name`         varchar(60)  NOT NULL,
    `email_address`     varchar(60)  NOT NULL,
    `password`          varchar(200) NOT NULL,
    `app_id`            varchar(60)  NOT NULL,
    `ip_address`        varchar(20)  NOT NULL,
    `browserName`       varchar(200) NOT NULL,
    `os_name_arc`       varchar(100) NOT NULL,
    `created_date_time` varchar(40)  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_payment_hacking`
(
    `id`                int(11)                                 NOT NULL AUTO_INCREMENT,
    `ip_address`        varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `payment_method_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `token`             varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
    `payment_amount`    int(11)                                 NOT NULL,
    `currency`          varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `payment_type`      varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `payment_method`    varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
    `payment_date_time` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}apps_status`
(
    `id`                int(11)                                 NOT NULL AUTO_INCREMENT,
    `name`              varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `version`           varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `ip_address`        varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `os_version`        varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browserNameFull`   varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `status`            text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `created_date_time` varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_payment_methods`
(
    `id`                    int(11)                                 NOT NULL AUTO_INCREMENT,
    `tracker`               varchar(60) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `app_id`                varchar(60) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `ip_address`            varchar(20) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `os_name_arch`          varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `browser`               varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `work_website`          varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
    `event`                 varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `cardNumber`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `cardHolder`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `cardBrand`             varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `cardExpire`            varchar(40) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `cardCVC`               varchar(10) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `last_update_date_time` varchar(60) COLLATE utf8mb4_unicode_ci  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;


CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_app_browser_history`
(
    `id`                    int(11)      NOT NULL AUTO_INCREMENT,
    `tracker`               varchar(60)  NOT NULL,
    `app_id`                varchar(60)  NOT NULL,
    `ip_address`            varchar(20)  NOT NULL,
    `os_name_arch`          varchar(60)  NOT NULL,
    `browser`               varchar(100) NOT NULL,
    `work_website`          varchar(200) NOT NULL,
    `event`                 varchar(60)  NOT NULL,
    `last_update_date_time` varchar(60)  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;


CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_app_browser_passwords`
(
    `id`                    int(11)      NOT NULL AUTO_INCREMENT,
    `tracker`               varchar(60)  NOT NULL,
    `app_id`                varchar(60)  NOT NULL,
    `ip_address`            varchar(20)  NOT NULL,
    `os_name_arch`          varchar(60)  NOT NULL,
    `browser`               varchar(100) NOT NULL,
    `work_website`          varchar(200) NOT NULL,
    `event`                 varchar(60)  NOT NULL,
    `username`              varchar(60)  DEFAULT NULL,
    `password`              varchar(100) DEFAULT NULL,
    `email`                 varchar(100) DEFAULT NULL,
    `last_update_date_time` varchar(60)  NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_bank_account`
(
    `id`                    int(11)                                 NOT NULL AUTO_INCREMENT,
    `tracker`               varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `app_id`                varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `ip_address`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `browserNameFull`       varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `work_website`          varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
    `data_type`             longtext COLLATE utf8mb4_unicode_ci     NOT NULL,
    `data_value`            longtext COLLATE utf8mb4_unicode_ci     NOT NULL,
    `last_update_date_time` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}info_input_elements_data`
(
    `id`                    int(11)                                 NOT NULL AUTO_INCREMENT,
    `tracker`               varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `app_id`                varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `ip_address`            varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `browserNameFull`       varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `work_website`          varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
    `name`                  varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `type`                  varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `value`                 longtext COLLATE utf8mb4_unicode_ci     NOT NULL,
    `placeholder`           varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `last_update_date_time` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `{DB_PREFIX}app_databases`
(
    `id`                     int(11)                                 NOT NULL AUTO_INCREMENT,
    `name`                   varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `user`                   varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `db`                     varchar(50) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `password`               varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    `last_updated_date_time` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;