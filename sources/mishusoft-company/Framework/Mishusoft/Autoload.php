<?php

namespace Mishusoft;

use Mishusoft\System\Log;
use RuntimeException;

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
                Log::info('Want to load'.$class);
                // Check file is use namespace.
                if (strpos($class, '\\') === true) {
                    // Extract file namespace to file location.
                    // Retrieve class name to file name: $class.
                    Log::info('Retrieve PSR-04 class name to file name '.$class);
                    $originalFile = self::retrieveFileUrl($class);
                    // Checking local file: $originalFile.
                    Log::info('Checking local file '.$originalFile);
                    if (is_file($originalFile) === true) {
                        Log::info('Load local file '.$originalFile);
                        include_once $originalFile;
                        // Include local file: $originalFile.
                    }
                } else {
                    // Want to load normal File $class.
                    Log::info('Checking non-PSR 4 local file '.$class);
                    foreach (scandir(realpath(dirname(__FILE__, 2))) as $directory) {
                        if (in_array($directory, self::EXCLUDES, true) === false
                            && file_exists(self::retrieveAutoFileUrl($directory, $class)) === true
                        ) {
                            // Include local file: $originalFile.
                            Log::info('Load local file '.self::retrieveAutoFileUrl($directory, $class));
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
                } /*else {
                    throw new RuntimeException($filename.' not found');
                }*/
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
    public static function retrieveFileUrl(string $namespace, string $extension = '.php'): string
    {
        return Storage::rootPath().str_replace('\\', DIRECTORY_SEPARATOR, $namespace).$extension;
    }//end retrieveFileUrl()
}//end class
