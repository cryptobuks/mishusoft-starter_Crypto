<?php

namespace Mishusoft\Storage\FileSystem;

interface TypeBasedFileManagementInterface
{
    /**
     * Emit array content to target string
     *
     * @param array $content Valid array to implement target string
     * @return string Return target string
     */
    public static function emit(array $content): string;

    /**
     * Emit file with array data
     *
     * @param string $filename File name which is exists or not
     * @param array $content Valid array to implement ini string
     * @return bool Return boolean answer true when is written otherwise false
     */
    public static function emitFile(string $filename, array $content): bool;

    /**
     * Parse target string to array content
     *
     * @param string $content Valid target string to implement array
     * @return array|false Return array when data parse otherwise false
     */
    public static function parse(string $content): array|false;

    /**
     * Parse target string  from file to array content
     *
     * @param string $filename File name which is already exists
     * @return array|false Return array when is file exists and data parse otherwise false
     */
    public static function parseFile(string $filename): array|false;
}
