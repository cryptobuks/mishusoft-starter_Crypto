<?php


namespace Mishusoft\Widgets;


use Mishusoft\Framework\Drivers\Widget;

class SocialNetworkShareWidget extends Widget
{


    /**
     * socialNetworkShareWidget constructor.
     */
    public function __construct()
    {
        parent::__construct();

    }//end __construct()


    /**
     * @param string $name
     * @param string $view
     * @param string $format
     * @param null $inverse
     * @param null $siteInfo
     * @return bool|string
     */
    public function getSocialNetworkShare(string $name, string $view, string $format='phtml', $inverse=null, $siteInfo=null): bool|string
    {
        $data['name'] = $name;
        return $this->render($name, $view, $data, $format);

    }//end getSocialNetworkShare()


}//end class
