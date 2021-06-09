<?php


namespace Mishusoft\Framework\Chipsets\Http;


abstract class UserAgents
{


    public function __construct()
    {

    }//end __construct()


    abstract public function list() : array;


    abstract public function get(string $keyword) : array;


}//end class
