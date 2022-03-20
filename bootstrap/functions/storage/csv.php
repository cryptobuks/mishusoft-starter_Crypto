<?php

/**
 * The loader of csv functions for mishusoft application
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
 * start of make csv to array
 *
 * @param string $filename
 * @return array
 */
function csv(string $filename): array
{
    if (is_array(file($filename))) {
        $csv = array_map("str_getcsv", file($filename));
        array_walk($csv, static function (&$a) use ($csv) {
            $a = array_combine($csv[0], $a);
        });
        return $csv;
    }
    return [];
}