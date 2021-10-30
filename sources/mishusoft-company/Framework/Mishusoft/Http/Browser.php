<?php

declare(strict_types=1);

/*
 * Browser (php language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/php/browser.php
 */

namespace Mishusoft\Http;

use ErrorException;
use JsonException;
use Mishusoft\Http;
use RuntimeException;

class Browser extends UAAnalyzer
{
    public const DEFAULT_USER_AGENT = 'Mozilla/5.0 (X11; Linux x86_64; rv:95.0) Gecko/20100101 Firefox/95.0';

    private string $requestMethod;
    private string $requestMode;
    private string $urlProtocol;
    private string $urlHostname;
    private string $urlPath;
    private string $acceptLanguage;
    private string $acceptEncoding;
    private string $userAgentString = 'default';

    /**
     * Browser constructor.
     *
     * @throws JsonException
     * @throws RuntimeException
     * @throws ErrorException
     */
    public function __construct(
        string $userAgentString = 'default'
    ) {
        $this->userAgentString = $userAgentString;
        parent::__construct($this->userAgentString);
        $this->requestMethod = $_SERVER['REQUEST_METHOD'];

        $this->requestMode = array_key_exists('HTTP-SEC-FETCH-MODE', $_SERVER) ? $_SERVER['HTTP-SEC-FETCH-MODE'] : 'negative';

        $this->urlProtocol = array_key_exists('REQUEST_SCHEME', $_SERVER) ? $_SERVER['REQUEST_SCHEME'] : 'http';

        if (array_key_exists('HTTP_HOST', $_SERVER)) {
            $domain = in_array($_SERVER['HTTP_HOST'], $this->allowedDomains, true) ? $_SERVER['HTTP_HOST'] : 'localhost';

            $this->urlHostname = $domain;
        } else {
            $this->urlHostname = 'unknown host';
        }

        $this->urlPath = $_SERVER['REQUEST_URI'];

        if ($this->userAgentString !== 'default') {
            $this->userAgent = $this->userAgentString;
        } elseif (function_exists('apache_request_headers')) {
            if (array_key_exists('User-Agent', apache_request_headers())) {
                $this->userAgent = apache_request_headers()['User-Agent'];
                if (array_key_exists('Accept-Language', apache_request_headers())) {
                    $this->acceptLanguage = apache_request_headers()['Accept-Language'];
                }

                if (array_key_exists('Accept-Encoding', apache_request_headers())) {
                    $this->acceptEncoding = apache_request_headers()['Accept-Encoding'];
                }

                $this->analyze();
            }
        } elseif (function_exists('getallheaders')) {
            if (array_key_exists('HTTP_USER_AGENT', getallheaders())) {
                $this->userAgent = getallheaders()['HTTP_USER_AGENT'];
                if (array_key_exists('Accept-Language', getallheaders())) {
                    $this->acceptLanguage = getallheaders()['Accept-Language'];
                }

                if (array_key_exists('Accept-Encoding', getallheaders())) {
                    $this->acceptEncoding = getallheaders()['Accept-Encoding'];
                }
                $this->analyze();
            }
        } elseif (array_key_exists('HTTP_USER_AGENT', $_SERVER)) {
            $this->userAgent = $_SERVER['HTTP_USER_AGENT'];

            if (array_key_exists('HTTP_ACCEPT_LANGUAGE', $_SERVER)) {
                $this->acceptLanguage = $_SERVER['HTTP_ACCEPT_LANGUAGE'];
            }

            if (array_key_exists('HTTP_ACCEPT_ENCODING', $_SERVER)) {
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
     */
    public static function visitedPageTitle(): string
    {
        // SET DEFAULT
        $title = 'No title found';
        // Web url
        $url = self::getVisitedPage();
        // OPEN THE REMOTE PAGE
        ($file = fopen($url, 'rb')) || trigger_error('url not found');
        // ITERATE OVER THE PAGE DATA
        while (!feof($file)) {
            $text = fread($file, 16384);
            if (preg_match('/<title>(.*?)<\/title>/is', $text, $found) === 1) {
                $title = array_key_exists(1, $found) ? $found[1] : 'Not found';

                break;
            }
        }

        return ltrim($title);
    }//end visitedPageTitle()
    /**
     * Retrieve visited page.
     *
     * @public
     */
    public static function getVisitedPage(): string
    {
        return self::VisitedPageURL($_SERVER);
    }//end getVisitedPage()


    /**
     * Retrieve visited page url.
     *
     * @param array $s Server information.
     * @param boolean $useForwardedHost Forward host using permission
     *
     * @return string Page url.
     */
    public static function visitedPageURL(array $s, bool $useForwardedHost = false): string
    {
        return Http::getHost($useForwardedHost) . $s['REQUEST_URI'];
    }//end visitedPageURL()


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
     */
    public function getRequestMethod(): string
    {
        return $this->requestMethod;
    }public function getRequestMode(): string
    {
        return $this->requestMode;
    }//end __destruct()
    /**
     * @return mixed
     */
    public function getAcceptLanguage()
    {
        return $this->acceptLanguage;
    }//end getAcceptLanguage()
    /**
     * @return mixed
     */
    public function getAcceptEncoding()
    {
        return $this->acceptEncoding;
    }//end getAcceptEncoding()
}//end class
