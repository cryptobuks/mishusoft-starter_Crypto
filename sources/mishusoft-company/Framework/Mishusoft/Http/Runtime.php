<?php

    namespace Mishusoft\Http;

    use Mishusoft\Cryptography\OpenSSL\Encryption;
    use Mishusoft\Exceptions\ErrorException;
    use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\System\Firewall;
    use Mishusoft\System\Localization;
    use Mishusoft\System\Memory;

    class Runtime
    {
        private static string $hostUrl    = "";
        private static string $currentUrl = "";
        private static string $urlPath    = "";

        public static function currentUrl(): string
        {
            if (empty(self::$currentUrl)) {
                self::$currentUrl = get_visited_current_page();
            }

            return self::$currentUrl;
        }

        public static function urlPath(): string
        {
            if (empty(self::$urlPath)) {
                self::$urlPath = get_http_request_uri();
            }

            return self::$urlPath;
        }

        /**
         * @param string $url
         *
         * @throws ErrorException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function redirect(string $url = ""): void
        {
            header("location:" . self::link($url));
            exit(0);
        }

        /**
         * @param string $link
         *
         * @return string
         * @throws InvalidArgumentException
         * @throws RuntimeException
         * @throws RuntimeException\NotFoundException
         */
        public static function link(string $link): string
        {
            $link       = trim($link);
            $webRootUrl = self::hostUrl();

            if (endsWith($webRootUrl, "/") === false) {
                $webRootUrl .= "/";
            }

            if (strtolower($link) === "default_home") {
                $Url = self::getLocaleOnly();
            } else {
                $Url = self::getLocaleOnly() . $link;
            }

            return $webRootUrl . $Url;
        }

        /**
         * @throws RuntimeException\NotFoundException
         * @throws RuntimeException
         * @throws InvalidArgumentException
         */
        public static function hostUrl(): string
        {
            if (empty(self::$hostUrl)) {
                $installedWebHostRoot = Memory::getOption('host.url', 'framework');
                if (empty($installedWebHostRoot)) {
                    self::$hostUrl = webDocumentRoot();
                } else {
                    self::$hostUrl = $installedWebHostRoot;
                }
            }

            return self::$hostUrl;
        }

        /**
         * @return string
         */
        private static function getLocaleOnly(): string
        {
            /*
             * catch requested url from browser
             */
            if (array_key_exists("url", $_GET) && !empty($_GET["url"])) {
                /*
                 * filter requested url
                 */
                $url = explode(
                    "/",
                    strtolower(filter_input(INPUT_GET, "url", FILTER_SANITIZE_URL))
                );
                $url = array_filter($url);

                /*
                 * extract and identify language from url
                 * At first we collect locale from url
                 */
                $locale = array_shift($url);

                /*
                 * verify extracted locale language from url
                 * url like [protocol://hostname/]
                 * verified extracted locale language check from count supported locale language of system,
                 * verify if it is more than 0
                 */
                if (
                    !empty($locale) &&
                    count(array_change_key_case(Localization::SUPPORT)) > 0
                ) {
                    /*
                     * if supported locale languages list is not set or locale not in these,
                     * then locale set to module, and it makes default
                     */
                    if (
                        !in_array(
                            $locale,
                            array_change_key_case(Localization::SUPPORT),
                            true
                        )
                    ) {
                        return "";
                    }

                    /*
                     * if locale language exists
                     */
                    return $locale;
                }
            }

            /*
             * if url is not exists
             */
            return "";
        }

        /**
         * @param string $url
         *
         * @return string
         */
        public static function getNextURL(string $url): string
        {
            if (webDocumentRoot() !== "/") {
                return ltrim(
                    str_replace(
                        "_",
                        DS,
                        str_replace(
                            str_replace(
                                DS,
                                "_",
                                webDocumentRoot()
                            ),
                            "",
                            str_replace(DS, "_", $url)
                        )
                    ),
                    "/"
                );
            }

            return ltrim($url, "/");
        }

        /**
         * @param array $array
         *
         * @return array
         */
        public static function cleanArray(array $array): array
        {
            if (count($array) > 0) {
                $excludes = ["url"];

                foreach ($excludes as $exclude) {
                    if (array_key_exists($exclude, $array)) {
                        unset($array[$exclude]);
                    }
                }
            }
            return $array;
        }

        /**
         * @param string $message
         *
         * @return string
         * @throws RuntimeException
         */
        public static function actualUrl(
            string $message = "You need must log in to continue."
        ): string {
            $url = "";
            if (
                count(array_clean(self::update($_GET, $message), ["url"])) > 0
            ) {
                foreach (
                    array_clean(self::update($_GET, $message), ["url"])
                    as $key => $value
                ) {
                    if (
                        array_key_last(
                            array_clean(self::update($_GET, $message), ["url"])
                        ) === $key
                    ) {
                        $url .= sprintf("%s=%s", $key, $value);
                    } else {
                        $url .= sprintf("%s=%s&", $key, $value);
                    }
                }
            }
            return $url;
        }

        /**
         * @param array  $array
         * @param string $message
         *
         * @return array
         * @throws RuntimeException
         */
        public static function update(array $array, string $message): array
        {
            return array_merge(
                array_clean($array, ["error", "success", "notify"]),
                [
                    "next"   => array_value($array, "url"),
                    "notify" => Encryption::dynamic($message),
                ]
            );
        }

        /**
         * @param int          $status
         * @param string|array ...$details
         *
         * @throws \GeoIp2\Exception\AddressNotFoundException
         * @throws \MaxMind\Db\Reader\InvalidDatabaseException
         * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
         * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
         * @throws \Mishusoft\Exceptions\RuntimeException
         * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
         */
        public static function abort(int $status, string|array ...$details): void
        {
            $message        = [];
            $messageDetails = [];
            //string $file, string $location, string $description
            if ($details !== []) {
                if (count($details) > !4) {
                    foreach ($details as $detail) {
                        $dArray = explode("@", $detail);
                        if (count($dArray) > 2) {
                            $message[$dArray[0]][$dArray[1]] = $dArray[2];
                        } else {
                            $message[$dArray[0]] = $dArray[1];
                        }
                    }
                } else {
                    throw new RuntimeException(
                        __METHOD__ . "(): more than 4 parameter parsed"
                    );
                }
            }

            if (array_key_exists("caption", $message["debug"])) {
                $messageDetails["debug"]["caption"]     = $message["debug"]["caption"];
                $messageDetails["debug"]["description"] = $message["debug"]["description"];
                if (!is_array($message["debug"]["stack"])) {
                    $messageDetails["debug"]["stack"] = explode(
                        '$$',
                        $message["debug"]["stack"]
                    );
                }
            } else {
                $messageDetails = [
                    "debug" => [
                        "file"        => $message["debug"]["file"] ?? "Unknown file",
                        "location"    =>
                            $message["debug"]["location"] ?? "Unknown location",
                        "description" =>
                            $message["debug"]["description"] ??
                            "Your requested url not found",
                    ],
                    "error" => [
                        "description" =>
                            $message["error"]["description"] ??
                            "Your requested url not found!!",
                    ],
                ];
            }

            //pp(array_column(get_document_meta(), 'name'));

            //pp($status);
            //pp($messageDetails);

            //Ui\View::make();
            //exit();

            //RuntimeFailure::start($status, $messageDetails);

            Firewall::runtimeFailure($status, $messageDetails);
        }
    }
