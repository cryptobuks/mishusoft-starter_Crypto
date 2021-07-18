<?php


namespace Mishusoft;

abstract class Base
{
    protected string $rootPath;
    protected string $storagePath;
    protected string $frameworkPath;
    protected string $appDocumentPath;
    protected string $appServerPath;

    public function __construct()
    {
        $this->rootPath = RUNTIME_ROOT_PATH;
        $this->frameworkPath = RUNTIME_ROOT_PATH.'Sources'.DS.'mishusoft-company'.DS.'framework'.DS.'Mishusoft'.DS;
        
        $this->appDocumentPath = $this->rootPath . 'app' . DS;
        $this->appServerPath = dirname($_SERVER['PHP_SELF']);

        $this->storagePath = $this->rootPath . 'storages' . DS;
    }
}
