<?php

namespace Mishusoft\Storage;

use JsonException;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Ui\Logger;
use Mishusoft\Utility\Number;

class FileSystem
{

    /**
     * @param string $filename
     * @throws RuntimeException
     */
    public static function exec(string $filename): void
    {
        if (exec(sprintf('chmod -R 777 %s', $filename)) === false) {
            throw new RuntimeException(sprintf('Unable to change permission of "%s"', $filename));
        }
    }//end exec()


    /**
     * @param string $fromDestination
     * @param string $toDestination
     * @param null $context
     * @return boolean
     */
    public static function copy(string $fromDestination, string $toDestination, $context = null): bool
    {
        return copy($fromDestination, $toDestination, $context);
    }//end copy()


    /**
     * @param string $fromDestination
     * @param string $toDestination
     * @param null $context
     * @return boolean
     */
    public static function rename(string $fromDestination, string $toDestination, $context = null): bool
    {
        return rename($fromDestination, $toDestination, $context);
    }//end rename()


    /**
     * @param string $filename
     * @return bool
     */
    public static function isExists(string $filename): bool
    {
        return file_exists($filename);
    }//end isFileExists()


    /**
     * @param string $dirname
     * @return false
     */
    public static function isDirectory(string $dirname): bool
    {
        return is_dir($dirname);
    }//end isDirectory()


    /**
     * @param string $file
     * @param string $delimiter
     * @return false|string
     * @throws JsonException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     */
    public static function csvtojson(string $file, string $delimiter): bool|string
    {
        if (self::isExists($file) === true) {
            if (($handle = fopen($file, 'rb')) === false) {
                Logger::write('Can"t open the file.', LOGGER_WRITE_STYLE_SMART, LOGGER_FLAG_TYPE_COMPILE);
            }

            $csv_headers = fgetcsv($handle, 4000, $delimiter);
            $csv_json = [];

            while ($row = fgetcsv($handle, 4000, $delimiter)) {
                $csv_json[] = array_combine($csv_headers, $row);
            }

            fclose($handle);
            return json_encode($csv_json, JSON_THROW_ON_ERROR);
        }

        return false;
    }//end csvtojson()


    /**
     * @param string $filename
     * @param string $content
     * @return false|integer
     */
    public static function saveToFile(string $filename, string $content): bool|int
    {
        return file_put_contents($filename, $content);
    }//end saveToFile()


    /**
     * @param string $filename
     * @param callable $callback
     * @return boolean
     * @throws ErrorException
     */
    public static function readFromFile(string $filename, \Closure $callback)
    {
        if (self::isReadable($filename) === true) {
            return $callback(file_get_contents($filename));
        }

        throw new ErrorException($filename . ' not readable');
    }//end readFromFile()


    /**
     * @param string $filename
     * @return boolean
     */
    public static function isReadable(string $filename): bool
    {
        if (self::isExists($filename) === true) {
            return is_readable($filename) === true;
        }

        return false;
    }//end isReadable()


    /**
     * @param string $destination
     * @param integer $mode
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
        if (@chmod($destination, $mode) === true) {
            return @chmod($destination, $mode);
        }

        return exec('chmod ' . $destination . ' ' . $mode);
    }//end chmod()


    /**
     * @param string $path
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
                    $fullPath = $path . '/' . $file;
                    self::chmodR($fullPath, $fileMode, $dirMde);
                }
            }

            closedir($dh);
        } else {
            if (is_link($path) === true) {
                print 'link \'' . $path . '\' is skipped';
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
     * @return bool
     */
    public static function createFile(string $filename): bool
    {
        if (is_writable(dirname($filename)) === true) {
            return fopen($filename, 'wb+');
        }

        return false;
    }//end createFile()


    /**
     * @param string $filename
     * @return boolean
     */
    public static function isWriteable(string $filename): bool
    {
        if (file_exists($filename) === true) {
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
                if (is_writable($file) === true) {
                    self::delete($file);
                }
            }
        }

        if ((is_string($filename) === true) && is_writable($filename) === true) {
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
            $files = glob($target . '*', GLOB_MARK);
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
     * @param array|string $directory
     * @throws RuntimeException
     */
    public static function directoryCreate(array|string $directory): void
    {
        if (is_array($directory) === true) {
            foreach ($directory as $file) {
                if (is_writable(self::realpath(dirname($file))) === true) {
                    self::makeDirectory($file);
                } else {
                    throw new RuntimeException('Permission denied. ' . $file . ' creation failed.');
                }
            }
        }

        if (is_string($directory) === true) {
            if (is_writable(self::realpath(dirname($directory))) === true) {
                self::makeDirectory($directory);
            } else {
                throw new RuntimeException('Permission denied. ' . $directory . ' creation failed');
            }
        }
    }//end directoryCreate()


    /**
     * @param string $directory
     * @param integer $permissions
     * @param boolean $recursive
     * @throws RuntimeException
     */
    public static function makeDirectory(string $directory, int $permissions = 0777, bool $recursive = true): void
    {
        if (file_exists($directory) === false) {
            if (mkdir($directory, $permissions, $recursive) === false && is_dir($directory) === false) {
                throw new RuntimeException(sprintf('Directory "%s" was not created', $directory));
            }

            self::exec($directory);
        }
    }//end createDirectory()

    public static function permission(string $pathname): bool|int
    {
        return fileperms($pathname);
    }


    /**
     * @param string $directoryPath
     * @param string $filter
     * @return boolean|array
     * @throws RuntimeException
     */
    public static function list(string $directoryPath, string $filter = 'both'): bool|array
    {
        $files = scandir($directoryPath);

        foreach ($files as $id => $file) {
            if ($file === '.' || $file === '..') {
                unset($files[$id]);
            }

            if (($filter === 'directory') && is_file($directoryPath . '/' . $file) === true) {
                unset($files[$id]);
            }

            if (($filter === 'file') && is_dir($directoryPath . '/' . $file) === true) {
                unset($files[$id]);
            }

            if ($filter !== 'both' && $filter !== 'directory' && $filter !== 'file') {
                throw new RuntimeException('$filter=' . $filter . ' not determined. Unknown $filter found.');
            }
        }

        array_multisort($files, SORT_ASC);
        ksort($files, SORT_ASC);
        return $files;
    }//end list()


    /**
     * @param string $filename
     * @return string|boolean
     */
    public static function read(string $filename): string|bool
    {
        return file_get_contents($filename);
    }//end read()


    /**
     * @param string $filename
     * @param array $contents
     * @param integer|null $length
     * @return false|integer
     * @throws JsonException
     */
    public static function write(string $filename, array $contents, int|null $length = null): bool|int
    {
        return fwrite(
            fopen($filename, 'wb+'),
            json_encode($contents, JSON_THROW_ON_ERROR),
            $length
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
     * Returns canonicalized absolute pathname
     *
     * @link   https://php.net/manual/en/function.realpath.php
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
    public static function realpath(string $path): bool|string
    {
        if (file_exists($path) === true) {
            return realpath($path);
        }

        $currentDirectory = realpath('./');
        return str_replace('./', $currentDirectory . '/', $path);
    }//end realpath()


    /**
     * @param string $path
     * @param string $filter
     * @return string|array
     */
    public static function file(string $path, string $filter): string|array
    {
        // echo pathinfo($path, PATHINFO_FILENAME);
        // echo pathinfo($path, PATHINFO_BASENAME);
        // echo pathinfo($path, PATHINFO_ALL);
        // echo pathinfo($path, PATHINFO_DIRNAME);
        // echo pathinfo($path, PATHINFO_EXTENSION);
        return match (strtolower($filter)) {
            'name' => self::fileName($path),
            'base' => self::fileBase($path),
            'directory' => self::fileDirectory($path),
            'extension' => self::fileExt($path),
            default => self::fileInfo($path),
        };
    }//end file()


    /**
     * @param string $path
     * @return array
     */
    public static function fileInfo(string $path): array
    {
        return pathinfo($path, PATHINFO_ALL);
    }//end fileInfo()


    /**
     * @param string $path
     * @return string
     */
    public static function fileName(string $path): string
    {
        return pathinfo($path, PATHINFO_FILENAME);
    }//end fileName()


    /**
     * @param  string $filename
     * @return string
     */
    public static function fileType(string $filename): string
    {
        return filetype($filename);
    }//end getFileType()


    /**
     * @param  string $filename
     * @return string
     */
    public static function fileOriginalName(string $filename): string
    {
        return basename($filename);
    }//end getOriginalNameOfFile()

    /**
     * @param string $path
     * @return string
     */
    public static function fileBase(string $path): string
    {
        return pathinfo($path, PATHINFO_BASENAME);
    }//end fileBase()


    /**
     * @param string $path
     * @return string
     */
    public static function fileDirectory(string $path): string
    {
        return pathinfo($path, PATHINFO_DIRNAME);
    }//end fileDirectory()


    /**
     * @param string $path
     * @return string
     */
    public static function fileExt(string $path): string
    {
        return pathinfo($path, PATHINFO_EXTENSION);
    }//end fileExt()



    /**
     * @param  string $filename
     * @return string
     */
    public static function fileSize(string $filename): string
    {
        $size = filesize($filename);
        if ($size < 1024) {
            return "$size bytes";
        }

        if ($size < 1048576) {
            return (Number::format((filesize($filename) / 1024), 2, '.', '') . ' kb');
        }

        if ($size < 1073741824) {
            return ((Number::format(((filesize($filename) / 1024) / 1024), 2, '.', '') . ' mb'));
        }

        return ((Number::format((((filesize($filename) / 1024) / 1024) / 1024), 2, '.', '') . ' gb'));
    }//end getFileSize()




    /**
     * Destruct class.
     */
    public function __destruct()
    {
    }//end __destruct()
}//end class