<?php

namespace Mishusoft\Utility;

//add array to json
//add array to object
//add object to array
//add object to json
//add csv to array
//add csv to json
//add csv to object

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
        return self::withLocale(function () use ($content) {
            //Debug::preOutput(Inflect::utf162utf8($json));
            Debug::preOutput($content);
        });
    }

    private static function toJsonBuilder(mixed $content) : mixed
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
                $strlen_var = Inflect::strlen8($content);

                /*
                 * Iterate over every character in the string,
                 * escaping with a slash or encoding to UTF-8 where necessary
                 */
                for ($c = 0; $c < $strlen_var; ++$c) {

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
                            if ($c+1 >= $strlen_var) {
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
                            if ($c+2 >= $strlen_var) {
                                $c += 2;
                                $ascii .= '?';
                                break;
                            }
                            // characters U-00000800 - U-0000FFFF, mask 1110XXXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c,
                                @ord($content[$c + 1]),
                                @ord($content[$c + 2]));
                            $c += 2;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xF8) === 0xF0):
                            if ($c+3 >= $strlen_var) {
                                $c += 3;
                                $ascii .= '?';
                                break;
                            }
                            // characters U-00010000 - U-001FFFFF, mask 11110XXX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c,
                                ord($content[$c + 1]),
                                ord($content[$c + 2]),
                                ord($content[$c + 3]));
                            $c += 3;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xFC) === 0xF8):
                            // characters U-00200000 - U-03FFFFFF, mask 111110XX
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            if ($c+4 >= $strlen_var) {
                                $c += 4;
                                $ascii .= '?';
                                break;
                            }
                            $char = pack('C*', $ord_var_c,
                                ord($content[$c + 1]),
                                ord($content[$c + 2]),
                                ord($content[$c + 3]),
                                ord($content[$c + 4]));
                            $c += 4;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;

                        case (($ord_var_c & 0xFE) === 0xFC):
                            if ($c+5 >= $strlen_var) {
                                $c += 5;
                                $ascii .= '?';
                                break;
                            }
                            // characters U-04000000 - U-7FFFFFFF, mask 1111110X
                            // see http://www.cl.cam.ac.uk/~mgk25/unicode.html#utf-8
                            $char = pack('C*', $ord_var_c,
                                ord($content{$c + 1}),
                                ord($content{$c + 2}),
                                ord($content{$c + 3}),
                                ord($content{$c + 4}),
                                ord($content{$c + 5}));
                            $c += 5;
                            $utf16 = Inflect::utf82utf16($char);
                            $ascii .= sprintf('\u%04s', bin2hex($utf16));
                            break;
                    }
                }
                return  '"'.$ascii.'"';

            case 'array':
                /*
                 * As per JSON spec if any array key is not an integer
                 * we must treat the the whole array as an object. We
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
                if (is_array($content) && count($content) && (array_keys($content) !== range(0, sizeof($content) - 1))) {
                    $properties = array_map(array($this, 'name_value'),
                        array_keys($content),
                        array_values($content));

                    foreach($properties as $property) {
                        if(Services_JSON::isError($property)) {
                            return $property;
                        }
                    }

                    return '{' . implode(',', $properties) . '}';
                }

                // treat it like a regular array
                $elements = array_map(array($this, '_encode'), $content);

                foreach($elements as $element) {
                    if(Services_JSON::isError($element)) {
                        return $element;
                    }
                }

                return '[' . join(',', $elements) . ']';

            case 'object':

                // support toJSON methods.
                if (($this->use & SERVICES_JSON_USE_TO_JSON) && method_exists($content, 'toJSON')) {
                    // this may end up allowing unlimited recursion
                    // so we check the return value to make sure it's not got the same method.
                    $recode = $var->toJSON();

                    if (method_exists($recode, 'toJSON')) {

                        return ($this->use & SERVICES_JSON_SUPPRESS_ERRORS)
                            ? 'null'
                            : new Services_JSON_Error(class_name($var).
                                " toJSON returned an object with a toJSON method.");

                    }

                    return $this->_encode( $recode );
                }

                $vars = get_object_vars($content);

                $properties = array_map(array($this, 'name_value'),
                    array_keys($vars),
                    array_values($vars));

                foreach($properties as $property) {
                    if(Services_JSON::isError($property)) {
                        return $property;
                    }
                }

                return '{' . join(',', $properties) . '}';

            default:
                return ($this->use & SERVICES_JSON_SUPPRESS_ERRORS)
                    ? 'null'
                    : new Services_JSON_Error(gettype($content)." can not be encoded as JSON string");
        }
    }
    /**
     * @param array $array
     * @return string|array
     */
    public static function arrayToJson(array $array): string|array
    {
        if (count($array) > 0) {
            if (self::areAllKeysInteger($array) === true) {
                return sprintf('[ %1$s ]', implode(', ', self::map($array)));
            }
            return self::arrayToJsonBuilder($array);
        }
        return [];
    }

    private static function arrayToJsonBuilder(array $array): string|array
    {
        $result = [];
        foreach ($array as $key => $value) {
            Debug::preOutput(gettype($value));
            Debug::preOutput($value);
            //check if boolean
            if (is_bool($value)) {
                $result[] = sprintf('"%1$s" : %2$s', $key, ($value === true) ? "true" : "false");
            }
            //check if null
            if (is_null($value)) {
                $result[] = sprintf('"%1$s" : %2$s', $key, 'null');
            }
            //check if integer
            if (is_int($value) || is_float($value)) {
                $result[] = sprintf('"%1$s" : %2$s', $key, $value);
            }
            //check if string
            if (is_string($value)) {
                $result[] = sprintf('"%1$s" : "%2$s"', self::addSlash($key), self::addSlash($value));
            }
            //check if array
            if (is_array($value) || is_object($value)) {
                $result[] = sprintf('"%1$s" : %2$s', $key, self::arrayToJson($value));
            }
        }


        return sprintf('{ %1$s }', implode(', ', $result));
    }

    private static function areAllKeysInteger(array $array):bool
    {
        if ([] === $array) {
            return false;
        }
        return array_keys($array) === range(0, count($array) - 1);
    }

    private static function addSlash(string $variable): string
    {
        return str_replace('/', '\/', $variable);
    }

    private static function map(array $array): array
    {
        return array_map(static function ($value) {
            Debug::preOutput(gettype($value));
            Debug::preOutput($value);
            if (is_int($value)) {
                return $value;
            }

            if (is_null($value)) {
                return 'null';
            }

            if (is_bool($value)) {
                return sprintf('%1$s', ($value === true) ? "true" : "false");
            }

            if (is_array($value) || is_object($value)) {
                return self::arrayToJsonBuilder($value);
            }

            return sprintf('"%1$s"', $value);
        }, $array);
    }

    //end of make array to json

    //start of make json to array
    public static function jsonToArray(string $json):array
    {
//        Debug::preOutput(Inflect::utf162utf8($json));
        self::withLocale(function () use ($json) {
            //Debug::preOutput(Inflect::utf162utf8($json));
            Debug::preOutput($json);
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
