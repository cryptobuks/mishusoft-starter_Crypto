<?php

namespace Mishusoft\Framework\Chipsets\System;

use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\System;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class Memory
{
    // declare version
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

        if (!class_exists(ROM::class)) {
            trigger_error(__NAMESPACE__.'\ROM not found.');
        } else {
            (new ROM())->play();
        }

        if (!file_exists(PHP_RUNTIME_REGISTRIES_PATH.'framework.json')) {
            trigger_error(PHP_RUNTIME_REGISTRIES_PATH.'framework.json not found.');
        }

    }//end __construct()


    public function enable()
    {
        self::loadCoreDefinedConstants();
        self::loadMemory();

    }//end enable()


    private static function loadCoreDefinedConstants()
    {
        // system default path declare
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
        // main constants define end
        define('PHP_LANG_VERSION', phpversion());
        define('HASH_KEY', '57c1d48ba721a');
        // define('HASH_KEY_OPENSSL', 'bRuD5WYw5wd0rdHR9yLlM6wt2vteuiniQBqE70nAuhU');
        if (is_readable(join([PHP_RUNTIME_SYSTEM_PATH, 'Registries/framework.install.json']))) {
            define('BaseURL', self::Data('framework', [
                'file' => join([PHP_RUNTIME_SYSTEM_PATH, 'Registries/framework.install.json'])
            ])->host->url);
        } else {
            define('BaseURL', System::getAbsoluteInstalledURL());
        }

        // database info
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
     * @param  string $carrier
     * @param  array  $options
     * @return mixed
     */
    public static function Data(string $carrier='memory', array $options=[]): mixed
    {
        switch ($carrier) {
            case 'config':
                $format   = array_key_exists('format', $options) ? $options['format'] : 'object';
                $default  = array_key_exists('default', $options) ? $options['default'] : ['status' => 'no_data'];
                $filename = array_key_exists('file', $options) ? $options['file'] : System::getRequiresFile('SETUP_FILE_PATH', System::getDefaultDb());
            return self::dataLoader($format, $default, $filename);

            case 'mpm':
                $format   = array_key_exists('format', $options) ? $options['format'] : 'object';
                $default  = array_key_exists('default', $options) ? $options['default'] : ['status' => 'no_data'];
                $filename = array_key_exists('file', $options) ? $options['file'] : MPM::packageConfigFile;
                if (!file_exists($filename)) {
                    MPM::install();
                }
            return self::dataLoader($format, $default, $filename);

            case 'framework':
                $format   = array_key_exists('format', $options) ? $options['format'] : 'object';
                $default  = array_key_exists('default', $options) ? $options['default'] : ['status' => 'no_data'];
                $filename = array_key_exists('file', $options) ? $options['file'] : Framework::installFile;
                if (!file_exists($filename)) {
                    Framework::install();
                }
            return self::dataLoader($format, $default, $filename);

            case 'memory':
                $format   = array_key_exists('format', $options) ? $options['format'] : 'object';
                $default  = array_key_exists('default', $options) ? $options['default'] : FRAMEWORK_DEFAULT_CONF;
                $filename = array_key_exists('file', $options) ? $options['file'] : Framework::configFile;
            return self::dataLoader($format, $default, $filename);

            default:
            return self::dataLoader($options['format'], $options['default'], $options['file']);
        }//end switch

    }//end Data()


    /**
     * @param  string $format
     * @param  array  $default
     * @param  string $filename
     * @return mixed
     */
    private static function dataLoader(string $format, array $default, string $filename): mixed
    {
        return Stream::readFromFile(
            $filename,
            function ($contents) use ($default, $format) {
                if (strlen($contents) > 0) {
                    if (strtolower($format) === 'object') {
                        if (is_string($contents)) {
                            return json_decode($contents);
                        } else {
                            return json_decode(json_encode($default));
                        }
                    } else {
                        if (strtolower($format) === 'array') {
                            return json_decode($contents, true);
                        } else {
                            return json_decode(json_encode($default), true);
                        }
                    }
                }

                return json_encode([]);
            }
        );

    }//end dataLoader()


    /**
     * @param string $filename
     */
    public static function loadMemory(string $filename=PHP_RUNTIME_REGISTRIES_PATH.'framework.json')
    {
        if (is_readable(stream_resolve_include_path($filename))) {
            self::Read(json_decode(file_get_contents(stream_resolve_include_path($filename))));
        } else {
            self::Read(json_decode(json_encode(FRAMEWORK_DEFAULT_CONF)));
        }

    }//end loadMemory()


    /**
     * @param object $framework
     */
    private static function Read(object $framework)
    {
        if (!empty($framework)) {
            // Required constant variables declared here
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

            // alias of default system layout
            define('APP_USERNAME_PREFIX', $framework->prefix->char.$framework->prefix->separator);
            define('DEFAULT_OPERATING_SYSTEM_USER', APP_USERNAME_PREFIX.$framework->preset->user);
            define('DEFAULT_OPERATING_SYSTEM_PASSWORD', $framework->preset->user);
            define('DEFAULT_CONTROLLER', $framework->preset->directoryIndex);
            define('SESSION_TIME', $framework->preset->sessionDuration);
            define('WEB_CONFIG_TABLE', $framework->preset->config);

            define('DEFAULT_DATABASE', 'system');

            // Mishusoft associates files format
            define('Mishusoft_Database_File_Format', '.msdb');
            define('Mishusoft_Database_Dump_File_Format', '.mdf');
            define('Mishusoft_Configuration_File_Format', '.mscf');

            define('USER_PASSWORD_LENGTH_LIMIT', 8);

            // support address
            define('SUPPORT_EMAIL_ADDRESS', $framework->company->mail);
            define('SUPPORT_WEBSITE', $framework->company->support);
            define('SUPPORT_CONTACT_TITLE', 'Feedback');

            // system exclude dir
            define('SYSTEM_EXCLUDE_DIRS', $framework->exclude->dir);

            /*
                system extensions*/
            /*
                define('SYSTEM_REQUIRED_EXTENSIONS', $framework->required->extensions);
            define('SYSTEM_REQUIRED_THIRD_PARTY', $framework->required->thirdparty);*/
        } else {
            trigger_error('Memory is corrupted.');
        }//end if

    }//end Read()


    public function __destruct()
    {

    }//end __destruct()


}//end class
