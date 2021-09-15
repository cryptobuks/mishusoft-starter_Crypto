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

            $result = [];
            foreach ($array as $key => $value) {
                if (is_bool($value)) {
                    $impValue = ($value === true) ? "true" : "false";
                    $result[] = sprintf('"%1$s" : %2$s', $key, $impValue);
                }

                if (is_string($value)) {
                    $result[] = sprintf('"%1$s" : "%2$s"', $key, $value);
                }

                if (is_array($value)) {
                    $result[] = sprintf('"%1$s" : %2$s', $key, self::arrayToJson($value));
                }
            }


            return sprintf('{ %1$s }', implode(', ', $result));
        }
        return [];
    }

    private static function map(array $array): array
    {
        return array_map(static function ($val) {
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
