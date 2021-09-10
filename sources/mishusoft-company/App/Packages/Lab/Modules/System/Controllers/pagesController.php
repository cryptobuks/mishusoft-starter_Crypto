<?php

namespace Mishusoft\Packages\Lab\Modules\System\Controllers;


use Exception;
use Mishusoft\Framework\Chipsets\Cryptography\Decryption;
use Mishusoft\Framework\Chipsets\Storage;
use Mishusoft\Framework\Chipsets\Utility\Pagination;
use Mishusoft\Framework\PreRequires\_Array;
use Mishusoft\Framework\PreRequires\_String;
use Mishusoft\Packages\Lab\Modules\Main\Controllers\systemController;

class pagesController extends systemController
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
        //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Navigate to menus page successfully')));

        /*$this->view->setJs(['main']);*/
        try {
            $pagination = new Pagination();
            $this->view->assign('pages', $pagination->pager($this->system->getAllPagesPerfectly()));
            $this->view->assign('pagination', $pagination->getView('ajax'));
            $this->view->assign('GlobalMenus', $this->system->getGlobalMenus());
            $this->view->assign('GlobalMenuPositions', $this->system->getGlobalMenuPositions());
            $this->view->assign('title', 'Pages');
            $this->view->render('index', 'Pages');
        } catch (Exception $e) {
            echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' . $e]);
            //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' . $e)));
            exit;
        }
    }

    /**
     * @public
     */
    public function indexPaginationAJAX()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            $this->paginationValidity($data);

            try {
                $pagination = new Pagination();
                $this->view->assign('pages', $pagination->pager($this->system->getAllPagesPerfectly(), $this->filterInt($data->pageNumber)));
                $this->view->assign('pagination', $pagination->getView($data->viewMode));
                $this->view->assign('server_root', BaseURL);
                $this->view->assign('GlobalMenus', $this->system->getGlobalMenus());
                $this->view->assign('GlobalMenuPositions', $this->system->getGlobalMenuPositions());
                $this->view->render('pagination_index', false, true);
            } catch (Exception $e) {
                echo json_encode(['type' => 'error', 'message' => 'Pagination class load error. ' . $e]);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Pagination class load error. ' . $e)));
                exit;
            }
        }
    }

    /**
     * @public
     */
    public function checkPageTitleURLInputAbility()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'App\'s security_code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New page\'s security code not found.')));
                exit;
            }

            if (empty($data->name)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out name or title.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New page\'s name or title not found.')));
                exit;
            }

            if (empty($data->value)) {
                echo json_encode(['type' => 'error', 'message' => 'Please fil out title and url.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New page\'s name or title not found.')));
                exit;
            }

            if ($this->system->isPageTitleAlreadyExists($data->value) || $this->system->isPageUrlAlreadyExists($data->value)) {
                echo json_encode(['type' => 'error', 'message' => 'The page <b>' . $data->name . ' [' . $data->value . ']</b> has already exist. Please enter new one.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The page <b>' . $data->name . '[' . $data->value . ']</b> has already exist. Please enter new one.')));
                exit;
            }

            echo json_encode(['type' => 'success', 'message' => '<b>' . $data->name . ' [' . $data->value . ']</b> is available.']);
            //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => '<b>' . $data->name . '[' . $data->value . ']</b> menu is available.')));
            exit;
        }
    }

    /**
     * @public
     */
    public function getPageNameById()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));
        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                Storage::StreamAsJson(['type' => 'error', 'message' => 'App\'s security_code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New page\'s security code not found.')));
                exit;
            }

            if (empty($this->filterInt($data->page))) {
                Storage::StreamAsJson(['type' => 'error', 'message' => 'Page id not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New page\'s name or title not found.')));
                exit;
            }

            if ($this->system->isPageExistsById($this->filterInt($data->page))) {
                Storage::StreamAsJson(['type' => 'success', 'name' => _Array::value($this->system->getPage($this->filterInt($data->page)), 'title'), 'message' => 'page ' . _Array::value($this->system->getPage($this->filterInt($data->page)), 'title') . ' name send']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'name' => retrieveReturnVariable($this->system->getPage($this->filterInt($data->page)), 'title'), 'message' => 'page ' . retrieveReturnVariable($this->system->getPage($this->filterInt($data->page)), 'title') . ' name send')));
                exit;

            } else {
                Storage::StreamAsJson(['type' => 'error', 'message' => 'Page name request failed.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page name request failed.')));
                exit;
            }
        }
    }

    public function managePages()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            if (empty($data->security_code) or $data->security_code !== 1) {
                echo json_encode(['type' => 'error', 'message' => 'App\'s security code not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New Page\'s security code not found.')));
                exit;
            }

            if ($data->parent < 0) {
                echo json_encode(['type' => 'error', 'message' => 'Page\'s parent not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'New Page\'s parent not found.')));
                exit;
            }

            if (empty($data->title)) {
                echo json_encode(['type' => 'error', 'message' => 'Page\'s title not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page\'s title not found.')));
                exit;
            }

            if (empty($data->status)) {
                echo json_encode(['type' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s status not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s status not found.')));
                exit;
            }

            if (empty($data->url)) {
                echo json_encode(['type' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s url not found.']);
                ///Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s url not found.')));
                exit;
            }

            if (empty($data->icon)) {
                echo json_encode(['type' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s icon not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s icon not found.')));
                exit;
            }

            if (empty($data->position)) {
                echo json_encode(['type' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s position not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s position not found.')));
                exit;
            }

            if (empty($data->type)) {
                echo json_encode(['type' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s type not found.']);
                //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'Page (' . ucfirst(_String::removeTags($data->title)) . ')\'s type not found.')));
                exit;
            }

            if ($data->btnName === 'Save') {
                if ($this->system->isPageTitleAlreadyExists($data->title)) {
                    echo json_encode(['type' => 'error', 'message' => 'The page <b>' . $data->title . '</b> has already exist. Please enter new one.']);
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'The page <b>' . $data->title . '</b> has already exist. Please enter new one.')));
                    exit;
                } else {
                    $this->system->addPage($this->filterInt($data->parent), _String::removeTags($data->title), _String::removeTags($data->url), _String::removeTags($data->icon), _String::removeTags($data->position), _String::removeTags($data->status), _String::removeTags($data->type), _String::removeTags($data->seo));
                    echo json_encode(['type' => 'success', 'message' => 'New page (' . ucfirst(_String::removeTags($data->title)) . ') added successfully...']);
                    /*//Tracker::addEvent(array(
                        'activity' => array('messageType' => 'success', 'message' => 'New page (' . ucfirst(_String::removeTags($data->title)) . ') added successfully...'),
                        'update' => array('messageType' => 'success', 'uFile' => 'page', 'message' => 'New page (' . ucfirst(_String::removeTags($data->title)) . ') added successfully...')
                    ));*/
                    exit;
                }
            }

            if ($data->btnName === 'Update') {
                $page = $this->system->getPage($this->filterInt($data->id));
                $this->system->editPage($this->filterInt($data->id), $this->filterInt($data->parent), _String::removeTags($data->title), _String::removeTags($data->url), _String::removeTags($data->icon), $this->filterInt($data->position), _String::removeTags($data->status), _String::removeTags($data->type), _String::removeTags($data->seo));
                echo json_encode(['type' => 'success', 'message' => 'New page (' . ucfirst($page['title']) . ' to ' . ucfirst(_String::removeTags($data->title)) . ') updated successfully...']);
                /*Tracker::addEvent(array(
                    'activity' => array('messageType' => 'success', 'message' => 'New page (' . ucfirst($page['title']) . ' to ' . ucfirst(_String::removeTags($data->title)) . ') updated successfully...'),
                    'update' => array('messageType' => 'success', 'uFile' => 'page', 'message' => 'New page (' . ucfirst($page['title']) . ' to ' . ucfirst(_String::removeTags($data->title)) . ') updated successfully...')
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

    public function deletePage()
    {
        $this->access_init();
        $this->acl->access('edit_content');
        $data = json_decode(file_get_contents('php://input'));

        if (!empty($data) && is_object($data)) {
            $page = $this->system->getPage($this->filterInt($data->id));
            $this->system->deletePage($data->id);
            echo json_encode(['type' => 'success', 'message' => '<b>' . ucfirst($page['title']) . '</b> page deleted successfully...']);
            /*Tracker::addEvent(array(
                'activity' => array('messageType' => 'success', 'message' => '<b>' . ucfirst($page['title']) . '</b> page deleted successfully...'),
                'update' => array('messageType' => 'success', 'uFile' => 'page', 'message' => '<b>' . ucfirst($page['title']) . '</b> page deleted successfully...')
            ));*/
            exit;
        }
    }


    public function sources($page = false)
    {

        if (isset($page)) {
                        /*print_r($page);
                        echo '<br>';
                        print_r(Hash::StaticDecrypt($page));
                        echo '<br>';
                        print_r($this->system->getPageNameById($this->filterInt(Hash::StaticDecrypt($page))));
                        echo '<br>';
                        print_r($this->system->getPageSourceById($this->filterInt(Hash::StaticDecrypt($page))));*/
            $this->view->assign('title', 'Edit Source');
            $this->view->assign('fileId', $page);
            $this->view->assign('fileName', $this->system->getPageNameById($this->filterInt(Decryption::static($page))));
            $this->view->assign('fileURI', $this->system->getPageURIById($this->filterInt(Decryption::static($page))));

            if ($this->getInt('security-code') === 1) {
                $this->view->assign('submitted_data', $_POST);

                if (!$this->getAlphaNum('page-id')) {
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'page id not found.')));
                    $this->view->assign('error', 'Source code corrupted.');
                    $this->view->render('sources', 'Sources');
                    exit;
                }

                if (!$this->getWordParam('content')) {
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'page content not found.')));
                    $this->view->assign('error', 'Source code not found.');
                    $this->view->render('sources', 'Sources');
                    exit;
                }

                if (!$this->getSql('save')) {
                    //Tracker::addEvent(array('activity' => array('messageType' => 'error', 'message' => 'page command not found.')));
                    $this->view->assign('error', 'page command not found.');
                    $this->view->render('sources', 'Sources');
                    exit;
                }

                if ($this->system->getPageSourceById($this->filterInt(Decryption::static($page)))){
                    $this->system->editSource($this->filterInt(Decryption::static($page)),$this->getWordParam('content'));
                    //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Source code updated successfully.')));
                    $this->view->assign('success', 'Source code updated successfully');
                    $this->view->render('sources', 'Sources');
                    exit;
                } else {
                    $this->system->addSource($this->filterInt(Decryption::static($page)),$this->getWordParam('content'));
                    //Tracker::addEvent(array('activity' => array('messageType' => 'success', 'message' => 'Source code added successfully.')));
                    $this->view->assign('success', 'Source code added successfully');
                    $this->view->render('sources', 'Sources');
                    exit;
                }
            }
            $this->view->assign('fileSource', $this->system->getPageSourceById($this->filterInt(Decryption::static($page))));
            $this->view->render('sources', 'Sources');
            exit();
        }

        /*realtime features*/
        $this->view->assign('title', 'Sources');
        $this->view->render('sources', 'Sources');
    }

}