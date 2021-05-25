<?php

declare(strict_types=1);

namespace Mishusoft;

// Set required ini configuration.
use Error;
use Exception;

if ((array_key_exists('SERVER_NAME', $_SERVER) === true)
    && (stripos($_SERVER['SERVER_NAME'], strtolower(__NAMESPACE__)) === true)
) {
    ini_set('display_errors', '0');
} else {
    error_reporting(E_ALL);
    ini_set('display_errors', '1');
    ini_set('display_startup_errors', '1');
}

ini_set('max_input_time', '600');
ini_set('max_execution_time', '600');
ini_set('zlib.output_compression', 'On');
set_time_limit(600);


// Start of core constants declarations.
define('DS', DIRECTORY_SEPARATOR);
define('PHP_CODE_SYNTAX', 'PHP_8.*');
define('WHO_AM_I', 'Mishusoft');
define('PHP_RUNTIME_ROOT_PATH', realpath(__DIR__).DIRECTORY_SEPARATOR);
define('PHP_RUNTIME_SYSTEM_PATH', PHP_RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);
// End of core constants declarations.
try {
    include_once PHP_RUNTIME_SYSTEM_PATH.'Framework/Chipsets/Autoload.php';

    // BIOS initialisation.
    Framework\Chipsets\System\BIOS::initialise();
} catch (Error | Exception $e) {
    if (class_exists(Framework\Chipsets\RuntimeErrors::class)) {
        new Framework\Chipsets\RuntimeErrors(
            $e->getMessage(),
            $e->getCode(),
            $e->getCode(),
            $e->getFile(),
            $e->getLine(),
            $e->getTraceAsString()
        );
    } else {
        Framework\Chipsets\System\Logger::write(
            Framework\Chipsets\RuntimeErrors::toWriteable($e)
        );
        echo "<pre>".$e."</pre>";
    }
}//end try
