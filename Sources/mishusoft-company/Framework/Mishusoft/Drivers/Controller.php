<?php

namespace Mishusoft\Drivers;

use InvalidArgumentException;
use Mishusoft\Framework\Drivers\View;
use Mishusoft\MPM;
use Mishusoft\Preloader;
use Mishusoft\Storage;
use Mishusoft\System\Firewall;
use Mishusoft\Libraries\Runtime;

abstract class Controller implements ControllerInterface
{
    protected View $view;
    protected $acl;
    protected $request;
    protected bool $javascriptEnabled;
    private Registry $registry;

    public function __construct()
    {
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
            return false;
        }
        return true;
    }

    public function getSearchText($value): string
    {
        if (isset($_GET[$value]) && !empty($_GET[$value])) {
            $_GET[$value] = htmlspecialchars($_GET[$value], ENT_QUOTES);
            return $_GET[$value];
        }
        return '';
    }

    /**
     * @throws \JsonException
     */
    public function paginationValidity($data): void
    {
        if (empty($data->security_code) || $data->security_code !== 1) {
            Storage\Stream::json(['type' => 'error', 'message' => 'Pagination\'s security code not found.']);
            exit;
        }
        if (empty($data->pageNumber) && $this->filterInt($data->pageNumber) !==0) {
            Storage\Stream::json(['type' => 'error', 'message' => 'Page number not found.']);
            exit;
        }
        if (empty($data->viewMode)) {
            Storage\Stream::json(['type' => 'error', 'message' => 'Page view mode direction not found.']);
            exit;
        }
    }

    protected function filterInt(int $int): int
    {
        return $int;
    }

    /**
     * @param $source
     * @return string|string[]|null
     */
    public function expandCamelCase($source): array|string|null
    {
        return preg_replace('/(?<!^)([A-Z][a-z]|(?<=[a-z])[^a-z]|(?<=[A-Z])[0-9_])/', ' $1', $source);
    }

    /**
     * @param $subject
     * @return string|string[]|null
     */
    public function findUSERNAME($subject): array|string|null
    {
        return preg_replace(DS . APP_USERNAME_PREFIX . '/is', '$1', $subject);
    }

    /**
     * @param string $folderpath
     */
    public function deleteFolder(string $folderpath): void
    {
        if (!is_dir($folderpath)) {
            throw new InvalidArgumentException("$folderpath must be a directory.");
        }
        if (strlen($folderpath) < strlen(RUNTIME_ROOT_PATH)) {
            throw new InvalidArgumentException("$folderpath must be a valid directory.");
        }
        if ($folderpath[strlen($folderpath) - 1] !== '/') {
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
    public function chmodFileFolder($dir): void
    {
        $perms['file'] = 0644; // chmod value for files don't enclose value in quotes.
        $perms['folder'] = 0755; // chmod value for folders don't enclose value in quotes.

        $dh = @opendir($dir);

        if ($dh) {
            while (false !== ($file = readdir($dh))) {
                if ($file !== "." && $file !== "..") {
                    $fullpath = $dir . '/' . $file;
                    if (!is_dir($fullpath)) {
                        if (chmod($fullpath, $perms['file'])) {
                            echo "\n<br><span style=\"font-weight:bold;\">File</span> " . $fullpath . ' permissions changed to ' . decoct($perms['file']);
                        } else {
                            echo "\n<br><span style=\"font-weight:bold; color:#ff0000;\">Failed</span> to set file permissions on " . $fullpath;
                        }
                    } else if (chmod($fullpath, $perms['folder'])) {
                        echo "\n<br><span style=\"font-weight:bold;\">Directory</span> " . $fullpath . ' permissions changed to ' . decoct($perms['folder']);
                        $this->chmodFileFolder($fullpath);
                    } else {
                        echo "\n<br><span style=\"font-weight:bold; color:#ff0000;\">Failed</span> to set directory permissions on " . $fullpath;
                    }
                }
            }
            closedir($dh);
        }
    }

    public function __destruct()
    {
    }

    protected function accessInit(): void
    {
        if (!Session::get('auth')) {
            $this->redirect('user/login?redirect=' . Runtime::getNextURL($_SERVER['REQUEST_URI']));
        }
    }

    /**
     * @param false $url
     */
    protected function redirect($url = false): void
    {
        if (!empty(trim($url))) {
            header('location:' . BASE_URL . $url);
            exit;
        }

        header('location:' . BASE_URL);
        exit;
    }

    /**
     * @param string $url
     * @return string
     */
    public function getNextURL(string $url): string
    {
        if (Storage::applicationWebDirectivePath() !== DS) {
            $homeFOLDER = str_replace(DS, '_', Storage::applicationWebDirectivePath());
            $fetchURL = str_replace(DS, '_', $url);
            $data = str_replace($homeFOLDER, '', $fetchURL);
            $nextURL = str_replace('_', DS, $data);
            return ltrim($nextURL, '/');
        }

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
     * @param string $model
     * @param false $module
     * @return mixed
     * @throws \GeoIp2\Exception\AddressNotFoundException
     * @throws \JsonException
     * @throws \MaxMind\Db\Reader\InvalidDatabaseException
     * @throws \Mishusoft\Exceptions\ErrorException
     * @throws \Mishusoft\Exceptions\HttpException\HttpResponseException
     * @throws \Mishusoft\Exceptions\JsonException
     * @throws \Mishusoft\Exceptions\LogicException\InvalidArgumentException
     * @throws \Mishusoft\Exceptions\PermissionRequiredException
     * @throws \Mishusoft\Exceptions\RuntimeException
     */
    protected function loadModel(string $model, $module = false): mixed
    {
        $model = implode([$model, 'Model']);
        $rootModel = implode(DS, [MPM::modulesPath(), MPM::defaultModule(), 'Models', $model . ".php"]);

        if ($module === false) {
            $module = $this->request->getModule();
        }

        if ($module && $module !== MPM::defaultModule()) {
            $rootModel = MPM::modulesPath() . $module . DS . 'Models' . DS . $model . '.php';
        }
        if (is_readable($rootModel)) {
            require_once $rootModel;
            $model = Preloader::getClassNamespace($rootModel);
            return new $model;
        }

        Firewall::runtimeFailure("Not Found", [
            "debug" => [
                "file" => $model,
                "location" => $rootModel,
                "description" => "Required Model not found or could not load!!", ],
            "error" => ["description" => "Your requested url is broken!!"],
        ]);
        exit();
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
            return htmlspecialchars($value, ENT_QUOTES);
        }
        return '';
    }

    /**
     * @param $value
     * @return int
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
    protected function getWordParam($value): mixed
    {
        if (isset($_POST[$value]) && !empty($_POST[$value])) {
            return $_POST[$value];
        }
        return '';
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
        return '';
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
        return '';
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
        return '';
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
        return '';
    }
}
