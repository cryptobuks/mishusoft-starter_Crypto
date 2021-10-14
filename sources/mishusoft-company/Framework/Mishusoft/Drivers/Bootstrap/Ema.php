<?php

namespace Mishusoft\Drivers\Bootstrap;

use Mishusoft\Base;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\Request;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;
use Mishusoft\Utility\Inflect;

class Ema
{

    /**
     * @throws RuntimeException
     */
    public static function run(Request\QualifiedAPI $request):void
    {
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
             * The System will be executed applications that is located at <APP_DIRECTORY>/Ema
             */

            Log::info(sprintf('Check %s directory existent.', self::rootPath()));
            if (file_exists(self::rootPath()) === true) {
                Log::info(sprintf('Count all exists files from %s directory.', self::rootPath()));
                if (count(FileSystem::list(self::handlersDirectory(), 'file')) > 0) {
                    foreach (FileSystem::list(self::handlersDirectory(), 'file') as $handler) {
                        if (Inflect::lower(self::filename($handler)) === Inflect::lower($request->getController())) {
                            $handlerFile = self::handlersDirectory().$handler;
                            if (is_readable($handlerFile) === true) {
                                Log::info(
                                    sprintf('Load %s form %s directory.', $handlerFile, self::rootPath())
                                );
                                include_once $handlerFile;
                                Log::info(sprintf('Extract class from %s.', $handlerFile));
                                $urlHandler = Base::getClassNamespace($handlerFile);
                                $arguments = [
                                    'locale'     => $request->getLocale(),
                                    'controller' => $request->getController(),
                                    'method'     => $request->getMethod(),
                                    'arguments'  => $request->getArguments(),
                                ];
                                Log::info(sprintf('Execute class from %s.', $handlerFile));
                                call_user_func([new $urlHandler(), 'Response',], $arguments);
                            }
                        }//end if
                    }//end foreach
                }//end if
            }//end if
        }//end if
    }

    private static function rootPath():string
    {
        return Storage::emaPath().'Modules'.DS;
    }

    private static function defaultPackage():string
    {
        return 'Main';
    }

    private static function handlersDirectory():string
    {
        return self::rootPath().self::defaultPackage().'/UrlHandlers/';
    }

    /**
     * @return string
     */
    protected static function emaLoaderFile(): string
    {
        return sprintf('%s%s', Storage::applicationPackagesPath(), 'Ema.loader.php');
    }

    /**
     * Extract filename from path.
     *
     * @param string $filename Absolute file path.
     *
     * @return string Extracted filename.
     */
    public static function filename(string $filename): string
    {
        return strtolower(substr($filename, 0, strpos($filename, 'UrlHandler')));
    }//end getFilenameOnly()
}
