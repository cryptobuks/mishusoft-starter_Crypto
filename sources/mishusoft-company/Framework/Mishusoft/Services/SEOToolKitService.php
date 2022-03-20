<?php

    declare(strict_types=1);

    namespace Mishusoft\Services;

    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Http\Runtime;
    use Mishusoft\System\Base;
    use Mishusoft\System\Memory;
    use Mishusoft\System\Ui;

    class SEOToolKitService extends Base
    {
        private function engines(): array
        {
            return [
                'Bing',
                'Yandex',
                'CC Search',
                'Swisscows',
                'DuckDuckGo',
                'StartPage',
                'Search Encrypt',
                'Google',
                'Gibiru',
                'OneSearch',
                'Wiki.com',
                'Boardreader',
                'giveWater',
                'Ekoru',
                'Ecosia',
                'Twitter',
                'SlideShare',
                'Internet Archive',
                'The Takeaway',
            ];
        }

        /**
         * @return string
         */
        private static function seoConfigFile(): string
        {
            return dFile(configs_data_file('SEOToolKitService', 'seo'));
        }

        /**
         * @return string
         */
        private static function adSenseConfigFile(): string
        {
            return dFile(configs_data_file('SEOToolKitService', 'ad-sense'));
        }

        /**
         * @return string
         */
        private static function searchEngineListFile(): string
        {
            return dFile(configs_data_file('SEOToolKitService', 'se-list'));
        }


        /**
         * @throws RuntimeException
         */
        public static function start(): void
        {
            // List of configuration files
            $fileList = [
                self::seoConfigFile(),
                self::adSenseConfigFile(),
                self::searchEngineListFile(),
            ];


            // Create directory if not exists
            if (file_exists(resolveDirectory(dirname(self::seoConfigFile())))) {
                foreach ($fileList as $file) {
                    if (!file_exists($file)) {
                        emit_msf_file($file, []);
                    } elseif (!is_array(parse_msf_file($file)) && unlink($file)) {
                        emit_msf_file($file, []);
                    }
                }
            }
        }


        /**
         * @param string $source
         */
        public static function addAuthor(string $source): void
        {
            Ui::element(
                Ui::getDocumentHeadElement(),
                'link',
                ['type' => 'text/plain', 'rel' => 'author', 'href' => $source]
            );
        }


        /**
         * @param array|string[] $view
         */
        public static function addDocumentIdentify(array $view = ['width' => 'device-width', 'initial-scale' => '1.0']): void
        {
            $initiatedText = '';
            foreach ($view as $key => $value) {
                $initiatedText .= sprintf('%1$s=%2$s, ', $key, $value);
            }
            $initiatedText = rtrim($initiatedText, ', ');
            Ui::elementList(
                Ui::getDocumentHeadElement(),
                [
                    'meta' => [
                        ['charset' => 'UTF-8'],
                        ['name' => 'viewport', 'content' => $initiatedText,],
                        ['http-equiv' => 'X-UA-Compatible', 'content' => 'ie=edge',],
                        ['http-equiv' => 'Content-Type', 'content' => 'text/html; charset=utf-8',],
                    ],
                ]
            );
        }//end addDocumentIdentify()

        public static function loadAdsAuthentication(): void
        {
            $configs    = parse_msf_file(self::adSenseConfigFile());
            $attributes = [];

            if (count($configs) > 0) {
                foreach ($configs as $config) {
                    $attributes[] = ['name' => $config['name'], 'content' => $config['content'],];
                }

                if (count($attributes) > 0) {
                    Ui::elementList(Ui::getDocumentHeadElement(), ['meta' => $attributes,]);
                }
            }
        }//end loadAdsAuthentication()


        /**
         * we declare default meta tags for seo index
         *
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public static function addDefault(string $documentTitle): void
        {
            Ui::elementList(
                Ui::getDocumentHeadElement(),
                [
                    'meta' => [
                        ['name' => 'title', 'content' => $documentTitle,],
                        ['name' => 'keywords', 'content' => self::getKeywords($documentTitle),],
                        ['name' => 'company', 'content' => Memory::getOption('company.name'),],
                        ['name' => 'description', 'content' => self::getDescriptionDetails(),],
                    ],
                    'link' => [
                        ['rel' => 'canonical', 'href' => Runtime::currentUrl(),],
                        ['rel' => 'preconnect', 'href' => Runtime::hostUrl(),],
                        ['rel' => 'dns-prefetch', 'href' => Runtime::hostUrl(),],
                    ],
                ]
            );
        }//end default()


        /**
         * we declare robots meta tags for robots
         */
        public static function addRobotsMeta(): void
        {
            Ui::elementList(
                Ui::getDocumentHeadElement(),
                [
                    'meta' => [
                        ['name' => 'robots', 'content' => 'index, follow',],
                        ['name' => 'robots', 'content' => 'max-image-preview:standard',],
                        ['name' => 'robots', 'content' => 'max-video-preview:-1',],
                    ],
                ]
            );
        }//end default()

        /**
         * @param array|string[] $sites
         * @param array|string[] $items
         *
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        public static function addSocialCard(array $sites = ['og'], array $items = ['image' => '/favicon.ico']): void
        {
            foreach ($sites as $site) {
                if ($site === 'google') {
                    // <!-- Schema.org markup for Google+ -->
                    // <meta itemprop="name" content="The Name or Title Here">
                    // <meta itemprop="description" content="This is the page description">
                    // <meta itemprop="image" content="http://www.example.com/image.jpg">
                    Ui::elementList(
                        Ui::getDocumentHeadElement(),
                        [
                            'meta' => [
                                ['itemprop' => 'name', 'content' => array_value($items, 'title'),],
                                ['itemprop' => 'image', 'content' => array_value($items, 'image'),],
                                ['itemprop' => 'description', 'content' => self::getDescriptionDetails(),],
                            ],
                        ]
                    );
                }
                if ($site === 'og') {
                    //<!-- Open Graph data -->
                    //<meta property="og:title" content="Title Here" />
                    //<meta property="og:type" content="article" />
                    //<meta property="og:url" content="http://www.example.com/" />
                    //<meta property="og:image" content="http://example.com/image.jpg" />
                    //<meta property="og:description" content="Description Here" />
                    //<meta property="og:site_name" content="Site Name, i.e. Moz" />
                    //<meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
                    //<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
                    //<meta property="article:section" content="Article Section" />
                    //<meta property="article:tag" content="Article Tag" />
                    //<meta property="fb:admins" content="Facebook numberic ID" />
                    Ui::elementList(
                        Ui::getDocumentHeadElement(),
                        [
                            'meta' => [
                                ['property' => 'og:title', 'content' => array_value($items, 'title'),],
                                ['property' => 'og:type', 'content' => 'article',],
                                ['property' => 'og:url', 'content' => Runtime::hostUrl(),],
                                ['property' => 'og:image', 'content' => array_value($items, 'image'),],
                                ['property' => 'og:description', 'content' => self::getDescriptionDetails(),],
                                ['property' => 'og:site_name', 'content' => Memory::getOption('name'),],
                            ],
                        ]
                    );
                }
                if ($site === 'twitter') {
                    //<!-- Twitter Card data -->
                    //<meta name="twitter:card" content="summary_large_image">
                    //<meta name="twitter:site" content="@publisher_handle">
                    //<meta name="twitter:title" content="Page Title">
                    //<meta name="twitter:description" content="Page description less than 200 characters">
                    //<meta name="twitter:creator" content="@author_handle">
                    //<!-- Twitter summary card with large image must be at least 280x150px -->
                    //<meta name="twitter:image:src" content="http://www.example.com/image.jpg">
                    Ui::elementList(
                        Ui::getDocumentHeadElement(),
                        [
                            'meta' => [
                                ['name' => 'twitter:card', 'content' => array_value($items, 'image'),],
                                ['name' => 'twitter:site', 'content' => Runtime::hostUrl(),],
                                ['name' => 'twitter:title', 'content' => array_value($items, 'title'),],
                                ['name' => 'twitter:description', 'content' => self::getDescriptionDetails(),],
                                ['name' => 'twitter:creator', 'content' => Memory::getOption('author.name'),],
                                ['name' => 'twitter:image:src', 'content' => array_value($items, 'image'),],
                            ],
                        ]
                    );
                }
            }
        }


        /**
         * @param string $documentTitle
         *
         * @return string
         */
        private static function getKeywords(string $documentTitle): string
        {
            if ((array_key_exists('keywords', self::getAbout(Runtime::currentUrl())))) {
                return implode(',', array_value(self::getAbout(Runtime::currentUrl()), 'keywords'));
            }

            return $documentTitle;
        }


        /**
         * @return string
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         */
        private static function getDescriptionDetails(): string
        {
            if ((array_key_exists('description', self::getAbout(Runtime::currentUrl())))) {
                return array_value(self::getAbout(Runtime::currentUrl()), 'description');
            }

            return Memory::getOption('company.detailsDescription');
        }


        /**
         * Get property value of seo about current page or link
         *
         * @param string $url
         *
         * @return array
         */
        private static function getAbout(string $url): array
        {
            $result = [];
            //data = ['url' => ['des','keywords]]
            foreach (parse_msf_file(self::seoConfigFile()) as $info) {
                if (array_key_exists($url, $info) === true) {
                    $result = $info[$url];
                }
            }

            return $result;
        }


        /**
         * Destruct class
         */
        public function __destruct()
        {
        }
    }
