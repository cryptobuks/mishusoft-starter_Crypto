<?php

    namespace Mishusoft\Http\UAAnalyzer;

    use Mishusoft\Exceptions\PermissionRequiredException;
    use Mishusoft\Exceptions\RuntimeException;
    use Mishusoft\Http\IP;
    use Mishusoft\Storage;
    use Mishusoft\System\Base;
    use Mishusoft\System\CacheManager as Cache;

    class UAAnalyzerBase extends Base
    {
        private const USER_AGENT_HISTORY_LINK = 'https://webaim.org/blog/user-agent-string-history/';

        /**
         * user agent of current user
         *
         * @var string
         */
        protected string $userAgent;

        /**
         * Replace pair list for user agent
         *
         * @var array|string[]
         */
        protected array $replace_pairs = ['/' => ' ', '-' => '.', '_' => '.'];
        /**
         * Common version prefix list
         *
         * @var array|string[]
         */
        protected array $versionPrefix = ['v' => '', 'y' => '', 'yb' => '', 'nt' => '',];

        protected string     $browserName               = 'Unknown';
        protected string     $browserNameFull           = 'Unknown';
        protected string     $browserVersionFull        = 'Unknown';
        protected string     $browserVersion            = 'Unknown';
        protected string     $browserAppCodeName        = 'Unknown';
        protected string     $browserAppCodeVersion     = 'Unknown';
        protected string     $browserAppCodeVersionFull = 'Unknown';
        protected string     $browserEngineName         = 'Unknown';
        protected int|string $browserEngineVersion      = 'Unknown';
        protected string     $browserEngineVersionFull  = 'Unknown';
        protected string     $browserEngineNameFull     = 'Unknown';
        protected string     $browserArchitecture       = 'Unknown';
        protected mixed      $browserType               = 'Unknown';
        protected mixed      $browserUi                 = 'Unknown';
        protected array      $browserDetails            = [];


        protected string $platformName           = 'Unknown';
        protected string $platformNameFull       = 'Unknown';
        protected string $platformArchitecture   = 'Unknown';
        protected string $platformWindowManager  = 'Unknown';
        protected string $platformWmNameOriginal = 'Unknown';
        protected string $platformKernel         = 'Unknown';
        protected string $platformVersion        = 'Unknown';
        protected array  $platformDetails        = [];

        protected string $deviceName     = 'Unknown';
        protected string $deviceNameFull = 'Unknown';
        protected string $deviceType     = 'Unknown';
        protected array  $deviceDetails  = [];

        protected string $uaStoragePath;

        /**
         * Allowed domains for mishusoft
         *
         * @var array|string[]
         */
        protected array $allowedDomains = [
            'mishusoft.com',
            'dev.mishusoft.com',
            'www.mishusoft.com',
            'localhost',
        ];

        protected string $uaAllFile;
        protected string $uaSolvableListFile;
        protected string $uaUnsolvableListFile;
        private string   $todayDateOnly;
        private string   $todayTimeOnly;


        protected array $configs = [
            'browsers'  => [
                'analysers',
                'applications',
                'browsers',
                'browsers-engines',
                'bots',
                'compatibilities',
                'cloud-platforms',
                'email-clients',
                //'email-collectors',
                'feed-readers',
                //'link-checkers',
                //'libraries',
                'multimedia-players',
                'offline-browsers',
                'tools',
                //'validators',
            ],
            'devices'   => [
                'categories',
            ],
            'platforms' => [
                'architectures',
                'os',
                'wm',
            ],
            'resources' => [
                'analysers',
                'applications',
                'authors',
                'bots',
                'browsers',
                'browsers-engines',
                'compatibilities',
                'cloud-platforms',
                'devices',
                'email-clients',
                //'email-collectors',
                'feed-readers',
                'licences',
                //'link-checkers',
                //'libraries',
                'multimedia-players',
                'offline-browsers',
                'platforms',
                'tools',
                'wm',
                //'validators',
            ],
        ];

        /**
         * @throws RuntimeException
         */
        public function __construct()
        {
            parent::__construct();
            // $this->fileType = 'json';
            $this->uaStoragePath = sprintf('%1$s%2$s%3$s', path_storage_system('data.drive'), 'UAAnalyzer', DS);
            $this->todayDateOnly = date('Y-m-d');
            $this->todayTimeOnly = date('H:i:s');

            $this->uaAllFile            = $this->cacheFile('ua.list.all');
            $this->uaSolvableListFile   = $this->cacheFile('ua.list.solved');
            $this->uaUnsolvableListFile = $this->cacheFile('ua.list.unsolved');

            Storage\FileSystem::makeDirectory($this->uaStoragePath);

            $this->directoryValidation();
        }

        protected function cacheFile(string $name): string
        {
            return dFile(Cache::directiveDataFile('UAAnalyzer', $this->makeFile($name)));
        }

        /**
         * Make cache file
         *
         * @param string $name File name
         *
         * @return string
         */
        protected function makeFile(string $name): string
        {
            // sprintf('%1$s/%2$s', $underTakenAction, sha1(IP::get()) )
            // return sprintf('%1$s%3$s%2$s', $name, $this->todayDateOnly, DS);
            return sprintf(
                '%1$s%3$s%2$s',
                $name,
                sprintf('%1$s%3$s%2$s', $this->todayDateOnly, sha1(get_http_user_agent()), DS),
                DS
            );
        }

        /**
         * @throws RuntimeException
         */
        private function directoryValidation(): void
        {
            if (file_exists(path_storage('internal')) === false) {
                throw new RuntimeException(sprintf('%s not exists', path_storage('internal')));
            }
            if (file_exists($this->uaStoragePath) === false) {
                throw new RuntimeException(sprintf('%s not exists', $this->uaStoragePath));
            }
        }

        /**
         * @return string[][]
         */
        protected function solvedUA(): array
        {
            $result = [];
            $files  = query(dirname($this->uaSolvableListFile));

            if ($files !== []) {
                foreach ($files as $file) {
                    if (get_file_ext($file) === self::SYSTEM_DEFAULT_FILE) {
                        $temp = parse_msf_file($file);
                        if ($temp !== []) {
                            foreach ($temp as $key => $value) {
                                $result[$key] = $value;
                            }
                        }
                    }
                }
            }

            return $result;
        }


        /**
         * Store user agent into a file
         *
         * @param string $category Category name of stored user agent.
         * @param array  $details
         *
         * @return void
         * @throws PermissionRequiredException
         * @throws RuntimeException
         */
        protected function collectUA(string $category, array $details = []): void
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
                $this->write($this->uaUnsolvableListFile);
            } elseif ($category === 'solved') {
                $this->write($this->uaSolvableListFile, $details);
            } else {
                $this->write($this->uaAllFile);
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
         *
         * @return string
         */
        protected function trimImplode(array $array): string
        {
            return trim(preg_replace('/\s+/', ' ', implode(array_values($array))));
        }

        /**
         * @param array $array
         *
         * @return string
         */
        protected function cleanImplode(array $array): string
        {
            return $this->cleanContent($this->trimImplode($array));
        }

        /**
         * @param string $string
         * @param array  $replace_pairs
         *
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
         *
         * @return string
         */
        protected function fullCleanContent(string $string): string
        {
            $string = strtolower($string);
            $string = preg_replace('/\s+/', '', $string);
            return $this->cleanContent(
                $this->cleanContent($string, $this->versionPrefix)
            );
        }

        /**
         * @param string|int $versionFull
         *
         * @return int
         */
        protected function versionOrigin(string|int $versionFull): int
        {
            $result = 0;

            if (is_string($versionFull)) {
                $versionFull = $this->fullCleanContent($versionFull);
            }

            if (is_string($versionFull) && str_contains($versionFull, '.')) {
                $position = strpos($versionFull, '.');
                if (is_int($position)) {
                    $result = (int)substr($versionFull, 0, $position);
                }
            } elseif (is_int($versionFull)) {
                $result = $versionFull;
            } else {
                $result = (int)$versionFull;
            }

            return $result;
        }

        /**
         * @param string $versionFull
         *
         * @return float|int|string
         */
        protected function ntToVersion(string $versionFull): float|int|string
        {
            return match ($this->fullCleanContent($versionFull)) {
                '6.0'   => 'vista',
                '6.1'   => 7,
                '6.2'   => 8,
                '6.3'   => 8.1,
                '10.0'  => 10,
                '11.0'  => 11,
                default => 0
            };
        }


        /**
         * Write user agent into file.
         *
         * @param string $filename Stored filename.
         * @param array  $details
         *
         * @return void
         * @throws PermissionRequiredException
         * @throws RuntimeException Throw exception on runtime error.
         */
        private function write(string $filename, array $details = []): void
        {
            $requestedFileDirectory = dirname($filename);
            Storage\FileSystem::makeDirectory($requestedFileDirectory);
            if (is_writable($requestedFileDirectory) === true) {
                $solvedDetails = [];
                if (file_exists($filename)) {
                    $solvedDetails = parse_msf_file($filename);
                }//end if

                if (basename(dirname($filename, 2)) === 'ua.list.solved') {
                    if ($details !== []) {
                        $solvedDetails[$details['ua']] = $details;
                        emit_msf_file($filename, $solvedDetails);
                    }//end if
                } else {
                    // set new data for current unsolved user agent
                    $solvedDetails[IP::get()][] = ['time' => $this->todayTimeOnly, 'carrier' => $this->userAgent, 'url' => get_visited_current_page()];
                    emit_msf_file($filename, $solvedDetails);
                }//end if
            } else {
                throw new PermissionRequiredException(
                    sprintf('Unable to write or read "%s"', $requestedFileDirectory)
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
         *
         * @return string
         */
        protected function strip(string $string): string
        {
            return trim(preg_replace('/\s+/', ' ', $string));
        }

        /**
         * @param array  $array
         * @param string $key
         *
         * @return array|int|string
         */
        protected function value(array $array, string $key): array|int|string
        {
            return array_value($array, $key);
        }


        /**
         * @param array $dictionaries
         *
         * @return array
         */
        protected function merge(array $dictionaries): array
        {
            $result = [];
            foreach ($dictionaries as $dictionary) {
                if (is_array($dictionary) === true) {
                    foreach ($dictionary as $value) {
                        $result[] = $value;
                    }
                }
            }
            return $result;
        }
    }
