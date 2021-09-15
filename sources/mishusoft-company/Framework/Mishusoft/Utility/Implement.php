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
            $result = '';
            $isInt = array_reduce(array_keys($array), static function ($valid, $item) {
                return $valid && is_int($item);
            });
            Debug::preOutput($isInt);


            return sprintf('{%1$s}', $result);
        }
        return [];
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
