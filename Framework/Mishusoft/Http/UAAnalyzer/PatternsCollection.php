<?php


namespace Mishusoft\Http\UAAnalyzer;

use Mishusoft\Exceptions\RuntimeException;

class PatternsCollection extends Collection
{
    public PatternsCollection\BrowsersPatternsCollection $browsers;
    public PatternsCollection\DevicesPatternsCollection $devices;
    public PatternsCollection\PlatformsPatternsCollection $platforms;

    /**
     * PatternsCollection constructor.
     * @throws RuntimeException
     */
    public function __construct()
    {
        parent::__construct();
        $this->browsers = new PatternsCollection\BrowsersPatternsCollection();
        $this->devices = new PatternsCollection\DevicesPatternsCollection();
        $this->platforms = new PatternsCollection\PlatformsPatternsCollection();
    }
}
