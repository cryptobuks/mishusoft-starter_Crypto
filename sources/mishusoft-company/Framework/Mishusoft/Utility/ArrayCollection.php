<?php declare(strict_types=1);


namespace Mishusoft\Utility;

class ArrayCollection
{
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
        if ((count($array) > 0) && count($excludes) > 0) {
            foreach ($excludes as $exclude) {
                if (array_key_exists($exclude, $array)) {
                    unset($array[$exclude]);
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
    public static function columnExt(array $array, $columnKey, $indexKey = null): array
    {
        $result = [];
        foreach ($array as $subarray => $value) {
            if (array_key_exists($columnKey, $value)) {
                $val = $array[$subarray][$columnKey];
            } elseif ($columnKey === null) {
                $val = $value;
            } else {
                continue;
            }

            if ($indexKey === null) {
                $result[] = $val;
            } elseif ($indexKey === -1 || array_key_exists($indexKey, $value)) {
                $result[($indexKey === -1)?$subarray:$array[$subarray][$indexKey]] = $val;
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
    public static function arrayColumnMulti(array $input, array $column_keys): array
    {
        $result = [];
        $column_keys = array_flip($column_keys);
        foreach ($input as $key => $el) {
            $result[$key] = array_intersect_key($el, $column_keys);
        }
        return $result;
    }
}
