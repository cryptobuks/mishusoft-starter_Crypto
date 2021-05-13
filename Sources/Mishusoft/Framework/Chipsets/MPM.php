<?php

namespace Mishusoft\Framework\Chipsets;

use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class MPM
{
    const NAME = "Mishusoft Packages Manager";
    const VERSION = "1.0.0";
    const packageConfigFile = PHP_RUNTIME_REGISTRIES_PATH . 'mpm.json';

    /*mpm valid keys*/
    const  valid_key = array("name", "version", "loader", "packages", "modules", "config");

    private static array $content = array();
    private static string $packageConfigFileDirectory;

    public static function load()
    {
        self::moduleMonitor();
        return self::readConfigure(function () {
            /*verify name from mishusoft package manager*/
            if (array_key_exists("name", self::$content)) {
                /*verify installed packages*/
                if (array_key_exists("packages", self::$content)) {
                    if (is_array(self::$content["packages"])) {
                        if (count(self::$content["packages"]["all"]) > 0) {
                            /*verify validation of current package*/
                            if (!empty(self::$content["packages"]["default"]) and in_array(self::$content["packages"]["default"], self::$content["packages"]["all"])) {
                                /*verify validation of current package directory*/
                                if (is_dir(join([MS_PACKAGES_PATH, self::$content["packages"]["default"]]))) {
                                    /*verify validation of current package loader*/
                                    if (strpos(self::$content["loader"][self::$content["packages"]["default"]], ".php")) {
                                        if (file_exists(join([MS_PACKAGES_PATH, self::$content["loader"][self::$content["packages"]["default"]]]))) {
                                            /*include current package loader*/
                                            include_once MS_PACKAGES_PATH . self::$content["loader"][self::$content["packages"]["default"]];
                                        }
                                    }
                                }
                            }
                        } else {
                            if (is_array(self::packagesAll(["item" => "new"]))) {
                                if (count(self::packagesAll(["item" => "new"])) > 0) {
                                    foreach (self::packagesAll(["item" => "new"]) as $package) {
                                        self::install(ucfirst($package));
                                    }
                                }
                            } else {
                                trigger_error("No package installed");
                            }
                        }
                    }
                }
            }
        });
    }

    public static function moduleMonitor()
    {
        /*check orphan modules*/
        foreach (self::modulesAll(self::defaultPackage(), ["status" => "enable"]) as $module) {
            if (!file_exists(self::moduleRootController($module))) {
                System::setRuntimeErrors(["cors" => "The root controller of installed module <b>" . $module . "</b> is not found.", "normal" => "one-of-module-broken"]);
            }
        }

        /*check uninstalled modules*/
        if (count(self::modulesAll(self::defaultPackage(), ["item" => "new"])) > 0) {
            foreach (self::modulesAll(self::defaultPackage(), ["item" => "new"]) as $module) {
                System::setRuntimeErrors(["cors" => "The module <b>" . $module . "</b> is not installed.", "normal" => "one-of-module-broken"]);
            }
        }
    }

    /**
     * Get all modules from package
     * @param string $package_name
     * @param array $filter
     * @return mixed
     */
    public static function modulesAll(string $package_name, array $filter = [])
    {
        return self::readConfigure(function () use ($package_name, $filter) {
            $result = "";
            $array = array();
            foreach (self::$content ["modules"] as $package => $details) {
                if ($package_name === $package) {
                    if (count($filter) > 0) {
                        foreach ($filter as $key => $value) {
                            if ($key === "item") {
                                if ($value === "default") {
                                    $result = self::$content ["modules"][$package_name]["default"];
                                }
                                if ($value === "new") {
                                    $dirs = scandir(self::modulesPath($package_name), SCANDIR_SORT_ASCENDING);
                                    foreach ($dirs as $index => $dir) {
                                        if ($dir === "." or $dir === "..") {
                                            unset($dirs[$index]);
                                        }
                                        if (in_array($dir, self::modulesAll(self::defaultPackage(), ["status" => "enable"]))) {
                                            unset($dirs[$index]);
                                        }
                                        if ($dir === self::defaultModule()) {
                                            unset($dirs[$index]);
                                        }
                                    }

                                    $result = $dirs;
                                }
                            }
                            if ($key === "status") {
                                if ($value === "enable") {
                                    foreach (self::$content ["modules"][$package_name]["all"] as $module => $details) {
                                        if (self::$content ["modules"][$package_name]["all"][$module]["status"] = "enable") {
                                            if (!self::$content ["modules"][$package_name]["default"] === $module) {
                                                array_push($array, $module);
                                            }
                                        }
                                    }
                                }
                                if ($value === "disabled") {
                                    foreach (self::$content ["modules"][$package_name]["all"] as $module) {
                                        if (self::$content ["modules"][$package_name]["all"][$module]["status"] = "disabled") {
                                            array_push($array, $module);
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        $array = array_keys(self::$content ["modules"][$package_name]["all"]);
                    }
                }
            }
            return !empty($result) ? $result : $array;
        });

        //return CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"];
    }

    /**
     * Get all records from configure file
     * @param callable $callback
     * @return mixed
     */
    public static function readConfigure(callable $callback)
    {
        self::$packageConfigFileDirectory = dirname(self::packageConfigFile);
        /*Autoload::log('MPM configure file found and start reading.');*/
        if (is_readable(self::packageConfigFile)) {
            /*check file's content is string or not*/
            if (!empty(file_get_contents(self::packageConfigFile))) {
                /*check file's content after extract is string or not*/
                if (is_array(_JSON::decode_to_array(file_get_contents(self::packageConfigFile)))) {
                    self::$content = _JSON::decode_to_array(file_get_contents(self::packageConfigFile));
                    /*check file's content key are valid key listed or not*/
                    foreach (self::$content as $key => $value) {
                        if (!in_array($key, self::valid_key)) {
                            /*if file's content key are not valid key listed, then throw message*/
                            trigger_error("Invalid format. $key is not exists on " . self::packageConfigFile . " file.");
                        }
                    }

                    if (is_callable($callback)) {
                        return $callback();
                    }

                } else {
                    return trigger_error("The content of file : " . self::packageConfigFile . " extracting failure.");
                }
            } else {
                return trigger_error("File : " . self::packageConfigFile . " Invalid content.");
            }
        } else {
            return trigger_error("File (" . self::packageConfigFile . " in " . self::$packageConfigFileDirectory . ") is not readable.");
        }
    }

    /**
     * @param string $package_name
     * @return string
     */
    public static function modulesPath(string $package_name = ""): string
    {
        $package_name = empty($package_name) ? Memory::Data("mpm")->packages->default : $package_name;
        /*make temp modules path*/
        return MS_PACKAGES_PATH . "$package_name/Modules/";

    }

    /**
     * @return mixed
     */
    public static function defaultPackage()
    {
        return Memory::Data("mpm")->packages->default;
    }

    /**
     * @return mixed
     */
    public static function defaultModule()
    {
        return Memory::Data("mpm", ["format" => "array"])["modules"][self::defaultPackage()]["default"];
    }

    /**
     * @param string $module
     * @return string
     */
    public static function moduleRootController(string $module): string
    {
        /*return root controller file of module*/
        return self::getControllerOfModule(self::defaultModule(), $module);
    }

    /**
     * @param string $module
     * @param string $controller
     * @return string
     */
    private static function getControllerOfModule(string $module, string $controller): string
    {
        return join(DIRECTORY_SEPARATOR, [MPM::modulesPath() . $module, 'Controllers', "{$controller}Controller.php"]);
        /*$rootController = join([MPM::modulesPath(), CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"],DS, 'Controllers', DS, $controller, '.php']);*/
    }

    /**
     * @param array $filter
     * @return mixed
     */
    public static function packagesAll(array $filter = [])
    {
        return self::readConfigure(function () use ($filter) {
            $result = "";
            $array = array();
            if (count($filter) > 0) {
                foreach ($filter as $key => $value) {
                    if ($key === "item") {
                        if ($value === "default") {
                            $result = self::$content ["packages"]["default"];
                        }
                        if ($value === "new") {
                            $dirs = scandir(realpath(MS_PACKAGES_PATH));
                            foreach ($dirs as $index => $dir) {
                                if ($dir === "." or $dir === "..") {
                                    unset($dirs[$index]);
                                }
                                if (is_file($dir)) {
                                    unset($dirs[$index]);
                                }
                                if ($dir === self::defaultPackage()) {
                                    unset($dirs[$index]);
                                }
                            }

                            $result = $dirs;
                        }
                    }
                }
            } else {
                $array = array_keys(self::$content ["packages"]["all"]);
            }
            return !empty($result) ? $result : $array;
        });

        //return CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"];
    }

    /**
     * The installer of package
     * @param string $newPackage
     * @param bool $setDefault
     */
    public static function install(string $newPackage = "", bool $setDefault = false)
    {
        /*Autoload::log('Preparing to check configure file.');*/
        if (file_exists(self::packageConfigFile)) {
            self::readConfigure(function () use ($setDefault, $newPackage) {
                if (is_array(self::$content ["packages"]["all"])) {

                    if (in_array($newPackage, self::$content ["packages"]["all"])) {
                        trigger_error("New {$newPackage} is already installed.");
                    } else {
                        array_push(self::$content ["packages"]["all"], $newPackage);

                        if (empty(self::$content["packages"]["default"])) {
                            self::$content["packages"]["default"] = $newPackage;
                        }
                        if ($setDefault) {
                            self::$content["packages"]["default"] = $newPackage;
                        }

                        /*importing package property*/
                        $newPackageProperties = _JSON::decode_to_array(file_get_contents(MS_PACKAGES_PATH . "$newPackage.json"));

                        if (array_key_exists("name", $newPackageProperties)) {
                            if ($newPackageProperties["name"] === $newPackage) {
                                /*start of importing package property*/
                                /*add package loader to mpm register*/
                                if (array_key_exists("loader", $newPackageProperties)) {
                                    if (array_key_exists(ucfirst($newPackage), $newPackageProperties["loader"])) {
                                        self::$content ["loader"] = array_merge(self::$content ["loader"], $newPackageProperties["loader"]);
                                    } else {
                                        trigger_error("The {$newPackage} loader file property not found. Please remove broken package or update broken package.");
                                    }
                                } else {
                                    trigger_error("The {$newPackage} loader property not found. Please remove broken package or update broken package.");
                                }

                                /*add package modules to mpm register*/
                                if (array_key_exists("modules", $newPackageProperties)) {
                                    if (array_key_exists(ucfirst($newPackage), $newPackageProperties["modules"])) {
                                        self::$content ["modules"] = array_merge(self::$content ["modules"], $newPackageProperties["modules"]);
                                    } else {
                                        trigger_error("The {$newPackage} loader file property not found. Please remove broken package or update broken package.");
                                    }
                                } else {
                                    trigger_error("The {$newPackage} modules property not found. Please remove broken package or update broken package.");
                                }
                                /*end of importing package property*/

                            } else {
                                trigger_error("The {$newPackage} name is not matched with property. Please remove broken package or update broken package.");
                            }
                        } else {
                            trigger_error("The properties of New {$newPackage} is corrupted. Please remove broken package or update broken package.");
                        }

                        /*collected data save to register file*/
                        Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));
                    }


                    if (!file_exists(MS_PACKAGES_PATH . "$newPackage.json")) {
                        trigger_error("New {$newPackage} have no properties. Please remove broken package or update broken package.");
                    }

                    if (!file_exists(MS_PACKAGES_PATH . "$newPackage.loader.php")) {
                        trigger_error("The loader of New {$newPackage} is not exists. Please remove broken package or update broken package.");
                    }

                } else {
                    self::freshInstall();
                }
            });
        } else {
            self::freshInstall();
        }
    }

    private static function freshInstall()
    {
        /*Autoload::log('Preparing to create framework install file.');*/
        if (fopen(self::packageConfigFile, 'w+')) {
            Stream::exec(self::packageConfigFile);
            Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string([
                "name" => self::NAME,
                "version" => self::VERSION,
                "packages" => [
                    "default" => "",
                    "all" => []
                ],
                "loader" => [],
                "modules" => [],
                "config" => [
                    "database" => [
                        "activation" => true
                    ]
                ]
            ]));
        }
    }

    /**
     * @param string $moduleName
     * @param string $controllerName
     * @return mixed
     */
    public static function TemplatesHtmlResourcesRoot(string $moduleName, string $controllerName)
    {
        return join(DIRECTORY_SEPARATOR, [self::resourcesPath() . "Templates", $moduleName, $controllerName . DIRECTORY_SEPARATOR]);
    }

    /**
     * @param string $package_name
     * @return string
     */
    public static function resourcesPath(string $package_name = ""): string
    {
        $package_name = empty($package_name) ? Memory::Data("mpm")->packages->default : $package_name;
        /*make temp modules path*/
        return MS_PACKAGES_PATH . "$package_name/Resources/";

    }

    /**
     * @param string $moduleName
     * @param string $controllerName
     * @return mixed
     */
    public static function TemplatesJavascriptResourcesRoot(string $moduleName, string $controllerName)
    {
        return join(DIRECTORY_SEPARATOR, [Media::getWebResourcesPath() . "related", "Javascripts", $moduleName, $controllerName . DIRECTORY_SEPARATOR]);
    }

    /**
     * @return string
     */
    public static function TemplatesJavascriptResourcesRootLocal(): string
    {
        return self::resourcesPath() . "Javascripts" . DS;
    }

    /**
     * @param string $module_name
     * @param string $package_name
     * @param string $status
     * @param bool $set_default
     */
    public static function addModule(string $module_name, string $package_name, string $status = "disabled", bool $set_default = false)
    {
        if (!empty($module_name)) {
            self::readConfigure(function () use ($set_default, $status, $package_name, $module_name) {
                if (in_array($package_name, self::$content ["modules"])) {
                    if (is_array(self::$content ["modules"][$package_name]["all"])) {
                        if (in_array($module_name, self::$content ["modules"][$package_name]["all"])) {
                            trigger_error("New module \"$module_name\" is already exists on " . self::packageConfigFile . " file.");
                        } else {
                            array_push(self::$content ["modules"][$package_name]["all"], [$module_name => ["status" => $status]]);
                            if ($set_default) {
                                self::$content ["modules"][$package_name]["default"] = $module_name;
                            }
                            Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));
                        }
                    }
                }
            });
        } else {
            trigger_error("Empty module name set.");
        }
    }

    /**
     * @param string $module_name
     * @param string $package_name
     * @param string $status
     * @param bool $set_default
     */
    public static function updateModule(string $module_name, string $package_name, string $status = "disabled", bool $set_default = false)
    {
        if (!empty($module_name)) {
            self::readConfigure(function () use ($set_default, $status, $package_name, $module_name) {
                if (in_array($package_name, self::$content ["modules"])) {
                    if (is_array(self::$content ["modules"][$package_name]["all"])) {
                        if (in_array($module_name, self::$content ["modules"][$package_name]["all"])) {
                            self::$content ["modules"][$package_name]["all"][$module_name]["status"] = $status;
                            if ($set_default) {
                                self::$content ["modules"][$package_name]["default"] = $module_name;
                            }
                            Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));

                        } else {
                            trigger_error("Module \"$module_name\" is not exists on " . self::packageConfigFile . " file.");
                        }
                    }
                }
            });
        } else {
            trigger_error("Empty module name set.");
        }
    }

    /**
     * @param string $module_name
     * @param string $package_name
     */
    public static function removeModule(string $module_name, string $package_name)
    {
        if (!empty($module_name)) {
            self::readConfigure(function () use ($package_name, $module_name) {
                if (in_array($package_name, self::$content ["modules"])) {
                    if (is_array(self::$content ["modules"][$package_name]["all"])) {
                        if (in_array($module_name, self::$content ["modules"][$package_name]["all"])) {
                            foreach (self::$content ["modules"][$package_name]["all"] as $module => $details) {
                                if ($module === $module_name) {
                                    unset(self::$content ["modules"][$package_name]["all"][$module]);
                                    if (self::$content ["modules"][$package_name]["default"] === $module_name) {
                                        if (in_array("Main", self::$content ["modules"][$package_name]["all"])) {
                                            self::$content ["modules"][$package_name]["default"] = "Main";
                                            self::$content ["modules"][$package_name]["all"]["Main"]["status"] = "enable";
                                        } else {
                                            if (in_array("Mishusoft", self::$content ["modules"][$package_name]["all"])) {
                                                self::$content ["modules"][$package_name]["default"] = "Mishusoft";
                                                self::$content ["modules"][$package_name]["all"]["Mishusoft"]["status"] = "enable";
                                            }
                                        }
                                    }
                                }
                            }
                            Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));

                        } else {
                            trigger_error("Module \"$module_name\" is not exists on " . self::packageConfigFile . " file.");
                        }
                    }
                }
            });
        } else {
            trigger_error("Empty module name set.");
        }
    }

    /**
     * @param string $module_name
     * @param string $package_name
     * @return mixed
     */
    public static function isEnabledModule(string $module_name, string $package_name)
    {
        return self::readConfigure(function () use ($module_name, $package_name) {
            if (self::$content ["modules"][$package_name]["all"][$module_name]["status"] = "enable") {
                return true;
            } else {
                return false;
            }
        });
    }

    /**
     * @param string $module_name
     * @param string $package_name
     * @return mixed
     */
    public static function isDisabledModule(string $module_name, string $package_name)
    {
        return self::readConfigure(function () use ($module_name, $package_name) {
            if (self::$content ["modules"][$package_name]["all"][$module_name]["status"] = "disabled") {
                return true;
            } else {
                return false;
            }
        });
    }

    /**
     * @param string $property
     * @param string $package
     * @return string|false
     */
    public static function getProperty(string $property, string $package = ""): string
    {
        $package = empty($package) ? Memory::Data("mpm")->packages->default : $package;
        if (!empty(Memory::Data("mpm")->packages->default)) {
            $properties = json_decode(file_get_contents(self::propertiesFile($package)), true);
            if (is_array($properties) and count($properties) > 0) {
                if (array_key_exists($property, $properties)) {
                    return $properties[$property];
                }
            }
        }

        return false;
    }

    /**
     * @param string $package
     * @return string
     */
    public static function propertiesFile(string $package = ""): string
    {
        $package = empty($package) ? self::defaultPackage() : $package;
        return MS_PACKAGES_PATH . "$package.json";

    }

    /**
     * @param string $package_name
     * @return string
     */
    public static function databasesPath(string $package_name = ""): string
    {
        /*make temp modules path*/
        $package_name = empty($package_name) ? Memory::Data("mpm")->packages->default : $package_name;
        return MS_PACKAGES_PATH . "$package_name/Databases/";

    }

    /**
     * @param string $controller
     * @param string $module
     * @return string
     */
    public static function runtimeRootController(string $controller, string $module = ""): string
    {
        /*check module is set or not*/
        $module = empty($module) ? self::defaultModule() : $module;
        return self::getControllerOfModule($module, $controller);
    }

    public static function importMysqlDB($db, $filename, $db_prefix = false, $pattern = false)
    {
        /*check prefix variable*/
        if (!$db_prefix) {
            $db_prefix = DbPREFIX;
        }

        /*check $pattern variable*/
        if (!$pattern) {
            $pattern = '/{DB_PREFIX}/';
        }

        /*check $filename*/
        if (file_exists($filename)) {
            $tempLine = '';
            $lines = file($filename); // Read entire file

            foreach ($lines as $line) {
                // Skip it if it's a comment
                if (substr($line, 0, 2) === '--' || $line === '' || substr($line, 0, 2) === '/*')
                    continue;

                // Add this line to the current segment
                $tempLine .= $line;
                // If it has a semicolon at the end, it's the end of the query
                if (substr(trim($line), -1, 1) === ';') {
                    $realData = preg_replace($pattern, $db_prefix, $tempLine);
                    $status = $db->query($realData);
                    if (!$status) {
                        print('Error performing query: \'<strong>' . $realData . '\'. <br /><br />');
                    }
                    $tempLine = '';
                }
            }
        }
    }

    function __destruct()
    {

    }

}