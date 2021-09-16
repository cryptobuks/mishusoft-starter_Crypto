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
