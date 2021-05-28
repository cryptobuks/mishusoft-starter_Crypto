<?php


namespace Mishusoft\Framework\Chipsets;


class DbException extends RuntimeErrors
{


    /**
     * Constructs the exception
     *
     * @link  https://php.net/manual/en/errorexception.construct.php
     * @param string  $message  [optional] The Exception message to throw.
     * @param integer $code     [optional] The Exception code.
     * @param integer $severity [optional] The severity level of the exception.
     * @param string  $filename [optional] The filename where the exception is thrown.
     * @param integer $lineno   [optional] The line number where the exception is thrown.
     * @param string  $trace
     */
    public function __construct(string $message='', string $filename=__FILE__, int $lineno=__LINE__, int $code=0, int $severity=1, string $trace='')
    {
        parent::__construct($message, $code, $severity, $filename, $lineno, $trace);

    }//end __construct()


}//end class
