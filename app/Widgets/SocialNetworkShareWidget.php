<?php


namespace App\Widgets;

use Mishusoft\Drivers\Widget;

class SocialNetworkShareWidget extends Widget
{


    /**
     * @param string $name
     * @param string $view
     * @param string $format
     * @param null $inverse
     * @param null $siteInfo
     * @return bool|string
     */
    public function getSocialNetworkShare(string $name, string $view, string $format = 'phtml', $inverse = null, $siteInfo = null): bool|string
    {
        $data['name'] = $name;
        return $this->render($name, $view, $data, $format);
    }//end getSocialNetworkShare()
}//end class
