<?php

namespace Mishusoft\Framework\Chipsets;


use Mishusoft\Framework\Chipsets\Autoload;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\System\Logger;

class FileSystem
{
    /*declare version*/
    const VERSION = "1.0.2";

    /**
     * @param string $filename
     * @param false $callback
     * @return false|string
     */
    public static function file(string $filename, $callback = false)
    {
        if (self::isFileExists($filename)) {
            $fp = fopen($filename, 'r');
            if ($fp) {
                $line = fgets($fp);
                if ($line !== false) {
                    if ($callback) {
                        return $callback($line);
                    } else {
                        return $filename;
                        // process $line
                    }
                } /*else {
                    Logger::start("Error: $filename is empty", MS_PHP_COMPILE_LOG_FILE);
                }*/
            } /*else {
                Autoload::log("Error: Couldn’t open $filename");
            }*/
        }
        return false;
    }

    /**
     * @param $filename
     * @return string
     */
    public static function exec($filename): string
    {
        return exec("chmod -R 777 $filename");

    }

    /**
     * @param $from_destination
     * @param $to_destination
     * @return bool
     */
    public static function copy($from_destination, $to_destination): bool
    {
        return copy($from_destination, $to_destination);

    }

    /**
     * @param $from_destination
     * @param $to_destination
     * @param null $context
     * @return bool
     */
    public static function rename($from_destination, $to_destination, $context = null): bool
    {
        return rename($from_destination, $to_destination, $context);

    }



    /**
     * @param string $filename
     * @return false|string
     */
    public static function isFileExists(string $filename): bool|string
    {
        if (file_exists($filename)) {
            return $filename;
        }
        return false;
    }

    /**
     * @param string $dirname
     * @return false|string
     */
    public static function isDirectory(string $dirname): bool|string
    {
        if (is_dir($dirname)) {
            return $dirname;
        } else {
            return false;
        }
    }

    /**
     * @param string $file
     * @param string $delimiter
     * @return false|string
     */
    public static function csvtojson(string $file, string $delimiter)
    {
        if (self::isFileExists($file)) {
            if (($handle = fopen($file, "r")) === false) {
                Logger::write("Can\"t open the file.", PHP_COMPILE_LOG_FILE, "full");
            }

            $csv_headers = fgetcsv($handle, 4000, $delimiter);
            $csv_json = array();

            while ($row = fgetcsv($handle, 4000, $delimiter)) {
                $csv_json[] = array_combine($csv_headers, $row);
            }

            fclose($handle);
            return json_encode($csv_json);
        }
        return false;
    }

    /**
     * @param string $filename
     * @param string $content
     * @return false|int
     */
    public static function saveToFile(string $filename, string $content): bool|int
    {
        return file_put_contents($filename, $content);
    }

    /**
     * @param string $filename
     * @param callable $callback
     * @return bool
     */
    public static function readFromFile(string $filename, callable $callback)
    {
        if (self::IsReadable($filename)) {
            return $callback(file_get_contents($filename));
        } else {
            return trigger_error($filename . " not readable");
        }
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function IsReadable(string $filename): bool
    {
        if (self::isFileExists($filename)) {
            if (is_readable($filename)) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * @param $destination
     * @param $mode
     * @return bool|string
     */
    public static function chmod($destination, $mode): bool|string
    {
        /*chmod("test.txt",0600); // Read and write for owner, nothing for everybody else
        chmod("test.txt",0644);// Read and write for owner, read for everybody else
        chmod("test.txt",0755);// Everything for owner, read and execute for everybody else
        chmod("test.txt",0740);// Everything for owner, read for owner's group*/
        if (@chmod($destination, $mode)) {
            return @chmod($destination, $mode);
        }
        return exec('chmod ' . $destination . ' ' . $mode);
    }

    /**
     * @param $path
     * @param int $fileMode
     * @param int $dirMde
     */
    public static function chmod_R($path, int $fileMode, int $dirMde)
    {
        if (is_dir($path)) {
            if (!chmod($path, $dirMde)) {
                $dirmode_str = decoct($dirMde);
                print "Failed applying filemode '$dirmode_str' on directory '$path'\n";
                print "  `-> the directory '$path' will be skipped from recursive chmod\n";
                return;
            }
            $dh = opendir($path);
            while (($file = readdir($dh)) !== false) {
                if ($file != '.' && $file != '..') {  // skip self and parent pointing directories
                    $fullpath = $path . '/' . $file;
                    self::chmod_R($fullpath, $fileMode, $dirMde);
                }
            }
            closedir($dh);
        } else {
            if (is_link($path)) {
                print "link '$path' is skipped\n";
                return;
            }
            if (!chmod($path, $fileMode)) {
                $filemode_str = decoct($fileMode);
                print "Failed applying filemode '$filemode_str' on file '$path'\n";
                return;
            }
        }
    }

    /**
     * @param string $filename
     * @return void
     */
    public static function createFile(string $filename)
    {
        if (self::IsWriteable(dirname($filename))) {
            fopen($filename, "w+");
        }
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function IsWriteable(string $filename): bool
    {
        if (self::isFileExists($filename)) {
            if (is_writable($filename)) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * @param array|string $filename
     * @return bool
     */
    public static function remove(array|string $filename): bool
    {
        if (is_array($filename)) {
            foreach ($filename as $file) {
                if (self::IsWriteable($file)) {
                    self::delete_files($file);
                }
            }
        } else {
            if (self::IsWriteable($filename)) {
                self::delete_files($filename);
            }

        }
        return true;
    }

    /*
 * php delete function that deals with directories recursively
 */
    public static function delete_files($target)
    {
        if (is_dir($target)) {
            $files = glob($target . '*', GLOB_MARK); //GLOB_MARK adds a slash to directories returned

            foreach ($files as $file) {
                self::delete_files($file);
            }

            rmdir($target);
        } elseif (is_file($target)) {
            unlink($target);
        }
    }

    /**
     * @param string $directory
     * @param int $permissions
     * @param bool $recursive
     * @param null $context
     * @return bool
     */
    public static function createDirectory(string $directory, int $permissions = 0777, bool $recursive = false, $context = null): bool
    {
        return !file_exists($directory) && mkdir($directory, $permissions, $recursive, $context);
    }


    /**
     * @param string $directory
     * @param string $filter
     * @return array|false
     */
    public static function getList(string $directory, string $filter = "both"): bool|array
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === "." || $file === "..") {
                unset($files[$id]);
            }
            if ($filter === "directory"){
                if (is_file("$directory/$file")){
                    unset($files[$id]);
                }
            }
            if ($filter === "file"){
                if (is_dir("$directory/$file")){
                    unset($files[$id]);
                }
            }

        }

        array_multisort($files, SORT_ASC);
        ksort($files, SORT_ASC);
        return $files;
    }


    /**
     * @param string $filename
     * @return string|bool
     */
    static function read(string $filename): string|bool
    {
        return file_get_contents($filename);
    }

    /**
     * @param string $filename
     * @param array $contents
     * @return false|int
     */
    public static function write(string $filename, array $contents): bool|int
    {
        return fwrite(fopen($filename, 'w+'), json_encode($contents));
    }

    static function append(string $filename,string $content){
        $fp = fopen($filename, 'a+');//opens file in append mode
        exec("chmod -R 777 $filename");
        fwrite($fp, $content);
        fclose($fp);
    }

    function __destruct()
    {

    }


    /**
     * Returns canonicalized absolute pathname
     * @link https://php.net/manual/en/function.realpath.php
     * @param string $path <p>
     * The path being checked.
     * </p>
     * @return string|false the canonicalized absolute pathname on success. The resulting path
     * will have no symbolic link, '/./' or '/../' components.
     * </p>
     * <p>
     * realpath returns false on failure, e.g. if
     * the file does not exist.
     */
    static function realpath(string $path): bool|string
    {
        if (file_exists($path)) {
            return realpath($path);
        } else {
            $currentDirectory = realpath("./");
            return str_replace("./", "$currentDirectory/", $path);
        }
    }


    // Does not support flag GLOB_BRACE

    static function glob_recursive($pattern, $flags = 0): bool|array
    {
        $files = glob($pattern, $flags);

        foreach (glob(dirname($pattern) . '/*', GLOB_ONLYDIR | GLOB_NOSORT) as $dir) {
            $files = array_merge($files, self::glob_recursive($dir . '/' . basename($pattern), $flags));
        }

        return $files;
    }

}