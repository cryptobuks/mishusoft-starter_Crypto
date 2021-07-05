<?php declare(strict_types=1);

/*
 * Browser (php language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/php/browser.php
 */

namespace Mishusoft\Framework\Chipsets\Http;

use ErrorException;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Utility\_Debug;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\DataObjects\BrowserDataObject;
use RuntimeException;

class Browser extends UAAnalyzer
{

    private string $requestMethod;
    private string $requestMode;
    private string $urlProtocol;
    private string $urlHostname;
    private string $urlPath;
    private string $acceptLanguage;
    private string $acceptEncoding;

    /**
     * Browser constructor.
     *
     * @throws JsonException|RuntimeException Throw exception when json process error occurred.
     * @throws ErrorException
     */
    public function __construct(
        private string $userAgentString = 'default'
    ) {
        parent::__construct($this->userAgentString);
        $this->requestMethod = $_SERVER['REQUEST_METHOD'];

        if (array_key_exists('HTTP-SEC-FETCH-MODE', $_SERVER) === true) {
            $this->requestMode = $_SERVER['HTTP-SEC-FETCH-MODE'];
        } else {
            $this->requestMode = 'negative';
        }

        if (array_key_exists('REQUEST_SCHEME', $_SERVER) === true) {
            $this->urlProtocol = $_SERVER['REQUEST_SCHEME'];
        } else {
            $this->urlProtocol = 'http';
        }

        if (array_key_exists('HTTP_HOST', $_SERVER) === true) {
            if (in_array($_SERVER['HTTP_HOST'], $this->allowedDomains, true) === true) {
                $domain = $_SERVER['HTTP_HOST'];
            } else {
                $domain = 'localhost';
            }

            $this->urlHostname = $domain;
        } else {
            $this->urlHostname = 'unknown host';
        }

        $this->urlPath = $_SERVER['REQUEST_URI'];

        if ($this->userAgentString !== 'default') {
            $this->userAgent = $this->userAgentString;
        } elseif (function_exists('apache_request_headers') === true) {
            if (array_key_exists('User-Agent', apache_request_headers()) === true) {
                $this->userAgent = apache_request_headers()['User-Agent'];
                if (array_key_exists('Accept-Language', apache_request_headers()) === true) {
                    $this->acceptLanguage = apache_request_headers()['Accept-Language'];
                }

                if (array_key_exists('Accept-Encoding', apache_request_headers()) === true) {
                    $this->acceptEncoding = apache_request_headers()['Accept-Encoding'];
                }

                $this->analyze();
            }
        } elseif (function_exists('getallheaders') === true) {
            if (array_key_exists('HTTP_USER_AGENT', getallheaders()) === true) {
                $this->userAgent = getallheaders()['HTTP_USER_AGENT'];
                if (array_key_exists('Accept-Language', getallheaders()) === true) {
                    $this->acceptLanguage = getallheaders()['Accept-Language'];
                }

                if (array_key_exists('Accept-Encoding', getallheaders()) === true) {
                    $this->acceptEncoding = getallheaders()['Accept-Encoding'];
                }
                $this->analyze();
            }
        } elseif (array_key_exists('HTTP_USER_AGENT', $_SERVER) === true) {
            $this->userAgent = $_SERVER['HTTP_USER_AGENT'];

            if (array_key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER) === true) {
                $this->acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
            }

            if (array_key_exists('HTTP_ACCEPT_ENCODING', $_SERVER) === true) {
                $this->acceptEncoding = $_SERVER['HTTP_ACCEPT_ENCODING'];
            }

            $this->analyze();
        } else {
            throw new RuntimeException('Unable to extract browser data.');
        }//end if
    }//end __construct()



    /**
     * Visited page title.
     *
     * @public
     * @return string
     */
    public static function visitedPageTitle(): string
    {
        // SET DEFAULT
        $title = 'No title found';
        // Web url
        $url = self::getVisitedPage();
        // OPEN THE REMOTE PAGE
        $file = fopen($url, 'rb') or trigger_error('url not found');
        // ITERATE OVER THE PAGE DATA
        while (!feof($file)) {
            $text = fread($file, 16384);
            if (preg_match('/<title>(.*?)<\/title>/is', $text, $found) === 1) {
                if (array_key_exists(1, $found) === true) {
                    $title = $found[1];
                } else {
                    $title = 'Not found';
                }

                break;
            }
        }

        return ltrim($title);
    }//end visitedPageTitle()


    /**
     * Retrieve visited page.
     *
     * @public
     * @return string
     */
    public static function getVisitedPage(): string
    {
        return self::VisitedPageURL($_SERVER);
    }//end getVisitedPage()


    /**
     * Retrieve visited page url.
     *
     * @param array   $s                Server information.
     * @param boolean $useForwardedHost Forward host using permission
     *
     * @return string Page url.
     */
    public static function visitedPageURL(array $s, bool $useForwardedHost = false): string
    {
        return self::urlOrigin($s, $useForwardedHost).$s['REQUEST_URI'];
    }//end visitedPageURL()


    /**
     * @param  array   $s
     * @param  boolean $useForwardedHost
     * @return string
     */
    public static function urlOrigin(array $s, bool $useForwardedHost = false): string
    {
        $ssl      = (empty($s['HTTPS']) === false && $s['HTTPS'] === 'on');
        $sp       = strtolower($s['SERVER_PROTOCOL']);
        $protocol = substr($sp, 0, strpos($sp, '/')).(($ssl) ? 's' : '');
        $port     = $s['SERVER_PORT'];

        //url:http://localhost:8080
        //url:http://localhost
        //url:https://localhost

        if (!str_contains($s['SERVER_NAME'], $port)) {
            $port = ':' . $port;
        }

        if ((!$ssl && $port === '80') || ($ssl && $port === '443')) {
            $port = '';
        }

        //$port = (!$ssl && $port === '80') || ($ssl && $port === '443') ? '' : ':' . $port;

        if (($useForwardedHost && isset($s['HTTP_X_FORWARDED_HOST']))) {
            $host = $s['HTTP_X_FORWARDED_HOST'];
        } else {
            $host = ($s['HTTP_HOST'] ?? null);
        }
        $host     = ($host ?? $s['SERVER_NAME']).$port;
        return $protocol.'://'.$host;
    }//end urlOrigin()


    /**
     * @public
     * @return mixed
     */
    public function getURLProtocol(): string
    {
        return $this->urlProtocol;
    }//end getURLProtocol()


    /**
     * @public
     * @return mixed
     */
    public function getURLHostname(): string
    {
        return $this->urlHostname;
    }//end getURLHostname()


    /**
     * @public
     * @return mixed
     */
    public function getURLPath(): string
    {
        return $this->urlPath;
    }//end getURLPath()


    /**
     * @public
     * @return string
     */
    public function getRequestMethod(): string
    {
        return $this->requestMethod;
    }//end getRequestMethod()


    /**
     * @return string
     */
    public function getRequestMode(): string
    {
        return $this->requestMode;
    }//end getRequestMode()


    public function __destruct()
    {
    }//end __destruct()


    /**
     * @return mixed|string
     */
    public function getAcceptLanguage(): mixed
    {
        return $this->acceptLanguage;
    }//end getAcceptLanguage()


    /**
     * @return mixed|string
     */
    public function getAcceptEncoding(): mixed
    {
        return $this->acceptEncoding;
    }//end getAcceptEncoding()
}//end class
