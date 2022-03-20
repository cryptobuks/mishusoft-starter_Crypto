<?php

/**
 * The loader of yaml functions for mishusoft application
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
 * (PHP 5 &gt;= 5.2.0, PECL yaml &gt;= 0.5.0)<br/>
 * Send the YAML representation of a value to a file
 *
 * @link https://php.net/manual/en/function.yaml-emit-file.php
 *
 * @param string $filename  Path to the file.
 * @param mixed  $data      The data being encoded. Can be any type except a resource.
 * @param int    $encoding  Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.
 * @param int    $linebreak Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.
 * @param array  $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings. See parse callbacks for more details.
 *
 * @return bool Returns TRUE on success.
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function emit_yaml_file($filename, $data, int $encoding = YAML_ANY_ENCODING, int $linebreak = YAML_ANY_BREAK, array $callbacks = []): bool
{
    extInst('yaml');
    return yaml_emit_file($filename, $data, $encoding, $linebreak, $callbacks);
}

/**
 * @link https://php.net/manual/en/function.yaml-emit.php
 *
 * @param mixed $data      The data being encoded. Can be any type except a resource.
 * @param int   $encoding  [optional] Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.
 * @param int   $linebreak [optional] Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.
 * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings.
 *
 * @return string Returns a YAML encoded string on success.
 * @throws RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function emit_yaml_data($data, int $encoding = YAML_ANY_ENCODING, int $linebreak = YAML_ANY_BREAK, array $callbacks = []): string
{
    extInst('yaml');
    return yaml_emit($data, $encoding, $linebreak, $callbacks);
}

/**
 * Parse a YAML stream
 *
 * @link https://php.net/manual/en/function.yaml-parse.php
 *
 * @param string   $input     The string to parse as a YAML document stream.
 * @param int      $pos       Document to extract from stream (-1 for all documents, 0 for first document, ...).
 * @param int|null $ndocs     If ndocs is provided, then it is filled with the number of documents found in stream.
 * @param array    $callbacks Content handlers for YAML nodes. Associative array of YAML tag => callable mappings.
 *
 * @return mixed Returns the value encoded in input in appropriate PHP type or FALSE on failure.
 * @throws RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function parse_yaml_data(string $input, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
{
    extInst('yaml');
    return yaml_parse($input, $pos, $ndocs, $callbacks);
}

/**
 * Parse a YAML stream from a file
 *
 * @link https://php.net/manual/en/function.yaml-parse-file.php
 *
 * @param string   $filename  Path to the file.
 * @param int      $pos       Document to extract from stream (-1 for all documents, 0 for first document, ...).
 * @param int|null $ndocs     If ndocs is provided, then it is filled with the number of documents found in stream.
 * @param array    $callbacks Content handlers for YAML nodes.
 *
 * @return array|false Returns the value encoded in input in appropriate PHP type or FALSE on failure.
 * @throws RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function parse_yaml_file(string $filename, int $pos = 0, int &$ndocs = null, array $callbacks = []): array|false
{
    extInst('yaml');
    $content = file_get_contents($filename);
    $startAt = strpos($content, '...');
    $endAt   = strrpos($content, '...');

    if ($startAt !== $endAt) {
        $extra        = substr($content, $startAt + 3);
        $assignBefore = substr($content, 0, $startAt);
        $assignAfter  = substr($extra, strpos($extra, 'visit-time:') + 34);
        file_put_contents($filename, $assignBefore . $assignAfter);
        yaml_parse($assignBefore . $assignAfter, $pos, $ndocs, $callbacks);
    }
    else {
        $content = yaml_parse_file($filename, $pos, $ndocs, $callbacks);
    }
    if (is_null($content)) {
        return false;
    }
    return is_array($content) ? $content : [];
}

/**
 * Parse a Yaml stream from a URL
 *
 * @link https://php.net/manual/en/function.yaml-parse-url.php
 *
 * @param string   $url       url should be of the form "scheme://...".
 * @param int      $pos       Document to extract from stream (-1 for all documents, 0 for first document, ...).
 * @param int|null $ndocs     If ndocs is provided, then it is filled with the number of documents found in stream.
 * @param array    $callbacks Content handlers for YAML nodes.
 *
 * @return mixed Returns the value encoded in input in appropriate PHP type or FALSE on failure.
 * @throws RuntimeException
 * @throws \Mishusoft\Exceptions\RuntimeException
 */
function parse_yaml_data_Url(string $url, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
{
    extInst('yaml');
    return yaml_parse_url($url, $pos, $ndocs, $callbacks);
}
