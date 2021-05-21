<?php

namespace Mishusoft\Framework\Chipsets;


use Mishusoft\Framework\Chipsets\Autoload;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\System\Logger;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\indexController;
use RuntimeException;

class FileSystem
{
    // declare version
    public const VERSION = '1.0.2';


    /**
     * @param  string $filename
     * @param  false  $callback
     * @return false|string
     */
    public static function file(string $filename, $callback=false): bool|string
    {
        if (self::isFileExists($filename)) {
            $fp = fopen($filename, 'rb');
            if ($fp) {
                $line = fgets($fp);
                if ($line !== false) {
                    if ($callback) {
                        return $callback($line);
                    }

                    return $filename;
                    // process $line
                }
            }
        }

        return false;

    }//end file()


    /**
     * @param  $filename
     * @return string
     */
    public static function exec(string $filename): string
    {
        return exec("chmod -R 777 $filename");

    }//end exec()


    /**
     * @param  string $fromDestination
     * @param  string $toDestination
     * @param  null   $context
     * @return boolean
     */
    public static function copy(string $fromDestination, string $toDestination, $context=null): bool
    {
        return copy($fromDestination, $toDestination, $context);

    }//end copy()


    /**
     * @param  string $fromDestination
     * @param  string $toDestination
     * @param  null   $context
     * @return boolean
     */
    public static function rename(string $fromDestination, string $toDestination, $context=null): bool
    {
        return rename($fromDestination, $toDestination, $context);

    }//end rename()


    /**
     * @param  string $filename
     * @return false|string
     */
    public static function isFileExists(string $filename): bool|string
    {
        if (file_exists($filename) === true) {
            return $filename;
        }

        return false;

    }//end isFileExists()


    /**
     * @param  string $dirname
     * @return false|string
     */
    public static function isDirectory(string $dirname): bool|string
    {
        if (is_dir($dirname) === true) {
            return $dirname;
        }

        return false;

    }//end isDirectory()


    /**
     * @param  string $file
     * @param  string $delimiter
     * @return false|string
     */
    public static function csvtojson(string $file, string $delimiter): bool|string
    {
        if (self::isFileExists($file) === true) {
            if (($handle = fopen($file, 'rb')) === false) {
                Logger::write('Can"t open the file.', PHP_COMPILE_LOG_FILE, 'full');
            }

            $csv_headers = fgetcsv($handle, 4000, $delimiter);
            $csv_json    = [];

            while ($row = fgetcsv($handle, 4000, $delimiter)) {
                $csv_json[] = array_combine($csv_headers, $row);
            }

            fclose($handle);
            return json_encode($csv_json, JSON_THROW_ON_ERROR);
        }

        return false;

    }//end csvtojson()


    /**
     * @param  string $filename
     * @param  string $content
     * @return false|integer
     */
    public static function saveToFile(string $filename, string $content): bool|int
    {
        return file_put_contents($filename, $content);

    }//end saveToFile()


    /**
     * @param  string   $filename
     * @param  callable $callback
     * @return boolean
     */
    public static function readFromFile(string $filename, callable $callback)
    {
        if (self::isReadable($filename) === true) {
            return $callback(file_get_contents($filename));
        }

        return trigger_error($filename.' not readable');

    }//end readFromFile()


    /**
     * @param  string $filename
     * @return boolean
     */
    public static function isReadable(string $filename): bool
    {
        if (self::isFileExists($filename) === true) {
            return is_readable($filename) === true;
        }

        return false;

    }//end isReadable()


    /**
     * @param  string  $destination
     * @param  integer $mode
     * @return boolean|string
     */
    public static function chmod(string $destination, int $mode): bool|string
    {
        /*
         * chmod("test.txt",0600); // Read and write for owner, nothing for everybody else
         * chmod("test.txt",0644);// Read and write for owner, read for everybody else
         * chmod("test.txt",0755);// Everything for owner, read and execute for everybody else
         * chmod("test.txt",0740);// Everything for owner, read for owner's group
         * */
        if (@chmod($destination, $mode)) {
            return @chmod($destination, $mode);
        }

        return exec('chmod '.$destination.' '.$mode);

    }//end chmod()


    /**
     * @param string  $path
     * @param integer $fileMode
     * @param integer $dirMde
     */
    public static function chmodR(string $path, int $fileMode, int $dirMde): void
    {
        if (is_dir($path) === true) {
            if (chmod($path, $dirMde) === false) {
                $dirmode = decoct($dirMde);
                print "Failed applying filemode '$dirmode' on directory '$path'\n";
                print "  `-> the directory '$path' will be skipped from recursive chmod\n";
                return;
            }

            $dh = opendir($path);
            while (($file = readdir($dh)) !== false) {
                if ($file !== '.' && $file !== '..') {
                    // Skip self and parent pointing directories.
                    $fullPath = $path.'/'.$file;
                    self::chmodR($fullPath, $fileMode, $dirMde);
                }
            }

            closedir($dh);
        } else {
            if (is_link($path) === true) {
                print "link '$path' is skipped\n";
                return;
            }

            if (chmod($path, $fileMode) === false) {
                $filemode = decoct($fileMode);
                print "Failed applying filemode '$filemode' on file '$path'\n";
                return;
            }
        }//end if

    }//end chmodR()


    /**
     * @param string $filename
     */
    public static function createFile(string $filename): bool
    {
        if (self::isWriteable(dirname($filename)) === true) {
            return fopen($filename, 'wb+');
        }

        return false;

    }//end createFile()


    /**
     * @param  string $filename
     * @return boolean
     */
    public static function isWriteable(string $filename): bool
    {
        if (self::isFileExists($filename) === true) {
            return is_writable($filename) === true;
        }

        return false;

    }//end isWriteable()


    /**
     * @param array|string $filename
     */
    public static function remove(array|string $filename): void
    {
        if (is_array($filename) === true) {
            foreach ($filename as $file) {
                if (self::isWriteable($file) === true) {
                    self::delete($file);
                }
            }
        }

        if (self::isWriteable($filename) === true) {
            self::delete($filename);
        }

    }//end remove()


    /**
     * Php delete function that deals with directories recursively.
     *
     * @param string $target
     */
    public static function delete(string $target): void
    {
        if (is_dir($target) === true) {
            // GLOB_MARK adds a slash to directories returned.
            $files = glob($target.'*', GLOB_MARK);
            foreach ($files as $file) {
                self::delete($file);
            }

            rmdir($target);
        }

        if (is_file($target) === true) {
            unlink($target);
        }

    }//end delete()


    /**
     * @param string  $directory
     * @param integer $permissions
     * @param boolean $recursive
     * @param null    $context
     */
    public static function createDirectory(string $directory, int $permissions=0777, bool $recursive=true): void
    {
        if (file_exists($directory) === false) {
            if (mkdir($directory, $permissions, $recursive) === false && is_dir($directory) === false) {
                throw new RuntimeException(sprintf('Directory "%s" was not created', $directory));
            }

            self::exec($directory);
        }

    }//end createDirectory()


    /**
     * @param  string $directory
     * @param  string $filter
     * @return boolean|array
     */
    public static function getList(string $directory, string $filter='both'): bool|array
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === '.' || $file === '..') {
                unset($files[$id]);
            }

            if (($filter === 'directory') && is_file($directory.'/'.$file) === true) {
                unset($files[$id]);
            }

            if (($filter === 'file') && is_dir($directory.'/'.$file) === true) {
                unset($files[$id]);
            }

            if ($filter !== 'both' || $filter !== 'directory' || $filter !== 'file') {
                throw new RuntimeException('$filter not determined. Unknown $filter found.');
            }
        }

        array_multisort($files, SORT_ASC);
        ksort($files, SORT_ASC);
        return $files;

    }//end getList()


    /**
     * @param  string $filename
     * @return string|boolean
     */
    public static function read(string $filename): string|bool
    {
        return file_get_contents($filename);

    }//end read()


    /**
     * @param  string $filename
     * @param  array  $contents
     * @return false|integer
     * @throws \JsonException
     */
    public static function write(string $filename, array $contents): bool|int
    {
        return fwrite(
            fopen($filename, 'wb+'),
            json_encode($contents, JSON_THROW_ON_ERROR)
        );

    }//end write()


    /**
     * @param string $filename
     * @param string $content
     */
    public static function append(string $filename, string $content): void
    {
        // Opens file in append mode.
        $fp = fopen($filename, 'ab+');
        self::exec($filename);
        fwrite($fp, $content);
        fclose($fp);

    }//end append()


    /**
     * Destruct class.
     */
    public function __destruct()
    {

    }//end __destruct()


    /**
     * Returns canonicalized absolute pathname
     *
     * @link   https://php.net/manual/en/function.realpath.php
     * @param  string $path <p>
     * The path being checked.
     * </p>
     * @return string|false the canonicalized absolute pathname on success. The resulting path
     * will have no symbolic link, '/./' or '/../' components.
     * </p>
     * <p>
     * realpath returns false on failure, e.g. if
     * the file does not exist.
     */
    public static function realpath(string $path): bool|string
    {
        if (file_exists($path) === true) {
            return realpath($path);
        }

        $currentDirectory = realpath('./');
        return str_replace('./', $currentDirectory.'/', $path);

    }//end realpath()


    /**
     *  Does not support flag GLOB_BRACE.
     *
     * @param  string  $directory
     * @param  integer $flags
     * @return boolean|array
     */
    public static function globRecursive(string $directory, int $flags=0): bool|array
    {
        $result = glob($directory.'/*', $flags);
        foreach ($result as $item) {
            if (is_file($item) === true) {
                $result[] = $item;
            }//end if

            if (is_dir($item) === true) {
                array_push($result, ...self::globRecursive($item, $flags));
            }//end if
        }

        return $result;

    }//end globRecursive()


}//end class
