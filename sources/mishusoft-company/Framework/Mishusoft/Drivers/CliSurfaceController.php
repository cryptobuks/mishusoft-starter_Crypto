<?php

namespace Mishusoft\Drivers;

use Mishusoft\Cli;
use Mishusoft\Registry;
use Mishusoft\Storage;

abstract class CliSurfaceController
{
    protected Cli\Request $request;

    public function __construct()
    {
        $this->request = Registry::requestCli();
    }

    abstract protected function run():void;

    protected function update(string $source, string $destination):void
    {
        $this->log('Updating ' . Storage\FileSystem::realpath($source));
        $this->copy(Storage\FileSystem::realpath($source), lcfirst(Storage\FileSystem::realpath($destination)));
        $this->log('Update completed..', 'completed');
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function copy(string $source, string $destination):void
    {
        $this->log(sprintf('Checking source %s existence', $source), 'checking');
        if (file_exists($source)) {
            $this->log(sprintf('Checking destination %s existence', $destination), 'checking');
            $this->log(sprintf('Coping %s to %s', $source, $destination), 'coping');
            if (is_file($source)) {
                Storage\FileSystem::copy($source, $destination);
            } else {
                $this->copyVerbose($source, $destination);
            }
        } else {
            $this->log(sprintf('The source %s not found', $source), 'error');
        }
    }

    /**
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function copyVerbose(string $source, string $destination): void
    {
        if (empty($source) === false && empty($destination) === false) {
            foreach (Storage::globRecursive($source.'/*', GLOB_MARK) as $file) {
                if (is_file($file) === true) {
                    $copyFile = str_replace($source, $destination, $file);
                    if (!file_exists(dirname($copyFile))) {
                        Storage\FileSystem::makeDirectory(dirname($copyFile));
                    }
                    if (file_exists($copyFile)) {
                        Storage\FileSystem::remove($copyFile);
                    }
                    if (copy($file, $copyFile) === true) {
                        $this->log($file.' copied!!', 'success');
                    } else {
                        $this->log($file.' could not copied!!', 'error');
                    }//end if
                }//end if
            }
        }//end if
    }



    /**
     * Log message to screen.
     *
     * @param string $message
     * @param string $type
     */
    public function log(string $message, string $type = 'log'): void
    {
        //ref: https://misc.flogisoft.com/bash/tip_colors_and_formatting
        $printableMessage =sprintf(
            '[%1$s] [%2$s] %3$s'.LB,
            date('Y-m-d H:i:s A'),
            strtoupper($type),
            Storage::hidePath($message)
        );

        echo match (strtolower($type)) {
            'info', 'log' => "\e[37m$printableMessage",
            'error', 'removing' => "\e[31m$printableMessage",
            'following', 'success', 'completed', 'coping' => "\e[32m$printableMessage",
            'warning', 'checking' => "\e[33m$printableMessage",
            default => "\e[33mError: An error occurred!".LB,
        };
    }//end log()
}
