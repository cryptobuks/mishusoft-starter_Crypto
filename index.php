<?php namespace Mishusoft;

use Error;
use Exception;

if ((isset($_SERVER) && array_key_exists('SERVER_NAME', $_SERVER) && strpos($_SERVER['SERVER_NAME'], strtolower(__NAMESPACE__)))) {
    ini_set('display_errors', 0);
} else {
    error_reporting(E_ALL) and ini_set('display_errors', 1) and ini_set('display_startup_errors', 1);
}
ini_set('max_input_time', 600);
ini_set('max_execution_time', 600);
ini_set('zlib.output_compression', 'On');
set_time_limit(600);
define('DS', DIRECTORY_SEPARATOR);
define("PHP_CODE_SYNTAX", "PHP7.4.3");
define("WHO_AM_I", "Mishusoft");
define("PHP_RUNTIME_ROOT_PATH", realpath(dirname(__FILE__)) . DIRECTORY_SEPARATOR);
define("PHP_RUNTIME_SYSTEM_PATH", PHP_RUNTIME_ROOT_PATH . "Mishusoft" . DIRECTORY_SEPARATOR);
try {
    /*require_once PHP_RUNTIME_SYSTEM_PATH . 'Autoload.php';*/
    require_once PHP_RUNTIME_SYSTEM_PATH . 'Framework/Chipsets/Autoload.php';
    Framework\Chipsets\System\BIOS::initialise();
} catch (Error | Exception $e) {
    if (class_exists(Framework\Chipsets\RuntimeErrors::class)) {
        new Framework\Chipsets\RuntimeErrors($e->getMessage(), $e->getCode(), $e->getCode(), $e->getFile(), $e->getLine(), $e->getTraceAsString());
    } else {
        Framework\Chipsets\System\Logger::write(Framework\Chipsets\RuntimeErrors::codeAsString($e->getCode()) . " [" . $e->getCode() . "] : " . $e->getMessage() . " from " . $e->getFile() . " on line " . $e->getLine() . ".");
        echo "<pre>$e</pre>";
    }
}