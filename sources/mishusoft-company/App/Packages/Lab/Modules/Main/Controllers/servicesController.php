<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

class servicesController extends Controller
{
    public function __construct()
    {
        parent::__construct();
        //$this->access_init();
    }

    public function index()
    {
//        $this->view->setJs(array('main'));
        $this->view->assign('title', 'Services');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success','message' => 'navigated to Services page successfully.')));
        $this->view->render('index', 'Services');
    }
}
