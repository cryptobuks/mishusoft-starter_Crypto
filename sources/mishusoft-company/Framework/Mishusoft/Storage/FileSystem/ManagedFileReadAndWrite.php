<?php

namespace Mishusoft\Storage\FileSystem;

use Closure;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\System\Log;

trait ManagedFileReadAndWrite
{

    protected static string $fileType = 'yml';


    /**
     * @throws RuntimeException
     */
    public static function check(string $file, Closure $closure): void
    {
        Log::info(sprintf("Check %s file existent.", $file));
        if (file_exists($file) === false) {
            Log::info(sprintf("Check failed. %s file not exists", $file));
            Log::info(sprintf("Creating new %s file", $file));
            $closure($file);
        } else {
            $installContent = self::readFile($file);
            Log::info(sprintf('Check %s file\'s content length', $file));
            if ($installContent === []) {
                Log::info(sprintf("The content of %s file is empty", $file));
                Log::info(sprintf("Creating new %s file", $file));
                $closure($file);
            }
        }
        Log::info(sprintf("End checking if %s file exists.", $file));
    }

    /**
     * Read file for firewall with type wise
     *
     * @param string $filename Filename with absolute path
     * @return array
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected static function readFile(string $filename): array {
        if (self::$fileType === 'json'){
            return Any::parseFile($filename); // for json
        }

        // temp
        $content = file_get_contents($filename);
        $startAt = strpos($content, '...');
        $endAt   = strrpos($content, '...');
        if ($startAt === $endAt){
            $content = parse_yaml_data($content);
        }
        return is_array($content) ? $content : []; // for yaml
    }


    /**
     * Read file for firewall with type wise
     *
     * @param string $filename Filename with absolute path
     * @param array $content Content in array data type
     *
     * @return bool
     * @throws \Mishusoft\Exceptions\RuntimeException
     * @throws \Exception
     */
    protected function writeFile(string $filename, array $content): bool
    {
        if (self::$fileType === 'json'){
            return (boolean) Any::write($filename, $content); // for json
        }

        return emit_yaml_file($filename, $content); // for yaml
    }


}