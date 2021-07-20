<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;


use Mishusoft\Framework\Drivers\Controller;

class photoalbumsController extends Controller
{

    public function __construct()
    {
        parent::__construct();
        //$this->access_init();
    }

    public function index()
    {
        /*$this->view->setJs(array('main'));*/
        $this->view->assign('title', 'Photo Albums');

        //Tracker::addEvent(array('activity' => array('messageType' => 'success','message' => 'navigated to products page successfully.')));
        $this->view->render('index', 'Photo Albums');
    }
}