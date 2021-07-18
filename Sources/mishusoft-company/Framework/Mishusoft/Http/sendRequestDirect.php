<?php declare(strict_types=1);


namespace Mishusoft\Http;


use CurlHandle;
use InvalidArgumentException;
use RuntimeException;

class sendRequestDirect extends sendRequestCommon
{


    /**
     * sendRequest constructor.
     *
     * @param string $httpHostUrl
     */
    public function __construct(
        private string $httpHostUrl
    ) {
        parent::__construct($this->httpHostUrl);

    }//end __construct()


    /**
     * @param  string $method
     * @return CurlHandle|boolean
     */
    public function createRequest(string $method): CurlHandle|bool
    {
        if (in_array(strtolower($method), $this->allowedRequestMethod, true) === false) {
            throw new InvalidArgumentException('Invalid argument parsed. Request method must be GET or POST.');
        }

        // Store method in runtime Object attribute.
        $this->httpRequestMethod = strtolower($method);

        // Create Curl Handle.
        $this->curlHandle = curl_init($this->httpHostUrl);
        // Set method for http request.
        // 0 for a get request, 1 for a get request.
        curl_setopt($this->curlHandle, CURLOPT_POST, $this->parseHttpRequestMethod($this->httpRequestMethod));
        // Set return transfer value, if get any value without curl_exec().
        curl_setopt($this->curlHandle, CURLOPT_RETURNTRANSFER, true);
        // TRUE to include the header in the output.
        curl_setopt($this->curlHandle, CURLOPT_HEADER, 1);
        // Set the number of seconds to wait while trying to connect. Use 0 to wait indefinitely.
        curl_setopt($this->curlHandle, CURLOPT_CONNECTTIMEOUT, 30);
        // Set the maximum number of seconds to allow cURL functions to execute.
        curl_setopt($this->curlHandle, CURLOPT_TIMEOUT, 300);

        return $this->curlHandle;

    }//end createRequest()


    /**
     * @return array
     */
    public function getHeaderArray(): array
    {
        $cleanHttpHeader = [];
        $headerArray     = array_filter(explode("\n", $this->getResponseHeader()));
        $headerArray     = array_change_key_case($headerArray, CASE_LOWER);

        foreach ($headerArray as $item) {
            if (empty($item) === false) {
                if (str_contains(strtolower($item), 'http/') === true) {
                    $explode = explode(' ', strtolower($item));
                    if (str_contains($explode[0], 'http/') === true) {
                        $cleanHttpHeader['protocol']      = str_replace('/', ' ', $explode[0]);
                        $cleanHttpHeader['response_code'] = $explode[1];
                    }
                } else {
                    if (str_contains($item, ';') === true) {
                        $item = substr($item, 0, strpos($item, ';'));
                    }

                    if (substr_count($item, ':') > 1) {
                        if (str_contains($item, 'date:') === true) {
                            $cleanHttpHeader['date'] = substr($item, (strpos($item, ':') + 2));
                        }
                    } else {
                        $explode = explode(':', $item);
                        if (array_key_exists(0, $explode) === true && empty($explode[0]) === false
                            && array_key_exists(1, $explode) === true && empty($explode[1]) === false
                        ) {
                            $cleanHttpHeader[$explode[0]] = $explode[1];
                        }
                    }
                }//end if
            }//end if
        }//end foreach

        return $cleanHttpHeader;

    }//end getHeaderArray()


    /**
     * @param  string $keyword
     * @return string
     */
    public function getHeaderLine(string $keyword): string
    {
        return $this->getHeaderArray()[$keyword];

    }//end getHeaderLine()


    /**
     * @param  string $content
     * @return mixed
     * @throws \JsonException
     */
    public function parseHttpResponse(string $content): array
    {
        if (array_key_exists('content-type', $this->getHeaderArray()) === true) {
            if ($this->getHeaderLine('content-type') !== 'application/json') {
                throw new RuntimeException('Cannot convert response to array. Response has Content-Type:'.$this->getHeaderLine('content-type'));
            }
        } else {
            throw new RuntimeException('Response has been corrupted. Unable to find out content type.');
        }

        $content = json_decode($content, true, 512, JSON_THROW_ON_ERROR);
        if (JSON_ERROR_NONE !== json_last_error()) {
            throw new RuntimeException(sprintf('Error (%d) when trying to json_decode response', json_last_error()));
        }

        return $content;

    }//end parseHttpResponse()


}//end class
