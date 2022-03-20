<?php

declare(strict_types=1);

/*
 * Browser (php language) Library
 * Developer: Mr Al-Amin Ahmed Abir
 * Website: https://www.mishusoft.com
 * Official Link: https://www.mishusoft.com/libraries/php/browser.php
 */

namespace Mishusoft\Http;

class Browser extends UAAnalyzer
{
    public const DEFAULT_USER_AGENT = FRAMEWORK_DEFAULT_USER_AGENT;

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
     * @param string $userAgentString
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    public function __construct(
        private string $userAgentString = 'default'
    ) {
        parent::__construct($this->userAgentString);

        $this->requestMethod = get_http_request_method();
        $this->requestMode   = get_http_fetch_mode();
        $this->urlProtocol   = get_server_Protocol();
        $this->urlHostname   = get_http_host_name();
        $this->urlPath       = get_http_request_uri();

        $this->acceptLanguage = get_http_accept_language();
        $this->acceptEncoding = get_http_accept_encoding();

        // https://stackoverflow.com/questions/16884518/apache-request-headers-versus-server
        // https://www.php.net/manual/en/function.apache-request-headers.php
        // https://www.php.net/manual/en/reserved.variables.server.php

        if ($this->userAgentString !== 'default') {
            $this->userAgent = $this->userAgentString;
        } else {
            $this->userAgent = get_http_user_agent();
        }

        $this->analyze();
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
        $url = get_visited_current_page();
        // OPEN THE REMOTE PAGE
        $file = fopen($url, 'rb') or trigger_error('url not found');
        // ITERATE OVER THE PAGE DATA
        while (is_resource($file) && !feof($file)) {
            $text = fread($file, 16384);
            if (is_string($text) && preg_match('/<title>(.*?)<\/title>/is', $text, $found) === 1) {
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
     * @param array $s Server information.
     * @param boolean $useForwardedHost Forward host using permission
     *
     * @return string Page url.
     */
    public static function visitedPageURL(array $s, bool $useForwardedHost = false): string
    {
        return domainRoot($useForwardedHost) . $s['REQUEST_URI'];
    }//end visitedPageURL()


    /**
     * @public
     * @return string
     */
    public function getURLProtocol(): string
    {
        return $this->urlProtocol;
    }//end getURLProtocol()


    /**
     * @public
     * @return string
     */
    public function getURLHostname(): string
    {
        return $this->urlHostname;
    }//end getURLHostname()


    /**
     * @public
     * @return string
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


    /**
     * @return string
     */
    public function getAcceptLanguage(): string
    {
        return $this->acceptLanguage;
    }//end getAcceptLanguage()


    /**
     * @return string
     */
    public function getAcceptEncoding(): string
    {
        return $this->acceptEncoding;
    }//end getAcceptEncoding()


    public function __destruct()
    {
    }//end __destruct()
}//end class
