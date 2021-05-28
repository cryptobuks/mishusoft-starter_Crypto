<?php

namespace Mishusoft\Framework\Chipsets;


use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Network;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Utility\_JSON;

class Framework
{

    // Declare framework version.
    public const VERSION = '1.0.2';

    // Declare framework others constants.
    public const NAME        = 'Mishusoft';
    public const FULL_NAME   = self::NAME.' Framework';
    public const DESCRIPTION = self::FULL_NAME.' is a robust multi-web platform developed by '.self::COMPANY_NAME.'. This platform is capable of getting start with all categories website quickly and accurately.';

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
    public const COMPANY_DESCRIPTION_DETAILS = self::COMPANY_NAME.' is a software development company that is going to be established with a view to offering hight quality IT solutions at home and abroad. The company is keen to take the advantage of fast growing global software and data processing industry by offering professional service and price for support and benefit of the valued customers.';
    public const COMPANY_WEBSITE_LINK        = 'https://www.mishusoft.com';
    public const COMPANY_SUPPORT_LINK        = 'https://support.mishusoft.com';
    public const COMPANY_MAIL_LINK           = 'support@mishusoft.com';
    public const COMPANY_EST_YEAR            = '2014';

    // Declare required file and directories path.
    public const installedDocumentRoot = PHP_RUNTIME_ROOT_PATH;
    public const configFile            = PHP_RUNTIME_REGISTRIES_PATH.'framework.json';
    public const installFile           = PHP_RUNTIME_REGISTRIES_PATH.'framework.install.json';
    public const systemVFDFile         = PHP_RUNTIME_REGISTRIES_PATH.'files/'.MS_SERVER_NAME.'.ext4';

    // list of backup files with main files
    public const htaccessOriginalFile = self::installedDocumentRoot.'.htaccess';
    // original file
    public const htaccessBackupFile = MS_FRAMEWORK_PATH.'Backups/main.htaccess.backup';
    // backup file
    public const faviconOriginalFile = self::installedDocumentRoot.'favicon.ico';
    // original file
    public const faviconBackupFile = MS_PRIVATE_MEDIA_PATH.'logos/favicon.ico';
    // backup file
    public const indexHtmlOriginalFile = self::installedDocumentRoot.'index.html';
    // original file
    public const indexHtmlBackupFile = MS_FRAMEWORK_PATH.'Backups/index.html.backup';
    // backup file
    public const indexPhpOriginalFile = self::installedDocumentRoot.'index.php';
    // original file
    public const indexPhpBackupFile = MS_FRAMEWORK_PATH.'Backups/index.php.backup';
    // backup file
    public const mishusoftApplicationSecurityBackupFile = MS_FRAMEWORK_PATH.'Backups/'.self::NAME.'ApplicationSecurity.lock.backup';
    // backup file
    public const robotsTxtOriginalFile = self::installedDocumentRoot.'robots.txt';
    // original file
    public const robotsTxtBackupFile = MS_FRAMEWORK_PATH.'Backups/robots.txt.backup';
    // backup file

    /**
     * @var mixed
     */
    private static mixed $init;


    /**
     * Init function for Framework
     *
     * @throws JsonException|ErrorException Return JsonException error.
     */
    public static function init(): Framework
    {
        if (self::$init instanceof self === false) {
            self::$init = new self();
        }

        if (file_exists(self::systemVFDFile) === false || file_get_contents(self::systemVFDFile) === '') {
            self::checkFileSystem();
        }

        // test
        // self::checkFileSystem();
        self::install();

        self::backupFilesCheck();
        self::extensionRequiredCheck();
        self::thirdPartyRequiredCheck();
        self::opcacheStatusCheck();
        self::execute();

        return self::$init;

    }//end init()


    /**
     * Check whole file system.
     *
     * @param  string $rootPath System root path.
     * @return void             Return not arguments.
     * @throws ErrorException   Return error exception.
     */
    private static function checkFileSystem(string $rootPath=self::installedDocumentRoot): void
    {
        /*
         * Check root directory is directory or not.
         * */
        if (is_dir($rootPath) === false) {
            throw new ErrorException($rootPath.' not found.');
        }

        /*
         * Check last string of root directory is back slash or not.
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
                    strlen(self::installedDocumentRoot),
                    ((strlen($rootPath) - strlen(self::installedDocumentRoot)) - 1)
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
     * @param  string $file
     * @throws ErrorException
     */
    private static function updateFileSystemDisk(string $file): void
    {
        if (file_exists(self::systemVFDFile) === true) {
            if (is_readable(self::systemVFDFile) === true) {
                self::updateDirectoryIndex($file);
            } else {
                throw new ErrorException('Unable to read '.self::systemVFDFile);
            }
        } else if (is_writable(dirname(self::systemVFDFile, 2)) === true) {
            if (is_dir(dirname(self::systemVFDFile)) === false) {
                /*
                 * Autoload::log("Directory " . dirname($fDisk) . " is not exists ");
                 * Autoload::log("Preparing to create directory " . dirname($fDisk));
                 * */
                FileSystem::createDirectory(dirname(self::systemVFDFile));
                // Autoload::log("Directory " . dirname(self::systemVFDFile) . " has been created ");
            }

            if (is_writable(dirname(self::systemVFDFile)) === true) {
                /*
                 * Autoload::log("Checking permissions of directory " . dirname($fDisk));
                 * Autoload::log("Requested directory's permission is " . substr(sprintf('%o', fileperms(dirname($fDisk))), -4));
                 * */
                if (file_exists(self::systemVFDFile) === false) {
                    /*
                     * Autoload::log("File $fDisk is not exists.");
                     * Autoload::log("Preparing to create file $fDisk.");
                     * */
                    fclose(fopen(self::systemVFDFile, 'wb+'));
                    FileSystem::exec(self::systemVFDFile);
                    // Autoload::log("File $fDisk has been created.");
                }

                self::updateDirectoryIndex($file);
            }//end if
        } else {
            throw new ErrorException('Unable to write '.self::systemVFDFile.'. Permission denied.');
        }//end if

    }//end updateFileSystemDisk()


    /**
     * @param  string $file
     * @throws ErrorException
     */
    private static function updateDirectoryIndex(string $file): void
    {
        if (is_writable(self::systemVFDFile) === true) {
            /*
             * Autoload::log("Checking permissions of file $fDisk.");
             * Autoload::log("Requested file's permission is " . substr(sprintf('%o', fileperms($fDisk)), -4));
             *
             * Autoload::log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
             * Autoload::log("$fDisk.");
             * Autoload::log("$file");
             * Autoload::log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
             *
             * Autoload::log("Updating system directory to $fDisk.");
             * Autoload::log("Start writing to disk file $fDisk.");
             * Autoload::log("Preparing to collect old data from disk file $fDisk.");
             * */

            if (is_file($file) === true && file_exists($file) === true) {
                $data  = file_get_contents(self::systemVFDFile);
                $data .= substr(sprintf('%o', fileperms(self::systemVFDFile)), -4)."\t".filetype(realpath(self::systemVFDFile))."\t$file\n";
                FileSystem::saveToFile(self::systemVFDFile, $data);
            }

            // Autoload::log("Updated successfully to disk file $fDisk.");
        } else {
            // Autoload::log("Unable to write $fDisk.");
            throw new ErrorException('Unable to write '.self::systemVFDFile);
        }//end if

    }//end updateDirectoryIndex()


    /**
     * @throws JsonException
     */
    public static function install(): void
    {
        // Preparing to check framework install file.
        if (file_exists(self::installFile) === true) {
            // Framework install file found and start reading.
            if ((is_readable(self::installFile) === true) && (defined('INSTALLED_HOST_NAME') === false)) {
                define('INSTALLED_HOST_NAME', Memory::data('framework')->host->name);
            }
        } else {
            // Preparing to create framework install file.
            $defaultData = [
                'name'        => 'Framework Installer',
                'version'     => self::VERSION,
                'debug'       => !(MPM::getProperty('release') === 'stable'),
                'maintenance' => !(MPM::getProperty('release') === 'stable'),
                'date'        => Time::getTodayDateOnly(),
                'host'        => [
                    'url'  => System::getAbsoluteInstalledURL(),
                    'name' => Network::getValOfSrv('HTTP_HOST'),
                    'ip'   => Network::getValOfSrv('SERVER_ADDR'),
                ],
                'root'        => [
                    'dir' => [
                        'name' => MS_DOCUMENT_ROOT,
                        'size' => disk_total_space(MS_DOCUMENT_ROOT),
                        'free' => disk_free_space(MS_DOCUMENT_ROOT),
                    ],
                ],
            ];
            if (FileSystem::write(self::installFile, $defaultData) === true) {
                FileSystem::exec(self::installFile);
            }
        }//end if

    }//end install()


    /**
     *
     * @throws ErrorException
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
                    'check' => self::htaccessOriginalFile,
                    'from'  => self::htaccessBackupFile,
                    'to'    => self::htaccessOriginalFile,
                ],
                // Check index html file.
                [
                    'check' => self::indexHtmlOriginalFile,
                    'from'  => self::indexHtmlBackupFile,
                    'to'    => self::indexHtmlOriginalFile,
                ],
                // Check favicon file.
                [
                    'check' => self::faviconOriginalFile,
                    'from'  => self::faviconBackupFile,
                    'to'    => self::faviconOriginalFile,
                ],
                // Check robots file.
                [
                    'check' => self::robotsTxtOriginalFile,
                    'from'  => self::robotsTxtBackupFile,
                    'to'    => self::robotsTxtOriginalFile,
                ],
                /*
                 * Check required backup files
                 * */
                // Check htaccess file.
                [
                    'check' => self::htaccessBackupFile,
                    'from'  => self::htaccessOriginalFile,
                    'to'    => self::htaccessBackupFile,
                ],
                // Check index html file.
                [
                    'check' => self::indexHtmlBackupFile,
                    'from'  => self::indexHtmlOriginalFile,
                    'to'    => self::indexHtmlBackupFile,
                ],
                // Check index php file.
                [
                    'check' => self::indexPhpBackupFile,
                    'from'  => self::indexPhpOriginalFile,
                    'to'    => self::indexPhpBackupFile,
                ],
                // Check robots file.
                [
                    'check' => self::robotsTxtBackupFile,
                    'from'  => self::robotsTxtOriginalFile,
                    'to'    => self::robotsTxtBackupFile,
                ],
                // Check Application Security Backup file.
                [
                    'check' => self::mishusoftApplicationSecurityBackupFile,
                    'from'  => System::getRequiresFile('SECURITY_FILE_PATH'),
                    'to'    => self::mishusoftApplicationSecurityBackupFile,
                ],
            ]
        );

    }//end backupFilesCheck()


    /**
     * Check required file and copy it
     *
     * @param  array $requiredFiles
     * @throws ErrorException
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
                                        FileSystem::createDirectory(dirname($requiredFile['to']));
                                        FileSystem::exec(dirname($requiredFile['to']));
                                    }

                                    // Copy and change permission.
                                    FileSystem::copy($requiredFile['from'], $requiredFile['to']);
                                    FileSystem::exec($requiredFile['to']);
                                } else {
                                    throw new ErrorException('$to not found in $required argument');
                                }
                            }
                        } else {
                            throw new ErrorException('$from not found in $required argument');
                        }//end if
                    }//end if
                } else {
                    throw new ErrorException('$check not found in $required argument');
                }//end if
            }//end foreach
        } else {
            throw new ErrorException('Invalid $requiredFiles argument 1 parsed');
        }//end if

    }//end fileHandler()


    /**
     * @throws JsonException
     * @throws ErrorException
     */
    private static function extensionRequiredCheck(): void
    {
        // Framework required extensions check.
        if ((is_array(Memory::data()->required->extensions) === true)
            && (count(Memory::data()->required->extensions) > 0)
        ) {
            foreach (Memory::data()->required->extensions as $extension) {
                if (extension_loaded($extension) === false) {
                    throw new ErrorException('Warning: '.ucfirst($extension).' extension is required');
                }
            }
        } else {
            throw new ErrorException('Framework required extensions checking failed');
        }

    }//end extensionRequiredCheck()


    /**
     * @throws JsonException
     * @throws ErrorException
     */
    private static function thirdPartyRequiredCheck(): void
    {
        // required third-party library check
        if ((is_array(Memory::data()->required->thirdparty) === true)
            && (count(Memory::data()->required->thirdparty) > 0)
        ) {
            $thirdParty = _JSON::decodeToArray(_JSON::encodeToString(Memory::data()->required->thirdparty));
            foreach ($thirdParty as $package => $details) {
                if (is_dir(PHP_RUNTIME_ROOT_PATH.'vendor/'.$package) === false) {
                    throw new ErrorException('Warning: '.ucfirst($details['name']).' is required. Please run '.$details['command'].'or for fresh download visit '.$details['url']);
                }
            }
        } else {
            throw new ErrorException('Framework required third party package checking failed');
        }

    }//end thirdPartyRequiredCheck()


    /**
     *
     * @throws ErrorException
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
                ini_set('opcache.file_cache', MS_SYSTEM_TEMP_PATH.'/cache/.opcache;');
                if (isset($opcache['cache_full']) === true) {
                    opcache_reset();
                }
            } else {
                throw new ErrorException('You must need to enable opcache');
            }//end if
        }//end if

    }//end opcacheStatusCheck()


    /**
     * @throws JsonException
     */
    private static function execute(): void
    {
        if (file_exists(MPM::packageConfigFile) === false) {
            Ui::HtmlInterface(
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
