<?php declare(strict_types=1);


namespace Mishusoft\System;

use Mishusoft\Base;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Framework;
use Mishusoft\MPM;
use Mishusoft\System;
use Mishusoft\Utility\Implement;
use stdClass;

class Memory extends Base
{
    private static array $data = [];
    private static string $cacheFile = '';
    private static Framework $framework;
    private static string $dataDrive;


    /**
     * Enable system memory.
     *
     * @param Framework $framework
     * @return void
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    public static function enable(Framework $framework): void
    {
        self::$framework = $framework;
        self::$dataDrive = Storage::dataDriveStoragesPath();

        self::validation();
        self::loadFrameworkMemory();
        self::baseUrlSet();
    }//end enable()


    /**
     * Check memory directory, create directory when not found.
     * Check config file, create and store default data when not found.
     * Check validation of stored data, restore to default data when configuration data corrupted
     *
     * @throws PermissionRequiredException
     * @throws RuntimeException
     */
    private static function validation(): void
    {

        /*
         * Framework configuration directory [default data path]
         *
         * Check read permission of parent directory of Framework configuration directory;
         * throw read error message when not permitted;
         */

        if (is_writable(self::$dataDrive) === false) {
            throw new PermissionRequiredException(
                sprintf('Unable to write %s', self::$dataDrive)
            );
        }

        /*
         * Check read permission of Framework configuration directory [default php runtime registries path]
         * throw read error message when not permitted
         */

        if (is_readable(dirname(self::$dataDrive)) === false) {
            throw new PermissionRequiredException(
                sprintf('Unable to read %s', dirname(self::$dataDrive))
            );
        }

        /*
          * Check framework configuration file,
          * If the configuration not found, then create this file.
          * If the configuration file is empty, then rewrite this file.
          * If the configuration file is corrupted, then rewrite this file.
          */

        FileSystem::makeDirectory(dirname(self::$framework::configFile()));
        FileSystem::check(self::$framework::configFile(), function ($filename) {
            FileSystem\Yaml::emitFile($filename, self::$framework::defaultConfiguration());
        });

//        FileSystem::check(self::$framework::installFile(), function () {
//            self::$framework::install();
//        });
    }

    /**
     * Load Data.
     *
     * @param string $carrier Carrier name of data loader.
     * @param array $options Options of data loader.
     *
     * @return array|object
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function data(string $carrier = 'memory', array $options = []): array|object
    {
        self::$cacheFile = self::dFile(self::cacheDataFile('Memory', 'data'));
        $result = '';

        //validation for every format and default value.
        if (array_key_exists('format', $options) === true) {
            $format = $options['format'];
        } else {
            $format = 'object';
        }//end if

        if (array_key_exists('default', $options) === true) {
            $default = $options['default'];
        } else {
            $default = ['container' => 'empty'];
        }//end if
        //end of validation

        //set filename according to carrier
        if ($carrier === 'config') {
            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = System::getRequiresFile('SETUP_FILE_PATH', System::getDefaultDb());
            }//end if

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }//end if

        if ($carrier === 'mpm') {
            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = MPM\Classic::configFile();
            }//end if

            if (file_exists($filename) === false) {
                //MPM\Classic::install();
                throw new RuntimeException\NotFoundException(sprintf('%1$s not found', $filename));
            }//end if

            //$filename = 'test';
            $result = self::dataLoader($carrier, $format, $default, $filename);
        }//end if

        if ($carrier === 'framework') {
            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = Framework::installFile();
            }//end if

            if (file_exists($filename) === false) {
                //Framework::install();
                throw new RuntimeException\NotFoundException(sprintf('%1$s not found', $filename));
            }//end if

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }//end if

        if ($carrier === 'memory') {
            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = Framework::defaultConfiguration();
            }//end if

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = Framework::configFile();
            }//end if

            if (file_exists($filename) === false) {
                Framework::makeConfigure();
            }//end if

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }//end if


        if (!in_array(getType($result), ['object','array'], true)) {
            if (count($options) > 0) {
                $result = self::dataLoader($carrier, $format, $default, $options['file']);
            } else {
                throw new RuntimeException\NotFoundException('Data file name can not be empty');
            }
        }//end if
        return $result;
    }//end data()


    /**
     * Data loader of system memory.
     *
     * @param string $carrier
     * @param string $format Format for data load.
     * @param array $default Default array data for fallback.
     * @param string $filename Absolute data file path.
     *
     * @return object|array Return data on demand.
     * @throws ErrorException
     * @throws RuntimeException
     */
    private static function dataLoader(string $carrier, string $format, array $default, string $filename): object|array
    {
        $result = [];
        if (self::isValid($carrier, $format)) {
            $result = self::$data[$carrier][$format];
        } else {
            Log::info(sprintf('Check read permission of %s file.', $filename));
            if (is_readable($filename) === true) {
                Log::info(
                    sprintf(
                        'Get permission %s from %s file.',
                        substr(sprintf('%o', fileperms($filename)), -4),
                        $filename
                    )
                );
                Log::info(sprintf('Collect content from %s file.', $filename));
                $contents = FileSystem::read($filename);
                $contentsArray = FileSystem\Yaml::parseFile($filename);

                Log::info(sprintf('Check content length of %s file.', $filename));
                if ($contents !== '') {
                    if (strtolower($format) === 'object') {
                        if (is_string($contents) === true) {
                            Log::info(sprintf('Create a data object from %s file\'s content.', $filename));
                            //$result = JSON::encodeToObject($contentsArray);
                            $result = Implement::arrayToObject($contentsArray);
                        } else {
                            Log::info('Create a data object from default content.');
                            //$result = JSON::encodeToObject($default);
                            $result = Implement::arrayToObject($default);
                        }

                        if (is_object($result) === false) {
                            $result = new stdClass();
                        }
                    }

                    if (strtolower($format) === 'array') {
                        if (is_string($contents) === true) {
                            Log::info(sprintf('Create a data array from %s file\'s content.', $filename));
                            $result = $contentsArray;
                        } else {
                            Log::info('Create a data object from default content.');
                            $result = $default;
                        }

                        if (is_array($result) === false) {
                            $result = [];
                        }
                    }

                    if (MEMORY_CACHE_DATA_UPDATE === true) {
                        $reserved = $format === 'object' ? Implement::objectToArray($result) : $result;

                        if (!empty($reserved)) {
                            self::$data[$carrier]['default'] = $default;
                            self::$data[$carrier]['filename'] = $filename;
                            self::$data[$carrier][$format] = $reserved;

                            //make a cache file for memory
                            FileSystem::makeDirectory(dirname(self::$cacheFile));
                            FileSystem\Yaml::emitFile(self::$cacheFile, self::$data);
                        }
                    }
                } else {
                    throw new ErrorException($filename . ' not empty');
                }//end if
            } else {
                throw new ErrorException($filename . ' not readable');
            }//end if

            Log::info('End the process of data grabber from' . $filename);
        }

        return $result;
    }//end dataLoader()

    /**
     * @param string $carrier
     * @param string $format
     * @return bool
     * @throws RuntimeException
     */
    private static function isValid(string $carrier, string $format): bool
    {
        if (MEMORY_CACHE_DATA_UPDATE
            && file_exists(self::$cacheFile)) {
            self::$data = FileSystem\Yaml::parseFile(self::$cacheFile);

            if (($format === 'object')
                && isset(self::$data[$carrier][$format])) {
                self::$data[$carrier][$format] = Implement::arrayToObject(self::$data[$carrier][$format]);
            }
        }

        //self::$data[$carrier][$format][$default][$filename]
        return array_key_exists($carrier, self::$data) && array_key_exists($format, self::$data[$carrier])
            && array_key_exists('default', self::$data[$carrier])
            && array_key_exists('filename', self::$data[$carrier]);
    }

    /**
     * Load framework memory data.
     *
     * @return void
     * @throws RuntimeException
     */
    private static function loadFrameworkMemory(): void
    {
        Log::info(sprintf('Check read permission of %s file.', self::$framework::configFile()));
        if (is_readable(self::$framework::configFile()) === true) {
            Log::info(sprintf('Load data from %s file.', self::$framework::configFile()));
            self::read(FileSystem\Yaml::parseFile(self::$framework::configFile()));
        } else {
            Log::info(sprintf('Not found system data file %s.', self::$framework::configFile()));
            Log::info('Load default data from system.');
            self::read(self::$framework::defaultConfiguration());
        }//end if
    }//end loadMemory()

    /**
     * @throws RuntimeException
     */
    private static function baseUrlSet(): void
    {
        if (file_exists(self::$framework::installFile())) {
            $config = FileSystem\Yaml::parseFile(self::$framework::installFile());
            define('BASE_URL', $config['host']['url']);
        } else {
            define('BASE_URL', Registry::Browser()->getURLHostname());
        }
    }


    /**
     * Read object of framework
     *
     * @param array $configuration Framework configuration object.
     *
     * @return void Return nothing.
     * @throws RuntimeException Throw exception when runtime error occurred.
     */
    private static function read(array $configuration): void
    {
        // Required constant variables declared here.
        if (count($configuration) > 0) {
            //Core constants
            define('DEFAULT_APP_NAME', $configuration['name']);
            define('FRAMEWORK_NAME', $configuration['fullName']);
            define('FRAMEWORK_DESCRIPTION', $configuration['descriptions']);
            define('DEFAULT_APP_AUTHOR', $configuration['author']['name']);
            define('DEFAULT_APP_COMPANY_NAME', $configuration['company']['name']);
            define('DEFAULT_APP_DESCRIPTIONS', $configuration['company']['shortDescription']);
            define('DEFAULT_APP_DESCRIPTIONS_FULL', $configuration['company']['detailsDescription']);
            define('DEFAULT_APP_COMPANY_WEB_ADDRESS', $configuration['company']['website']);
            define('DEFAULT_DATE_OF_BIRTH', $configuration['author']['dateOfBirth']);
            define('DEFAULT_DATA_CHAR_SET', $configuration['charset']);
            define('DEFAULT_DATA_TABLE_PREFIX', $configuration['prefix']['char']);

            //Preset constants
            // Alias of default system layout.
            define('DEFAULT_SYSTEM_LAYOUT', $configuration['preset']['theme']);
            define('DEFAULT_SYSTEM_THEME', $configuration['preset']['theme']);
            define('DEFAULT_OPERATING_SYSTEM_PASSWORD', $configuration['preset']['user']);
            define('DEFAULT_CONTROLLER', $configuration['preset']['directoryIndex']);
            define('DEFAULT_DIRECTORY_INDEX', $configuration['preset']['directoryIndex']);
            define('SESSION_TIME', $configuration['preset']['sessionDuration']);
            define('WEB_CONFIG_TABLE', $configuration['preset']['config']);

            //prefix constants
            define(
                'APP_USERNAME_PREFIX',
                sprintf(
                    '%1$s%2$s',
                    $configuration['prefix']['char'],
                    $configuration['prefix']['separator']
                )
            );
            define(
                'DEFAULT_OPERATING_SYSTEM_USER',
                sprintf(
                    '%1$s%2$s',
                    APP_USERNAME_PREFIX,
                    $configuration['preset']['user']
                )
            );

            define('DB_DEFAULT_NAME', 'system');
            define('DB_USER_NAME', DEFAULT_OPERATING_SYSTEM_USER);
            define('DB_USER_PASSWORD', DEFAULT_OPERATING_SYSTEM_PASSWORD);
            define('DB_WEB_CONFIG_TABLE', $configuration['preset']['config']);

            // Mishusoft associates files format.
            define('MISHUSOFT_DATABASE_FILE_FORMAT', '.msdb');
            define('MISHUSOFT_DATABASE_DUMP_FILE_FORMAT', '.mdf');
            define('MISHUSOFT_CONFIGURATION_FILE_FORMAT', '.mscf');

            define('USER_PASSWORD_LENGTH_LIMIT', 8);

            // Support address.
            define('SUPPORT_EMAIL_ADDRESS', $configuration['company']['mail']);
            define('SUPPORT_WEBSITE', $configuration['company']['support']);
            define('SUPPORT_CONTACT_TITLE', 'Feedback');

            // System exclude dir.
            define('SYSTEM_EXCLUDE_DIRS', $configuration['exclude']['dir']);
        } else {
            throw new RuntimeException('Framework configuration is corrupted.');
        }//end if
    }//end read()
}//end class
