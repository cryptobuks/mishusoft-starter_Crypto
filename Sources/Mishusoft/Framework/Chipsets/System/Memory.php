<?php

namespace Mishusoft\Framework\Chipsets\System;

use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\System;

class Memory
{
    // Declare version.
    public const VERSION = '1.0.0';


    /**
     * C_MOS constructor.
     */
    public function __construct()
    {
        /*
         * all version list
         * Framework - 1.0.2 <-Init from Framework::VERSION->
         * Mishusoft - 1.0.2 <-Init from Mishusoft::VERSION->
         * mpm - 1.0.0 <-Init from MPM::VERSION->
         * MishusoftSQLStandalone - 1.0.0 <-Init from MishusoftSQLStandalone::VERSION->
         * ..................................
         */

        if (class_exists(ROM::class) === false) {
            trigger_error(__NAMESPACE__.'\ROM not found.');
        } else {
            (new ROM())->play();
        }

        if (file_exists(PHP_RUNTIME_REGISTRIES_PATH.'framework.json') === false) {
            trigger_error(PHP_RUNTIME_REGISTRIES_PATH.'framework.json not found.');
        }

    }//end __construct()


    /**
     * @throws JsonException
     */
    public function enable(): void
    {
        self::loadCoreDefinedConstants();
        self::loadMemory();

    }//end enable()


    /**
     * Load core constants.
     */


    private static function loadCoreDefinedConstants(): void
    {
        // System default path declare.
        define('MS_SYSTEM_PATH', PHP_RUNTIME_ROOT_PATH.'Mishusoft'.DIRECTORY_SEPARATOR);
        define('MS_FRAMEWORK_PATH', PHP_RUNTIME_SYSTEM_PATH.'Framework'.DIRECTORY_SEPARATOR);
        define('MS_PACKAGES_PATH', PHP_RUNTIME_SYSTEM_PATH.'Packages'.DIRECTORY_SEPARATOR);
        define('MS_THEMES_PATH', PHP_RUNTIME_SYSTEM_PATH.'Themes'.DIRECTORY_SEPARATOR);
        define('MS_WIDGETS_PATH', PHP_RUNTIME_SYSTEM_PATH.'Widgets'.DIRECTORY_SEPARATOR);
        define('MS_PAGINATION_PATH', PHP_RUNTIME_SYSTEM_PATH.'Views/Pagination'.DIRECTORY_SEPARATOR);

        define('MS_STORAGE_PATH', PHP_RUNTIME_ROOT_PATH.'Storages'.DIRECTORY_SEPARATOR);
        define('MS_DATABASES_PATH', MS_STORAGE_PATH.'0/databases'.DIRECTORY_SEPARATOR);
        define('MS_ASSETS_MEDIA_PATH', MS_STORAGE_PATH.'0/assets'.DIRECTORY_SEPARATOR);
        define('MS_PRIVATE_MEDIA_PATH', MS_STORAGE_PATH.'0/media'.DIRECTORY_SEPARATOR);
        define('MS_PRIVATE_LOCALIZATIONS_PATH', MS_STORAGE_PATH.'0/localization'.DIRECTORY_SEPARATOR);
        define('MS_UPLOADS_MEDIA_PATH', MS_STORAGE_PATH.'0/media/uploads'.DIRECTORY_SEPARATOR);

        define('MS_SYSTEM_TEMP_PATH', PHP_RUNTIME_ROOT_PATH.'tmp'.DIRECTORY_SEPARATOR);
        // Main constants define end.
        define('PHP_LANG_VERSION', phpversion());
        define('HASH_KEY', '57c1d48ba721a');
        define('HASH_KEY_OPENSSL', 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU');
        if (is_readable(implode([PHP_RUNTIME_SYSTEM_PATH, 'Registries/framework.install.json']))) {
            define(
                'BASEURL',
                self::Data(
                    'framework',
                    [
                        'file' => implode([PHP_RUNTIME_SYSTEM_PATH, 'Registries/framework.install.json']),
                    ]
                )->host->url
            );
        } else {
            define('BASEURL', System::getAbsoluteInstalledURL());
        }

        // database info.
        define('MS_DB_USER_NAME', 'superuser');
        define('MS_DB_USER_PASSWORD', 'superuser');

        /*
            define('MS_MEDIA_IMAGES_LOCAL_PATH', MS_ASSETS_MEDIA_PATH . 'images' . DIRECTORY_SEPARATOR);
            define('MS_MEDIA_IMAGES_REMOTE_PATH', join([BaseURL , 'libraries/images' , DIRECTORY_SEPARATOR]));
            define('MS_MEDIA_LOGOS_LOCAL_PATH', MS_ASSETS_MEDIA_PATH . 'favicons' . DIRECTORY_SEPARATOR);
            define('MS_MEDIA_LOGOS_REMOTE_PATH', join([BaseURL , 'libraries/images/logos' , DIRECTORY_SEPARATOR]));
            define('MS_MEDIA_PROFILE_PHOTOS_LOCAL_PATH', MS_ASSETS_MEDIA_PATH . 'profile_photos' . DIRECTORY_SEPARATOR);
            define('MS_MEDIA_PROFILE_PHOTOS_REMOTE_PATH', join([BaseURL , 'libraries/images/avatars' , DIRECTORY_SEPARATOR]));
            define('MS_MEDIA_UPLOADS_LOCAL_PATH', MS_ASSETS_MEDIA_PATH . 'uploads' . DIRECTORY_SEPARATOR);
        define('MS_MEDIA_UPLOADS_REMOTE_PATH', join([BaseURL , 'libraries/uploads' , DIRECTORY_SEPARATOR]));*/

    }//end loadCoreDefinedConstants()


    /**
     * Load Data.
     *
     * @param  string $carrier
     * @param  array  $options
     * @return mixed
     */


    public static function data(string $carrier='memory', array $options=[]): mixed
    {
        if ($carrier === 'config') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = ['status' => 'no_data'];
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = System::getRequiresFile('SETUP_FILE_PATH', System::getDefaultDb());
            }

            return self::dataLoader($format, $default, $filename);
        }//end if

        if ($carrier === 'mpm') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = ['status' => 'no_data'];
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = MPM::packageConfigFile;
            }

            if (file_exists($filename) === false) {
                MPM::install();
            }

            return self::dataLoader($format, $default, $filename);
        }//end if

        if ($carrier === 'framework') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = ['status' => 'no_data'];
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = Framework::installFile;
            }

            if (file_exists($filename) === false) {
                Framework::install();
            }

            return self::dataLoader($format, $default, $filename);
        }//end if

        if ($carrier === 'memory') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = FRAMEWORK_DEFAULT_CONF;
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = Framework::configFile;
            }

            return self::dataLoader($format, $default, $filename);
        }//end if

        return self::dataLoader($options['format'], $options['default'], $options['file']);

    }//end data()


    /**
     * @param  string $format
     * @param  array  $default
     * @param  string $filename
     * @throws JsonException
     * @throws ErrorException
     */
    private static function dataLoader(string $format, array $default, string $filename)
    {
        if (is_readable($filename) === true) {
            $contents = file_get_contents($filename);

            if ($contents !== '') {
                if (strtolower($format) === 'object') {
                    if (is_string($contents) === true) {
                        $result = json_decode($contents, false, 512, JSON_THROW_ON_ERROR);
                    } else {
                        $result = json_decode(
                            json_encode($default, JSON_THROW_ON_ERROR),
                            false,
                            512,
                            JSON_THROW_ON_ERROR
                        );
                    }

                    return $result;
                }

                if (strtolower($format) === 'array') {
                    if (is_string($contents) === true) {
                        $result = json_decode($contents, true, 512, JSON_THROW_ON_ERROR);
                    } else {
                        $result = json_decode(
                            json_encode($default, JSON_THROW_ON_ERROR),
                            true,
                            512,
                            JSON_THROW_ON_ERROR
                        );
                    }

                    return $result;
                }
            } else {
                return json_encode([], JSON_THROW_ON_ERROR);
            }//end if
        } else {
            throw new ErrorException($filename.' not readable.');
        }//end if

        return false;

    }//end dataLoader()


    /**
     * Load memory data.
     *
     * @param  string $filename Valid file name.
     * @throws JsonException
     */


    public static function loadMemory(string $filename=PHP_RUNTIME_REGISTRIES_PATH.'framework.json'): void
    {
        if (is_readable(stream_resolve_include_path($filename)) === true) {
            self::read(
                json_decode(
                    file_get_contents(stream_resolve_include_path($filename)),
                    false,
                    512,
                    JSON_THROW_ON_ERROR
                )
            );
        } else {
            self::read(
                json_decode(
                    json_encode(FRAMEWORK_DEFAULT_CONF, JSON_THROW_ON_ERROR),
                    false,
                    512,
                    JSON_THROW_ON_ERROR
                )
            );
        }

    }//end loadMemory()


    /**
     * Read object of framework
     *
     * @param  object $framework Framework data object.
     * @return void Return nothing.
     *
     * */
    private static function read(object $framework): void
    {
        if (empty($framework) === false) {
            // Required constant variables declared here.
            define('DEFAULT_APP_NAME', $framework->name);
            define('FRAMEWORK_NAME', $framework->fullName);
            define('FRAMEWORK_DESCRIPTION', $framework->descriptions);
            define('DEFAULT_APP_AUTHOR', $framework->author->name);
            define('DEFAULT_APP_COMPANY_NAME', $framework->company->name);
            define('DEFAULT_APP_DESCRIPTIONS', $framework->company->shortDescription);
            define('DEFAULT_APP_DESCRIPTIONS_FULL', $framework->company->detailsDescription);
            define('DEFAULT_APP_COMPANY_WEB_ADDRESS', $framework->company->website);
            define('DEFAULT_DATE_OF_BIRTH', $framework->author->dateOfBirth);
            define('DEFAULT_DATA_CHAR_SET', $framework->charset);
            define('DEFAULT_DATA_TABLE_PREFIX', $framework->prefix->char);
            define('DEFAULT_SYSTEM_LAYOUT', $framework->preset->theme);
            define('DEFAULT_SYSTEM_THEME', $framework->preset->theme);

            // Alias of default system layout.
            define('APP_USERNAME_PREFIX', $framework->prefix->char.$framework->prefix->separator);
            define('DEFAULT_OPERATING_SYSTEM_USER', APP_USERNAME_PREFIX.$framework->preset->user);
            define('DEFAULT_OPERATING_SYSTEM_PASSWORD', $framework->preset->user);
            define('DEFAULT_CONTROLLER', $framework->preset->directoryIndex);
            define('SESSION_TIME', $framework->preset->sessionDuration);
            define('WEB_CONFIG_TABLE', $framework->preset->config);

            define('DEFAULT_DATABASE', 'system');

            // Mishusoft associates files format.
            define('MISHUSOFT_DATABASE_FILE_FORMAT', '.msdb');
            define('MISHUSOFT_DATABASE_DUMP_FILE_FORMAT', '.mdf');
            define('MISHUSOFT_CONFIGURATION_FILE_FORMAT', '.mscf');

            define('USER_PASSWORD_LENGTH_LIMIT', 8);

            // Support address.
            define('SUPPORT_EMAIL_ADDRESS', $framework->company->mail);
            define('SUPPORT_WEBSITE', $framework->company->support);
            define('SUPPORT_CONTACT_TITLE', 'Feedback');

            // System exclude dir.
            define('SYSTEM_EXCLUDE_DIRS', $framework->exclude->dir);
        } else {
            trigger_error('Memory is corrupted.');
        }//end if

    }//end read()


    /**
     * Destruct Memory class
     */
    public function __destruct()
    {

    }//end __destruct()


}//end class
