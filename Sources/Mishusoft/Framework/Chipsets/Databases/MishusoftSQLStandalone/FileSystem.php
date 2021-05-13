<?php


namespace Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;


use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Decryption;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class FileSystem
{


    /**
     * @param string $directory
     * @return array|false
     */
    public static function getDirectoryList(string $directory)
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === "." || $file === "..") {
                unset($files[$id]);
            }
        }

        array_multisort($files, SORT_ASC);
        ksort($files, SORT_ASC);
        return $files;
    }

    /**
     * Tells whether the filename is a regular file
     * @link https://php.net/manual/en/function.is-file.php
     * @param string $filename <p>
     * Path to the file.
     * </p>
     * @return bool true if the filename exists and is a regular file, false
     * otherwise.
     */
    public static function is_file(string $filename): bool
    {
        return is_file($filename);
    }


    /**
     * @param string $filename
     * @return bool
     */
    public static function file_exists(string $filename): bool
    {
        if (file_exists($filename)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function createFile(string $filename): bool
    {
        return fopen($filename, "w+");
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function writable(string $filename): bool
    {
        if (is_writable($filename)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param string $directory
     * @param int $permissions
     * @param bool $recursive
     * @param null $context
     * @return bool
     */
    public static function createDirectory(string $directory, int $permissions = 0777, bool $recursive = true, $context = null): bool
    {
        return mkdir($directory, $permissions, $recursive, $context);
    }

    /**
     * @param string $filename
     * @param string $content
     * @return false|int
     */
    public static function saveToFile(string $filename, string $content)
    {
        if (self::writable($filename)) {
            return file_put_contents($filename, $content);
        } else {
            return false;
        }
    }

    /**
     * @param string $filename
     * @param callable $callback
     * @return mixed
     */
    public static function readFile(string $filename, callable $callback)
    {
        return $callback((array) json_decode(file_get_contents($filename), true));
    }

    /**
     * @param string $filename
     * @return bool
     */
    public static function readable(string $filename): bool
    {
        if (is_writable($filename)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @param string|array $filename
     * @return bool
     */
    public static function remove($filename): bool
    {
        if (is_array($filename)) {
            foreach ($filename as $file) {
                if (self::writable($file)) {
                    Stream::delete_files($file);
                }
            }
            return true;
        } else {
            if (self::writable($filename)) {
                Stream::delete_files($filename);
            }

            return true;
        }
    }

    /**
     * Deletes a file
     * @link https://php.net/manual/en/function.unlink.php
     * @param string $filename <p>
     * Path to the file.
     * </p>
     * @param null $context [optional] &note.context-support;
     * @return bool true on success or false on failure.
     */
    public static function unlink(string $filename, $context = null): bool
    {
        return unlink($filename,$context);
        
    }



    /**
     * @param array $data
     * @return array
     */
    private function EncryptData(array $data): array
    {
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                if (is_array($data[$key])) {
                    return $this->EncryptData($data[$key]);
                } else {
                    unset($data[$key]);
                    $data[Encryption::static($key)] = Encryption::static($value);
                }
            }
        }
        return $data;
    }


    /**
     * @param array $data
     * @return array
     */
    private function DecryptData(array $data): array
    {
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                if (is_array($data[$key])) {
                    return $this->DecryptData($data[$key]);
                } else {
                    unset($data[$key]);
                    $data[Decryption::static($key)] = Decryption::static($value);
                }
            }
        }
        return $data;
    }


}