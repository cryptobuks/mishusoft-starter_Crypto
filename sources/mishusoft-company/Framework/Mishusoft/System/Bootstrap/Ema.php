<?php

    namespace Mishusoft\System\Bootstrap;

    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Storage;
    use Mishusoft\Storage\FileSystem;
    use Mishusoft\System\Core\BootstrapCore;
    use Mishusoft\System\Core\RequestCore;
    use Mishusoft\System\Framework;
    use Mishusoft\System\Log;

    class Ema extends BootstrapCore
    {
        /**
         * @param RequestCore $request
         *
         * @throws RuntimeException
         * @throws InvalidArgumentException
         * @throws PermissionRequiredException
         */
        public static function run(RequestCore $request): void
        {
            /*
             * We need to check Ema Root path
             * if exists this path,
             * The system will be executed ema applications.
             *
             * */

            Log::info(sprintf('Check %s directory existent.', Storage::emaPath()));
            if (file_exists(Storage::emaPath())) {
                Log::info(sprintf('Found %s directory existent.', Storage::emaPath()));
                /*
                 * We need to check Mishusoft DVO (Mishusoft-App) root path,
                 * if exists this path,
                 * The System will be executed applications that is located at <APP_DIRECTORY>/Ema
                 */

                Log::info(sprintf('Check %s directory existent.', self::emaModulesPath()));
                if (file_exists(self::emaModulesPath())) {
                    Log::info(sprintf('Count all exists files from %s directory.', self::emaModulesPath()));
                    $fileList = FileSystem::list(self::handlersDirectory(), 'file');
                    if (is_array($fileList) && count($fileList) > 0) {
                        foreach ($fileList as $handler) {
                            if (strtolower(self::filename($handler)) === strtolower($request->getController())) {
                                $handlerFile = self::handlersDirectory() . $handler;
                                if (is_readable($handlerFile)) {
                                    Log::info(
                                        sprintf('Load %s form %s directory.', $handlerFile, self::emaModulesPath())
                                    );
                                    include_once $handlerFile;
                                    Log::info(sprintf('Extract class from %s.', $handlerFile));
                                    $urlHandler = get_namespace_from_filename($handlerFile);
                                    $arguments  = [
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
                Framework::terminate();
            }//end if
        }

        private static function emaModulesPath(): string
        {
            return Storage::emaPath() . 'Modules' . DS;
        }

        private static function defaultPackage(): string
        {
            return 'Main';
        }

        private static function handlersDirectory(): string
        {
            return self::emaModulesPath() . self::defaultPackage() . '/UrlHandlers/';
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
