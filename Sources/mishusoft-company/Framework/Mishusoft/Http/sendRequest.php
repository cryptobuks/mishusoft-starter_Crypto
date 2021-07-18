<?php declare(strict_types=1);


namespace Mishusoft\Http;


use CurlHandle;
use InvalidArgumentException;
use Mishusoft\Utility\Debug;

class sendRequest extends sendRequestCommon
{


    /**
     * sendRequest constructor.
     *
     * @param string $httpHostUrl
     * @param array $httpBodyContent
     * @param array  $httpHeaders
     */
    public function __construct(
        private string $httpHostUrl,
        private array $httpBodyContent,
        private array $httpHeaders,
    ) {
        parent::__construct($this->httpHostUrl);

        if (empty($this->httpBodyContent) === false && is_array($this->httpBodyContent) === false) {
            throw new InvalidArgumentException('Invalid argument parsed. Http body content must be array value.');
        }

        if (empty($this->httpHeaders) === false && is_array($this->httpHeaders) === false) {
            throw new InvalidArgumentException('Invalid argument parsed. Http header must be array value.');
        }

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
        $handle = curl_init($this->httpHostUrl);
        // Set method for http request.
        // 0 for a get request, 1 for a get request.
        curl_setopt($handle, CURLOPT_POST, $this->parseHttpRequestMethod($this->httpRequestMethod));

        if (empty($this->httpHeaders) === false) {
            curl_setopt($handle, CURLOPT_HTTPHEADER, $this->httpHeaders);

            // Set the content type to application/json.
            // curl_setopt($handle, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        }//end if

        if (empty($this->httpBodyContent) === false) {
            // Attach encoded JSON string to the POST fields.
            curl_setopt($handle, CURLOPT_POSTFIELDS, http_build_query($this->httpBodyContent));
            // curl_setopt($handle, CURLOPT_POSTFIELDS, http_build_query($post));
            //echo http_build_query($this->httpBodyContent);
        }//end if


        // Set return transfer value, if get any value without curl_exec().
        curl_setopt($handle, CURLOPT_RETURNTRANSFER, true);
        // Set the number of seconds to wait while trying to connect. Use 0 to wait indefinitely.
        curl_setopt($handle, CURLOPT_CONNECTTIMEOUT, 30);
        // Set the maximum number of seconds to allow cURL functions to execute.
        curl_setopt($handle, CURLOPT_TIMEOUT, 300);

        _Debug::preOutput($handle);

        return $handle;

    }//end createRequest()

    /**
     * @param  string $content
     * @return mixed
     * @throws \JsonException
     */
    public function parseHttpResponse(string $content): mixed
    {
        return json_decode($content, false, 512, JSON_THROW_ON_ERROR);

    }//end parseHttpResponse()


}//end class
