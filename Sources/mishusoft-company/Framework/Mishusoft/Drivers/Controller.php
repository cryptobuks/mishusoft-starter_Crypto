<?php

namespace Mishusoft\Drivers;

use InvalidArgumentException;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\System\BIOS;
use Mishusoft\System\Firewall;
use Mishusoft\Drivers\ControllerInterface;
use Mishusoft\Libraries\Runtime;

abstract class Controller implements ControllerInterface {
    protected View $view;
    protected $acl;
    protected $request;
    protected bool $javascriptEnabled;
    private Registry $registry;

    public function __construct(){
        $this->registry = Registry::getInstance();
        $this->acl = $this->registry->acl;
        $this->request = $this->registry->request;
        $this->view = new View($this->request, $this->acl);
        $this->javascriptEnabled = true;
    }

    abstract public function index();

    public function validEmail($email): bool
    {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return FALSE;
        }
        return TRUE;
    }

    public function getSearchText($value): string
    {
        if (isset($_GET[$value]) && !empty($_GET[$value])) {
            $_GET[$value] = htmlspecialchars($_GET[$value], ENT_QUOTES);
            return $_GET[$value];
        }
        return '';
    }

    public function paginationValidity($data){
        if (empty($data->security_code) OR $data->security_code !== 1) {
            echo json_encode(['type' => 'error', 'message' => 'Pagination\'s security code not found.']);
            exit;
        }
        if (empty($data->pageNumber) && $this->filterInt($data->pageNumber) !==0) {
            echo json_encode(['type' => 'error', 'message' => 'Page number not found.']);
            exit;
        }
        if (empty($data->viewMode)) {
            echo json_encode(['type' => 'error', 'message' => 'Page view mode direction not found.']);
            exit;
        }
    }

    protected function filterInt($int): int
    {
        $int = (int)$int;

        if (is_int($int)) {
            return $int;
        } else {
            return 0;
        }
    }

    /**
     * @param $source
     * @return string|string[]|null
     */
    public function expandCamelCase($source)
    {
        return preg_replace('/(?<!^)([A-Z][a-z]|(?<=[a-z])[^a-z]|(?<=[A-Z])[0-9_])/', ' $1', $source);
    }

    /**
     * @param $subject
     * @return string|string[]|null
     */
    public function findUSERNAME($subject)
    {
        return preg_replace(DS . APP_USERNAME_PREFIX . '/is', '$1', $subject);
    }

    /**
     * @param $folderpath
     */
    public function deleteFolder(string $folderpath)
    {
        if (!is_dir($folderpath)) {
            throw new InvalidArgumentException("$folderpath must be a directory.");
        }
        if (strlen($folderpath) < strlen(MS_DOCUMENT_ROOT)) {
            throw new InvalidArgumentException("$folderpath must be a valid directory.");
        }
        if (substr($folderpath, strlen($folderpath) - 1, 1) !== '/') {
            $folderpath .= '/';
        }
        $files = glob($folderpath . '*', GLOB_MARK);
        foreach ($files as $file) {
            if (is_dir($file)) {
                $this->deleteFolder($file);
            } else {
                unlink($file);
            }
        }
        rmdir($folderpath);
    }

    /**
     * @param $dir
     */
    function chmodFileFolder($dir)
    {
        $perms['file'] = 0644; // chmod value for files don't enclose value in quotes.
        $perms['folder'] = 0755; // chmod value for folders don't enclose value in quotes.

        $dh = @opendir($dir);

        if ($dh) {

            while (false !== ($file = readdir($dh))) {

                if ($file != "." && $file != "..") {

                    $fullpath = $dir . '/' . $file;
                    if (!is_dir($fullpath)) {

                        if (chmod($fullpath, $perms['file'])) {
                            echo "\n<br><span style=\"font-weight:bold;\">File</span> " . $fullpath . ' permissions changed to ' . decoct($perms['file']);
                        } else {
                            echo "\n<br><span style=\"font-weight:bold; color:#ff0000;\">Failed</span> to set file permissions on " . $fullpath;
                        }
                    } else {

                        if (chmod($fullpath, $perms['folder'])) {
                            echo "\n<br><span style=\"font-weight:bold;\">Directory</span> " . $fullpath . ' permissions changed to ' . decoct($perms['folder']);
                            $this->chmodFileFolder($fullpath);
                        } else {
                            echo "\n<br><span style=\"font-weight:bold; color:#ff0000;\">Failed</span> to set directory permissions on " . $fullpath;
                        }
                    }
                }
            }
            closedir($dh);
        }
    }

    function __destruct()
    {

    }

    protected function access_init(){
        if (!Session::get('auth')) {
            $this->redirect('user/login?redirect=' . Runtime::getNextURL($_SERVER['REQUEST_URI']));
        }
    }

    /**
     * @param false $url
     */
    protected function redirect($url = FALSE){
        if (!empty($url) || !$url === ' ') {
            header('location:' . BaseURL . $url);
            exit;
        } else {
            header('location:' . BaseURL);
            exit;
        }
    }

    /**
     * @param string $url
     * @return string
     */
    public function getNextURL(string $url): string
    {
        if (MS_SERVER_PATH !== DS) {
            $homeFOLDER = str_replace(DS, '_', MS_SERVER_PATH);
            $fetchURL = str_replace(DS, '_', $url);
            $data = str_replace($homeFOLDER, '', $fetchURL);
            $nextURL = str_replace('_', DS, $data);
            return ltrim($nextURL, '/');
        } else
            return ltrim($url, '/');
    }

    /**
     * @param $value
     * @return false|mixed
     */
    protected function catchRedirectURL($value): bool
    {
        if (isset($_GET[$value]) && !empty($_GET[$value])) {
            return $_GET[$value];
        }
        return false;
    }

    /**
     * @param $value
     * @return false|mixed
     */
    protected function getTextOnURL($value): bool
    {
        if (isset($_GET[$value]) && !empty($_GET[$value])) {
            return $_GET[$value];
        }
        return false;
    }

    /**
     * @param $model
     * @param false $module
     * @return mixed
     */
    protected function loadModel($model, $module = FALSE){
        $model = join([$model, 'Model']);
        $rootModel = join(DIRECTORY_SEPARATOR,[MPM::modulesPath(), MPM::defaultModule(), 'Models', $model . ".php"]);

        if ($module === false) {
            $module = $this->request->getModule();
        }

        if ($module) {
            if ($module !== MPM::defaultModule()) {
                $rootModel = MPM::modulesPath() . $module . DS . 'Models' . DS . $model . '.php';
            }
        }
        if (is_readable($rootModel)) {
            require_once $rootModel;
            $model = Preloader::getClassNamespaceFromPath($rootModel);
            return new $model;
        } else {
            Firewall::runtimeFailure("Not Found", [
                "debug" => [
                    "file" => $model,
                    "location" => $rootModel,
                    "description" => "Required Model not found or could not load!!"],
                "error" => ["description" => "Your requested url is broken!!"]
            ]);
            exit();
        }
    }

    /**
     * @param $value
     * @return string
     */
    protected function getText($value): string
    {
        if (isset($_POST[$value]) && !empty($_POST[$value])) {
            $_POST[$value] = htmlspecialchars($_POST[$value], ENT_QUOTES);
            return $_POST[$value];
        }
        return '';
    }

    /**
     * @param $value
     * @return string
     */
    protected function getNormalText($value): string
    {
        if (isset($value) && !empty($value)) {
            $value = htmlspecialchars($value, ENT_QUOTES);
            return $value;
        }
        return '';
    }

    /**
     * @param $value
     * @return int|mixed
     */
    protected function getInt($value): int
    {
        if (isset($_POST[$value]) && !empty($_POST[$value])) {
            $_POST[$value] = filter_input(INPUT_POST, $value, FILTER_VALIDATE_INT);
            return $_POST[$value];
        }
        return 0;
    }

    /**
     * @param $value
     * @return mixed
     */
    protected function getWordParam($value){
        if (isset($_POST[$value]) && !empty($_POST[$value])) {
            return $_POST[$value];
        }
    }

    /**
     * @param $value
     * @return string
     */
    protected function getSql($value): string
    {
        if (isset($_POST[$value]) && !empty($_POST[$value])) {
            $_POST[$value] = strip_tags($_POST[$value]);
            return trim($_POST[$value]);
        }
    }

    /**
     * @param $value
     * @return string
     */
    protected function getSqlText($value): string
    {
        if (isset($value) && !empty($value)) {
            $value = strip_tags($value);
            return trim($value);
        }
    }

    /**
     * @param $value
     * @return string
     */
    protected function getAlphaNum($value): string
    {
        if (isset($_POST[$value]) && !empty($_POST[$value])) {
            $_POST[$value] = (string)preg_replace('/[^A-Z0-9_]/i', '', $_POST[$value]);
            return trim($_POST[$value]);
        }
    }

    /**
     * @param $value
     * @return string
     */
    protected function getAlphaNumText($value): string
    {
        if (isset($value) && !empty($value)) {
            $value = (string)preg_replace('/[^A-Z0-9_]/i', '', $value);
            return trim($value);
        }
    }
}
