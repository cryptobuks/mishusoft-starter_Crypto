<?php

    namespace Mishusoft\System\Core;

    abstract class RequestCore implements RequestInterface
    {
        protected const CLI_DEFAULT_CONTROLLER = 'Main';
        protected const CLI_DEFAULT_METHOD     = 'run';

        protected const HTTP_DEFAULT_CONTROLLER = 'index';
        protected const HTTP_DEFAULT_METHOD     = 'index';

        /**
         * Get locale name from current request
         *
         * @var string
         */
        protected string $locale;

        /**
         * Get modules list from system database
         *
         * @var string[]
         */
        protected array $modules = [];

        /**
         * Determine controller from requested url
         *
         * @var string
         */
        protected string $controller;

        /**
         * Determine method from requested url
         *
         * @var string
         */
        protected string $method;

        /**
         * Parameters list from requested url
         *
         * @var array<int, string>
         */
        protected array $arguments;

        /**
         * HTTP url from current request
         *
         * @var string
         */
        protected string $uri;

        /**
         * All arguments from cli
         *
         * @var string
         */
        protected string $cliArguments;

        /**
         * Current module name from http request
         *
         * @var string
         */
        protected string $module;

        public function __construct()
        {
        }


        /**
         * Get current requested url
         *
         * @return string
         */
        protected function httpUriOrigin(): string
        {
            if (get_http_request_uri() !== '/') {
                return str_replace(webDocumentRoot(), '', get_visited_current_page());
            }
            return get_http_request_uri();
        }


        /**
         * Arguments list of cli from cli request
         *
         * @return array<int, string>
         */
        protected function cliArguments(): array
        {
            $argv = $_SERVER['argv'];
            if (array_key_exists('0', $argv)) {
                if (PHP_SAPI === 'cli' && $argv[0] === 'cli') {
                    unset($argv[0]);
                } else {
                    echo 'Error: Environment is not cli. This section for cli only' . PHP_EOL;
                    exit(0);
                }
            }
            return $argv;
        }

        /**
         * @return string
         */
        public function getUri(): string
        {
            return $this->uri;
        }

        /**
         * Get available locale name for current request
         *
         * @return string
         */
        public function getLocale(): string
        {
            //return str_replace('en_us', 'en', $this->locale);
            return $this->locale;
        }

        /**
         * Get modules list for use
         *
         * @return array<int, string>
         */
        public function getModules(): array
        {
            return $this->modules;
        }

        /**
         * @return string
         */
        public function getModule(): string
        {
            return $this->module;
        }


        /**
         * Get controller name from current request
         *
         * @return string Controller name
         */
        public function getController(): string
        {
            return $this->controller;
        }

        /**
         * Get module name from current request
         *
         * @return string Module name
         */
        public function getMethod(): string
        {
            return $this->method;
        }

        /**
         * Get arguments list from current request
         *
         * @return array<int, string> Arguments list
         */
        public function getArguments(): array
        {
            return $this->arguments;
        }
    }
