<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer;

use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;

class PatternsCollection extends Collection
{
    public PatternsCollection\BrowsersIdentificationPatternsCollection $browsers;
    public PatternsCollection\DevicesIdentificationPatternsCollection $devices;
    public PatternsCollection\PlatformsIdentificationPatternsCollection $platforms;

    /**
     * PatternsCollection constructor.
     * @throws RuntimeException
     */
    public function __construct()
    {
        parent::__construct();
        $this->browsers = new PatternsCollection\BrowsersIdentificationPatternsCollection();
        $this->devices = new PatternsCollection\DevicesIdentificationPatternsCollection();
        $this->platforms = new PatternsCollection\PlatformsIdentificationPatternsCollection();
    }
}
