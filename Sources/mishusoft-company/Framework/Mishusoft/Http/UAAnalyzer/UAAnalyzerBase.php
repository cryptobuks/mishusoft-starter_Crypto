<?php


namespace Mishusoft\Http\UAAnalyzer;

use Mishusoft\Base;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage;

class UAAnalyzerBase extends Base
{

    private const USER_AGENT_HISTORY_LINK = 'https://webaim.org/blog/user-agent-string-history/';

    protected string $userAgent;

    protected array $replace_pairs = ['/' => ' ', '-' => '.', '_' => '.'];

    protected string $browserName = 'Unknown';
    protected string $browserNameFull = 'Unknown';
    protected string $browserVersionFull = 'Unknown';
    protected string $browserVersion = 'Unknown';
    protected string $browserAppCodeName = 'Unknown';
    protected string $browserAppCodeVersion = 'Unknown';
    protected string $browserAppCodeVersionFull = 'Unknown';
    protected string $browserEngineName = 'Unknown';
    protected string $browserEngineVersion = 'Unknown';
    protected string $browserEngineVersionFull = 'Unknown';
    protected string $browserEngineNameFull = 'Unknown';
    protected string $browserArchitecture = 'Unknown';
    protected mixed $browserType = 'Unknown';
    protected mixed $browserUi = 'Unknown';
    protected array $browserDetails = [];


    protected string $platformName = 'Unknown';
    protected string $platformNameFull = 'Unknown';
    protected string $platformArchitecture = 'Unknown';
    protected string $platformWindowManager = 'Unknown';
    protected string $platformWmNameOriginal = 'Unknown';
    protected string $platformKernel = 'Unknown';
    protected string $platformVersion = 'Unknown';
    protected array $platformDetails = [];

    protected string $deviceName = 'Unknown';
    protected string $deviceNameFull = 'Unknown';
    protected string $deviceType = 'Unknown';
    protected array $deviceDetails = [];

    protected string $uaStoragePath;
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

    /**
     * @throws RuntimeException
     */
    public function __construct()
    {
        parent::__construct();
        $this->uaStoragePath = Storage::dataDriveStoragesPath() . 'UAAnalyzer' . DS;
        $this->timeOfToday = date('Y-m-d H:i:s');

        $this->directoryValidation();
    }

    /**
     * @throws RuntimeException
     */
    private function directoryValidation(): void
    {
        if (file_exists(Storage::frameworkStoragesPath()) === false) {
            throw new RuntimeException(sprintf('%s not exists', Storage::frameworkStoragesPath()));
        }
        if (file_exists($this->uaStoragePath) === false) {
            throw new RuntimeException(sprintf('%s not exists', $this->uaStoragePath));
        }
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
            throw new RuntimeException('Unexpected category : ' . $category);
        }


        if ($category === 'unsolved') {
            $this->write(Storage::cachesStoragesPath().'UAAnalyzerData' . DIRECTORY_SEPARATOR . 'ua.list.unsolved.csv');
        } elseif ($category === 'solved') {
            $this->write(Storage::cachesStoragesPath().'UAAnalyzerData' . DIRECTORY_SEPARATOR . 'ua.list.solved.csv');
        } else {
            $this->write(Storage::cachesStoragesPath().'UAAnalyzerData' . DIRECTORY_SEPARATOR . 'ua.list.all.csv');
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
    protected function trimImplode(array $array): string
    {
        return trim(preg_replace('/\s+/', ' ', implode(array_values($array))));
    }

    /**
     * @param array $array
     * @return string
     */
    protected function cleanImplode(array $array): string
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
     * @param string $string
     * @return string
     */
    protected function fullCleanContent(string $string): string
    {
        $string = strtolower($string);
        $string = preg_replace('/\s+/', '', $string);
        return $this->cleanContent(
            $this->cleanContent($string, ['v' => '', 'y' => '', 'yb' => '', 'nt' => '',])
        );
    }

    /**
     * @param string|int $versionFull
     * @return int
     */
    protected function versionOrigin(string|int $versionFull): int
    {
        $versionFull = $this->fullCleanContent($versionFull);
        if (str_contains($versionFull, '.')) {
            $result = substr($versionFull, 0, strpos($versionFull, '.'));
        } elseif (is_int($versionFull)) {
            $result = $versionFull;
        } else {
            $result = (int) $versionFull;
        }

        return $result;
    }

    /**
     * @param string $versionFull
     * @return int|string
     */
    protected function ntToVersion(string $versionFull): int|string
    {
        return match ($this->fullCleanContent($versionFull)) {
            '6.0' => 'vista',
            '6.1' => 7,
            '6.2' => 8,
            '6.3' => 8.1,
            '10.0' => 10,
            default => 0
        };
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

        Storage\FileSystem::makeDirectory($requestedFileDirectory);

        // Write or append data into file.
        if (is_writable($requestedFileDirectory) === true) {
            if (file_exists($filename) === true) {
                $resource = fopen($filename, 'rb+');
            } else {
                $resource = fopen($filename, 'wb+');
            }

            $contents = file_get_contents($filename);

            if ($contents === '') {
                $contents .= '"Date", "Client", "User-Agent"' . PHP_EOL;
            }

            // $contents .= sprintf('"%s","%s","%s"', $this->timeOfToday, IP::get(), $this->userAgent).PHP_EOL;
            $contents .= sprintf('""%s","%s","%s""', $this->timeOfToday, "127.0.0.1", $this->userAgent) . PHP_EOL;

            if (is_writable($filename) === true) {
                fwrite($resource, $contents);
                fclose($resource);

                exec('chmod -R 777 ' . $filename);
            } else {
                throw new PermissionRequiredException('Permission required. Unable to write or read ' . $filename);
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

    /**
     * @param string $string
     * @return string
     */
    protected function strip(string $string): string
    {
        return trim(preg_replace('/\s+/', ' ', $string));
    }
}
