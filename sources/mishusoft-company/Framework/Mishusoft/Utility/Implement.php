<?php

namespace Mishusoft\Utility;

class Implement
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
     * @param array $array
     * @return string|array
     */
    public static function arrayToJson(array $array): string|array
    {
        //[]
        //['test','test1','test2','test3'];
        //['test','test1','test2','test3'=>'test3value'];
        //['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']]
        //['test1'=>['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']],
        // 'test2'=>['test1'=>'test1value', 'test2'=>['test2key'=>'test2keyvalue']]]

        if (count($array) > 0) {
            //Debug::preOutput($array);
            //Debug::preOutput(self::everyIsInt($array));
            if (self::everyIsInt($array) === true) {
                return sprintf('[ %1$s ]', implode(', ', self::map($array)));
            }
            return self::arrayObject($array);
        }
        return [];
    }

    private static function arrayObject(array $array): string|array
    {
        $result = [];
        foreach ($array as $key => $value) {
            //Debug::preOutput(gettype($value));
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

    private static function addSlash(string $variable): string
    {
        return str_replace('/', '\/', $variable);
    }

    private static function map(array $array): array
    {
        return array_map(static function ($val) {
            if (is_int($val)) {
                return $val;
            }

            if (is_null($val)) {
                return 'null';
            }

            if (is_bool($val)) {
                return sprintf('%1$s', ($val === true) ? "true" : "false");
            }

            if (is_array($val) || is_object($val)) {
                return self::arrayObject($val);
            }

            return sprintf('"%1$s"', $val);
        }, $array);
    }

    private static function everyIsInt(array $array):bool
    {
        if (array() === $array) {
            return false;
        }
        return array_keys($array) === range(0, count($array) - 1);
    }

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

    /**
     * @param object $object
     * @return array
     */
    public static function objectToJson(object $object): array
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


    /**
     * @param object $object
     * @return array
     */
    public static function jsonToObject(object $object): array
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


    /**
     * @param object $object
     * @return array
     */
    public static function jsonToArray(object $object): array
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
