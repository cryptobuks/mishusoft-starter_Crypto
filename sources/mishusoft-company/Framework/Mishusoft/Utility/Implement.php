<?php

namespace Mishusoft\Utility;

//add array to json
//add array to object
//add object to array
//add object to json
//add csv to array
//add csv to json
//add csv to object

// support: Services_JSON (http://pear.php.net/pepr/pepr-proposal-show.php?id=198)

use Exception;

class Implement
{

    //fix locale issue
    private static function withLocale(\Closure $closure)
    {
        $lc = setlocale(LC_NUMERIC, 0);
        setlocale(LC_NUMERIC, 'C');
        $actualValue = $closure();
        setlocale(LC_NUMERIC, $lc);

        return $actualValue;
    }

    //start of make array to object
    /**
     * @param array $array
     * @param string $classname
     * @return object
     */
    public static function arrayToObject(array $array, string $classname = 'stdClass'): object
    {
        $object = new $classname;
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                //convert the array to an object
                $value = self::arrayToObject($value, $classname);
            }
            //Add the value to the object
            $object->{$key} = $value;
        }
        return $object;
    }

    //end of make array to object

    //start of make array to json
    public static function toJson(mixed $content) : mixed
    {
        return self::withLocale(/**
         * @throws Exception
         */
            function () use ($content) {
                return self::toJsonBuilder($content);
            }
        );
    }



    /**
     * decodes a JSON string into appropriate variable
     *
     * @param string $str    JSON-formatted string
     *
     * @return   mixed   number, boolean, string, array, or object
     *                   corresponding to given JSON input string.
     *                   See argument 1 to Services_JSON() above for object-output behavior.
     *                   Note that decode() always returns strings
     *                   in ASCII or UTF-8 format!
     * @access   public
     */
    public static function decode(string $str, int $type = IMPLEMENT_JSON_IN_OBJ): mixed
    {
        $str = self::tidyContent($str);

        switch (strtolower($str)) {
            case 'true':
                return true;

            case 'false':
                return false;

            case 'null':
                return null;

            default:
                $m = array();

                if (is_numeric($str)) {
                    // Look-loo, it's a number

                    // This would work on its own, but I'm trying to be
                    // good about returning integers where appropriate:
                    // return (float)$str;

                    // Return float or int, as appropriate
                    return (float)$str;

                }

                if (preg_match('/^("|\').*(\1)$/s', $str, $m) && $m[1] == $m[2]) {
                    // STRINGS RETURNED IN UTF-8 FORMAT
                    $delim = Inflect::substr8($str, 0, 1);
                    $chrs = Inflect::substr8($str, 1, -1);
                    $utf8 = '';
                    $strlen_chrs = Inflect::strlen8($chrs);

                    for ($c = 0; $c < $strlen_chrs; ++$c) {

                        $substr_chrs_c_2 = Inflect::substr8($chrs, $c, 2);
                        $ord_chrs_c = ord($chrs[$c]);

                        switch (true) {
                            case $substr_chrs_c_2 === '\b':
                                $utf8 .= chr(0x08);
                                ++$c;
                                break;
                            case $substr_chrs_c_2 === '\t':
                                $utf8 .= chr(0x09);
                                ++$c;
                                break;
                            case $substr_chrs_c_2 === '\n':
                                $utf8 .= chr(0x0A);
                                ++$c;
                                break;
                            case $substr_chrs_c_2 === '\f':
                                $utf8 .= chr(0x0C);
                                ++$c;
                                break;
                            case $substr_chrs_c_2 === '\r':
                                $utf8 .= chr(0x0D);
                                ++$c;
                                break;

                            case $substr_chrs_c_2 === '\\"':
                            case $substr_chrs_c_2 === '\\\'':
                            case $substr_chrs_c_2 === '\\\\':
                            case $substr_chrs_c_2 === '\\/':
                                if (($delim === '"' && $substr_chrs_c_2 !== '\\\'') ||
                                    ($delim === "'" && $substr_chrs_c_2 !== '\\"')) {
                                    $utf8 .= $chrs[++$c];
                                }
                                break;

                            case preg_match('/\\\u[0-9A-F]{4}/i', Inflect::substr8($chrs, $c, 6)):
                                // single, escaped unicode character
                                $utf16 = chr(hexdec(Inflect::substr8($chrs, ($c + 2), 2)))
                                    . chr(hexdec(Inflect::substr8($chrs, ($c + 4), 2)));
                                $utf8 .= Inflect::utf162utf8($utf16);
                                $c += 5;
                                break;

                            case ($ord_chrs_c >= 0x20) && ($ord_chrs_c <= 0x7F):
                                $utf8 .= $chrs[$c];
                                break;

                            case ($ord_chrs_c & 0xE0) === 0xC0:
                                // characters U-00000080 - U-000007FF, mask 110XXXXX
                                //see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= Inflect::substr8($chrs, $c, 2);
                                ++$c;
                                break;

                            case ($ord_chrs_c & 0xF0) === 0xE0:
                                // characters U-00000800 - U-0000FFFF, mask 1110XXXX
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= Inflect::substr8($chrs, $c, 3);
                                $c += 2;
                                break;

                            case ($ord_chrs_c & 0xF8) === 0xF0:
                                // characters U-00010000 - U-001FFFFF, mask 11110XXX
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= Inflect::substr8($chrs, $c, 4);
                                $c += 3;
                                break;

                            case ($ord_chrs_c & 0xFC) === 0xF8:
                                // characters U-00200000 - U-03FFFFFF, mask 111110XX
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= Inflect::substr8($chrs, $c, 5);
                                $c += 4;
                                break;

                            case ($ord_chrs_c & 0xFE) === 0xFC:
                                // characters U-04000000 - U-7FFFFFFF, mask 1111110X
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= Inflect::substr8($chrs, $c, 6);
                                $c += 5;
                                break;

                        }

                    }

                    return $utf8;

                }

                if (preg_match('/^\[.*\]$/s', $str) || preg_match('/^\{.*\}$/s', $str)) {
                    // array, or object notation

                    if ($str[0] === '[') {
                        $stk = array(SERVICES_JSON_IN_ARR);
                        $arr = array();
                    } else {
                        if ($type & SERVICES_JSON_LOOSE_TYPE) {
                            $stk = array(SERVICES_JSON_IN_OBJ);
                            $obj = array();
                        } else {
                            $stk = array(SERVICES_JSON_IN_OBJ);
                            $obj = new \stdClass();
                        }
                    }

                    array_push($stk, array('what'  => SERVICES_JSON_SLICE,
                        'where' => 0,
                        'delim' => false));

                    $chrs = Inflect::substr8($str, 1, -1);
                    $chrs = self::tidyContent($chrs);

                    if ($chrs === '') {
                        if (reset($stk) === SERVICES_JSON_IN_ARR) {
                            return $arr;

                        }

                        return $obj;
                    }

                    //print("\nparsing {$chrs}\n");

                    $strlen_chrs = Inflect::strlen8($chrs);

                    for ($c = 0; $c <= $strlen_chrs; ++$c) {

                        $top = end($stk);
                        $substr_chrs_c_2 = Inflect::substr8($chrs, $c, 2);

                        if (($c === $strlen_chrs) || (($chrs[$c] === ',') && ($top['what'] === SERVICES_JSON_SLICE))) {
                            // found a comma that is not inside a string, array, etc.,
                            // OR we've reached the end of the character list
                            $slice = Inflect::substr8($chrs, $top['where'], ($c - $top['where']));
                            $stk[] = array('what' => SERVICES_JSON_SLICE, 'where' => ($c + 1), 'delim' => false);
                            //print("Found split at {$c}: ".$this->substr8($chrs, $top['where'], (1 + $c - $top['where']))."\n");

                            if (reset($stk) === SERVICES_JSON_IN_ARR) {
                                // we are in an array, so just push an element onto the stack
                                $arr[] = self::decode($slice);

                            } elseif (reset($stk) === SERVICES_JSON_IN_OBJ) {
                                // we are in an object, so figure
                                // out the property name and set an
                                // element in an associative array,
                                // for now
                                $parts = array();

                                if (preg_match('/^\s*(["\'].*[^\\\]["\'])\s*:/Uis', $slice, $parts)) {
                                    // "name":value pair
                                    $key = self::decode($parts[1]);
                                    $val = self::decode(trim(substr($slice, strlen($parts[0])), ", \t\n\r\0\x0B"));
                                    if ($type & SERVICES_JSON_LOOSE_TYPE) {
                                        $obj[$key] = $val;
                                    } else {
                                        $obj->$key = $val;
                                    }
                                } elseif (preg_match('/^\s*(\w+)\s*:/Uis', $slice, $parts)) {
                                    // name:value pair, where name is unquoted
                                    $key = $parts[1];
                                    $val = self::decode(trim(substr($slice, strlen($parts[0])), ", \t\n\r\0\x0B"));

                                    if ($type & SERVICES_JSON_LOOSE_TYPE) {
                                        $obj[$key] = $val;
                                    } else {
                                        $obj->$key = $val;
                                    }
                                }

                            }

                        } elseif ((($chrs[$c] === '"') || ($chrs[$c] === "'")) && ($top['what'] !== SERVICES_JSON_IN_STR)) {
                            // found a quote, and we are not inside a string
                            $stk[] = array('what' => SERVICES_JSON_IN_STR, 'where' => $c, 'delim' => $chrs[$c]);
                            //print("Found start of string at {$c}\n");

                        } elseif (($chrs[$c] === $top['delim']) &&
                            ($top['what'] === SERVICES_JSON_IN_STR) &&
                            ((Inflect::strlen8(Inflect::substr8($chrs, 0, $c)) - Inflect::strlen8(rtrim(Inflect::substr8($chrs, 0, $c), '\\'))) % 2 !== 1)) {
                            // found a quote, we're in a string, and it's not escaped
                            // we know that it's not escaped becase there is _not_ an
                            // odd number of backslashes at the end of the string so far
                            array_pop($stk);
                            //print("Found end of string at {$c}: ".$this->substr8($chrs, $top['where'], (1 + 1 + $c - $top['where']))."\n");

                        } elseif (($chrs[$c] === '[') &&
                            in_array($top['what'], array(SERVICES_JSON_SLICE, SERVICES_JSON_IN_ARR, SERVICES_JSON_IN_OBJ), true)) {
                            // found a left-bracket, and we are in an array, object, or slice
                            $stk[] = array('what' => SERVICES_JSON_IN_ARR, 'where' => $c, 'delim' => false);
                            //print("Found start of array at {$c}\n");

                        } elseif (($chrs[$c] === ']') && ($top['what'] === SERVICES_JSON_IN_ARR)) {
                            // found a right-bracket, and we're in an array
                            array_pop($stk);
                            //print("Found end of array at {$c}: ".$this->substr8($chrs, $top['where'], (1 + $c - $top['where']))."\n");

                        } elseif (($chrs[$c] === '{') &&
                            in_array($top['what'], array(SERVICES_JSON_SLICE, SERVICES_JSON_IN_ARR, SERVICES_JSON_IN_OBJ), true)) {
                            // found a left-brace, and we are in an array, object, or slice
                            $stk[] = array('what' => SERVICES_JSON_IN_OBJ, 'where' => $c, 'delim' => false);
                            //print("Found start of object at {$c}\n");

                        } elseif (($chrs[$c] === '}') && ($top['what'] === SERVICES_JSON_IN_OBJ)) {
                            // found a right-brace, and we're in an object
                            array_pop($stk);
                            //print("Found end of object at {$c}: ".$this->substr8($chrs, $top['where'], (1 + $c - $top['where']))."\n");

                        } elseif (($substr_chrs_c_2 === '/*') &&
                            in_array($top['what'], array(SERVICES_JSON_SLICE, SERVICES_JSON_IN_ARR, SERVICES_JSON_IN_OBJ), true)) {
                            // found a comment start, and we are in an array, object, or slice
                            $stk[] = array('what' => SERVICES_JSON_IN_CMT, 'where' => $c, 'delim' => false);
                            $c++;
                            //print("Found start of comment at {$c}\n");

                        } elseif (($substr_chrs_c_2 === '*/') && ($top['what'] === SERVICES_JSON_IN_CMT)) {
                            // found a comment end, and we're in one now
                            array_pop($stk);
                            $c++;

                            for ($i = $top['where']; $i <= $c; ++$i) {
                                $chrs = substr_replace($chrs, ' ', $i, 1);
                            }

                            //print("Found end of comment at {$c}: ".$this->substr8($chrs, $top['where'], (1 + $c - $top['where']))."\n");

                        }

                    }

                    if (reset($stk) === SERVICES_JSON_IN_ARR) {
                        return $arr;

                    }

                    if (reset($stk) === SERVICES_JSON_IN_OBJ) {
                        return $obj;

                    }

                }
        }
    }

    /**
     * @throws Exception
     */
    private static function toJsonBuilder(mixed $content) : string|int|float
    {
        switch (gettype($content)) {
            case 'boolean':
                return $content ? 'true' : 'false';

            case 'NULL':
                return 'null';

            case 'integer':
                return (int) $content;

            case 'double':
            case 'float':
                return  (float) $content;

            case 'string':
                // STRINGS ARE EXPECTED TO BE IN ASCII OR UTF-8 FORMAT
                $ascii = '';
                $strlen_content = Inflect::strlen8($content);

                /*
                 * Iterate over every character in the string,
                 * escaping with a slash or encoding to UTF-8 where necessary
                 */
                for ($c = 0; $c < $strlen_content; ++$c) {
                    $ord_var_c = ord($content[$c]);

                    switch (true) {
                        case $ord_var_c === 0x08:
                            $ascii .= '\b';
                            break;
                        case $ord_var_c === 0x09:
                            $ascii .= '\t';
                            break;
                        case $ord_var_c === 0x0A:
                            $ascii .= '\n';
                            break;
                        case $ord_var_c === 0x0C:
                            $ascii .= '\f';
                            break;
                        case $ord_var_c === 0x0D:
                            $ascii .= '\r';
                            break;

                        case $ord_var_c === 0x22:
                        case $ord_var_c === 0x2F:
                        case $ord_var_c === 0x5C:
                            // double quote, slash, slosh
                            $ascii .= '\\'.$content[$c];
                            break;

                        case (($ord_var_c >= 0x20) && ($ord_var_c <= 0x7F)):
                            // characters U-00000000 - U-0000007F (same as ASCII)
                            $ascii .= $content[$c];
                            break;

                        case (($ord_var_c & 0xE0) === 0xC0):
                            // characters U-00000080 - U-000007FF, mask 110XXXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            if ($c+1 >= $strlen_content) {
                                ++$c;
                                $ascii .= '?';
                                break;
                            }

                            $char = pack('C*', $ord_var_c, ord($content[$c + 1]));
                            ++$c;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xF0) === 0xE0):
                            if ($c+2 >= $strlen_content) {
                                $c += 2;
                                $ascii .= '?';
                                break;
                            }
                            // characters U-00000800 - U-0000FFFF, mask 1110XXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack(
                                'C*',
                                $ord_var_c,
                                @ord($content[$c + 1]),
                                @ord($content[$c + 2])
                            );
                            $c += 2;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xF8) === 0xF0):
                            if ($c+3 >= $strlen_content) {
                                $c += 3;
                                $ascii .= '?';
                                break;
                            }
                            // characters U-00010000 - U-001FFFFF, mask 11110XXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack(
                                'C*',
                                $ord_var_c,
                                ord($content[$c + 1]),
                                ord($content[$c + 2]),
                                ord($content[$c + 3])
                            );
                            $c += 3;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xFC) === 0xF8):
                            // characters U-00200000 - U-03FFFFFF, mask 111110XX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            if ($c+4 >= $strlen_content) {
                                $c += 4;
                                $ascii .= '?';
                                break;
                            }
                            $char = pack(
                                'C*',
                                $ord_var_c,
                                ord($content[$c + 1]),
                                ord($content[$c + 2]),
                                ord($content[$c + 3]),
                                ord($content[$c + 4])
                            );
                            $c += 4;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xFE) === 0xFC):
                            if ($c+5 >= $strlen_content) {
                                $c += 5;
                                $ascii .= '?';
                                break;
                            }
                            // characters U-04000000 - U-7FFFFFFF, mask 1111110X
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack(
                                'C*',
                                $ord_var_c,
                                ord($content[$c + 1]),
                                ord($content[$c + 2]),
                                ord($content[$c + 3]),
                                ord($content[$c + 4]),
                                ord($content[$c + 5])
                            );
                            $c += 5;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;
                    }
                }
                return  sprintf('"%1$s"', $ascii);

            case 'array':
                /*
                 * As per JSON spec if any array key is not an integer
                 * we must treat the whole array as an object. We
                 * also try to catch a sparsely populated associative
                 * array with numeric keys here because some JS engines
                 * will create an array with empty indexes up to
                 * max_index which can cause memory issues and because
                 * the keys, which may be relevant, will be remapped
                 * otherwise.
                 *
                 * As per the ECMA and JSON specification an object may
                 * have any string as a property. Unfortunately due to
                 * a hole in the ECMA specification if the key is a
                 * ECMA reserved word or starts with a digit the
                 * parameter is only accessible using ECMAScript's
                 * bracket notation.
                 */

                // treat as a JSON object
                if (is_array($content)
                    && count($content)
                    && (array_keys($content) !== range(0, sizeof($content) - 1))) {
                    $properties = array_map(
                        array(__CLASS__, 'keyValue'),
                        array_keys($content),
                        array_values($content)
                    );

                    return sprintf('{%1$s}', implode(',', $properties));
                }

                // treat it like a regular array
                $elements = array_map(array(__CLASS__, 'toJsonBuilder'), $content);
                return sprintf('[%1$s]', implode(',', $elements));

            case 'object':
                $vars = get_object_vars($content);

                $properties = array_map(
                    array(__CLASS__, 'keyValue'),
                    array_keys($vars),
                    array_values($vars)
                );

                return sprintf('{%1$s}', implode(',', $properties));

            default:
                throw new Exception(gettype($content)." can not be encoded as JSON string");
        }
    }

    /**
     * array-walking function for use in generating JSON-formatted name-value pairs
     *
     * @param string $key
     * @param mixed $value reference to an array element to be encoded
     *
     * @return   string  JSON-formatted name-value pair, like '"key":value'
     * @throws Exception
     * @access   private
     */
    public static function keyValue(string $key, mixed $value): string
    {
        return self::toJsonBuilder($key) . ':' . self::toJsonBuilder($value);
    }

    /**
     * reduce a string by removing leading and trailing comments and whitespace
     *
     * @param    $str    string      string value to strip of comments and whitespace
     *
     * @return   string  string value stripped of comments and whitespace
     * @access   private
     */
    private static function tidyContent(string $str): string
    {
        $str = preg_replace(array(
            // eliminate single line comments in '// ...' form
            '#^\s*//(.+)$#m',

            // eliminate multi-line comments in '/* ... */' form, at start of string
            '#^\s*/\*(.+)\*/#Us',

            // eliminate multi-line comments in '/* ... */' form, at end of string
            '#/\*(.+)\*/\s*$#Us'

        ), '', $str);

        // eliminate extraneous space
        return trim($str);
    }


    //end of make content to json

    //start of make json to array
    public static function jsonToArray(string $json):array
    {
//        Debug::preOutput(Inflect::utf162utf8($json));
        self::withLocale(function () use ($json) {
            //Debug::preOutput(Inflect::utf162utf8($json));
            //Debug::preOutput($json);
        });
//        self::withLocale(function () use ($json) {
//            Debug::preOutput(Inflect::utf82utf16($json));
//        });
//        Debug::preOutput(Inflect::utf82utf16($json));
        if (($json[0] === '{' && $json[-1] === '}') || ($json[0] === '[' && $json[-1] === ']')) {
            if ($json[0] === '[' && $json[-1] === ']') {
                //$json = strstr($json, ['[' => ' ', ']' => ' ']);
                $array = explode(',', strtr($json, ['[' => ' ', ']' => ' ']));
                foreach ($array as $key => $value) {
                    // Debug::preOutput(gettype($value));
                    if (is_string($value)) {
                        if (is_numeric((int) $value) && (int) $value !== 0) {
                            $array[$key] = (int) $value;
                        } elseif ($value === 'true') {
                            $array[$key] = true;
                        } elseif ($value === 'false') {
                            $array[$key] = false;
                        } elseif ($value === 'null') {
                            $array[$key] = null;
                        } else {
                            $array[$key] = trim(trim($value), '"');
                        }
                    } elseif (is_float($value) ||is_int($value)) {
                        $array[$key] = $value;
                    } elseif (is_array($value)) {
                        $array[$key] = self::jsonToArray($value);
                    }
                }
                return $array;
            }
            if ($json[0] === '{' && $json[-1] === '}') {
                //$json = strstr($json, ['[' => ' ', ']' => ' ']);
                $array = explode(',', strtr($json, ['{' => ' ', '}' => ' ']));
                foreach ($array as $key => $value) {
                    // Debug::preOutput(gettype($value));
                    $array[trim(trim($key), '"')] = trim(trim($value), '"');
                }
                return $array;
            }
            //return (array) strtr($json, ['{'=>'[', '}'=>']']);
        }

        throw new \RuntimeException('Incorrect encoding');
    }


    //end of make json to array

    /**
     * @param object $object
     * @return array
     */
    public static function objectToArray(object $object): array
    {
        $reflectionClass = new \ReflectionClass(get_class($object));
        $array = [];
        foreach ($reflectionClass->getProperties() as $property) {
            $property->setAccessible(true);
            if (is_object($property->getValue($object))) {
                $array[$property->getName()] = self::objectToArray($property->getValue($object));
            } else {
                $array[$property->getName()] = $property->getValue($object);
                $property->setAccessible(false);
            }
        }
        return $array;
    }
}
