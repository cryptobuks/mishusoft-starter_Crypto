<?php

namespace Mishusoft\Framework;

use Mishusoft\System\Memory;
use Mishusoft\Exceptions;

trait Validation
{


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    protected static function extensionRequiredCheck(): void
    {
        $requiredExtensions = (array) Memory::data()->required->extensions;
        if (count($requiredExtensions) > 0) {
            foreach ($requiredExtensions as $extension) {
                if (extension_loaded($extension) === false) {
                    throw new Exceptions\ErrorException(sprintf('%s extension is required', ucfirst($extension)));
                }
            }
        } else {
            throw new Exceptions\ErrorException('Framework required extension checking failed');
        }
    }//end extensionRequiredCheck()



    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    protected static function thirdPartyRequiredCheck(): void
    {
        $thirdParty = (array) Memory::data()->required->thirdparty;
        if (count($thirdParty) > 0) {
            foreach ($thirdParty as $package => $details) {
                $path = sprintf('%1$svendor%3$s%2$s', self::rootPath(), $package, DS);
                if (is_dir($path) === false) {
                    throw new Exceptions\ErrorException(
                        sprintf(
                            '%1$s is required. Please run `%2$s` or for fresh download visit %3$s',
                            ucfirst($details->name),
                            $details->command,
                            $details->url
                        )
                    );
                }
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
                ini_set('opcache.file_cache', APPLICATION_SYSTEM_TEMP_PATH.'/cache/.opcache;');
                if (isset($opcache['cache_full']) === true) {
                    opcache_reset();
                }
            } else {
                throw new Exceptions\ErrorException('You must need to enable opcache');
            }//end if
        }//end if
    }//end opcacheStatusCheck()
}
