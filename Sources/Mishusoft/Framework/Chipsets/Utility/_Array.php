<?php


namespace Mishusoft\Framework\Chipsets\Utility;


use stdClass;

class _Array
{
    /**
     * @param array $array
     * @return object
     */
    public static function arrayToObject(array $array): object
    {
        return is_array($array) ? json_decode(json_encode($array)) : new stdClass();
    }


    /**
     * @param array $haystack
     * @param string $key
     * @return mixed
     */
    public static function value(array $haystack, string $key)
    {
        if (is_array($haystack)) {
            if (array_key_exists($key, $haystack)) {
                return $haystack[$key];
            }
        }
        return null;
    }


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

    public static function getValues(int $limit, array $haystack): array
    {
        $result = array();

        if (array_key_exists($limit, $haystack)) {
            foreach ($haystack as $id => $item) {
                if ($id <= $limit) {
                    array_push($result, $item);
                }
            }
        }
        return $result;
    }


    public static function getArrayByKey(string $key, array $haystack, bool $case_sensitive = true): array
    {
        $result = array();

        if (count($haystack) > 0) {
            foreach ($haystack as $originalKey => $value) {
                if ($case_sensitive === true) {
                    if ($originalKey === $key) {
                        $result = array_merge($result, array($originalKey => $value));
                    }
                } else {
                    if (_String::lower($originalKey) === _String::lower($key)) {
                        $result = array_merge($result, array($originalKey => $value));
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
        $result = array();
        $column_keys = array_flip($column_keys);
        foreach ($input as $key => $el) {
            $result[$key] = array_intersect_key($el, $column_keys);
        }
        return $result;
    }


}