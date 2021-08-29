<?php


namespace Mishusoft\Http;

use RuntimeException;

class IpDataClient
{
    private const BASE_URL = 'https://api.ipdata.co';


    /**
     *
     * @param  string $apiKey
     */
    public function __construct(
        private string $apiKey = ''
    ) {
        if (empty($this->apiKey) === true) {
            throw new RuntimeException('IpData api can not be empty.');
        }
    }//end __construct()


    /**
     * @param string $ip
     * @param array $fields
     * @return array
     * @throws \JsonException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function lookup(string $ip, array $fields = []) : array
    {
        $response = [];
        $query = [
            'api-key' => $this->apiKey,
        ];

        if (empty($fields) === false) {
            $query['fields'] = implode(',', $fields);
        }

        $curlHandle = new CurlRequest;
        // echo sprintf('%s/%s?%s', self::BASE_URL, $ip, http_build_query($query)).PHP_EOL;
        $curlHandle->setHost(sprintf('%s/%s?%s', self::BASE_URL, $ip, http_build_query($query)));
        $curlHandle->makeRequest(['timeout' => 20]);
        $curlHandle->sendRequest();
        if ($curlHandle->getResponseCode() !== 200) {
            if (count($curlHandle->getErrors())>0) {
                $errResponse = $curlHandle->getErrors();
            } else {
                $errResponse = $curlHandle->toArray();
            }
            throw new RuntimeException(implode(":", $errResponse));
        }

        $head = $curlHandle->getResponseHeadArray();
        if (array_key_exists('content-type', $head) === true) {
            if (trim($head['content-type']) === 'application/json') {
                $response = $curlHandle->toArray();
            } else {
                throw new RuntimeException('Unexpected content type found: ' . $head['content-type']);
            }
        }

        return $response;
    }//end lookup()


    /**
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \JsonException
     */
    public function buildLookup(array $ips, array $fields = []): array
    {
        $query = [
            'api-key' => $this->apiKey,
        ];

        if (!empty($fields)) {
            $query['fields'] = implode(',', $fields);
        }


        $response = [];
        $curlHandle = new CurlRequest;
        $curlHandle->setHost(sprintf('%s/bulk?%s', self::BASE_URL, http_build_query($query)));
        $curlHandle->makeRequest(['timeout' => 20])
            ->with('method', ['method' => 'post', 'post_fields' => json_encode($ips, JSON_THROW_ON_ERROR)]);
        $curlHandle->setHeaders(['Content-Type' => 'text/plain']);
        $curlHandle->sendRequest();
        if ($curlHandle->getResponseCode() !== 200) {
            if (count($curlHandle->getErrors())>0) {
                $errResponse = $curlHandle->getErrors();
            } else {
                $errResponse = $curlHandle->toArray();
            }
            throw new RuntimeException(implode(":", $errResponse));
        }

        $head = $curlHandle->getResponseHeadArray();
        if (array_key_exists('content-type', $head) === true) {
            if (trim($head['content-type']) === 'application/json') {
                $response = $curlHandle->toArray();
            } else {
                throw new RuntimeException('Unexpected content type found: ' . $head['content-type']);
            }
        }


        return $response;
    }//end buildLookup()
}//end class
