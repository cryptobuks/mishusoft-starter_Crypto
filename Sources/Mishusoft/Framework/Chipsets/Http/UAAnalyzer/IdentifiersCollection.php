<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer;

class IdentifiersCollection extends Collection
{
    public IdentifiersCollection\BrowsersIdentifiersCollection $browsers;
    public IdentifiersCollection\PlatformsIdentifiersCollection $platforms;
    public IdentifiersCollection\DevicesIdentifiersCollection $devices;

    /**
     * UAIdentifiers constructor.
     */
    public function __construct()
    {
        $this->browsers = new IdentifiersCollection\BrowsersIdentifiersCollection();
        $this->devices = new IdentifiersCollection\DevicesIdentifiersCollection();
        $this->platforms = new IdentifiersCollection\PlatformsIdentifiersCollection();
    }

    /**
     * @return string[]
     */
    public function all(): array
    {
        return array(
            'browser',
            'platforms',
            'devices'
        );
    }

    /**
     * @return array
     */
    public function samples(): array
    {
        return array(
            'browsers' => $this->browsers->samples(),
            'platforms' => $this->platforms->samples(),
            'devices' => $this->devices->samples(),
        );
    }

    /**
     * @return array
     */
    public function details(): array
    {
        return array(
            'browsers' => $this->browsers->all(),
            'platforms' => $this->platforms->all(),
            'devices' => $this->devices->all(),
        );
    }

    public function query(string $category, string $identifier): array
    {
        return match (strtolower($category)) {
            'browsers' => $this->browsers->query($identifier),
            'platforms' => $this->platforms->query($identifier),
            'devices' => $this->devices->query($identifier),
        };
    }


}
