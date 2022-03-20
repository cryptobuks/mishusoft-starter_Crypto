<?php

    /**
     * The loader of file system functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */

    /**
     * @param string $filename
     * @param bool   $retbytes
     *
     * @return int|bool
     */
    function read_file_or_url_with_buffer(string $filename, bool $retbytes = true): int|bool
    {
        $chunksize = 1 * (1024 * 1024); // how many bytes per chunk
//    $buffer = '';
        $cnt    = 0;
        $handle = fopen($filename, 'rb');
        if ($handle === false) {
            return false;
        }
        while (!feof($handle)) {
            $buffer = fread($handle, $chunksize);
            echo $buffer;
            if ($retbytes & is_string($buffer)) {
                $cnt += strlen($buffer);
            }
        }
        $status = fclose($handle);
        if ($retbytes && $status) {
            return $cnt; // return num. bytes delivered like readfile() does.
        }
        return $status;
    }

    /**
     * Parse target string from file to string content specially for stream file
     *
     * @see https://www.php.net/manual/en/function.fread.php
     *
     * @param string $filename File name which is already exists
     *
     * @return string|false Return string when is file exists and data parse otherwise false
     */
    function read_file_sync(string $filename): string|false
    {
        $fileContent = '';
        if (file_exists($filename)) {
            $openFile = fopen($filename, "rb");
            if (is_resource($openFile)) {
                while (!feof($openFile)) {
                    $fileContent .= fread($openFile, 8192);
                }
                fclose($openFile);
            } else {
                return false;
            }
        } else {
            return false;
        }


        return $fileContent;
    }

    /**
     * @param string $path
     *
     * @return false|int
     */
    function lastModifiedAt(string $path): false|int
    {
        return filemtime($path);
    }


    /**
     * @param string $filename
     *
     * @return bool
     */
    function is_usable_this_file(string $filename): bool
    {
        return file_exists($filename) && file_get_contents($filename) !== '';
    }

    /**
     * @param string $filename
     * @param string $content
     *
     * @return bool
     */
    function write_file(string $filename, string $content): bool
    {
        $isWritten   = false;
        $createdFile = fopen($filename, "wb+");
        if (is_resource($createdFile)) {
            $isWritten = fwrite($createdFile, $content);
            fclose($createdFile);
        }

        return (bool)$isWritten;
    }


    /**
     * Replace file extension
     *
     * @param string $from     The value being searched for, otherwise known as the needle.
     * @param string $to       The replacement value that replaces found search
     * @param string $filename The string being searched and replaced on
     *
     * @return string
     */
    function extReplace(string $from, string $to, string $filename): string
    {
        if (endsWith($filename, $from)) {
            $filename = str_replace($from, $to, $filename);
        }

        return $filename;
    }
