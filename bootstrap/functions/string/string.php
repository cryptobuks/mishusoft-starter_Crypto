<?php

    /**
     * The loader of string functions for mishusoft application
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
     * Get last word from string
     *
     * @param string $string
     * @param string $needle
     *
     * @return string
     */
    function lastWord(string $string, string $needle = ' '): string
    {
        $pieces = explode($needle, $string);
        $pieces = array_filter($pieces);
        return array_pop($pieces);
    }

    /**
     * Get last word from string
     *
     * @param string $string
     * @param string $needle
     *
     * @return string
     */
    function last_word(string $string, string $needle = ' '): string
    {
        // this function skip end needle from string
        if (contains($string, $needle)) {
            if (endsWith($string, $needle)) {
                $string = rtrim($string, $needle);
            }
            $last_word_start = strrpos($string, $needle) + 1; // +1 so we don't include the space in our result
            return substr($string, $last_word_start);         // $last_word = PHP.
        }
        return $string; // $last_word = PHP.
    }


    /**
     * Get last word from string
     *
     * @param string $string
     * @param string $needle
     *
     * @return string
     */
    function firstWord(string $string, string $needle = ' '): string
    {
        $pieces = explode($needle, $string);
        return array_shift($pieces);
    }

    /**
     * Get last word from string
     *
     * @param string $string
     * @param string $needle
     *
     * @return string
     */
    function first_word(string $string, string $needle = ' '): string
    {
        return substr($string, 0, strpos($string, $needle));
    }

    /**
     * Get first word from string
     *
     * @param string $string
     * @param string $token
     *
     * @return string|false
     */
    function first_word_str(string $string, string $token = ' '): bool|string
    {
        return strtok($string, $token);
    }

    /**
     * @param string $string
     * @param string $token
     *
     * @return array
     */
    function word_arr(string $string, string $token = ' '): array
    {
        $parts = [];
        $tok   = strtok($string, $token);
        while ($tok !== false) {
            $parts[] = $tok;
            $tok     = strtok($token);
        }

        return $parts;
    }

    /**
     * Get before or after text from string
     *
     * @param string $haystack
     * @param string $needle
     * @param bool   $before_needle
     *
     * @return string|false
     */
    function ba_str(string $haystack, string $needle, bool $before_needle = false): string|false
    {
        return strstr($haystack, $needle, $before_needle);
    }

    /**
     * @param string $content
     *
     * @return mixed
     */
    function getHighest(string $content): mixed
    {
        $content = str_replace(' ', '', $content); //Trims all the spaces in the string
        $arr     = str_split(count_chars($content . trim($content), 3));
        $hStr    = "";
        $occ     = 0;

        foreach ($arr as $value) {
            $oc = substr_count($content, $value);
            if ($occ < $oc) {
                $hStr = $value;
                $occ  = $oc;
            }
        }

        return $hStr;
    }

    //print_r(getHighest("aaaaabcaab"), false);
