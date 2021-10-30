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
     * @param null $context
     */
    public static function copy(string $fromDestination, string $toDestination, $context = null): bool
    {
        return copy($fromDestination, $toDestination, $context);
    }

    /**
     * @param null $context
     */
    public static function rename(string $fromDestination, string $toDestination, $context = null): bool
    {
        return rename($fromDestination, $toDestination, $context);
    }

    public static function isDirectory(string $dirname): bool
    {
        return is_dir($dirname);
    }

    public static function readCsvFile(string $file, string $delimiter): array
    {
        $data = [];
        if (self::isExists($file)) {
            if (($handle = fopen($file, "rb")) === false) {
                Log::info('Can"t open the file.');
            }

            $csv_headers = fgetcsv($handle, 4000, $delimiter);

            while ($row = fgetcsv($handle, 4000, $delimiter)) {
                $data[] = array_combine($csv_headers, $row);
            }

            fclose($handle);
            return $data;
        }

        return $data;
    }

    public static function isExists(string $filename): bool
    {
        return file_exists($filename);
    }

    /**
     * @return false|integer
     */
    public static function saveToFile(string $filename, string $content)
    {
        return file_put_contents($filename, $content);
    }

    /**
     * @throws ErrorException
     */
    public static function readFromFile(string $filename, Closure $callback): ?bool
    {
        if (self::isReadable($filename)) {
            return $callback(file_get_contents($filename));
        }

        throw new ErrorException($filename . " not readable");
    }

    public static function isReadable(string $filename): bool
    {
        if (self::isExists($filename)) {
            return is_readable($filename);
        }

        return false;
    }

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

    public static function chmodR(string $path, int $fileMode, int $dirMde): void
    {
        if (is_dir($path)) {
            if (!chmod($path, $dirMde)) {
                $dirMode = decoct($dirMde);
                print "Failed applying file mode '$dirMode' on directory '$path'\n";
                print "  `-> the directory '$path' will be skipped from recursive chmod\n";
                return;
            }

            $dh = opendir($path);
            while (($file = readdir($dh)) !== false) {
                if ($file !== "." && $file !== "..") {
                    // Skip self and parent pointing directories.
                    $fullPath = $path . "/" . $file;
                    self::chmodR($fullPath, $fileMode, $dirMde);
                }
            }

            closedir($dh);
        } else {
            if (is_link($path)) {
                print 'link \'' . $path . '\' is skipped';
                return;
            }

            if (!chmod($path, $fileMode)) {
                $file_mode = decoct($fileMode);
                print "Failed applying file mode '$file_mode' on file '$path'\n";
            }
        } //end if
    }

    public static function createFile(string $filename): bool
    {
        if (is_writable(dirname($filename))) {
            return fopen($filename, "wb+");
        }

        return false;
    }

    public static function isWriteable(string $filename): bool
    {
        if (file_exists($filename)) {
            return is_writable($filename);
        }

        return false;
    }

    /**
     * @param array|string $filename
     */
    public static function remove($filename): bool
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
     */
    public static function delete(string $target): void
    {
        if (is_dir($target)) {
            // GLOB_MARK adds a slash to directories returned.
            $files = glob($target . "*", GLOB_MARK);
            foreach ($files as $file) {
                self::delete($file);
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
     * @param array|string $directory
     *
     *
     * @throws RuntimeException
     */
    public static function directoryCreate($directory): void
    {
        if (is_array($directory)) {
            foreach ($directory as $file) {
                if (is_writable(self::realpath(dirname($file)))) {
                    self::makeDirectory($file);
                } else {
                    throw new RuntimeException("Permission denied. " . $file . " creation failed");
                }
            }
        }

        if (is_string($directory)) {
            if (is_writable(self::realpath(dirname($directory)))) {
                self::makeDirectory($directory);
            } else {
                throw new RuntimeException("Permission denied. " . $directory . " creation failed");
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
    public static function realpath(string $path)
    {
        if (file_exists($path)) {
            return realpath($path);
        }

        $currentDirectory = realpath("./");
        return str_replace("./", $currentDirectory . "/", $path);
    }

    /**
     * @throws RuntimeException
     */
    public static function makeDirectory(string $directory, int $permissions = 0777, bool $recursive = true): void
    {
        if (!file_exists($directory)) {
            if (!mkdir($directory, $permissions, $recursive) && !is_dir($directory)) {
                throw new RuntimeException(sprintf('Directory "%s" was not created', $directory));
            }

            self::exec($directory);
        }
    }

    /**
     * @throws RuntimeException
     */
    public static function exec(string $filename): void
    {
        //if (exec(sprintf('chmod -R 777 %s', $filename)) === false) {
        if (!chmod($filename, 0777)) {
            throw new RuntimeException(sprintf('Unable to change permission of "%s"', $filename));
        }
    }

    /**
     * @throws RuntimeException
     */
    public static function check(string $file, \Closure $closure): void
    {
        Log::info(sprintf("Check %s file existent.", $file));
        if (!file_exists($file)) {
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

    /**
     * @return bool|int
     */
    public static function permission(string $pathname)
    {
        return fileperms($pathname);
    }

    /**
     * @return boolean|array
     * @throws RuntimeException
     */
    public static function list(string $directoryPath, string $filter = "both")
    {
        $files = scandir($directoryPath);

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
        return $files;
    }

    /**
     * @param integer|null $length
     * @return false|integer
     */
    public static function write(string $filename, array $contents, $length = null)
    {
        $createdFile = fopen($filename, "wb+");
        $isWritten = fwrite($createdFile, Implement::toJson($contents), $length);
        fclose($createdFile);

        return $isWritten;
    }

    /**
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
     * @return string|array
     */
    public static function file(string $path, string $filter)
    {
        switch (strtolower($filter)) {
            case "name":
                return self::fileName($path);
            case "base":
                return self::fileBase($path);
            case "directory":
                return self::fileDirectory($path);
            case "extension":
                return self::fileExt($path);
            default:
                return self::fileInfo($path);
        }
    }

    public static function fileName(string $path): string
    {
        return pathinfo($path, PATHINFO_FILENAME);
    }

    public static function fileBase(string $path): string
    {
        return pathinfo($path, PATHINFO_BASENAME);
    }

    public static function fileDirectory(string $path): string
    {
        return pathinfo($path, PATHINFO_DIRNAME);
    }

    public static function fileExt(string $path): string
    {
        return pathinfo($path, PATHINFO_EXTENSION);
    }

    public static function fileInfo(string $path): array
    {
        return pathinfo($path, PATHINFO_ALL);
    }

    /**
     * @return string|false
     */
    public static function fileType(string $filename)
    {
        return filetype($filename);
    }

    public static function fileOriginalName(string $filename): string
    {
        return basename($filename);
    }

    public static function lastModifiedAt(string $path): int
    {
        return filemtime($path);
    }

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
     * @return bool|string
     *
     * @throws RuntimeException\NotFoundException
     */
    public static function readAssets(string $path)
    {
        return self::read(Storage::assetsFullPath($path));
    }

    /**
     * @return string|boolean
     */
    public static function read(string $filename)
    {
        return file_get_contents($filename);
    }

    /**
     * @return bool|string
     * @throws RuntimeException\NotFoundException
     */
    public static function readFrameworkAssets(string $path)
    {
        return self::read(Storage::fViewsFullPath($path));
    }

    /**
     *
     * @return bool|string
     *
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function readAssetsWebFonts(string $path, string $controller)
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
}
