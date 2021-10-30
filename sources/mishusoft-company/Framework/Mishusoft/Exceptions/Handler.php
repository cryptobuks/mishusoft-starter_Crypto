<?php

namespace Mishusoft\Exceptions;

use ErrorException;
use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Framework;
use Mishusoft\Http;
use Mishusoft\Storage;
use Mishusoft\System\Log;
use Mishusoft\Utility\Inflect;
use Mishusoft\Utility\Number;

class Handler extends ErrorException implements ExceptionInterface
{
    private string $objectName;
    /**
     * @var string|mixed[]
     */
    private $anotherTrace;

    /**
     * Fetch exception on runtime catch area.
     *
     * @param object $exception Object of exception error.
     * @throws HttpException\HttpResponseException
     * @throws LogicException\InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     */
    public static function fetchException(object $exception): void
    {
        (new self(
            $exception->getMessage(),
            $exception->getCode(),
            $exception->getCode(),
            $exception->getFile(),
            $exception->getLine()
        )
        )
            ->addExtra($exception->getTrace(), (new \ReflectionClass($exception))->getShortName())
            ->display();
    }//end fetch()
    /**
     * Fetch error on runtime catch area.
     *
     * @throws AddressNotFoundException
     * @throws HttpException\HttpResponseException
     * @throws InvalidDatabaseException
     * @throws LogicException\InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\ErrorException
     */
    public static function fetchError(int $number, string $message, string $file, int $line, array $trace): void
    {
        (new self($message, $number, $number, $file, $line))
            ->addExtra($trace)
            ->display();
    }//end fetch()
    /**
     * @param string|mixed[] $trace
     * @return $this
     */
    private function addExtra($trace = '', string $objectName = '')
    {
        $this->anotherTrace = $trace;
        $this->objectName = $objectName;

        return $this;
    }


    /**
     * @throws HttpException\HttpResponseException
     * @throws LogicException\InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     */
    public function display(): void
    {
        $description = Storage::hidePath(sprintf('%s from %s on line %d', $this->message, $this->file, $this->line));

        $titleOfErrorMessage = $this->objectName !== '' ? $this->objectName : self::codeToName($this->getCode());

        if ($this->anotherTrace !== '') {
            $stack = self::makeBeautifulStackTrace($this->anotherTrace);
        } elseif (is_array($this->getTrace()) && $this->getTrace() !== []) {
            $stack = self::makeBeautifulStackTrace($this->getTrace());
        } elseif ($this->getTraceAsString() !== '') {
            $stack = self::makeBeautifulStackTrace($this->getTraceAsString());
        } else {
            $stack =  ['No trace of this error could be detected.'];
        }

        Log::debug($description, LOG_STYLE_SMART, LOG_TYPE_RUNTIME);
        if (IS_CLI) {
            $this->makePrintable($titleOfErrorMessage, $description, $stack);
        } else {
            Http\Runtime::abort(
                Http\Errors::SERVICE_UNAVAILABLE,
                'debug@caption@'.$titleOfErrorMessage,
                'debug@stack@'.implode('$$', $stack),
                'debug@description@'.$description
            );
        }
        Framework::terminate();
    }

    private function makePrintable(string $errorType, string $message, array $stack): void
    {
        echo sprintf('%s::%s ', $errorType, $message).LB;
        echo 'Trace::'.LB;
        foreach ($stack as $serial => $details) {
            echo sprintf('%s::%s ', Number::next($serial), $details).LB;
        }
    }


    /**
     * Make beautiful view of error call stack
     *
     * @param array|string $trace Error call stack.
     *
     */
    public static function makeBeautifulStackTrace($trace): array
    {
        //Debug::preOutput($trace);
        $traceArray = [];
        //when trace is array
        if (is_array($trace) && $trace !== []) {
            $traceArray = self::cleanTraceArray($trace);
            foreach ($traceArray as $key => $value) {
                $line = '';
                //add file name
                if (array_key_exists('file', $value)) {
                    $line .= $value['file'];
                } else {
                    $line .= '[internal function]';
                }

                //add line number
                if (array_key_exists('line', $value)) {
                    $line .= sprintf('(%1$s)', $value['line']);
                }

                $line .= ': ';

                //add class name
                if (array_key_exists('class', $value)) {
                    $line .= $value['class'];
                }

                //add separator
                if (array_key_exists('type', $value)) {
                    $line .= $value['type'];
                }

                //add function name
                if (array_key_exists('function', $value)) {
                    if (array_key_exists('args', $value)) {
                        $line .= $value['function'];
                        if (count($value['args']) > 0) {
                            $implodeArgument = '';

                            foreach ($value['args'] as $arg) {
                                if (is_array($arg)) {
                                    $implodeArgument .= '[';
                                    foreach ($arg as $k => $v) {
                                        if (is_array($v)) {
                                            $implodeArgument .=sprintf('%1$s=>%2$s, ', $k, '[...]');
                                        } elseif (is_object($v)) {
                                            $implodeArgument .= sprintf('class %1$s {...} , ', get_class($v));
                                        } elseif (is_int($k)) {
                                            $implodeArgument .= $v;
                                        } else {
                                            $implodeArgument .=sprintf('%1$s=>%2$s, ', $k, $v);
                                        }
                                    }
                                    if (Inflect::endsWith($implodeArgument, ', ')) {
                                        $implodeArgument = substr($implodeArgument, 0, -2);
                                    }
                                    $implodeArgument .= ']';
                                } elseif (is_object($arg)) {
                                    $implodeArgument .= sprintf('class %1$s {...} , ', get_class($arg));
                                } else {
                                    $implodeArgument .= $arg . ', ';
                                }
                            }

                            if (Inflect::endsWith($implodeArgument, ', ')) {
                                $implodeArgument = substr($implodeArgument, 0, -2);
                            }
                            $line .= sprintf('(%1$s)', $implodeArgument);
                        } else {
                            $line .=  '()';
                        }
                    } else {
                        $line .= $value['function'] . '()';
                    }
                }

                $traceArray[$key] = Storage::hidePath($line);
            }//end foreach
        }//end if

        //when trace is string
        if (is_string($trace) && $trace !== '') {
            $traceArray = self::cleanTraceArray(explode("\n", $trace));
            foreach ($traceArray as $key => $value) {
                $traceArray[$key] = Storage::hidePath(preg_replace('/[#]\d+/', $key, $value));
            }//end foreach
        }//end if

       // Debug::preOutput($traceArray);
        // exit();
        return $traceArray;
    }//end makeBeautifulStackTrace()

    /**
     * Make writeable string
     *
     * @param object $exception Object of exception error.
     *
     * @return string Writable string.
     */
    public static function toWriteable(object $exception): string
    {
        $output = self::codeToName($exception->getCode());
        $output .= ' [' . $exception->getCode() . '] : ';
        $output .= $exception->getMessage() . ' from ';
        $output .= $exception->getFile() . ' on line ' . $exception->getLine() . '.';
        return $output;
    }//end toWriteable()
    /**
     * Clean call trace.
     *
     * @param array $traceArray Array format of error trace.
     */
    private static function cleanTraceArray(array $traceArray): array
    {
        foreach ($traceArray as $key => $value) {
            if (is_array($value)) {
                if (array_key_exists('function', $value)) {
                    if (Inflect::contains($value['function'], '{closure}()')) {
                        unset($traceArray[$key]);
                    }
                    if (Inflect::contains($value['function'], '{main}')) {
                        unset($traceArray[$key]);
                    }
                }
            } else {
                if (Inflect::contains($value, '{closure}()')) {
                    unset($traceArray[$key]);
                }

                if (Inflect::contains($value, '{main}')) {
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
     * @return bool|string Assigned name.
     */
    public static function codeToName(int $code)
    {
        switch ($code) {
            case 1:
                return 'Critical Error';
            case 2:
                return 'Warning';
            case 4:
                return 'Parse Error';
            case 8:
                return 'Notice';
            case 16:
                return 'Fatal Error';
            case 32:
                return 'Core Warning';
            case 64:
                return 'Compile Error';
            case 128:
                return 'Compile Warning';
            case 256:
                return 'User Error';
            case 512:
                return 'User Warning';
            case 1024:
                return 'User Notice';
            case 2048:
                return 'Runtime Notice';
            case 4096:
                return 'Catchable Fatal Error';
            case 8192:
                return 'Identification';
            case 16384:
                return 'User Identification';
            case 32767:
                return '_ALL';
            default:
                return 'Unexpected Error';
        }//end match
    }//end __destruct()
}//end class
