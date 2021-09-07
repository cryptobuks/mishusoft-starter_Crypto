<?php


namespace Mishusoft\Http\UAAnalyzer;

class InformationCollection extends Collection
{
    public InformationCollection\BrowsersInformationCollection $browsers;
    public InformationCollection\DevicesInformationCollection $devices;
    public InformationCollection\PlatformsInformationCollection $platforms;

    public function __construct()
    {
        parent::__construct();
        $this->browsers = new InformationCollection\BrowsersInformationCollection();
        $this->devices = new InformationCollection\DevicesInformationCollection();
        $this->platforms = new InformationCollection\PlatformsInformationCollection();
    }
}
