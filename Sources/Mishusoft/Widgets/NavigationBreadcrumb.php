<?php


namespace Mishusoft\Widgets;


use Mishusoft\Framework\Drivers\Widget;

class NavigationBreadcrumb extends Widget
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getNavigationBreadcrumb(string $name, string $view, string $format = "phtml", $inverse = null, $siteInfo = null)
    {
        $data['name'] = $name;
        return $this->render($name, $view, $data, $format);
    }

}