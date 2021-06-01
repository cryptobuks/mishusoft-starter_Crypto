<?php


namespace Mishusoft\Framework\Chipsets\Http;

use RuntimeException;

class IpDataClient
{

    private const BASE_URL = 'https://api.ipdata.co';


    /**
     * Get an instance of the API client. Give it an API key, a PSR-18 client and a PSR-17 request factory.
     *
     * @param  string $apiKey
     * @throws \JsonException
     */
    public function __construct(
        private string $apiKey=''
    ) {
        if (empty($this->apiKey) === true) {
            throw new RuntimeException('IpData api can not be empty.');
        }

    }//end __construct()


    /**
     * @throws \JsonException
     */
    public function lookup(string $ip, array $fields=[]) : array
    {
        $query = [
            'api-key' => $this->apiKey,
        ];

        if (empty($fields) === false) {
            $query['fields'] = implode(',', $fields);
        }

        // echo sprintf('%s/%s?%s', self::BASE_URL, $ip, http_build_query($query)).PHP_EOL;
        $http     = new sendRequestDirect(sprintf('%s/%s?%s', self::BASE_URL, $ip, http_build_query($query)));
        $request  = $http->createRequest('get');
        $response = $http->parsedHttpRequest($request);
        return $http->parseHttpResponse($response);

    }//end lookup()


//    public function buildLookup(array $ips, array $fields=[]): array
//    {
//        $query = [
//            'api-key' => $this->apiKey,
//        ];
//
//        if (!empty($fields)) {
//            $query['fields'] = implode(',', $fields);
//        }
//
//        $request = $this->requestFactory->createRequest('POST', sprintf('%s/bulk?%s', self::BASE_URL, http_build_query($query)));
//        $request->getBody()->write(json_encode($ips));
//        $request  = $request->withAddedHeader('Content-Type', 'text/plain');
//        $response = $this->httpClient->sendRequest($request);
//
//        return $this->parseResponse($response);
//
//    }//end buildLookup()


}//end class
