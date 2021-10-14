<?php


namespace App\Widgets;

use Mishusoft\Drivers\Widget;

class TopQuickBarWidget extends Widget
{

    /**
     * @param string $name
     * @param string $view
     * @param string $format
     * @param null $inverse
     * @param null $siteInfo
     * @return bool|string
     * @throws \Mishusoft\Exceptions\RuntimeException\NotFoundException
     */
    public function getTopQuickBar(string $name, string $view, string $format = 'phtml', $inverse = null, $siteInfo = null): bool|string
    {
        $data['name']      = $name;
        $data['inverse']   = $inverse;
        $data['contacts']  = $siteInfo;
        $data['languages'] = $siteInfo;
        // $data['siteInfo'] = $this->menu->getSiteInfo();
        return $this->render($name, $view, $data, $format);
    }//end getTopQuickBar()
}//end class
