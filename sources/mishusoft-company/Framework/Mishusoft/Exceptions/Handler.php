<?php

    namespace Mishusoft\Exceptions;

    use Error;
    use ErrorException;
    use Exception;
    use GeoIp2\Exception\AddressNotFoundException;
    use MaxMind\Db\Reader\InvalidDatabaseException;
    use Mishusoft\Http;
    use Mishusoft\System\Framework;
    use Mishusoft\System\Log;
    use Mishusoft\Utility\Inflect;
    use Mishusoft\Utility\Number;
    use ReflectionClass;

    class Handler extends ErrorException implements ExceptionInterface
    {
        private string       $objectName;
        private string|array $anotherTrace;

        /**
         * Fetch exception on runtime catch area.
         *
         * @param object $exception Object of exception error.
         *
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
                ->addExtra($exception->getTrace(), (new ReflectionClass($exception))->getShortName())
                ->display();
        }//end fetch()

        /**
         * Fetch error on runtime catch area.
         *
         * @param int    $number
         * @param string $message
         * @param string $file
         * @param int    $line
         * @param array  $trace
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

        private function addExtra(string|array $trace = '', string $objectName = ''): static
        {
            $this->anotherTrace = $trace;
            $this->objectName   = $objectName;

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
            $description = path_intelligent_storage(sprintf('%s from %s on line %d', $this->message, $this->file, $this->line));

            if ($this->objectName !== '') {
                $titleOfErrorMessage = $this->objectName;
            } else {
                $titleOfErrorMessage = self::codeToName($this->getCode());
            }

            if ($this->anotherTrace !== '') {
                $stack = self::makeBeautifulStackTrace($this->anotherTrace);
            } elseif (is_array($this->getTrace()) === true && count($this->getTrace()) > 0) {
                $stack = self::makeBeautifulStackTrace($this->getTrace());
            } elseif ($this->getTraceAsString() !== '') {
                $stack = self::makeBeautifulStackTrace($this->getTraceAsString());
            } else {
                $stack = ['No trace of this error could be detected.'];
            }

            Log::debug($description, LOG_STYLE_SMART, LOG_TYPE_RUNTIME);
            if (PHP_SAPI === 'cli') {
                $this->makePrintable($titleOfErrorMessage, $description, $stack);
            } else {
                Http\Runtime::abort(
                    $titleOfErrorMessage === 'NotFoundException' ? Http\Errors::NOT_FOUND : Http\Errors::SERVICE_UNAVAILABLE,
                    'debug@caption@' . $titleOfErrorMessage,
                    'debug@stack@' . implode('$$', $stack),
                    'debug@description@' . $description
                );
            }
            Framework::terminate();
        }

        private function makePrintable(string $errorType, string $message, array $stack): void
        {
            echo sprintf('%s::%s ', $errorType, $message) . LB;
            echo 'Trace::' . LB;
            foreach ($stack as $serial => $details) {
                echo sprintf('%s::%s ', Number::next($serial), $details) . LB;
            }
        }


        /**
         * Make beautiful view of error call stack
         *
         * @param array|string $trace Error call stack.
         *
         */
        public static function makeBeautifulStackTrace(array|string $trace): array
        {
            //Debug::preOutput($trace);
            $traceArray = [];
            //when trace is array
            if (is_array($trace) === true && count($trace) > 0) {
                $traceArray = self::cleanTraceArray($trace);
                foreach ($traceArray as $key => $value) {
                    $line = '';
                    //add file name
                    if (array_key_exists('file', $value) === true) {
                        $line .= $value['file'];
                    } else {
                        $line .= '[internal function]';
                    }

                    //add line number
                    if (array_key_exists('line', $value) === true) {
                        $line .= sprintf('(%1$s)', $value['line']);
                    }

                    $line .= ': ';

                    //add class name
                    if (array_key_exists('class', $value) === true) {
                        $line .= $value['class'];
                    }

                    //add separator
                    if (array_key_exists('type', $value) === true) {
                        $line .= $value['type'];
                    }

                    //add function name
                    if (array_key_exists('function', $value) === true) {
                        if (array_key_exists('args', $value) === true) {
                            $line .= $value['function'];
                            if (count($value['args']) > 0) {
                                $implodeArgument = '';

                                foreach ($value['args'] as $arg) {
                                    if (is_array($arg)) {
                                        $implodeArgument .= '[';
                                        foreach ($arg as $k => $v) {
                                            if (is_array($v)) {
                                                $implodeArgument .= sprintf('%1$s=>%2$s, ', $k, '[...]');
                                            } elseif (is_object($v)) {
                                                $implodeArgument .= sprintf('class %1$s {...} , ', get_class($v));
                                            } elseif (is_int($k)) {
                                                $implodeArgument .= $v;
                                            } else {
                                                $implodeArgument .= sprintf('%1$s=>%2$s, ', $k, $v);
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
                                $line .= '()';
                            }
                        } else {
                            $line .= $value['function'] . '()';
                        }
                    }

                    $traceArray[$key] = path_intelligent_storage($line);
                }//end foreach
            }//end if

            //when trace is string
            if (is_string($trace) === true && $trace !== '') {
                $traceArray = self::cleanTraceArray(explode("\n", $trace));
                foreach ($traceArray as $key => $value) {
                    $traceArray[$key] = path_intelligent_storage(preg_replace('/[#]\d+/', $key, $value));
                }//end foreach
            }//end if

            // Debug::preOutput($traceArray);
            // exit();
            return $traceArray;
        }//end makeBeautifulStackTrace()

        /**
         * Make writeable string
         *
         * @param Error|Exception $exception Object of exception error.
         *
         * @return string Writable string.
         */
        public static function toWriteable(Error|Exception $exception): string
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
         *
         * @return array
         */
        private static function cleanTraceArray(array $traceArray): array
        {
            foreach ($traceArray as $key => $value) {
                if (is_array($value) === true) {
                    if (array_key_exists('function', $value) === true) {
                        if (Inflect::contains($value['function'], '{closure}()') === true) {
                            unset($traceArray[$key]);
                        }
                        if (Inflect::contains($value['function'], '{main}') === true) {
                            unset($traceArray[$key]);
                        }
                    }
                } else {
                    if (Inflect::contains($value, '{closure}()') === true) {
                        unset($traceArray[$key]);
                    }

                    if (Inflect::contains($value, '{main}') === true) {
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
         * @param int $code Error code.
         *
         * @return false|string Assigned name.
         */
        public static function codeToName(int $code): bool|string
        {
            /*
             * Error Levels in PHP
             * Usually, whenever the PHP engine encounters a problem that
             * prevents a script from running properly it generates an error message.
             * There are sixteen different error levels and each level is represented
             * by an integer value and an associated constant.
             */

            // Define an assoc array of error string in reality the only entries we should
            // consider are E_WARNING, E_NOTICE, E_USER_ERROR, E_USER_WARNING and E_USER_NOTICE.
            return match ($code) {
                //Error Level: E_ERROR
                //Value: 1
                //Description:  A fatal run-time error, that can't be recovered from.
                // The execution of the script is stopped immediately.
                1       => 'Critical Error',

                //Error Level: E_WARNING
                //Value: 2
                //Description:  A run-time warning. It is non-fatal and most errors tend to fall into this category.
                // The execution of the script is not stopped.
                2       => 'Warning',

                //Error Level: E_PARSE
                //Value: 4
                //Description:  The compile-time parse error. Parse errors should only be generated by the parser.
                4       => 'Parse Error',

                //Error Level: E_NOTICE
                //Value: 8
                //Description:  A run-time notice indicating that
                // the script encountered something that could possibly an error,
                // although the situation could also occur when running a script normally.
                8       => 'Notice',

                //Error Level: E_CORE_ERROR
                //Value: 16
                //Description:  A fatal error that occur during the PHP's engine initial startup.
                // This is like an E_ERROR, except it is generated by the core of PHP.
                16      => 'Fatal Error',

                //Error Level: E_CORE_WARNING
                //Value: 32
                //Description:  A non-fatal error that occur during the PHP's engine initial startup.
                // This is like an E_WARNING, except it is generated by the core of PHP.
                32      => 'Core Warning',

                //Error Level: E_COMPILE_ERROR
                //Value: 64
                //Description:  A fatal error that occur while the script was being compiled.
                // This is like an E_ERROR, except it is generated by the Zend Scripting Engine.
                64      => 'Compile Error',

                //Error Level: E_COMPILE_WARNING
                //Value: 128
                //Description:  A non-fatal error occur while the script was being compiled.
                // This is like an E_WARNING, except it is generated by the Zend Scripting Engine.
                128     => 'Compile Warning',

                //Error Level: E_USER_ERROR
                //Value: 256
                //Description:  A fatal user-generated error message.
                // This is like an E_ERROR,
                // except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
                256     => 'User Error',

                //Error Level: E_USER_WARNING
                //Value: 512
                //Description:  A non-fatal user-generated warning message.
                // This is like an E_WARNING,
                // except it is generated by the PHP code using the function trigger_error() rather than the PHP engine
                512     => 'User Warning',

                //Error Level: E_USER_NOTICE
                //Value: 1024
                //Description:  A user-generated notice message.
                // This is like an E_NOTICE,
                // except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
                1024    => 'User Notice',

                //Error Level: E_STRICT
                //Value: 2048
                //Description:  Not strictly an error,
                // but triggered whenever PHP encounters code that could lead to problems or forward incompatibilities
                2048    => 'Runtime Notice',

                //Error Level: E_RECOVERABLE_ERROR
                //Value: 4096
                //Description:  A catchable fatal error. Although the error was fatal,
                // it did not leave the PHP engine in an unstable state.
                // If the error is not caught by a user defined error handler (see set_error_handler()),
                // the application aborts as it was an E_ERROR.
                4096    => 'Catchable Fatal Error',

                //Error Level: E_DEPRECATED
                //Value: 8192
                //Description:  A run-time notice indicating that the code will not work in future versions of PHP
                8192    => 'Identification',

                //Error Level: E_USER_DEPRECATED
                //Value: 16384
                //Description:  A user-generated warning message. This is like an E_DEPRECATED,
                //  except it is generated by the PHP code using the function trigger_error() rather than the PHP engine.
                16384   => 'User Identification',

                //Error Level: _ALL
                //Value: 32767
                //Description:  All errors and warnings, except of level E_STRICT prior to PHP 5.4.0.
                32767   => '_ALL',

                default => 'Unexpected Error',
            };//end match
        }//end codeToName()

        /**
         * Destruct runtime errors class.
         */
        public function __destruct() {}//end __destruct()
    }//end class
