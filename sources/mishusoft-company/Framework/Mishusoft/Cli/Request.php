<?php

namespace Mishusoft\Cli;

class Request
{
    /*declare version*/
    public const VERSION = "1.0.0";

    /*extracted item from url*/
    private array $arguments;
    private string $controller;
    private string $method;

    protected string $cliArguments;

    public function __construct()
    {
        $arguments = self::cliArguments();

        $this->controller = array_shift($arguments);

        if (str_contains($this->controller, ':')) {
            [$this->controller, $this->method] = explode(':', $this->controller);
        }

        if (empty($this->controller)) {
            $this->controller = 'Main';
        }

        if (empty($this->method)) {
            $this->method = 'run';
        }

        if (empty($this->arguments)) {
            $this->arguments = $arguments;
        }
    }

    private static function cliArguments():array
    {
        $argv = $_SERVER['argv'];
        if (array_key_exists('0', $argv)) {
            if ($argv[0] ==='cli') {
                unset($argv[0]);
            } else {
                echo 'Error: Environment is not cli. This section for cli only'.LB;
                exit();
            }
        }
        return $argv;
    }

    /**
     * @return mixed
     */
    public function getController(): mixed
    {
        return $this->controller;
    }

    /**
     * @return string
     */
    public function getMethod(): string
    {
        return $this->method;
    }

    /**
     * @return array
     */
    public function getArguments(): array
    {
        return $this->arguments;
    }
}
