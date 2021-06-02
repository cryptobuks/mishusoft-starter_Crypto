<?php declare(strict_types=1);

namespace Mishusoft\Framework\Chipsets\System;

use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Framework;
use Mishusoft\Framework\Chipsets\MPM;
use Mishusoft\Framework\Chipsets\RuntimeErrors;
use Mishusoft\Framework\Chipsets\System;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use RuntimeException;
use stdClass;

if (is_readable(Framework::installFile) === true) {
    try {
        define('BASEURL', Memory::data('framework', ['file' => Framework::installFile])->host->url);
    } catch (ErrorException | JsonException $e) {
        RuntimeErrors::fetch($e);
    }
} else {
    define('BASEURL', System::getAbsoluteInstalledURL());
}


class Memory
{
    // Declare version.
    public const VERSION = '1.0.0';

    /**
     * Absolute path of Framework config json file
     *
     * @var string
     */
    private static string $frameworkConfigFile = Framework::configFile;

    /**
     * Absolute path of Framework installed json file
     *
     * @var string
     */
    private static string $frameworkInstallFile = Framework::installFile;


    /**
     * Memory constructor.
     *
     * @throws JsonException|RuntimeException Throw exception in runtime process.
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

        Logger::write(sprintf('Check %s class existent.', ROM::class));
        if (class_exists(ROM::class) === true) {
            Logger::write(sprintf('Found %s class in system.', ROM::class));
            Logger::write(sprintf('Play with %s class.', ROM::class));
            (new ROM())->play();
        } else {
            throw new RuntimeException(__NAMESPACE__.'\ROM not found.');
        }

        Logger::write(sprintf('Check %s file existent.', self::$frameworkConfigFile));
        if (file_exists(self::$frameworkConfigFile) === false) {
            throw new RuntimeException(self::$frameworkConfigFile.' not found.');
        }

    }//end __construct()


    /**
     * Enable system memory.
     *
     * @return void
     * @throws JsonException Throw exception on json error.
     */
    public function enable(): void
    {
        Logger::write('Load data for defined required contants from memory file.');
        self::loadMemory();

    }//end enable()


    /**
     * Load Data.
     *
     * @param string $carrier Carrier name of data loader.
     * @param array  $options Options of data loader.
     *
     * @return array|object
     * @throws ErrorException Throw exception on runtime error.
     * @throws JsonException Throw exception on json error.
     */
    public static function data(string $carrier='memory', array $options=[]): array|object
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
                $default = ['container' => 'empty'];
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = System::getRequiresFile('SETUP_FILE_PATH', System::getDefaultDb());
            }

            $result = self::dataLoader($format, $default, $filename);
        } else if ($carrier === 'mpm') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = ['container' => 'empty'];
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = MPM::packageConfigFile;
            }

            if (file_exists($filename) === false) {
                MPM::install();
            }

            $result = self::dataLoader($format, $default, $filename);
        } else if ($carrier === 'framework') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = ['container' => 'empty'];
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = self::$frameworkInstallFile;
            }

            if (file_exists($filename) === false) {
                Framework::install();
            }

            $result = self::dataLoader($format, $default, $filename);
        } else if ($carrier === 'memory') {
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
                $filename = self::$frameworkConfigFile;
            }

            $result = self::dataLoader($format, $default, $filename);
        } else {
            $result = self::dataLoader($options['format'], $options['default'], $options['file']);
        }//end if

        return $result;

    }//end data()


    /**
     * Data loader of system memory.
     *
     * @param string $format   Format for data load.
     * @param array  $default  Default array data for fallback.
     * @param string $filename Absolute data file path.
     *
     * @return object|array Return data on demand.
     * @throws JsonException|ErrorException Throw json exception when error occurred.
     */
    private static function dataLoader(string $format, array $default, string $filename): object|array
    {
        $result = [];

        Logger::write(sprintf('Check read permission of %s file.', $filename));
        if (is_readable($filename) === true) {
            Logger::write(
                sprintf(
                    'Get permission %s from %s file.',
                    substr(sprintf('%o', fileperms($filename)), -4),
                    $filename
                )
            );
            Logger::write(sprintf('Collect content from %s file.', $filename));
            $contents = file_get_contents($filename);

            Logger::write(sprintf('Check content length of %s file.', $filename));
            if ($contents !== '') {
                if (strtolower($format) === 'object') {
                    if (is_string($contents) === true) {
                        Logger::write(sprintf('Create a data object from %s file\'s content.', $filename));
                        $result = _JSON::decodeToObject($contents);
                    } else {
                        Logger::write('Create a data object from default content.');
                        $result = _JSON::encodeToObject($default);
                    }

                    if (is_object($result) === false) {
                        $result = new stdClass();
                    }
                }

                if (strtolower($format) === 'array') {
                    if (is_string($contents) === true) {
                        Logger::write(sprintf('Create a data array from %s file\'s content.', $filename));
                        $result = _JSON::decodeToArray($contents);
                    } else {
                        Logger::write('Create a data object from default content.');
                        $result = $default;
                    }

                    if (is_array($result) === false) {
                        $result = [];
                    }
                }
            } else {
                throw new ErrorException($filename.' not empty.');
            }//end if
        } else {
            throw new ErrorException($filename.' not readable.');
        }//end if

        return $result;

    }//end dataLoader()


    /**
     * Load memory data.
     *
     * @param string $filename Valid file name.
     *
     * @return void
     * @throws JsonException Throw json exception when json error occurred.
     */
    public static function loadMemory(string $filename=RUNTIME_REGISTRIES_PATH.'framework.json'): void
    {
        Logger::write(sprintf('Check read permission of %s file.', self::$frameworkConfigFile));
        if (is_readable(stream_resolve_include_path($filename)) === true) {
            Logger::write(sprintf('Load data from %s file.', self::$frameworkConfigFile));
            self::read(_JSON::decodeToObject(FileSystem::read(stream_resolve_include_path($filename))));
        } else {
            Logger::write(sprintf('Not found system data file %s.', self::$frameworkConfigFile));
            Logger::write('Load default data from system.');
            self::read(_JSON::encodeToObject(FRAMEWORK_DEFAULT_CONF));
        }//end if

    }//end loadMemory()


    /**
     * Read object of framework
     *
     * @param object $framework Framework data object.
     *
     * @return void Return nothing.
     * @throws RuntimeException Throw exception when runtime error occurred.
     */
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
            define('DEFAULT_DIRECTORY_INDEX', $framework->preset->directoryIndex);
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
            throw new RuntimeException('Memory is corrupted.');
        }//end if

    }//end read()


    /**
     * Destruct Memory class
     */
    public function __destruct()
    {

    }//end __destruct()


}//end class
