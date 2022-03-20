<?php

    namespace Mishusoft\Storage\Path;

    use Mishusoft\Exceptions\RuntimeException\NotFoundException;
    use Mishusoft\MPM;
    use Mishusoft\System;

    use function addSlash;
    use function endsWith;
    use function fixSlash;
    use function last_word;
    use function startsWith;
    use function webDocumentRoot;

    use const DEFAULT_MEMORY_SCOPE;
    use const DS;
    use const FRAMEWORK_INSTALLED;

    trait Assignment
    {

        /**
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function installedPath(): string
        {
            return System\Memory::getOption('host.url', 'framework');
        }


        /**
         * @param bool $isFramework
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         */
        public static function webResourcesPath(bool $isFramework = false): string
        {
            // add main root url
            $webRoot = webDocumentRoot();

            if (self::installedPath()) {
                $webRoot = self::installedPath();
            }

            // add slash to end if not exist
            $webRoot = addSlash(sprintf('%1$s%2$s', addSlash($webRoot), RESOURCE_WEB_PATH));

            // pp($webRoot);

            // set path
            $pathname = $isFramework ? "framework/" : "assets/";
            // pp($pathname);
            return $webRoot . $pathname;
        }


        /**
         * @param string $directive
         * @param string $filename
         * @param string $feature
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function toDataUri(string $directive, string $filename, string $feature = "local"): string
        {
            if ($feature === 'remote' && $GLOBALS[DEFAULT_MEMORY_SCOPE]['memory']['array'] === []) {
                $feature = 'local';
            }

            if ($directive === "assets") {
                if ($feature === "remote") {
                    if (is_readable(self::assetsFullPath($filename)) === true) {
                        return self::assetsFullPath($filename, $feature);
                    }
                    return "";
                }
                return self::makeDataUri(self::assetsFullPath($filename));
            }
            if ($directive === "media") {
                if ($feature === "remote") {
                    if (is_readable(self::mediaFullPath($filename)) === true) {
                        return self::mediaFullPath($filename, $feature);
                    }
                    return "";
                }
                return self::makeDataUri(self::mediaFullPath($filename));
            }
            if ($directive === "framework") {
                if ($feature === "remote") {
                    if (is_readable(self::fViewsFullPath($filename)) === true) {
                        return self::fViewsFullPath($filename, $feature);
                    }
                    return "";
                }
                return self::makeDataUri(self::fViewsFullPath($filename));
            }
            return "";
        }


        /**
         * @param string      $localDrive
         * @param string|bool $remoteDrive
         * @param string      $filename
         * @param string      $feature
         * @param string|bool $pathIndicator
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function fullPathBuilder(string $localDrive, string|bool $remoteDrive, string $filename, string $feature, string|bool $pathIndicator): string
        {
            // pp(func_get_args());
            if (!endsWith($localDrive, DS)) {
                $localDrive .= DS;
            }

            if (!empty(self::installedPath())) {
                if (is_bool($remoteDrive)) {
                    $remoteDrive = FRAMEWORK_INSTALLED ? self::installedPath() : webDocumentRoot();
                }
            } else {
                $remoteDrive = is_bool($remoteDrive) ? false : $remoteDrive;
            }

            if (is_string($remoteDrive)) {
                $remoteDrive = addSlash($remoteDrive);
            }

            if (is_bool($pathIndicator)) {
                $pathIndicator = "";
            }

            // /filename.ext
            // \filename.ext
            if (startsWith($filename, "/") || startsWith($filename, "\\")) {
                $filename = ltrim($filename, $filename[0]);
            }

            if (startsWith($filename, 'resource/framework')) {
                $filename = str_replace('resource/framework', '', $filename);
            }

            $remoteDrive = fixSlash($remoteDrive);
            $fileLocale  = fixSlash($localDrive . $filename, 'dir');
            // pp($localDrive);
            // pp($filename);
            // pp($fileLocale);
            if (file_exists($fileLocale)) {
                if (strtolower($feature) === "local") {
                    return self::localize($fileLocale);
                }

                if (strtolower($feature) === "remote") {
                    // pp(last_word($remoteDrive, '/'));
                    // pp(rtrim($pathIndicator, '/'));
                    if (last_word($remoteDrive, '/') === rtrim($pathIndicator, '/')) {
                        $featuredUrl = sprintf('%1$s%2$s', $remoteDrive, $filename);
                    } else {
                        $featuredUrl = sprintf('%1$s%2$s%3$s', $remoteDrive, $pathIndicator, $filename);
                    }
                    // pp($featuredUrl);
                    //check current platform is windows, then remove directory separator from file name
                    return fixSlash($featuredUrl);
                }
            } else {
                throw new NotFoundException(sprintf("%s is not exists", self::localize($fileLocale)));
            } //end if

            return "";
        }


        /**
         * Retrieve assets path in local or uri
         *
         * @param string $filename Filename of required resource
         * @param string $feature  Purpose of uses
         *
         * @return string Return absolute path in local or uri
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function assetsFullPath(string $filename, string $feature = "local"): string
        {
            return self::fullPathBuilder(self::assetsPath(), self::webResourcesPath(), $filename, $feature, false);
        }

        /**
         * @param string $path
         *
         * @return string
         */
        public static function makeDataUri(string $path): string
        {
            $fileContent = file_get_contents($path);
            return sprintf(
                'data:%1$s;base64,%2$s',
                get_mime_content($path),
                base64_encode(is_string($fileContent) ? $fileContent : 'unknown')
            );
        }

        /**
         * @param string $filename
         * @param string $feature
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function mediaFullPath(string $filename, string $feature = "local"): string
        {
            return self::fullPathBuilder(self::mediaPath(), false, $filename, $feature, "media/");
        }

        /**
         * @param string $filename
         * @param string $feature
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function fViewsFullPath(string $filename, string $feature = "local"): string
        {
            return self::fullPathBuilder(path_storage_resource('framework'), self::webResourcesPath(true), $filename, $feature, "framework/");
        }


        /**
         * @param string $filename
         * @param string $feature
         * @param string $indicator
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function logoFullPath(string $filename, string $feature = "local", string $indicator = "media/logos/default"): string
        {
            return self::fullPathBuilder(self::logosDefaultPath(), false, $filename, $feature, $indicator);
        }

        /**
         * @param string $filename
         * @param string $feature
         * @param string $indicator
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function userPhotoFullPath(string $filename, string $feature = "local", string $indicator = "media/users/"): string
        {
            return self::fullPathBuilder(path_storage_authorized('users.profiles'), false, $filename, $feature, $indicator);
        } //end getStoragePath()

        /**
         * @param string $filename
         * @param string $feature
         *
         * @return string
         * @throws \Mishusoft\Exceptions\ErrorException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function additionalJSResourceFullPath(string $filename, string $feature = "local"): string
        {
            return self::fullPathBuilder(MPM\Classic::TemplatesJsResourcesRootLocal(), false, $filename, $feature, "additional/js/");
        }

        /**
         * @param string $filename
         * @param string $feature
         * @param string $indicator
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function uploadFullPath(string $filename, string $feature = "local", string $indicator = "media/uploads/"): string
        {
            return self::fullPathBuilder(self::uploadsPath(), false, $filename, $feature, $indicator);
        }

        /**
         * @param string $filename
         * @param string $feature
         * @param string $indicator
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function sharedFullPath(string $filename, string $feature = "local", string $indicator = "shared/json/"): string
        {
            return self::fullPathBuilder(path_storage_system('data.drive'), false, $filename, $feature, $indicator);
        }

        /**
         * @param string $filename
         * @param string $feature
         * @param bool   $isFramework
         *
         * @return string
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function storageFullPath(string $filename, string $feature = "local", bool $isFramework = false): string
        {
            if ($isFramework) {
                return self::fullPathBuilder(self::storagesPath(), self::webResourcesPath(true), $filename, $feature, false);
            }
            return self::fullPathBuilder(self::appStoragesPath(), self::webResourcesPath(), $filename, $feature, false);
        }
    }
