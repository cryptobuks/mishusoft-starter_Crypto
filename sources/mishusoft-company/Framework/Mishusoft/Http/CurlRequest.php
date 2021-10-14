<?php


namespace Mishusoft\Http;

use CurlHandle;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Framework;
use Mishusoft\Utility\Implement;

/*
 * Example of use it
 * $curlHandle = new CurlRequest;
 * $curlHandle->setHost('example.com'); or
 * $curlHandle->setHeaders(['Host'=> 'example.com']);
 * $curlHandle->makeRequest(['timeout' => 20]);
 * $curlHandle->sendRequest();
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
    private array $headers = [
        "Accept" => "text/xml,application/xml,application/xhtml+xml,text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5",
        "Accept-Language" => "ru-ru,ru;q=0.7,en-us;q=0.5,en;q=0.3",
        "Accept-Charset" => "windows-1251,utf-8;q=0.7,*;q=0.7",
        "Keep-Alive" => "300",
    ];

    private int $timeOut = 200;
    private array $errors = [];

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
    private int $executionTime;
    private array $connectionInfo;

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
        $finalHeaders = [];

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
                    // make dynamic parameter binding.
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
        // Execute curl request.
        $response = curl_exec($this->ch);

        // Catch curl error.
        $errno = curl_errno($this->ch);

        if ($errno !== 0) {
            $this->errors['code'] = $errno;
            $this->errors['message'] = curl_strerror($errno);
            $this->errors['details'] = curl_error($this->ch);
        }


        // Extract header and body
        $header_size = curl_getinfo($this->ch, CURLINFO_HEADER_SIZE);
        $this->responseHead = substr($response, 0, $header_size);
        $this->responseBody = substr($response, $header_size);


        // Retrieve information about connection.
        $this->executionTime = curl_getinfo($this->ch, CURLINFO_TOTAL_TIME);
        $this->responseCode = curl_getinfo($this->ch, CURLINFO_RESPONSE_CODE);
        $this->lastUrl = curl_getinfo($this->ch, CURLINFO_EFFECTIVE_URL);
        $this->connectionInfo = curl_getinfo($this->ch);

        // Close the curl session
        curl_close($this->ch);

        return $this;
    }

    /**
     * @throws HttpResponseException
     */
    public static function uploadFile(string $hostUrl, array $files): array
    {

        //        $postField = array();
        //        $tmpfile = $_FILES[$name]['tmp_name'][$i];
        //        $filename = basename($_FILES[$name]['name'][$i]);
        //        $postField['files'] =  curl_file_create($tmpfile, $_FILES[$name]['type'][$i], $filename);
        //        $headers = array("Content-Type" => "multipart/form-data");
        //        $curl_handle = curl_init();
        //        curl_setopt($curl_handle, CURLOPT_URL, 'Put here curl API');
        //
        //        curl_setopt($curl_handle, CURLOPT_HTTPHEADER, $headers);
        //        curl_setopt($curl_handle, CURLOPT_POST, TRUE);
        //        curl_setopt($curl_handle, CURLOPT_POSTFIELDS, $postField);
        //        curl_setopt($curl_handle, CURLOPT_RETURNTRANSFER, TRUE);
        //        $returned_fileName = curl_exec($curl_handle);
        //        curl_close($curl_handle);

        // Uses
//        $filename = 'absolute-path-of-file';
//        $response = CurlRequest::uploadFile(
//            '{valid-full-host-address}',
//            [
//                'update' => new \CURLFile(
//                    $filename,
//                    Media::getMimeContent($filename),
//                    pathinfo($filename, PATHINFO_BASENAME)
//                ),
//            ]
//        );
//        $response = CurlRequest::uploadFile(
//            '{valid-full-host-address}',
//            [
//                'update' => [new \CURLFile(
//                    $filename,
//                    Media::getMimeContent($filename),
//                    pathinfo($filename, PATHINFO_BASENAME)
//                ),new \CURLFile(
//                    $filename,
//                    Media::getMimeContent($filename),
//                    pathinfo($filename, PATHINFO_BASENAME)
//                ),new \CURLFile(
//                    $filename,
//                    Media::getMimeContent($filename),
//                    pathinfo($filename, PATHINFO_BASENAME)
//                ),]
//            ]
//        );

        $request = new self($hostUrl);
        $request->makeRequest(['timeout' => 20])->with('method', [
            'method' => 'post', 'post_fields' => $files,
        ]);
        $request->sendRequest();

        $request->responseErrorCheckOut();

        return [
            'header' =>$request->getResponseHeadArray(),
            'response' =>$request->getResponseBody(),
            'errors' =>$request->getErrors(),
        ];
    }

    public static function massDownload(array $dataList, string $keyword, array $formats, string $directory, string $filter, string $filenamePrefix): void
    {
        foreach ($dataList as $serial => $item) {
            echo sprintf(
                "Query :: %d/%d\nItem :: %s (%s)\nDestination :: %s",
                ++$serial,
                count($dataList),
                $item,
                $keyword,
                $directory
            ) . LB;
            foreach ($formats as $format) {
                if ((file_exists($directory) === false) && !mkdir($directory, 077, true) && !is_dir($directory)) {
                    throw new \RuntimeException(sprintf('Directory "%s" was not created', $directory));
                }

                self::download($item, $keyword, $format, $directory, $filter, $filenamePrefix);
            }

            print_r('The content of ' . $item . ' download has been finished.' . LB . LB, false);
        }
    }

    public static function download(string $item, string $keyword, string $format, string $directory, string $filter, string $filenamePrefix = 'download'): void
    {
        if ((file_exists($directory) === false) && !mkdir($directory, 077, true) && !is_dir($directory)) {
            throw new \RuntimeException(sprintf('Directory "%s" was not created', $directory));
        }

        //$filename = sprintf('user-agents_%s.%s', $item, $format);
        //$filename = sprintf('%s%s', $directory, $filename);

        try {
            if ($filter === 'new') {
                $filename = sprintf('%s%s%s.%s', $directory, $filenamePrefix, $item, $format);
                if (file_exists($filename) === false) {
                    self::write($filename, self::response($keyword, $item, $format));
                }
            }


            if ($filter === 'update') {
                $filename = sprintf('%s%s%s.%s', $directory, $filenamePrefix, $item, $format);
                if (file_exists($filename) === true) {
                    print_r('Remove old file: ' . basename($filename) . LB, false);
                    unlink($filename);
                }

                self::write($filename, self::response($keyword, $item, $format));
            }
        } catch (\Error | \Exception $exception) {
            echo LB;
            //echo 'Unable to write ' . $filename . LB;
            echo sprintf('Unable to write %s%s%s.%s', $directory, $filenamePrefix, $item, $format) . LB;
            echo $exception->getMessage() . LB;
            Framework::terminate();
        }
    }

    public static function write(string $filename, string $content): void
    {
        if (is_resource(fopen($filename, 'wb+')) === true) {
            $resource = fopen($filename, 'wb+');
            if (is_resource($resource) === true) {
                fwrite($resource, $content);
                fclose($resource);
            }

            print_r('Write new file: ' . basename($filename) . LB, false);
        }
    }

    /**
     * @throws HttpResponseException
     */
    public static function response($keyword, $item, $format): string
    {
        $request = new self('https://user-agents.net/download');
        //http_build_query($parameters['post_fields'])
        $request->makeRequest(['timeout' => 20])->with('method', [
            'method' => 'post', 'post_fields' => http_build_query([$keyword => $item, 'download' => $format]),
        ])->sendRequest();

        $request->responseErrorCheckOut();
        $request->validate('content-type', 'application/octet-stream');
        return $request->getResponseBody();
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
     * @throws HttpResponseException
     */
    private function validate(string $keyword, string $validateName): void
    {
        $head = $this->getResponseHeadArray();
        if (array_key_exists($keyword, $head) === true) {
            if ($this->getHeaderLine($keyword) !== $validateName) {
                throw new \RuntimeException('Cannot convert response to array. Response has:'.$this->getHeaderLine($keyword));
            }
        } else {
            print_r($this->getResponseHeadArray(), false);
            throw new HttpResponseException(sprintf('Response has been corrupted. Unable to find out %s.', str_replace('-', ' ', $keyword)));
        }
    }

    /**
     * @throws HttpResponseException
     */
    public function responseErrorCheckOut():void
    {
        if ($this->getResponseCode() !== 200) {
            if (is_array($this->getErrors())) {
                //print_r($this->getErrors());
                [$errCode, $errMessage] = $this->getErrors();
            } else {
                $errCode = $this->getResponseCode();
                $errMessage = 'Unknown error occurred.';
            }

            throw new HttpResponseException(sprintf('Error (%d): %s', $errCode, $errMessage));
        }
    }



    /**
     * @throws HttpResponseException
     */
    public function toArray(): array
    {
        $this->validate('content-type', 'application/json');

        return Implement::jsonDecode($this->getResponseBody(), IMPLEMENT_JSON_IN_ARR);
    }


    /**
     * @throws HttpResponseException
     */
    public function toObject(): object
    {
        $this->validate('content-type', 'application/json');

        return Implement::jsonDecode($this->getResponseBody());
    }


    public function toJson(): string
    {
        //$this->validate('date', date('Y-m-d H:i:s'));

        return Implement::toJson($this->getResponseBody());
    }

    /**
     * @return array
     */
    public function getErrors(): array
    {
        return array_filter($this->errors);
    }

    /**
     * @return int
     */
    public function getExecutionTime(): int
    {
        return $this->executionTime;
    }

    /**
     * @return array
     */
    public function getConnectionInfo(): array
    {
        return $this->connectionInfo;
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
