<?php
/**
 * Mishusoft application paler.
 *
 * @package    Mishusoft
 * @subpackage website
 * @author     Squiz Pty Ltd <products@squiz.net>
 * @copyright  2021 Squiz Pty Ltd (ABN 77 084 670 600)
 *  */

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

// Start enable-mode.
// Enable display error mode.
// error_reporting(E_ALL);
// ini_set('display_errors', '0');
// ini_set('display_errors', '1');
// ini_set('display_startup_errors', '1');
// End enable-mode.
ini_set('max_input_time', '600');
ini_set('max_execution_time', '600');
ini_set('zlib.output_compression', 'On');
set_time_limit(600);


// Start of core constants declarations.
define('DS', DIRECTORY_SEPARATOR);
define('PHP_CODE_SYNTAX', 'PHP_8.*');
define('WHO_AM_I', 'Mishusoft');
define('RUNTIME_ROOT_PATH', realpath(__DIR__).DIRECTORY_SEPARATOR);
define('RUNTIME_SYSTEM_PATH', RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);
// End of core constants declarations.
try {
    include_once RUNTIME_SYSTEM_PATH.'Framework/Chipsets/Autoload.php';

    Framework\Chipsets\System\Logger::write(sprintf('%s application started', __NAMESPACE__));

    // BIOS initialisation.
    Framework\Chipsets\System\BIOS::initialise();
} catch (Error | Exception $e) {
    if (class_exists(Framework\Chipsets\RuntimeErrors::class)) {
        //echo '<pre>'.$e.'</pre>';
        //echo '<pre>'.print_r($e->getTrace(), false).'</pre>';
        //echo '<pre>'.print_r($e->getTraceAsString(), false).'</pre>';
        //echo '<br/>';
        //echo '<br/>';
        //echo '<br/>';
        //echo '<br/>';
        Framework\Chipsets\RuntimeErrors::fetch($e);
    } else {
        Framework\Chipsets\System\Logger::write(
            Framework\Chipsets\RuntimeErrors::toWriteable($e)
        );
        echo '<pre>'.$e.'</pre>';
    }
}//end try
