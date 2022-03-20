<?php

    /**
     * The loader of array functions for mishusoft application
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
     * @param array $array
     * @param       $on
     * @param int   $order
     *
     * @return array
     */
    function array_sort_by_column(array $array, $on, int $order = SORT_ASC): array
    {
        $new_array      = [];
        $sortable_array = [];

        if (count($array) > 0) {
            foreach ($array as $k => $v) {
                if (is_array($v)) {
                    foreach ($v as $k2 => $v2) {
                        if ($k2 === $on) {
                            $sortable_array[$k] = $v2;
                        }
                    }
                } else {
                    $sortable_array[$k] = $v;
                }
            }

            switch ($order) {
                case SORT_ASC:
                    asort($sortable_array);
                    break;
                case SORT_DESC:
                    arsort($sortable_array);
                    break;
            }

            foreach ($sortable_array as $k => $v) {
                $new_array[$k] = $array[$k];
            }
        }

        return $new_array;
    }


    /**
     * Sort array with flag
     *
     * @param array $array
     * @param int   $flag
     *
     * @return array
     */
    function array_sort_asc(array $array, int $flag = SORT_ASC): array
    {
        //sort configuration data
        array_multisort($array, $flag);
        ksort($array, $flag);

        return $array;
    }

    /**
     * Convert array to object
     *
     * @param array  $array     Valid countable array
     * @param string $classname Default class name
     *
     * @return object Converted array object
     */
    function array_to_object(array $array, string $classname = "stdClass"): object
    {
        $object = new $classname();
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                //convert the array to an object
                $value = array_to_object($value, $classname);
            }
            //Add the value to the object
            $object->{$key} = $value;
        }
        return $object;
    }

    /**
     * @param object $object
     *
     * @return array
     */
    function object_to_array(object $object): array
    {
        $reflectionClass = new ReflectionClass(get_class($object));
        $array           = [];
        foreach ($reflectionClass->getProperties() as $property) {
            $property->setAccessible(true);
            if (is_object($property->getValue($object))) {
                $array[$property->getName()] = object_to_array($property->getValue($object));
            } else {
                $array[$property->getName()] = $property->getValue($object);
                $property->setAccessible(false);
            }
        }
        return $array;
    }


    /**
     * @param mixed $haystack
     * @param mixed $key
     * @param bool  $strict
     *
     * @return mixed
     */
    function array_value(mixed $haystack, mixed $key, bool $strict = false): mixed
    {
        $original = $haystack;
        if ($strict === false && strpos($key, '.')) {
            $results = [];
            $parts   = explode('.', $key);
            $temp    = $original;

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

            return $results;
        }

        if (array_key_exists($key, $haystack)) {
            return $haystack[$key];
        }

        return false;
    }

// print_r(array_value(['test'=>['ice'=>['ff','ff'],'ff'],'pop'], 'test.ice'), false);


    /**
     * @param array $array
     * @param array $excludes
     *
     * @return array
     */
    function array_clean(array $array, array $excludes): array
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
     * @param array  $haystack
     * @param string $needle
     *
     * @return array
     */
    function column_recursive(array $haystack, string $needle): array
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
     * @param       $columnKey
     * @param null  $indexKey
     *
     * @return array
     */
    function column_ext(array $array, $columnKey, $indexKey = null): array
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
                $result[($indexKey === -1) ? $subarray : $array[$subarray][$indexKey]] = $val;
            }
        }
        return $result;
    }

    /**
     * @param array $keys
     * @param array $values
     *
     * @return array
     */
    function combine(array $keys, array $values): array
    {
        return array_combine($keys, $values);
    }

    /**
     * @param array $array
     *
     * @return array
     */
    function count_array_values(array $array): array
    {
        return array_count_values($array);
    }

    /**
     * @param int   $limit
     * @param array $haystack
     *
     * @return array
     */
    function get_array_values(int $limit, array $haystack): array
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


    /**
     * @param string $key
     * @param array  $haystack
     * @param bool   $case_sensitive
     *
     * @return array
     */
    function get_array_by_key(string $key, array $haystack, bool $case_sensitive = true): array
    {
        $result = [];

        if (count($haystack) > 0) {
            foreach ($haystack as $originalKey => $value) {
                if ($case_sensitive === true) {
                    if ($originalKey === $key) {
                        $result[$originalKey] = $value;
                    }
                } else {
                    $originalKeyLower = lower($originalKey);
                    $keyLower         = lower($key);
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
     *
     * @return array
     */
    function array_column_multi(array $input, array $column_keys): array
    {
        $result      = [];
        $column_keys = array_flip($column_keys);
        foreach ($input as $key => $el) {
            $result[$key] = array_intersect_key($el, $column_keys);
        }
        return $result;
    }


    /**
     * Filter array.
     *
     * @param array $array Array data.
     *
     * @return array
     */
    function array_filter_string_key(array $array): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            if (is_string($key)) {
                $result[$key] = $value;
            }
        }

        return $result;
    }//end array_filter_string_key()

    /**
     * @param \Closure $func
     * @param array    ...$array
     *
     * @return array
     */
    function array_map_assoc(Closure $func, array ...$array): array
    {
        $rv = [];
        foreach (array_map($func, ...$array) as $value) {
            foreach ($value as $key => $val) {
                $rv[$key] = $val;
            }
        }
        return $rv;
    }


    /**
     *  echo mapped_implode(', ', $arr, ' is ');
     *
     * @see https://www.php.net/manual/en/function.implode.php
     *
     * @param string $glue
     * @param array  $array
     * @param string $symbol
     *
     * @return string
     */
    function mapped_implode(string $glue, array $array, string $symbol = '='): string
    {
        return implode(
            $glue,
            array_map(
                static function ($k, $v) use ($symbol) {
                    return sprintf(
                        '%1$s%3$s%2$s',
                        $k,
                        $v,
                        $symbol
                    );
                },
                array_keys($array),
                array_values($array)
            )
        );
    }

    /**
     * Export array to string like self
     *
     * @param mixed $expression
     * @param bool  $return
     *
     * @return string|null
     * @link https://gist.github.com/Bogdaan/ffa287f77568fcbb4cffa0082e954022
     * @link https://www.delftstack.com/howto/php/php-write-array-to-file/
     * @link https://www.php.net/manual/en/function.var-export.php#122853
     */
    function export_var(mixed $expression, bool $return = false): string|null
    {
        if (!is_array($expression)) {
            return var_export($expression, $return);
        }
        $export = var_export($expression, true);
        $export = preg_replace("/^([ ]*)(.*)/m", '$1$1$2', $export);
        $array  = preg_split("/\r\n|\n|\r/", $export);
        $array  = preg_replace(["/\s*array\s\($/", "/\)(,)?$/", "/\s=>\s$/"], [null, ']$1', ' => ['], $array);
        $export = implode(PHP_EOL, array_filter(["["] + $array));
        if ($return) {
            return $export;
        }

        echo $export;
        return '';
    }


    if (!function_exists('array_is_list')) {
        /**
         * @link  https://secure.php.net/array_is_list
         *
         * @param array $array An array
         *
         * @return bool return true if the array keys are 0 .. count($array)-1 in that order.
         * For other arrays, it returns false. For non-arrays, it throws a TypeError.
         * @since 8.1
         */
        function array_is_list(array $array): bool
        {
            return $array === [] || (array_keys($array) === range(0, count($array) - 1));
        }
    }
