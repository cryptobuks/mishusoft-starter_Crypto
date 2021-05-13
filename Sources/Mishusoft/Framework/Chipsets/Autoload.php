<?php

namespace Mishusoft\Framework\Chipsets;

/*automatically load all required classes*/

/*inherit constants for runtime*/
//define("PHP_RUNTIME_SYSTEM_PATH", PHP_RUNTIME_ROOT_PATH . 'Framework' . DIRECTORY_SEPARATOR);

define("PHP_RUNTIME_SYSTEM_TEMP_PATH", PHP_RUNTIME_ROOT_PATH . 'tmp' . DIRECTORY_SEPARATOR);
define("PHP_RUNTIME_LOGS_PATH", PHP_RUNTIME_ROOT_PATH . 'tmp/logs' . DIRECTORY_SEPARATOR);
define("PHP_RUNTIME_REGISTRIES_PATH", PHP_RUNTIME_ROOT_PATH . 'tmp/caches/configs' . DIRECTORY_SEPARATOR);


/*constants for Mishusoft associates*/
define('MS_DOCUMENT_ROOT', realpath(dirname(dirname(dirname(__FILE__)))) . DIRECTORY_SEPARATOR);
define('MS_SERVER_PATH', dirname($_SERVER['PHP_SELF']));
define('INSTALLED_HOST_NAME', array_key_exists("HTTP_HOST", $_SERVER) ? $_SERVER['HTTP_HOST'] : "localhost");
define('MS_SERVER_NAME', array_key_exists("SERVER_NAME", $_SERVER) ? $_SERVER['SERVER_NAME'] : "localhost");

/*log files location declare*/
define('PHP_ACCESS_LOG_FILE', PHP_RUNTIME_LOGS_PATH . 'php_access_' . MS_SERVER_NAME . '.log');
define('PHP_COMPILE_LOG_FILE', PHP_RUNTIME_LOGS_PATH . 'php_compile_' . MS_SERVER_NAME . '.log');
define('PHP_RUNTIME_LOG_FILE', PHP_RUNTIME_LOGS_PATH . 'php_runtime_' . MS_SERVER_NAME . '.log');


Autoload::loadFile([
    join(DIRECTORY_SEPARATOR, [PHP_RUNTIME_ROOT_PATH . "vendor", "autoload.php"]),
    PHP_RUNTIME_SYSTEM_PATH . 'Framework/Chipsets/Preloader.php',
    PHP_RUNTIME_SYSTEM_PATH . 'Framework/Chipsets/System/Logger.php'
]);

Autoload::register();

/*set customize error controller*/
set_error_handler(function ($errorNo, $errorMessage, $errorFile, $errorLine) {
    return new RuntimeErrors($errorMessage, $errorNo, $errorNo, $errorFile, $errorLine);
}, E_ALL);


/**
 * Simple autoloader, so we don't need Composer just for this.
 */
class Autoload
{
    /*set exclude directories for file load*/
    const excludeDirs = array(".", "..", "Backups","Themes");

    public static function register()
    {
        spl_autoload_register(function (string $class) {
            /*check file is use namespace*/
            if (strpos($class, '\\')) {
                //Logger::write("Want to load PSR File $class.");
                //$file = str_replace('\\', DIRECTORY_SEPARATOR, $class) . '.php';
                //Logger::write("Retrieve class name to file name: $file.");
                //$original_file = PHP_RUNTIME_ROOT_PATH . substr($file, strlen(WHO_AM_I) + 1, strlen($file));
                $original_file = Preloader::getPathFromClassNamespace($class);
                if (is_file($original_file)) {
                    //Logger::write("Checking local file: $original_file.");
                    if (file_exists($original_file)) {
                        include_once $original_file;
                        //Logger::write("Included local file: $original_file.");
                    }
                } /*else {
                    //Logger::write("Failed to load $class From $original_file.");
                }*/
            } else {
                //Logger::write("Want to load normal File $class.");

                foreach (scandir(realpath(dirname(dirname(__FILE__)))) as $directory) {
                    if (!in_array($directory, self::excludeDirs)) {
                        //Logger::write(join(["Checking local file: ", PHP_RUNTIME_SYSTEM_PATH, ucfirst($directory), "/", ucfirst($class), ".php"]));
                        if (file_exists(join(DIRECTORY_SEPARATOR, [PHP_RUNTIME_SYSTEM_PATH . ucfirst($directory), ucfirst($class) . ".php"]))) {
                            include_once join(DIRECTORY_SEPARATOR, [PHP_RUNTIME_SYSTEM_PATH . ucfirst($directory), ucfirst($class) . ".php"]);
                            //Logger::write(join(["Included local file: ", PHP_RUNTIME_SYSTEM_PATH, ucfirst($directory), "/", ucfirst($class), ".php"]));
                        }
                    }
                }
            }
        });
    }

    /**
     * @param array $file_list
     */
    public static function loadFile(array $file_list)
    {
        if (count($file_list) > 0) {
            foreach ($file_list as $filename) {
                if (file_exists($filename)) {
                    require_once $filename;
                } else {
                    trigger_error("$filename not found");
                }
            }
        }

    }

}
