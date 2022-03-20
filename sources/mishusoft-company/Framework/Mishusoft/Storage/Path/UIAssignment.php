<?php

    namespace Mishusoft\Storage\Path;

    use Mishusoft\Storage\FileSystem;
    use Mishusoft\Storage\Media;

    use function array_value;
    use function get_file_ext;
    use function get_image_size;
    use function startsWith;

    use const DS;

    trait UIAssignment
    {

        /**
         * @param string $root
         * @param bool   $pwa
         *
         * @return array
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function assignableWebFavicons(string $root = "media", bool $pwa = false): array
        {
            $faviconsList = [];
            $fileList     = [];

            $list = self::files(self::logosDefaultPath());

            foreach ($list as $item) {
                if (Media::imageFileInformation($item) !== []) {
                    $fileList[$item] = Media::imageFileInformation($item);
                }
            }

            foreach ($fileList as $imageFile => $fileDetails) {
                if (is_string($imageFile)) {
                    if ($pwa === true) {
                        if (preg_match("/\d+x\d+/i", FileSystem::fileBase($imageFile)) === 1) {
                            $extension = get_file_ext($imageFile);
                            if (in_array($extension, ALLOWED_FILE_FORMAT, true)) {
                                $faviconsList[] = [
                                    "type"  => array_value($fileDetails, "mime"),
                                    "sizes" => self::imageSizeBuilder($fileDetails),
                                    "src"   => self::toDataUri(
                                        $root ? : "framework",
                                        sprintf('logos%2$sdefault%2$s%1$s', FileSystem::fileBase($imageFile), DS),
                                        "remote"
                                    ),
                                ];
                            }
                        }
                    } else {
                        if (startsWith(FileSystem::fileBase($imageFile), "apple-icon") === true) {
                            //<link rel="apple-touch-icon" sizes="57x57" href="{logoFolder}apple-icon-57x57.png">
                            ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/apple-icon-152x152.png
                            $faviconsList[] = [
                                "rel"   => "apple-touch-icon",
                                "type"  => array_value($fileDetails, "mime"),
                                "sizes" => self::imageSizeBuilder($fileDetails),
                                "href"  => self::toDataUri(
                                    $root,
                                    sprintf('logos%2$sdefault%2$s%1$s', FileSystem::fileBase($imageFile), DS),
                                    "remote"
                                ),
                            ];
                        }
                        if (startsWith(FileSystem::fileName($imageFile), "android-icon") === true) {
                            //<link rel="icon" type="image/png" sizes="192x192" href="{logoFolder}android-icon-192x192.png">
                            ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/android-icon-192x192.png
                            $faviconsList[] = [
                                "rel"   => "icon",
                                "type"  => array_value($fileDetails, "mime"),
                                "sizes" => self::imageSizeBuilder($fileDetails),
                                "href"  => self::toDataUri(
                                    $root,
                                    sprintf('logos%2$sdefault%2$s%1$s', FileSystem::fileBase($imageFile), DS),
                                    "remote"
                                ),
                            ];

                            if (FileSystem::fileName($imageFile) === "android-icon-48x48.png") {
                                //<link rel="shortcut icon" sizes="48x48" href="{logoFolder}android-icon-48x48.png">
                                ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/default/android-icon-48x48.png.png
                                $faviconsList[] = [
                                    "rel"   => "shortcut icon",
                                    "sizes" => self::imageSizeBuilder($fileDetails),
                                    "href"  => self::toDataUri(
                                        $root,
                                        sprintf('logos%2$sdefault%2$s%1$s', FileSystem::fileBase($imageFile), DS),
                                        "remote"
                                    ),
                                ];
                            }
                        }
                        if (startsWith(FileSystem::fileName($imageFile), "favicon") === true) {
                            //<link rel="icon" type="image/png" sizes="16x16" href="{logoFolder}favicon-16x16.png">
                            ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/favicon-16x16.png

                            //<link rel="icon" type="image/vnd.microsoft.icon" sizes="16x16" href="{logoFolder}favicon.ico">
                            ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/favicon.ico
                            $faviconsList[] = [
                                "rel"   => "icon",
                                "type"  => array_value($fileDetails, "mime"),
                                "sizes" => self::imageSizeBuilder($fileDetails),
                                "href"  => self::toDataUri(
                                    $root,
                                    sprintf('logos%2$sdefault%2$s%1$s', FileSystem::fileBase($imageFile), DS),
                                    "remote"
                                ),
                            ];
                        }
                        if (startsWith(FileSystem::fileName($imageFile), "mishusoft-logo-lite") === true) {
                            //<link rel="icon" type="image/webp" sizes="16x16" href="{logoFolder}mishusoft-logo-lite.webp">
                            ///home/abir/Development/web-development/latest.mishusoft.com/Storages/0/media/logos/mishusoft-logo-lite.webp
                            $faviconsList[] = [
                                "rel"   => "icon",
                                "type"  => array_value($fileDetails, "mime"),
                                "sizes" => self::imageSizeBuilder($fileDetails),
                                "href"  => self::toDataUri(
                                    $root,
                                    sprintf('logos%2$sdefault%2$s%1$s', FileSystem::fileBase($imageFile), DS),
                                    "remote"
                                ),
                            ];
                        }
                    }
                }
            }

            return $faviconsList;
        }

        /**
         * @return array
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function assignableWebFonts(): array
        {
            $webfonts = [];
            $fileList = [];

            $list = self::files(self::webfontsAssetsPath());

            foreach ($list as $item) {
                if (in_array(get_file_ext($item), ["woff", "woff2"])) {
                    $fileList[$item] = get_image_size($item);
                }
            }

            foreach ($fileList as $file => $fileDetails) {
                //                [
                //                    'rel' => 'preload', 'as' => 'font', 'type' => 'font/woff2', 'crossorigin' => '',
                //                    'href' => Storage::assetsFullPath('webfonts/SourceSansPro.woff2', 'remote'),
                //                ],
                $webfonts[] = [
                    "rel"         => "preload",
                    "as"          => "font",
                    "crossorigin" => "",
                    "type"        => array_value($fileDetails, "mime"),
                    "href"        => self::toDataUri(
                        "assets",
                        "webfonts" . DS . FileSystem::fileBase($file)
                    //'remote'
                    ),
                ];
            }

            return $webfonts;
        }

    }
