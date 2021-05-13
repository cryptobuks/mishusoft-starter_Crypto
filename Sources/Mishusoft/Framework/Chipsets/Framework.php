<?php

namespace Mishusoft\Framework\Chipsets;


use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\System\Network;
use Mishusoft\Framework\Chipsets\System\Time;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class Framework
{

    /*declare framework version*/
    const VERSION = "1.0.2";

    /*declare framework others constants*/
    const NAME = "Mishusoft";
    const FULL_NAME = self::NAME . " Framework";
    const DESCRIPTION = self::FULL_NAME . " is a robust multi-web platform developed by " . self::COMPANY_NAME . ". This platform is capable of getting start with all categories website quickly and accurately.";

    /*declare framework authors info*/
    const AUTHOR_NAME = "Mr Al-Amin Ahmed Abir";
    const AUTHOR_PROFILE_LINK = "https://www.mishusoft.com/about";
    const AUTHOR_DATE_OF_BIRTH = "17/01/1996";

    /*declare framework company info*/
    const COMPANY_NAME = "Mishusoft Systems Incorporated";

    const COMPANY_ADDRESS = "Dhaka Cantonment, Mirpur -14, Dhaka- 1206, Bangladesh.";
    const COMPANY_ADDRESS_MAP = "https://goo.gl/maps/awk7LSU9Rex192Dq8";
    const COMPANY_CONSUMER_CARE = "+880 963-8570830";

    const COMPANY_DESCRIPTION_SHORT = "Security first, Service must.";
    const COMPANY_DESCRIPTION_DETAILS = self::COMPANY_NAME . " is a software development company that is going to be established with a view to offering hight quality IT solutions at home and abroad. The company is keen to take the advantage of fast growing global software and data processing industry by offering professional service and price for support and benefit of the valued customers.";
    const COMPANY_WEBSITE_LINK = "https://www.mishusoft.com";
    const COMPANY_SUPPORT_LINK = "https://support.mishusoft.com";
    const COMPANY_MAIL_LINK = "support@mishusoft.com";
    const COMPANY_EST_YEAR = "2014";

    /*declare required file and directories path*/
    const installedDocumentRoot = PHP_RUNTIME_ROOT_PATH;
    const configFile = PHP_RUNTIME_REGISTRIES_PATH . 'framework.json';
    const installFile = PHP_RUNTIME_REGISTRIES_PATH . 'framework.install.json';
    const systemVFDFile = PHP_RUNTIME_REGISTRIES_PATH . 'files/' . MS_SERVER_NAME . '.ext4';

    /*list of backup files with main files*/
    const htaccessOriginalFile = self::installedDocumentRoot . ".htaccess"; /*original file*/
    const htaccessBackupFile = MS_FRAMEWORK_PATH . "Backups/main.htaccess.backup"; /*backup file*/

    const faviconOriginalFile = self::installedDocumentRoot . "favicon.ico"; /*original file*/
    const faviconBackupFile = MS_PRIVATE_MEDIA_PATH . "logos/favicon.ico"; /*backup file*/

    const indexHtmlOriginalFile = self::installedDocumentRoot . "index.html"; /*original file*/
    const indexHtmlBackupFile = MS_FRAMEWORK_PATH . "Backups/index.html.backup"; /*backup file*/

    const indexPhpOriginalFile = self::installedDocumentRoot . "index.php"; /*original file*/
    const indexPhpBackupFile = MS_FRAMEWORK_PATH . "Backups/index.php.backup"; /*backup file*/

    const mishusoftApplicationSecurityBackupFile = MS_FRAMEWORK_PATH . "Backups/" . self::NAME . "ApplicationSecurity.lock.backup"; /*backup file*/

    const robotsTxtOriginalFile = self::installedDocumentRoot . "robots.txt"; /*original file*/
    const robotsTxtBackupFile = MS_FRAMEWORK_PATH . "Backups/robots.txt.backup"; /*backup file*/


    /**
     * @var mixed
     */
    private static $init;

    public static function init(): Framework
    {
        if (!self::$init instanceof self) {
            self::$init = new Framework();
        }
        if (!file_exists(self::systemVFDFile) || strlen(file_get_contents(self::systemVFDFile)) === 0) {
            self::checkFileSystem();
        }

        self::install();

        self::backupFilesCheck();
        self::extensionRequiredCheck();
        self::thirdPartyRequiredCheck();
        self::opcacheStatusCheck();
        self::execute();

        return self::$init;
    }

    private static function checkFileSystem(string $rootPath = self::installedDocumentRoot): bool
    {
        if (!is_dir($rootPath)) {
            trigger_error("$rootPath not found.");
        }
        if (substr($rootPath, strlen($rootPath) - 1, 1) !== '/') {
            $rootPath .= '/';
        }
        if (in_array(
            strtolower(substr($rootPath, strlen(self::installedDocumentRoot),
                (strlen($rootPath) - strlen(self::installedDocumentRoot)) - 1)),
            SYSTEM_EXCLUDE_DIRS)) {
            return false;
        } else {
            $files = glob($rootPath . '*', GLOB_MARK);
            foreach ($files as $file) {
                if (is_dir($file)) {
                    self::checkFileSystem($file);
                } else {
                    self::updateFileSystemDisk($file);
                }
            }
            return true;
        }
    }

    private static function updateFileSystemDisk(string $file)
    {
        if (file_exists(self::systemVFDFile)) {
            if (is_readable(self::systemVFDFile)) {
                self::updateDirectoryIndex($file);
            } else {
                trigger_error("Unable to read " . self::systemVFDFile);
            }
        } else {
            /*Autoload::log("Unable to read $fDisk.");
            Autoload::log("Preparing to create $fDisk file.");
            Autoload::log("Checking permissions of directory " . dirname(dirname($fDisk)));
            Autoload::log("Requested directory's permission is " . substr(sprintf('%o', fileperms(dirname(dirname($fDisk)))), -4));*/

            if (is_writable(dirname(dirname(self::systemVFDFile)))) {
                if (!is_dir(dirname(self::systemVFDFile))) {
                    /*Autoload::log("Directory " . dirname($fDisk) . " is not exists ");
                    Autoload::log("Preparing to create directory " . dirname($fDisk));*/
                    mkdir(dirname(self::systemVFDFile));
                    Stream::exec(dirname(self::systemVFDFile));
                    /*Autoload::log("Directory " . dirname($fDisk) . " has been created ");*/
                } else {
                    if (!is_dir(dirname(self::systemVFDFile))) {
                        /*Autoload::log("We failed to create " . dirname($fDisk));*/
                        trigger_error("We failed to create " . dirname(self::systemVFDFile));
                    }
                }

                if (is_writable(dirname(self::systemVFDFile))) {
                    /*Autoload::log("Checking permissions of directory " . dirname($fDisk));
                    Autoload::log("Requested directory's permission is " . substr(sprintf('%o', fileperms(dirname($fDisk))), -4));*/
                    if (!file_exists(self::systemVFDFile)) {
                        /*Autoload::log("File $fDisk is not exists.");
                        Autoload::log("Preparing to create file $fDisk.");*/
                        fopen(self::systemVFDFile, 'w+');
                        Stream::exec(self::systemVFDFile);
                        /*Autoload::log("File $fDisk has been created.");*/
                    } else {
                        if (!file_exists(self::systemVFDFile)) {
                            /*Autoload::log("We failed to create $fDisk.");*/
                            trigger_error("We failed to create {self::systemVFDFile}.");
                        }
                    }
                    self::updateDirectoryIndex($file);
                }
            }
        }

    }

    private static function updateDirectoryIndex(string $file)
    {
        if (is_writable(self::systemVFDFile)) {
            /*Autoload::log("Checking permissions of file $fDisk.");
            Autoload::log("Requested file's permission is " . substr(sprintf('%o', fileperms($fDisk)), -4));

            Autoload::log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
            Autoload::log("$fDisk.");
            Autoload::log("$file");
            Autoload::log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

            Autoload::log("Updating system directory to $fDisk.");
            Autoload::log("Start writing to disk file $fDisk.");
            Autoload::log("Preparing to collect old data from disk file $fDisk.");*/

            if (is_file($file) and file_exists($file)) {
                $data = file_get_contents(self::systemVFDFile);
                $data .= substr(sprintf('%o', fileperms(self::systemVFDFile)), -4) . "\t" . filetype(realpath(self::systemVFDFile)) . "\t$file\n";
                file_put_contents(self::systemVFDFile, $data);
            }

            /*Autoload::log("Updated successfully to disk file $fDisk.");*/
        } else {
            /*Autoload::log("Unable to write $fDisk.");*/
            trigger_error("Unable to write ".self::systemVFDFile);
        }
    }

    public static function install()
    {
        /*Autoload::log('Preparing to check framework install file.');*/
        if (file_exists(self::installFile)) {
            /*Autoload::log('Framework install file found and start reading.');*/
            if (is_readable(self::installFile)) {
                if (!defined('INSTALLED_HOST_NAME')) {
                    define('INSTALLED_HOST_NAME', Memory::Data('framework')->host->name);
                }
            }
        } else {
            /*Autoload::log('Preparing to create framework install file.');*/
            if (fopen(self::installFile, 'w+')) {
                Stream::exec(self::installFile);
                Stream::saveToFile(self::installFile, json_encode(array(
                    'name' => "Framework Installer",
                    'version' => self::VERSION,
                    'debug' => !(MPM::getProperty("release") === "stable"),
                    'maintenance' => !(MPM::getProperty("release") === "stable"),
                    'date' => Time::getTodayDateOnly(),
                    'host' => array(
                        'url' => System::getAbsoluteInstalledURL(),
                        'name' => Network::getValOfSrv('HTTP_HOST'),
                        'ip' => Network::getValOfSrv('SERVER_ADDR'),
                    ),
                    'root' => array(
                        'dir' => array(
                            'name' => MS_DOCUMENT_ROOT,
                            'size' => disk_total_space(MS_DOCUMENT_ROOT),
                            'free' => disk_free_space(MS_DOCUMENT_ROOT),
                        ),
                    ),
                )));
            }
        }
    }

    private static function backupFilesCheck()
    {

        self::fileHandler(array(
            /*check required original files*/
            /*check htaccess file*/
            array("check" => self::htaccessOriginalFile, "from" => self::htaccessBackupFile, "to" => self::htaccessOriginalFile),
            /*check index html file*/
            array("check" => self::indexHtmlOriginalFile, "from" => self::indexHtmlBackupFile, "to" => self::indexHtmlOriginalFile),
            /*check favicon file*/
            array("check" => self::faviconOriginalFile, "from" => self::faviconBackupFile, "to" => self::faviconOriginalFile),
            /*check robots file*/
            array("check" => self::robotsTxtOriginalFile, "from" => self::robotsTxtBackupFile, "to" => self::robotsTxtOriginalFile),
            /*check required backup files*/
            /*check htaccess file*/
            array("check" => self::htaccessBackupFile, "from" => self::htaccessOriginalFile, "to" => self::htaccessBackupFile),
            /*check index html file*/
            array("check" => self::indexHtmlBackupFile, "from" => self::indexHtmlOriginalFile, "to" => self::indexHtmlBackupFile),
            /*check index php file*/
            array("check" => self::indexPhpBackupFile, "from" => self::indexPhpOriginalFile, "to" => self::indexPhpBackupFile),
            /*check robots file*/
            array("check" => self::robotsTxtBackupFile, "from" => self::robotsTxtOriginalFile, "to" => self::robotsTxtBackupFile),
            /*check Application Security Backup file*/
            array("check" => self::mishusoftApplicationSecurityBackupFile, "from" => System::getRequiresFile("SECURITY_FILE_PATH"), "to" => self::mishusoftApplicationSecurityBackupFile),
        ));
    }

    /**
     * Check required file and copy it
     * @param array $required_files
     */
    private static function fileHandler(array $required_files)
    {
        if (is_array($required_files)) {
            foreach ($required_files as $required_file) {
                /*check new file url*/
                if (array_key_exists("check", $required_file)) {
                    if (!file_exists($required_file["check"])) {
                        /*check backup file url*/
                        if (array_key_exists("from", $required_file)) {
                            if (file_exists($required_file["from"])) {
                                /*check backup file url*/
                                if (array_key_exists("to", $required_file)) {
                                    if (!file_exists(dirname($required_file["to"]))) {
                                        Stream::createDirectory(dirname($required_file["to"]));
                                        Stream::exec(dirname($required_file["to"]));
                                    }
                                    /*copy and change permission*/
                                    Stream::copy($required_file["from"], $required_file["to"]);
                                    Stream::exec($required_file["to"]);
                                } else {
                                    trigger_error("\$to not found in \$required argument");
                                }
                            }
                        } else {
                            trigger_error("\$from not found in \$required argument");
                        }
                    }
                } else {
                    trigger_error("\$check not found in \$required argument");
                }
            }
        } else {
            trigger_error("Invalid \$required_files argument 1 parsed");
        }
    }

    private static function extensionRequiredCheck()
    {
        /*Framework required extensions check*/
        if (Memory::Data()->required->extensions) {
            foreach (Memory::Data()->required->extensions as $extension) {
                if (!extension_loaded($extension)) {
                    trigger_error("Warning: " . ucfirst($extension) . " extension is required");
                }
            }
        } else {
            trigger_error('Framework required extensions checking failed');
        }
    }

    private static function thirdPartyRequiredCheck()
    {
        /*required third-party library check*/
        if (Memory::Data()->required->thirdparty) {
            foreach (json_decode(json_encode(Memory::Data()->required->thirdparty), true) as $package => $details) {
                if (!is_dir(PHP_RUNTIME_ROOT_PATH . 'vendor/' . $package)) {
                    trigger_error("Warning: " . ucfirst($details['name']) . " is required. Please run " . $details['command'] . "or for fresh download visit " . $details["url"]);
                }
            }
        } else {
            trigger_error('Framework required third party package checking failed');
        }
    }

    private static function opcacheStatusCheck()
    {
        // REQUIREMENTS - Opcache
        if (!function_exists('opcache_get_status')) {
            trigger_error('Requires Opcache installations');
        } else {
            $opcache = opcache_get_status(false);
            if (!empty($opcache) && $opcache['opcache_enabled']) {
                //additional opcache ini settings
                ini_set('opcache.memory_consumption', 128); /*application opcache memory_consumption*/
                ini_set('opcache.interned_strings_buffer', 8); /*application opcache interned_strings_buffer*/
                ini_set('opcache.max_accelerated_files', 4000); /*application opcache max_accelerated_files*/
                ini_set('opcache.revalidate_freq', 60); /*application opcache revalidate_freq*/
                ini_set('opcache.fast_shutdown', 1); /*application opcache fast_shutdown*/
                ini_set('opcache.enable_cli', 1); /*application opcache cli*/
                ini_set('opcache.use_cwd', 1); /*application opcache use_cwd*/
                ini_set('opcache.file_cache', MS_SYSTEM_TEMP_PATH . '/cache/.opcache;');
                if ($opcache['cache_full']) {
                    opcache_reset();
                }
            } else {
                trigger_error('You must need to enable opcache');
            }
        }
    }

    private static function execute()
    {
        if (!file_exists(MPM::packageConfigFile)) {
            Ui::HtmlInterface("Welcome to " . self::FULL_NAME, function ($html) {

                /*create html template for client view*/
                $template = Ui::element(
                    Ui::element(
                        Ui::element($html, 'body', ['id' => 'welcome']),
                        /*create app tag for template for client view*/
                        'ms-app', ['style' => 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);box-sizing: border-box;border-radius: 5px;-webkit-border-radius: 5px;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);-moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);line-height:1.5;']),
                    /*create app-content tag for template for client view*/
                    'ms-app-content', ['style' => '  display: block;/*width: 525px;*/margin: 0;padding: 0;text-align: left;border: 1px solid #0777cc;-webkit-border-radius: 5px;border-radius: 5px']);

                /*create template header for client view*/
                Ui::text(
                    Ui::element($template, 'ms-app-content-header',
                        ['style' => 'text-align:center;font-size: 18px;font-weight: 700;padding: 10px;color: #fff;display: block;background-color: #0777cc']),
                    "Welcome to " . self::FULL_NAME);

                /*create template body for client view*/
                $template_body = Ui::element($template, 'ms-app-content-body', ['style' => 'text-align:center;padding: 10px;display: block;']);

                /*create no script tag for show alert in disabled-javascript mode for client view*/
                Ui::setNoScriptText($template_body);

                /*create image in template body for client view*/
                Ui::element($template_body, 'img', ['src' => FRAMEWORK_FAVICON_FILE, 'alt' => 'mishusoft-company-logo-m', 'style' => 'text-align:center;  width: 100px;height: 100px;padding: 2px;margin: 0;border-radius: 50%;position: relative;-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-o-box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);box-shadow: 0 1px 3px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);-webkit-transition: all .25s ease;-o-transition: all .25s ease;transition: all .25s ease;margin: 10px;']);

                /*create text element tag in template body for client view*/
                Ui::text(Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 16px;line-height: 1.5;display: flex;']), Framework::DESCRIPTION);
                Ui::text(Ui::element($template_body, 'ms-app-paragraph', ['style' => 'font-size: 15px;line-height: 1.5;display: flex;text-align: left;background: bisque;border-radius: 5px;padding: 5px;margin-top: 10px;']), 'Notice: This welcome interface has been shown after successful installation of this framework. Now you need to install our package(s) to getting start. If you would install any package but this page shown, you should to follow our getting start guideline.');

                /*add system default signature*/
                Ui::addDefaultSignature($template_body);
            });
            exit();
        } else {
            MPM::load();
        }
    }

    function __destruct()
    {

    }
}