<?php

namespace Mishusoft\Framework\Drivers;


use Mishusoft\Framework\Chipsets\Http\ClientRequest;

class Registry
{

    /**
     * @var Registry
     */
    private static $instance;

    /**
     * @var array
     */
    private array $data;

    // Instance Class
    /**
     * @var false|ClientRequest|mixed
     */
    private mixed $request;
    /**
     * @var false|Acl|mixed
     */
    private mixed $acl;
    /**
     * @var false|mixed
     */
    private mixed $db;

    private function __construct()
    {

    }//end __construct()


    /**
     * @return self
     */
    public static function getInstance(): self
    {
        if ((self::$instance instanceof self) === false) {
            self::$instance = new self();
        }

        return self::$instance;

    }//end getInstance()


    public function __get($name)
    {
        if (isset($this->data[$name]) === true) {
            return $this->data[$name];
        }

        return false;

    }//end __get()


    public function __set($name, $value)
    {
        $this->data[$name] = $value;

    }//end __set()


    public function __destruct()
    {

    }//end __destruct()


}//end class
