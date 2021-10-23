<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Drivers\Controller;

class clientsController extends Controller
{
    private $products;
    public function __construct()
    {
        parent::__construct();
        $this->products = $this->loadModel('products');
        //$this->access_init();
    }

    public function index()
    {
        /*$this->view->setJs(array('main'));*/
        $this->view->assign('title', 'Clients');

        //Tracker::addEvent(array('activity' => array('messageType' => 'success','message' => 'navigated to products page successfully.')));
        $this->view->render('index', 'Clients');
    }
}
