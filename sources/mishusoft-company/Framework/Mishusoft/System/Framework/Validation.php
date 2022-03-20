<?php

    namespace Mishusoft\System\Framework;

    use Mishusoft\Exceptions;
    use Mishusoft\System;

    trait Validation
    {
        /**
         * @throws Exceptions\ErrorException
         * @throws Exceptions\RuntimeException
         * @throws Exceptions\LogicException\InvalidArgumentException
         */
        protected static function extensionRequiredCheck(): void
        {
            $requiredExtensions = [];
            $disabledExtensions = [];

            if (System\Memory::getOption('required.extensions') !== []) {
                $requiredExtensions = System\Memory::getOption('required.extensions');
            }
            if ($requiredExtensions !== []) {
                foreach ($requiredExtensions as $extension) {
                    if (extension_loaded($extension) === false) {
                        $disabledExtensions[] = $extension;
                    }
                }
                if ($disabledExtensions !== []) {
                    throw new Exceptions\ErrorException(
                        sprintf('%s extension is required', uc_words(implode(', ', $disabledExtensions)))
                    );
                }
            } else {
                throw new Exceptions\ErrorException('Framework required extension checking failed');
            }
        }//end extensionRequiredCheck()


        /**
         * @throws Exceptions\ErrorException
         * @throws Exceptions\RuntimeException
         * @throws Exceptions\LogicException\InvalidArgumentException
         */
        protected static function thirdPartyRequiredCheck(): void
        {
            $thirdParty               = [];
            $missedThirdPartyPackages = [];

            if (System\Memory::getOption('required.thirdparty') !== []) {
                $thirdParty = System\Memory::getOption('required.thirdparty');
            }

            if ($thirdParty !== []) {
                foreach ($thirdParty as $package => $details) {
                    $path = sprintf('%1$svendor%3$s%2$s', RUNTIME_ROOT_PATH, $package, DS);
                    if (is_dir($path) === false) {
                        $missedThirdPartyPackages[] = ucfirst($details['name']);
                    }
                }
                if ($missedThirdPartyPackages !== []) {
                    throw new Exceptions\ErrorException(
                        sprintf(
                            '%1$s is required. Please install it',
                            implode(', ', $missedThirdPartyPackages)
                        )
                    );
                }
            } else {
                throw new Exceptions\ErrorException('Framework required third party package checking failed');
            }
        }//end thirdPartyRequiredCheck()


        /**
         *
         * @throws Exceptions\ErrorException
         */
        protected static function opcacheStatusCheck(): void
        {
            if (function_exists('opcache_get_status') === false) {
                trigger_error('Requires Opcache installations');
            } else {
                $opcache = opcache_get_status(false);
                if (empty($opcache) === false && isset($opcache['opcache_enabled']) === true) {
                    ini_set('opcache.memory_consumption', 128);
                    ini_set('opcache.interned_strings_buffer', 8);
                    ini_set('opcache.max_accelerated_files', 4000);
                    ini_set('opcache.revalidate_freq', 60);
                    ini_set('opcache.enable_cli', 1);
                    ini_set('opcache.use_cwd', 1);
                    ini_set('opcache.file_cache', APPLICATION_SYSTEM_TEMP_PATH . '/cache/.opcache;');
                    if (isset($opcache['cache_full']) === true) {
                        opcache_reset();
                    }
                } else {
                    throw new Exceptions\ErrorException('You must need to enable opcache');
                }//end if
            }//end if
        }//end opcacheStatusCheck()
    }
