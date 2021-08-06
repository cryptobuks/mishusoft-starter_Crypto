<?php

namespace Mishusoft\Ema;


use Mishusoft\Http\Request;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\BIOS;
use Mishusoft\System\Logger;
use Mishusoft\Utility\Inflect;

Logger::write('Ema loader started');

Logger::write('Request store in $redirection variable');
$request = new Request();

/*
 * We need to check Ema Root path
 * if exists this path,
 * The system will be executed ema applications.
 *
 * */

Logger::write(sprintf('Check %s directory existent.', Storage::emaPath()));
if (file_exists(Storage::emaPath()) === true) {
    Logger::write(sprintf('Found %s directory existent.', Storage::emaPath()));
    /*
     * We need to check Mishusoft DVO (Mishusoft-App) root path,
     * if exists this path,
     * The System will be executed applications that is located at <APP_DIRECTORY>/Ema/Mishusoft
     */

    $mishusoftAppPath = Storage::emaPath().'Modules'.DS;
    $defaultPackage   = 'Main';
    Logger::write(sprintf('Check %s directory existent.', $mishusoftAppPath));
    if (file_exists($mishusoftAppPath) === true) {
        Logger::write(sprintf('Count all exists files from %s directory.', $mishusoftAppPath));
        $requestedHandleDirectory = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/';
        if (count(FileSystem::list($requestedHandleDirectory, 'file')) > 0) {
            foreach (FileSystem::list($requestedHandleDirectory, 'file') as $filename) {
                if (Inflect::lower(BIOS::getFilenameOnly($filename)) === Inflect::lower($prediction->getController())) {
                    $currentRequestedFile = $mishusoftAppPath.$defaultPackage.'/UrlHandlers/'.$filename;
                    if (is_readable($currentRequestedFile) === true) {
                        Logger::write(
                            sprintf('Load %s form %s directory.', $currentRequestedFile, $mishusoftAppPath)
                        );
                        include_once $currentRequestedFile;
                        Logger::write(sprintf('Extract class from %s.', $currentRequestedFile));
                        $urlHandler = Preloader::getClassNamespaceFromPath($currentRequestedFile);
                        Logger::write(sprintf('Execute class from %s.', $currentRequestedFile));
                        call_user_func(
                            [
                                new $urlHandler(),
                                'Response',
                            ],
                            [
                                'locale'     => $prediction->getLocale(),
                                'controller' => $prediction->getController(),
                                'method'     => $prediction->getMethod(),
                                'arguments'  => $prediction->getArguments(),
                            ]
                        );
                        exit();
                    }
                }//end if
            }//end foreach
        }//end if
    }//end if
}//end if
