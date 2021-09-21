<?php

namespace Mishusoft\System\Firewall;

use GeoIp2\Exception\AddressNotFoundException;
use MaxMind\Db\Reader\InvalidDatabaseException;
use Mishusoft\Base;
use Mishusoft\Exceptions\HttpException\HttpResponseException;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\Http\IP;
use Mishusoft\Registry;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Log;
use Mishusoft\System\Time;

abstract class FirewallBase extends Base
{
    use Config;
    use Assets;

    /**
     * Firewall configuration array.
     *
     * @var array
     */
    protected array $config = [];


    /**
     * @var array|string
     */
    protected static array|string $messageOfBlock = '';

    /**
     * Check if access request is granted, else return false
     *
     * @var boolean
     */
    protected bool $accessRequestProcessed = false;

    /**
     * Action status.
     * @var string
     */
    protected string $actionStatus = '';

    /**
     * Action component.
     *
     * @var string
     */
    protected string $actionComponent = '';

    /**
     * Message table.
     *
     * @var string
     */
    protected string $msgTab = '';

    /**
     * Duration
     *
     * @var string|int
     */
    protected string|int $duration = '';

    /**
     * Controller.
     *
     * @var string
     */
    protected string $controller = '';

    /**
     * Separator.
     *
     * @var string
     */
    protected string $separator = '';

    /**
     * Last visited duration.
     *
     * @var integer
     */
    protected int $lastVisitDuration = 0;


    /**
     * Firewall config loader.
     *
     * @return void
     * @throws PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function loadConfig(): void
    {
        //Create directory log and config if not exists.
        FileSystem::directoryCreate([self::logDirective(self::logDirectory()),dirname(self::configFile())]);
        //Check firewall configuration file existent.
        FileSystem::check(self::configFile(), function ($filename) {
            FileSystem\Yaml::emitFile($filename, []);
        });

        //Check read permission of configuration file.
        Log::info(sprintf('Start checking read permission of %s.', self::configFile()));
        if (is_readable(self::configFile()) === true) {
            //check configuration file's content are valid array
            $oldConfiguration = FileSystem\Yaml::parseFile(self::configFile());
            Log::info(
                sprintf(
                    'Start of test whether the content of %s file can be converted to array format.',
                    self::configFile()
                )
            );
            if (is_array($oldConfiguration) === true) {
                Log::info(sprintf('Converted %s for content into array format.', self::configFile()));
                Log::info(sprintf('Load array format content into runtime from %s.', self::configFile()));
                $this->config = $oldConfiguration;
            }

            Log::info(
                sprintf(
                    'End of test whether the content of %s file can be converted to array format.',
                    self::configFile()
                )
            );
            /*
             * Check the firewall configuration is empty or not
             * if it empties, then configuration reset with default
             */

            Log::info(sprintf('Start checking whether the %s file is empty.', self::configFile()));
            if (count($this->config) > 0) {
                /*
                 * we need to array match
                 * if return false, then we need to replace and continue
                 */

                Log::info('Check different of runtime configuration and required keys.');
                if (count(array_diff_assoc($this->requiredProperties(), $this->config)) > 0) {
                    Log::info('Different found from runtime configuration and required keys.');
                    $replaced = array_replace_recursive($this->config, $this->requiredProperties());
                    if ($replaced !== null) {
                        Log::notice('Load changed configuration into runtime configuration.');
                        $this->config = $replaced;
                    }
                }
            } else {
                //merge to default configuration
                Log::alert(sprintf('The content of %s is not empty.', self::configFile()));
                Log::notice('Merging default configuration into runtime configuration.');
                $this->config = array_merge_recursive($this->requiredProperties(), $this->defaultProperties());
            }//end if

            Log::info(sprintf('End checking whether the %s file is empty.', self::configFile()));
            /*
             * if loaded firewall configuration is not valid array,
             * then delete configuration file and write new default data
             */

            Log::info('Check required attribute of runtime configuration.');
            if (count($this->config) === 10) {
                Log::notice('Attribute missing found from runtime configuration.');
                $config = array_replace_recursive($this->config, $this->defaultProperties());
                if ($config !== null) {
                    Log::notice('Load changed configuration into runtime configuration.');
                    $this->config = $config;
                }
            }
            /*
             * if firewall configuration file is empty,
             * then create configuration file and write new default data
             */

            Log::info(sprintf('Check content array conversation of %s.', self::configFile()));
            if (is_array(FileSystem\Yaml::parseFile(self::configFile())) === true) {
                $firewallArrayKeys = array_keys($this->config);
                $firewallFileArrayKeys = array_keys(FileSystem\Yaml::parseFile(self::configFile()));

                Log::notice('Check different of runtime configuration and stored configuration.');
                if (count(array_diff_assoc($firewallArrayKeys, $firewallFileArrayKeys)) > 0) {
                    Log::notice('Write the difference of runtime configuration and stored configuration.');
                    $this->createConfiguration($this->config);
                }
            } else {
                Log::alert('Write current runtime configuration.');
                $this->createConfiguration($this->config);
            }
        } else {
            Log::error(sprintf('Read permission required. Unable to read %s.', self::configFile()));
            throw new PermissionRequiredException('Read permission required. Unable to read root' . self::configFile());
        }//end if

        Log::info(sprintf('End checking read permission of %s.', self::configFile()));
    }//end loadConfig()


    /**
     * Create configuration file.
     *
     * @param array $config Array format of Firewall configuration.
     *
     * @return void
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function createConfiguration(array $config): void
    {
        Log::info('Check runtime configuration file existent.');
        if (file_exists(self::configFile()) === true) {
            Log::alert('Remove exists runtime configuration file.');
            FileSystem::remove(self::configFile());
        }

        Log::notice(sprintf('Write firewall configuration into %s.', self::configFile()));
        FileSystem\Yaml::emitFile(self::configFile(), $config);
    }//end createConfiguration()


    /**
     * @return array[]
     * @throws HttpResponseException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    protected function getNewVisitor(): array
    {
        return  [
            'ip'        => IP::get(),
            'country'   => IP::getCountry(),
            'location'  => IP::getInfo(),
            'device'    => Registry::Browser()->getDeviceNameWithArch(),
            'browser'   => Registry::Browser()->getBrowserNameFull(),
            'UUAS'      => Registry::Browser()->getUserAgent(),
            'url'       => Registry::Browser()::VisitedPageURL($_SERVER),
            'status'    => $this->actionStatus,
            'component' => $this->actionComponent,
            'visit-time' => Time::today(),
        ];
    }//end getNewVisitorTimeBased()


    /**
     * @return array[]
     * @throws HttpResponseException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    protected function getNewVisitorTimeBased(): array
    {
        return [Time::today() => $this->getNewVisitor(),];
    }//end getNewVisitorTimeBased()


    /**
     * @return \array[][]
     * @throws HttpResponseException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    protected function getNewVisitorBrowserBased(): array
    {
        return [Registry::Browser()->getBrowserNameFull() => $this->getNewVisitorTimeBased()];
    }//end getNewVisitorBrowserBased()


    /**
     * @return \array[][][]
     * @throws HttpResponseException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     */
    protected function getNewVisitorIPBased(): array
    {
        return [IP::get() => $this->getNewVisitorBrowserBased()];
    }//end getNewVisitorIPBased()



    /**
     * @throws HttpResponseException
     * @throws PermissionRequiredException
     * @throws AddressNotFoundException
     * @throws InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function storeFirewallLogs(): void
    {
        $logs = [];
        $logDataFile = self::logFile($this->actionStatus);
        $currentVisitor = $this->getNewVisitorIPBased();
        $browserNameFull = Registry::Browser()->getBrowserNameFull();

//        Debug::preOutput($logDataFile);
//        Debug::preOutput(dirname($logDataFile));
//        FileSystem::makeDirectory(dirname($logDataFile));

        if (is_writable(dirname($logDataFile)) === true) {
            //check point for log file content length
            if ((file_exists($logDataFile) === true) && FileSystem::read($logDataFile) !== '') {
                $oldContent = FileSystem\Yaml::parseFile($logDataFile);

                //Merge file's content with logs
                if (is_array($oldContent) === true) {
                    $logs = array_merge($logs, $oldContent);
                }//end if

                if (count($logs) !== 0) {
                    if (array_key_exists(IP::get(), $logs) === true) {
                        if (array_key_exists($browserNameFull, $logs[IP::get()]) === true) {
                            if (array_key_exists(Time::today(), $logs[IP::get()][$browserNameFull]) === false) {
                                // Append current(new) access data of current client to logs file.
                                $logs[IP::get()][$browserNameFull][Time::today()] = $this->getNewVisitor();
                                FileSystem\Yaml::emitFile($logDataFile, $logs);
                            }//end if
                        } else {
                            // Append current(new) browser's data of current client to logs file.
                            $logs[IP::get()][$browserNameFull][Time::today()] = $this->getNewVisitor();
                            FileSystem\Yaml::emitFile($logDataFile, $logs);
                        }//end if
                    } else {
                        // Append new data about current client to logs file.
                        FileSystem\Yaml::emitFile($logDataFile, array_merge($logs, $currentVisitor));
                    }//end if
                } else {
                    //Write new data to empty file.
                    FileSystem\Yaml::emitFile($logDataFile, $currentVisitor);
                }//end if
            } else {
                //Write new data to empty file.
                FileSystem\Yaml::emitFile($logDataFile, $currentVisitor);
            }//end if
        } else {
            throw new PermissionRequiredException(
                sprintf('Unable to write %s', dirname($logDataFile))
            );
        }//end if
    }//end storeFirewallLogs()


}