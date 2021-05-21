<?php

namespace Mishusoft\Framework\Chipsets;

use Exception;
use Mishusoft\Framework\Chipsets\System\Logger;
use Mishusoft\Framework\Chipsets\Utility\Number;

class RuntimeErrors extends Exception
{

    /**
     * @var integer
     */
    protected int $severity;

    /**
     * @var string
     */
    private string $errTrace;


    /**
     * RuntimeErrors constructor.
     *
     * @param string  $message
     * @param integer $code
     * @param integer $severity
     * @param string  $filename
     * @param integer $lineno
     * @param string  $trace
     */
    public function __construct(string $message='', int $code=0, int $severity=1, string $filename=__FILE__, int $lineno=__LINE__, string $trace='')
    {
        parent::__construct();
        $this->message  = $message;
        $this->code     = $code;
        $this->severity = $severity;
        $this->file     = $filename;
        $this->line     = $lineno;
        $this->errTrace = $trace;

        echo '<br/><article style="margin: 0;padding: 5px;border: 1px solid lightgray;border-radius: 5px;background-color: #f4f4f4;">';
        echo '<section style="line-height: 1.5;margin: -5px -5px 10px -5px;box-shadow: inset 0 -3em 3em rgba(0,0,0,.1),.3em .3em 1em rgba(0,0,0,.3);padding: 8px 5px;text-align: justify;">';
        echo '<div style="font-size: 20px;font-weight: bold; border-bottom: 1px solid lightgray;padding-bottom: 10px;text-transform: uppercase;">';
        echo self::codeAsString($this->getCode());
        echo '</div>';
        echo '<div style="font-size: 15px;font-weight:normal;padding: 5px 2px;">';
        echo $this->message.' from '.$this->file.' on line '.$this->line;
        //Logger::write($this->codeAsString($this->getCode())
        //." [$this->code] : $this->message from $this->file on line $this->line.");
        echo '</div>';
        echo '</section>';
        echo 'Call Stack<br/><pre>';
        if (is_string($trace) === true) {
            $this->beautifyCallStack($this->errTrace);
        } else {
            $this->beautifyCallStack($this->getTraceAsString());
        }

        echo '</pre></article>';

    }//end __construct()


    /**
     * @param  int $code
     * @return false|string
     */
    public static function codeAsString(int $code): bool|string
    {
        /*
         * Error Levels in PHP
         * Usually, whenever the PHP engine encounters a problem that prevents a script from running properly it generate an error message. There are sixteen different error levels and each level is represented by an integer value and an associated constant. Here's a list of error levels:
         * Error Level     Value     Description
         * E_ERROR                 1       A fatal run-time error, that can't be recovered from. The execution of the script is stopped immediately.
         * E_WARNING             2       A run-time warning. It is non-fatal and most errors tend to fall into this category. The execution of the script is not stopped.
         * E_PARSE                 4         The compile-time parse error. Parse errors should only be generated by the parser.
         * E_NOTICE             8         A run-time notice indicating that the script encountered something that could possibly an error, although the situation could also occur when running a script normally.
         * E_CORE_ERROR         16         A fatal error that occur during the PHP's engine initial startup. This is like an E_ERROR, except it is generated by the core of PHP.
         * E_CORE_WARNING         32         A non-fatal error that occur during the PHP's engine initial startup. This is like an E_WARNING, except it is generated by the core of PHP.
         * E_COMPILE_ERROR         64         A fatal error that occur while the script was being compiled. This is like an E_ERROR, except it is generated by the Zend Scripting Engine.
         * E_COMPILE_WARNING     128     A non-fatal error occur while the script was being compiled. This is like an E_WARNING, except it is generated by the Zend Scripting Engine.
         * E_USER_ERROR         256     A fatal user-generated error message. This is like an E_ERROR, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
         * E_USER_WARNING         512     A non-fatal user-generated warning message. This is like an E_WARNING, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine
         * E_USER_NOTICE         1024     A user-generated notice message. This is like an E_NOTICE, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
         * E_STRICT             2048     Not strictly an error, but triggered whenever PHP encounters code that could lead to problems or forward incompatibilities
         * E_RECOVERABLE_ERROR     4096     A catchable fatal error. Although the error was fatal, it did not leave the PHP engine in an unstable state. If the error is not caught by a user defined error handler (see set_error_handler()), the application aborts as it was an E_ERROR.
         * E_DEPRECATED         8192     A run-time notice indicating that the code will not work in future versions of PHP
         * E_USER_DEPRECATED     16384     A user-generated warning message. This is like an E_DEPRECATED, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
         * _ALL                 32767     All errors and warnings, except of level E_STRICT prior to PHP 5.4.0.
         */

        /*
         *     // define an assoc array of error string
            // in reality the only entries we should
            // consider are E_WARNING, E_NOTICE, E_USER_ERROR,
            // E_USER_WARNING and E_USER_NOTICE
            $errortype = array (
                E_ERROR              => 'Error',
                E_WARNING            => 'Warning',
                E_PARSE              => 'Parsing Error',
                E_NOTICE             => 'Notice',
                E_CORE_ERROR         => 'Core Error',
                E_CORE_WARNING       => 'Core Warning',
                E_COMPILE_ERROR      => 'Compile Error',
                E_COMPILE_WARNING    => 'Compile Warning',
                E_USER_ERROR         => 'User Error',
                E_USER_WARNING       => 'User Warning',
                E_USER_NOTICE        => 'User Notice',
                E_STRICT             => 'Runtime Notice',
                E_RECOVERABLE_ERROR  => 'Catchable Fatal Error'
                );
         * */
        // end match
        return match ($code) {
            1 => 'Critical Error',
            2 => 'Warning',
            4 => 'Parse Error',
            8 => 'Notice',
            16 => 'Fatal Error',
            32 => 'Core Warning',
            64 => 'Compile Error',
            128 => 'Compile Warning',
            256 => 'User Error',
            512 => 'User Warning',
            1024 => 'User Notice',
            2048 => 'Runtime Notice',
            4096 => 'Catchable Fatal Error',
            8192 => 'Identification',
            16384 => 'User Identification',
            default => 'Unexpected Error',
        };

    }//end codeAsString()


    /**
     * @param string $trace
     */
    private function beautifyCallStack(string $trace): void
    {
        $traceArray = array_reverse(explode("\n", $trace));
        foreach ($traceArray as $key => $value) {
            $result = preg_replace('/[#]+/', '', $value);
            $result = preg_filter('/[0-9]+/', Number::next($key).')', $result);
            echo "$result<br/>".PHP_EOL;
        }

    }//end beautifyCallStack()


    /**
     * Make writeable string
     *
     * @param  object $exception
     * @return string
     */
    public static function toWriteable(object $exception): string
    {
        $output  = self::codeAsString($exception->getCode());
        $output .= ' ['.$exception->getCode().'] : ';
        $output .= $exception->getMessage().' from ';
        $output .= $exception->getFile().' on line '.$exception->getLine().'.';
        return $output;

    }//end toWriteable()


    /**
     *
     */
    public function __destruct()
    {

    }//end __destruct()


}//end class
