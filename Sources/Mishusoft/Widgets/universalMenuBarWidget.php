<?php


namespace Mishusoft\Widgets;


use Mishusoft\Framework\Drivers\Widget;

class universalMenuBarWidget extends Widget
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getUniversalMenuBar(string $name, string $view, string $format = "phtml", $inverse = null, $siteInfo = null)
    {
        $data['name'] = $name;
        $data['inverse'] = $inverse;
        $data['appDetails'] = $siteInfo;
        //$data['siteInfo'] = $this->menu->getSiteInfo();
        return $this->render($name, $view, $data, $format);
    }

}