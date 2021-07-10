<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer;

use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;

class IdentifiersCollection extends Collection
{
    public IdentifiersCollection\BrowsersIdentifiersCollection $browsers;
    public IdentifiersCollection\PlatformsIdentifiersCollection $platforms;
    public IdentifiersCollection\DevicesIdentifiersCollection $devices;

    /**
     * UAIdentifiers constructor.
     * @throws RuntimeException
     */
    public function __construct()
    {
        parent::__construct();
        $this->browsers = new IdentifiersCollection\BrowsersIdentifiersCollection();
        $this->devices = new IdentifiersCollection\DevicesIdentifiersCollection();
        $this->platforms = new IdentifiersCollection\PlatformsIdentifiersCollection();
    }
}
