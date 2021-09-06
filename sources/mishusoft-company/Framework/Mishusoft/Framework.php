<?php

namespace Mishusoft;

use GeoIp2\Exception\AddressNotFoundException;
use JsonException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;
use Mishusoft\System\Memory;
use Mishusoft\System\Network;
use Mishusoft\System\Time;
use Mishusoft\Ui\EmbeddedView;
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
     * @param \Closure $closure
     * @return Framework
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     * @throws JsonException
     */
    public static function init(\Closure $closure): static
    {
        $instance = new static();

        //Check framework file system
        if (file_exists($instance->listerFile()) === false || file_get_contents($instance->listerFile()) === '') {
            $instance->checkFileSystem();
        }

        //install framework
        static::install();

        //Check framework requirements
        static::extensionRequiredCheck();
        static::thirdPartyRequiredCheck();
        static::opcacheStatusCheck();

        $closure($instance);
        //static::execute();
        return $instance;
    }//end init()

    /**
     * @return string
     */
    public static function description():string
    {
        $details  = static::FULL_NAME.' is a robust multi-web platform developed by '.static::COMPANY_NAME.'.';
        $details .= ' This platform is capable of getting start with all categories website quickly and accurately.';
        return $details;
    }

    /**
     * @return string
     */
    public static function companyDescriptionDetails():string
    {
        $details  = static::COMPANY_NAME.' is a software development company that is going to be established with ';
        $details  .= 'a view to offering high quality IT solutions at home and abroad. ';
        $details .= 'The company is keen to take the advantage of fast growing global software and data processing ';
        $details .= 'industry by offering professional service and price for support and benefit of the valued customers.';
        return $details;
    }

    /**
     * @return string
     */
    public static function configFile():string
    {
        return self::dFile(self::configDataFile('Framework', 'config'));
    }

    /**
     * @return string
     */
    public static function installFile():string
    {
        return self::dFile(self::configDataFile('Framework', 'install'));
    }

    /**
     * @return string
     */
    public function listerFile():string
    {
        return self::dFile(self::configDataFile('Framework', 'files/' . APPLICATION_SERVER_NAME), 'ext4');
    }


    /**
     * @return array
     */
    public static function defaultConfiguration():array
    {
        return [
            'name'         => static::NAME,
            'fullName'     => static::FULL_NAME,
            'descriptions' => static::description(),
            'version'      => static::VERSION,
            'charset'      => 'utf8mb4',
            'prefix'       => [
                'char'      => 'msu',
                'separator' => '_',
            ],
            'author'       => [
                'name'        => static::AUTHOR_NAME,
                'profile'     => static::AUTHOR_PROFILE_LINK,
                'dateOfBirth' => static::AUTHOR_DATE_OF_BIRTH,
            ],
            'company'      => [
                'name'               => static::COMPANY_NAME,
                'address'            => static::COMPANY_ADDRESS,
                'map'                => static::COMPANY_ADDRESS_MAP,
                'care'               => static::COMPANY_CONSUMER_CARE,
                'shortDescription'   => static::COMPANY_DESCRIPTION_SHORT,
                'detailsDescription' => static::companyDescriptionDetails(),
                'website'            => static::COMPANY_WEBSITE_LINK,
                'support'            => static::COMPANY_SUPPORT_LINK,
                'mail'               => static::COMPANY_MAIL_LINK,
                'est'                => static::COMPANY_EST_YEAR,
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
                    'date',
                    'openssl',
                    'dom',
                    'json',
                    'PDO',
                    'session',
                    'mysqlnd',
                    'Phar',
                    'curl',
                    'pdo_mysql',
                    'bz2',
                    'zip',
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
    private function checkFileSystem(string $rootPath = RUNTIME_ROOT_PATH): void
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
                $this->checkFileSystem($file);
            } else {
                $this->updateFileSystemDisk($file);
            }
        }
    }//end checkFileSystem()


    /**
     * @param string $file
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\PermissionRequiredException
     */
    private function updateFileSystemDisk(string $file): void
    {
        if (file_exists($this->listerFile()) === true) {
            if (is_readable($this->listerFile()) === true) {
                $this->updateDirectoryIndex($file);
            } else {
                throw new Exceptions\PermissionRequiredException(sprintf('Unable to read %s', $this->listerFile()));
            }
        } elseif (is_writable(dirname($this->listerFile(), 2)) === true) {
            if (is_dir(dirname($this->listerFile())) === false) {
                FileSystem::makeDirectory(dirname($this->listerFile()));
            }

            if (is_writable(dirname($this->listerFile())) === true) {
                if (file_exists($this->listerFile()) === false) {
                    fclose(fopen($this->listerFile(), 'wb+'));
                    FileSystem::exec($this->listerFile());
                }

                $this->updateDirectoryIndex($file);
            }//end if
        } else {
            throw new Exceptions\PermissionRequiredException(
                sprintf('Unable to write %s', dirname($this->listerFile(), 2))
            );
        }//end if
    }//end updateFileSystemDisk()


    /**
     * @param string $file
     * @throws Exceptions\PermissionRequiredException
     */
    private function updateDirectoryIndex(string $file): void
    {
        if (is_writable($this->listerFile()) === true) {
            if (is_file($file) === true && file_exists($file) === true) {
                $data  = file_get_contents($this->listerFile());
                $data .= substr(sprintf('%o', fileperms($this->listerFile())), -4)."\t";
                $data .= filetype(realpath($this->listerFile()))."\t$file\n";
                FileSystem::saveToFile($this->listerFile(), $data);
            }
        } else {
            throw new Exceptions\PermissionRequiredException(sprintf('Unable to write %s', $this->listerFile()));
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
        if (is_readable(static::installFile()) === true) {
            // Framework install file found and start reading.
            if (defined('INSTALLED_HOST_NAME') === false) {
                define('INSTALLED_HOST_NAME', Memory::data('framework')->host->name);
            }
        } else {
            FileSystem::makeDirectory(dirname(static::installFile()));
            // Preparing to create framework install file.
            FileSystem\Yaml::emitFile(static::installFile(), [
                'name'        => 'Framework Installer',
                'version'     => static::VERSION,
                'debug'       => !(MPM\Classic::getProperty('release') === 'stable'),
                'date'        => Time::todayDateOnly(),
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
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     * @throws JsonException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    public function execute(): void
    {
        if (file_exists(MPM\Classic::configFile()) === false) {
            EmbeddedView::welcomeToFramework(static::FULL_NAME, [
                'caption' => static::FULL_NAME,
                'description' => static::description(),
                'warning' => static::installWarning(),
                'copyright' => Ui::copyRightText(),
            ]);
            static::terminate();
        }//end if

        MPM\Classic::load();
    }//end execute()

    private static function installWarning():string
    {
        $message = 'Notice: This welcome interface has been shown after successful installation of this framework. ';
        $message .= 'Now you need to install our package(s) to getting start. ';
        $message .= 'If you would install any package but this page shown, ';
        $message .= 'you should to follow our getting start guideline.';

        return $message;
    }

    /**
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws JsonException
     */
    public static function terminate(): void
    {
        Log::terminate();
    }
}//end class