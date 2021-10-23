<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;

use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;

class indexController extends systemController
{
    private $system;

    public function __construct()
    {
        parent::__construct();
        $this->access_init();
        $this->system = $this->loadModel('system');
    }

    public function index()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to  CONTROL PANEL successfully')));
        /*$this->view->setJs(['main']);*/
        $this->view->assign('title', 'Control Panel');
        $this->view->render('index', 'Control Panel');
    }

    public function getMainItemTabs()
    {
        $this->acl->access('edit_content');
        /*Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => ' Framework Menu main (JSON data) extract successfully')));*/
        Storage::StreamAsJson($this->system->getMainItemTabs());
    }

    public function getExtraItemTabs()
    {
        $this->acl->access('edit_content');
        /*Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => ' Framework Menu extra (JSON data) extract successfully')));*/
        Storage::StreamAsJson($this->system->getExtraItemTabs());
    }
}
