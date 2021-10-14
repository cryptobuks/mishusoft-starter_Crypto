<?php

class test
{

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
            //Debug::preOutput(gettype($value));
            //Debug::preOutput($value);
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
            //Debug::preOutput(gettype($value));
            //Debug::preOutput($value);
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
}
