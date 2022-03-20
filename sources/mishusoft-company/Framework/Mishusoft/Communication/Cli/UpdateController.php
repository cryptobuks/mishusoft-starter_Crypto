<?php

namespace Mishusoft\Communication\Cli;

use Mishusoft\Drivers\CliSurfaceController;

class UpdateController extends CliSurfaceController
{
    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function run(string $source = '', string $destination = ''): void
    {
        //print_r(__METHOD__ . PHP_EOL, false);
        //print_r($this->request, false);
        $this->update($source, $destination);
    }


    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function robots(string $source, string $destination): void
    {
        self::log('robots.txt updating started');
        $this->update($source, $destination);
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function indexPHP(string $source, string $destination): void
    {
        self::log('index.php updating started ');
        $this->update($source, $destination);
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function indexHTML(string $source, string $destination): void
    {
        self::log('index.html updating started ');
        $this->update($source, $destination);
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function framework(string $source, string $destination): void
    {
        self::log('Framework updating started ');
        $this->update($source, $destination);
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function cli(string $source, string $destination): void
    {
        self::log('Cli updating started ');
        $this->update($source, $destination);
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function api(string $source, string $destination): void
    {
        self::log('Api updating started ');
        $this->update($source, $destination);
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function ema(string $source, string $destination): void
    {
        self::log('Ema updating started ');
        $this->update($source, $destination);
    }
}
