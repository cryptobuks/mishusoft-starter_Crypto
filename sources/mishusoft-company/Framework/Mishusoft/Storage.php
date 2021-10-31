<?php

namespace Mishusoft;

use Mishusoft\Exceptions\RuntimeException\NotFoundException;
use Mishusoft\Utility\ArrayCollection as Arr;
use Mishusoft\Utility\Inflect;

class Storage extends Base
{
    // declare version
    public const VERSION = "1.0.2";

    public static function cliCommunicationDirectory(): string
    {
        return self::communicationDirectory() . "Cli" . DS;
    }

    public static function communicationDirectory(): string
    {
        return self::frameworkPath() . "Mishusoft" . DS . "Communication" . DS;
    }

    public static function frameworkPath(): string
    {
        return frameworkPath();
    }

    public static function communicationHttpCoreDirectory(): string
    {
        return self::communicationDirectory() . "Http" . DS;
    }

    public static function communicationHttpUserDirectory(): string
    {
        return self::applicationDirectivePath() . "HttpAPIRoutes" . DS;
    }

    public static function applicationDirectivePath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::rootPath(), "app", DS);
    }

    public static function emaPath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::applicationPackagesPath(), "Ema", DS);
    }

    public static function applicationPackagesPath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Packages", DS);
    }

    public static function applicationViewsPath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Views", DS);
    }

    public static function applicationThemesPath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Themes", DS);
    }

    public static function applicationWidgetsPath(): string
    {
        return sprintf('%1$s%2$s%3$s', self::applicationDirectivePath(), "Widgets", DS);
    }

    public static function spaceTotal(string $path)
    {
        return disk_total_space($path);
    }

    public static function spaceFree(string $path)
    {
        return disk_free_space($path);
    }

    public static function applicationWebDirectivePath(): string
    {
        $rootFile = $_SERVER["PHP_SELF"];
        $rootUri = Storage\Media::getExtension($rootFile) === "php" ? dirname($_SERVER["PHP_SELF"]) : "";

        return $rootUri;
    }

    /**
     * @return array|false
     */
    public static function explore(string $directory, int $flags = 0)
    {
        if ($directory[strlen($directory) - 1] !== "/") {
            $directory .= "/";
        }

        return glob($directory . "*", $flags);
    }

    /**
     * @return array|false
     */
    public static function exploreRecursive(string $directory, int $flags = 0)
    {
        if ($directory[strlen($directory) - 1] !== "/") {
            $directory .= "/";
        }

        $result = glob($directory . "*", $flags);
        foreach ($result as $item) {
            if (is_file($item)) {
                $result[] = $item;
            } //end if

            if (is_dir($item)) {
                array_push($result, ...self::exploreRecursive($item, $flags));
            } //end if
        }

        return array_unique(array_values($result), SORT_ASC);
    }

    public static function allFiles(string $path): array
    {
        return self::globRecursive($path, GLOB_MARK);
    }

    /**
     *  Get all files form directory.
     *  Does not support flag GLOB_BRACE.
     *
     * @return boolean|array
     */
    public static function globRecursive(string $directory, int $flags = 0)
    {
        if (!Inflect::endsWith($directory, DS)) {
            $directory .= DS;
        }
        $result = glob($directory . "*", $flags);
        foreach ($result as $item) {
            if (is_file($item)) {
                $result[] = $item;
            } //end if

            if (is_dir($item)) {
                array_push($result, ...self::globRecursive($item, $flags));
            } //end if
        }

        return array_unique(array_values($result), SORT_ASC);
    }

    /**
     * @throws NotFoundException
     */
    public static function assignableWebFavicons(string $root = "media", bool $pwa = false): array
    {
        $faviconsList = [];
        $fileList = [];

        $list = self::files(self::logosDefaultPath());

        foreach ($list as $item) {
            if (Storage\Media::imageFileInformation($item) !== []) {
                $fileList[$item] = Storage\Media::imageFileInformation($item);
            }
        }

        foreach ($fileList as $imageFile => $fileDetails) {
            if ($pwa) {
                if (preg_match("/\d+x\d+/i", Storage\FileSystem::fileBase($imageFile)) === 1) {
                    $extension = Storage\FileSystem::fileExt($imageFile);
                    if (in_array($extension, ["png", "svg", "webp"], true)) {
                        $faviconsList[] = [
                            "type" => Arr::value($fileDetails, "mime"),
                            "sizes" => self::imageSizeBuilder($fileDetails),
                            "src" => self::toDataUri($root ?: "framework", "logos" . DS . "default" . DS . Storage\FileSystem::fileBase($imageFile), "remote"),
                        ];
                    }
                }
            } else {
                if (Inflect::startsWith(Storage\FileSystem::fileBase($imageFile), "apple-icon")) {
                    //<link rel="apple-touch-icon" sizes="57x57" href="{logoFolder}apple-icon-57x57.png">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/apple-icon-152x152.png
                    $faviconsList[] = [
                        "rel" => "apple-touch-icon",
                        "type" => Arr::value($fileDetails, "mime"),
                        "sizes" => self::imageSizeBuilder($fileDetails),
                        "href" => self::toDataUri($root, "logos" . DS . "default" . DS . Storage\FileSystem::fileBase($imageFile), "remote"),
                    ];
                }
                if (Inflect::startsWith(Storage\FileSystem::fileName($imageFile), "android-icon")) {
                    //<link rel="icon" type="image/png" sizes="192x192" href="{logoFolder}android-icon-192x192.png">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/android-icon-192x192.png
                    $faviconsList[] = [
                        "rel" => "icon",
                        "type" => Arr::value($fileDetails, "mime"),
                        "sizes" => self::imageSizeBuilder($fileDetails),
                        "href" => self::toDataUri($root, "logos" . DS . "default" . DS . Storage\FileSystem::fileBase($imageFile), "remote"),
                    ];

                    if (Storage\FileSystem::fileName($imageFile) === "android-icon-48x48.png") {
                        //<link rel="shortcut icon" sizes="48x48" href="{logoFolder}android-icon-48x48.png">
                        ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/default/android-icon-48x48.png.png
                        $faviconsList[] = [
                            "rel" => "shortcut icon",
                            "sizes" => self::imageSizeBuilder($fileDetails),
                            "href" => self::toDataUri($root, "logos" . DS . "default" . DS . Storage\FileSystem::fileBase($imageFile), "remote"),
                        ];
                    }
                }
                if (Inflect::startsWith(Storage\FileSystem::fileName($imageFile), "favicon")) {
                    //<link rel="icon" type="image/png" sizes="16x16" href="{logoFolder}favicon-16x16.png">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/favicon-16x16.png

                    //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{logoFolder}favicon.ico">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/favicon.ico
                    $faviconsList[] = [
                        "rel" => "icon",
                        "type" => Arr::value($fileDetails, "mime"),
                        "sizes" => self::imageSizeBuilder($fileDetails),
                        "href" => self::toDataUri($root, "logos" . DS . "default" . DS . Storage\FileSystem::fileBase($imageFile), "remote"),
                    ];
                }
                if (Inflect::startsWith(Storage\FileSystem::fileName($imageFile), "mishusoft-logo-lite")) {
                    //<link rel="icon" type="image/webp" sizes="16x16" href="{logoFolder}mishusoft-logo-lite.webp">
                    ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/mishusoft-logo-lite.webp
                    $faviconsList[] = [
                        "rel" => "icon",
                        "type" => Arr::value($fileDetails, "mime"),
                        "sizes" => self::imageSizeBuilder($fileDetails),
                        "href" => self::toDataUri($root, "logos" . DS . "default" . DS . Storage\FileSystem::fileBase($imageFile), "remote"),
                    ];
                }
            }
        }

        return $faviconsList;
    }

    public static function files(string $path): array
    {
        return self::glob($path, GLOB_MARK);
    }

    /**
     *  Does not support flag GLOB_BRACE.
     *
     * @return boolean|array
     */
    public static function glob(string $directory, int $flags = 0)
    {
        if (!Inflect::endsWith($directory, DS)) {
            $directory .= DS;
        }
        $result = glob($directory . "*", $flags);
        foreach ($result as $item) {
            if (is_file($item)) {
                $result[] = $item;
            } //end if
        }

        return array_unique(array_values($result), SORT_ASC);
    }

    private static function imageSizeBuilder(array $fileDetails): string
    {
        return implode("x", [Arr::value($fileDetails, 0), Arr::value($fileDetails, 1)]);
    }

    /**
     * @throws NotFoundException
     */
    public static function toDataUri(string $directive, string $filename, string $feature = "local"): string
    {
        if ($directive === "assets") {
            if ($feature === "remote") {
                if (is_readable(self::assetsFullPath($filename))) {
                    return self::assetsFullPath($filename, $feature);
                }
                return "";
            }
            return self::makeDataUri(self::assetsFullPath($filename));
        }
        if ($directive === "media") {
            if ($feature === "remote") {
                if (is_readable(self::mediaFullPath($filename))) {
                    return self::mediaFullPath($filename, $feature);
                }
                return "";
            }
            return self::makeDataUri(self::mediaFullPath($filename));
        }
        if ($directive === "framework") {
            if ($feature === "remote") {
                if (is_readable(self::fViewsFullPath($filename))) {
                    return self::fViewsFullPath($filename, $feature);
                }
                return "";
            }
            return self::makeDataUri(self::fViewsFullPath($filename));
        }
        return "";
    }

    /**
     * Retrieve assets path in local or uri
     *
     * @param string $filename Filename of required resource
     * @param string $feature Purpose of uses
     *
     * @return string Return absolute path in local or uri
     * @throws NotFoundException
     */
    public static function assetsFullPath(string $filename, string $feature = "local"): string
    {
        return self::fullPathBuilder(self::assetsPath(), self::webResourcesPath(), $filename, $feature, false);
    }

    /**
     * @param string|bool $remoteDrive
     * @param string|bool $pathIndicator
     * @throws NotFoundException
     */
    public static function fullPathBuilder(string $localDrive, $remoteDrive, string $filename, string $feature, $pathIndicator): string
    {
        if (!Inflect::endsWith($localDrive, DS)) {
            $localDrive .= DS;
        }

        if (defined("BASE_URL")) {
            if (is_bool($remoteDrive)) {
                $remoteDrive = BASE_URL;
            }
        } else {
            $remoteDrive = false;
        }

        if (!is_bool($remoteDrive) && !Inflect::endsWith($remoteDrive, "/")) {
            $remoteDrive .= "/";
        }

        if (is_bool($pathIndicator)) {
            $pathIndicator = "";
        }

        // /filename.ext
        // \filename.ext
        if (Inflect::startsWith($filename, "/") || Inflect::startsWith($filename, "\\")) {
            $filename = ltrim($filename, $filename[0]);
        }

        $fileLocale = $localDrive . $filename;
        if (file_exists($fileLocale)) {
            if (Inflect::lower($feature) === "local") {
                return self::localize($fileLocale);
            }

            if (Inflect::lower($feature) === "remote") {
                $featuredUrl = sprintf('%1$s%2$s%3$s', $remoteDrive, $pathIndicator, $filename);
                //check current platform is windows, then remove directory separator from file name
                if (Inflect::contains($featuredUrl, "\\")) {
                    $featuredUrl = str_replace("\\", "/", $featuredUrl);
                }

                return $featuredUrl;
            }
        } else {
            throw new NotFoundException(sprintf("%s is not exists", self::localize($fileLocale)));
        } //end if

        return "";
    }

    private static function localize(string $filename): string
    {
        return str_replace("/", DS, $filename);
    } public static function webResourcesPath(bool $isFramework = false): string
    {
        $pathname = $isFramework ? "framework/" : "assets/";
        if (Inflect::endsWith(BASE_URL, "/")) {
            return BASE_URL . $pathname;
        }
        return BASE_URL . DS . $pathname;
    }

    public static function makeDataUri(string $path): string
    {
        return "data:" . Storage\Media::mimeContent($path) . ";base64," . base64_encode(file_get_contents($path));
    }

    /**
     * @throws NotFoundException
     */
    public static function mediaFullPath(string $filename, string $feature = "local"): string
    {
        return self::fullPathBuilder(self::mediaPath(), false, $filename, $feature, "media/");
    }

    /**
     * @throws NotFoundException
     */
    public static function fViewsFullPath(string $filename, string $feature = "local"): string
    {
        return self::fullPathBuilder(self::frameworkViewsPath(), false, $filename, $feature, "framework/");
    }

    /**
     * @throws NotFoundException
     */
    public static function assignableWebFonts(): array
    {
        $webfonts = [];
        $fileList = [];

        $list = self::files(self::webfontsAssetsPath());

        foreach ($list as $item) {
            if (in_array(self::extension($item), ["woff", "woff2"])) {
                $fileList[$item] = Storage\Media::imageFileInformation($item);
            }
        }

        foreach ($fileList as $file => $fileDetails) {
            //                [
            //                    'rel' => 'preload', 'as' => 'font', 'type' => 'font/woff2', 'crossorigin' => '',
            //                    'href' => Storage::assetsFullPath('webfonts/SourceSansPro.woff2', 'remote'),
            //                ],
            $webfonts[] = [
                "rel" => "preload",
                "as" => "font",
                "crossorigin" => "",
                "type" => Arr::value($fileDetails, "mime"),
                "href" => self::toDataUri(
                    "assets",
                    "webfonts" . DS . Storage\FileSystem::fileBase($file)
                    //'remote'
                ),
            ];
        }

        return $webfonts;
    }

    public static function extension(string $filename): string
    {
        return Storage\Media::getExtension($filename);
    }

    /**
     * @throws NotFoundException
     */
    public static function logoFullPath(string $filename, string $feature = "local", string $indicator = "media/logos/default"): string
    {
        return self::fullPathBuilder(self::logosDefaultPath(), false, $filename, $feature, $indicator);
    }

    /**
     * @throws NotFoundException
     */
    public static function userPhotoFullPath(string $filename, string $feature = "local", string $indicator = "media/users/"): string
    {
        return self::fullPathBuilder(self::usersPicturesPath(), false, $filename, $feature, $indicator);
    } //end getStoragePath()
    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws NotFoundException
     */
    public static function additionalJSResourceFullPath(string $filename, string $feature = "local"): string
    {
        return self::fullPathBuilder(MPM\Classic::TemplatesJsResourcesRootLocal(), false, $filename, $feature, "additional/js/");
    }

    /**
     * @throws NotFoundException
     */
    public static function uploadFullPath(string $filename, string $feature = "local", string $indicator = "media/uploads/"): string
    {
        return self::fullPathBuilder(self::uploadsPath(), false, $filename, $feature, $indicator);
    }

    /**
     * @throws NotFoundException
     */
    public static function sharedFullPath(string $filename, string $feature = "local", string $indicator = "shared/json/"): string
    {
        return self::fullPathBuilder(self::dataDriveStoragesPath(), false, $filename, $feature, $indicator);
    }

    /**
     * @throws NotFoundException
     */
    public static function storageFullPath(string $filename, string $feature = "local", bool $isFramework = false): string
    {
        if ($isFramework) {
            return self::fullPathBuilder(self::storagesPath(), self::webResourcesPath(true), $filename, $feature, false);
        }
        return self::fullPathBuilder(self::appStoragesPath(), self::webResourcesPath(), $filename, $feature, false);
    }
}
