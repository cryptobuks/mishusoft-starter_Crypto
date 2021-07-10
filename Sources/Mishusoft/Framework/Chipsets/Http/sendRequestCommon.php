<?php


namespace Mishusoft\Framework\Chipsets\Http;

use CurlHandle;
use InvalidArgumentException;
use RuntimeException;

class sendRequestCommon
{

    /**
     * @var CurlHandle
     */
    protected CurlHandle $curlHandle;

    protected string $httpRequestMethod = '';

    /**
     * @var array|string[]
     */
    protected array $allowedRequestMethod = [
        'get',
        'post',
    ];

    /**
     * @var string
     */
    protected string $httpResponseHeader = '';
    protected string $httpResponse = '';


    /**
     * sendRequestCommon constructor.
     * @param string $httpHostUrl
     */
    public function __construct(
        private string $httpHostUrl
    ) {
        if (empty($this->httpHostUrl) === true) {
            throw new InvalidArgumentException('Hot Url can not be empty.');
        }
    }//end __construct()


    /**
     * @param string $qualifiedName
     * @return integer
     */
    protected function parseHttpRequestMethod(string $qualifiedName): int
    {
        return match (strtolower($qualifiedName)) {
            'get' => 0,
            'post' => 1,
            default => throw new RuntimeException('Invalid value.')
        };
    }//end parseHttpRequestMethod()


    /**
     * @param CurlHandle $curlHandle
     * @return mixed
     */
    private function getResponseHeaderSize(CurlHandle $curlHandle): mixed
    {
        return curl_getinfo($curlHandle, CURLINFO_HEADER_SIZE);
    }//end getResponseHeaderSize()


    /**
     * @return string
     */
    public function getResponseHeader(): string
    {
        // $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        // $header      = substr($this->httpResponse, 0, $this->getResponseHeaderSize($curlHandle));
        return $this->httpResponseHeader;
    }//end getResponseHeader()


    /**
     * @param CurlHandle $curlHandle
     * @return boolean|string
     */
    public function parsedHttpRequest(CurlHandle $curlHandle): bool|string
    {
        $this->httpResponse = curl_exec($curlHandle);

        if (curl_error($curlHandle) !== '') {
            echo 'Connection Error: ' . curl_error($curlHandle);
            exit();
        }//end if

        curl_close($curlHandle);

        // Then, after your curl_exec call:
        //$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        $header_size = $this->getResponseHeaderSize($curlHandle);
        $this->httpResponseHeader = substr($this->httpResponse, 0, $header_size);
        // $body = substr($this->httpResponse, $this->getResponseHeaderSize($curlHandle));
        return substr($this->httpResponse, $header_size);
    }//end parsedHttpRequest()
}//end class
