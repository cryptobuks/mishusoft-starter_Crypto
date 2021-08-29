<?php

// another library : https://github.com/lancedikson/bowser


namespace Mishusoft\Http;

use JsonException;
use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Exceptions\RuntimeException;

class UAAnalyzer extends UAAnalyzer\UAAnalyzerBase
{
    private UAAnalyzer\IdentifiersCollection $identifiers;
    private UAAnalyzer\PatternsCollection $patterns;
    private UAAnalyzer\InformationCollection $resources;

    private int $timeOfExecution;

    /**
     * UAAnalyze constructor.
     *
     * @param string $userAgent User agent string from web browser.
     * @param boolean $matchFound
     * @throws RuntimeException
     */
    public function __construct(
        public string $userAgent,
        private bool  $matchFound = false
    ) {
        parent::__construct();
        $this->timeOfExecution = time();
        $this->identifiers = new UAAnalyzer\IdentifiersCollection();
        $this->patterns = new UAAnalyzer\PatternsCollection();
        $this->resources = new UAAnalyzer\InformationCollection();
    }//end __construct()


    /**
     * Analyze
     *
     * @return UAAnalyzer
     * @throws InvalidArgumentException
     * @throws JsonException
     * @throws PermissionRequiredException
     * @throws RuntimeException
     * @throws \Mishusoft\Exceptions\JsonException
     */
    public function analyze(): static
    {
        //If current user agent are stored in solved list,
        //then we should not solve this,
        //we load the solved data from solve list
        if (array_key_exists($this->userAgent, $this->solvedUA()) === true) {
            $this->makeDetails($this->solvedUA()[$this->userAgent]);
        } else {
            $this->collectUA('development');
            $cleanUA = $this->cleanUA($this->userAgent, $this->identifiers->browsers->knownBrowserAliases());
            $webBrowserIdentifiers = $this->identifiers->browsers->all();
            //User-Agent: Mozilla/5.0 (<system-information>) <platform> (<platform-details>) <extensions>
            foreach ($webBrowserIdentifiers as $identifier) {
                if (preg_match($this->patterns->browsers->match($identifier), $cleanUA, $matches) === 1) {
                    $this->matchFound = true;
                    $details = $this->cleanFilter($matches);
                    $this->browserNameFull = $this->cleanImplode($details);
                    if (array_key_exists('version', $details) === true) {
                        $this->browserVersionFull = $details['version'];
                        $this->browserVersion = $this->versionOrigin($details['version']);
                    }
                    $browserDetails = $this->resources->browsers->makeDetails($identifier);
                    $this->browserName = ucfirst($browserDetails['name']);
                    $this->browserType = $browserDetails['type'];
                    $this->browserUi = $browserDetails['ui'];
                    $this->browserDetails = $browserDetails;

                    // Second step.
                    // Detecting app parents of web browser from user agent.
                    foreach ($this->identifiers->browsers->compatibilitiesAll() as $compatible) {
                        if (preg_match($this->patterns->browsers->compat($compatible), $cleanUA, $matches) === 1) {
                            $details = $this->cleanFilter($matches);
                            $this->browserAppCodeName = $details['name'];
                            $this->browserAppCodeVersion = $this->versionOrigin($details['version']);
                            $this->browserAppCodeVersionFull = $details['version'];
                            break;
                        }
                    }//end foreach

                    // Third step.
                    // Detecting rendering engine from user agent.
                    foreach ($this->identifiers->browsers->browserEnginesAll() as $engine) {
                        if (preg_match($this->patterns->browsers->browserEngine($engine), $cleanUA, $matches) === 1) {
                            $details = $this->cleanFilter($matches);
                            $this->browserEngineName = $details['name'];
                            $this->browserEngineNameFull = $this->cleanImplode($details);
                            $this->browserEngineVersion = $this->versionOrigin($details['version']);
                            $this->browserEngineVersionFull = $this->cleanContent($details['version']);
                            break;
                        }
                    }

                    // Fourth step.
                    // Detecting platform and device architecture from user agent.
                    foreach (array_reverse($this->identifiers->platforms->archAll()) as $architecture => $word) {
                        if (preg_match($this->patterns->platforms->arch($architecture), $cleanUA, $matches) === 1) {
                            $this->browserArchitecture = $word;
                            $this->platformArchitecture = $word;
                            break;
                        }
                    }

                    // Sixth step.
                    // Search window manager name and type from user agent.
                    foreach ($this->identifiers->platforms->windowManagers() as $windowManager) {
                        if (preg_match($this->patterns->platforms->wm($windowManager), $cleanUA, $matches) === 1) {
                            $details = $this->resources->platforms->makeWMDetails($windowManager);
                            $this->platformWindowManager = $details['type'];
                            $this->platformWmNameOriginal = $this->cleanImplode($this->cleanFilter($matches));
                            break;
                        }
                    }

                    // Seventh step.
                    // Detecting platform details in () from user agent.
                    // Platform name type
                    // Ubuntu/8.04 hardy
                    // Ubuntu/8.04
                    // Ubuntu 8.04
                    // Ubuntu x64_86
                    // Ubuntu
                    foreach ($this->identifiers->platforms->all() as $nameIdentifier) {
                        if (preg_match($this->patterns->platforms->name($nameIdentifier), $cleanUA, $matches) === 1) {
                            $details = $this->cleanFilter($matches);

                            $this->platformDetails = $this->resources->platforms->platformDetails($nameIdentifier);
                            $this->platformName = $this->platformDetails['name'];

                            if (strtolower($details['name']) === 'windows') {
                                $this->platformKernel = $this->cleanImplode($this->cleanFilter($matches));
                                $this->platformVersion = $this->versionOrigin($details['version']);
                                $this->platformNameFull = sprintf(
                                    '%s %s',
                                    $this->platformDetails['OS family'],
                                    $this->ntToVersion($details['version'])
                                );
                            } else {
                                $this->platformNameFull = $this->cleanImplode($this->cleanFilter($matches));
                            }
                            break;
                        }//end if
                    }//end foreach


                    // Eighth step.
                    // Detecting device details from user agent.
                    // Device name type
                    foreach ($this->identifiers->devices->all() as $device) {
                        if (preg_match($this->patterns->devices->match($device), $cleanUA, $matches) === 1) {
                            $details = $this->cleanFilter($matches);
                            $this->deviceDetails = $this->resources->devices->makeDetails($device);
                            $this->deviceName = $this->deviceDetails['name'];
                            $this->deviceNameFull = $details['name'];
                            $this->deviceType = $this->deviceDetails['type'];
                            break;
                        }//end if
                    }//end foreach

                    break;
                }//end if
            }//end foreach
        }

        if ($this->matchFound === true) {
            $this->collectUA('solved', $this->details());
        } else {
            $this->collectUA('unsolved');
            // make research for future
        }

        return $this;
    }//end analyze()

    private function makeDetails(array $solvableList):void
    {
        $this->matchFound = $solvableList['solved'];
        $this->timeOfExecution = $solvableList['time'];

        //$this->browserName = $solvableList['browser']['name'];
        $this->browserName = $this->value($solvableList, 'browser.name');
        //$this->browserNameFull = $solvableList['browser']['name-version'];
        $this->browserNameFull = $this->value($solvableList, 'browser.name-version');
        //$this->browserVersion = $solvableList['browser']['version'];
        $this->browserVersion = $this->value($solvableList, 'browser.version');
        //$this->browserVersionFull = $solvableList['browser']['version-full'];
        $this->browserVersionFull = $this->value($solvableList, 'browser.version-full');
        // $this->browserArchitecture = $solvableList['browser']['architecture'];
        $this->browserArchitecture = $this->value($solvableList, 'browser.architecture');
        //$this->browserType = $solvableList['browser']['type'];
        $this->browserType = $this->value($solvableList, 'browser.type');
        //$this->browserUi = $solvableList['browser']['ui'];
        $this->browserUi = $this->value($solvableList, 'browser.ui');

        // $this->browserAppCodeName = $solvableList['browser']['compatibility']['name'];
        $this->browserAppCodeName = $this->value($solvableList, 'browser.compatibility.name');
        //$this->browserAppCodeVersion = $solvableList['browser']['compatibility']['version'];
        $this->browserAppCodeVersion = $this->value($solvableList, 'browser.compatibility.version');
        //$this->browserAppCodeVersionFull = $solvableList['browser']['compatibility']['version-full'];
        $this->browserAppCodeVersionFull = $this->value($solvableList, 'browser.compatibility.version-full');

        // $this->browserEngineName = $solvableList['browser']['engine']['name'];
        $this->browserEngineName = $this->value($solvableList, 'browser.engine.name');
        //$this->browserEngineNameFull = $solvableList['browser']['engine']['name-full'];
        $this->browserEngineNameFull = $this->value($solvableList, 'browser.engine.name-full');
        //$this->browserEngineVersion = $solvableList['browser']['engine']['version'];
        $this->browserEngineVersion = $this->value($solvableList, 'browser.engine.version');
        //$this->browserEngineVersionFull = $solvableList['browser']['engine']['version-full'];
        $this->browserEngineVersionFull = $this->value($solvableList, 'browser.engine.version-full');

        // $this->browserDetails = $solvableList['browser'];
        $this->browserDetails = $this->value($solvableList, 'browser');

        //$this->deviceName = $solvableList['device']['name'];
        $this->deviceName = $this->value($solvableList, 'device.name');
        //$this->deviceNameFull = $solvableList['device']['name-full'];
        $this->deviceNameFull = $this->value($solvableList, 'device.name-full');
        //$this->deviceType = $solvableList['device']['type'];
        $this->deviceType = $this->value($solvableList, 'device.type');

        // $this->deviceDetails = $solvableList['device'];
        $this->deviceDetails = $this->value($solvableList, 'device');

        //$this->platformName = $solvableList['platform']['name'];
        $this->platformName = $this->value($solvableList, 'platform.name');
        //$this->platformNameFull = $solvableList['platform']['name-full'];
        $this->platformNameFull = $this->value($solvableList, 'platform.name-full');
        //$this->platformArchitecture = $solvableList['platform']['architecture'];
        $this->platformArchitecture = $this->value($solvableList, 'platform.architecture');

        //$this->platformWindowManager = $solvableList['platform']['window-manager']['name'];
        $this->platformWindowManager = $this->value($solvableList, 'platform.window-manager.name');
        //$this->platformWmNameOriginal = $solvableList['platform']['window-manager']['name-detected'];
        $this->platformWmNameOriginal = $this->value($solvableList, 'platform.window-manager.name-detected');

        //$this->platformDetails = $solvableList['platform'];
        $this->platformDetails = $this->value($solvableList, 'platform');
    }

    public function details(): array
    {
        if ($this->matchFound === true) {
            unset(
                $this->browserDetails['name'],
                $this->browserDetails['name-version'],
                $this->browserDetails['version'],
                $this->browserDetails['version-full'],
                $this->browserDetails['architecture'],
                $this->browserDetails['compatibility']['name'],
                $this->browserDetails['compatibility']['version'],
                $this->browserDetails['compatibility']['version-full'],
                $this->browserDetails['engine']['name'],
                $this->browserDetails['engine']['name-full'],
                $this->browserDetails['engine']['version'],
                $this->browserDetails['engine']['version-full'],
                $this->browserDetails['ui'],
                $this->browserDetails['type'],
                $this->deviceDetails['name'],
                $this->deviceDetails['name-full'],
                $this->deviceDetails['type'],
                $this->platformDetails['name'],
                $this->platformDetails['name-full'],
                $this->platformDetails['architecture'],
                $this->platformDetails['window-manager']['name'],
                $this->platformDetails['window-manager']['name-detected'],
            );
            return [
                'ua' => $this->userAgent,
                'solved' => $this->matchFound,
                'time' => $this->timeOfExecution,
                'browser' => array_merge_recursive(
                    [
                        'name' => $this->browserName,
                        'name-version' => $this->browserNameFull,
                        'version' => $this->browserVersion,
                        'version-full' => $this->browserVersionFull,
                        'architecture' => $this->browserArchitecture,
                        'type' => $this->browserType,
                        'ui' => $this->browserUi,
                        'compatibility' => [
                            'name' => $this->browserAppCodeName,
                            'version' => $this->browserAppCodeVersion,
                            'version-full' => $this->browserAppCodeVersionFull,
                        ],
                        'engine' => [
                            'name' => $this->browserEngineName,
                            'name-full' => $this->browserEngineNameFull,
                            'version' => $this->browserEngineVersion,
                            'version-full' => $this->browserEngineVersionFull,
                        ],
                    ],
                    $this->browserDetails,
                ),
                'device' => array_merge_recursive(
                    [
                        'name' => $this->deviceName,
                        'name-full' => $this->deviceNameFull,
                        'type' => $this->deviceType,
                    ],
                    $this->deviceDetails
                ),
                'platform' => array_merge_recursive(
                    [
                        'name' => $this->platformName,
                        'name-full' => $this->platformNameFull,
                        'architecture' => $this->platformArchitecture,
                        'window-manager' => [
                            'name' => $this->platformWindowManager,
                            'name-detected' => $this->platformWmNameOriginal,
                        ],
                    ],
                    $this->platformDetails
                ),
            ];
        }

        return [
            'ua' => $this->userAgent,
            'solved' => $this->matchFound,
            'time' => $this->timeOfExecution,
        ];
    }

    /**
     * @return string
     */
    public function getBrowserAppCodeName(): string
    {
        return $this->browserAppCodeName;
    }

    /**
     * @return string
     */
    public function getBrowserAppCodeVersion(): string
    {
        return $this->browserAppCodeVersion;
    }

    /**
     * @return string
     */
    public function getBrowserArchitecture(): string
    {
        return $this->browserArchitecture;
    }

    /**
     * @return string
     */
    public function getBrowserEngineName(): string
    {
        return $this->browserEngineName;
    }

    /**
     * @return string
     */
    public function getBrowserEngineNameFull(): string
    {
        return $this->browserEngineNameFull;
    }

    /**
     * @return string
     */
    public function getBrowserEngineVersion(): string
    {
        return $this->browserEngineVersion;
    }


    /**
     * @return string
     */
    public function getBrowserName(): string
    {
        return $this->browserName;
    }

    /**
     * @return string
     */
    public function getBrowserNameFull(): string
    {
        return $this->browserNameFull;
    }

    /**
     * @return string
     */
    public function getBrowserVersion(): string
    {
        return $this->browserVersion;
    }

    /**
     * @return string
     */
    public function getBrowserVersionFull(): string
    {
        return $this->browserVersionFull;
    }

    /**
     * @return string
     */
    public function getDeviceName(): string
    {
        return $this->deviceName;
    }

    public function getDeviceNameWithArch():string
    {
        return $this->deviceName . ' ' . $this->platformArchitecture;
    }

    /**
     * @return string
     */
    public function getDeviceNameFull(): string
    {
        return $this->deviceNameFull;
    }

    /**
     * @return string
     */
    public function getDeviceType(): string
    {
        return $this->deviceType;
    }

    /**
     * @return string
     */
    public function getUserAgent(): string
    {
        return $this->userAgent;
    }

    /**
     * @return string
     */
    public function getPlatformName(): string
    {
        return $this->platformName;
    }

    /**
     * @return string
     */
    public function getPlatformNameFull(): string
    {
        return $this->platformNameFull;
    }

    /**
     * @return string
     */
    public function getPlatformArchitecture(): string
    {
        return $this->platformArchitecture;
    }

    /**
     * @return string
     */
    public function getPlatformWindowManager(): string
    {
        return $this->platformWindowManager;
    }

    /**
     * @return string
     */
    public function getPlatformWmNameOriginal(): string
    {
        return $this->platformWmNameOriginal;
    }

    /**
     * @return int
     */
    public function getTimeOfExecution(): int
    {
        return $this->timeOfExecution;
    }

    /**
     * @return string
     */
    public function getBrowserAppCodeVersionFull(): string
    {
        return $this->browserAppCodeVersionFull;
    }

    /**
     * @return mixed
     */
    public function getBrowserType(): mixed
    {
        return $this->browserType;
    }

    /**
     * @return mixed
     */
    public function getBrowserUi(): mixed
    {
        return $this->browserUi;
    }
}//end class
