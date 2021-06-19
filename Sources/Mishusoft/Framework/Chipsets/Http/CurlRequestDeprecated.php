<?php


namespace Mishusoft\Framework\Chipsets\Http;

use CurlHandle;


//            $curl = new CurlRequestDeprecated();
//            $curl->init([
//                'url' => 'https://user-agents.net/download',
//                //'url' => 'https://example.com/download',
//                'method' => 'POST','post_fields' => http_build_query(['browser'=>$webBrowser,'download'=>$item]),
//                'timeout' => 20
//            ]);
//            preOutput($webBrowser);
//            preOutput($item);
//            preOutput($curl->exec());

class CurlRequestDeprecated
{
    private CurlHandle $ch;

    /**
     * Init curl session
     *
     * $params = array('url' => '',
     *                    'host' => '',
     *                   'header' => '',
     *                   'method' => '',
     *                   'referer' => '',
     *                   'cookie' => '',
     *                   'post_fields' => '',
     *                    ['login' => '',]
     *                    ['password' => '',]
     *                   'timeout' => 0
     *                   );
     */
    public function init(array $params): void
    {
        $this->ch = curl_init();
        $user_agent = 'Mozilla/5.0 (Windows; U;
Windows NT 5.1; ru; rv:1.8.0.9) Gecko/20061206 Firefox/1.5.0.9';
        $header = array(
            "Accept: text/xml,application/xml,application/xhtml+xml,
text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5",
            "Accept-Language: ru-ru,ru;q=0.7,en-us;q=0.5,en;q=0.3",
            "Accept-Charset: windows-1251,utf-8;q=0.7,*;q=0.7",
            "Keep-Alive: 300");
        if (array_key_exists('host', $params) && $params['host'] !== '') {
            $header[] = "Host: " . $params['host'];
        }
        if (array_key_exists('header', $params) && $params['header'] !== '') {
            $header[] = $params['header'];
        }

        @curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
        @curl_setopt($this->ch, CURLOPT_VERBOSE, 1);
        @curl_setopt($this->ch, CURLOPT_HEADER, 1);

        if (array_key_exists('method', $params) && $params['method'] === "HEAD") {
            @curl_setopt($this->ch, CURLOPT_NOBODY, 1);
        }
        @curl_setopt($this->ch, CURLOPT_FOLLOWLOCATION, 1);
        @curl_setopt($this->ch, CURLOPT_HTTPHEADER, $header);
        if (array_key_exists('referer', $params) && $params['referer'] !== '') {
            @curl_setopt($this->ch, CURLOPT_REFERER, $params['referer']);
        }
        @curl_setopt($this->ch, CURLOPT_USERAGENT, $user_agent);
        if (array_key_exists('cookie', $params) && $params['cookie'] !== '') {
            @curl_setopt($this->ch, CURLOPT_COOKIE, $params['cookie']);
        }

        if (array_key_exists('method', $params) && $params['method'] === "POST") {
            curl_setopt($this->ch, CURLOPT_POST, true);
            curl_setopt($this->ch, CURLOPT_POSTFIELDS, $params['post_fields']);
        }
        @curl_setopt($this->ch, CURLOPT_URL, $params['url']);
        //@curl_setopt($this->ch, CURLOPT_SSL_VERIFYPEER, 1);
        //@curl_setopt($this->ch, CURLOPT_SSL_VERIFYHOST, 2);
        if (array_key_exists('login', $params) && $params['login'] !== '' && array_key_exists('password', $params) && $params['password'] !== '') {
            @curl_setopt($this->ch, CURLOPT_USERPWD, $params['login'] . ':' . $params['password']);
        }
        @curl_setopt($this->ch, CURLOPT_TIMEOUT, $params['timeout']);
    }

    /**
     * Make curl request
     *
     * @return array  'header','body','curl_error','http_code','last_url'
     */
    public function exec(): array
    {
        $response = curl_exec($this->ch);
        $error = curl_error($this->ch);
        $result = array('header' => '',
            'body' => '',
            'curl_error' => '',
            'http_code' => '',
            'last_url' => '');
        if ($error !== "") {
            $result['curl_error'] = $error;
            //print_r($error);
            return $result;
        }

        $header_size = curl_getinfo($this->ch, CURLINFO_HEADER_SIZE);
        $result['header'] = substr($response, 0, $header_size);
        //print_r(curl_getinfo($this->ch, CURLINFO_HEADER_SIZE), true);
        //print_r($result['header'], true);
        //print_r($response);
        $result['body'] = substr($response, $header_size);
        $result['http_code'] = curl_getinfo($this->ch, CURLINFO_HTTP_CODE);
        $result['last_url'] = curl_getinfo($this->ch, CURLINFO_EFFECTIVE_URL);
        curl_close($this->ch);
        return $result;
    }
}
/*Example of use:
<?php
..........
try
{
$params = array('url' => 'http://www.google.com',
    'host' => '',
    'header' => '',
    'method' => 'GET', // 'POST','HEAD'
    'referer' => '',
    'cookie' => '',
    'post_fields' => '', // 'var1=value&var2=value
    'timeout' => 20
);

$this->curl->init($params);
$result = $this->curl->exec();
if ($result['curl_error'])    throw new Exception($result['curl_error']);
if ($result['http_code']!='200')    throw new Exception("HTTP Code = ".$result['http_code']);
if (!$result['body'])        throw new Exception("Body of file is empty");
...............
}
catch (Exception $e)
{
echo $e->getMessage();
}*/
