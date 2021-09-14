<?php declare(strict_types=1);


namespace Mishusoft\Utility;

use stdClass;

class ArrayCollection
{
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

    /**
     * @param object $object
     * @return array
     */
    public static function objectToArray(object $object): array
    {
        $reflectionClass = new \ReflectionClass(get_class($object));
        $array = array();
        foreach ($reflectionClass->getProperties() as $property) {
            $property->setAccessible(true);
            if (is_object($property->getValue($object))) {
                $array[$property->getName()] = self::objectToArray($property->getValue($object));
            } else {
                $array[$property->getName()] = $property->getValue($object);
                $property->setAccessible(false);
            }
            //print_r($property->getValue($object), false);
        }
        return $array;
    }

    /**
     * @param array $haystack
     * @param string $key
     * @return string|array|int
     */
    public static function value(array $haystack, string $key): string|array|int
    {
        $results = '';
        $original = $haystack;
        if (strpos($key, '.')) {
            $parts = explode('.', $key);
            $results = (array)$results;
            $temp = $original;

            // clean up before each pass
            while (count($parts) > 0) {
                $part = array_shift($parts);

                if (array_key_exists($part, $temp)) {
                    if (is_array($temp[$part])) {
                        $temp = $temp[$part];
                    } else {
                        $results = $temp[$part];
                    }
                }
            }
            if (is_array($results) === true) {
                $results = $temp;
            }
        }

        if (array_key_exists($key, $haystack) === true) {
            $results = $haystack[$key];
        }

        return $results;
    }


    /**
     * @param array $array
     * @param array $excludes
     * @return array
     */
    public static function cleanArray(array $array, array $excludes): array
    {
        if (count($array) > 0) {
            if (count($excludes) > 0) {
                foreach ($excludes as $exclude) {
                    if (array_key_exists($exclude, $array)) {
                        unset($array[$exclude]);
                    }
                }
            }
        }
        return $array;
    }

    /**
     * Returns values for $needle key in a multidimensional array, recursively.
     * More info and example: https://github.com/NinoSkopac/array_column_recursive
     *
     * @param array $haystack
     * @param string $needle
     * @return array
     */
    public static function columnRecursive(array $haystack, string $needle): array
    {
        $found = [];
        array_walk_recursive($haystack, static function ($value, $key) use (&$found, $needle) {
            if ($key === $needle) {
                $found[] = $value;
            }
        });

        return $found;
    }

    /**
     * @param array $array
     * @param $columnkey
     * @param null $indexkey
     * @return array
     */
    public static function columnExt(array $array, $columnkey, $indexkey = null): array
    {
        $result = [];
        foreach ($array as $subarray => $value) {
            if (array_key_exists($columnkey, $value)) {
                $val = $array[$subarray][$columnkey];
            } elseif ($columnkey === null) {
                $val = $value;
            } else {
                continue;
            }

            if ($indexkey === null) {
                $result[] = $val;
            } elseif ($indexkey === -1 || array_key_exists($indexkey, $value)) {
                $result[($indexkey === -1)?$subarray:$array[$subarray][$indexkey]] = $val;
            }
        }
        return $result;
    }

    /**
     * @param array $keys
     * @param array $values
     * @return array
     */
    public static function combine(array $keys, array $values):array
    {
        return array_combine($keys, $values);
    }

    /**
     * @param array $array
     * @return array
     */
    public static function countValues(array $array): array
    {
        return array_count_values($array);
    }

    /**
     * @param int $limit
     * @param array $haystack
     * @return array
     */
    public static function getValues(int $limit, array $haystack): array
    {
        $result = [];

        if (array_key_exists($limit, $haystack)) {
            foreach ($haystack as $id => $item) {
                if ($id <= $limit) {
                    $result[] = $item;
                }
            }
        }
        return $result;
    }


    public static function getArrayByKey(string $key, array $haystack, bool $case_sensitive = true): array
    {
        $result = [];

        if (count($haystack) > 0) {
            foreach ($haystack as $originalKey => $value) {
                if ($case_sensitive === true) {
                    if ($originalKey === $key) {
                        $result[$originalKey] = $value;
                    }
                } else {
                    $originalKeyLower = Inflect::lower($originalKey);
                    $keyLower = Inflect::lower($key);
                    if ($originalKeyLower === $keyLower) {
                        $result[$originalKey] = $value;
                    }
                }
            }
        }
        return $result;
    }

    /**
     * @param array $input
     * @param array $column_keys
     * @return array
     */
    public static function array_column_multi(array $input, array $column_keys): array
    {
        $result = [];
        $column_keys = array_flip($column_keys);
        foreach ($input as $key => $el) {
            $result[$key] = array_intersect_key($el, $column_keys);
        }
        return $result;
    }
}
