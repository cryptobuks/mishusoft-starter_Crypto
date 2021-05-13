<?php

namespace Mishusoft\Framework\Drivers;


use Mishusoft\Framework\Chipsets\Http\ClientRequest;

/**
 * @property Database|false|mixed db
 * @property ACL|false|mixed acl
 * @property false|mixed|ClientRequest request
 */
class Registry{
    /**
     * @var Registry
     */
    private static $instance;
    private array $data;

    /*Instance Class*/
    private function __construct(){}

    /*Selection*/
    public static function getInstance()
    {
        if (!self::$instance instanceof self) {
            self::$instance = new Registry();
        }

        return self::$instance;
    }

    public function __get($name) {
        if (isset($this->data[$name])) {
            return $this->data[$name];
        }
        return false;
    }

    public function __set($name, $value) {
        $this->data[$name] = $value;
    }

    function __destruct()
    {

    }
}
