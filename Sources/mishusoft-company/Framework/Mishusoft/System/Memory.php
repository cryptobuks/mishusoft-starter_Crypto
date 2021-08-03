<?php
declare(strict_types=1);


namespace Mishusoft\System;

use JsonException;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Framework;
use Mishusoft\MPM;
use Mishusoft\System;
use Mishusoft\Utility\JSON;
use stdClass;

class Memory
{

    private static array $data = [];


    /**
     * Enable system memory.
     *
     * @return void
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public static function enable(): void
    {
        Logger::write('Start data collecting and load to memory');
        self::validate();
        self::loadFrameworkMemory();
        self::baseUrlSet();
        Logger::write('End data collecting and load to memory');
    }//end enable()


    /**
     * Check memory directory, create directory when not found.
     * Check config file, create and store default data when not found.
     * Check validation of stored data, restore to default data when configuration data corrupted
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    private static function validate(): void
    {

        /*
         * Framework configuration directory [default data path]
         *
         * Check read permission of parent directory of Framework configuration directory;
         * throw read error message when not permitted;
         */

        // Reduce time and space
        $defaultMemoryDirectory = Storage::dataDriveStoragesPath();
        $rootMemoryDirectory = dirname($defaultMemoryDirectory);
        $configFile = Framework::configFile();
        $installFile = Framework::configFile();
        $configs = FRAMEWORK::defaultConfig();

        if (is_writable($defaultMemoryDirectory) === false) {
            throw new PermissionRequiredException(
                sprintf('Unable to write %s', $defaultMemoryDirectory)
            );
        }

        /*
         * Check read permission of Framework configuration directory [default php runtime registries path]
         * throw read error message when not permitted
         */

        if (is_readable($rootMemoryDirectory) === false) {
            throw new PermissionRequiredException(
                sprintf('Unable to read %s', $rootMemoryDirectory)
            );
        }

        /*
          * Check framework configuration file,
          * If the configuration not found, then create this file.
          * If the configuration file is empty, then rewrite this file.
          * If the configuration file is corrupted, then rewrite this file.
          */


        Logger::write(sprintf('Check %s file existent.', $configFile));
        if (file_exists($configFile) === false) {
            Logger::write(sprintf('Check failed. %s file not exists.', $configFile));
            Logger::write(sprintf('Creating new %s file with default config.', $configFile));
            FileSystem\Yaml::emitFile($configFile, $configs);
        } else {
            $content = FileSystem\Yaml::parseFile($configFile);
            Logger::write(sprintf('Check %s file\'s content length.', $configFile));
            if (count($content) === 0) {
                Logger::write(sprintf('The content of %s file is empty.', $configFile));
                Logger::write(sprintf('Creating new %s file with default config.', $configFile));
                FileSystem\Yaml::emitFile($configFile, $configs);
            }
        }

        Logger::write(sprintf('Check %s file existent.', $installFile));
        if (file_exists($installFile) === false) {
            Logger::write(sprintf('Check failed. %s file not exists', $installFile));
            Logger::write(sprintf('Creating new %s file', $installFile));
            Framework::install();
        } else {
            $installContent = FileSystem\Yaml::parseFile($installFile);
            Logger::write(sprintf('Check %s file\'s content length', $installFile));
            if (count($installContent) === 0) {
                Logger::write(sprintf('The content of %s file is empty', $installFile));
                Logger::write(sprintf('Creating new %s file', $installFile));
                Framework::install();
            }
        }
    }

    /**
     * Load Data.
     *
     * @param string $carrier Carrier name of data loader.
     * @param array $options Options of data loader.
     *
     * @return array|object
     * @throws InvalidArgumentException
     * @throws JsonException Throw exception on json error.
     * @throws PermissionRequiredException
     * @throws ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws RuntimeException
     */
    public static function data(string $carrier = 'memory', array $options = []): array|object
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

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }
        elseif ($carrier === 'mpm') {
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
                $filename = MPM::configFile();
            }

            if (file_exists($filename) === false) {
                MPM::install();
            }

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }
        elseif ($carrier === 'framework') {
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
                $filename = Framework::installFile();
            }

            if (file_exists($filename) === false) {
                Framework::install();
            }

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }
        elseif ($carrier === 'memory') {
            if (array_key_exists('format', $options) === true) {
                $format = $options['format'];
            } else {
                $format = 'object';
            }

            if (array_key_exists('default', $options) === true) {
                $default = $options['default'];
            } else {
                $default = FRAMEWORK::defaultConfig();
            }

            if (array_key_exists('file', $options) === true) {
                $filename = $options['file'];
            } else {
                $filename = Framework::configFile();
            }

            $result = self::dataLoader($carrier, $format, $default, $filename);
        }
        else {
            $result = self::dataLoader($carrier, $options['format'], $options['default'], $options['file']);
        }//end if

        return $result;
    }//end data()


    /**
     * Data loader of system memory.
     *
     * @param string $format Format for data load.
     * @param array $default Default array data for fallback.
     * @param string $filename Absolute data file path.
     *
     * @return object|array Return data on demand.
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws RuntimeException
     */
    private static function dataLoader(string $carrier, string $format, array $default, string $filename): object|array
    {
        $result = [];
        if (self::isValid($carrier, $format, $filename)) {
            $result = self::$data[$carrier][$format];
        } else {
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
                $contents = FileSystem::read($filename);
                $contentsArray = FileSystem\Yaml::parseFile($filename);

                Logger::write(sprintf('Check content length of %s file.', $filename));
                if ($contents !== '') {
                    if (strtolower($format) === 'object') {
                        if (is_string($contents) === true) {
                            Logger::write(sprintf('Create a data object from %s file\'s content.', $filename));
                            $result = JSON::encodeToObject($contentsArray);
                        } else {
                            Logger::write('Create a data object from default content.');
                            $result = JSON::encodeToObject($default);
                        }

                        if (is_object($result) === false) {
                            $result = new stdClass();
                        }
                    }

                    if (strtolower($format) === 'array') {
                        if (is_string($contents) === true) {
                            Logger::write(sprintf('Create a data array from %s file\'s content.', $filename));
                            $result = $contentsArray;
                        } else {
                            Logger::write('Create a data object from default content.');
                            $result = $default;
                        }

                        if (is_array($result) === false) {
                            $result = [];
                        }
                    }

                    self::$data[$carrier]['default'] = $default;
                    self::$data[$carrier]['filename'] = $filename;
                    self::$data[$carrier][$format] = $result;
                } else {
                    throw new ErrorException($filename . ' not empty.');
                }//end if
            } else {
                throw new ErrorException($filename . ' not readable.');
            }//end if

            Logger::write('End the process of data grabber from' . $filename);
        }

        return $result;
    }//end dataLoader()

    /**
     * @param string $carrier
     * @param string $format
     * @return bool
     */
    private static function isValid(string $carrier, string $format): bool
    {
        //self::$data[$carrier][$format][$default][$filename]
        return array_key_exists($carrier, self::$data) && array_key_exists($format, self::$data[$carrier])
            && array_key_exists('default', self::$data[$carrier])
            && array_key_exists('filename', self::$data[$carrier]);
    }

    /**
     * Load framework memory data.
     *
     * @return void
     * @throws InvalidArgumentException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException Throw json exception when json error occurred.
     */
    private static function loadFrameworkMemory(): void
    {
        Logger::write(sprintf('Check read permission of %s file.', Framework::configFile()));
        if (is_readable(stream_resolve_include_path(Framework::configFile())) === true) {
            Logger::write(sprintf('Load data from %s file.', Framework::configFile()));
            self::read(JSON::encodeToObject(FileSystem\Yaml::parseFile(Framework::configFile())));
        } else {
            Logger::write(sprintf('Not found system data file %s.', Framework::configFile()));
            Logger::write('Load default data from system.');
            self::read(JSON::encodeToObject(FRAMEWORK::defaultConfig()));
        }//end if
    }//end loadMemory()

    /**
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws RuntimeException
     */
    private static function baseUrlSet(): void
    {
        define('BASE_URL', JSON::encodeToObject(FileSystem\Yaml::parseFile(Framework::installFile()))->host->url);
    }


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
            define('APP_USERNAME_PREFIX', $framework->prefix->char . $framework->prefix->separator);
            define('DEFAULT_OPERATING_SYSTEM_USER', APP_USERNAME_PREFIX . $framework->preset->user);
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
