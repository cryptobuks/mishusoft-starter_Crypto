<?php

namespace Mishusoft\Cli;

use Mishusoft\System\Core\RequestCore;

class Request extends RequestCore
{
    /**
     * Request Constructor
     */
    public function __construct()
    {
        parent::__construct();
        $arguments = $this->cliArguments();

        $this->controller = (string)array_shift($arguments);

        if (contains($this->controller, ':')) {
            [$this->controller, $this->method] = explode(':', $this->controller);
        }

        if (empty($this->controller)) {
            $this->controller = self::CLI_DEFAULT_CONTROLLER;
        }

        if (empty($this->method)) {
            $this->method = self::CLI_DEFAULT_METHOD;
        }

        if (empty($this->arguments)) {
            $this->arguments = $arguments;
        }
    }
}
