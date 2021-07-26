<?php

use Mishusoft\Autoload;
use Mishusoft\Exceptions\Handler as ExceptionsHandler;
use Mishusoft\Storage;

Autoload::loadFile(
    [
        // implode(DIRECTORY_SEPARATOR, [RUNTIME_ROOT_PATH.'vendor', 'autoload.php']),
        Storage::frameworkPath().'Autoload.php',
        Storage::frameworkPath().'Preloader.php',
        Storage::frameworkPath().'System/Logger.php',
    ]
);

// Automatically load all required classes.
Autoload::register();

// Set customize error controller.
set_error_handler(
    static function ($errorNo, $errorMessage, $errorFile, $errorLine) {
        return new ExceptionsHandler($errorMessage, $errorNo, $errorNo, $errorFile, $errorLine);
    },
    E_ALL
);
