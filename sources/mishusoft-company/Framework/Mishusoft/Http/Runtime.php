<?php


namespace Mishusoft\Http;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Cryptography\OpenSSL\Encryption;
use Mishusoft\Exceptions\ErrorException;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Registry;
use Mishusoft\Storage;
use Mishusoft\System\Firewall;
use Mishusoft\System\Localization;
use Mishusoft\System\Memory;
use Mishusoft\Utility\ArrayCollection as Arr;

class Runtime
{

    private static string $hostUrl = '';
    private static string $currentUrl = '';
    private static string $urlPath = '';

    public static function currentUrl(): string
    {
        if (empty(self::$currentUrl)) {
            self::$currentUrl = Registry::Browser()::getVisitedPage();
        }

        return self::$currentUrl;
    }

    public static function urlPath(): string
    {
        if (empty(self::$urlPath)) {
            self::$urlPath = Registry::Browser()->getURLPath();
        }

        return self::$urlPath;
    }

    /**
     * @throws ErrorException
     * @throws RuntimeException\NotFoundException
     * @throws RuntimeException
     */
    public static function hostUrl(): string
    {
        if (empty(self::$hostUrl)) {
            self::$hostUrl = Memory::Data("framework")->host->url;
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
        if (array_key_exists("url", $_GET) && !empty($_GET['url'])) {
            /*
             * filter requested url
             */
            $url = explode('/', strtolower(filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL)));
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
            if (!empty($locale) && count(array_change_key_case(Localization::SUPPORT)) > 0) {
                /*
                 * if supported locale languages list is not set or locale not in these,
                 * then locale set to module, and it makes default
                 */
                if (!in_array($locale, array_change_key_case(Localization::SUPPORT), true)) {
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
     * @param string $link
     * @return string
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function link(string $link): string
    {
        $link = trim($link);
        $webRootUrl = self::hostUrl();

        if (str_ends_with($webRootUrl, '/') === false) {
            $webRootUrl .= '/';
        }

        if (strtolower($link) === "default_home") {
            $Url = self::getLocaleOnly();
        } else {
            $Url = self::getLocaleOnly() . $link;
        }

        return ($webRootUrl . $Url);
    }

    /**
     * @param string $url
     * @throws ErrorException
     * @throws RuntimeException
     * @throws RuntimeException\NotFoundException
     */
    public static function redirect(string $url = ''): void
    {
        header('location:' . self::link($url));
        exit(0);
    }

    /**
     * @param string $url
     * @return string
     */
    public static function getNextURL(string $url): string
    {
        if (Storage::applicationWebDirectivePath() !== '/') {
            return ltrim(
                str_replace(
                    '_',
                    DS,
                    str_replace(
                        str_replace(DS, '_', Storage::applicationWebDirectivePath()),
                        '',
                        str_replace(DS, '_', $url)
                    )
                ),
                '/'
            );
        }

        return ltrim($url, '/');
    }


    /**
     * @param array $array
     * @param string $message
     * @return array
     * @throws RuntimeException
     */
    public static function update(array $array, string $message): array
    {
        return array_merge(Arr::cleanArray($array, ["error", "success", "notify"]), [
            "next" => Arr::value($array, "url"),
            "notify" => Encryption::dynamic($message),
        ]);
    }

    /**
     * @param array $array
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
     * @return string
     * @throws RuntimeException
     */
    public static function actualUrl(string $message = "You need must log in to continue."): string
    {
        $url = "";
        if (count(Arr::cleanArray(self::update($_GET, $message), ["url"])) > 0) {
            foreach (Arr::cleanArray(self::update($_GET, $message), ["url"]) as $key => $value) {
                if (array_key_last(Arr::cleanArray(self::update($_GET, $message), ["url"])) === $key) {
                    $url .= sprintf("%s=%s", $key, $value);
                } else {
                    $url .= sprintf("%s=%s&", $key, $value);
                }
            }
        }
        return $url;
    }

    /**
     * @throws InvalidDatabaseException
     * @throws RuntimeException
     * @throws AddressNotFoundException
     * @throws ErrorException
     * @throws InvalidArgumentException
     * @throws HttpResponseException
     * @throws PermissionRequiredException
     */
    public static function abort(int $status, string|array ...$details): void
    {
        $message = [];
        $messageDetails = [];
        //string $file, string $location, string $description
        if (count($details) > 0) {
            if (count($details) >! 4) {
                foreach ($details as $detail) {
                    $dArray = explode('@', $detail);
                    if (count($dArray) > 2) {
                        $message[$dArray[0]][$dArray[1]] = $dArray[2];
                    } else {
                        $message[$dArray[0]] = $dArray[1];
                    }
                }
            } else {
                throw new RuntimeException(__METHOD__ . '(): more than 4 parameter parsed');
            }
        }

        if (array_key_exists('caption', $message['debug'])) {
            $messageDetails['debug']['caption'] = $message['debug']['caption'];
            $messageDetails['debug']['description'] = $message['debug']['description'];
            if (!is_array($message['debug']['stack'])) {
                //Debug::preOutput($message['debug']['stack']);
                $messageDetails['debug']['stack'] = explode('$$', $message['debug']['stack']);
            }
        } else {
            $messageDetails = [
                'debug' => [
                    'file' => $message['debug']['file'] ?: 'Unknown file',
                    'location' => $message['debug']['location'] ?: 'Unknown location',
                    'description' => $message['debug']['description'] ?: 'Your requested url not found',
                ],
                'error' => ['description' => $message['error']['description'] ?: 'Your requested url not found!!'],
            ];
        }

        Firewall::runtimeFailure($status, $messageDetails);
    }
}
