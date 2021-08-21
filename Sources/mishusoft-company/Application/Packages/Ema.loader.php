<?php

namespace Mishusoft\Ema;

use Mishusoft\Http\Request;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\BIOS;
use Mishusoft\System\Log;
use Mishusoft\Utility\Inflect;

Log::info('Ema loader started');

Log::info('Request store in $redirection variable');
$request = new Request();

/*
 * We need to check Ema Root path
 * if exists this path,
 * The system will be executed ema applications.
 *
 * */

Log::info(sprintf('Check %s directory existent.', Storage::emaPath()));
if (file_exists(Storage::emaPath()) === true) {
    Log::info(sprintf('Found %s directory existent.', Storage::emaPath()));
    /*
     * We need to check Mishusoft DVO (Mishusoft-App) root path,
     * if exists this path,
     * The System will be executed applications that is located at <APP_DIRECTORY>/Ema/Mishusoft
     */

    $mishusoftAppPath = Storage::emaPath().'Modules'.DS;
    $defaultPackage   = 'Main';
    Log::info(sprintf('Check %s directory existent.', $mishusoftAppPath));
    if (file_exists($mishusoftAppPath) === true) {
        Log::info(sprintf('Count all exists files from %s directory.', $mishusoftAppPath));
        $requestedHandleDirectory = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/';
        if (count(FileSystem::list($requestedHandleDirectory, 'file')) > 0) {
            foreach (FileSystem::list($requestedHandleDirectory, 'file') as $filename) {
                if (Inflect::lower(BIOS::getFilenameOnly($filename)) === Inflect::lower($request->getController())) {
                    $currentRequestedFile = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/'.$filename;
                    if (is_readable($currentRequestedFile) === true) {
                        Log::info(
                            sprintf('Load %s form %s directory.', $currentRequestedFile, $mishusoftAppPath)
                        );
                        include_once $currentRequestedFile;
                        Log::info(sprintf('Extract class from %s.', $currentRequestedFile));
                        $urlHandler = Preloader::getClassNamespace($currentRequestedFile);
                        Log::info(sprintf('Execute class from %s.', $currentRequestedFile));
                        call_user_func(
                            [
                                new $urlHandler(),
                                'Response',
                            ],
                            [
                                'locale'     => $request->getLocale(),
                                'controller' => $request->getController(),
                                'method'     => $request->getMethod(),
                                'arguments'  => $request->getArguments(),
                            ]
                        );
                        Log::terminate();
                        exit();
                    }
                }//end if
            }//end foreach
        }//end if
    }//end if
}//end if
