<?php declare(strict_types=1);


namespace Mishusoft\Utility;

use stdClass;

class ArrayCollection
{
    /**
     * @param array $array
     * @return object
     * @throws \JsonException
     */
    public static function arrayToObject(array $array): object
    {
        return json_decode(json_encode($array, JSON_THROW_ON_ERROR), false, 512, JSON_THROW_ON_ERROR);
    }


    /**
     * @param array $haystack
     * @param string $key
     * @return mixed
     */
    public static function value(array $haystack, string $key): mixed
    {
        if (array_key_exists($key, $haystack)) {
            return $haystack[$key];
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
