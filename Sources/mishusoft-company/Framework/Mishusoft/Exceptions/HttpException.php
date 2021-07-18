<?php


namespace Mishusoft\Exceptions;

use Exception;

class HttpException extends Exception
{
    public $innerException;
}

