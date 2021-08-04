<?php

namespace Mishusoft;

use JsonException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Ui\Firewall;
use Mishusoft\Utility\ArrayCollection;
use Mishusoft\Utility\Inflect;

class Storage extends Base
{
    // declare version
    public const VERSION = '1.0.2';

    // make static call for directories path

    public static function rootPath():string
    {
        return parent::rootPath();
    }

    public static function frameworkPath():string
    {
        return sprintf(
            '%1$s%2$s%6$s%3$s%6$s%4$s%6$s%5$s%6$s',
            self::rootPath(),
            'Sources',
            'mishusoft-company',
            'framework',
            'Mishusoft',
            DS
        );
    }

    public static function applicationDirectivePath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::rootPath(),
            'app',
            DS
        );
    }

    public static function emaPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Ema',
            DS
        );
    }

    public static function applicationPackagesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Packages',
            DS
        );
    }

    public static function applicationViewsPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Views',
            DS
        );
    }

    public static function applicationThemesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Themes',
            DS
        );
    }

    public static function applicationWidgetsPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Widgets',
            DS
        );
    }

    public static function applicationWebDirectivePath():string
    {
        $rootFile = $_SERVER['PHP_SELF'];
        if (Storage\Media::getExtension($rootFile) === 'php') {
            $rootUri = dirname($_SERVER['PHP_SELF']);
        } else {
            $rootUri = '';
        }

        return $rootUri;
    }

    public static function storagesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            RUNTIME_ROOT_PATH,
            'storages',
            DS
        );
    }

    public static function appStoragesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'app',
            DS
        );
    }

    public static function assetsPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'assets',
            DS
        );
    }

    public static function localizationPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'localization',
            DS
        );
    }

    public static function mediaPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'media',
            DS
        );
    }

    public static function imagesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'images',
            DS
        );
    }

    public static function logosPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'logos',
            DS
        );
    }

    public static function uploadsPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'uploads',
            DS
        );
    }

    public static function usersPicturesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'users',
            DS
        );
    }

    public static function usersProfilePicturesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'profiles',
            DS
        );
    }

    public static function usersCoverPicturesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'covers',
            DS
        );
    }

    public static function usersBackgroundPicturesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'backgrounds',
            DS
        );
    }

    public static function databasesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'databases',
            DS
        );
    }


    public static function frameworkStoragesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'framework',
            DS
        );
    }

    public static function cachesStoragesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkStoragesPath(),
            'cache',
            DS
        );
    }

    public static function dataDriveStoragesPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkStoragesPath(),
            'data-drive',
            DS
        );
    }

    public static function frameworkSessionsPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkStoragesPath(),
            'sessions',
            DS
        );
    }

    public static function logsPath():string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'logs',
            DS
        );
    }

    /**
     * @param string $directory
     * @param int $flags
     * @return array|false
     */
    public static function explore(string $directory, int $flags = 0): bool|array
    {
        if ($directory[(strlen($directory) - 1)] !== '/') {
            $directory .= '/';
        }

        return glob($directory.'*', $flags);
    }//end explore()

    /**
     * @param string $directory
     * @param int $flags
     * @return array|false
     */
    public static function exploreRecursive(string $directory, int $flags = 0): bool|array
    {
        if ($directory[(strlen($directory) - 1)] !== '/') {
            $directory .= '/';
        }

        $result = glob($directory . '*', $flags);
        foreach ($result as $item) {
            if (is_file($item) === true) {
                $result[] = $item;
            }//end if

            if (is_dir($item) === true) {
                array_push($result, ...self::exploreRecursive($item, $flags));
            }//end if
        }

        return array_unique(array_values($result), SORT_ASC);
    }//end explore()


    /**
     *  Does not support flag GLOB_BRACE.
     *
     * @param string $directory
     * @param integer $flags
     * @return boolean|array
     */
    public static function globRecursive(string $directory, int $flags = 0): bool|array
    {
        if (str_ends_with($directory, DS) === false) {
            $directory .= DS;
        }
        $result = glob($directory . '*', $flags);
        foreach ($result as $item) {
            if (is_file($item) === true) {
                $result[] = $item;
            }//end if

            if (is_dir($item) === true) {
                array_push($result, ...self::globRecursive($item, $flags));
            }//end if
        }

        return array_unique(array_values($result), SORT_ASC);
    }//end globRecursive()


    /**
     *  Does not support flag GLOB_BRACE.
     *
     * @param string $directory
     * @param integer $flags
     * @return boolean|array
     */
    public static function glob(string $directory, int $flags = 0): bool|array
    {
        if (str_ends_with($directory, DS) === false) {
            $directory .= DS;
        }
        $result = glob($directory . '*', $flags);
        foreach ($result as $item) {
            if (is_file($item) === true) {
                $result[] = $item;
            }//end if
        }

        return array_unique(array_values($result), SORT_ASC);
    }//end globRecursive()

    public static function files(string $path):array
    {
        return self::glob($path, GLOB_MARK);
    }

    public static function allFiles(string $path):array
    {
        return self::globRecursive($path, GLOB_MARK);
    }


    /**
     * @param  string $filename
     * @return string
     */
    public static function extension(string $filename): string
    {
        return Storage\Media::getExtension($filename);
    }//end getExtension()


    /**
     * @return array
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function assignableWebFavicons():array
    {
        $faviconsList = [];
        $fileList = [];

        $list = self::files(self::logosPath());

        foreach ($list as $item) {
            if (count(Storage\Media::imageFileInformation($item)) > 0) {
                $fileList[$item] = Storage\Media::imageFileInformation($item);
            }
        }


        foreach ($fileList as $imageFile => $fileDetails) {
            if (str_starts_with(pathinfo($imageFile, PATHINFO_FILENAME), 'apple-icon') === true) {
                //<link rel="apple-touch-icon" sizes="57x57" href="{logoFolder}apple-icon-57x57.png">
                ///home/abir/Development/web-development/lastest.mishusoft.com/Storages/0/media/logos/apple-icon-152x152.png
                $faviconsList[] = [
                    'rel'  => 'apple-touch-icon',
                    'type'  => ArrayCollection::value($fileDetails, 'mime'),
                    'sizes'  => self::imageSizeBuilder($fileDetails),
                    'href' => self::toDataUri('media', 'logos'. DS.pathinfo($imageFile, PATHINFO_BASENAME)),
                ];
            }
            if (str_starts_with(pathinfo($imageFile, PATHINFO_FILENAME), 'android-icon') === true) {
                //<link rel="icon" type="image/png" sizes="192x192" href="{logoFolder}android-icon-192x192.png">
                ///home/abir/Development/web-development/lastest.mishusoft.com/Storages/0/media/logos/android-icon-192x192.png
                $faviconsList[] = [
                    'rel'  => 'icon',
                    'type'  => ArrayCollection::value($fileDetails, 'mime'),
                    'sizes'  => self::imageSizeBuilder($fileDetails),
                    'href' => self::toDataUri('media', 'logos'. DS.pathinfo($imageFile, PATHINFO_BASENAME)),
                ];
            }
            if (str_starts_with(pathinfo($imageFile, PATHINFO_FILENAME), 'favicon') === true) {
                //<link rel="icon" type="image/png" sizes="16x16" href="{logoFolder}favicon-16x16.png">
                ///home/abir/Development/web-development/lastest.mishusoft.com/Storages/0/media/logos/favicon-16x16.png

                //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{logoFolder}favicon.ico">
                ///home/abir/Development/web-development/lastest.mishusoft.com/Storages/0/media/logos/favicon.ico
                $faviconsList[] = [
                    'rel'  => 'icon',
                    'type'  => ArrayCollection::value($fileDetails, 'mime'),
                    'sizes'  => self::imageSizeBuilder($fileDetails),
                    'href' => self::toDataUri('media', 'logos'. DS.pathinfo($imageFile, PATHINFO_BASENAME)),
                ];
            }
            if (str_starts_with(pathinfo($imageFile, PATHINFO_FILENAME), 'mishusoft-logo-lite') === true) {
                //<link rel="icon" type="image/webp" sizes="16x16" href="{logoFolder}mishusoft-logo-lite.webp">
                ///home/abir/Development/web-development/lastest.mishusoft.com/Storages/0/media/logos/mishusoft-logo-lite.webp
                $faviconsList[] = [
                    'rel'  => 'icon',
                    'type'  => ArrayCollection::value($fileDetails, 'mime'),
                    'sizes'  => self::imageSizeBuilder($fileDetails),
                    'href' => self::toDataUri('media', 'logos'. DS.pathinfo($imageFile, PATHINFO_BASENAME)),
                ];
            }
        }


        return $faviconsList;
    }

    /**
     * @param array $fileDetails
     * @return string
     */
    private static function imageSizeBuilder(array $fileDetails):string
    {
        return implode('x', [ArrayCollection::value($fileDetails, 0),ArrayCollection::value($fileDetails, 1)]);
    }


    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function logoFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'media/logos/'
    ): string {
        return self::fullPathBuilder(self::logosPath(), false, $filename, $feature, $indicator);
    }//end getLogosMediaPath()

    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function userPhotoFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'media/users/'
    ): string {
        return self::fullPathBuilder(self::usersPicturesPath(), false, $filename, $feature, $indicator);
    }//end getMediaPathOfUsersPhotos()


    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function additionalJSResourceFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(
            MPM::TemplatesJavascriptResourcesRootLocal(),
            false,
            $filename,
            $feature,
            'additional/js/'
        );
    }//end getMediaPathOfTemplatesJavascriptResourcesRoot()


    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function uploadFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'media/uploads/'
    ): string {
        return self::fullPathBuilder(self::uploadsPath(), false, $filename, $feature, $indicator);
    }//end getMediaPathOfUploads()


    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function sharedFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'shared/json/'
    ): string {
        return self::fullPathBuilder(self::dataDriveStoragesPath(), false, $filename, $feature, $indicator);
    }//end getMediaPathOfUploads()


    /**
     * @param string $directive
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function toDataUri(string $directive, string $filename, string $feature = 'local'): string
    {
        if ($directive === 'assets') {
            if ($feature === 'remote') {
                if ((is_readable(self::assetsFullPath($filename))) === true) {
                    return self::assetsFullPath($filename, $feature);
                }
                return '';
            }
            return self::makeDataUri(self::assetsFullPath($filename));
        }
        if ($directive === 'media') {
            if ($feature === 'remote') {
                if ((is_readable(self::mediaFullPath($filename))) === true) {
                    return self::mediaFullPath($filename, $feature);
                }
                return '';
            }
            return self::makeDataUri(self::mediaFullPath($filename));
        }
        return '';
    }//end toDataUri()

    /**
     * @param string $path
     * @return string
     */
    private static function makeDataUri(string $path):string
    {
        return 'data:'.Storage\Media::mimeContent($path).';base64,'.base64_encode(file_get_contents($path));
    }


    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function assetsFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(self::assetsPath(), self::webResourcesPath(), $filename, $feature, false);
    }//end getAssetsPath()


    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function mediaFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(self::mediaPath(), false, $filename, $feature, 'media/');
    }//end getMediaPath()

    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     */
    public static function storageFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(self::appStoragesPath(), self::webResourcesPath(), $filename, $feature, false);
    }//end getStoragePath()

    /**
     * @param string $pathname
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function webResourcesPath(string $pathname = 'assets/'): string
    {
        if (str_starts_with($pathname, '/')) {
            return System::getInstalledURL() . $pathname;
        }
        return System::getInstalledURL(). DS . $pathname;
    }//end getWebResourcesPath()


    private static function localize(string $filename):string
    {
        return str_replace('/', DS, $filename);
    }

    /**
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws Exceptions\RuntimeException
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws JsonException
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\HttpException\HttpResponseException
     * @throws NotFoundException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\JsonException
     */
    private static function fullPathBuilder(
        string $localDrive,
        string|bool $remoteDrive,
        string $filename,
        string $feature,
        string|bool $pathIndicator
    ):string {

        if (str_ends_with($localDrive, DS) === false) {
            $localDrive .= DS;
        }

        if (is_bool($remoteDrive) === true) {
            $remoteDrive = BASE_URL;
        }

        if (str_ends_with($remoteDrive, '/') === false) {
            $remoteDrive .= '/';
        }

        if (is_bool($pathIndicator) === true) {
            $pathIndicator = '';
        }

        // /filename.ext
        // \filename.ext
        if (str_starts_with($filename, '/') === true||str_starts_with($filename, '\\') === true) {
            $filename = ltrim($filename, $filename[0]);
        }


        $fileLocale = $localDrive.$filename;

        if (file_exists($fileLocale) === true) {
            if (Inflect::lower($feature) === 'local') {
                return self::localize($fileLocale);
            }

            if (Inflect::lower($feature) === 'remote') {
                return $remoteDrive.$pathIndicator.$filename;
            }
        } else {
            $message = 'Your requested file not found or deleted!!';

            if (Inflect::lower($feature) === 'remote') {
                Firewall::runtimeFailure(
                    'Not Found',
                    [
                    'debug' => [
                        'file'        => Http::browser()->getURLPath(),
                        'location'    => self::localize($fileLocale),
                        'description' => $message,
                    ],
                    'error' => ['description' => $message],
                    ]
                );
            } else {
                throw new NotFoundException(sprintf('%s is not exists', self::localize($fileLocale)));
            }
        }//end if

        return '';
    }

    public function __destruct()
    {
    }//end __destruct()
}//end class
