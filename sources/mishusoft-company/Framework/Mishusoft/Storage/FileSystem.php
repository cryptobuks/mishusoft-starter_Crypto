<?php

namespace Mishusoft\Storage;

use Closure;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\Runtime;
use Mishusoft\Storage;
use Mishusoft\System\Log;
use Mishusoft\Utility\Implement;
use Mishusoft\Utility\Number;

class FileSystem
{
    /**
     * @param string $fromDestination
     * @param string $toDestination
     * @param null $context
     * @return boolean
     */
    public static function copy(string $fromDestination, string $toDestination, $context = null): bool
    {
        return copy($fromDestination, $toDestination, $context);
    }

    /**
     * @param string $fromDestination
     * @param string $toDestination
     * @param null $context
     * @return boolean
     */
    public static function rename(string $fromDestination, string $toDestination, $context = null): bool
    {
        return rename($fromDestination, $toDestination, $context);
    }

    /**
     * @param string $dirname
     * @return bool
     */
    public static function isDirectory(string $dirname): bool
    {
        return is_dir($dirname);
    }

    /**
     * @param string $file
     * @param string $delimiter
     * @return array
     */
    public static function readCsvFile(string $file, string $delimiter): array
    {
        $data = [];
        if (self::isExists($file)) {
            $handle = fopen($file, "rb");
            if (is_resource($handle)) {
                $csv_headers = fgetcsv($handle, 4000, $delimiter);
                while ($row = fgetcsv($handle, 4000, $delimiter)) {
                    $data[] = array_combine($csv_headers, $row);
                }

                fclose($handle);
                return $data;
            }

            Log::info('Can"t open the file.');
        }

        return $data;
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function isExists(string $filename): bool
    {
        return file_exists($filename);
    }

    /**
     * @param string $filename
     * @param string $content
     * @return false|integer
     */
    public static function saveToFile(string $filename, string $content): bool|int
    {
        return file_put_contents($filename, $content);
    }

    /**
     * @param string $filename
     * @param Closure $callback
     * @return bool|null
     * @throws ErrorException
     */
    public static function readFromFile(string $filename, Closure $callback): ?bool
    {
        if (self::isReadable($filename)) {
            return $callback(file_get_contents($filename));
        }

        throw new ErrorException($filename . " not readable");
    }

    /**
     * @param string $filename
     * @return boolean
     */
    public static function isReadable(string $filename): bool
    {
        if (self::isExists($filename)) {
            return is_readable($filename);
        }

        return false;
    }

    /**
     * @param string $destination
     * @param integer $mode
     * @return bool
     */
    public static function chmod(string $destination, int $mode): bool
    {
        /*
         * chmod("test.txt",0600); // Read and write for owner, nothing for everybody else
         * chmod("test.txt",0644);// Read and write for owner, read for everybody else
         * chmod("test.txt",0755);// Everything for owner, read and execute for everybody else
         * chmod("test.txt",0740);// Everything for owner, read for owner's group
         * */

        return @chmod($destination, $mode);
    }

    /**
     * @param string $path
     * @param integer $fileMode
     * @param integer $dirMde
     */
    public static function chmodR(string $path, int $fileMode, int $dirMde): void
    {
        if (is_dir($path)) {
            if (chmod($path, $dirMde) === false) {
                $dirMode = decoct($dirMde);
                print "Failed applying file mode '$dirMode' on directory '$path'\n";
                print "  `-> the directory '$path' will be skipped from recursive chmod\n";
                return;
            }

            $dh = opendir($path);
            if (is_resource($dh)) {
                while (($file = readdir($dh)) !== false) {
                    if ($file !== "." && $file !== "..") {
                        // Skip self and parent pointing directories.
                        $fullPath = $path . "/" . $file;
                        self::chmodR($fullPath, $fileMode, $dirMde);
                    }
                }

                closedir($dh);
            }
        } else {
            if (is_link($path)) {
                print 'link \'' . $path . '\' is skipped';
                return;
            }

            if (chmod($path, $fileMode) === false) {
                $file_mode = decoct($fileMode);
                print "Failed applying file mode '$file_mode' on file '$path'\n";
            }
        }
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function createFile(string $filename): bool
    {
        if (is_writable(dirname($filename))) {
            return (bool) fopen($filename, "wb+");
        }

        return false;
    }

    /**
     * @param string $filename
     * @return boolean
     */
    public static function isWriteable(string $filename): bool
    {
        if (file_exists($filename)) {
            return is_writable($filename);
        }

        return false;
    }

    /**
     * @param string[]|string $filename
     * @return bool
     */
    public static function remove(array|string $filename): bool
    {
        if (is_array($filename)) {
            foreach ($filename as $file) {
                if (is_writable($file)) {
                    self::delete($file);
                }
            }

            return true;
        }

        if (is_string($filename) && is_writable($filename)) {
            self::delete($filename);
            return true;
        }

        return false;
    }

    /**
     * Php delete function that deals with directories recursively.
     *
     * @param string $target
     */
    public static function delete(string $target): void
    {
        if (is_dir($target)) {
            // GLOB_MARK adds a slash to directories returned.
            $files = glob($target . "*", GLOB_MARK);
            if (is_array($files)) {
                foreach ($files as $file) {
                    self::delete($file);
                }
            }

            if (file_exists($target)) {
                rmdir($target);
            }
        }

        if (is_file($target)) {
            unlink($target);
        }
    }

    /**
     * @param string[]|string $directory
     * @throws RuntimeException
     */
    public static function directoryCreate(array|string $directory): void
    {
        if (is_array($directory)) {
            foreach ($directory as $filename) {
                if (is_string(self::realpath(dirname($filename)))) {
                    if (is_writable(self::realpath(dirname($filename)))) {
                        self::makeDirectory($filename);
                    } else {
                        throw new RuntimeException(sprintf('Permission denied. %1$s creation failed', $filename));
                    }
                }
            }
        }

        if (is_string($directory) && is_string(self::realpath(dirname($directory)))) {
            if (is_writable(self::realpath(dirname($directory)))) {
                self::makeDirectory($directory);
            } else {
                throw new RuntimeException(sprintf('Permission denied. %1$s creation failed', $directory));
            }
        }
    }

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
        if (file_exists($path)) {
            return realpath($path);
        }

        $currentDirectory = realpath("./");
        return str_replace("./", $currentDirectory . "/", $path);
    }

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
    }

    /**
     * @param string $filename
     * @throws RuntimeException
     */
    public static function exec(string $filename): void
    {
        //if (exec(sprintf('chmod -R 777 %s', $filename)) === false) {
        if (chmod($filename, 0777) === false) {
            throw new RuntimeException(sprintf('Unable to change permission of "%s"', $filename));
        }
    }

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
            $installContent = FileSystem\Yaml::parseFile($file);
            Log::info(sprintf('Check %s file\'s content length', $file));
            if (count($installContent) === 0) {
                Log::info(sprintf("The content of %s file is empty", $file));
                Log::info(sprintf("Creating new %s file", $file));
                $closure($file);
            }
        }
        Log::info(sprintf("End checking if %s file exists.", $file));
    }

    public static function permission(string $pathname): bool|int
    {
        return fileperms($pathname);
    }

    /**
     * @param string $directoryPath
     * @param string $filter
     * @return boolean|string[]
     * @throws RuntimeException
     */
    public static function list(string $directoryPath, string $filter = "both"): bool|array
    {
        $files = scandir($directoryPath);
        if (is_array($files)) {
            foreach ($files as $id => $file) {
                if ($file === "." || $file === "..") {
                    unset($files[$id]);
                }

                if ($filter === "directory" && is_file($directoryPath . "/" . $file)) {
                    unset($files[$id]);
                }

                if ($filter === "file" && is_dir($directoryPath . "/" . $file)) {
                    unset($files[$id]);
                }

                if ($filter !== "both" && $filter !== "directory" && $filter !== "file") {
                    throw new RuntimeException('$filter=' . $filter . ' not determined. Unknown $filter found.');
                }
            }

            array_multisort($files, SORT_ASC);
            ksort($files, SORT_ASC);
        }

        return $files;
    }

    /**
     * @param string $filename
     * @param array $contents
     * @param integer|null $length
     * @return false|integer
     */
    public static function write(string $filename, array $contents, int|null $length = null): false|int
    {
        $isWritten = false;
        $createdFile = fopen($filename, "wb+");
        if (is_resource($createdFile)) {
            $isWritten = fwrite($createdFile, Implement::toJson($contents), $length);
            fclose($createdFile);
        }

        return $isWritten;
    }

    /**
     * @param string $filename
     * @param string $content
     * @throws RuntimeException
     */
    public static function append(string $filename, string $content): void
    {
        // Opens file in append mode.
        $fp = fopen($filename, "ab+");
        if (is_resource($fp)) {
            self::exec($filename);
            fwrite($fp, $content);
            fclose($fp);
        }
    }

    /**
     * @param string $path
     * @param string $filter
     * @return string|string[]
     */
    public static function file(string $path, string $filter): string|array
    {
        // echo pathinfo($path, PATHINFO_FILENAME);
        // echo pathinfo($path, PATHINFO_BASENAME);
        // echo pathinfo($path, PATHINFO_ALL);
        // echo pathinfo($path, PATHINFO_DIRNAME);
        // echo pathinfo($path, PATHINFO_EXTENSION);
        return match (strtolower($filter)) {
            "name" => self::fileName($path),
            "base" => self::fileBase($path),
            "directory" => self::fileDirectory($path),
            "extension" => self::fileExt($path),
            default => self::fileInfo($path)
        };
    }

    /**
     * @param string $path
     * @return string
     */
    public static function fileName(string $path): string
    {
        return pathinfo($path, PATHINFO_FILENAME);
    }

    /**
     * @param string $path
     * @return string
     */
    public static function fileBase(string $path): string
    {
        return pathinfo($path, PATHINFO_BASENAME);
    }

    /**
     * @param string $path
     * @return string
     */
    public static function fileDirectory(string $path): string
    {
        return pathinfo($path, PATHINFO_DIRNAME);
    }

    /**
     * @param string $path
     * @return string
     */
    public static function fileExt(string $path): string
    {
        return pathinfo($path, PATHINFO_EXTENSION);
    }

    /**
     * @param string $path
     * @return array|string
     */
    public static function fileInfo(string $path): array|string
    {
        return pathinfo($path, PATHINFO_ALL);
    }

    /**
     * @param string $filename
     * @return string|false
     */
    public static function fileType(string $filename): string|false
    {
        return filetype($filename);
    }

    /**
     * @param string $filename
     * @return string
     */
    public static function fileOriginalName(string $filename): string
    {
        return basename($filename);
    }

    /**
     * @param string $path
     * @return false|int
     */
    public static function lastModifiedAt(string $path): false|int
    {
        return filemtime($path);
    }

    /**
     * @param string $filename
     * @return string
     */
    public static function fileSize(string $filename): string
    {
        $size = filesize($filename);

        if ($size < 1024) {
            return "$size bytes";
        }

        if ($size < 1048576) {
            return Number::format(filesize($filename) / 1024, 2, ".", "") . " kb";
        }

        if ($size < 1073741824) {
            return Number::format(filesize($filename) / 1024 / 1024, 2, ".", "") . " mb";
        }

        return Number::format(filesize($filename) / 1024 / 1024 / 1024, 2, ".", "") . " gb";
    }

    /**
     * @throws RuntimeException\NotFoundException
     */
    public static function readAssets(string $path): bool|string
    {
        return self::read(Storage::assetsFullPath($path));
    }

    /**
     * @param string $filename
     * @return string|boolean
     */
    public static function read(string $filename): string|bool
    {
        return file_get_contents($filename);
    }

    /**
     * @throws RuntimeException\NotFoundException
     */
    public static function readFrameworkAssets(string $path): bool|string
    {
        return self::read(Storage::fViewsFullPath($path));
    }

    /**
     * @param string $path
     * @param string $controller
     * @return bool|string
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function readAssetsWebFonts(string $path, string $controller): bool|string
    {
        $content = self::read(Storage::assetsFullPath($path));
        $route = $controller === "framework" ? "framework" : "assets";
        if (is_string($content)) {
            $fromPath = "../../webfonts";
            $willBePath = '%1$s/%2$s/webfonts';
            $content = str_replace($fromPath, sprintf($willBePath, Runtime::hostUrl(), $route), $content);
        }
        return $content;
    }

    /**
     * Destruct class.
     */
    public function __destruct()
    {
    }
}
