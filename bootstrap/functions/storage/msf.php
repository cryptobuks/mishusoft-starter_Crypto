<?php

    /**
     * The loader of msf file read and write functions for mishusoft application
     *
     * Php version 8.0
     *
     * @category Loader
     * @package  Mishusoft_Framework
     * @author   Al-Amin Ahamed <alamin@mishusoft.com>
     * @license  GPL-3.0-only https://opensource.org/licenses/gpl-3.0.html
     * @link     https://mishusoft.com
     */


    // https://stackoverflow.com/questions/2662268/how-do-i-store-an-array-in-a-file-to-access-as-an-array-later-with-php
    // https://www.php.net/manual/en/function.unserialize.php
    // https://www.php.net/manual/en/function.serialize.php
    // https://3v4l.org/abfKH

    /**
     * @param array $content
     *
     * @return string
     */
    function emit_msf_data(array $content): string
    {
        return serialize($content);
    }

    function emit_msf_file(string $filename, array $content): bool
    {
        $isWritten   = false;
        $createdFile = fopen($filename, "wb+");
        if (is_resource($createdFile)) {
            $isWritten = file_put_contents($filename, emit_msf_data($content));
            fclose($createdFile);
        }

        return (bool)$isWritten;
    }

    function parse_msf_data(string $content): mixed
    {
        if ($content === '') {
            return [];
        }

        return unserialize($content, ['allowed_classes' => false]);
    }

    /**
     * @param string $filename
     *
     * @return array
     */
    function parse_msf_file(string $filename): array
    {
        $fileContent = file_get_contents($filename);
        if ($fileContent !== '' & is_string($fileContent)) {
            return parse_msf_data($fileContent);
        }

        return [];
    }
