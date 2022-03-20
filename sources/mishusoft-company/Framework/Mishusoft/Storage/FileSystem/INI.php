<?php

namespace Mishusoft\Storage\FileSystem;

use Mishusoft\Storage\FileSystem;

class INI extends FileSystem implements TypeBasedFileManagementInterface
{
    /**
     * @see https://www.php.net/manual/en/function.parse-ini-string.php
     * @see https://gist.github.com/msegu/c43a871c5a874a1d9bff978b448a0aa4
     * @param string $str
     * @return array|false
     */
    public static function parse(string $str): array|false
    {
        if (empty($str)) {
            return false;
        }

        $lines = explode("\n", $str);
        $ret = [];
        $inside_section = false;

        foreach ($lines as $line) {
            $line = trim($line);

            // Skip empty line and comment
            if (!$line || $line[0] === "#" || $line[0] === ";") {
                continue;
            }

            if ($line[0] === "[" && $endIdx = strpos($line, "]")) {
                $inside_section = substr($line, 1, $endIdx-1);
                continue;
            }

            if (!strpos($line, '=')) {
                continue;
            }

            $tmp = explode("=", $line, 2);

            if ($inside_section) {
                $key = rtrim($tmp[0]);
                $value = ltrim($tmp[1]);

                if (preg_match("/^\".*\"$/", $value) || preg_match("/^'.*'$/", $value)) {
                    $value = mb_substr($value, 1, -1);
                }

                $t = preg_match("^\[(.*?)\]^", $key, $matches);
                if (!empty($matches) && isset($matches[0])) {
                    $arr_name = preg_replace('#\[(.*?)\]#is', '', $key);

                    if (!isset($ret[$inside_section][$arr_name]) || !is_array($ret[$inside_section][$arr_name])) {
                        $ret[$inside_section][$arr_name] = [];
                    }

                    if (isset($matches[1]) && !empty($matches[1])) {
                        $ret[$inside_section][$arr_name][$matches[1]] = $value;
                    } else {
                        $ret[$inside_section][$arr_name][] = $value;
                    }
                } else {
                    $ret[$inside_section][trim($tmp[0])] = $value;
                }
            } else {
                $ret[trim($tmp[0])] = ltrim($tmp[1]);
            }
        }
        return $ret;
    }

    /**
     * Emit array content to ini string
     *
     * @see https://stackoverflow.com/questions/17316873/convert-array-to-an-ini-file
     * @param array $content Valid array to implement ini string
     * @return string Return ini string
     */
    public static function emit(array $content): string
    {
        $out = '';
        $sectionless = '';
        foreach ($content as $rootkey => $rootvalue) {
            if (is_array($rootvalue)) {
                // find out if the root-level item is an indexed or associative array
                $indexed_root = array_keys($rootvalue) === range(0, count($rootvalue) - 1);
                // associative arrays at the root level have a section heading
                if (!$indexed_root) {
                    $out .= PHP_EOL."[$rootkey]".PHP_EOL;
                }
                // loop through items under a section heading
                foreach ($rootvalue as $key => $value) {
                    if (is_array($value)) {
                        // indexed arrays under a section heading will have their key omitted
                        $indexed_item = array_keys($value) === range(0, count($value) - 1);
                        foreach ($value as $subkey=>$subvalue) {
                            // omit subkey for indexed arrays
                            if ($indexed_item) {
                                $subkey = "";
                            }
                            // add this line under the section heading
                            $out .= "{$key}[$subkey] = $subvalue" . PHP_EOL;
                        }
                    } else {
                        if ($indexed_root) {
                            // root level indexed array becomes sectionless
                            $sectionless .= "{$rootkey}[] = $value" . PHP_EOL;
                        } else {
                            // plain values within root level sections
                            $out .= "$key = $value" . PHP_EOL;
                        }
                    }
                }
            } else {
                // root level sectionless values
                $sectionless .= "$rootkey = $rootvalue" . PHP_EOL;
            }
        }
        return $sectionless.$out;
    }

    /**
     * Emit file with array data
     *
     * @param string $filename File name which is exists or not
     * @param array $content Valid array to implement ini string
     * @return bool Return boolean answer true when is written otherwise false
     */
    public static function emitFile(string $filename, array $content): bool
    {
        return Any::emitFile($filename, self::emit($content));
    }

    /**
     * Parse target string  from file to array content
     *
     * @param string $filename File name which is already exists
     * @return array|false Return array when is file exists and data parse otherwise false
     */
    public static function parseFile(string $filename): array|false
    {
        $content = Any::readFile($filename);
        if (is_string($content)) {
            return self::parse($content);
        }
        return false;
    }
}
