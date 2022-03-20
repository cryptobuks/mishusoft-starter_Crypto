<?php

    /**
     * The loader of json functions for mishusoft application
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
     * @param Closure $closure
     *
     * @return mixed
     */
    function withLocale(Closure $closure): mixed
    {
        $lc = setlocale(LC_NUMERIC, 0);
        setlocale(LC_NUMERIC, "C");
        $actualValue = $closure();
        setlocale(LC_NUMERIC, $lc);

        return $actualValue;
    }


    /**
     * @param mixed $content
     *
     * @return mixed
     * @throws \RuntimeException
     */
    function encode_to_json(mixed $content): mixed
    {
        return withLocale(
        /**
         * @throws \RuntimeException
         */
            static function () use ($content) {
                return toJsonBuilder($content);
            }
        );
    }


    /**
     * @see https://github.com/pear/Services_JSON
     *
     * @param mixed $content
     *
     * @return string|int|float
     * @throws \RuntimeException
     */
    function toJsonBuilder(mixed $content): string|int|float
    {
        switch (gettype($content)) {
            case "boolean":
                return $content ? "true" : "false";

            case "NULL":
                return "null";

            case "integer":
                return (int)$content;

            case "double":
            case "float":
                return (float)$content;

            case "string":
                // STRINGS ARE EXPECTED TO BE IN ASCII OR UTF-8 FORMAT
                $ascii           = "";
                $str_len_content = str_len8($content);

                /*
                 * Iterate over every character in the string,
                 * escaping with a slash or encoding to UTF-8 where necessary
                 */
                for ($c = 0; $c < $str_len_content; ++$c) {
                    $ord_var_c = ord($content[$c]);

                    switch (true) {
                        case $ord_var_c === 0x08:
                            $ascii .= "\b";
                            break;
                        case $ord_var_c === 0x09:
                            $ascii .= '\t';
                            break;
                        case $ord_var_c === 0x0a:
                            $ascii .= '\n';
                            break;
                        case $ord_var_c === 0x0c:
                            $ascii .= '\f';
                            break;
                        case $ord_var_c === 0x0d:
                            $ascii .= '\r';
                            break;

                        case $ord_var_c === 0x22:
                        case $ord_var_c === 0x2f:
                        case $ord_var_c === 0x5c:
                            // double quote, slash, slosh
                            $ascii .= "\\" . $content[$c];
                            break;

                        case $ord_var_c >= 0x20 && $ord_var_c <= 0x7f:
                            // characters U-00000000 - U-0000007F (same as ASCII)
                            $ascii .= $content[$c];
                            break;

                        case ($ord_var_c & 0xe0) === 0xc0:
                            // characters U-00000080 - U-000007FF, mask 110XXXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            if ($c + 1 >= $str_len_content) {
                                ++$c;
                                $ascii .= "?";
                                break;
                            }

                            $char = pack("C*", $ord_var_c, ord($content[$c + 1]));
                            ++$c;
                            $utf16 = utf8_to_utf16($char);
                            $ascii .= sprintf("\u%04s", bin2hex($utf16));
                            break;

                        case ($ord_var_c & 0xf0) === 0xe0:
                            if ($c + 2 >= $str_len_content) {
                                $c     += 2;
                                $ascii .= "?";
                                break;
                            }
                            // characters U-00000800 - U-0000FFFF, mask 1110XXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char  = pack("C*", $ord_var_c, @ord($content[$c + 1]), @ord($content[$c + 2]));
                            $c     += 2;
                            $utf16 = utf8_to_utf16($char);
                            $ascii .= sprintf("\u%04s", bin2hex($utf16));
                            break;

                        case ($ord_var_c & 0xf8) === 0xf0:
                            if ($c + 3 >= $str_len_content) {
                                $c     += 3;
                                $ascii .= "?";
                                break;
                            }
                            // characters U-00010000 - U-001FFFFF, mask 11110XXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char  = pack("C*", $ord_var_c, ord($content[$c + 1]), ord($content[$c + 2]), ord($content[$c + 3]));
                            $c     += 3;
                            $utf16 = utf8_to_utf16($char);
                            $ascii .= sprintf("\u%04s", bin2hex($utf16));
                            break;

                        case ($ord_var_c & 0xfc) === 0xf8:
                            // characters U-00200000 - U-03FFFFFF, mask 111110XX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            if ($c + 4 >= $str_len_content) {
                                $c     += 4;
                                $ascii .= "?";
                                break;
                            }
                            $char  = pack("C*", $ord_var_c, ord($content[$c + 1]), ord($content[$c + 2]), ord($content[$c + 3]), ord($content[$c + 4]));
                            $c     += 4;
                            $utf16 = utf8_to_utf16($char);
                            $ascii .= sprintf("\u%04s", bin2hex($utf16));
                            break;

                        case ($ord_var_c & 0xfe) === 0xfc:
                            if ($c + 5 >= $str_len_content) {
                                $c     += 5;
                                $ascii .= "?";
                                break;
                            }
                            // characters U-04000000 - U-7FFFFFFF, mask 1111110X
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char  = pack("C*", $ord_var_c, ord($content[$c + 1]), ord($content[$c + 2]), ord($content[$c + 3]), ord($content[$c + 4]), ord($content[$c + 5]));
                            $c     += 5;
                            $utf16 = utf8_to_utf16($char);
                            $ascii .= sprintf("\u%04s", bin2hex($utf16));
                            break;
                    }
                }
                return sprintf('"%1$s"', $ascii);

            case "array":
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
                if (is_array($content) && count($content) && array_keys($content) !== range(0, sizeof($content) - 1)) {
                    $properties = array_map("json_key_value_pairs", array_keys($content), array_values($content));

                    return sprintf('{%1$s}', implode(",", $properties));
                }

                // treat it like a regular array
                $elements = array_map("toJsonBuilder", $content);
                return sprintf('[%1$s]', implode(",", $elements));

            case "object":
                $vars = get_object_vars($content);

                $properties = array_map("json_key_value_pairs", array_keys($vars), array_values($vars));

                return sprintf('{%1$s}', implode(",", $properties));

            default:
                throw new RuntimeException(gettype($content) . " can not be encoded as JSON string");
        }
    }

    /**
     * array-walking function for use in generating JSON-formatted name-value pairs
     *
     * @see      https://github.com/pear/Services_JSON
     *
     * @param string $key
     * @param mixed  $value reference to an array element to be encoded
     *
     * @return string  JSON-formatted name-value pair, like '"key":value'
     * @throws Exception
     * @access   private
     */
    function json_key_value_pairs(string $key, mixed $value): string
    {
        return sprintf('%1$s:%2$s', toJsonBuilder($key), toJsonBuilder($value));
    }


    /**
     * decodes a JSON string into appropriate variable
     *
     * @link     https://pear.php.net/package/Services_JSON/download
     * @link     https://github.com/pear/Services_JSON
     *
     * @param string $content JSON-formatted string
     * @param int    $dataType
     *
     * @return   mixed   number, boolean, string, array, or object
     *                   corresponding to given JSON input string.
     *                   See argument 1 to JSON() above for object-output behavior.
     *                   Note that decode() always returns strings
     *                   in ASCII or UTF-8 format!
     * @access   public
     */
    function decode_from_json(string $content, int $dataType = JSON_IN_OBJ): mixed
    {
        $content = tidy_content($content);

        $arr = [];
        $obj = new stdClass();

        switch (strtolower($content)) {
            case "true":
                return true;

            case "false":
                return false;

            case "null":
                return null;

            default:
                $m = [];

                if (is_numeric($content)) {
                    // Look-loo, it's a number

                    // This would work on its own, but I'm trying to be
                    // good about returning integers where appropriate:
                    // return (float)$content;

                    // Return float or int, as appropriate
                    return (float)$content;
                }

                if (preg_match('/^("|\').*(\1)$/s', $content, $m) && $m[1] === $m[2]) {
                    // STRINGS RETURNED IN UTF-8 FORMAT
                    $delim       = sub_str8($content, 0, 1);
                    $chars       = sub_str8($content, 1, -1);
                    $utf8        = "";
                    $lengthChars = str_len8($chars);

                    for ($c = 0; $c < $lengthChars; ++$c) {
                        $substr_chars_c_2 = sub_str8($chars, $c, 2);
                        $ord_chars_c      = ord($chars[$c]);

                        switch (true) {
                            case $substr_chars_c_2 === "\b":
                                $utf8 .= chr(0x08);
                                ++$c;
                                break;
                            case $substr_chars_c_2 === '\t':
                                $utf8 .= chr(0x09);
                                ++$c;
                                break;
                            case $substr_chars_c_2 === '\n':
                                $utf8 .= chr(0x0a);
                                ++$c;
                                break;
                            case $substr_chars_c_2 === '\f':
                                $utf8 .= chr(0x0c);
                                ++$c;
                                break;
                            case $substr_chars_c_2 === '\r':
                                $utf8 .= chr(0x0d);
                                ++$c;
                                break;

                            case $substr_chars_c_2 === '\\"':
                            case $substr_chars_c_2 === '\\\'':
                            case $substr_chars_c_2 === "\\\\":
                            case $substr_chars_c_2 === "\\/":
                                if (($delim === '"' && $substr_chars_c_2 !== '\\\'') || ($delim === "'" && $substr_chars_c_2 !== '\\"')) {
                                    $utf8 .= $chars[++$c];
                                }
                                break;

                            case preg_match("/\\\u[0-9A-F]{4}/i", sub_str8($chars, $c, 6)):
                                // single, escaped unicode character
                                $utf16 = chr(hexdec(sub_str8($chars, $c + 2, 2))) . chr(hexdec(sub_str8($chars, $c + 4, 2)));
                                $utf8  .= utf16_to_utf8($utf16);
                                $c     += 5;
                                break;

                            case $ord_chars_c >= 0x20 && $ord_chars_c <= 0x7f:
                                $utf8 .= $chars[$c];
                                break;

                            case ($ord_chars_c & 0xe0) === 0xc0:
                                // characters U-00000080 - U-000007FF, mask 110XXXXX
                                //see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= sub_str8($chars, $c, 2);
                                ++$c;
                                break;

                            case ($ord_chars_c & 0xf0) === 0xe0:
                                // characters U-00000800 - U-0000FFFF, mask 1110XXXX
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= sub_str8($chars, $c, 3);
                                $c    += 2;
                                break;

                            case ($ord_chars_c & 0xf8) === 0xf0:
                                // characters U-00010000 - U-001FFFFF, mask 11110XXX
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= sub_str8($chars, $c, 4);
                                $c    += 3;
                                break;

                            case ($ord_chars_c & 0xfc) === 0xf8:
                                // characters U-00200000 - U-03FFFFFF, mask 111110XX
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= sub_str8($chars, $c, 5);
                                $c    += 4;
                                break;

                            case ($ord_chars_c & 0xfe) === 0xfc:
                                // characters U-04000000 - U-7FFFFFFF, mask 1111110X
                                // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                                $utf8 .= sub_str8($chars, $c, 6);
                                $c    += 5;
                                break;
                        }
                    }

                    return $utf8;
                }

                if (preg_match('/^\[.*\]$/s', $content) || preg_match('/^\{.*\}$/s', $content)) {
                    // array, or object notation

                    if ($content[0] === "[") {
                        $stk = [JSON_IN_ARR];
                        $arr = [];
                    } else {
                        $stk = [JSON_IN_OBJ];
                        if ($dataType & JSON_LOOSE_TYPE) {
                            $obj = [];
                        } else {
                            $obj = new stdClass();
                        }
                    }

                    $stk[] = ["what" => JSON_SLICE, "where" => 0, "delim" => false];

                    $chars = sub_str8($content, 1, -1);
                    $chars = tidy_content($chars);

                    if ($chars === "") {
                        if (reset($stk) === JSON_IN_ARR) {
                            return $arr;
                        }

                        return $obj;
                    }

                    $lengthChars    = str_len8($chars);
                    $implementArray = [JSON_SLICE, JSON_IN_ARR, JSON_IN_OBJ];

                    for ($c = 0; $c <= $lengthChars; ++$c) {
                        $top              = end($stk);
                        $substr_chars_c_2 = sub_str8($chars, $c, 2);

                        if ($c === $lengthChars || ($chars[$c] === "," && $top["what"] === 1)) {
                            // found a comma that is not inside a string, array, etc.,
                            // OR we've reached the end of the character list
                            $slice = sub_str8($chars, $top["where"], $c - $top["where"]);
                            $stk[] = ["what" => JSON_SLICE, "where" => $c + 1, "delim" => false];
                            //print("Found split at {$c}: "
                            //.$this->substr8($chars, $top['where'],
                            // (1 + $c - $top['where']))."\n");

                            if (reset($stk) === JSON_IN_ARR) {
                                // we are in an array, so just push an element onto the stack
                                $arr[] = decode_from_json($slice, $dataType);
                            } elseif (reset($stk) === JSON_IN_OBJ) {
                                // we are in an object, so figure
                                // out the property name and set an
                                // element in an associative array,
                                // for now
                                $parts = [];

                                if (preg_match('/^\s*(["\'].*[^\\\]["\'])\s*:/Uis', $slice, $parts)) {
                                    // "name":value pair
                                    $key = decode_from_json($parts[1], $dataType);
                                    $val = decode_from_json(trim(substr($slice, strlen($parts[0])), ", \t\n\r\0\x0B"), $dataType);
                                    if ($dataType & JSON_LOOSE_TYPE) {
                                        $obj[$key] = $val;
                                    } else {
                                        $obj->$key = $val;
                                    }
                                } elseif (preg_match("/^\s*(\w+)\s*:/Uis", $slice, $parts)) {
                                    // name:value pair, where name is unquoted
                                    $key = $parts[1];
                                    $val = decode_from_json(trim(substr($slice, strlen($parts[0])), ", \t\n\r\0\x0B"), $dataType);

                                    if ($dataType & JSON_LOOSE_TYPE) {
                                        $obj[$key] = $val;
                                    } else {
                                        $obj->$key = $val;
                                    }
                                }
                            }
                        } elseif (($chars[$c] === '"' || $chars[$c] === "'") && $top["what"] !== JSON_IN_STR) {
                            // found a quote, and we are not inside a string
                            $stk[] = ["what" => JSON_IN_STR, "where" => $c, "delim" => $chars[$c]];
                        //print("Found start of string at {$c}\n");
                        } elseif (
                            $chars[$c] === $top["delim"] &&
                            $top["what"] === JSON_IN_STR &&
                            (str_len8(sub_str8($chars, 0, $c)) - str_len8(rtrim(sub_str8($chars, 0, $c), "\\"))) % 2 !== 1
                        ) {
                            // found a quote, we're in a string, and it's not escaped
                            // we know that it's not escaped because there is _not_ an
                            // odd number of backslashes at the end of the string so far
                            array_pop($stk);
                        //print("Found end of string at {$c}: "
                            //.$this->substr8($chars, $top['where'],
                            // (1 + 1 + $c - $top['where']))."\n");
                        } elseif ($chars[$c] === "[" && in_array($top["what"], $implementArray, true)) {
                            // found a left-bracket, and we are in an array, object, or slice
                            $stk[] = ["what" => JSON_IN_ARR, "where" => $c, "delim" => false];
                        //print("Found start of array at {$c}\n");
                        } elseif ($chars[$c] === "]" && $top["what"] === JSON_IN_ARR) {
                            // found a right-bracket, and we're in an array
                            array_pop($stk);
                        //print("Found end of array at {$c}: "
                            //.$this->substr8($chars, $top['where'],
                            // (1 + $c - $top['where']))."\n");
                        } elseif ($chars[$c] === "{" && in_array($top["what"], $implementArray, true)) {
                            // found a left-brace, and we are in an array, object, or slice
                            $stk[] = ["what" => JSON_IN_OBJ, "where" => $c, "delim" => false];
                        //print("Found start of object at {$c}\n");
                        } elseif ($chars[$c] === "}" && $top["what"] === JSON_IN_OBJ) {
                            // found a right-brace, and we're in an object
                            array_pop($stk);
                        //print("Found end of object at {$c}: "
                            //.$this->substr8($chars, $top['where'],
                            // (1 + $c - $top['where']))."\n");
                        } elseif ($substr_chars_c_2 === "/*" && in_array($top["what"], $implementArray, true)) {
                            // found a comment start, and we are in an array, object, or slice
                            $stk[] = ["what" => JSON_IN_CMT, "where" => $c, "delim" => false];
                            $c++;
                        //print("Found start of comment at {$c}\n");
                        } elseif ($substr_chars_c_2 === "*/" && $top["what"] === JSON_IN_CMT) {
                            // found a comment end, and we're in one now
                            array_pop($stk);
                            $c++;

                            for ($i = $top["where"]; $i <= $c; ++$i) {
                                $chars = substr_replace($chars, " ", $i, 1);
                            }

                            //print("Found end of comment at {$c}: "
                            //.$this->substr8($chars, $top['where'],
                            // (1 + $c - $top['where']))."\n");
                        }
                    }

//                pp('all args');
//                pp(func_get_args());
//                pp('all strk');
//                pp($stk);
//                pp('num stk');
//                pp(reset($stk));

                    if (reset($stk) === JSON_IN_ARR) {
                        return $arr;
                    }

                    if (reset($stk) === JSON_IN_OBJ) {
                        return $obj;
                    }
                }
        }

        return "";
    }
