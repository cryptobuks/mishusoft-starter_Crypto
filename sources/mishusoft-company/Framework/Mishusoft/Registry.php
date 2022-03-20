<?php

namespace Mishusoft;

use Mishusoft\Utility\Inflect;


class Registry extends Singleton
{
    /**
     * @var array
     */
    private array $data;

    public function __get(string $name)
    {
        return self::makeCall($this, $name);
    }


    public function __set(string $name, $value)
    {
        $this->data[$name] = $value;
    }

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

    private static function removePrefix(string $name): string
    {
        if (Inflect::startsWith($name, 'get')) {
            return lcfirst(substr($name, 3));
        }

        return lcfirst($name);
    }

    /**
     * @see https://www.php.net/manual/en/language.oop5.overloading.php
     *
     * @param object $storage
     * @param string $name
     * @param array $arguments
     * @return mixed|null
     */
    private static function makeCall(object $storage, string $name, array $arguments = [])
    {
        $name = self::removePrefix($name);

        if (array_key_exists($name, $storage->data)) {
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
    }
}
