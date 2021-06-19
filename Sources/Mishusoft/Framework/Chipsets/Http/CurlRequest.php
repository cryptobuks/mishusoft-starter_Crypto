<?php


namespace Mishusoft\Framework\Chipsets\Http;

use CurlHandle;

/*
 * Example of use it
 * $curlHandle = new CurlRequest;
 * $curlHandle->setHost('example.com'); or
 * $curlHandle->setHeaders(['Host'=> 'example.com']);
 * $curlHandle->getResponse();
 */

class CurlRequest
{
    protected CurlHandle $ch;

    /**
     * @var string
     */
    private string $userAgent = "Mozilla/5.0 (Windows; U; Windows NT 5.1; ru; rv:1.8.0.9) Gecko/20061206 Firefox/1.5.0.9";
    /**
     * @var array|string[]
     */
    private array $headers = array(
        "Accept" => "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5",
        "Accept-Language" => "ru-ru,ru;q=0.7,en-us;q=0.5,en;q=0.3",
        "Accept-Charset" => "windows-1251,utf-8;q=0.7,*;q=0.7",
        "Keep-Alive" => "300"
    );

    private int $timeOut = 200;
    private array|string $errors = '';

    private string $requestMethod = 'GET';
    private string $responseHead;
    private string $responseBody;
    private int $responseCode;
    private string $lastUrl;
    private array $allowedRequestMethod = [
        'get',
        'post',
        'put',
    ];

    public function __construct(private ?string $hostUrl = null)
    {
        $this->ch = curl_init($this->hostUrl);
    }

    /**
     * @param string $userAgent
     * @return CurlRequest
     */
    public function setUserAgent(string $userAgent): static
    {
        if ($userAgent !== '') {
            $this->userAgent = $userAgent;
        }
        @curl_setopt($this->ch, CURLOPT_USERAGENT, $this->userAgent);
        return $this;
    }

    /**
     * @param string $hostname
     * @return CurlRequest
     */
    public function setHost(string $hostname): static
    {
        @curl_setopt($this->ch, CURLOPT_URL, $hostname);
        return $this;
    }

    /**
     * @param array $headers
     * @return CurlRequest
     */
    public function setHeaders(array $headers): static
    {
        $finalHeaders = array();

        if (count($headers) > 0) {
            $this->headers = array_merge_recursive($this->headers, $headers);
        }

        foreach ($this->headers as $key => $value) {
            $finalHeaders[] = sprintf('%s: %s', ucwords($key), $value);
        }
        @curl_setopt($this->ch, CURLOPT_HTTPHEADER, $finalHeaders);
        return $this;
    }

    /**
     * @param array $params
     * @return $this
     */
    public function makeRequest(array $params): static
    {
        @curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
        //@curl_setopt($this->ch, CURLOPT_VERBOSE, 1);
        @curl_setopt($this->ch, CURLOPT_HEADER, 1);
        @curl_setopt($this->ch, CURLOPT_FOLLOWLOCATION, 1);

        // Set time out.
        if (array_key_exists('timeout', $params) === true) {
            @curl_setopt($this->ch, CURLOPT_TIMEOUT, $params['timeout']);
        } else {
            @curl_setopt($this->ch, CURLOPT_TIMEOUT, $this->timeOut);
        }


        return $this;
    }

    public function noResponseBody(): static
    {
        @curl_setopt($this->ch, CURLOPT_NOBODY, 1);
        return $this;
    }

    public function with(string $keyword, array $parameters): static
    {
        if ($keyword !== "") {
            $keyword = strtoupper($keyword);
        }

        if ($keyword === 'METHOD') {
            if (array_key_exists('method', $parameters) === true) {
                if (in_array(strtolower($parameters['method']), $this->allowedRequestMethod, true) === false) {
                    throw new \InvalidArgumentException('Invalid argument parsed. Request method must be GET or POST.');
                }
                
                if (strtolower($parameters['method'])=== 'post') {
                    $this->requestMethod = strtoupper($parameters['method']);
                    @curl_setopt($this->ch, CURLOPT_POST, true);
                    // make dynamic pamameter binding.
                    @curl_setopt($this->ch, CURLOPT_POSTFIELDS, $parameters['post_fields']);
                }
                if (strtolower($parameters['method'])=== 'put') {
                    $this->requestMethod = strtoupper($parameters['method']);
                    @curl_setopt($this->ch, CURLOPT_CUSTOMREQUEST, $this->requestMethod);
                    @curl_setopt($this->ch, CURLOPT_POSTFIELDS, http_build_query($parameters['put_fields']));
                }
            } else {
                throw new \RuntimeException('Method parameter not found.');
            }
        }


        if ($keyword === 'COOKIE') {
            if (array_key_exists('cookie', $parameters) === true) {
                if (strtolower($parameters['cookie']) !== '') {
                    @curl_setopt($this->ch, CURLOPT_COOKIE, $parameters['cookie']);
                }
            } else {
                throw new \RuntimeException('Cookie parameter not found.');
            }
        }


        return $this;
    }

    public function sendRequest(): static
    {
        $response = curl_exec($this->ch);
        $errors = curl_error($this->ch);
        if ($errors !== "") {
            $this->errors = $errors;
        }
        //print_r($response, false);


        // Extract header and bodoy

        $header_size = curl_getinfo($this->ch, CURLINFO_HEADER_SIZE);
        $this->responseHead = substr($response, 0, $header_size);
        $this->responseBody = substr($response, $header_size);


        $this->responseCode = curl_getinfo($this->ch, CURLINFO_HTTP_CODE);
        $this->lastUrl = curl_getinfo($this->ch, CURLINFO_EFFECTIVE_URL);
        curl_close($this->ch);

        return $this;
    }

    /**
     * @param  string $keyword
     * @return string
     */
    public function getHeaderLine(string $keyword): string
    {
        return trim($this->getResponseHeadArray()[$keyword]);
    }//end getHeaderLine()


    /**
     * @param string $keyword
     * @param string $validateName
     */
    private function validate(string $keyword, string $validateName): void
    {
        $head = $this->getResponseHeadArray();
        if (array_key_exists($keyword, $head) === true) {
            if ($this->getHeaderLine($keyword) !== $validateName) {
                //return $curlHandle->getResponseBody();
                throw new \RuntimeException('Cannot convert response to array. Response has:'.$this->getHeaderLine($keyword));
            }
        } else {
            throw new \RuntimeException(sprintf('Response has been corrupted. Unable to find out %s.', preg_replace('[#/-]', ' ', $keyword)));
        }
    }

    private function jsonLastErrorCheckOut(): void
    {
        if (JSON_ERROR_NONE !== json_last_error()) {
            throw new \RuntimeException(sprintf('Error (%d) when trying to json_decode response', json_last_error()));
        }
    }


    /**
     * @throws \JsonException
     */
    public function toArray(): array
    {
        $this->validate('content-type', 'application/json');

        $result = json_decode($this->getResponseBody(), true, 512, JSON_THROW_ON_ERROR);
        $this->jsonLastErrorCheckOut();

        return $result;
    }


    /**
     * @throws \JsonException
     */
    public function toObject(): object
    {
        $this->validate('content-type', 'application/json');

        $result = json_decode($this->getResponseBody(), false, 512, JSON_THROW_ON_ERROR);
        $this->jsonLastErrorCheckOut();

        return $result;
    }


    /**
     * @throws \JsonException
     */
    public function toJson(): string
    {
        $this->validate('date', date('Y-m-d H:i:s'));

        $result = json_encode($this->getResponseBody(), JSON_THROW_ON_ERROR);
        $this->jsonLastErrorCheckOut();

        return $result;
    }

    /**
     * @return array
     * @throws \JsonException
     */
    public function getErrors(): array
    {
        $result = [];
        if ($this->isJsonString($this->errors)) {
            $result[] = json_decode($this->errors, true, 512, JSON_THROW_ON_ERROR);
        } else {
            $result[] = $this->errors;
        }

        return array_filter($result);
    }

    private function isJsonString(string $string): bool
    {
        return str_starts_with($string, '{') and str_ends_with($string, '}');
    }

    /**
     * @return string
     */
    public function getResponseHead(): string
    {
        return $this->responseHead;
    }


    /**
     * @return array
     */
    public function getResponseHeadArray(): array
    {

       // print_r($this->responseHead, false);
//
//        HTTP/2 200
//        date: Fri, 18 Jun 2021 08:00:53 GMT
//        content-type: text/html; charset=utf-8
//        x-remote-ip: 103.78.54.230
//        cf-cache-status: DYNAMIC
//        cf-request-id: 0abfbc297100000eb14818d000000001
//        expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
//        report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v2?s=K8ZSrzVi0fSqba0aYhI6eJbSZsQvSBQzWxQJ0KEO4syQRwrIZZoFfHX8zGpx5DO%2FJ%2F2GqCbDVYartmG%2FWX60wBu6PjkaOFUo2hQ27jMpDk5FkkzVl5E3q%2BCkmnPa"}],"group":"cf-nel","max_age":604800}
//        nel: {"report_to":"cf-nel","max_age":604800}
//        server: cloudflare
//        cf-ray: 6612fc88b9b10eb1-BOM
//        alt-svc: h3-27=":443"; ma=86400, h3-28=":443"; ma=86400, h3-29=":443"; ma=86400, h3=":443"; ma=86400

        $cleanHttpHeader = [];
        $headerArray     = array_filter(explode("\n", $this->responseHead));
        $headerArray     = array_change_key_case($headerArray, CASE_LOWER);

        //print_r(http_parse_headers($this->responseHead), false);

        foreach ($headerArray as $item) {
            if (empty($item) === false) {
                if (str_contains(strtolower($item), 'http/') === true) {
                    $explode = explode(' ', strtolower($item));
                    if (str_contains($explode[0], 'http/') === true) {
                        $cleanHttpHeader['protocol']      = str_replace('/', ' ', $explode[0]);
                        $cleanHttpHeader['response_code'] = $explode[1];
                    }
                } else {
                    if (str_contains(strtolower($item), 'content-type') === true) {
                        if (str_contains($item, ';') === true) {
                            $item = substr($item, 0, strpos($item, ';'));
                        }
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
    }

    /**
     * @return string
     */
    public function getResponseBody(): string
    {
        return $this->responseBody;
    }

    /**
     * @return int
     */
    public function getResponseCode(): int
    {
        return $this->responseCode;
    }

    /**
     * @return string
     */
    public function getLastUrl(): string
    {
        return $this->lastUrl;
    }
}
