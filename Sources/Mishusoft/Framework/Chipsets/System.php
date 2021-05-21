<?php

namespace Mishusoft\Framework\Chipsets;

use Exception;
use JsonException;
use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\Databases\MishusoftSQLStandalone;
use Mishusoft\Framework\Chipsets\Databases\MySqli;
use Mishusoft\Framework\Chipsets\Databases\PdoMySQL;
use Mishusoft\Framework\Chipsets\Http\Browser;
use Mishusoft\Framework\Chipsets\Http\IP;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Network;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Utility\_Array;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\_String;
use Mishusoft\Framework\Chipsets\Utility\Stream;
use RuntimeException;

class System
{
    // Set Mishusoft version
    const VERSION                 = '4.0.0';
    const defaultConfigProperties = [
        'dbms'    => [],
        'default' => '',
    ];

    /**
     * @var array
     */
    public static array $event = [];

    /**
     * @var string
     */
    public static string $StepTitle = '';

    /**
     * @var string
     */
    public static string $Message = '';

    /**
     * @var string
     */
    private static string $databaseFile = '';

    /**
     * @var string
     */
    private static string $Step = '';

    /**
     * @var string
     */
    private static string $configDir;

    /**
     * @var string
     */
    private static string $setupFile;

    /**
     * @var string
     */
    private static string $appSecurityFileName;

    /**
     * @var string
     */
    private static string $appSecurityBackupFileName;

    /**
     * @var string
     */
    private static string $appSecurityDirectory;

    /**
     * @var string
     */
    private static string $appSecurityFile;

    /**
     * @var string
     */
    private static string $appSecurityFileBackup;

    /**
     * @var string
     */
    private static string $configurePropertiesFile;

    /**
     * @var string
     */
    private static string $configurePropertiesFileName;

    /**
     * @var string
     */
    private static string $appSecurityFileBackupDirectory;

    /**
     * @var string
     */
    private static string $configServerDir;


    /**
     * @throws JsonException
     */
    public static function activate(): void
    {
        self::initializeSecurity();
        self::getProgressedSystemStatus(self::getRequiresFile('SECURITY_FILE_PATH'));

    }//end activate()


    /**
     * @param string $status
     * @throws JsonException
     */
    private static function initializeSecurity(string $status='Installing'): void
    {
        $data = [
            'app'    => [
                'version'           => MPM::getProperty('version'),
                'release'           => MPM::getProperty('release'),
                'author'            => DEFAULT_APP_AUTHOR,
                'currentStatus'     => $status,
                'installedLocation' => self::getAbsoluteInstalledURL(),
            ],
            'client' => [
                'IP'      => IP::get(),
                'OS'      => (new Browser())->getDeviceNameFull(),
                'browser' => (new Browser())->getBrowserNameFull(),
            ],
        ];

        self::verifySecurityFile(json_encode($data, JSON_THROW_ON_ERROR));

    }//end initializeSecurity()


    /**
     * @return string
     */
    public static function getAbsoluteInstalledURL(): string
    {
        return Browser::url_origin($_SERVER).MS_SERVER_PATH;

    }//end getAbsoluteInstalledURL()


    /**
     * @param string $data
     */
    private static function verifySecurityFile(string $data): void
    {
        if (file_exists(self::getRequiresFile('SECURITY_FILE_PATH')) === true
            && file_get_contents(self::getRequiresFile('SECURITY_FILE_PATH')) === 0
            && file_exists(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH')) === true
            && file_get_contents(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH')) !== 0
        ) {
            Stream::copy(
                self::getRequiresFile('SECURITY_BACKUP_FILE_PATH'),
                self::getRequiresFile('SECURITY_FILE_PATH')
            );
        } else {
            self::storeSecurityData($data);
            self::backupSecurityFile();
        }

    }//end verifySecurityFile()


    /**
     * @param  string      $filename
     * @param  string $dirname
     * @return string
     */
    public static function getRequiresFile(string $filename, string $dirname=''): string
    {
        // Packages configuration.
        self::$configDir       = implode(DIRECTORY_SEPARATOR, [MS_PACKAGES_PATH, Memory::Data('mpm')->packages->default, 'Configs'.DIRECTORY_SEPARATOR]);
        self::$configServerDir = self::$configDir.md5((new Browser())->getURLHostname()).DIRECTORY_SEPARATOR;
        if (empty($dirname) === true) {
            self::$setupFile = self::$configServerDir.$dirname.DIRECTORY_SEPARATOR.Encryption::static((new Browser())->getURLHostname()).Mishusoft_Configuration_File_Format;
        }

        // Application security.
        self::$appSecurityDirectory      = MS_PACKAGES_PATH.Memory::Data('mpm')->packages->default.DIRECTORY_SEPARATOR.'Security'.DIRECTORY_SEPARATOR;
        self::$appSecurityFileName       = ucfirst(DEFAULT_APP_NAME).'ApplicationSecurity.lock';
        self::$appSecurityBackupFileName = ucfirst(DEFAULT_APP_NAME).'ApplicationSecurity.lock.backup';
        self::$appSecurityFile           = self::$appSecurityDirectory.self::$appSecurityFileName;
        self::$appSecurityFileBackup     = MS_FRAMEWORK_PATH.'Backups'.DIRECTORY_SEPARATOR.self::$appSecurityBackupFileName;

        // Configuration properties.
        self::$configurePropertiesFileName = 'properties.json';
        self::$configurePropertiesFile     = self::$configServerDir.self::$configurePropertiesFileName;
        // Backup location of security file.
        self::$appSecurityFileBackupDirectory = MS_FRAMEWORK_PATH.'Backups'.DIRECTORY_SEPARATOR;

        return match (strtoupper($filename)) {
            'CONFIG_SERVER_DIR_PATH' => self::$configServerDir,
            'CONFIG_DIR_PATH' => self::$configDir,
            'CONFIG_PROPERTIES_FILE_NAME' => self::$configurePropertiesFileName,
            'CONFIG_PROPERTIES_FILE_PATH' => self::$configurePropertiesFile,
            'SETUP_FILE_PATH' => self::$setupFile,
            'SECURITY_FILE_DIR_PATH' => self::$appSecurityDirectory,
            'SECURITY_FILE_NAME' => self::$appSecurityFileName,
            'SECURITY_FILE_PATH' => self::$appSecurityFile,
            'SECURITY_BACKUP_DIR_PATH' => self::$appSecurityFileBackupDirectory,
            'SECURITY_BACKUP_FILE_NAME' => self::$appSecurityBackupFileName,
            'SECURITY_BACKUP_FILE_PATH' => self::$appSecurityFileBackup,
            default => throw new RuntimeException('invalid argument parsed.'),
        };//end switch

    }//end getRequiresFile()


    /**
     * @param string $data
     */
    private static function storeSecurityData(string $data): void
    {
        // Security file directory.
        if (is_writable(dirname(self::getRequiresFile('SECURITY_FILE_DIR_PATH'))) === false
            || is_readable(dirname(self::getRequiresFile('SECURITY_FILE_DIR_PATH'))) ===false
        ) {
            FileSystem::exec(dirname(self::getRequiresFile('SECURITY_FILE_DIR_PATH')));
        }

        if (file_exists(self::getRequiresFile('SECURITY_FILE_DIR_PATH')) === false) {
            FileSystem::createDirectory(self::getRequiresFile('SECURITY_FILE_DIR_PATH'));
            FileSystem::exec(self::getRequiresFile('SECURITY_FILE_DIR_PATH'));
        }

        if (is_dir(self::getRequiresFile('SECURITY_FILE_DIR_PATH')) === true
            && is_readable(self::getRequiresFile('SECURITY_FILE_DIR_PATH')) === true
            && file_exists(self::getRequiresFile('SECURITY_FILE_PATH')) === false
        ) {
            $file = fopen(self::getRequiresFile('SECURITY_FILE_PATH'), 'wb+');
            if (is_resource($file) === true) {
                FileSystem::exec($file);
                fwrite($file, $data);
                fclose($file);
            }

            FileSystem::exec(self::getRequiresFile('SECURITY_FILE_PATH'));
        }

    }//end storeSecurityData()


    private static function backupSecurityFile(): void
    {
        if (file_exists(self::getRequiresFile('SECURITY_BACKUP_DIR_PATH')) ===false) {
            FileSystem::createDirectory(self::getRequiresFile('SECURITY_BACKUP_DIR_PATH'));
            FileSystem::exec(self::getRequiresFile('SECURITY_BACKUP_DIR_PATH'));
        }

        if (file_exists(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH')) === false) {
            FileSystem::copy(
                self::getRequiresFile('SECURITY_FILE_PATH'),
                self::getRequiresFile('SECURITY_BACKUP_FILE_PATH')
            );
            FileSystem::exec(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH'));
        }

    }//end backupSecurityFile()


    /**
     * @param  string $appSecurityFile
     * @return array
     */
    private static function getProgressedSystemStatus(string $appSecurityFile): array
    {
        if ((int) ((disk_free_space(MS_DOCUMENT_ROOT) / 1024) / 1024) > 50) {
            if (Memory::Data('mpm')->config->database->activation) {
                // check database activation
                if (file_exists($appSecurityFile) && !empty(file_get_contents($appSecurityFile))) {
                    // check security file and its data
                    $security = json_decode(file_get_contents($appSecurityFile));
                    // get all data from security file and decode them.
                    if (is_object($security)) {
                        // verify security data
                        if ($security->app->currentStatus === 'Installed') {
                            self::checkSystemConfiguration();
                        } else {
                            if ($security->app->installedLocation === self::getAbsoluteInstalledURL()) {
                                // verify visitor's current location and redirect to installed page.
                                if ($security->client->IP === IP::get()) {
                                    // verify The Installer ip address
                                    self::checkSystemConfiguration();
                                } else {
                                    self::$event = [
                                        'type'    => 'error',
                                        'message' => 'app-installation-running',
                                    ];
                                }
                            } else {
                                self::$event = [
                                    'type'    => 'error',
                                    'message' => 'app-installed-by-sys-admin',
                                ];
                            }
                        }//end if
                    } else {
                        if (file_exists(self::$appSecurityFileBackup) && !empty(file_get_contents(self::$appSecurityFileBackup))) {
                            if (Stream::copy(self::$appSecurityFileBackup, self::$appSecurityFile)) {
                                self::checkSystemConfiguration();
                            }
                        } else {
                            self::$event = [
                                'type'    => 'error',
                                'message' => 'app-security-data-empty',
                            ];
                        }
                    }//end if
                } else {
                    if (file_exists(self::$appSecurityFileBackup) && !empty(file_get_contents(self::$appSecurityFileBackup))) {
                        if (Stream::copy(self::$appSecurityFileBackup, self::$appSecurityFile)) {
                            self::checkSystemConfiguration();
                        }
                    } else {
                        self::$event = [
                            'type'    => 'error',
                            'message' => 'app-security-disabled',
                        ];
                    }
                }//end if
            } else {
                self::$event = [
                    'type'    => 'error',
                    'message' => 'database-deactivated',
                ];
            }//end if
        } else {
            self::$event = [
                'type'    => 'error',
                'message' => 'space-not-available',
            ];
        }//end if

        return self::$event;

    }//end getProgressedSystemStatus()


    /**
     * @return array|string[]
     * @throws JsonException
     */
    private static function checkSystemConfiguration(): array
    {
        if (file_exists(self::getRequiresFile('CONFIG_DIR_PATH')) and file_exists(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'))) {
            if (file_exists(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'))) {
                $properties = file_get_contents(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'));
                if (strlen($properties) > 0 and is_string($properties)) {
                    $properties = json_decode($properties, true);

                    if (is_array(_Array::value($properties, 'dbms')) and count(array_filter(_Array::value($properties, 'dbms'))) > 0) {
                        if (_Array::value($properties, 'default') !== '') {
                            if (in_array(_Array::value($properties, 'default'), _Array::value($properties, 'dbms'))) {
                                if (file_exists(self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default')))) {
                                    if (!empty(file_get_contents(self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))))) {
                                        // verify setup file's data exists

                                        /**/
                                        /**/
                                        // one or more dbms usability include and test

                                        /**/
                                        /**/

                                        switch (strtolower(_Array::value($properties, 'default'))) {
                                            case 'mishusoftsql':
                                                $configure  = Memory::Data('config', ['file' => self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))]);
                                                $connection = (new MishusoftSQLStandalone($configure->db->user, $configure->db->password));
                                                if (in_array($configure->db->name, $connection->getDatabaseAll())) {
                                                    if (in_array('users', $connection->select($configure->db->name)->getTableAll())) {
                                                        if (in_array(WEB_CONFIG_TABLE, $connection->select($configure->db->name)->getTableAll())) {
                                                            self::updateSecurity('Installed');
                                                            if (!file_exists(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH'))) {
                                                                if (Stream::copy(self::getRequiresFile('SECURITY_FILE_PATH'), self::getRequiresFile('SECURITY_BACKUP_FILE_PATH'))) {
                                                                    if (empty(file_get_contents(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH')))) {
                                                                        if (!file_put_contents(self::getRequiresFile('SECURITY_BACKUP_FILE_PATH'), file_get_contents(self::getRequiresFile('SECURITY_FILE_PATH')))) {
                                                                            Media::StreamAsJson(
                                                                                [
                                                                                    'env' => [
                                                                                        'installation' => [
                                                                                            'message' => [
                                                                                                'cmd_btn'   => 'stay',
                                                                                                'set_title' => 'need',
                                                                                                'type'      => 'error',
                                                                                                'text'      => 'Security data copy failed!!',
                                                                                                'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                                                            ],
                                                                                            'client'  => 'base',
                                                                                        ],
                                                                                    ],
                                                                                ]
                                                                            );
                                                                        }
                                                                    }
                                                                }//end if
                                                            } else {
                                                                self::backupSecurityFile();
                                                                self::$event = [
                                                                    'type'    => 'success',
                                                                    'message' => 'ok',
                                                                ];
                                                            }//end if
                                                        } else {
                                                            self::$event = [
                                                                'type'    => 'error',
                                                                'message' => 'app-info-not-exist',
                                                            ];
                                                        }//end if
                                                    } else {
                                                        self::$event = [
                                                            'type'    => 'error',
                                                            'message' => 'app-user-info-not-exist',
                                                        ];
                                                    }//end if
                                                } else {
                                                    self::$event = [
                                                        'type'    => 'error',
                                                        'message' => 'app-database-not-exist',
                                                    ];
                                                }//end if
                                            break;

                                            case 'mysql':

                                                self::makeDbConnectionRequest(
                                                    _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'host'),
                                                    _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'port'),
                                                    _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'name'),
                                                    _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'user'),
                                                    _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'password'),
                                                    function ($connection) use ($properties) {
                                                        $UsersTable = $connection->query(
                                                            'SHOW TABLES FROM `'._Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'name')."` LIKE '%"._Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'prefix')."users%'"
                                                        );
                                                        if ($UsersTable->fetch(PdoMySQL::FETCH_ASSOC)) {
                                                            $websiteTable = $connection->query(
                                                                'SHOW TABLES FROM `'._Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'name')."` LIKE '%"._Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', _Array::value($properties, 'default'))), 'prefix').WEB_CONFIG_TABLE."%'"
                                                            );
                                                            if ($websiteTable->fetch(PdoMySQL::FETCH_ASSOC)) {
                                                                self::updateSecurity('Installed');
                                                                self::backupSecurityFile();
                                                                self::$event = [
                                                                    'type'    => 'success',
                                                                    'message' => 'ok',
                                                                ];
                                                            } else {
                                                                self::$event = [
                                                                    'type'    => 'error',
                                                                    'message' => 'app-info-not-exist',
                                                                ];
                                                            }
                                                        } else {
                                                            self::$event = [
                                                                'type'    => 'error',
                                                                'message' => 'app-user-info-not-exist',
                                                            ];
                                                        }//end if
                                                    }
                                                );
                                            break;

                                            default:
                                                self::$event = [
                                                    'type'    => 'error',
                                                    'message' => 'config-file-not-set',
                                                ];
                                            break;
                                        }//end switch
                                    } else {
                                        self::$event = [
                                            'type'    => 'error',
                                            'message' => 'config-file-empty',
                                        ];
                                    }//end if
                                } else {
                                    if (count(self::getRealDbmsList()) > 0) {
                                        self::$event = [
                                            'type'    => 'error',
                                            'message' => 'already-configured',
                                        ];
                                    } else {
                                        self::$event = [
                                            'type'    => 'error',
                                            'message' => 'config-file-not-exist',
                                        ];
                                    }
                                }//end if
                            } else {
                                self::$event = [
                                    'type'    => 'error',
                                    'message' => 'invalid-database-configured',
                                ];
                            }//end if
                        } else {
                            self::$event = [
                                'type'    => 'error',
                                'message' => 'default-database-not-configure',
                            ];
                        }//end if
                    } else {
                        self::$event = [
                            'type'    => 'error',
                            'message' => 'database-not-configure',
                        ];
                    }//end if
                }//end if
            } else {
                Stream::createFile(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'));
                Stream::exec(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'));
                if (file_exists(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'))) {
                    if (file_put_contents(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'), json_encode(self::defaultConfigProperties))) {
                        return self::checkSystemConfiguration();
                    } else {
                        self::$event = [
                            'type'    => 'error',
                            'message' => 'config-properties-write-permission-denied',
                        ];
                    }
                } else {
                    self::$event = [
                        'type'    => 'error',
                        'message' => 'config-properties-create-permission-denied',
                    ];
                }
            }//end if
        } else {
            if (Stream::createDirectory(self::getRequiresFile('CONFIG_DIR_PATH'))) {
                Stream::exec(self::getRequiresFile('CONFIG_DIR_PATH'));
                if (Stream::createDirectory(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'))) {
                    Stream::exec(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'));
                    // change directory permission
                }

                if (count(self::getRealDbmsList()) <= 0) {
                    self::$event = [
                        'type'    => 'error',
                        'message' => 'config-file-not-exist',
                    ];
                } else {
                    return self::checkSystemConfiguration();
                }
            } else {
                self::$event = [
                    'type'    => 'error',
                    'message' => 'config-dir-create-permission-denied',
                ];
            }//end if
        }//end if

        return self::$event;

    }//end checkSystemConfiguration()


    /**
     * @param string $current_status
     */
    private static function updateSecurity(string $current_status)
    {
        $current_data = json_decode(file_get_contents(self::getRequiresFile('SECURITY_FILE_PATH')), true);
        if (is_array($current_data) and count($current_data) > 0) {
            if (_Array::value($current_data, 'app') and is_array(_Array::value($current_data, 'app'))) {
                foreach ($current_data['app'] as $key => $value) {
                    if ($key === 'currentStatus' and $current_data['app'][$key] === 'Installing') {
                        $current_data['app'][$key] = $current_status;
                        Stream::saveToFile(self::getRequiresFile('SECURITY_FILE_PATH'), json_encode($current_data));
                    }
                }
            }
        } else {
            self::initializeSecurity($current_status);
        }

    }//end updateSecurity()


    /**
     * @param string   $db_host
     * @param string   $db_port
     * @param string   $db_name
     * @param string   $db_user
     * @param string   $db_pass
     * @param callable $callBack
     */
    private static function makeDbConnectionRequest(string $db_host, string $db_port, string $db_name, string $db_user, string $db_pass, callable $callBack)
    {
        try {
            $connection = new PdoMySQL('mysql:host='.$db_host.';port='.$db_port.';dbname='.$db_name, $db_user, $db_pass);
            $connection->setAttribute(PdoMySQL::ATTR_ERRMODE, PdoMySQL::ERRMODE_EXCEPTION);
            $connection->setAttribute(PdoMySQL::ATTR_CASE, PdoMySQL::CASE_NATURAL);
            $connection->setAttribute(PdoMySQL::ATTR_ORACLE_NULLS, PdoMySQL::NULL_EMPTY_STRING);
            $connection->setAttribute(PdoMySQL::ATTR_EMULATE_PREPARES, false);

            if ($connection) {
                if (is_callable($callBack)) {
                    $callBack($connection);
                }
            }
        } catch (Exception $exception) {
            self::setRuntimeErrors(['cors' => $exception->getMessage(), 'normal' => 'app-required-database-connection-failed']);
        }

    }//end makeDbConnectionRequest()


    public static function setRuntimeErrors(array $message)
    {
        if (Network::getValOfSrv('HTTP-SEC-FETCH-MODE') === 'cors') {
            Media::StreamAsJson(
                [
                    'env' => [
                        'installation' => [
                            'message' => [
                                'cmd_btn'   => 'stay',
                                'set_title' => 'need',
                                'type'      => 'error',
                                'text'      => array_key_exists('cors', $message) ? $message['cors'] : 'Runtime error occurred.',
                                'extra'     => ['enable' => ['element' => 'app-database-install']],
                            ],
                            'client'  => 'base',
                        ],
                    ],
                ]
            );
        } else {
            self::$event = [
                'type'    => 'error',
                'message' => array_key_exists('normal', $message) ? $message['normal'] : $message['cors'],
            ];
            self::setProgressStep();
        }//end if

    }//end setRuntimeErrors()


    /**
     * @return boolean
     */
    public static function setProgressStep(): bool
    {
        // preOutput(disk_free_space(MS_DOCUMENT_ROOT));
        // preOutput(json_decode(file_get_contents(self::getRequiresFile("CONFIG_PROPERTIES_FILE_PATH")),true));
        // preOutput(self::$event);
        switch (_Array::value(self::$event, 'message')) {
            case 'one-of-module-broken':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), '<setup-error> Orphan module exists on module directory. Pleas remove it.</setup-error>');

            case 'app-info-not-exist':
            return self::setStepForInstallation('Installer', 'website');

            case 'app-user-info-not-exist':
            return self::setStepForInstallation('Installer', 'account');

            case 'app-database-not-exist':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), '<setup-error> Configured database is not found.</setup-error>');

            case 'invalid-database-configured':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), '<setup-error> Invalid database is configured.</setup-error>');

            case 'app-required-database-configure-failed':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), "<setup-error> Framework couldn't configure with database script languages. Please check your database script from <Packages_Root_Directory><Packages_Name>Databases Directory..</setup-error>");

            case 'app-required-database-connection-failed':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), "<setup-error> Framework couldn't connect with database. Please check your database server and account details.</setup-error>");

            case 'default-database-not-configure':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), '<setup-error> Default database is not configure.</setup-error>');

            case 'database-not-configure':
            return self::setStepForInstallation('Installer', 'database-select');

            case 'config-file-not-exist':
            return self::setStepForInstallation('Installer', 'database');

            case 'config-properties-write-permission-denied':
            case 'config-properties-create-permission-denied':
            case 'config-dir-create-permission-denied':
            return self::setRuntimeInstallationEvent(
                _String::ucfirst(_Array::value(self::$event, 'type')),
                '<setup-error> Data write permission denied. The Application could not create configuration files.</setup-error>'
            );

            case 'app-installation-running':
            return self::setRuntimeInstallationEvent(
                _String::ucfirst(_Array::value(self::$event, 'type')),
                '<setup-error> Access denied. The Application installation running by Mishusoft Administrator.</setup-error>'
            );

            case 'already-configured':
            case 'app-installed-by-sys-admin':
            return self::setRuntimeInstallationEvent(
                _String::ucfirst(_Array::value(self::$event, 'type')),
                '<setup-error> The application has been installed by the system administrator in different address.'.' <br/> Are you want to visit the installed address?? Please go now > '.self::getInstalledURL().'</setup-error>'
            );

            case 'config-file-empty':
            case 'app-security-data-empty':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), '<setup-error>  The Access of application is disabled. </setup-error>');

            case 'app-security-disabled':
            return self::setRuntimeInstallationEvent(
                _String::ucfirst(_Array::value(self::$event, 'type')),
                '<setup-error>  Access denied. The Application security is disabled. <br/> The security file not exist. <br/>'.'File Name: '.self::getRequiresFile('SECURITY_FILE_NAME').' <br/> File Location: '.self::getRequiresFile('SECURITY_FILE_PATH').'  </setup-error>'
            );

            case 'database-deactivated':
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), '<setup-error> Databases connection rejected. </setup-error>');

            case 'space-not-available':
            return self::setRuntimeInstallationEvent(
                _String::ucfirst(_Array::value(self::$event, 'type')),
                '<setup-error> Required space not available in your server. We need at least 50.00 mb space to run the application. </setup-error>'
            );

            default:
            return self::setRuntimeInstallationEvent(_String::ucfirst(_Array::value(self::$event, 'type')), 'The application is unable to start correctly.');
        }//end switch

    }//end setProgressStep()


    /**
     * @param  string $title
     * @param  string $message
     * @return boolean
     */
    public static function setRuntimeInstallationEvent(string $title, string $message): bool
    {
        if (!empty(isset($title))) {
            self::$StepTitle = $title;
        }

        if (!empty(isset($message))) {
            self::$Message = $message;
        }

        return self::$StepTitle && self::$Message;

    }//end setRuntimeInstallationEvent()


    /**
     * @param  string $title
     * @param  string $step
     * @return boolean
     */
    private static function setStepForInstallation(string $title, string $step): bool
    {
        // preOutput(func_get_args());
        if (!empty($title)) {
            self::$StepTitle = $title;
        }

        if (!empty($step)) {
            self::$Step = $step;
        }

        return self::$StepTitle && self::$Step;

    }//end setStepForInstallation()


    /**
     * @return string
     */
    public static function getInstalledURL(): string
    {
        if (file_exists(self::getRequiresFile('SECURITY_FILE_PATH'))) {
            return json_decode(file_get_contents(self::getRequiresFile('SECURITY_FILE_PATH')))->app->installedLocation;
        } else {
            return Memory::Data('framework')->host->url;
        }

    }//end getInstalledURL()


    /**
     * @param  $argument
     * @param  $file_name
     * @return mixed|null
     */
    public static function getDbConfigArgument(string $argument, string $file_name)
    {
        $data = json_decode(file_get_contents($file_name), true);
        if (is_array($data) and count($data) > 0 and array_key_exists($argument, $data)) {
            return $data[$argument];
        }

        return null;

    }//end getDbConfigArgument()


    /**
     * @return array|false
     */
    private static function getRealDbmsList()
    {
        $list = scandir(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'));
        foreach ($list as $index => $dir) {
            if ($dir === '.' || $dir === '..' || $dir === self::getRequiresFile('CONFIG_PROPERTIES_FILE_NAME')) {
                unset($list[$index]);
            }
        }

        array_multisort($list, SORT_ASC);
        return $list;

    }//end getRealDbmsList()


    public static function checkSystemRequirements()
    {
        self::getProgressedSystemStatus(self::getRequiresFile('SECURITY_FILE_PATH'));
        self::setProgressStep();

    }//end checkSystemRequirements()


    public static function communicate()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if ($data->security_code === 1 && !empty($data->env) && !empty($data->env->installation)) {
                if ($data->security_code === 1 && !empty($data->env) && !empty($data->env->installation->client->base->area)) {
                    if ($data->env->installation->client->base->area === 'database-create') {
                        Media::StreamAsJson(
                            [
                                'env' => [
                                    'installation' => [
                                        'message' => [
                                            'cmd_btn'   => 'remove',
                                            'set_title' => 'unneeded',
                                            'type'      => 'message',
                                            'text'      => 'Create a database and configure it',
                                        ],
                                        'client'  => [
                                            'base' => [
                                                'area'      => 'database-create',
                                                'sub_title' => 'Create a database and configure it.',
                                            ],
                                        ],
                                        'title'   => 'Installer',
                                    ],
                                ],
                            ]
                        );
                    }//end if

                    if (isset($data->env->installation->client->base->area->database) && $data->env->installation->client->base->area->database !== null && is_object($data->env->installation->client->base->area->database)) {
                        if ($data->env->installation->client->base->area->database->step === 'database-select') {
                            $default = !is_null(self::getDefaultDb()) || !empty(self::getDefaultDb()) ? false : true;
                            if (self::updateConfigProperties($data->env->installation->client->base->area->database->dbms, $default)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'remove',
                                                    'set_title' => 'unneeded',
                                                    'type'      => 'message',
                                                    'text'      => 'Set the database configuration.',
                                                ],
                                                'client'  => [
                                                    'base' => [
                                                        'area'      => 'database',
                                                        'sub_title' => 'Set the database configuration',
                                                    ],
                                                ],
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            } else {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'remove',
                                                    'set_title' => 'needed',
                                                    'type'      => 'error',
                                                    'text'      => 'Databases setting failed!!',
                                                ],
                                                'client'  => [
                                                    'base' => [
                                                        'area'      => 'database-select',
                                                        'sub_title' => 'Please select one [DBMS]',
                                                    ],
                                                ],
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            }//end if
                        }//end if

                        if ($data->env->installation->client->base->area->database->step === 'connect') {
                            if (empty($data->env->installation->client->base->area->database->host)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database host name field.',
                                                    'extra'     => ['enable' => ['id' => 'db_connect_only']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->user)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database user name field.',
                                                    'extra'     => ['enable' => ['id' => 'db_connect_only']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->user_pass)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s user password field.',
                                                    'extra'     => ['enable' => ['id' => 'db_connect_only']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            $servername = $data->env->installation->client->base->area->database->host;
                            $username   = $data->env->installation->client->base->area->database->user;
                            $password   = $data->env->installation->client->base->area->database->user_pass;
                            $conn       = new MySqli($servername, $username, $password);
                            if ($conn->connect_error) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Connection failed: '.$conn->connect_error,
                                                    'extra'     => ['enable' => ['id' => 'db_connect_only']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            } else {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'unneeded',
                                                    'type'      => 'message',
                                                    'text'      => 'The installer successfully connected to the database server.',
                                                    'extra'     => [
                                                        'show'        => [
                                                            'element1' => 'db_reconnect_only',
                                                            'element2' => 'db_name_row',
                                                            'element3' => 'db_char_table_prefix_row',
                                                            'element4' => 'app-database-create-install',
                                                        ],
                                                        /*
                                                            'hide' => array('' => ''),
                                                        'enable' => array('element1' => 'app-database-create-install'),*/
                                                        'disable'     => [
                                                            'element1' => 'db_host',
                                                            'element2' => 'db_user',
                                                            'element3' => 'db_user_pass',
                                                            'element4' => 'db_connect_only',
                                                        ],
                                                        'text_change' => [
                                                            'id'   => 'db_connect_only',
                                                            'text' => 'Connected',
                                                        ],
                                                    ],
                                                ],
                                                'client'  => $data->env->installation->client,
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            }//end if
                        }//end if

                        if ($data->env->installation->client->base->area->database->step === 'create') {
                            if (empty($data->env->installation->client->base->area->database->name)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s name field.',
                                                    'extra'     => [
                                                        'enable' => [
                                                            'element1' => 'db_name',
                                                            'element2' => 'app-database-create-install',
                                                        ],
                                                    ],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }//end if

                            if (empty($data->env->installation->client->base->area->database->char)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s data set character field.',
                                                    'extra'     => [
                                                        'enable' => [
                                                            'element1' => 'db_char',
                                                            'element2' => 'app-database-create-install',
                                                        ],
                                                    ],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }//end if

                            if (empty($data->env->installation->client->base->area->database->table_prefix)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s table prefix field.',
                                                    'extra'     => [
                                                        'enable' => [
                                                            'element1' => 'db_table_prefix',
                                                            'element2' => 'app-database-create-install',
                                                        ],
                                                    ],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }//end if

                            if ($data->env->installation->client->base->area->database->btnName === 'Connected') {
                                $servername = $data->env->installation->client->base->area->database->host;
                                $username   = $data->env->installation->client->base->area->database->user;
                                $password   = $data->env->installation->client->base->area->database->user_pass;
                                $database   = $data->env->installation->client->base->area->database->name;
                                $conn       = new MySqli($servername, $username, $password);

                                if ($conn->connect_error) {
                                    Media::StreamAsJson(
                                        [
                                            'env' => [
                                                'installation' => [
                                                    'message' => [
                                                        'cmd_btn'   => 'stay',
                                                        'set_title' => 'need',
                                                        'type'      => 'error',
                                                        'text'      => 'Connection failed: '.$conn->connect_error,
                                                        'extra'     => ['enable' => ['element' => 'app-database-create-install']],
                                                    ],
                                                    'client'  => $data->env->installation->client,
                                                ],
                                            ],
                                        ]
                                    );
                                }

                                $sql = "CREATE DATABASE $database;";
                                if ($conn->query($sql) === true) {
                                    self::setupDatabaseConfigure($data->env->installation->client->base->area->database);
                                } else {
                                    Media::StreamAsJson(
                                        [
                                            'env' => [
                                                'installation' => [
                                                    'message' => [
                                                        'cmd_btn'   => 'stay',
                                                        'set_title' => 'need',
                                                        'type'      => 'error',
                                                        'text'      => 'Databases creating error. '.$conn->error,
                                                        'extra'     => ['enable' => ['element' => 'app-database-create-install']],
                                                    ],
                                                    'client'  => $data->env->installation->client,
                                                ],
                                            ],
                                        ]
                                    );
                                }

                                $conn->close();
                            } else {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'You need to connect with database first before create new database.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-create-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }//end if
                        }//end if

                        if ($data->env->installation->client->base->area->database->step === 'configure') {
                            if (empty($data->env->installation->client->base->area->database->host)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database host name field.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->user)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s active username field.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->user_pass)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s user password field.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->name)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s name field.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->char)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s data set character field.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            if (empty($data->env->installation->client->base->area->database->table_prefix)) {
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'Please fill out database\'s table prefix field.',
                                                    'extra'     => ['enable' => ['element' => 'app-database-install']],
                                                ],
                                                'client'  => $data->env->installation->client,
                                            ],
                                        ],
                                    ]
                                );
                            }

                            self::setupDatabaseConfigure($data->env->installation->client->base->area->database);
                        }//end if
                    }//end if

                    if (isset($data->env->installation->client->base->area->account) && $data->env->installation->client->base->area->account !== null && is_object($data->env->installation->client->base->area->account)) {
                        if (empty($data->env->installation->client->base->area->account->username)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out admin username field.',
                                                'extra'     => ['enable' => ['element' => 'app-account-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        if (empty($data->env->installation->client->base->area->account->email)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out admin e-mail address field.',
                                                'extra'     => ['enable' => ['element' => 'app-account-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        if (empty($data->env->installation->client->base->area->account->user_pass)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out admin user password field.',
                                                'extra'     => ['enable' => ['element' => 'app-account-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        if (empty($data->env->installation->client->base->area->account->user_cnf_pass)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out admin user confirm password field.',
                                                'extra'     => ['enable' => ['element' => 'app-account-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        if ($data->env->installation->client->base->area->account->user_pass !== $data->env->installation->client->base->area->account->user_cnf_pass) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Password not matched.',
                                                'extra'     => ['enable' => ['element' => 'app-account-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        try {
                            self::DropPreviousTables(_Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'name'));
                            self::SetupAppRequiredTables(self::databaseFile('account'), _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'prefix'));

                            // for system user
                            if (self::ConfigWebUserQuery(
                                SUPPORT_EMAIL_ADDRESS,
                                Encryption::static(DEFAULT_OPERATING_SYSTEM_PASSWORD),
                                DEFAULT_OPERATING_SYSTEM_USER,
                                'active',
                                '1',
                                '1',
                                DEFAULT_DATE_OF_BIRTH,
                                'male'
                            ) !== null
                            ) {
                                self::configureUpdate(
                                    [
                                        'account' => [
                                            'email'    => SUPPORT_EMAIL_ADDRESS,
                                            'password' => DEFAULT_OPERATING_SYSTEM_PASSWORD,
                                            'username' => DEFAULT_OPERATING_SYSTEM_USER,
                                            'activity' => 'active',
                                            'role'     => '1',
                                            'status'   => 1,
                                            'dob'      => DEFAULT_DATE_OF_BIRTH,
                                            'gender'   => 'male',
                                        ],
                                    ]
                                );

                                // for standard user
                                if (self::ConfigWebUserQuery(
                                    $data->env->installation->client->base->area->account->email,
                                    Encryption::static($data->env->installation->client->base->area->account->user_pass),
                                    APP_USERNAME_PREFIX.$data->env->installation->client->base->area->account->username,
                                    'active',
                                    '2',
                                    '1',
                                    date('d/m/Y'),
                                    'male'
                                ) !== null
                                ) {
                                    self::configureUpdate(
                                        [
                                            'account' => [
                                                'email'    => $data->env->installation->client->base->area->account->email,
                                                'password' => $data->env->installation->client->base->area->account->user_pass,
                                                'username' => APP_USERNAME_PREFIX.$data->env->installation->client->base->area->account->username,
                                                'activity' => 'active',
                                                'role'     => '2',
                                                'status'   => 1,
                                                'dob'      => date('d/m/Y'),
                                                'gender'   => 'male',
                                            ],
                                        ]
                                    );

                                    // successful message to client
                                    Media::StreamAsJson(
                                        [
                                            'env' => [
                                                'installation' => [
                                                    'message' => [
                                                        'cmd_btn'   => 'stay',
                                                        'set_title' => 'unneeded',
                                                        'type'      => 'message',
                                                        'text'      => 'The admin account configured successfully. Set the website configuration now.',
                                                    ],
                                                    'client'  => [
                                                        'base' => [
                                                            'area'      => 'website',
                                                            'sub_title' => 'Set the website configuration',
                                                        ],
                                                    ],
                                                    'title'   => 'Installer',
                                                ],
                                            ],
                                        ]
                                    );
                                }//end if
                            }//end if
                        } catch (Exception $e) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => $e->getMessage(),
                                                'extra'     => ['enable' => ['element' => 'app-database-install']],
                                            ],
                                            'client'  => 'base',
                                        ],
                                    ],
                                ]
                            );
                        }//end try
                    }//end if

                    if (isset($data->env->installation->client->base->area->website) && $data->env->installation->client->base->area->website !== null && is_object($data->env->installation->client->base->area->website)) {
                        if (empty($data->env->installation->client->base->area->website->name)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out website name field.',
                                                'extra'     => ['enable' => ['element' => 'app-website-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        if (empty($data->env->installation->client->base->area->website->description)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out website description field.',
                                                'extra'     => ['enable' => ['element' => 'app-website-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        if (empty($data->env->installation->client->base->area->website->company)) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => 'Please fill out website company\'s name field.',
                                                'extra'     => ['enable' => ['element' => 'app-website-install']],
                                            ],
                                            'client'  => $data->env->installation->client,
                                        ],
                                    ],
                                ]
                            );
                        }

                        try {
                            $app_name        = $data->env->installation->client->base->area->website->name;
                            $app_description = $data->env->installation->client->base->area->website->description;
                            $app_company     = $data->env->installation->client->base->area->website->company;
                            $doc_root        = str_replace('\\', '/', MS_DOCUMENT_ROOT);
                            $http_host_name  = $_SERVER['SERVER_NAME'];
                            $http_host_add   = self::getAbsoluteInstalledURL();
                            $http_host_ip    = $_SERVER['SERVER_ADDR'];
                            $default_home    = self::getAbsoluteInstalledURL();
                            $default_layout  = DEFAULT_SYSTEM_LAYOUT;
                            $defaultFavicon  = 'mishusoft-logo-lite.webp';
                            $setupMessage    = 'This app successfully installed';
                            $setupFile       = 'whole system';
                            $setupTime       = Time::getFullTime();

                            self::SetupAppRequiredTables(
                                self::databaseFile(_String::lower(DEFAULT_APP_NAME)),
                                _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'prefix')
                            );
                            self::ConfigWebApp(
                                $app_name,
                                $app_description,
                                $app_company,
                                $doc_root,
                                $http_host_name,
                                $http_host_add,
                                $http_host_ip,
                                $default_home,
                                $default_layout,
                                Media::getLogosMediaPath('', 'remote'),
                                Media::getLogosMediaPath('', 'local'),
                                $defaultFavicon
                            );
                            self::configureUpdate(
                                [
                                    'app' => [
                                        'name'            => $app_name,
                                        'description'     => $app_description,
                                        'company'         => $app_company,
                                        'doc_root'        => $doc_root,
                                        'http_host_name'  => $http_host_name,
                                        'http_host_add'   => $http_host_add,
                                        'http_host_ip'    => $http_host_ip,
                                        'default_home'    => $default_home,
                                        'default_layout'  => $default_layout,
                                        'icon_remote_dir' => Media::getLogosMediaPath('', 'remote'),
                                        'icon_local_dir'  => Media::getLogosMediaPath('', 'local'),
                                        'favicon'         => $defaultFavicon,
                                    ],
                                ]
                            );
                            self::makeDbConnectionRequestAuto(
                                function ($connection) use ($setupFile, $setupTime, $setupMessage) {
                                    $connection->query('INSERT INTO `'._Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'prefix')."trackSystemUpdate` VALUES (null, 'msu_root', '$setupMessage','$setupFile', '$setupTime');");
                                    Media::StreamAsJson(
                                        [
                                            'env' => [
                                                'installation' => [
                                                    'message' => [
                                                        'cmd_btn'   => 'stay',
                                                        'set_title' => 'unneeded',
                                                        'type'      => 'message',
                                                        'text'      => 'The website configured successfully. Installer redirecting..',
                                                        'time'      => 5,
                                                    ],
                                                    'client'  => [
                                                        'base' => [
                                                            'area'      => 'redirect',
                                                            'sub_title' => 'Installation finished',
                                                        ],
                                                    ],
                                                    'title'   => 'Installer',
                                                ],
                                            ],
                                        ]
                                    );
                                }
                            );
                        } catch (Exception $e) {
                            Media::StreamAsJson(
                                [
                                    'env' => [
                                        'installation' => [
                                            'message' => [
                                                'cmd_btn'   => 'stay',
                                                'set_title' => 'need',
                                                'type'      => 'error',
                                                'text'      => $e->getMessage(),
                                                'extra'     => ['enable' => ['element' => 'app-website-install']],
                                            ],
                                            'client'  => 'base',
                                        ],
                                    ],
                                ]
                            );
                        }//end try
                    }//end if
                } else {
                    if (!empty(self::$Message)) {
                        Media::StreamAsJson(
                            [
                                'env' => [
                                    'installation' => [
                                        'message' => [
                                            'cmd_btn'   => 'remove',
                                            'set_title' => 'need',
                                            'type'      => 'error',
                                            'text'      => self::$Message,
                                        ],
                                        'client'  => $data->env->installation->client,
                                    ],
                                ],
                            ]
                        );
                    } else {
                        switch (self::$Step) {
                            case 'website':
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'remove',
                                                    'set_title' => 'unneeded',
                                                    'type'      => 'message',
                                                    'text'      => 'Set the website configuration.',
                                                ],
                                                'client'  => [
                                                    'base' => [
                                                        'area'      => 'website',
                                                        'sub_title' => 'Set the website configuration',
                                                    ],
                                                ],
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            break;

                            case 'account':
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'remove',
                                                    'set_title' => 'unneeded',
                                                    'type'      => 'message',
                                                    'text'      => 'Set the admin account configuration.',
                                                ],
                                                'client'  => [
                                                    'base' => [
                                                        'area'      => 'account',
                                                        'sub_title' => 'Set the admin account configuration',
                                                    ],
                                                ],
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            break;

                            case 'database-select':
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'remove',
                                                    'set_title' => 'unneeded',
                                                    'type'      => 'message',
                                                    'text'      => 'Please select one [DBMS]',
                                                ],
                                                'client'  => [
                                                    'base' => [
                                                        'area'      => 'database-select',
                                                        'sub_title' => 'Please select one [DBMS]',
                                                    ],
                                                ],
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            break;

                            case 'database':
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'remove',
                                                    'set_title' => 'unneeded',
                                                    'type'      => 'message',
                                                    'text'      => 'Set the database configuration.',
                                                ],
                                                'client'  => [
                                                    'base' => [
                                                        'area'      => 'database',
                                                        'sub_title' => 'Set the database configuration',
                                                    ],
                                                ],
                                                'title'   => 'Installer',
                                            ],
                                        ],
                                    ]
                                );
                            break;

                            default:
                                Media::StreamAsJson(
                                    [
                                        'env' => [
                                            'installation' => [
                                                'message' => [
                                                    'cmd_btn'   => 'stay',
                                                    'set_title' => 'need',
                                                    'type'      => 'error',
                                                    'text'      => 'The application is unable to start correctly.',
                                                ],
                                            ],
                                        ],
                                    ]
                                );
                            break;
                        }//end switch
                    }//end if
                }//end if
            }//end if
        }//end if

    }//end communicate()


    /**
     * @return string|null
     */
    public static function getDefaultDb(): ?string
    {
        $configure = json_decode(file_get_contents(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH')));
        if (!empty($configure) and is_object($configure) and !empty($configure->default)) {
            return $configure->default;
        }

        return null;

    }//end getDefaultDb()


    /**
     * @param  string  $name
     * @param  boolean $default
     * @return boolean
     */
    private static function updateConfigProperties(string $name, bool $default=false): bool
    {
        $current_data = json_decode(file_get_contents(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH')), true);
        if (is_array($current_data) and count($current_data) > 0) {
            if (array_key_exists('dbms', $current_data)) {
                if (is_array($current_data['dbms'])) {
                    $current_data['dbms'] = array_filter($current_data['dbms']);
                    if (count($current_data['dbms']) > 0) {
                        if (!in_array($name, _Array::value($current_data, 'dbms'))) {
                            array_push($current_data['dbms'], $name);
                        }
                    } else {
                        array_push($current_data['dbms'], $name);
                    }
                } else {
                    $current_data = self::defaultConfigProperties;
                    array_push($current_data['dbms'], $name);
                }

                if ($default) {
                    $current_data['default'] = $name;
                }

                if (in_array($name, array_filter(_Array::value($current_data, 'dbms')))) {
                    if (!file_exists(self::getRequiresFile('CONFIG_SERVER_DIR_PATH').DIRECTORY_SEPARATOR.$name)) {
                        if (Stream::createDirectory(self::getRequiresFile('CONFIG_SERVER_DIR_PATH').DIRECTORY_SEPARATOR.$name)) {
                            Stream::exec(self::getRequiresFile('CONFIG_SERVER_DIR_PATH').DIRECTORY_SEPARATOR.$name);
                            Stream::saveToFile(self::getRequiresFile('CONFIG_PROPERTIES_FILE_PATH'), _JSON::encode_to_string($current_data));
                        }
                    }
                }
            }//end if

            return true;
        } else {
            return false;
        }//end if

    }//end updateConfigProperties()


    /**
     * @param object $serverOfDatabase
     */
    private static function setupDatabaseConfigure(object $serverOfDatabase)
    {
        self::makeDbConnectionRequest(
            _String::removeTags($serverOfDatabase->host),
            _String::removeTags($serverOfDatabase->port),
            _String::removeTags($serverOfDatabase->name),
            _String::removeTags($serverOfDatabase->user),
            _String::removeTags($serverOfDatabase->user_pass),
            function ($connection) use ($serverOfDatabase) {
                if ($connection) {
                    if (self::configure(
                        json_encode(
                            [
                                'db' => [
                                    'host'     => _String::removeTags($serverOfDatabase->host),
                                    'port'     => _String::removeTags($serverOfDatabase->port),
                                    'user'     => _String::removeTags($serverOfDatabase->user),
                                    'password' => _String::removeTags($serverOfDatabase->user_pass),
                                    'name'     => _String::removeTags($serverOfDatabase->name),
                                    'char'     => _String::removeTags($serverOfDatabase->char),
                                    'prefix'   => _String::removeTags($serverOfDatabase->table_prefix).'_',
                                ],
                            ]
                        )
                    ) === false
                    ) {
                        Media::StreamAsJson(
                            [
                                'env' => [
                                    'installation' => [
                                        'message' => [
                                            'cmd_btn'   => 'stay',
                                            'set_title' => 'need',
                                            'type'      => 'error',
                                            'text'      => 'Databases configuration failed!!',
                                            'extra'     => ['enable' => ['element' => 'app-database-install']],
                                        ],
                                        'client'  => 'base',
                                    ],
                                ],
                            ]
                        );
                        exit();
                    } else {
                        self::configureUpdate(
                            [
                                'client' => [
                                    'deviceIP'      => IP::get(),
                                    'deviceOsName'  => (new Browser())->getDeviceNameFull(),
                                    'deviceBrowser' => (new Browser())->getBrowserNameFull(),
                                ],
                            ]
                        );
                        self::configureUpdate(
                            [
                                'server' => [
                                    'name'             => Network::getValOfSrv('SERVER_NAME'),
                                    'ip'               => Network::getValOfSrv('SERVER_ADDR'),
                                    'port'             => Network::getValOfSrv('SERVER_PORT'),
                                    'gatewayInterface' => Network::getValOfSrv('GATEWAY_INTERFACE'),
                                    'host'             => Network::getValOfSrv('HTTP_HOST'),
                                    'software'         => Network::getValOfSrv('SERVER_SOFTWARE'),
                                ],
                            ]
                        );
                    }//end if

                    if (self::getProgressedSystemStatus(self::getRequiresFile('SECURITY_FILE_PATH')) and _Array::value(self::$event, 'message') === 'app-user-info-not-exist') {
                        Media::StreamAsJson(
                            [
                                'env' => [
                                    'installation' => [
                                        'message' => [
                                            'cmd_btn'   => 'stay',
                                            'set_title' => 'unneeded',
                                            'type'      => 'message',
                                            'text'      => 'The database configuration file created successfully. Set the admin account configuration now.',
                                        ],
                                        'client'  => [
                                            'base' => [
                                                'area'      => 'account',
                                                'sub_title' => 'Set the admin account configuration',
                                            ],
                                        ],
                                        'title'   => 'Installer',
                                    ],
                                ],
                            ]
                        );
                    } else if (self::getProgressedSystemStatus(self::getRequiresFile('SECURITY_FILE_PATH')) and _Array::value(self::$event, 'message') === 'app-info-not-exist') {
                        Media::StreamAsJson(
                            [
                                'env' => [
                                    'installation' => [
                                        'message' => [
                                            'cmd_btn'   => 'stay',
                                            'set_title' => 'unneeded',
                                            'type'      => 'message',
                                            'text'      => 'The database configuration file created successfully. Set the website configuration now.',
                                        ],
                                        'client'  => [
                                            'base' => [
                                                'area'      => 'website',
                                                'sub_title' => 'Set the website configuration',
                                            ],
                                        ],
                                        'title'   => 'Installer',
                                    ],
                                ],
                            ]
                        );
                    } else {
                        Media::StreamAsJson(
                            [
                                'env' => [
                                    'installation' => [
                                        'message' => [
                                            'cmd_btn'   => 'stay',
                                            'set_title' => 'unneeded',
                                            'type'      => 'message',
                                            'text'      => 'The database configured successfully. Installer redirecting..',
                                        ],
                                        'client'  => [
                                            'base' => [
                                                'area'      => 'redirect',
                                                'sub_title' => 'Installation finished',
                                            ],
                                        ],
                                        'title'   => 'Installer',
                                    ],
                                ],
                            ]
                        );
                    }//end if
                }//end if
            }
        );

    }//end setupDatabaseConfigure()


    /**
     * @param  string $data
     * @return boolean
     */
    private static function configure(string $data): bool
    {
        if (!is_dir(self::getRequiresFile('CONFIG_DIR_PATH'))) {
            if (mkdir(self::getRequiresFile('CONFIG_DIR_PATH'), 0777, true)) {
                Stream::exec(self::getRequiresFile('CONFIG_DIR_PATH'));
                // change directory permission
            }
        }

        if (!is_dir(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'))) {
            if (mkdir(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'), 0777, true)) {
                Stream::exec(self::getRequiresFile('CONFIG_SERVER_DIR_PATH'));
                // change directory permission
            }
        }

        if (!is_null(self::getDefaultDb()) and !file_exists(self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb()))) {
            $file = fopen(self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb()), 'w+');
            if ($file !== false) {
                Stream::exec(self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb()));
                // change file permission
                fwrite($file, $data);
                fclose($file);
            }

            return true;
        } else {
            return false;
        }

    }//end configure()


    /**
     * @param array $array_data
     */
    private static function configureUpdate(array $array_data)
    {
        $current_data_array = json_decode(file_get_contents(self::getRequiresFile('SETUP_FILE_PATH')), true);
        $current_data_array = array_merge($current_data_array, $array_data);

        if (!file_put_contents(self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb()), json_encode($current_data_array))) {
            Media::StreamAsJson(
                [
                    'env' => [
                        'installation' => [
                            'message' => [
                                'cmd_btn'   => 'stay',
                                'set_title' => 'need',
                                'type'      => 'error',
                                'text'      => 'config update failed!!',
                                'extra'     => ['enable' => ['element' => 'app-database-install']],
                            ],
                            'client'  => 'base',
                        ],
                    ],
                ]
            );
            exit();
        }

    }//end configureUpdate()


    /**
     * @param $database
     */
    public static function DropPreviousTables(string $database)
    {
        self::makeDbConnectionRequestAuto(
            function ($connection) use ($database) {
                $data = $connection->query('SHOW TABLES FROM `'.$database.'`')->fetchAll(PdoMySQL::FETCH_COLUMN);

                if ($data) {
                    $tables = implode(', ', $data);
                    $connection->query('DROP TABLE '.$tables.';');
                }
            }
        );

    }//end DropPreviousTables()


    public static function makeDbConnectionRequestAuto(callable $callBack)
    {
        self::makeDbConnectionRequest(
            _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'host'),
            _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'port'),
            _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'name'),
            _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'user'),
            _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'password'),
            $callBack
        );

    }//end makeDbConnectionRequestAuto()


    /**
     * @param $database_dump_sql_file
     * @param $database_table_prefix
     */
    private static function SetupAppRequiredTables(string $database_dump_sql_file, string $database_table_prefix)
    {
        try {
            self::makeDbConnectionRequestAuto(
                function ($connection) use ($database_table_prefix, $database_dump_sql_file) {
                    MPM::importMysqlDB($connection, $database_dump_sql_file, $database_table_prefix);
                }
            );
        } catch (Exception $exception) {
            self::setRuntimeErrors(['cors' => $exception->getMessage(), 'normal' => 'app-required-database-configure-failed']);
        }

    }//end SetupAppRequiredTables()


    /**
     * @param  $file
     * @return string
     */
    private static function databaseFile(string $file): string
    {
        return self::$databaseFile = join(DIRECTORY_SEPARATOR, [MS_PACKAGES_PATH.MPM::defaultPackage(), 'Databases', "{$file}.sql"]);

    }//end databaseFile()


    /**
     * @param string $email
     * @param string $password
     * @param string $username
     * @param string $activity
     * @param string $role
     * @param string $status
     * @param string $dob
     * @param string $gender
     */
    private static function ConfigWebUserQuery(string $email, string $password, string $username, string $activity, string $role, string $status, string $dob, string $gender)
    {
        $db_prefix = _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'prefix');
        $random    = rand(00000, 123456789);
        self::makeDbConnectionRequestAuto(
            function ($connection) use ($gender, $dob, $random, $status, $role, $activity, $username, $password, $email, $db_prefix) {
                try {
                    $connection->query('INSERT INTO `'.$db_prefix."users` VALUES (null, null, null, '$email', '$password', '$username', '$activity', '$role', '$status', now(), '$random');");
                    $connection->query('INSERT INTO `'.$db_prefix."users_details` VALUES (null, '$dob', '$gender', null, null, null);");
                } catch (Exception $e) {
                    Media::StreamAsJson(
                        [
                            'env' => [
                                'installation' => [
                                    'message' => [
                                        'cmd_btn'   => 'stay',
                                        'set_title' => 'need',
                                        'type'      => 'error',
                                        'text'      => $e->getMessage(),
                                        'extra'     => ['enable' => ['element' => 'app-account-install']],
                                    ],
                                    'client'  => 'base',
                                ],
                            ],
                        ]
                    );
                }//end try
            }
        );

    }//end ConfigWebUserQuery()


    /**
     * @param string $name
     * @param string $description
     * @param string $company
     * @param string $doc_root
     * @param string $http_host_name
     * @param string $http_host_add
     * @param string $http_host_ip
     * @param string $default_home
     * @param string $default_layout
     * @param string $icon_remote_dir
     * @param string $icon_local_dir
     * @param string $favicon
     */
    private static function ConfigWebApp(
        string $name,
        string $description,
        string $company,
        string $doc_root,
        string $http_host_name,
        string $http_host_add,
        string $http_host_ip,
        string $default_home,
        string $default_layout,
        string $icon_remote_dir,
        string $icon_local_dir,
        string $favicon
    ) {
        $db_prefix = _Array::value(self::getDbConfigArgument('db', self::getRequiresFile('SETUP_FILE_PATH', self::getDefaultDb())), 'prefix');
        self::makeDbConnectionRequestAuto(
            function ($connection) use ($favicon, $icon_local_dir, $icon_remote_dir, $default_layout, $default_home, $http_host_ip, $http_host_add, $http_host_name, $doc_root, $company, $description, $name, $db_prefix) {
                $connection->query('INSERT INTO `'.$db_prefix.WEB_CONFIG_TABLE."` VALUES (null, '$name', '$description', '$company', '$doc_root', '$http_host_name', '$http_host_add', '$http_host_ip', '$default_home', '$default_layout', '$icon_remote_dir', '$icon_local_dir', '$favicon');");
            }
        );

    }//end ConfigWebApp()


    public static function getExcludeErrors(): array
    {
        return [
            'app-info-not-exist',
            'app-user-info-not-exist',
            'database-not-configure',
            'config-file-not-exist',
        ];

    }//end getExcludeErrors()


    /*
     * @public
     * @param  array $table
     * @return void
     */
    /*
        private static function deleteTableData(array $table)
        {
        if (is_array($table) && count($table)) {
            $tables = implode(", ", $table);
            self::makeDbConnectionRequestAuto(function ($connection) use ($tables) {
                $connection->query("DELETE FROM " . $tables . ";");

            });
        } else {
            echo 'Tables name not found.';
        }
    }*/

    /*
     * @public
     * @return float|int|mixed|null
     */
    /*
        private function getServerLoad()
        {
        $load = null;

        if (stristr(PHP_OS, "win")) {
            $cmd = "wmic cpu get loadpercentage /all";
            @exec($cmd, $output);

            if ($output) {
                foreach ($output as $line) {
                    if ($line && preg_match("/^[0-9]+\$/", $line)) {
                        $load = $line;
                        break;
                    }
                }
            }
        } else {
            if (is_readable("/proc/stat")) {
                // Collect 2 samples - each with 1 second period
                // See: https://de.wikipedia.org/wiki/Load#Der_Load_Average_auf_Unix-Systemen
                $statData1 = $this->_getServerLoadLinuxData();
                sleep(1);
                $statData2 = $this->_getServerLoadLinuxData();

                if
                (
                    (!is_null($statData1)) &&
                    (!is_null($statData2))
                ) {
                    // Get difference
                    $statData2[0] -= $statData1[0];
                    $statData2[1] -= $statData1[1];
                    $statData2[2] -= $statData1[2];
                    $statData2[3] -= $statData1[3];

                    // Sum up the 4 values for User, Nice, Mishusoft and Idle and calculate
                    // the percentage of idle time (which is part of the 4 values!)
                    $cpuTime = $statData2[0] + $statData2[1] + $statData2[2] + $statData2[3];

                    // Invert percentage to get CPU time, not idle time
                    $load = 100 - ($statData2[3] * 100 / $cpuTime);
                }
            }
        }

        return $load;
    }*/

    // Returns server load in percent (just number, without percent sign)
    /*
        private function _getServerLoadLinuxData(): ?array
        {
        if (is_readable("/proc/stat")) {
            $stats = @file_get_contents("/proc/stat");

            if ($stats !== false) {
                // Remove double spaces to make it easier to extract values with explode()
                $stats = preg_replace("/[[:blank:]]+/", " ", $stats);

                // Separate lines
                $stats = str_replace(array("\r\n", "\n\r", "\r"), "\n", $stats);
                $stats = explode("\n", $stats);

                // Separate values and find line for main CPU load
                foreach ($stats as $statLine) {
                    $statLineData = explode(" ", trim($statLine));

                    // Found!
                    if ((count($statLineData) >= 5) && ($statLineData[0] == "cpu")) {
                        return array(
                            $statLineData[1],
                            $statLineData[2],
                            $statLineData[3],
                            $statLineData[4],
                        );
                    }
                }
            }
        }

        return null;
    }*/
}//end class
