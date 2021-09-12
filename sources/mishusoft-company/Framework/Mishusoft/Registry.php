<?php

namespace Mishusoft;

/**
 * @method static Browser()
 * @method static RequestQualifiedAPI()
 */
class Registry extends Singleton
{
    /**
     * @var array
     */
    private array $data;

    public function __get(string $name)
    {
        return self::makeCall($this, $name);
    }//end __get()


    public function __set(string $name, $value)
    {
        $this->data[$name] = $value;
    }//end __set()

    public function __isset(string $name)
    {
        return isset($this->data[$name]);
    }

    public function __unset(string $name)
    {
        unset($this->data[$name]);
    }

    public function __call(string $name, array $arguments)
    {
        //https://www.php.net/manual/en/language.oop5.overloading.php
        return self::makeCall($this, $name, $arguments);
    }


    public static function __callStatic(string $name, array $arguments)
    {
        //https://www.php.net/manual/en/language.oop5.overloading.php
        return self::makeCall(self::getInstance(), $name, $arguments);
    }

    private static function removePrefix(string $name):string
    {
        if (str_starts_with($name, 'get')) {
            return lcfirst(substr($name, 3));
        }

        return lcfirst($name);
    }

    private static function makeCall(object $storage, string $name, array $arguments = [])
    {
        $name = self::removePrefix($name);

        if (isset($storage->data[$name]) === true) {
            if (count($arguments) > 0) {
                return $storage->data[$name]($arguments);
            }
            return $storage->data[$name];
        }

        $trace = debug_backtrace();
        trigger_error(
            'Undefined property via __get(): ' . $name . '() in '
            . $trace[0]['file'] . ' on line ' . $trace[0]['line'],
            E_USER_NOTICE
        );
        return null;
    }

    public function __destruct()
    {
    }//end __destruct()
}//end class
