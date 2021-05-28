<?php declare(strict_types=1);

namespace Mishusoft\Framework\Chipsets\Utility;


use Mishusoft\Framework\Chipsets\System\Logger;

class Stream
{
    // declare version
    public const VERSION = '1.0.2';


    /**
     * @param string   $filename
     * @param $callback
     */
    public static function file(string $filename, $callback=false)
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
    public static function exec($filename): string
    {
        return exec("chmod -R 777 $filename");

    }//end exec()


    /**
     * @param  $from_destination
     * @param  $to_destination
     * @return boolean
     */
    public static function copy($from_destination, $to_destination): bool
    {
        return copy($from_destination, $to_destination);

    }//end copy()


    /**
     * @param  $from_destination
     * @param  $to_destination
     * @param  null             $context
     * @return boolean
     */
    public static function rename($from_destination, $to_destination, $context=null): bool
    {
        return rename($from_destination, $to_destination, $context);

    }//end rename()


    /**
     * @param  string $filename
     * @return false|string
     */
    public static function isFileExists(string $filename): bool|string
    {
        if (file_exists($filename)) {
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
        if (is_dir($dirname)) {
            return $dirname;
        } else {
            return false;
        }

    }//end isDirectory()


    /**
     * @param  string $file
     * @param  string $delimiter
     * @return false|string
     */
    public static function csvtojson(string $file, string $delimiter)
    {
        if (self::isFileExists($file)) {
            if (($handle = fopen($file, 'r')) === false) {
                Logger::write('Can"t open the file.', PHP_COMPILE_LOG_FILE, 'full');
            }

            $csv_headers = fgetcsv($handle, 4000, $delimiter);
            $csv_json    = [];

            while ($row = fgetcsv($handle, 4000, $delimiter)) {
                $csv_json[] = array_combine($csv_headers, $row);
            }

            fclose($handle);
            return json_encode($csv_json);
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
     * @param string   $filename
     * @param callable $callback
     */
    public static function readFromFile(string $filename, callable $callback)
    {
        if (self::IsReadable($filename)) {
            return $callback(file_get_contents($filename));
        }

        return trigger_error($filename.' not readable');

    }//end readFromFile()


    /**
     * @param  string $filename
     * @return boolean
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

    }//end IsReadable()


    /**
     * @param  $destination
     * @param  $mode
     * @return boolean|string
     */
    public static function chmod($destination, $mode): bool|string
    {
        /*
            chmod("test.txt",0600); // Read and write for owner, nothing for everybody else
            chmod("test.txt",0644);// Read and write for owner, read for everybody else
            chmod("test.txt",0755);// Everything for owner, read and execute for everybody else
        chmod("test.txt",0740);// Everything for owner, read for owner's group*/
        if (@chmod($destination, $mode)) {
            return @chmod($destination, $mode);
        }

        return exec('chmod '.$destination.' '.$mode);

    }//end chmod()


    /**
     * @param $path
     * @param integer $filemode
     * @param integer $dirmode
     */
    public static function chmod_R($path, int $fileMode, int $dirMode)
    {
        if (is_dir($path)) {
            if (!chmod($path, $dirMode)) {
                $dirmode_str = decoct($dirMode);
                print "Failed applying filemode '$dirmode_str' on directory '$path'\n";
                print "  `-> the directory '$path' will be skipped from recursive chmod\n";
                return;
            }

            $dh = opendir($path);
            while (($file = readdir($dh)) !== false) {
                if ($file != '.' && $file != '..') {
                    // skip self and parent pointing directories
                    $fullpath = $path.'/'.$file;
                    self::chmod_R($fullpath, $fileMode, $dirMode);
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
        }//end if

    }//end chmod_R()


    /**
     * @param  string $filename
     * @return void
     */
    public static function createFile(string $filename)
    {
        if (self::IsWriteable(dirname($filename))) {
            fopen($filename, 'w+');
        }

    }//end createFile()


    /**
     * @param  string $filename
     * @return boolean
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

    }//end IsWriteable()


    /**
     * @param  array|string $filename
     * @return boolean
     */
    public static function remove(array|string $filename): bool
    {
        if (is_array($filename)) {
            foreach ($filename as $file) {
                if (self::IsWriteable($file)) {
                    self::delete_files($file);
                }
            }

            return true;
        } else {
            if (self::IsWriteable($filename)) {
                self::delete_files($filename);
            }

            return true;
        }

    }//end remove()


    /*
     * php delete function that deals with directories recursively
     */
    public static function delete_files($target)
    {
        if (is_dir($target)) {
            $files = glob($target.'*', GLOB_MARK);
            // GLOB_MARK adds a slash to directories returned
            foreach ($files as $file) {
                self::delete_files($file);
            }

            rmdir($target);
        } else if (is_file($target)) {
            unlink($target);
        }

    }//end delete_files()


    /**
     * @param  string  $directory
     * @param  integer $permissions
     * @param  boolean $recursive
     * @param  null    $context
     * @return boolean
     */
    public static function createDirectory(string $directory, int $permissions=0777, bool $recursive=false, $context=null): bool
    {
        return !file_exists($directory) && mkdir($directory, $permissions, $recursive, $context);

    }//end createDirectory()


    /**
     * @param  string $directory
     * @param  string $filter
     * @return array|false
     */
    public static function getList(string $directory, string $filter='both'): bool|array
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === '.' || $file === '..') {
                unset($files[$id]);
            }

            if ($filter === 'directory') {
                if (is_file("$directory/$file")) {
                    unset($files[$id]);
                }
            }

            if ($filter === 'file') {
                if (is_dir("$directory/$file")) {
                    unset($files[$id]);
                }
            }
        }

        array_multisort($files, SORT_ASC);
        ksort($files, SORT_ASC);
        return $files;

    }//end getList()


    /**
     * @param  string $filename
     * @return boolean|string
     */
    static function read(string $filename): bool|string
    {
        return file_get_contents($filename);

    }//end read()


    /**
     * @param  string $filename
     * @param  array  $contents
     * @return false|integer
     */
    static function write(string $filename, array $contents): bool|int
    {
        return fwrite(fopen($filename, 'w+'), json_encode($contents));

    }//end write()


    static function append(string $filename, string $content)
    {
        $fp = fopen($filename, 'a+');
        // opens file in append mode
        exec("chmod -R 777 $filename");
        fwrite($fp, $content);
        fclose($fp);

    }//end append()


    function __destruct()
    {

    }//end __destruct()


}//end class
