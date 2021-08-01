<?php


namespace Mishusoft\Libraries;

use Mishusoft\Cryptography\OpenSSL\Encryption;
use Mishusoft\Storage;
use Mishusoft\System\Localization;
use Mishusoft\System\Memory;
use Mishusoft\Utility\ArrayCollection;

class Runtime
{

    private static function getLocaleOnly(): string
    {

        /*
         * catch requested url from browser
         */
        if (array_key_exists("url", $_GET) and !empty($_GET['url'])) {
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

            if (!empty($locale)) {
                /*
                 * verify extracted locale language from url
                 * url like [protocol://hostname/]
                 * verified extracted locale language check from count supported locale language of system,
                 * verify if it is more than 0
                 */
                if (count(array_change_key_case(Localization::SUPPORT)) > 0) {
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

                /*
                 * if locale language exists but it is not exists in supported locale languages,
                 * then locale set to empty
                 */
                return "";
            }

            /*
             * if locale language not exists,
             * then locale set to empty
             */
            return "";
        }

        /*
         * if url is not exists
         */
        return "";
    }

    /**
     * @param string $link
     * @return string
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function link(string $link): string
    {
        $link = trim($link);

        if (strtolower($link) === "default_home") {
            $Url = self::getLocaleOnly() . "/";
        } else {
            $Url = self::getLocaleOnly() . "/$link";
        }

        return (Memory::Data("framework")->host->url . $Url);
    }

    /**
     * @param string $url
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function redirect(string $url = ""): void
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
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function update(array $array, string $message): array
    {
        return array_merge(
            ArrayCollection::cleanArray($array, ["error", "success", "notify"]),
            [
                "next" => ArrayCollection::value($array, "url"),
                "notify" => Encryption::dynamic($message),
            ]
        );
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
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public static function actualUrl(string $message = "You need must log in to continue."): string
    {
        $url = "";
        if (count(ArrayCollection::cleanArray(self::update($_GET, $message), ["url"])) > 0) {
            foreach (ArrayCollection::cleanArray(self::update($_GET, $message), ["url"]) as $key => $value) {
                if (array_key_last(ArrayCollection::cleanArray(self::update($_GET, $message), ["url"])) === $key) {
                    $url .= "$key=$value";
                } else {
                    $url .= "$key=$value&";
                }
            }
        }
        return $url;
    }
}
