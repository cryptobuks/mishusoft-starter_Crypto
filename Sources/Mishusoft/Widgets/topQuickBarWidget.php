<?php


namespace Mishusoft\Widgets;


use Mishusoft\Framework\Drivers\Widget;

class topQuickBarWidget extends Widget
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getTopQuickBar(string $name, string $view, string $format = "phtml", $inverse = null, $siteInfo = null)
    {
        $data['name'] = $name;
        $data['inverse'] = $inverse;
        $data['contacts'] = $siteInfo;
        $data['languages'] = $siteInfo;
        //$data['siteInfo'] = $this->menu->getSiteInfo();
        return $this->render($name, $view, $data, $format);
    }

}