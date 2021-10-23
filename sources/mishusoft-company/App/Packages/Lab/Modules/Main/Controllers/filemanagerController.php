<?php

namespace Mishusoft\Packages\Lab\Modules\Main\Controllers;

use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\Drivers\Controller;

class filemanagerController extends Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to File Manager successfully')));

        /*$this->view->setJs(['main']);*/
        try {
            $pagination = new Pagination();
            $dirs = scandir(MS_DOCUMENT_ROOT);
            $this->view->assign('dirs', $pagination->pager($dirs));
            $this->view->assign('pagination', $pagination->getView('ajax'));
            $this->view->assign('title', 'File Manager');
            $this->view->render('index', 'File Manager');
        } catch (\Exception $e) {
            echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' .$e]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' .$e)));
            exit;
        }
    }
}
