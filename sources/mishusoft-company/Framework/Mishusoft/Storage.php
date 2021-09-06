<?php

namespace Mishusoft;

use JsonException;
use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Utility\ArrayCollection as Arr;
use Mishusoft\Utility\Inflect;

class Storage extends Base
{
    // declare version
    public const VERSION = '1.0.2';

    // make static call for directories path

    /**
     * @return string
     */
    public static function rootPath(): string
    {
        return parent::rootPath();
    }

    /**
     * @return string
     */
    public static function frameworkPath(): string
    {
        if (defined('FRAMEWORK_PATH')) {
            return FRAMEWORK_PATH;
        }

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

    /**
     * @return string
     */
    public static function applicationDirectivePath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::rootPath(),
            'app',
            DS
        );
    }

    /**
     * @return string
     */
    public static function qualifiedAPIRoutesDirectory(): string
    {
        return self::applicationDirectivePath() . 'QualifiedAPIRoutes' . DS;
    }


    /**
     * @return string
     */
    public static function emaPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationPackagesPath(),
            'Ema',
            DS
        );
    }

    /**
     * @return string
     */
    public static function applicationPackagesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Packages',
            DS
        );
    }

    /**
     * @return string
     */
    public static function applicationViewsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Views',
            DS
        );
    }

    /**
     * @return string
     */
    public static function applicationThemesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Themes',
            DS
        );
    }

    /**
     * @return string
     */
    public static function applicationWidgetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::applicationDirectivePath(),
            'Widgets',
            DS
        );
    }

    /**
     * @return string
     */
    public static function applicationWebDirectivePath(): string
    {
        $rootFile = $_SERVER['PHP_SELF'];
        if (Storage\Media::getExtension($rootFile) === 'php') {
            $rootUri = dirname($_SERVER['PHP_SELF']);
        } else {
            $rootUri = '';
        }

        return $rootUri;
    }

    /**
     * @return string
     */
    public static function storagesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            RUNTIME_ROOT_PATH,
            'storages',
            DS
        );
    }

    /**
     * @return string
     */
    public static function appStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'app',
            DS
        );
    }

    /**
     * @return string
     */
    public static function assetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'assets',
            DS
        );
    }

    /**
     * @return string
     */
    public static function cssAssetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::assetsPath(),
            'css',
            DS
        );
    }

    /**
     * @return string
     */
    public static function jsAssetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::assetsPath(),
            'js',
            DS
        );
    }

    /**
     * @return string
     */
    public static function webfontsAssetsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::assetsPath(),
            'webfonts',
            DS
        );
    }

    /**
     * @return string
     */
    public static function localizationPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'localization',
            DS
        );
    }

    /**
     * @return string
     */
    public static function mediaPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::appStoragesPath(),
            'media',
            DS
        );
    }

    /**
     * @return string
     */
    public static function imagesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'images',
            DS
        );
    }

    /**
     * @param bool $isRemote
     * @return string
     */
    public static function logosPath(bool $isRemote = false): string
    {
        if ($isRemote) {
            return sprintf(
                '%1$s%2$s',
                BASE_URL,
                'media/logos/'
            );
        }
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'logos',
            DS
        );
    }

    /**
     * @param bool $isRemote
     * @return string
     */
    public static function logosDefaultPath(bool $isRemote = false): string
    {
        return sprintf(
            '%1$s%2$s',
            self::logosPath($isRemote),
            'default/'
        );
    }

    /**
     * @return string
     */
    public static function uploadsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'uploads',
            DS
        );
    }

    /**
     * @return string
     */
    public static function usersPicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::mediaPath(),
            'users',
            DS
        );
    }

    /**
     * @return string
     */
    public static function usersProfilePicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'profiles',
            DS
        );
    }

    /**
     * @return string
     */
    public static function usersCoverPicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'covers',
            DS
        );
    }

    /**
     * @return string
     */
    public static function usersBackgroundPicturesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::usersPicturesPath(),
            'backgrounds',
            DS
        );
    }

    /**
     * @return string
     */
    public static function databasesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'databases',
            DS
        );
    }


    /**
     * @return string
     */
    public static function frameworkStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'framework',
            DS
        );
    }

    /**
     * @return string
     */
    public static function cachesStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkStoragesPath(),
            'cache',
            DS
        );
    }

    /**
     * @return string
     */
    public static function dataDriveStoragesPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkStoragesPath(),
            'data-drive',
            DS
        );
    }

    /**
     * @return string
     */
    public static function frameworkSessionsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::frameworkStoragesPath(),
            'sessions',
            DS
        );
    }

    /**
     * @return string
     */
    public static function logsPath(): string
    {
        return sprintf(
            '%1$s%2$s%3$s',
            self::storagesPath(),
            'logs',
            DS
        );
    }

    /**
     * @param string $string
     * @return string
     */
    public static function hidePath(string $string): string
    {
        return str_replace(RUNTIME_ROOT_PATH, ROOT_IDENTITY, $string);
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

        return glob($directory . '*', $flags);
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
     *  Get all files form directory.
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

    public static function files(string $path): array
    {
        return self::glob($path, GLOB_MARK);
    }

    public static function allFiles(string $path): array
    {
        return self::globRecursive($path, GLOB_MARK);
    }


    /**
     * @param string $filename
     * @return string
     */
    public static function extension(string $filename): string
    {
        return Storage\Media::getExtension($filename);
    }//end getExtension()


    /**
     * @param bool $pwa
     * @return array
     * @throws NotFoundException
     */
    public static function assignableWebFavicons(bool $pwa = false): array
    {
        $faviconsList = [];
        $fileList = [];

        $list = self::files(self::logosDefaultPath());

        foreach ($list as $item) {
            if (count(Storage\Media::imageFileInformation($item)) > 0) {
                $fileList[$item] = Storage\Media::imageFileInformation($item);
            }
        }


        foreach ($fileList as $imageFile => $fileDetails) {
            if ($pwa === true) {
                if (preg_match('/\d+x\d+/i', Storage\FileSystem::fileBase($imageFile)) === 1) {
                    $faviconsList[] = [
                        'type' => Arr::value($fileDetails, 'mime'),
                        'sizes' => self::imageSizeBuilder($fileDetails),
                        'src' => self::toDataUri(
                            'media',
                            'logos' . DS . 'default' . DS . Storage\FileSystem::fileBase($imageFile),
                        //'remote'
                        ),
                    ];
                }
            } else {
                if (str_starts_with(Storage\FileSystem::fileBase($imageFile), 'apple-icon') === true) {
                    //<link rel="apple-touch-icon" sizes="57x57" href="{logoFolder}apple-icon-57x57.png">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/apple-icon-152x152.png
                    $faviconsList[] = [
                        'rel' => 'apple-touch-icon',
                        'type' => Arr::value($fileDetails, 'mime'),
                        'sizes' => self::imageSizeBuilder($fileDetails),
                        'href' => self::toDataUri(
                            'media',
                            'logos' . DS . 'default' . DS . Storage\FileSystem::fileBase($imageFile),
                        //'remote'
                        ),
                    ];
                }
                if (str_starts_with(Storage\FileSystem::fileName($imageFile), 'android-icon') === true) {
                    //<link rel="icon" type="image/png" sizes="192x192" href="{logoFolder}android-icon-192x192.png">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/android-icon-192x192.png
                    $faviconsList[] = [
                        'rel' => 'icon',
                        'type' => Arr::value($fileDetails, 'mime'),
                        'sizes' => self::imageSizeBuilder($fileDetails),
                        'href' => self::toDataUri(
                            'media',
                            'logos' . DS . 'default' . DS . Storage\FileSystem::fileBase($imageFile),
                        //'remote'
                        ),
                    ];


                    if (Storage\FileSystem::fileName($imageFile) === 'android-icon-48x48.png') {
                        //<link rel="shortcut icon" sizes="48x48" href="{logoFolder}android-icon-48x48.png">
                        ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/default/android-icon-48x48.png.png
                        $faviconsList[] = [
                            'rel' => 'shortcut icon',
                            'sizes' => self::imageSizeBuilder($fileDetails),
                            'href' => self::toDataUri(
                                'media',
                                'logos' . DS . 'default' . DS . Storage\FileSystem::fileBase($imageFile)
                            ),
                        ];
                    }
                }
                if (str_starts_with(Storage\FileSystem::fileName($imageFile), 'favicon') === true) {
                    //<link rel="icon" type="image/png" sizes="16x16" href="{logoFolder}favicon-16x16.png">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/favicon-16x16.png

                    //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{logoFolder}favicon.ico">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/favicon.ico
                    $faviconsList[] = [
                        'rel' => 'icon',
                        'type' => Arr::value($fileDetails, 'mime'),
                        'sizes' => self::imageSizeBuilder($fileDetails),
                        'href' => self::toDataUri(
                            'media',
                            'logos' . DS . 'default' . DS . Storage\FileSystem::fileBase($imageFile),
                        //'remote'
                        ),
                    ];
                }
                if (str_starts_with(Storage\FileSystem::fileName($imageFile), 'mishusoft-logo-lite') === true) {
                    //<link rel="icon" type="image/webp" sizes="16x16" href="{logoFolder}mishusoft-logo-lite.webp">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/mishusoft-logo-lite.webp
                    $faviconsList[] = [
                        'rel' => 'icon',
                        'type' => Arr::value($fileDetails, 'mime'),
                        'sizes' => self::imageSizeBuilder($fileDetails),
                        'href' => self::toDataUri(
                            'media',
                            'logos' . DS . 'default' . DS . Storage\FileSystem::fileBase($imageFile),
                        //'remote'
                        ),
                    ];
                }
            }
        }


        return $faviconsList;
    }

    /**
     * @return array
     * @throws NotFoundException
     */
    public static function assignableWebFonts(): array
    {
        $webfonts = [];
        $fileList = [];

        $list = self::files(self::webfontsAssetsPath());

        foreach ($list as $item) {
            if (in_array(self::extension($item), ['woff', 'woff2'])) {
                $fileList[$item] = Storage\Media::imageFileInformation($item);
            }
        }

        foreach ($fileList as $file => $fileDetails) {
//                [
//                    'rel' => 'preload', 'as' => 'font', 'type' => 'font/woff2', 'crossorigin' => '',
//                    'href' => Storage::assetsFullPath('webfonts/SourceSansPro.woff2', 'remote'),
//                ],
            $webfonts[] = [
                'rel' => 'preload', 'as' => 'font', 'crossorigin' => '',
                'type' => Arr::value($fileDetails, 'mime'),
                'href' => self::toDataUri(
                    'assets',
                    'webfonts' . DS . Storage\FileSystem::fileBase($file),
                //'remote'
                ),
            ];
        }

        return $webfonts;
    }

    /**
     * @param array $fileDetails
     * @return string
     */
    private static function imageSizeBuilder(array $fileDetails): string
    {
        return implode('x', [Arr::value($fileDetails, 0), Arr::value($fileDetails, 1)]);
    }


    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws NotFoundException
     */
    public static function logoFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'media/logos/default'
    ): string
    {
        return self::fullPathBuilder(self::logosDefaultPath(), false, $filename, $feature, $indicator);
    }//end getLogosMediaPath()

    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws NotFoundException
     */
    public static function userPhotoFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'media/users/'
    ): string
    {
        return self::fullPathBuilder(self::usersPicturesPath(), false, $filename, $feature, $indicator);
    }//end getMediaPathOfUsersPhotos()


    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     * @throws NotFoundException
     */
    public static function additionalJSResourceFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(
            MPM\Classic::TemplatesJsResourcesRootLocal(),
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
     * @throws NotFoundException
     */
    public static function uploadFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'media/uploads/'
    ): string
    {
        return self::fullPathBuilder(self::uploadsPath(), false, $filename, $feature, $indicator);
    }//end getMediaPathOfUploads()


    /**
     * @param string $filename
     * @param string $feature
     * @param string $indicator
     * @return string
     * @throws NotFoundException
     */
    public static function sharedFullPath(
        string $filename,
        string $feature = 'local',
        string $indicator = 'shared/json/'
    ): string
    {
        return self::fullPathBuilder(self::dataDriveStoragesPath(), false, $filename, $feature, $indicator);
    }//end getMediaPathOfUploads()


    /**
     * @param string $directive
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws NotFoundException
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
    public static function makeDataUri(string $path): string
    {
        return 'data:' . Storage\Media::mimeContent($path) . ';base64,' . base64_encode(file_get_contents($path));
    }


    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws NotFoundException
     */
    public static function assetsFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(self::assetsPath(), self::webResourcesPath(), $filename, $feature, false);
    }//end getAssetsPath()


    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws NotFoundException
     */
    public static function mediaFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(self::mediaPath(), false, $filename, $feature, 'media/');
    }//end getMediaPath()

    /**
     * @param string $filename
     * @param string $feature
     * @return string
     * @throws NotFoundException
     */
    public static function storageFullPath(string $filename, string $feature = 'local'): string
    {
        return self::fullPathBuilder(self::appStoragesPath(), self::webResourcesPath(), $filename, $feature, false);
    }//end getStoragePath()

    /**
     * @return string
     */
    public static function webResourcesPath(): string
    {
        $pathname = 'assets/';
        if (str_ends_with(BASE_URL, '/')) {
            return BASE_URL . $pathname;
        }
        return BASE_URL . DS . $pathname;
    }//end getWebResourcesPath()


    private static function localize(string $filename): string
    {
        return str_replace('/', DS, $filename);
    }

    /**
     * @param string $localDrive
     * @param string|bool $remoteDrive
     * @param string $filename
     * @param string $feature
     * @param string|bool $pathIndicator
     * @return string
     * @throws NotFoundException
     */
    private static function fullPathBuilder(
        string      $localDrive,
        string|bool $remoteDrive,
        string      $filename,
        string      $feature,
        string|bool $pathIndicator
    ): string
    {

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
        if (str_starts_with($filename, '/') === true || str_starts_with($filename, '\\') === true) {
            $filename = ltrim($filename, $filename[0]);
        }


        $fileLocale = $localDrive . $filename;

        if (file_exists($fileLocale) === true) {
            if (Inflect::lower($feature) === 'local') {
                return self::localize($fileLocale);
            }

            if (Inflect::lower($feature) === 'remote') {
                return $remoteDrive . $pathIndicator . $filename;
            }
        } else {
            throw new NotFoundException(sprintf('%s is not exists', self::localize($fileLocale)));
        }//end if

        return '';
    }

    public function __destruct()
    {
    }//end __destruct()
}//end class