<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;


use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\Globals\Functions\Text;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;

class rolesController extends systemController
{
    private $system;
    public function __construct()
    {
        parent:: __construct();
        $this->access_init();
        $this->system = $this->loadModel('system');
    }

    public function index()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to roles page successfully')));
       
        $pagination = new Pagination();

        /*$this->view->setJs(['main']);*/
        $this->view->assign('roles', $pagination->pager($this->system->getRoles()));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->assign('title', 'Roles');
        $this->view->render('index', 'Roles');
    }

    public function indexPaginationAJAX()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $page = $this->getInt('page');
        
        $pagination = new Pagination();

        $this->view->assign('roles', $pagination->pager($this->system->getRoles(), $page));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->assign('server_root', BaseURL);
        $this->view->render('index_p_ajax', false, true);
    }

    public function getRole($id)
    {
        $this->acl->access('edit_content');
        echo json_encode($this->system->getRole($id));
    }

    public function addRole()
    {
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) || $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Role\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Role\'s security code not found.')));
                exit;
            }

            if (empty($data->name)) {
                echo json_encode(['type' => 'error', 'message' => 'Role\'s name not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Role\'s name not found.')));
                exit;
            }

            if ($data->btnName === 'Save') {
                if ($this->system->isRoleAlreadyExists($data->name)) {
                    echo json_encode(['type' => 'error', 'message' => 'New role (' . $data->name . ') already exists.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New role (' . $data->name . ') already exists.')));
                    exit;
                }
                $this->system->insertRole(Text::removeTags($data->name));
                echo json_encode(['type' => 'success', 'message' => 'New role (' . Text::removeTags($data->name) . ') added successfully....']);
                /*///Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New role (' . Text::removeTags($data->name) . ') added successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Role', 'message' => 'New role (' . Text::removeTags($data->name) . ') added successfully....')
                ));*/
                exit;
            }

            if ($data->btnName === 'Update') {
                $item = $this->system->getRole($this->filterInt($data->id));
                $this->system->editRole($this->filterInt($data->id), Text::removeTags($data->name));
                echo json_encode(['type' => 'success', 'message' => 'Role (' . $item['role'] . ' to ' . Text::removeTags($data->name) . ') updated successfully....']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Role (' . $item['role'] . ' to ' . Text::removeTags($data->name) . ') updated successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Role', 'message' => 'Role (' . $item['role'] . ' to ' . Text::removeTags($data->name) . ') updated successfully....')
                ));*/
                exit;
            }

            if ($data->btnName !== 'Save' || $data->btnName !== 'Update') {
                echo json_encode(['type' => 'error', 'message' => 'Job command not found.',]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Job command not found.')));
                exit;
            }
        }
    }

    public function deleteRole()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $item = $this->system->getRole($this->filterInt($data->id));
            $this->system->deleteRole($this->filterInt($data->id));
            echo json_encode(['type' => 'success', 'message' => '<b>' . $item['role'] . '</b> role deleted successfully....']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => '<b>' . $item['role'] . '</b> role deleted successfully....'),
                'update' => array('messageType' => 'success', 'uFile' => 'role', 'message' => '<b>' . $item['role'] . '</b> role deleted successfully....')
            ));*/
            exit;
        }
    }

    public function permissions($id)
    {
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to role permissions page successfully')));

        $id = $this->filterInt($id);
        if (!$id) {
            $this->redirect('system/roles');
        }

        if (!$this->system->getRole($id)) {
            $this->redirect('system/roles');
        }

        $pagination = new Pagination();

        /*$this->view->setJs(['main']);*/
        $this->view->assign('role_id', $id);
        $this->view->assign('role', $this->system->getRole($id));
        $this->view->assign('rolePermissions', $pagination->pager($this->system->getRolePermissions($id)));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->assign('title', 'Role permissions ');
        $this->view->render('permissions', 'Role permissions');
    }

    public function permissionsPaginationAJAX($id)
    {
        $this->acl->access('edit_content');
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to role permissions page successfully')));

        $id = $this->filterInt($id);
        if (!$id) {
            $this->redirect('system/roles');
        }

        if (!$this->system->getRole($id)) {
            $this->redirect('system/roles');
        }

        $page = $this->getInt('page');

        $pagination = new Pagination();

        $this->view->setJs(['main']);
        $this->view->assign('role', $this->system->getRole($id));
        $this->view->assign('rolePermissions', $pagination->pager($this->system->getRolePermissions($id), $page));
        $this->view->assign('pagination', $pagination->getView('ajax'));
        $this->view->assign('title', 'Role permissions ');
        $this->view->render('permissions_pagination',  false, true);
    }

    public function updateRolePermission()
    {
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) OR $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Permission\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permission\'s security code not found.')));
                exit;
            }

            if (empty($data->role)) {
                echo json_encode(['type' => 'error', 'message' => 'Permitted role not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permitted role not found.')));
                exit;
            }

            if (empty($data->permission)) {
                echo json_encode(['type' => 'error', 'message' => 'Permission\'s name not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Permission\'s name not found.')));
                exit;
            }

            if ($data->value === '0' || $data->value === '1') {
                $this->system->editRolePermission($this->filterInt($data->role), $this->filterInt($data->permission), $this->filterInt($data->value));
                echo json_encode(['type' => 'success', 'message' => 'Permission changes Successfully...']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Permission (' . $data->permission . ') changes successfully...'),
                    'update' => array('messageType' => 'success', 'uFile' => 'RolePermission', 'message' => 'Permission (' . $data->permission . ') changes successfully...')
                ));*/
                exit;
            }

            if ($data->value === 'x') {
                $this->system->deleteRolePermission($this->filterInt($data->role), $this->filterInt($data->permission));
                echo json_encode(['type' => 'success', 'message' => 'Permission changes successfully...']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Permission (' . $data->permission . ') deleted successfully...'),
                    'update' => array('messageType' => 'success', 'uFile' => 'RolePermission', 'message' => 'Permission (' . $data->permission . ') deleted successfully...')
                ));*/
                exit;
            }
        }
    }

}