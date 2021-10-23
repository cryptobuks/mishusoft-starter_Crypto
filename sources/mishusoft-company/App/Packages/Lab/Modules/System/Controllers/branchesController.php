<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;

use Exception;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\Globals\Functions\Text;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;

class branchesController extends systemController
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
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to Framework Manager page successfully')));

        /*$this->view->setJs(['main']);*/
        try {
            $pagination = new Pagination();
            $this->view->assign('branches', $pagination->pager($this->system->getBranches()));
            $this->view->assign('pagination', $pagination->getView('ajax'));
            $this->view->assign('title', 'Branches');
            $this->view->render('index', 'Branches');
        } catch (Exception $e) {
            echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' .$e]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' .$e)));
            exit;
        }
    }

    public function getBranches()
    {
        $this->acl->access('system_access');
        Storage::StreamAsJson($this->system->getBranches());
    }

    public function indexPaginationAJAX()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->paginationValidity($data);

            try {
                $pagination = new Pagination();
                $this->view->assign('branches', $pagination->pager($this->system->getBranches(), $this->filterInt($data->pageNumber)));
                $this->view->assign('pagination', $pagination->getView($data->viewMode));
                $this->view->assign('server_root', BaseURL);
                $this->view->render('pagination_index', false, true);
            } catch (Exception $e) {
                echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' .$e]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' .$e)));
                exit;
            }
        }
    }

    public function checkBranchNameInputAbility()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Branch\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s security code not found.')));
                exit;
            }

            if (empty($data->name) || empty($data->value)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out branch name.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s name not found.')));
                exit;
            }

            if ($this->system->isBranchAlreadyExists(ucfirst(Text::removeTags($data->value)))) {
                echo json_encode(['type' => 'error', 'message' => 'The branch <b>' . ucfirst(Text::removeTags($data->value)) . '</b> has already exist. Please enter new one.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The branch <span style="font-weight:bold;">' . ucfirst(Text::removeTags($data->value)) . '</span> has already exist. Please enter new one.')));
                exit;
            }

            echo json_encode(['type' => 'success', 'message' => '<b>' . ucfirst(Text::removeTags($data->value)) . '</b> is available.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => '<b>' . ucfirst(Text::removeTags($data->value)) . '</b> is available.')));
            exit;
        }
    }

    public function manageBranch()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) || $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Branch\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s security code not found.')));
                exit;
            }
            if (empty($data->name)) {
                echo json_encode(['type' => 'error', 'message' => 'Branch\'s name not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s name not found.')));
                exit;
            }
            if (empty($data->status)) {
                echo json_encode(['type' => 'error', 'message' => 'Branch\'s status not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s status not found.')));
                exit;
            }
            if (empty($data->location)) {
                echo json_encode(['type' => 'error', 'message' => 'Branch\'s location not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s location not found.')));
                exit;
            }

            if ($data->btnName === 'Save') {
                if ($this->system->isBranchAlreadyExists($data->name)) {
                    echo json_encode(['type' => 'error', 'message' => 'New branch (' . $data->name . ') already exists.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New branch (' . $data->name . ') already exists.')));
                    exit;
                } else {
                    $this->system->insertBranch(ucfirst(Text::removeTags($data->name)), Text::removeTags($data->status), Text::removeTags($data->location));
                    echo json_encode(['type' => 'success', 'message' => 'New branch (' . Text::removeTags($data->name) . ') added successfully....']);
                    /*//Tracker::addEvent(array(
                        'activity' => array('messageType' => 'success', 'message' => 'New branch (' . Text::removeTags($data->name) . ') added successfully....'),
                        'update' => array('messageType' => 'success', 'uFile' => 'Branch', 'message' => 'New branch (' . Text::removeTags($data->name) . ') added successfully....')
                    ));*/
                    exit;
                }
            }

            if ($data->btnName === 'Update') {
                $item = $this->system->getBranch($this->filterInt($data->id));
                $this->system->editBranch($this->filterInt($data->id), ucfirst(Text::removeTags($data->name)), Text::removeTags($data->status), Text::removeTags($data->location));
                echo json_encode(['type' => 'success', 'message' => 'Branch (' . $item['name'] . ' to ' . Text::removeTags($data->name) . ') updated successfully....']);
                /*//Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Branch (' . $item['name'] . ' to ' . Text::removeTags($data->name) . ') updated successfully....'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Branch', 'message' => 'Branch (' . $item['name'] . ' to ' . Text::removeTags($data->name) . ') updated successfully....')
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

    public function deleteBranch()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $item = $this->system->getBranch($this->filterInt($data->id));
            $this->system->deleteBranch($this->filterInt($data->id));
            echo json_encode(['type' => 'success', 'message' => '<b>' . $item['name'] . '</b> branch deleted successfully....']);
            /*//Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => '<b>' . $item['name'] . '</b> branch deleted successfully....'),
                'update' => array('messageType' => 'success', 'uFile' => 'Branch', 'message' => '<b>' . $item['name'] . '</b> branch deleted successfully....')
            ));*/
            exit;
        }
    }

    public function users($branch)
    {
        $this->acl->access('edit_content');

        $id = $this->filterInt($branch);
        if (!$id) {
            $this->redirect('manager/branches');
        }

        if (!$this->system->getBranch($branch)) {
            $this->redirect('manager/branches');
        }

        try {
            $pagination = new Pagination();
            $this->view->assign('branch', $pagination->pager($this->system->getBranch($branch)));
            $this->view->assign('users', $pagination->pager($this->system->getBranchUsersDetailsWithWorkingTime($branch)));
            $this->view->assign('pagination', $pagination->getView('ajax'));
            $this->view->assign('title', 'Branches Users');
            $this->view->render('users', 'Branches Users');
        } catch (Exception $e) {
            echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' .$e]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' .$e)));
            exit;
        }
    }

    public function usersPaginationAJAX($branch)
    {
        if (empty($branch)) {
            $this->redirect('system/branches');
        }
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->paginationValidity($data);

            try {
                $pagination = new Pagination();
                $this->view->assign('branches', $pagination->pager($this->system->getUsersDetailsWithWorkingTime($branch), $this->filterInt($data->pageNumber)));
                $this->view->assign('pagination', $pagination->getView($data->viewMode));
                $this->view->assign('server_root', BaseURL);
                $this->view->render('pagination_users', false, true);
            } catch (Exception $e) {
                echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' .$e]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' .$e)));
                exit;
            }
        }
    }

    public function transferBranchStuff()
    {
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if ($data ==! false) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'Branch\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Branch\'s security code not found.')));
                exit;
            }

            if (empty($data->user)) {
                echo json_encode(['type' => 'error', 'message' => 'Your stuff not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your stuff not found.')));
                exit;
            }

            if (empty($data->branch)) {
                echo json_encode(['type' => 'error', 'message' => 'Your branch not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Your branch not found.')));
                exit;
            }

            $userRole = ucfirst($this->system->getRoleById($this->filterInt($data->user)));
            $userFullName = ucfirst($this->system->getStuffNameById($this->filterInt($data->user))) !== ' ' ? ucfirst($this->system->getStuffNameById($this->filterInt($data->user))) : 'No Name';

            if ($data->method === 'add') {
                if ($this->system->isStuffAlreadyExists($this->filterInt($data->branch), $this->filterInt($data->user))) {
                    echo json_encode(['type' => 'error', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') already transferred to ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '.']);
                    /*//Tracker::addEvent(array(
                        'activity' => array('messageType' => 'error', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') already transferred to ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '.')
                    ));*/
                    exit;
                } else {
                    $this->system->addStuffToBranch($this->filterInt($data->branch), $this->filterInt($data->user));
                    echo json_encode(['type' => 'success', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') transfer to ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '  successfully...']);
                    /*//Tracker::addEvent(array(
                        'activity' => array('messageType' => 'success', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') transfer to ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '  successfully...'),
                        'update' => array('messageType' => 'success', 'uFile' => 'Stuff transfer', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') transfer to ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '  successfully...')
                    ));*/
                    exit;
                }
            }

            if ($data->method === 'remove') {
                $this->system->removeStuffFromBranch($this->filterInt($data->branch), $this->filterInt($data->user));
                echo json_encode(['type' => 'success', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') remove from ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '  successfully...']);
                /*//Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') remove from ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '  successfully...'),
                    'update' => array('messageType' => 'success', 'uFile' => 'Stuff transfer', 'message' => 'Your stuff '. $userRole .' (' . $userFullName . ') remove from ' . ucfirst($this->system->getBranchNameById($this->filterInt($data->branch))) . '  successfully...')
                ));*/
                exit;
            }
        }
    }
}
