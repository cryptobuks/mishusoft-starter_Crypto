<?php

use Mishusoft\Autoload;
use Mishusoft\Exceptions\Handler as ExceptionsHandler;
use Mishusoft\Storage;

Autoload::loadFile(
    [
        // implode(DIRECTORY_SEPARATOR, [RUNTIME_ROOT_PATH.'vendor', 'autoload.php']),
        Storage::frameworkPath().'Autoload.php',
        Storage::frameworkPath().'Preloader.php',
        Storage::frameworkPath().'System/log.php',
    ]
);

// Automatically load all required classes.
Autoload::register();

// Set customize error controller.
set_error_handler(
    static function ($errorNo, $errorMessage) {
        //print_r(func_get_args(), false);
        return new ExceptionsHandler($errorMessage, $errorNo);
    },
    E_ALL
);
