<?php


namespace Mishusoft\Framework\Libraries;


use Mishusoft\Framework\Chipsets\Cryptography\OpenSSL\Encryption;
use Mishusoft\Framework\Chipsets\System\Localization;
use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Utility\_Array;

class Runtime
{

    private static function getLocaleOnly(): string
    {
        //$locale = _String::lower(Locale::getDefault());

        /*
         * catch requested url from browser
         * */
        if (array_key_exists("url", $_GET) and !empty($_GET['url'])) {
            /*
             * filter requested url
             * */
            $url = explode('/', strtolower(filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL)));
            $url = array_filter($url);

            /*
             * extract and identify language from url
             * At first we collect locale from url
             * */
            $locale = array_shift($url);

            if (!empty($locale)) {
                /*
                 * verify extracted locale language from url
                 * url like [protocol://hostname/]
                 * verified extracted locale language check from count supported locale language of system, verify if it more than 0
                 * */
                if (count(array_change_key_case(Localization::support)) > 0) {
                    /*
                     * if supported locale languages list is not set or locale not in these,
                     * then locale set to module and it make default
                     * */
                    if (!in_array($locale, array_change_key_case(Localization::support))) {
                        return "";
                    } else {
                        /*
                         * if locale language exists
                         * */
                        return $locale;
                    }
                } else {
                    /*
                     * if locale language exists but it is not exists in supported locale languages,
                     * then locale set to empty
                     * */
                    return "";
                }
            } else {
                /*
                 * if locale language not exists,
                 * then locale set to empty
                 * */
                return "";
            }
        } else {
            /*
             * if url is not exists
             * */
            return "";
        }
    }

    /**
     * @param string $link
     * @return string
     */
    public static function link(string $link): string
    {
        $link = trim($link);

        if (!empty(self::getLocaleOnly())) {
            if (strtolower($link) === "default_home") {
                $Url = self::getLocaleOnly() . "/";
            } else {
                $Url = self::getLocaleOnly() . "/$link";
            }
        } else {
            if (strtolower($link) === "default_home") {
                $Url = "";
            } else {
                $Url = "$link";
            }
        }

        return (Memory::Data("framework")->host->url . "$Url");


        /*if (!empty(self::getLocaleOnly())) {
            if (strtolower($link) === "default_home") {
                return (Memory::Data("framework")->host->url . self::getLocaleOnly() . "/");
            } else {
                return (Memory::Data("framework")->host->url . self::getLocaleOnly() . "/$link");
            }
        } else {
            if (strtolower($link) === "default_home") {
                return (Memory::Data("framework")->host->url);
            } else {
                return (Memory::Data("framework")->host->url . "$link");
            }
        }*/

    }

    /**
     * @param false $url
     */
    public static function redirect($url = "")
    {
        /*if (!empty(self::getLocaleOnly())) {
            if (!empty($url) || $url !== ' ') {
                $Url = self::getLocaleOnly() . "/$url";
            } else {
                $Url = self::getLocaleOnly() . "/";
            }
        } else {
            if (!empty($url) || $url !== ' ') {
                $Url = $url;
            } else {
                $Url = "";
            }
        }*/
        header('location:' . self::link($url));
        exit;
    }

    /**
     * @param string $url
     * @return string
     */
    public static function getNextURL(string $url): string
    {
        if (MS_SERVER_PATH !== DIRECTORY_SEPARATOR) {
            return ltrim(str_replace('_', DIRECTORY_SEPARATOR,
                str_replace(
                    str_replace(DIRECTORY_SEPARATOR, '_', MS_SERVER_PATH),
                    '', str_replace(DIRECTORY_SEPARATOR, '_', $url))),
                '/');
        } else {
            return ltrim($url, '/');
        }
    }


    /**
     * @param array $array
     * @param string $message
     * @return array
     */
    public static function update(array $array, string $message): array
    {
        return array_merge(
            _Array::cleanArray($array, array("error", "success", "notify")),
            array(
                "next" => _Array::value($array, "url"),
                "notify" => Encryption::dynamic($message)
            )
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
     */
    public static function actualUrl(string $message = "You need must log in to continue."): string
    {
        $url = "";
        if (count(_Array::cleanArray(self::update($_GET, $message), array("url"))) > 0) {
            foreach (_Array::cleanArray(self::update($_GET, $message), array("url")) as $key => $value) {
                if (array_key_last(_Array::cleanArray(self::update($_GET, $message), array("url"))) === $key) {
                    $url .= "$key=$value";
                } else {
                    $url .= "$key=$value&";
                }
            }
        }
        return $url;
    }

    public function do(...$message)
    {
        
    }


}