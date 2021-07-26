<?php


namespace Mishusoft\Storage\FileSystem;

use Mishusoft\Exceptions\RuntimeException;

class Yaml
{
    /**
     * @throws RuntimeException
     */
    private static function validation():void
    {
        $ext = get_loaded_extensions();
        if (in_array('yaml', $ext)=== false) {
            throw new RuntimeException('YAML extension required.');
        }
    }

    /**
     * @link https://php.net/manual/en/function.yaml-emit.php
     * @param mixed $data The data being encoded. Can be any type except a resource.
     * @param int $encoding [optional] Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.
     * @param int $linebreak [optional] Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.
     * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings. See parse callbacks for more details.
     * @return string Returns a YAML encoded string on success.
     * @throws RuntimeException
     */
    public static function emit(
        mixed $data,
        int $encoding = YAML_ANY_ENCODING,
        int $linebreak = YAML_ANY_BREAK,
        array $callbacks = null
    ): string {
        self::validation();
        return yaml_emit($data, $encoding, $linebreak, $callbacks);
    }

    /**
     * Send the YAML representation of a value to a file
     * @link https://php.net/manual/en/function.yaml-emit-file.php
     * @param string $filename Path to the file.
     * @param mixed $data The data being encoded. Can be any type except a resource.
     * @param int $encoding Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.
     * @param int $linebreak Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.
     * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings. See parse callbacks for more details.
     * @return bool Returns TRUE on success.
     * @throws RuntimeException
     */
    public static function emitFile(
        string $filename,
        mixed $data,
        int $encoding = YAML_ANY_ENCODING,
        int $linebreak = YAML_ANY_BREAK,
        array $callbacks = []
    ): bool {
        self::validation();
        return yaml_emit_file($filename, $data, $encoding, $linebreak, $callbacks);
    }


    /**
     * Parse a YAML stream
     * @link https://php.net/manual/en/function.yaml-parse.php
     * @param string $input The string to parse as a YAML document stream.
     * @param int $pos [optional] Document to extract from stream (-1 for all documents, 0 for first document, ...).
     * @param int &$ndocs [optional] If ndocs is provided, then it is filled with the number of documents found in stream.
     * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings. See parse callbacks for more details.
     * @return mixed|false Returns the value encoded in input in appropriate PHP type or FALSE on failure. If pos is -1 an array will be returned with one entry for each document found in the stream.
     * @throws RuntimeException
     */
    public static function parse(string $input, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
    {
        self::validation();
        return yaml_parse($input, $pos, $ndocs, $callbacks);
    }


    /**
     * Parse a YAML stream from a file
     * @link https://php.net/manual/en/function.yaml-parse-file.php
     * @param string $filename Path to the file.
     * @param int $pos [optional] Document to extract from stream (-1 for all documents, 0 for first document, ...).
     * @param int &$ndocs [optional] If ndocs is provided, then it is filled with the number of documents found in stream.
     * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings. See parse callbacks for more details.
     * @return mixed|false Returns the value encoded in input in appropriate PHP type or FALSE on failure. If pos is -1 an array will be returned with one entry for each document found in the stream.
     * @throws RuntimeException
     */
    public static function parseFile(string $filename, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
    {
        self::validation();
        return yaml_parse_file($filename, $pos, $ndocs, $callbacks);
    }


    /**
     * Parse a Yaml stream from a URL
     * @link https://php.net/manual/en/function.yaml-parse-url.php
     * @param string $url url should be of the form "scheme://...". PHP will search for a protocol handler (also known as a wrapper) for that scheme. If no wrappers for that protocol are registered, PHP will emit a notice to help you track potential problems in your script and then continue as though filename specifies a regular file.
     * @param int $pos [optional] Document to extract from stream (-1 for all documents, 0 for first document, ...).
     * @param int &$ndocs [optional] If ndocs is provided, then it is filled with the number of documents found in stream.
     * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings. See parse callbacks for more details.
     * @return mixed|false Returns the value encoded in input in appropriate PHP type or FALSE on failure. If pos is -1 an array will be returned with one entry for each document found in the stream.
     * @throws RuntimeException
     */
    public static function parseUrl(string $url, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
    {
        self::validation();
        return yaml_parse_file($url, $pos, $ndocs, $callbacks);
    }
}
