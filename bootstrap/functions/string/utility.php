<?php

    /**
     * The loader of utility functions for mishusoft application
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
     * Fix slash issue for Windows os
     *
     * @param string $url Full url for fixing
     * @param string $env
     *
     * @return string
     */
    function fixSlash(string $url, string $env = 'http'): string
    {
        // define slash into individual variables
        $backslash = '\\';
        $slash     = '/';

        // return fixed string
        return PHP_OS === "WINNT" ? match ($env) {
            'dir'   => str_replace($slash, $backslash, $url),
            default => str_replace($backslash, $slash, $url)
        }
        : $url;
    }

    /**
     * Fix double slash issue for Windows os
     *
     * @param string $string
     *
     * @return string
     */
    function fixDoubleSlash(string $string): string
    {
        // return fixed string
        return str_replace('//', '/', $string);
    }

    /**
     * Add slash end of url
     *
     * @param string $string Full path of remote url
     *
     * @return string
     */
    function addSlash(string $string): string
    {
        if (endsWith($string, "/") === false && endsWith($string, "\\") === false) {
            $string .= "/";
        }

        return $string;
    }

    /**
     * Remove slash from end of string
     *
     * @param string $string
     *
     * @return string
     */
    function removeSlash(string $string): string
    {
        if (endsWith($string, "/") === false && endsWith($string, "\\") === false) {
            $string = rtrim($string, '/');
        }

        return $string;
    }

    /**
     * @param string $contents
     *
     * @return string
     */
    function removeTags(string $contents): string
    {
        return "" !== $contents ? trim(strip_tags($contents)) : "";
    }

    /**
     * @param string $contents
     *
     * @return string
     */
    function toHtml(string $contents): string
    {
        return "" !== $contents ? htmlspecialchars($contents, ENT_QUOTES) : "";
    }

    /**
     * @param string $haystack
     * @param string $search
     * @param string $replace
     *
     * @return string
     */
    function replace(string $haystack, string $search, string $replace = ''): string
    {
        return str_replace($search, $replace, $haystack);
    }

    /**
     * @param string $content
     *
     * @return string
     */
    function validString(string $content): string
    {
        //preg_replace('~^"?(.*?)"?$~', '$1', $string); // double quotes
        // either ' or " whichever is found
        return preg_replace('~^[\'"]?(.*?)[\'"]?$~', '$1', removeTags($content));
    }

    /**
     * @param string $str
     *
     * @return string
     * @see https://www.php.net/manual/en/function.preg-replace.php
     */
    function strip_whitespace(string $str): string
    {
        $buffer = preg_replace('/\s\s+/', ' ', $str);
        $buffer = preg_replace('/\s*(?:(?=[=\-\+\|%&\*\)\[\]\{\};:\,\.\<\>\!\@\#\^`~]))/', '', $buffer);
        $buffer = preg_replace('/(?:(?<=[=\-\+\|%&\*\)\[\]\{\};:\,\.\<\>\?\!\@\#\^`~]))\s*/', '', $buffer);
        return preg_replace(
            '/([^a-zA-Z0-9\s\-=+\|!@#$%^&*()`~\[\]{};:\'",<.>\/?])\s+([^a-zA-Z0-9\s\-=+\|!@#$%^&*()`~\[\]{};:\'",<.>\/?])/',
            '$1$2',
            $buffer
        );
    }


    /**
     * Removes the php comments from the given valid php string, and returns the result.
     *
     * @param string $content
     *
     * @return string
     * @see https://www.php.net/manual/en/language.basic-syntax.comments.php
     * @see https://www.php.net/manual/en/function.preg-replace.php#116631
     */
    function strip_comments(string $content): string
    {
        // $pattern = '/(?:(?:\/\*(?:[^*])|(?:\*+[^*\/]))*\*+\/)|(?:(?<!\:|\\\|\')\/\/.*)/';
        $buffer = str_replace(['/// ', ',//', '{//', '}//', '*//*', '/**/', '*///'], ['///', ', //', '{ //', '} //', '*/  /*', '/*  */', '*/ //'], $content);
        $buffer = preg_replace(["/\/\/.*\n\/\/.*\n/", "/\s\/\/\".*/"], "", $buffer);
        $buffer = preg_replace("/\/\/\n/", "\n", $buffer);
        $buffer = preg_replace("/\/\/\s.*.\n/", "\n  \n", $buffer);
        $buffer = preg_replace(['/\/\/w[^w].*/', '/\/\/s[^s].*/', '/\/\/\*\*\*.*/', '/\/\/\*\s\*\s\*.*/', '/[^\*]\/\/[*].*/'], '', $buffer);
        $buffer = preg_replace(['/([;])\/\/.*/', '/((\r)|(\n)|(\R)|([^0]1)|([^\"]\s*\-))(\/\/)(.*)/', "/([^\*])[\/]+\/\*.*[^a-zA-Z0-9\s\-=+\|!@#$%^&()`~\[\]{};:\'\",<.>?]/"], '$1', $buffer);
        $buffer = preg_replace("/\/\*/", "\n/*dddpp", $buffer);
        $buffer = preg_replace('/((\{\s*|:\s*)[\"\']\s*)(([^\{\};\"\']*)dddpp)/', '$1$4', $buffer);
        $buffer = preg_replace("/\*\//", "xxxpp*/\n", $buffer);
        $buffer = preg_replace('/((\{\s*|:\s*|\[\s*)[\"\']\s*)(([^\};\"\']*)xxxpp)/', '$1$4', $buffer);
        $buffer = preg_replace('/([\"\'])\s*\/\*/', '$1/*', $buffer);
        $buffer = preg_replace('/(\n)[^\'"]?\/\*dddpp.*?xxxpp\*\//s', '', $buffer);
        $buffer = preg_replace('/\n\/\*dddpp([^\s]*)/', '$1', $buffer);
        $buffer = preg_replace('/xxxpp\*\/\n([^\s]*)/', '*/$1', $buffer);
        $buffer = preg_replace('/xxxpp\*\/\n([\"])/', '$1', $buffer);
        $buffer = preg_replace('/(\*)\n*\s*(\/\*)\s*/', '$1$2$3', $buffer);
        $buffer = preg_replace('/(\*\/)\s*(\")/', '$1$2', $buffer);
        $buffer = preg_replace('/\/\*dddpp(\s*)/', '/*', $buffer);
        $buffer = preg_replace('/\n\s*\n/', "\n", $buffer);
        return preg_replace(["/([^\'\"]\s*)<!--.*-->(?!(<\/div>)).*/", '/([^\n\w\-=+\|!@#$%^&*()`~\[\]{};:\'",<.>\/?\\\\])(\/\/)(.*)/'], '$1', $buffer);
    }
