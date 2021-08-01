<?php


namespace Mishusoft\Exceptions;

use ErrorException;
use Mishusoft\System\Firewall;
use Mishusoft\System\Logger;

class Handler extends ErrorException
{
    private string $objectName;
    private string|array $anotherTrace;

    /**
     * Fetch error on runtime catch area.
     *
     * @param object $exception Object of exception error.
     */
    public static function fetch(object $exception): void
    {
        (new self(
            $exception->getMessage(),
            $exception->getCode(),
            //$exception->getSeverity(),
            $exception->getCode(),
            $exception->getFile(),
            $exception->getLine()
        )
        )
            ->addExtra($exception->getTrace(), (new \ReflectionClass($exception))->getShortName())
            ->display();
    }//end fetch()

    private function addExtra(string|array $trace = '', string $objectName = ''): static
    {
        $this->anotherTrace = $trace;
        $this->objectName = $objectName;

        return $this;
    }


    public function display(): void
    {
        $description = $this->hidePath(sprintf('%s from %s on line %d', $this->message, $this->file, $this->line));

        if ($this->objectName !== '') {
            $titleOfErrorMessage = $this->objectName;
        } else {
            $titleOfErrorMessage = self::codeAsString($this->getCode());
        }

        if ($this->anotherTrace !== '') {
            $stack = $this->makeBeautifulStackTrace($this->anotherTrace);
        } elseif (is_array($this->getTrace()) === true && count($this->getTrace()) > 0) {
            $stack = $this->makeBeautifulStackTrace($this->getTrace());
        } elseif ($this->getTraceAsString() !== '') {
            $stack = $this->makeBeautifulStackTrace($this->getTraceAsString());
        } else {
            $stack =  ['No trace of this error could be detected.'];
        }

        $message = ['debug'=> ['caption'=> $titleOfErrorMessage, 'description'=> $description, 'stack'=> $stack],];

        Logger::write($description, LOGGER_WRITE_STYLE_SMART, LOGGER_FLAG_TYPE_RUNTIME);
        Firewall::runtimeFailure('Service Unavailable', $message);

        exit(0);
    }


    /**
     * Make beautiful view of error call stack
     *
     * @param array|string $trace Error call stack.
     *
     */
    private function makeBeautifulStackTrace(array|string $trace): array
    {
        $traceArray = [];
        //when trace is array
        if (is_array($trace) === true && count($trace) > 0) {
            $traceArray = self::cleanTraceArray($trace);
            foreach ($traceArray as $key => $value) {
                $line = '';
                if (array_key_exists('file', $value) === true) {
                    $line .= $value['file'];
                } else {
                    $line .= '[internal function]';
                }

                if (array_key_exists('line', $value) === true) {
                    $line .= '(' . $value['line'] . ')';
                }

                $line .= ': ';

                if (array_key_exists('class', $value) === true) {
                    $line .= $value['class'];
                }

                if (array_key_exists('type', $value) === true) {
                    $line .= $value['type'];
                }

                if (array_key_exists('function', $value) === true) {
                    if (array_key_exists('args', $value) === true) {
                        $line .= $value['function'];
                        $line .= '(' . implode(',', $value['args']) . ')';
                    } else {
                        $line .= $value['function'] . '()';
                    }
                }

                $traceArray[$key] = $this->hidePath($line);
            }//end foreach
        }//end if

        //when trace is string
        if (is_string($trace) === true && $trace !== '') {
            $traceArray = self::cleanTraceArray(explode("\n", $trace));
            foreach ($traceArray as $key => $value) {
                $traceArray[$key] = $this->hidePath(preg_replace('/[#]\d+/', $key, $value));
            }//end foreach
        }//end if

        return $traceArray;
    }//end makeBeautifulStackTrace()

    /**
     * @param string $string
     * @return string
     */
    private function hidePath(string $string): string
    {
        return str_replace(RUNTIME_ROOT_PATH, 'app://', $string);
    }

    /**
     * Make writeable string
     *
     * @param object $exception Object of exception error.
     *
     * @return string Writable string.
     */
    public static function toWriteable(object $exception): string
    {
        $output = self::codeAsString($exception->getCode());
        $output .= ' [' . $exception->getCode() . '] : ';
        $output .= $exception->getMessage() . ' from ';
        $output .= $exception->getFile() . ' on line ' . $exception->getLine() . '.';
        return $output;
    }//end toWriteable()


    /**
     * Clean call trace.
     *
     * @param array $traceArray Array format of error trace.
     *
     * @return array
     */
    private static function cleanTraceArray(array $traceArray): array
    {
        foreach ($traceArray as $key => $value) {
            if (is_array($value) === true) {
                if (array_key_exists('function', $value) === true) {
                    if (str_contains($value['function'], '{closure}()') === true) {
                        unset($traceArray[$key]);
                    }
                    if (str_contains($value['function'], '{main}') === true) {
                        unset($traceArray[$key]);
                    }
                }
            } else {
                if (str_contains($value, '{closure}()') === true) {
                    unset($traceArray[$key]);
                }

                if (str_contains($value, '{main}') === true) {
                    unset($traceArray[$key]);
                }
            }
        }//end foreach

        //array_multisort($traceArray, SORT_DESC);
        // ksort($traceArray, SORT_ASC);
        return array_reverse($traceArray);
    }//end cleanTraceArray()

    /**
     * Error code to name assignment.
     *
     * @param integer $code Error code.
     *
     * @return false|string Assigned name.
     */
    public static function codeAsString(int $code): bool|string
    {
        /*
         * Error Levels in PHP
         * Usually, whenever the PHP engine encounters a problem that prevents a script from running properly it generate an error message.
         *  There are sixteen different error levels and each level is represented by an integer value and an associated constant.
         *  Here's a list of error levels:
         * Error Level     Value     Description
         * E_ERROR               1      A fatal run-time error, that can't be recovered from. The execution of the script is stopped immediately.
         * E_WARNING             2      A run-time warning. It is non-fatal and most errors tend to fall into this category. The execution of the script is not stopped.
         * E_PARSE               4      The compile-time parse error. Parse errors should only be generated by the parser.
         * E_NOTICE              8      A run-time notice indicating that the script encountered something that could possibly an error, although the situation could also occur when running a script normally.
         * E_CORE_ERROR          16     A fatal error that occur during the PHP's engine initial startup. This is like an E_ERROR, except it is generated by the core of PHP.
         * E_CORE_WARNING        32     A non-fatal error that occur during the PHP's engine initial startup. This is like an E_WARNING, except it is generated by the core of PHP.
         * E_COMPILE_ERROR       64     A fatal error that occur while the script was being compiled. This is like an E_ERROR, except it is generated by the Zend Scripting Engine.
         * E_COMPILE_WARNING     128    A non-fatal error occur while the script was being compiled. This is like an E_WARNING, except it is generated by the Zend Scripting Engine.
         * E_USER_ERROR          256    A fatal user-generated error message. This is like an E_ERROR, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
         * E_USER_WARNING        512    A non-fatal user-generated warning message. This is like an E_WARNING, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine
         * E_USER_NOTICE         1024   A user-generated notice message. This is like an E_NOTICE, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
         * E_STRICT              2048   Not strictly an error, but triggered whenever PHP encounters code that could lead to problems or forward incompatibilities
         * E_RECOVERABLE_ERROR   4096   A catchable fatal error. Although the error was fatal, it did not leave the PHP engine in an unstable state. If the error is not caught by a user defined error handler (see set_error_handler()), the application aborts as it was an E_ERROR.
         * E_DEPRECATED          8192   A run-time notice indicating that the code will not work in future versions of PHP
         * E_USER_DEPRECATED     16384  A user-generated warning message. This is like an E_DEPRECATED, except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
         * _ALL                  32767  All errors and warnings, except of level E_STRICT prior to PHP 5.4.0.
         */

        // Define an assoc array of error string in reality the only entries we should
        // consider are E_WARNING, E_NOTICE, E_USER_ERROR, E_USER_WARNING and E_USER_NOTICE.
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
        };//end match
    }//end codeAsString()

    /**
     * Destruct runtime errors class.
     */
    public function __destruct()
    {
    }//end __destruct()
}//end class
