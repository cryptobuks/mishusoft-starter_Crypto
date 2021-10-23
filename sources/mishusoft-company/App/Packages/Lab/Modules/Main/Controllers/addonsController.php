<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

class addonsController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigated to addons Page successfully.')));
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Add-ons');
        $this->view->render('index', 'Add-ons');
    }

    public function ipinfo($ip = false)
    {
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Ip Info');
        if (isset($ip)) {
            $this->view->assign('ip_address', $ip);
        }
        $this->view->render('ipinfo', 'Ip Info');
    }
}
