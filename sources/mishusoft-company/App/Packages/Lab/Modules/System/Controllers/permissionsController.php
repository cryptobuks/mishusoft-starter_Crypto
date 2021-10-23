<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;

use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\Globals\Functions\Text;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;

class permissionsController extends systemController
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
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to  modules successfully')));

        $pagination = new Pagination();

        /*$this->view->setJs(['main']);*/
        $this->view->assign('permissions', $pagination->pager($this->system->getPermissions()));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->assign('title', 'Permissions');
        $this->view->render('index', 'Permissions');
    }

    public function indexPaginationAJAX()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $page = $this->getInt('page');

        $pagination = new Pagination();

        $this->view->assign('permissions', $pagination->pager($this->system->getPermissions(), $page));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->render('index_p_ajax', false, true);
    }

    public function addPermission()
    {
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) || $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Permission\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permission\'s security code not found.')));
                exit;
            }

            if (empty($data->name)) {
                echo json_encode(['type' => 'error', 'message' => 'Permission\'s name not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permission\'s name not found.')));
                exit;
            }

            if (empty($data->key)) {
                echo json_encode(['type' => 'error', 'message' => 'Permission\'s key not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permission\'s key not found.')));
                exit;
            }

            if (empty($data->PKID)) {
                echo json_encode(['type' => 'error', 'message' => 'Permission\'s key id not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permission\'s key id not found.')));
                exit;
            }

            if ($data->btnName === 'Save') {
                $this->system->insertPermission(Text::removeTags($data->name), Text::removeTags($data->key), Text::removeTags($data->PKID));
                echo json_encode(['type' => 'success', 'message' => 'New Permission <b>' . ucfirst(Text::removeTags($data->name)) . '</b> added successfully....']);
                /*//Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New Permission <b>' . ucfirst(Text::removeTags($data->name)) . '</b> added successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Permission', 'message' => 'New Permission <b>' . ucfirst(Text::removeTags($data->name)) . '</b> added successfully....')
                ));*/
                exit;
            }

            if ($data->btnName === 'Update') {
                $p = $this->system->getPermission($this->filterInt($data->id));
                $this->system->editPermission($this->filterInt($data->id), Text::removeTags($data->name), Text::removeTags($data->key), Text::removeTags($data->PKID));
                echo json_encode(['type' => 'success', 'message' => 'Permission ' . ucfirst($p['permission']) . ' to ' . ucfirst(Text::removeTags($data->name)) . ' updated successfully....']);
                /* Tracker::addEvent(array(
                     'activity' => array('messageType' => 'success', 'message' => 'Permission ' . ucfirst($p['permission']) . ' to ' . ucfirst(Text::removeTags($data->name)) . ' updated successfully....'),
                     'update' => array('messageType' => 'success', 'uFile' => 'Permission', 'message' => 'Permission ' . ucfirst($p['permission']) . ' to ' . ucfirst(Text::removeTags($data->name)) . ' updated successfully....')
                 ));*/
                exit;
            }

            if ($data->btnName !== 'Save' || $data->btnName !== 'Update') {
                echo json_encode(['type' => 'error', 'message' => 'Job command not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function deletePermission()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $permission = $this->system->getPermission($this->filterInt($data->id));
            $this->system->deletePermission($this->filterInt($data->id));
            echo json_encode(['type' => 'success', 'message' => 'The permission (' . $permission['permission'] . ') deleted successfully....']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => 'The permission (' . $permission['permission'] . ') deleted successfully....'),
                'update' => array('messageType' => 'success', 'uFile' => 'permission', 'message' => 'The permission (' . $permission['permission'] . ') deleted successfully....')
            ));*/
            exit;
        }
    }

    public function getPermissionsRole($id)
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getPermissionsRole($id));
    }
}
