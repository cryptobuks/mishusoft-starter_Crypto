<?php

    declare(strict_types=1);

    /**
     * Mishusoft application player.
     *
     * @package    Mishusoft
     * @subpackage website
     * @author     Al-Amin Ahamed <alamin@mishusoft.com>
     * @copyright  2021 Al-Amin Ahamed
     */

    // define required constants for runtime requirement
    const WHO_AM_I = "Mishusoft";
    const DS       = DIRECTORY_SEPARATOR;
    define("FRAMEWORK_START_AT", time());
    define("RUNTIME_ROOT_PATH", realpath(dirname(__DIR__)) . DS);

    // Load files with composer
    include_once dirname(__DIR__) . '/vendor/autoload.php';

    // Load bootstrap files for application
    include_once dirname(__DIR__) . '/bootstrap/app.php';

    //fetch maintenance mode
    if (file_exists(dirname(__DIR__) . '/maintenance.enable')) {
        // load maintenance interface
        include_once dirname(__DIR__) . '/storages/system/views/maintenance.php';
        exit(0);
    }

    Mishusoft\System\Log::info(sprintf('%s application started', WHO_AM_I));

    // BIOS initialisation.
    Mishusoft\System\BIOS\App::run();
