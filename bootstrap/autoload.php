<?php

use Mishusoft\Exceptions\Handler as ExceptionsHandler;
use Mishusoft\Storage;

/**
 * Load absolute file.
 *
 * @param array $fileList File list for include in runtime.
 *
 * @return void             Return value use no where.
 */
(static function ($fileList) {
    if (count($fileList) > 0) {
        foreach ($fileList as $filename) {
            if (file_exists($filename) === true) {
                include_once $filename;
            } /*else {
                    throw new RuntimeException($filename.' not found');
                }*/
        }
    }
})([
    // implode(DIRECTORY_SEPARATOR, [RUNTIME_ROOT_PATH.'vendor', 'autoload.php']),
    //Storage::frameworkPath().'Autoload.php',
    //Storage::frameworkPath().'Preloader.php',
    Storage::frameworkPath().'System/log.php',
]);



// Set customize error controller.
set_error_handler(
    static function ($errorNo, $errorMessage) {
        return new ExceptionsHandler($errorMessage, $errorNo);
    },
    E_ALL
);

/**
 * Automatically load all required classes.
 *
 * @return void
 */
function register(): void
{
    spl_autoload_register(
        static function (string $class) {
            // Check file is use namespace.
            if (strpos($class, '\\') === true) {
                // Extract file namespace to file location.
                // Retrieve class name to file name: $class.
                $originalFile = retrieveFileUrl($class);
                // Checking local file: $originalFile.
                if (is_file($originalFile) === true) {
                    include_once $originalFile;
                    // Include local file: $originalFile.
                }
            } else {
                // Want to load normal File $class.
                foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                    if (file_exists(retrieveAutoFileUrl($directory, $class)) === true) {
                        // Include local file: $originalFile.
                        include_once retrieveAutoFileUrl($directory, $class);
                    }
                }
            }//end if
        }
    );
}//end register()


/**
 * Retrieve file path from directory name and class name.
 *
 * @param string $directory          Directory of file existent.
 * @param string $qualifiedClassName Qualified class name of file.
 *
 * @return string Return file name as string.
 */
function retrieveAutoFileUrl(string $directory, string $qualifiedClassName):string
{
    return Storage::frameworkPath().ucfirst($directory).DS.ucfirst($qualifiedClassName).'.php';
}//end retrieveAutoFileUrl()


/**
 * Retrieve file path from file namespace.
 *
 * @param string $namespace Namespace of file existent.
 * @param string $extension File extension.
 *
 * @return string Return file name as string.
 */
function retrieveFileUrl(string $namespace, string $extension = '.php'): string
{
    return Storage::rootPath().str_replace('\\', DIRECTORY_SEPARATOR, $namespace).$extension;
}//end retrieveFileUrl()
