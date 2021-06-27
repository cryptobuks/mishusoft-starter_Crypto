<?php


namespace Mishusoft\Framework\Chipsets\Exceptions;

use Exception;

class HttpException extends Exception
{
    public $innerException;
}

