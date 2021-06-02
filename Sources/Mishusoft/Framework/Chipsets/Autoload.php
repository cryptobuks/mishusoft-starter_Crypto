<?php

namespace Mishusoft\Framework\Chipsets;


use Mishusoft\Framework\Chipsets\System\Logger;
use RuntimeException;


// Constants for Mishusoft associates.
define('APPLICATION_DOCUMENT_ROOT', realpath(dirname(__FILE__, 3)).DS);
define('APPLICATION_SERVER_PATH', dirname($_SERVER['PHP_SELF']));

define('RUNTIME_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH.'tmp'.DS);
define('RUNTIME_CACHE_ROOT_PATH', RUNTIME_ROOT_PATH.'tmp/'.md5($_SERVER['PHP_SELF']).DS);

if (array_key_exists('HTTP_HOST', $_SERVER) === true) {
    define('INSTALLED_HOST_NAME', $_SERVER['HTTP_HOST']);
} else {
    define('INSTALLED_HOST_NAME', 'localhost');
}

if (array_key_exists('SERVER_NAME', $_SERVER) === true) {
    define('APPLICATION_SERVER_NAME', $_SERVER['SERVER_NAME']);
} else {
    define('APPLICATION_SERVER_NAME', 'localhost');
}

// Create root directory for current server.
if ((file_exists(RUNTIME_CACHE_ROOT_PATH) === false)
    && mkdir(RUNTIME_CACHE_ROOT_PATH, 0777, true) === false
    && is_dir(RUNTIME_CACHE_ROOT_PATH) === false
) {
    throw new RuntimeException(sprintf('Directory "%s" was not created', RUNTIME_CACHE_ROOT_PATH));
}


define('RUNTIME_CACHE_TEMP_PATH', RUNTIME_CACHE_ROOT_PATH.'caches'.DS);
define('RUNTIME_REGISTRIES_PATH', RUNTIME_CACHE_ROOT_PATH.'configs'.DS);
define('RUNTIME_LOGS_PATH', RUNTIME_CACHE_ROOT_PATH.'logs'.DS);
define('RUNTIME_CACHE_TEMPLATES_PATH', RUNTIME_CACHE_ROOT_PATH.'templates'.DS);


// Logger style for log writing.
define('LOGGER_WRITE_STYLE_SMART', 'smart');
define('LOGGER_WRITE_STYLE_SHORTCUT', 'shortcut');
define('LOGGER_WRITE_STYLE_FULL', 'full');

// Log flag.
define('LOGGER_FLAG_TYPE_COMPILE', 'compile');
define('LOGGER_FLAG_TYPE_ACCESS', 'access');
define('LOGGER_FLAG_TYPE_RUNTIME', 'runtime');


// System default path declare.
define('APPLICATION_SYSTEM_PATH', RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);
define('APPLICATION_FRAMEWORK_PATH', RUNTIME_SYSTEM_PATH.'Framework'.DIRECTORY_SEPARATOR);
define('APPLICATION_PACKAGES_PATH', RUNTIME_SYSTEM_PATH.'Packages'.DIRECTORY_SEPARATOR);
define('APPLICATION_THEMES_PATH', RUNTIME_SYSTEM_PATH.'Themes'.DIRECTORY_SEPARATOR);
define('APPLICATION_WIDGETS_PATH', RUNTIME_SYSTEM_PATH.'Widgets'.DIRECTORY_SEPARATOR);
define('APPLICATION_PAGINATION_PATH', RUNTIME_SYSTEM_PATH.'Views/Pagination'.DIRECTORY_SEPARATOR);

define('APPLICATION_STORAGE_PATH', RUNTIME_ROOT_PATH.'Storages'.DIRECTORY_SEPARATOR);
define('APPLICATION_DATABASES_PATH', APPLICATION_STORAGE_PATH.'0/databases'.DIRECTORY_SEPARATOR);
define('APPLICATION_ASSETS_MEDIA_PATH', APPLICATION_STORAGE_PATH.'0/assets'.DIRECTORY_SEPARATOR);
define('APPLICATION_PRIVATE_MEDIA_PATH', APPLICATION_STORAGE_PATH.'0/media'.DIRECTORY_SEPARATOR);
define('APPLICATION_PRIVATE_LOCALIZATIONS_PATH', APPLICATION_STORAGE_PATH.'0/localization'.DIRECTORY_SEPARATOR);
define('APPLICATION_UPLOADS_MEDIA_PATH', APPLICATION_STORAGE_PATH.'0/media/uploads'.DIRECTORY_SEPARATOR);

define('APPLICATION_SYSTEM_TEMP_PATH', RUNTIME_ROOT_PATH.'tmp'.DIRECTORY_SEPARATOR);
// Main constants define end.
define('PHP_LANG_VERSION', PHP_VERSION);
define('HASH_KEY', '57c1d48ba721a');
define('HASH_KEY_OPENSSL', 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU');

// Database info.
define('APPLICATION_SYSTEM_USER_NAME', 'superuser');
define('APPLICATION_SYSTEM_USER_PASSWORD', 'superuser');

define('PREG_QUOTE_DEFAULT_SEPARATOR', '/@#~');



/**
 * Simple autoloader, so we don't need Composer just for this.
 */
class Autoload
{
    // Set exclude directories for file load.
    public const EXCLUDES = [
        '.',
        '..',
        'Backups',
        'Themes',
    ];


    /**
     * Automatically load all required classes.
     *
     * @return void
     */
    public static function register(): void
    {
        spl_autoload_register(
            static function (string $class) {
                Logger::write('Want to load'.$class);
                // Check file is use namespace.
                if (strpos($class, '\\') === true) {
                    // Extract file namespace to file location.
                    // Retrieve class name to file name: $class.
                    Logger::write('Retrieve PSR-04 class name to file name '.$class);
                    $originalFile = self::retrieveFileUrl($class);
                    // Checking local file: $originalFile.
                    Logger::write('Checking local file '.$originalFile);
                    if (is_file($originalFile) === true) {
                        Logger::write('Load local file '.$originalFile);
                        include_once $originalFile;
                        // Include local file: $originalFile.
                    }
                } else {
                    // Want to load normal File $class.
                    Logger::write('Checking non-PSR 4 local file '.$class);
                    foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                        if (in_array($directory, self::EXCLUDES, true) === false
                            && file_exists(self::retrieveAutoFileUrl($directory, $class)) === true
                        ) {
                            // Include local file: $originalFile.
                            Logger::write('Load local file '.self::retrieveAutoFileUrl($directory, $class));
                            include_once self::retrieveAutoFileUrl($directory, $class);
                        }
                    }
                }//end if
            }
        );

    }//end register()


    /**
     * Load absolute file.
     *
     * @param array $fileList File list for include in runtime.
     *
     * @return void             Return value use no where.
     * @throws RuntimeException Throw runtime exception on error.
     */
    public static function loadFile(array $fileList): void
    {
        if (count($fileList) > 0) {
            foreach ($fileList as $filename) {
                if (file_exists($filename) === true) {
                    include_once $filename;
                } else {
                    throw new RuntimeException($filename.' not found.');
                }
            }
        }

    }//end loadFile()


    /**
     * Retrieve file path from directory name and class name.
     *
     * @param string $directory          Directory of file existent.
     * @param string $qualifiedClassName Qualified class name of file.
     *
     * @return string Return file name as string.
     */
    private static function retrieveAutoFileUrl(string $directory, string $qualifiedClassName):string
    {
        return RUNTIME_SYSTEM_PATH.ucfirst($directory).DS.ucfirst($qualifiedClassName).'.php';

    }//end retrieveAutoFileUrl()


    /**
     * Retrieve file path from file namespace.
     *
     * @param string $namespace Namespace of file existent.
     * @param string $extension File extension.
     *
     * @return string Return file name as string.
     */
    public static function retrieveFileUrl(string $namespace, string $extension='.php'): string
    {
        $file = str_replace('\\', DIRECTORY_SEPARATOR, $namespace).$extension;
        return RUNTIME_ROOT_PATH.$file;

    }//end retrieveFileUrl()


}//end class

Autoload::loadFile(
    [
        implode(DIRECTORY_SEPARATOR, [RUNTIME_ROOT_PATH.'vendor', 'autoload.php']),
        RUNTIME_SYSTEM_PATH.'Framework/Chipsets/Preloader.php',
        RUNTIME_SYSTEM_PATH.'Framework/Chipsets/System/Logger.php',
    ]
);

// Automatically load all required classes.
Autoload::register();


// Set customize error controller.
set_error_handler(
    static function ($errorNo, $errorMessage, $errorFile, $errorLine) {
        return new RuntimeErrors($errorMessage, $errorNo, $errorNo, $errorFile, $errorLine);
    },
    E_ALL
);
