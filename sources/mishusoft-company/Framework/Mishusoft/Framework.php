<?php

namespace Mishusoft;

use Closure;
use Mishusoft\Ui\EmbeddedView;

class Framework extends Base
{
    //use trait
    use Framework\Configuration;
    use Framework\Validation;
    use Framework\DiskObserver;
    use Framework\StaticText;

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
     * @param Registry $registry
     * @param Closure $closure
     * @return Framework
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws \Exception
     */
    public static function init(Registry $registry, Closure $closure): static
    {
        $instance = new static();

        //configure and install framework
        static::makeConfigure();
        static::makeInstall($registry);

        //Check framework requirements with validation class
        static::extensionRequiredCheck();
        static::thirdPartyRequiredCheck();
        static::opcacheStatusCheck();

        $closure($instance);

        //Check framework file system with disk observer
        if (!file_exists($instance->listerFile()) || empty(file_get_contents($instance->listerFile()))) {
            $instance->checkFileSystem();
        }

        //static::execute();
        return $instance;
    }//end init()

    /**
     * @return string
     */
    public static function getAbsoluteInstalledURL(): string
    {
        return Registry::Browser()::urlOrigin($_SERVER).Storage::applicationWebDirectivePath();
    }//end getAbsoluteInstalledURL()


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
     * @throws Exceptions\RuntimeException
     */
    public static function makeConfigure(): void
    {
        // Preparing to create framework config file.
        if (!is_readable(static::configFile())) {
            Storage\FileSystem::makeDirectory(dirname(static::configFile()));
            Storage\FileSystem\Yaml::emitFile(static::configFile(), self::defaultConfiguration());
        }
    }


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function makeInstall(Registry $registry): void
    {
        // Preparing to check framework install file.
        if (is_readable(static::installFile()) === true) {
            // Framework install file found and start reading.
            if (defined('INSTALLED_HOST_NAME') === false) {
                define('INSTALLED_HOST_NAME', System\Memory::data('framework')->host->name);
            }
        } else {
            Storage\FileSystem::makeDirectory(dirname(static::installFile()));
            // Preparing to create framework install file.
            Storage\FileSystem\Yaml::emitFile(static::installFile(), [
                'name'        => 'Framework Installer',
                'version'     => static::VERSION,
                'debug'       => !(MPM\Classic::getProperty('release') === 'stable'),
                'date'        => System\Time::todayDateOnly(),
                'host'        => [
                    'url'  => $registry::Browser()::urlOrigin($_SERVER).Storage::applicationWebDirectivePath(),
                    'name' => System\Network::getValOfSrv('HTTP_HOST'),
                    'ip'   => System\Network::getValOfSrv('SERVER_ADDR'),
                ],
                'root'        => [
                    'dir' => [
                        'name' => self::rootPath(),
                        'size' => Storage::spaceTotal(self::rootPath()),
                        'free' => Storage::spaceFree(self::rootPath()),
                    ],
                ],
            ]);
        }//end if
    }//end install()


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public function execute(): void
    {
        if (file_exists(Storage::applicationDirectivePath()) === false
            || file_exists(MPM\Classic::configFile()) === false) {
            EmbeddedView::welcomeToFramework(static::FULL_NAME, [
                'caption' => static::FULL_NAME,
                'description' => static::description(),
                'warning' => static::installWarning(),
                'copyright' => Ui::copyRightText(System\Time::currentYearNumber(), static::COMPANY_NAME),
            ]);
        } else {
            MPM\Classic::load();
        }
        static::terminate();
    }//end execute()

    /**
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     */
    public static function terminate(): void
    {
        System\Log::terminate();
    }
}//end class
