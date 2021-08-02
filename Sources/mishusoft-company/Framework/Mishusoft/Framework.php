<?php

namespace Mishusoft;

use JsonException;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Memory;
use Mishusoft\System\Network;
use Mishusoft\System\Time;
use Mishusoft\Utility\JSON;

class Framework extends Base
{

    // Declare framework version.
    public const VERSION = '1.0.2';

    // Declare framework others constants.
    public const NAME        = 'Mishusoft';
    public const FULL_NAME   = self::NAME.' Framework';

    // Declare framework authors info.
    public const AUTHOR_NAME          = 'Mr Al-Amin Ahmed Abir';
    public const AUTHOR_PROFILE_LINK  = 'https://www.mishusoft.com/about';
    public const AUTHOR_DATE_OF_BIRTH = '17/01/1996';

    // Declare framework company info.
    public const COMPANY_NAME = 'Mishusoft Systems Incorporated';

    public const COMPANY_ADDRESS       = 'Dhaka Cantonment, Mirpur -14, Dhaka- 1206, Bangladesh.';
    public const COMPANY_ADDRESS_MAP   = 'https://goo.gl/maps/awk7LSU9Rex192Dq8';
    public const COMPANY_CONSUMER_CARE = '+880 963-8570830';

    public const COMPANY_DESCRIPTION_SHORT   = 'Security first, Service must.';

    public const COMPANY_WEBSITE_LINK        = 'https://www.mishusoft.com';
    public const COMPANY_SUPPORT_LINK        = 'https://support.mishusoft.com';
    public const COMPANY_MAIL_LINK           = 'support@mishusoft.com';
    public const COMPANY_EST_YEAR            = '2014';

    /**
     * Init function for Framework
     *
     * @return Framework
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function init(): static
    {
        if (file_exists(self::listerFile()) === false || file_get_contents(self::listerFile()) === '') {
            self::checkFileSystem();
        }

        self::install();

        self::backupFilesCheck();
        self::extensionRequiredCheck();
        self::thirdPartyRequiredCheck();
        self::opcacheStatusCheck();
        self::execute();

        return new self();
    }//end init()

    /**
     * @return string
     */
    public static function description():string
    {
        $details  = self::FULL_NAME.' is a robust multi-web platform developed by '.self::COMPANY_NAME.'.';
        $details .= ' This platform is capable of getting start with all categories website quickly and accurately.';
        return $details;
    }

    /**
     * @return string
     */
    public static function companyDescriptionDetails():string
    {
        $details  = self::COMPANY_NAME.' is a software development company that is going to be established with a view to offering high quality IT solutions at home and abroad.';
        $details .= ' The company is keen to take the advantage of fast growing global software and data processing industry by offering professional service and price for support and benefit of the valued customers.';
        return $details;
    }

    /**
     * @return string
     */
    public static function configFile():string
    {
        return self::dFile(self::dataFile('Framework', 'config'));
    }

    /**
     * @return string
     */
    public static function installFile():string
    {
        return self::dFile(self::dataFile('Framework', 'install'));
    }

    /**
     * @return string
     */
    public static function listerFile():string
    {
        return self::dFile(self::dataFile('Framework', 'files/'.APPLICATION_SERVER_NAME), 'ext4');
    }


    /**
     * @param string $filename
     * @return string
     */
    private static function originalFile(string $filename):string
    {
        return sprintf('%s%s', RUNTIME_ROOT_PATH, $filename);
    }

    /**
     * @param string $filename
     * @return string
     */
    private static function cacheFile(string $filename):string
    {
        return sprintf('%s%s.cache', Storage::cachesStoragesPath(), $filename);
    }

    /**
     * @return array
     */
    public static function defaultConfig():array
    {
        return [
            'name'         => self::NAME,
            'fullName'     => self::FULL_NAME,
            'descriptions' => self::description(),
            'version'      => self::VERSION,
            'charset'      => 'utf8mb4',
            'prefix'       => [
                'char'      => 'msu',
                'separator' => '_',
            ],
            'author'       => [
                'name'        => self::AUTHOR_NAME,
                'profile'     => self::AUTHOR_PROFILE_LINK,
                'dateOfBirth' => self::AUTHOR_DATE_OF_BIRTH,
            ],
            'company'      => [
                'name'               => self::COMPANY_NAME,
                'address'            => self::COMPANY_ADDRESS,
                'map'                => self::COMPANY_ADDRESS_MAP,
                'care'               => self::COMPANY_CONSUMER_CARE,
                'shortDescription'   => self::COMPANY_DESCRIPTION_SHORT,
                'detailsDescription' => self::companyDescriptionDetails(),
                'website'            => self::COMPANY_WEBSITE_LINK,
                'support'            => self::COMPANY_SUPPORT_LINK,
                'mail'               => self::COMPANY_MAIL_LINK,
                'est'                => self::COMPANY_EST_YEAR,
            ],
            'preset'       => [
                'user'            => 'superuser',
                'password'        => 'Ap@17011996',
                'theme'           => 'advanced',
                'directoryIndex'  => 'index',
                'sessionDuration' => '60',
                'config'          => 'webapp',
                'logo'            => 'mishusoft-logo.png',
            ],
            'mime'         => [
                'databaseFileFormat'      => '.msdb',
                'databaseDumpFileFormat'  => '.mdf',
                'configurationFileFormat' => '.mscf',
            ],
            'required'     => [
                'extensions' => [
                    'Core',
                    'date',
                    'openssl',
                    'dom',
                    'json',
                    'PDO',
                    'session',
                    'mysqlnd',
                    'Phar',
                    'curl',
                    'gettext',
                    'pdo_mysql',
                    'bz2',
                    'zip',
                    'session',
                    'yaml',
                    'Zend OPcache',
                ],
                'thirdparty' => [
                    'smarty'    => [
                        'name'    => 'Smarty Template Engine Plug-In',
                        'command' => 'composer require smarty/smarty',
                        'url'     => 'https =>//github.com/smarty-php/smarty',
                    ],
                    'verot'     => [
                        'name'    => 'Verot Uploader Plug-In',
                        'command' => 'composer require verot/class.upload.php',
                        'url'     => 'https =>//github.com/verot/class.upload.php',
                    ],
                    'phpmailer' => [
                        'name'    => 'PHPMailer Plug-In',
                        'command' => 'composer require phpmailer/phpmailer',
                        'url'     => 'https =>//github.com/phpmailer/phpmailer',
                    ],
                    'stripe'    => [
                        'name'    => 'Stripe Payment Plug-In',
                        'command' => 'composer require stripe/stripe-php',
                        'url'     => 'https =>//github.com/stripe/stripe-php',
                    ],
                    'geoip2'    => [
                        'name'    => 'GeoIP Plug-In',
                        'command' => 'composer require geoip2/geoip2',
                        'url'     => 'https =>//packagist.org/packages/geoip2/geoip2',
                    ],
                    /*
                        "mpdf" => [
                        "name" => "MPDF Plug-In",
                        "command" => "composer require mpdf/mpdf",
                        "url" => "https://github.com/mpdf/mpdf"
                    ]*/
                ],
            ],
            'exclude'      => [
                'dir' => [
                    'composer',
                    'node_modules',
                    'dist',
                    'dist-src',
                    'Sources',
                ],
            ],
        ];
    }


    /**
     * Check whole file system.
     *
     * @param string $rootPath System root path.
     *
     * @return void
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\ErrorException
     * @throws Exceptions\PermissionRequiredException
     */
    private static function checkFileSystem(string $rootPath = RUNTIME_ROOT_PATH): void
    {
        /*
         * Check root directory is directory or not.
         * */
        if (is_dir($rootPath) === false) {
            throw new Exceptions\RuntimeException\NotFoundException($rootPath.' not found.');
        }

        /*
         * Check last string of root directory is backslash or not.
         * */
        if ($rootPath[(strlen($rootPath) - 1)] !== '/') {
            $rootPath .= '/';
        }

        /*
         * Check provided root directory in app installed path.
         * */
        if (in_array(
            strtolower(
                substr(
                    $rootPath,
                    strlen(RUNTIME_ROOT_PATH),
                    ((strlen($rootPath) - strlen(RUNTIME_ROOT_PATH)) - 1)
                )
            ),
            SYSTEM_EXCLUDE_DIRS,
            true
        ) === true
        ) {
            return;
        }

        /*
         * Browse every file and directory.
         * */
        $files = glob($rootPath.'*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file) === true) {
                self::checkFileSystem($file);
            } else {
                self::updateFileSystemDisk($file);
            }
        }
    }//end checkFileSystem()


    /**
     * @param string $file
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\PermissionRequiredException
     */
    private static function updateFileSystemDisk(string $file): void
    {
        if (file_exists(self::listerFile()) === true) {
            if (is_readable(self::listerFile()) === true) {
                self::updateDirectoryIndex($file);
            } else {
                throw new Exceptions\PermissionRequiredException(sprintf('Unable to read %s', self::listerFile()));
            }
        } elseif (is_writable(dirname(self::listerFile(), 2)) === true) {
            if (is_dir(dirname(self::listerFile())) === false) {
                FileSystem::makeDirectory(dirname(self::listerFile()));
            }

            if (is_writable(dirname(self::listerFile())) === true) {
                if (file_exists(self::listerFile()) === false) {
                    fclose(fopen(self::listerFile(), 'wb+'));
                    FileSystem::exec(self::listerFile());
                }

                self::updateDirectoryIndex($file);
            }//end if
        } else {
            throw new Exceptions\PermissionRequiredException(
                sprintf('Unable to write %s', dirname(self::listerFile(), 2))
            );
        }//end if
    }//end updateFileSystemDisk()


    /**
     * @param string $file
     * @throws Exceptions\PermissionRequiredException
     */
    private static function updateDirectoryIndex(string $file): void
    {
        if (is_writable(self::listerFile()) === true) {
            if (is_file($file) === true && file_exists($file) === true) {
                $data  = file_get_contents(self::listerFile());
                $data .= substr(sprintf('%o', fileperms(self::listerFile())), -4)."\t";
                $data .= filetype(realpath(self::listerFile()))."\t$file\n";
                FileSystem::saveToFile(self::listerFile(), $data);
            }
        } else {
            throw new Exceptions\PermissionRequiredException(sprintf('Unable to write %s', self::listerFile()));
        }//end if
    }//end updateDirectoryIndex()


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function install(): void
    {
        // Preparing to check framework install file.
        if (is_readable(self::installFile()) === true) {
            // Framework install file found and start reading.
            if (defined('INSTALLED_HOST_NAME') === false) {
                define('INSTALLED_HOST_NAME', Memory::data('framework')->host->name);
            }
        } else {
            // Preparing to create framework install file.
            FileSystem\Yaml::emitFile(self::installFile(), [
                'name'        => 'Framework Installer',
                'version'     => self::VERSION,
                'debug'       => !(MPM::getProperty('release') === 'stable'),
                'date'        => Time::getTodayDateOnly(),
                'host'        => [
                    'url'  => System::getAbsoluteInstalledURL(),
                    'name' => Network::getValOfSrv('HTTP_HOST'),
                    'ip'   => Network::getValOfSrv('SERVER_ADDR'),
                ],
                'root'        => [
                    'dir' => [
                        'name' => RUNTIME_ROOT_PATH,
                        'size' => disk_total_space(RUNTIME_ROOT_PATH),
                        'free' => disk_free_space(RUNTIME_ROOT_PATH),
                    ],
                ],
            ]);
        }//end if
    }//end install()


    /**
     *
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\ErrorException
     */
    private static function backupFilesCheck(): void
    {
        self::fileHandler(
            [
            /*
             * Check required original files
             * */
            // Check htaccess file.
                [
                    'check' => self::originalFile('.htaccess'),
                    'from'  => self::cacheFile('app.htaccess'),
                    'to'    => self::originalFile('.htaccess'),
                ],
                // Check index html file.
                [
                    'check' => self::originalFile('index.html'),
                    'from'  => self::cacheFile('index.html'),
                    'to'    => self::originalFile('index.html'),
                ],
                // Check favicon file.
                [
                    'check' => self::originalFile('favicon.ico'),
                    'from'  => self::cacheFile('favicon.ico'),
                    'to'    => self::originalFile('favicon.ico'),
                ],
                // Check robots file.
                [
                    'check' => self::originalFile('robots.txt'),
                    'from'  => self::cacheFile('robots.txt'),
                    'to'    => self::originalFile('robots.txt'),
                ],
                /*
                 * Check required backup files
                 * */
                // Check htaccess file.
                [
                    'check' => self::cacheFile('app.htaccess'),
                    'from'  => self::originalFile('.htaccess'),
                    'to'    => self::cacheFile('app.htaccess'),
                ],
                // Check index html file.
                [
                    'check' => self::cacheFile('index.html'),
                    'from'  => self::originalFile('index.html'),
                    'to'    => self::cacheFile('index.html'),
                ],
                // Check index php file.
                [
                    'check' => self::cacheFile('index.php'),
                    'from'  => self::originalFile('index.php'),
                    'to'    => self::cacheFile('index.php'),
                ],
                // Check robots file.
                [
                    'check' => self::cacheFile('robots.txt'),
                    'from'  => self::originalFile('robots.txt'),
                    'to'    => self::cacheFile('robots.txt'),
                ],
                // Check Application Security Backup file.
                [
                    'check' => self::cacheFile(self::NAME.'ApplicationSecurity.lock'),
                    'from'  => System::getRequiresFile('SECURITY_FILE_PATH'),
                    'to'    => self::cacheFile(self::NAME.'ApplicationSecurity.lock'),
                ],
            ]
        );
    }//end backupFilesCheck()


    /**
     * Check required file and copy it
     *
     * @param array $requiredFiles
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\ErrorException
     */
    private static function fileHandler(array $requiredFiles): void
    {
        if (is_array($requiredFiles) === true) {
            foreach ($requiredFiles as $requiredFile) {
                // Check new file url.
                if (array_key_exists('check', $requiredFile) === true) {
                    if (file_exists($requiredFile['check']) === false) {
                        // Check backup file url.
                        if (array_key_exists('from', $requiredFile) === true) {
                            if (file_exists($requiredFile['from']) === true) {
                                // Check backup file url.
                                if (array_key_exists('to', $requiredFile) === true) {
                                    if (file_exists(dirname($requiredFile['to'])) === false) {
                                        FileSystem::makeDirectory(dirname($requiredFile['to']));
                                    }

                                    // Copy and change permission.
                                    FileSystem::copy($requiredFile['from'], $requiredFile['to']);
                                    FileSystem::exec($requiredFile['to']);
                                } else {
                                    throw new Exceptions\ErrorException('$to not found in $required argument');
                                }
                            }
                        } else {
                            throw new Exceptions\ErrorException('$from not found in $required argument');
                        }//end if
                    }//end if
                } else {
                    throw new Exceptions\ErrorException('$check not found in $required argument');
                }//end if
            }//end foreach
        } else {
            throw new Exceptions\ErrorException('Invalid $requiredFiles argument 1 parsed');
        }//end if
    }//end fileHandler()


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    private static function extensionRequiredCheck(): void
    {
        // Framework required extensions check.
        if ((is_array(Memory::data()->required->extensions) === true)
            && (count(Memory::data()->required->extensions) > 0)
        ) {
            foreach (Memory::data()->required->extensions as $extension) {
                if (extension_loaded($extension) === false) {
                    throw new Exceptions\ErrorException(sprintf('%s extension is required', ucfirst($extension)));
                }
            }
        } else {
            throw new Exceptions\ErrorException('Framework required extensions checking failed');
        }
    }//end extensionRequiredCheck()


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    private static function thirdPartyRequiredCheck(): void
    {
        // required third-party library check
        $thirdParty = JSON::decodeToArray(JSON::encodeToString(Memory::data()->required->thirdparty));
        if (count($thirdParty) > 0) {
            foreach ($thirdParty as $package => $details) {
                if (is_dir(RUNTIME_ROOT_PATH.'vendor/'.$package) === false) {
                    throw new Exceptions\ErrorException(
                        sprintf(
                            '%s is required. Please run %s or for fresh download visit %s',
                            ucfirst($details['name']),
                            $details['command'],
                            $details['url']
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
    private static function opcacheStatusCheck(): void
    {
        // REQUIREMENTS - Opcache.
        if (function_exists('opcache_get_status') === false) {
            trigger_error('Requires Opcache installations');
        } else {
            $opcache = opcache_get_status(false);
            if (empty($opcache) === false && isset($opcache['opcache_enabled']) === true) {
                // Additional opcache ini settings.
                ini_set('opcache.memory_consumption', 128);
                // Application opcache memory_consumption.
                ini_set('opcache.interned_strings_buffer', 8);
                // Application opcache interned_strings_buffer.
                ini_set('opcache.max_accelerated_files', 4000);
                // Application opcache max_accelerated_files.
                ini_set('opcache.revalidate_freq', 60);
                // Application opcache revalidate_freq.
                // ini_set('opcache.fast_shutdown', 1);
                // Application opcache fast_shutdown.
                ini_set('opcache.enable_cli', 1);
                // Application opcache cli.
                ini_set('opcache.use_cwd', 1);
                // Application opcache use_cwd.
                ini_set('opcache.file_cache', APPLICATION_SYSTEM_TEMP_PATH.'/cache/.opcache;');
                if (isset($opcache['cache_full']) === true) {
                    opcache_reset();
                }
            } else {
                throw new Exceptions\ErrorException('You must need to enable opcache');
            }//end if
        }//end if
    }//end opcacheStatusCheck()


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    private static function execute(): void
    {
        if (file_exists(MPM::configFile()) === false) {
            Ui::htmlInterface(
                'Welcome to '.self::FULL_NAME,
                function ($html) {
                    // create html template for client view
                    $template = Ui::element(
                        Ui::element(
                            Ui::element($html, 'body', ['id' => 'welcome']),
                            // create app tag for template for client view
                            'ms-app',
                            ['style' => 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']
                        ),
                        // create app-content tag for template for client view
                        'ms-app-content',
                        ['style' => '  display: block;/*width: 525px;*/margin: 0;padding: 0;text-align: left;border: 1px solid #0777cc;-webkit-border-radius: 5px;border-radius: 5px']
                    );

                    // create template header for client view
                    Ui::text(
                        Ui::element(
                            $template,
                            'ms-app-content-header',
                            ['style' => 'text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: #0777cc']
                        ),
                        'Welcome to '.self::FULL_NAME
                    );

                    // create template body for client view
                    $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

                    // create no script tag for show alert in disabled-javascript mode for client view
                    Ui::setNoScriptText($template_body);

                    // create image in template body for client view
                    Ui::element($template_body, 'img', ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft-company-logo-m', 'style' => 'text-align:center;  width: 100px;height: 100px;padding: 2px;margin: 0;border-radius: 50%;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;']);

                    // create text element tag in template body for client view
                    Ui::text(Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 16px;line-height: 1.5;display: flex;']), Framework::DESCRIPTION);
                    Ui::text(Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;']), 'Notice: This welcome interface has been shown after successful installation of this framework. Now you need to install our package(s) to getting start. If you would install any package but this page shown, you should to follow our getting start guideline.');

                    // add system default signature
                    Ui::addDefaultSignature($template_body);
                }
            );
            exit();
        }//end if

        MPM::load();
    }//end execute()


    /**
     *
     */
    public function __destruct()
    {
    }//end __destruct()
}//end class
