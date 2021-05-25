<?php


namespace Mishusoft\Framework\Chipsets\System;


use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\IP;

class Logger
{


    /**
     * @param string $log
     * @param string $logFile
     * @param string $style
     */
    public static function write(string $log, string $logFile=PHP_COMPILE_LOG_FILE, string $style='smart'): void
    {
        // join([MS_SYSTEM_LOGS_PATH, 'php_compile_', $_SERVER['SERVER_NAME'], '.log'])
        date_default_timezone_set('Asia/Dhaka');
        FileSystem::createDirectory(dirname($logFile));

        if (file_exists($logFile) === false) {
            fopen($logFile, 'w+');
            exec('chmod -R 777 '.$logFile);
        }

        $mode    = array_key_exists('REQUEST_METHOD', $_SERVER) ? $_SERVER['REQUEST_METHOD'] : 'GET';
        $server  = array_key_exists('SERVER_NAME', $_SERVER) ? $_SERVER['SERVER_NAME'] : 'localhost';
        $request = array_key_exists('REQUEST_URI', $_SERVER) ? $_SERVER['REQUEST_URI'] : '/test';

        if ($style === 'smart') {
            $time      = date('d-m-Y h:i A', time());
            $contents  = file_get_contents($logFile);
            $contents .= "[$time]\t\"$server\t$mode\t$request\"\t$log\r";
        } else {
            $ip          = IP::get();
            $browser     = new Browser();
            $useragent   = $browser->getUserAgent();
            $protocol    = $browser->getURLProtocol();
            $http_status = http_response_code();
            $time        = date('d-m-Y h:iA', time());
            $contents    = file_get_contents($logFile);
            $contents   .= "[$time]\t$ip \t$useragent\t$protocol $http_status\t\"$server\t$mode\t$request\"\t$log\r";
        }

        if (is_writable($logFile) === true) {
            file_put_contents($logFile, $contents);
        }

    }//end write()


}//end class
