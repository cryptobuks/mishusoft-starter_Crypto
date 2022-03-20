<?php

    namespace Mishusoft\Drivers;

    use Mishusoft\Cli;
    use Mishusoft\Registry;
    use Mishusoft\Storage;
    use Mishusoft\System\Base;

    abstract class CliSurfaceController extends Base
    {
        protected Cli\Request $request;

        public function __construct()
        {
            parent::__construct();
            $this->request = Registry::requestCli();
        }

        abstract public function run(): void;

        /**
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        protected function update(string $source, string $destination): void
        {
            $this->log('Updating ' . Storage\FileSystem::realpath($source));
            $this->copy(Storage\FileSystem::realpath($source), lcfirst(Storage\FileSystem::realpath($destination)));
            $this->log('Update completed..', 'completed');
        }

        /**
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        protected function copy(string $source, string $destination): void
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
                foreach (Storage::globRecursive($source . '/*', GLOB_MARK) as $file) {
                    if (is_file($file) === true) {
                        $copyFile = str_replace($source, $destination, $file);
                        if (!file_exists(dirname($copyFile))) {
                            Storage\FileSystem::makeDirectory(dirname($copyFile));
                        }
                        if (file_exists($copyFile)) {
                            Storage\FileSystem::remove($copyFile);
                        }
                        if (copy($file, $copyFile) === true) {
                            $this->log($file . ' copied!!', 'success');
                        } else {
                            $this->log($file . ' could not copied!!', 'error');
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
        public static function log(string $message, string $type = 'log'): void
        {
            //ref: https://misc.flogisoft.com/bash/tip_colors_and_formatting
            $printableMessage = sprintf(
                '[%1$s] [%2$s] %3$s' . PHP_EOL,
                date('Y-m-d H:i:s A'),
                strtoupper($type),
                path_intelligent_storage($message)
            );

            echo match (strtolower($type)) {
                'info', 'log', 'following', 'success', 'completed', 'coping', 'error', 'removing', 'warning', 'checking' => $printableMessage,
                default                                                                                                  => "Error: An error occurred!" . PHP_EOL,
            };
        }//end log()
    }
