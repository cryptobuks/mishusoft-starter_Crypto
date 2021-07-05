<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer;

use Mishusoft\Framework\Chipsets\Exceptions\PermissionRequiredException;
use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;

class UAAnalyzerBase
{
    // Root path of data path
    public const USER_AGENT_ANALYZE_DATA_PATH = RUNTIME_CACHE_ROOT_PATH . 'UAAnalyzerData' . DIRECTORY_SEPARATOR;

    // File list of various collected data.
    // Files of received, solved and unsolved ua list.
    public const USER_AGENT_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'ua.list.csv';
    public const UNSOLVED_USER_AGENT_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'ua.list.unsolved.csv';
    public const SOLVED_USER_AGENT_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'ua.list.solved.csv';

    // Files of browsers name, app code and layout list.
    public const WEB_BROWSER_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'browser.all.list.json';
    public const WEB_BROWSER_APP_CODE_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'browser.app.code.list.json';
    public const WEB_BROWSER_LAYOUT_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'browser.layout.list.json';

    // Files of devices name, category, platform, architectures list.
    public const DEVICES_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'devices.list.json';
    public const DEVICES_CATEGORY_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'devices.category.list.json';
    public const DEVICES_PLATFORM_WM_NAME_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'devices.platform.wmn.list.json';
    public const DEVICES_ARCHITECTURE_LIST_FILE = self::USER_AGENT_ANALYZE_DATA_PATH . 'devices.architecture.list.json';

    private const USER_AGENT_HISTORY_LINK ='https://webaim.org/blog/user-agent-string-history/';

    protected string $userAgent;

    protected array $replace_pairs = array('/'=>' ','-'=>'.','_'=>'.');

    protected string $deviceName='Unknown';
    protected string $browserName='Unknown';
    protected string $browserNameFull='Unknown';
    protected string $browserVersionFull='Unknown';
    protected string $browserVersion='Unknown';
    protected array $browserInfoAll=[];
    protected string $browserAppCodeName='Unknown';
    protected string $browserAppCodeVersion='Unknown';
    protected string $browserAppCodeVersionFull='Unknown';
    protected string $browserEngineName='Unknown';
    protected string $browserEngineVersion='Unknown';
    protected string $browserEngineNameFull='Unknown';
    protected string $browserArchitecture='Unknown';


    protected string $platformName='Unknown';
    protected string $platformNameFull='Unknown';
    protected string $platformArchitecture='Unknown';
    protected string $platformWindowManager='Unknown';
    protected string $platformWmNameOriginal='Unknown';

    protected string $deviceNameFull='Unknown';
    protected string $deviceType='Unknown';


    // Variables.
    protected array $devicesList=[];
    protected array $devicesArchitectureList=[];
    protected array $devicesCategoryList=[];
    protected array $devicesPlatformWMNameList=[];
    protected array $webBrowserList=[];
    protected array $webBrowserAppCodeNameList=[];
    protected array $webBrowserLayoutList=[];

    protected string $timeOfToday;

    /**
     * Allowed domains for mishusoft
     */
    protected array $allowedDomains = [
        'mishusoft.com',
        'dev.mishusoft.com',
        'www.mishusoft.com',
        'localhost',
    ];

    public function __construct()
    {
        $this->timeOfToday = date('Y-m-d H:i:s');
    }


    /**
     * Store user agent into a file
     *
     * @param string $category Category name of stored user agent.
     *
     * @return void
     * @throws RuntimeException Throw exception on runtime error.
     * @throws PermissionRequiredException
     */
    protected function collectUA(string $category): void
    {
        $allowed = [
            'unsolved',
            'solved',
            'development',
        ];
        if (in_array($category, $allowed) === false) {
            throw new RuntimeException('Unexpected category : '.$category);
        }

        if ($category === 'unsolved') {
            $this->write(self::UNSOLVED_USER_AGENT_LIST_FILE);
        } elseif ($category === 'solved') {
            $this->write(self::SOLVED_USER_AGENT_LIST_FILE);
        } else {
            $this->write(self::USER_AGENT_LIST_FILE);
        }
    }//end collectUA()

    /**
     * Make user agent string lowercase, and replace browser aliases.
     *
     * @param string $string The dirty user agent string.
     *
     * @return string Returns the clean user agent string.
     */
    protected function cleanUA(string $string, array $replace_pairs): string
    {
        return $this->cleanContent($string, $replace_pairs);
    }//end cleanUA()

    /**
     * @param array $array
     * @return string
     */
    protected function trimImplode(array $array):string
    {
        return trim(preg_replace('/\s+/', ' ', implode(array_values($array))));
    }

    /**
     * @param array $array
     * @return string
     */
    protected function cleanImplode(array $array):string
    {
        return $this->cleanContent($this->trimImplode($array));
    }

    /**
     * @param string $string
     * @param array $replace_pairs
     * @return string
     */
    protected function cleanContent(string $string, array $replace_pairs = []): string
    {
        // Clean up the string.
        $string = trim($string);
        // Replace browser names with their aliases.
        if (count($replace_pairs) > 0) {
            return strtr($string, $replace_pairs);
        }
        return strtr($string, $this->replace_pairs);
    }

    /**
     * @param string $versionFull
     * @return int
     */
    protected function versionOrigin(string|int $versionFull):int
    {
        $versionFull = $this->cleanContent($versionFull, array('v'=>'','y'=>'','yb\\'=>'','nt\\'=>'',));
        $versionFull = $this->cleanContent($versionFull);
        if (str_contains($versionFull, '.')) {
            $result = substr($versionFull, 0, strpos($versionFull, '.'));
        } elseif (is_int($versionFull)) {
            $result = $versionFull;
        } else {
            $result = 0;
        }

        print_r($result, false);
        return $result;
    }



    /**
     * Write user agent into file.
     *
     * @param string $filename Stored filename.
     *
     * @return void
     * @throws RuntimeException Throw exception on runtime error.
     * @throws PermissionRequiredException
     */
    private function write(string $filename): void
    {
        // Verify file directory existent.
        $requestedFileDirectory = dirname($filename);

        if (file_exists($requestedFileDirectory) === false) {
            if (mkdir($requestedFileDirectory, 0777, true) === false
                && is_dir($requestedFileDirectory) === false
            ) {
                throw new RuntimeException(sprintf('Directory "%s" was not created', $requestedFileDirectory));
            }

            if (exec('chmod -R 777 '.$requestedFileDirectory) === false) {
                throw new PermissionRequiredException(
                    sprintf('Unable to change permission of "%s"', $requestedFileDirectory)
                );
            }
        }

        // Write or append data into file.
        if (is_writable($requestedFileDirectory) === true) {
            if (file_exists($filename) === true) {
                $resource = fopen($filename, 'rb+');
            } else {
                $resource = fopen($filename, 'wb+');
            }

            $contents = file_get_contents($filename);

            if ($contents === '') {
                $contents .= "'Date', 'Client', 'User-Agent'".PHP_EOL;
            }

            // $contents .= sprintf('"%s","%s","%s"', $this->timeOfToday, IP::get(), $this->userAgent).PHP_EOL;
            $contents .= sprintf("'%s','%s','%s'", $this->timeOfToday, '127.0.0.1', $this->userAgent).PHP_EOL;

            if (is_writable($filename) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                exec('chmod -R 777 '.$filename);
            } else {
                throw new PermissionRequiredException('Permission required. Unable to write or read '.$filename);
            }
        } else {
            throw new PermissionRequiredException(
                sprintf('Permission required. Unable to write or read "%s"', $requestedFileDirectory)
            );
        }//end if
    }//end write()



    /**
     * Quote any string
     *
     * @param string $string String for quote.
     *
     * @return string
     */
    protected function quote(string $string): string
    {
        return preg_quote($string, PREG_QUOTE_DEFAULT_SEPARATOR);
    }//end quote()


    /**
     * Filter array.
     *
     * @param array $array Array data.
     *
     * @return array
     */
    protected function filter(array $array): array
    {
        return array_values(array_filter($array));
    }//end filter()


    /**
     * Filter array.
     *
     * @param array $array Array data.
     *
     * @return array
     */
    protected function cleanFilter(array $array): array
    {
        $result = [];
        foreach ($array as $key => $value) {
            if (is_string($key) === true) {
                $result[$key] = $value;
            }
        }

        return $result;
    }//end cleanFilter()

    protected function strip(string $string):string
    {
        return trim(preg_replace('/\s+/', ' ', $string));
    }
}
