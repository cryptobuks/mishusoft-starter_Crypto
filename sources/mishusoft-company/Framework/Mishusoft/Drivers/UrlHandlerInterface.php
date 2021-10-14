<?php


namespace Mishusoft\Drivers;


interface UrlHandlerInterface
{


    /**
     * Mandatory function to response client request.
     *
     * @param  array $prediction Array format of client http request.
     */
    public function response(array $prediction);


}//end interface
