<?php

/**
 * The loader of implement functions for mishusoft application
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
 * convert a string from one UTF-16 char to one UTF-8 char
 *
 * Normally should be handled by mb_convert_encoding, but
 * provides a slower PHP-only method for installations
 * that lack the multibyte string extension.
 * @link https://github.com/pear/Services_JSON
 *
 * @param string $utf16 UTF-16 character
 * @return   string  UTF-8 character
 * @access   private
 */
function utf16_to_utf8(string $utf16): string
{
    // oh please
    if (function_exists('mb_convert_encoding')) {
        return mb_convert_encoding($utf16, 'UTF-8', 'UTF-16');
    }

    $bytes = (ord($utf16[0]) << 8) | ord($utf16[1]);

    switch (true) {
        case ((0x7F & $bytes) === $bytes):
            // this case should never be reached, because we are in ASCII range
            // see: http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
            return chr(0x7F & $bytes);

        case (0x07FF & $bytes) === $bytes:
            // return a 2-byte UTF-8 character
            // see: http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
            return chr(0xC0 | (($bytes >> 6) & 0x1F))
                . chr(0x80 | ($bytes & 0x3F));

        case (0xFFFF & $bytes) === $bytes:
            // return a 3-byte UTF-8 character
            // see: http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
            return chr(0xE0 | (($bytes >> 12) & 0x0F))
                . chr(0x80 | (($bytes >> 6) & 0x3F))
                . chr(0x80 | ($bytes & 0x3F));
    }

    // ignoring UTF-32 for now, sorry
    return '';
}


/**
 * convert a string from one UTF-8 char to one UTF-16 char
 *
 * Normally should be handled by mb_convert_encoding, but
 * provides a slower PHP-only method for installations
 * that lack the multibyte string extension.
 * @link https://github.com/pear/Services_JSON
 *
 * @param string $utf8 UTF-8 character
 * @return   string  UTF-16 character
 * @access   private
 */
function utf8_to_utf16(string $utf8): string
{
    // oh, please
    if (function_exists('mb_convert_encoding')) {
        return mb_convert_encoding($utf8, 'UTF-16', 'UTF-8');
    }

    switch (strlen($utf8)) {
        case 1:
            // this case should never be reached, because we are in ASCII range
            // see: http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
            return $utf8;

        case 2:
            // return a UTF-16 character from a 2-byte UTF-8 char
            // see: http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
            return chr(0x07 & (ord($utf8[0]) >> 2))
                . chr((0xC0 & (ord($utf8[0]) << 6))
                    | (0x3F & ord($utf8[1])));

        case 3:
            // return a UTF-16 character from a 3-byte UTF-8 char
            // see: http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
            return chr((0xF0 & (ord($utf8[0]) << 4))
                    | (0x0F & (ord($utf8[1]) >> 2)))
                . chr((0xC0 & (ord($utf8[1]) << 6))
                    | (0x7F & ord($utf8[2])));
    }

    // ignoring UTF-32 for now, sorry
    return '';
}


/**
 * Calculates length of string in bytes
 * @link https://github.com/pear/Services_JSON
 * @param string $str
 * @return integer length
 */
function str_len8(string $str): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($str, "8bit");
    }
    return strlen($str);
}


/**
 * Returns part of a string, interpreting $start and $length as number of bytes.
 * @link https://github.com/pear/Services_JSON
 * @param string $string
 * @param integer $start
 * @param int|null $length
 * @return string length
 */
function sub_str8(string $string, int $start, ?int $length): string
{
    //Debug::preOutput($length);
    if (!is_int($length)) {
        $length = str_len8($string) - $start;
    }
    if (function_exists('mb_substr')) {
        return mb_substr($string, $start, $length, "8bit");
    }
    return substr($string, $start, $length);
}


/**
 * Reduce a string by removing leading and trailing comments and whitespace
 *
 * @link https://github.com/pear/Services_JSON
 * @param string $string String value to strip of comments and whitespace
 * @return string String value stripped of comments and whitespace
 */
function tidy_content(string $string): string
{
    $string = preg_replace(
        [
            // eliminate single line comments in '// ...' form
            '#^\s*//(.+)$#m',

            // eliminate multi-line comments in '/* ... */' form, at start of string
            "#^\s*/\*(.+)\*/#Us",

            // eliminate multi-line comments in '/* ... */' form, at end of string
            '#/\*(.+)\*/\s*$#Us',
        ],
        "",
        $string
    );

    // eliminate extraneous space
    return trim($string);
}