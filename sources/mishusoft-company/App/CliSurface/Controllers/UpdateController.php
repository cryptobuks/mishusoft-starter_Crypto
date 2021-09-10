<?php

namespace App\CliSurface\Controllers;

use Mishusoft\Drivers\CliSurfaceController;

class UpdateController extends CliSurfaceController
{
    public function run(string $source = '', string $destination = ''): void
    {
        //print_r(__METHOD__ . PHP_EOL, false);
        //print_r($this->request, false);
        $this->update($source, $destination);
    }


    public function robots(string $source, string $destination): void
    {
        $this->log('robots.txt updating started');
        $this->update($source, $destination);
    }

    public function indexPHP(string $source, string $destination): void
    {
        $this->log('index.php updating started ');
        $this->update($source, $destination);
    }

    public function indexHTML(string $source, string $destination): void
    {
        $this->log('index.html updating started ');
        $this->update($source, $destination);
    }

    public function framework(string $source, string $destination): void
    {
        $this->log('Framework updating started ');
        $this->update($source, $destination);
    }

    public function cli(string $source, string $destination): void
    {
        $this->log('Cli updating started ');
        $this->update($source, $destination);
    }

    public function api(string $source, string $destination): void
    {
        $this->log('Api updating started ');
        $this->update($source, $destination);
    }
}
