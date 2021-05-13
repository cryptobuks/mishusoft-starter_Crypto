<?php


namespace Mishusoft\Framework\Interfaces\Drivers;


interface UrlHandlerInterface
{

    /**
     * @param array $prediction
     * @return mixed
     */
    public function Response(array $prediction);

}