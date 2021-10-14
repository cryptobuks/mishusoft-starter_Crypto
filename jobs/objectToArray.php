<?php



//var_dump( (array) new Foo );
function dismount($object)
{
    $reflectionClass = new ReflectionClass(get_class($object));
    $array = array();
    foreach ($reflectionClass->getProperties() as $property) {
        $property->setAccessible(true);
        if (is_object($property->getValue($object))) {
            $array[$property->getName()] = dismount($property->getValue($object));
        } else {
            $array[$property->getName()] = $property->getValue($object);
            $property->setAccessible(false);
        }
        //print_r($property->getValue($object), false);
    }
    return $array;
}
