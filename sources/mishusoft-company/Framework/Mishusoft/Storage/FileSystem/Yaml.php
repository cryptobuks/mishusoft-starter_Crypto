<?php

namespace Mishusoft\Storage\FileSystem;

use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage\FileSystem;

class Yaml
{
    public const DUMP_OBJECT = 1;
    public const PARSE_EXCEPTION_ON_INVALID_TYPE = 2;
    public const PARSE_OBJECT = 4;
    public const PARSE_OBJECT_FOR_MAP = 8;
    public const DUMP_EXCEPTION_ON_INVALID_TYPE = 16;
    public const PARSE_DATETIME = 32;
    public const DUMP_OBJECT_AS_MAP = 64;
    public const DUMP_MULTI_LINE_LITERAL_BLOCK = 128;
    public const PARSE_CONSTANT = 256;
    public const PARSE_CUSTOM_TAGS = 512;
    public const DUMP_EMPTY_ARRAY_AS_SEQUENCE = 1024;
    public const DUMP_NULL_AS_TILDE = 2048;

    /**
     * Send the YAML representation of a value to a file
     * @link https://php.net/manual/en/function.yaml-emit-file.php
     * @param string $filename Path to the file.
     * @param mixed $data The data being encoded. Can be any type except a resource.
     * @param int $encoding Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.
     * @param int $linebreak Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.
     * @param array $callbacks Content handlers for YAML nodes. Associative array of YAML tag => callable mappings.
     *
     * @return bool Returns TRUE on success.
     * @throws RuntimeException
     */
    public static function emitFile(string $filename, mixed $data, int $encoding = YAML_ANY_ENCODING, int $linebreak = YAML_ANY_BREAK, array $callbacks = []): bool
    {
        self::validation();
        return yaml_emit_file($filename, $data, $encoding, $linebreak, $callbacks);
    }

    /**
     * @throws RuntimeException
     */
    private static function validation(): void
    {
        if (!extension_loaded("yaml")) {
            // $directoryPath = RUNTIME_ROOT_PATH . "requirements/";
            // $prefix = PHP_SHLIB_SUFFIX === "dll" ? "php_" : "";
            // dl($directoryPath . $prefix . "sqlite." . PHP_SHLIB_SUFFIX);
            throw new RuntimeException("YAML extension required");
        }
    }

    /**
     * @throws RuntimeException
     * @throws PermissionRequiredException
     */
    public static function emitFileSelf(string $filename, mixed $data): bool
    {
        if (!file_exists(dirname($filename))) {
            FileSystem::makeDirectory(dirname($filename));
        }
        if (!file_exists($filename)) {
            $stream = fopen($filename, "wb+");
            fwrite($stream, self::emit($data));
            fclose($stream);
        }
        if (!is_writable($filename)) {
            throw new PermissionRequiredException("Unable to write " . $filename);
        }
        return file_put_contents($filename, self::emit($data));
    }

    /**
     * @link https://php.net/manual/en/function.yaml-emit.php
     * @param mixed $data The data being encoded. Can be any type except a resource.
     * @param int $encoding [optional] Output character encoding chosen from YAML_ANY_ENCODING, YAML_UTF8_ENCODING, YAML_UTF16LE_ENCODING, YAML_UTF16BE_ENCODING.
     * @param int $linebreak [optional] Output linebreak style chosen from YAML_ANY_BREAK, YAML_CR_BREAK, YAML_LN_BREAK, YAML_CRLN_BREAK.
     * @param array $callbacks [optional] Content handlers for YAML nodes. Associative array of YAML tag => callable mappings.
     *
     * @return string Returns a YAML encoded string on success.
     * @throws RuntimeException
     */
    public static function emit(mixed $data, int $encoding = YAML_ANY_ENCODING, int $linebreak = YAML_ANY_BREAK, array $callbacks = []): string
    {
        self::validation();
        return yaml_emit($data, $encoding, $linebreak, $callbacks);
    }

    /**
     * Dumps a PHP value to a YAML string.
     *
     * The dump method, when supplied with an array, will do its best
     * to convert the array into friendly YAML.
     *
     * @param mixed $input  The PHP value
     * @param int   $inline The level where you switch to inline YAML
     * @param int   $indent The amount of spaces to use for indentation of nested nodes
     * @param int   $flags  A bit field of DUMP_* constants to customize the dumped YAML string
     *
     * @return string A YAML string representing the original PHP value
     */
    public static function emitSelf(mixed $input, int $inline = 2, int $indent = 4, int $flags = 0): string
    {
        $yaml = new Yaml\Dumper($indent);
        return $yaml->dump($input, $inline, 0, $flags);
    }

    /**
     * Parse a YAML stream
     * @link https://php.net/manual/en/function.yaml-parse.php
     * @param string $input The string to parse as a YAML document stream.
     * @param int $pos Document to extract from stream (-1 for all documents, 0 for first document, ...).
     * @param int|null $ndocs If ndocs is provided, then it is filled with the number of documents found in stream.
     * @param array $callbacks Content handlers for YAML nodes. Associative array of YAML tag => callable mappings.
     * @return mixed Returns the value encoded in input in appropriate PHP type or FALSE on failure.
     * @throws RuntimeException
     */
    public static function parse(string $input, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
    {
        self::validation();
        return yaml_parse($input, $pos, $ndocs, $callbacks);
    }

    /**
     * Parses YAML into a PHP value.
     *
     *  Usage:
     *  <code>
     *   $array = Yaml::parse(file_get_contents('config.yml'));
     *   print_r($array);
     *  </code>
     *
     * @param string $input A string containing YAML
     * @param int    $flags A bit field of PARSE_* constants to customize the YAML parser behavior
     *
     * @return mixed The YAML converted to a PHP value
     *
     * @throws Yaml\Exception\ParseException If the YAML is not valid
     */
    public static function parseSelf(string $input, int $flags = 0): mixed
    {
        $yaml = new Yaml\Parser();
        return $yaml->parse($input, $flags);
    }

    /**
     * Parse a YAML stream from a file
     * @link https://php.net/manual/en/function.yaml-parse-file.php
     * @param string $filename Path to the file.
     * @param int $pos Document to extract from stream (-1 for all documents, 0 for first document, ...).
     * @param int|null $ndocs If ndocs is provided, then it is filled with the number of documents found in stream.
     * @param array $callbacks Content handlers for YAML nodes.
     * @return array|false Returns the value encoded in input in appropriate PHP type or FALSE on failure.
     * @throws RuntimeException
     */
    public static function parseFile(string $filename, int $pos = 0, int &$ndocs = null, array $callbacks = []): array|false
    {
        self::validation();
        $content = yaml_parse_file($filename, $pos, $ndocs, $callbacks);
        if (is_null($content)) {
            return false;
        }
        return $content;
    }

    /**
     * Parses a YAML file into a PHP value.
     *
     * Usage:
     *
     *     $array = Yaml::parseFile('config.yml');
     *     print_r($array);
     *
     * @param string $filename The path to the YAML file to be parsed
     * @param int    $flags    A bit field of PARSE_* constants to customize the YAML parser behavior
     *
     * @return mixed The YAML converted to a PHP value
     *
     * @throws Yaml\Exception\ParseException If the file could not be read or the YAML is not valid
     */
    public static function parseFileSelf(string $filename, int $flags = 0): mixed
    {
        $yaml = new Yaml\Parser();
        return $yaml->parseFile($filename, $flags);
    }

    /**
     * Parse a Yaml stream from a URL
     * @link https://php.net/manual/en/function.yaml-parse-url.php
     * @param string $url url should be of the form "scheme://...".
     * @param int $pos Document to extract from stream (-1 for all documents, 0 for first document, ...).
     * @param int|null $ndocs If ndocs is provided, then it is filled with the number of documents found in stream.
     * @param array $callbacks Content handlers for YAML nodes.
     * @return mixed Returns the value encoded in input in appropriate PHP type or FALSE on failure.
     * @throws RuntimeException
     */
    public static function parseUrl(string $url, int $pos = 0, int &$ndocs = null, array $callbacks = []): mixed
    {
        self::validation();
        return yaml_parse_url($url, $pos, $ndocs, $callbacks);
    }
}
