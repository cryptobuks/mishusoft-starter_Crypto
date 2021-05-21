<?php

namespace Mishusoft\Framework\Chipsets;

use Mishusoft\Framework\Chipsets\System\Memory;
use Mishusoft\Framework\Chipsets\Utility\_JSON;
use Mishusoft\Framework\Chipsets\Utility\Stream;

class MPM
{
    public const NAME              = 'Mishusoft Packages Manager';
    public const VERSION           = '1.0.0';
    public const packageConfigFile = PHP_RUNTIME_REGISTRIES_PATH.'mpm.json';

    /**
     * MPM valid keys.
     *
     * @var array
     */
    public const VALID_KEY = [
        'name',
        'version',
        'loader',
        'packages',
        'modules',
        'config',
    ];

    /**
     * @var array
     */
    private static array $content = [];

    /**
     * @var string
     */
    private static string $packageConfigFileDirectory;


    /**
     * @throws \JsonException
     */
    public static function load(): void
    {
        self::moduleMonitor();
        // Verify name from mishusoft package manager.
        // Verify installed packages.
        if ((self::readConfigure() === true)
            && array_key_exists('name', self::$content) === true
            && array_key_exists('packages', self::$content) === true
            && is_array(self::$content['packages']) === true
        ) {
            if (count(self::$content['packages']['all']) > 0) {
                // Verify validation of current package.
                // Verify validation of current package directory.
                if (empty(self::$content['packages']['default']) === false
                    && in_array(self::$content['packages']['default'], self::$content['packages']['all'], true) === true
                    && is_dir(implode([MS_PACKAGES_PATH, self::$content['packages']['default']])) === true
                ) {
                    // Verify validation of current package loader.
                    if (strpos(self::$content['loader'][self::$content['packages']['default']], '.php') === true
                        && file_exists(MS_PACKAGES_PATH.self::$content['loader'][self::$content['packages']['default']]) === true
                    ) {
                        // Include current package loader.
                        include_once MS_PACKAGES_PATH.self::$content['loader'][self::$content['packages']['default']];
                    }
                }
            } else if (is_array(self::packagesAll(['item' => 'new'])) === true) {
                if (count(self::packagesAll(['item' => 'new'])) > 0) {
                    foreach (self::packagesAll(['item' => 'new']) as $package) {
                        self::install(ucfirst($package));
                    }
                }
            } else {
                trigger_error('No package installed');
            }//end if
        }//end if

    }//end load()


    /**
     * Module monitor.
     *
     * @return void
     */
    public static function moduleMonitor(): void
    {
        // Check orphan modules.
        foreach (self::modulesAll(self::defaultPackage(), ['status' => 'enable']) as $module) {
            if (file_exists(self::moduleRootController($module)) === false) {
                System::setRuntimeErrors(
                    [
                        'cors'   => 'The root controller of installed module <b>'.$module.'</b> is not found.',
                        'normal' => 'one-of-module-broken',
                    ]
                );
            }
        }

        // Check uninstalled modules.
        if (count(self::modulesAll(self::defaultPackage(), ['item' => 'new'])) > 0) {
            foreach (self::modulesAll(self::defaultPackage(), ['item' => 'new']) as $module) {
                System::setRuntimeErrors(
                    [
                        'cors'   => 'The module <b>'.$module.'</b> is not installed.',
                        'normal' => 'one-of-module-broken',
                    ]
                );
            }
        }

    }//end moduleMonitor()


    /**
     * Get all modules from package
     *
     * @param  string $packageName
     * @param  array  $filter
     * @throws \JsonException
     */
    public static function modulesAll(string $packageName, array $filter=[])
    {
        $result = '';
        $array  = [];
        if (self::readConfigure() === true) {
            foreach (self::$content['modules'] as $package => $details) {
                if ($packageName === $package) {
                    if (count($filter) > 0) {
                        foreach ($filter as $key => $value) {
                            if ($key === 'item') {
                                if ($value === 'default') {
                                    $result = self::$content['modules'][$packageName]['default'];
                                }

                                if ($value === 'new') {
                                    $dirs = scandir(self::modulesPath($packageName), SCANDIR_SORT_ASCENDING);
                                    foreach ($dirs as $index => $dir) {
                                        if ($dir === '.' || $dir === '..') {
                                            unset($dirs[$index]);
                                        }

                                        if (in_array($dir, self::modulesAll(self::defaultPackage(), ['status' => 'enable']), true) === true) {
                                            unset($dirs[$index]);
                                        }

                                        if ($dir === self::defaultModule()) {
                                            unset($dirs[$index]);
                                        }
                                    }

                                    $result = $dirs;
                                }
                            }//end if

                            if ($key === 'status') {
                                if ($value === 'enable') {
                                    foreach (self::$content['modules'][$packageName]['all'] as $module => $details) {
                                        if (self::$content['modules'][$packageName]['all'][$module]['status'] === 'enable') {
                                            if ((self::$content['modules'][$packageName]['default'] === $module) === false) {
                                                $array[] = $module;
                                            }
                                        }
                                    }
                                }

                                if ($value === 'disabled') {
                                    foreach (self::$content['modules'][$packageName]['all'] as $module) {
                                        if (self::$content['modules'][$packageName]['all'][$module]['status'] === 'disabled') {
                                            $array[] = $module;
                                        }
                                    }
                                }
                            }
                        }//end foreach
                    } else {
                        $array = array_keys(self::$content['modules'][$packageName]['all']);
                    }//end if
                }//end if
            }//end foreach
        }//end if

        if (empty($result) === false) {
            return $result;
        }

        return $array;

    }//end modulesAll()


    /**
     * Get all records from configure file
     *
     * @return boolean
     * @throws \JsonException
     */
    public static function readConfigure(): bool
    {
        self::$packageConfigFileDirectory = dirname(self::packageConfigFile);
        // MPM configure file found and start reading.
        if (is_readable(self::packageConfigFile) === true) {
            // Check file's content is string or not.
            if (empty(file_get_contents(self::packageConfigFile)) === false) {
                // Check file's content after extract is string or not.
                if (is_array(_JSON::decodeToArray(file_get_contents(self::packageConfigFile))) === true) {
                    self::$content = _JSON::decodeToArray(file_get_contents(self::packageConfigFile));
                    // Check file's content key are valid key listed or not.
                    foreach (self::$content as $key => $value) {
                        if (in_array($key, self::VALID_KEY, true) === false) {
                            // If file's content key are not valid key listed, then throw message.
                            trigger_error('Invalid format. '.$key.' is not exists on '.self::packageConfigFile.' file.');
                        }
                    }

                    return true;
                }

                return trigger_error('The content of file : '.self::packageConfigFile.' extracting failure.');
            }

            return trigger_error('File : '.self::packageConfigFile.' Invalid content.');
            // end if
        }//end if

        return trigger_error('File ('.self::packageConfigFile.' in '.self::$packageConfigFileDirectory.') is not readable.');
        // end if

    }//end readConfigure()


    /**
     * @param  string $packagename
     * @return string
     */
    public static function modulesPath(string $packagename=''): string
    {
        if (empty($packagename)) {
            $packagename = Memory::Data('mpm')->packages->default;
        }

        // make temp modules path
        return MS_PACKAGES_PATH."$packagename/Modules/";

    }//end modulesPath()


    /**
     * @return mixed
     */
    public static function defaultPackage()
    {
        return Memory::data('mpm')->packages->default;

    }//end defaultPackage()


    /**
     * @return mixed
     */
    public static function defaultModule()
    {
        return Memory::data('mpm', ['format' => 'array'])['modules'][self::defaultPackage()]['default'];

    }//end defaultModule()


    /**
     * @param  string $module
     * @return string
     */
    public static function moduleRootController(string $module): string
    {
        // return root controller file of module
        return self::getControllerOfModule(self::defaultModule(), $module);

    }//end moduleRootController()


    /**
     * @param  string $module
     * @param  string $controller
     * @return string
     */
    private static function getControllerOfModule(string $module, string $controller): string
    {
        return implode(DIRECTORY_SEPARATOR, [self::modulesPath().$module, 'Controllers', "{$controller}Controller.php"]);
        // $rootController = join([MPM::modulesPath(), CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"],DS, 'Controllers', DS, $controller, '.php']);

    }//end getControllerOfModule()


    /**
     * @param  array $filter
     * @return mixed
     */
    public static function packagesAll(array $filter=[])
    {
        return self::readConfigure(
            function () use ($filter) {
                $result = '';
                $array  = [];
                if (count($filter) > 0) {
                    foreach ($filter as $key => $value) {
                        if ($key === 'item') {
                            if ($value === 'default') {
                                $result = self::$content['packages']['default'];
                            }

                            if ($value === 'new') {
                                $dirs = scandir(realpath(MS_PACKAGES_PATH));
                                foreach ($dirs as $index => $dir) {
                                    if ($dir === '.' or $dir === '..') {
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
                        }//end if
                    }//end foreach
                } else {
                    $array = array_keys(self::$content['packages']['all']);
                }//end if

                return !empty($result) ? $result : $array;
            }
        );

        // return CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"];

    }//end packagesAll()


    /**
     * The installer of package
     *
     * @param  string  $newPackage
     * @param  boolean $setDefault
     * @throws \JsonException
     */
    public static function install(string $newPackage='', bool $setDefault=false): void
    {
        // Preparing to check configure file.
        if (file_exists(self::packageConfigFile) === true) {
            self::readConfigure(
                function () use ($setDefault, $newPackage) {
                    if (is_array(self::$content['packages']['all']) === true) {
                        if (in_array($newPackage, self::$content['packages']['all'], true) === true) {
                            trigger_error('New '.$newPackage.' is already installed.');
                        } else {
                            self::$content['packages']['all'][] = $newPackage;

                            if (empty(self::$content['packages']['default']) === true) {
                                self::$content['packages']['default'] = $newPackage;
                            }

                            if ($setDefault === true) {
                                self::$content['packages']['default'] = $newPackage;
                            }

                            // importing package property
                            $newPackageProperties = _JSON::decodeToArray(
                                file_get_contents(MS_PACKAGES_PATH.$newPackage.'.json')
                            );

                            if (array_key_exists('name', $newPackageProperties) === true) {
                                if ($newPackageProperties['name'] === $newPackage) {
                                    /*
                                     * Start of importing package property
                                     * */
                                    // Add package loader to mpm register.
                                    if (array_key_exists('loader', $newPackageProperties) === true) {
                                        if (array_key_exists(ucfirst($newPackage), $newPackageProperties['loader'])) {
                                            self::$content['loader'] = array_merge(self::$content['loader'], $newPackageProperties['loader']);
                                        } else {
                                            trigger_error("The {$newPackage} loader file property not found. Please remove broken package or update broken package.");
                                        }
                                    } else {
                                        trigger_error("The {$newPackage} loader property not found. Please remove broken package or update broken package.");
                                    }

                                    // add package modules to mpm register
                                    if (array_key_exists('modules', $newPackageProperties)) {
                                        if (array_key_exists(ucfirst($newPackage), $newPackageProperties['modules'])) {
                                            self::$content['modules'] = array_merge(self::$content['modules'], $newPackageProperties['modules']);
                                        } else {
                                            trigger_error("The {$newPackage} loader file property not found. Please remove broken package or update broken package.");
                                        }
                                    } else {
                                        trigger_error("The {$newPackage} modules property not found. Please remove broken package or update broken package.");
                                    }

                                    // end of importing package property
                                } else {
                                    trigger_error("The {$newPackage} name is not matched with property. Please remove broken package or update broken package.");
                                }//end if
                            } else {
                                trigger_error("The properties of New {$newPackage} is corrupted. Please remove broken package or update broken package.");
                            }//end if

                            // collected data save to register file
                            Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));
                        }//end if

                        if (!file_exists(MS_PACKAGES_PATH."$newPackage.json")) {
                            trigger_error("New {$newPackage} have no properties. Please remove broken package or update broken package.");
                        }

                        if (!file_exists(MS_PACKAGES_PATH."$newPackage.loader.php")) {
                            trigger_error("The loader of New {$newPackage} is not exists. Please remove broken package or update broken package.");
                        }
                    } else {
                        self::freshInstall();
                    }//end if
                }
            );
        } else {
            self::freshInstall();
        }//end if

    }//end install()


    /**
     * @throws \JsonException
     */
    private static function freshInstall(): void
    {
        // Autoload::log('Preparing to create framework install file.');
        if (fopen(self::packageConfigFile, 'w+')) {
            Stream::exec(self::packageConfigFile);
            Stream::saveToFile(
                self::packageConfigFile,
                _JSON::encodeToString(
                    [
                        'name'     => self::NAME,
                        'version'  => self::VERSION,
                        'packages' => [
                            'default' => '',
                            'all'     => [],
                        ],
                        'loader'   => [],
                        'modules'  => [],
                        'config'   => [
                            'database' => ['activation' => true],
                        ],
                    ]
                )
            );
        }//end if

    }//end freshInstall()


    /**
     * @param  string $moduleName
     * @param  string $controllerName
     * @return mixed
     */
    public static function templatesHtmlResourcesRoot(string $moduleName, string $controllerName): mixed
    {
        return implode(DIRECTORY_SEPARATOR, [self::resourcesPath().'Templates', $moduleName, $controllerName.DIRECTORY_SEPARATOR]);

    }//end templatesHtmlResourcesRoot()


    /**
     * @param  string $packageName
     * @return string
     */
    public static function resourcesPath(string $packageName=''): string
    {
        if (empty($packageName) === true) {
            $packageName = Memory::Data('mpm')->packages->default;
        }

        // make temp modules path
        return MS_PACKAGES_PATH."$packageName/Resources/";

    }//end resourcesPath()


    /**
     * @param  string $moduleName
     * @param  string $controllerName
     * @return mixed
     */
    public static function templatesJavascriptResourcesRoot(string $moduleName, string $controllerName): mixed
    {
        return implode(DIRECTORY_SEPARATOR, [Media::getWebResourcesPath().'related', 'Javascripts', $moduleName, $controllerName.DIRECTORY_SEPARATOR]);

    }//end templatesJavascriptResourcesRoot()


    /**
     * @return string
     */
    public static function templatesJavascriptResourcesRootLocal(): string
    {
        return self::resourcesPath().'Javascripts'.DS;

    }//end templatesJavascriptResourcesRootLocal()


    /**
     * @param string  $module_name
     * @param string  $packageName
     * @param string  $status
     * @param boolean $set_default
     */
    public static function addModule(string $module_name, string $packageName, string $status='disabled', bool $set_default=false)
    {
        if (!empty($module_name)) {
            self::readConfigure(
                function () use ($set_default, $status, $packageName, $module_name) {
                    if (in_array($packageName, self::$content['modules'])) {
                        if (is_array(self::$content['modules'][$packageName]['all'])) {
                            if (in_array($module_name, self::$content['modules'][$packageName]['all'])) {
                                trigger_error("New module \"$module_name\" is already exists on ".self::packageConfigFile.' file.');
                            } else {
                                array_push(self::$content['modules'][$packageName]['all'], [$module_name => ['status' => $status]]);
                                if ($set_default) {
                                    self::$content['modules'][$packageName]['default'] = $module_name;
                                }

                                Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));
                            }
                        }
                    }
                }
            );
        } else {
            trigger_error('Empty module name set.');
        }//end if

    }//end addModule()


    /**
     * @param string  $module_name
     * @param string  $packageName
     * @param string  $status
     * @param boolean $set_default
     */
    public static function updateModule(string $module_name, string $packageName, string $status='disabled', bool $set_default=false)
    {
        if (!empty($module_name)) {
            self::readConfigure(
                function () use ($set_default, $status, $packageName, $module_name) {
                    if (in_array($packageName, self::$content['modules'])) {
                        if (is_array(self::$content['modules'][$packageName]['all'])) {
                            if (in_array($module_name, self::$content['modules'][$packageName]['all'])) {
                                self::$content['modules'][$packageName]['all'][$module_name]['status'] = $status;
                                if ($set_default) {
                                    self::$content['modules'][$packageName]['default'] = $module_name;
                                }

                                Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));
                            } else {
                                trigger_error("Module \"$module_name\" is not exists on ".self::packageConfigFile.' file.');
                            }
                        }
                    }
                }
            );
        } else {
            trigger_error('Empty module name set.');
        }//end if

    }//end updateModule()


    /**
     * @param string $module_name
     * @param string $packageName
     */
    public static function removeModule(string $module_name, string $packageName)
    {
        if (!empty($module_name)) {
            self::readConfigure(
                function () use ($packageName, $module_name) {
                    if (in_array($packageName, self::$content['modules'])) {
                        if (is_array(self::$content['modules'][$packageName]['all'])) {
                            if (in_array($module_name, self::$content['modules'][$packageName]['all'])) {
                                foreach (self::$content['modules'][$packageName]['all'] as $module => $details) {
                                    if ($module === $module_name) {
                                        unset(self::$content['modules'][$packageName]['all'][$module]);
                                        if (self::$content['modules'][$packageName]['default'] === $module_name) {
                                            if (in_array('Main', self::$content['modules'][$packageName]['all'])) {
                                                self::$content['modules'][$packageName]['default']               = 'Main';
                                                self::$content['modules'][$packageName]['all']['Main']['status'] = 'enable';
                                            } else {
                                                if (in_array('Mishusoft', self::$content['modules'][$packageName]['all'])) {
                                                    self::$content['modules'][$packageName]['default']                    = 'Mishusoft';
                                                    self::$content['modules'][$packageName]['all']['Mishusoft']['status'] = 'enable';
                                                }
                                            }
                                        }
                                    }
                                }

                                Stream::saveToFile(self::packageConfigFile, _JSON::encode_to_string(self::$content));
                            } else {
                                trigger_error("Module \"$module_name\" is not exists on ".self::packageConfigFile.' file.');
                            }//end if
                        }//end if
                    }//end if
                }
            );
        } else {
            trigger_error('Empty module name set.');
        }//end if

    }//end removeModule()


    /**
     * @param  string $module_name
     * @param  string $packageName
     * @return mixed
     */
    public static function isEnabledModule(string $module_name, string $packageName)
    {
        return self::readConfigure(
            function () use ($module_name, $packageName) {
                if (self::$content['modules'][$packageName]['all'][$module_name]['status'] = 'enable') {
                    return true;
                } else {
                    return false;
                }
            }
        );

    }//end isEnabledModule()


    /**
     * @param  string $module_name
     * @param  string $packageName
     * @return mixed
     */
    public static function isDisabledModule(string $module_name, string $packageName)
    {
        return self::readConfigure(
            function () use ($module_name, $packageName) {
                if (self::$content['modules'][$packageName]['all'][$module_name]['status'] = 'disabled') {
                    return true;
                } else {
                    return false;
                }
            }
        );

    }//end isDisabledModule()


    /**
     * @param  string $property
     * @param  string $package
     * @return string|false
     */
    public static function getProperty(string $property, string $package=''): string
    {
        $package = empty($package) ? Memory::Data('mpm')->packages->default : $package;
        if (!empty(Memory::Data('mpm')->packages->default)) {
            $properties = json_decode(file_get_contents(self::propertiesFile($package)), true);
            if (is_array($properties) and count($properties) > 0) {
                if (array_key_exists($property, $properties)) {
                    return $properties[$property];
                }
            }
        }

        return false;

    }//end getProperty()


    /**
     * @param  string $package
     * @return string
     */
    public static function propertiesFile(string $package=''): string
    {
        $package = empty($package) ? self::defaultPackage() : $package;
        return MS_PACKAGES_PATH."$package.json";

    }//end propertiesFile()


    /**
     * @param  string $packageName
     * @return string
     */
    public static function databasesPath(string $packageName=''): string
    {
        // Make temp modules path.
        if (empty($packageName) === true) {
            $packageName = Memory::Data('mpm')->packages->default;
        }

        return MS_PACKAGES_PATH."$packageName/Databases/";

    }//end databasesPath()


    /**
     * @param  string $controller
     * @param  string $module
     * @return string
     */
    public static function runtimeRootController(string $controller, string $module=''): string
    {
        // Check module is set or not.
        if (empty($module) === true) {
            $module = self::defaultModule();
        }

        return self::getControllerOfModule($module, $controller);

    }//end runtimeRootController()


    public static function importMysqlDB($db, $filename, $db_prefix=false, $pattern=false)
    {
        // check prefix variable
        if (!$db_prefix) {
            $db_prefix = DbPREFIX;
        }

        // check $pattern variable
        if (!$pattern) {
            $pattern = '/{DB_PREFIX}/';
        }

        // check $filename
        if (file_exists($filename)) {
            $tempLine = '';
            $lines    = file($filename);
            // Read entire file.
            foreach ($lines as $line) {
                // Skip it if it's a comment
                if (substr($line, 0, 2) === '--' || $line === '' || substr($line, 0, 2) === '/*') {
                    continue;
                }

                // Add this line to the current segment.
                $tempLine .= $line;
                // If it has a semicolon at the end, it's the end of the query.
                if (substr(trim($line), -1, 1) === ';') {
                    $realData = preg_replace($pattern, $db_prefix, $tempLine);
                    $status   = $db->query($realData);
                    if (!$status) {
                        print('Error performing query: \'<strong>'.$realData.'\'. <br /><br />');
                    }

                    $tempLine = '';
                }
            }
        }//end if

    }//end importMysqlDB()


    public function __destruct()
    {

    }//end __destruct()


}//end class
