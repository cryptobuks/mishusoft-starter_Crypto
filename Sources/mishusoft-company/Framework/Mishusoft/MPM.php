<?php

namespace Mishusoft;

use JsonException;
use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Storage\FileSystem;
use Mishusoft\System\Memory;
use Mishusoft\Utility\JSON;

class MPM extends Base
{
    public const NAME              = 'Mishusoft Packages Manager';
    public const VERSION           = '1.0.0';

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
    private static string $configFileDirectory;

    /**
     * @return string
     */
    public static function configFile():string
    {
        return self::dFile(self::dataFile('MPM', 'config'));
    }

    /**
     * @return string
     */
    public static function splittersFile():string
    {
        return self::dFile(self::dataFile('MPM', 'splitters'));
    }


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
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
                    && is_dir(implode([Storage::applicationPackagesPath(), self::$content['packages']['default']])) === true
                ) {
                    // Verify validation of current package loader.
                    if (strpos(self::$content['loader'][self::$content['packages']['default']], '.php') === true
                        && file_exists(Storage::applicationPackagesPath().self::$content['loader'][self::$content['packages']['default']]) === true
                    ) {
                        // Include current package loader.
                        include_once Storage::applicationPackagesPath().self::$content['loader'][self::$content['packages']['default']];
                    }
                }
            } elseif (is_array(self::packagesAll(['item' => 'new'])) === true) {
                if (count(self::packagesAll(['item' => 'new'])) > 0) {
                    foreach (self::packagesAll(['item' => 'new']) as $package) {
                        self::install(ucfirst($package));
                    }
                }
            } else {
                throw new RuntimeException('No package installed');
            }//end if
        }//end if
    }//end load()


    /**
     * Module monitor.
     *
     * @return void
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
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
     * @param string $packageName
     * @param array $filter
     * @return mixed
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function modulesAll(string $packageName, array $filter = []): mixed
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
                                    foreach (self::$content['modules'][$packageName]['all'] as $module => $moduleDetails) {
                                        if ((self::$content['modules'][$packageName]['all'][$module]['status'] === 'enable')
                                            && (self::$content['modules'][$packageName]['default'] === $module) === false
                                        ) {
                                            $array[] = $module;
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
     * @throws Exceptions\RuntimeException
     */
    public static function readConfigure(): bool
    {
        self::$configFileDirectory = dirname(self::configFile());
        // MPM configure file found and start reading.
        if (is_readable(self::configFile()) === true) {
            // Check file's content is string or not.
            if (empty(file_get_contents(self::configFile())) === false) {
                // Check file's content after extract is string or not.
                $content = FileSystem\Yaml::parseFile(self::configFile());
                if (is_array($content) === true) {
                    self::$content = $content;
                    // Check file's content key are valid key listed or not.
                    foreach (self::$content as $key => $value) {
                        if (in_array($key, self::VALID_KEY, true) === false) {
                            // If file's content key are not valid key listed, then throw message.
                            throw new RuntimeException('Invalid format. '.$key.' is not exists on '.self::configFile().' file.');
                        }
                    }

                    return true;
                }

                throw new RuntimeException('The content of file : '.self::configFile().' extracting failure.');
            }

            throw new RuntimeException('File : '.self::configFile().' Invalid content.');
            // end if
        }//end if

        throw new RuntimeException('File ('.self::configFile().' in '.self::$configFileDirectory.') is not readable.');
        // end if
    }//end readConfigure()


    /**
     * @param string $packageName
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function modulesPath(string $packageName = ''): string
    {
        if (empty($packageName) === true) {
            $packageName = Memory::Data('mpm')->packages->default;
        }

        // make temp modules path
        return Storage::applicationPackagesPath().$packageName.'/Modules/';
    }//end modulesPath()


    /**
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function defaultPackage(): string
    {
        return Memory::data('mpm')->packages->default;
    }//end defaultPackage()


    /**
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function defaultModule(): string
    {
        return Memory::data('mpm', ['format' => 'array'])['modules'][self::defaultPackage()]['default'];
    }//end defaultModule()


    /**
     * @param string $module
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function moduleRootController(string $module): string
    {
        // Return root controller file of module.
        return self::getControllerOfModule(self::defaultModule(), $module);
    }//end moduleRootController()


    /**
     * @param  string $module
     * @param  string $controller
     * @return string
     */
    private static function getControllerOfModule(string $module, string $controller): string
    {
        return implode(DS, [self::modulesPath().$module, 'Controllers', $controller.'Controller.php']);
        // $rootController = join([MPM::modulesPath(), CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"],DS, 'Controllers', DS, $controller, '.php']);
    }//end getControllerOfModule()


    /**
     * @param array $filter
     * @return mixed
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function packagesAll(array $filter = []): mixed
    {
        $result = '';
        $array  = [];
        if (self::readConfigure() === true) {
            if (count($filter) > 0) {
                foreach ($filter as $key => $value) {
                    if ($key === 'item') {
                        if ($value === 'default') {
                            $result = self::$content['packages']['default'];
                        }

                        if ($value === 'new') {
                            if (file_exists(Storage::applicationPackagesPath())) {
                                $dirs = scandir(realpath(Storage::applicationPackagesPath()));
                                foreach ($dirs as $index => $dir) {
                                    if ($dir === '.' || $dir === '..') {
                                        unset($dirs[$index]);
                                    }

                                    if (is_file($dir) === true) {
                                        unset($dirs[$index]);
                                    }

                                    if ($dir === self::defaultPackage()) {
                                        unset($dirs[$index]);
                                    }
                                }

                                $result = $dirs;
                            } else {
                                throw new RuntimeException\NotFoundException(Storage::applicationPackagesPath().' not found');
                            }

                        }
                    }//end if
                }//end foreach
            } else {
                $array = array_keys(self::$content['packages']['all']);
            }//end if
        }//end if

        // return CMOS::Data("mpm", ["format" => "array"])["modules"][CMOS::Data("mpm")->packages->default]["default"];
        if (empty($result) === false) {
            return $result;
        }

        return $array;
    }//end packagesAll()


    /**
     * The installer of package
     *
     * @param string $newPackage
     * @param boolean $setDefault
     * @throws Exceptions\JsonException
     * @throws Exceptions\RuntimeException
     */
    public static function install(string $newPackage = '', bool $setDefault = false): void
    {
        // Preparing to check configure file.
        if (file_exists(self::configFile()) === true) {
            if (self::readConfigure() === true) {
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

                        // Importing package property.
                        $newPackageProperties = JSON::decodeToArray(
                            file_get_contents(Storage::applicationPackagesPath().$newPackage.'.json')
                        );

                        if (array_key_exists('name', $newPackageProperties) === true) {
                            if ($newPackageProperties['name'] === $newPackage) {
                                /*
                                 * Start of importing package property
                                 * */
                                // Add package loader to mpm register.
                                if (array_key_exists('loader', $newPackageProperties) === true) {
                                    if (array_key_exists(ucfirst($newPackage), $newPackageProperties['loader']) === true) {
                                        self::$content['loader'] = array_merge(self::$content['loader'], $newPackageProperties['loader']);
                                    } else {
                                        throw new RuntimeException("The {$newPackage} loader file property not found. Please remove broken package or update broken package.");
                                    }
                                } else {
                                    throw new RuntimeException("The {$newPackage} loader property not found. Please remove broken package or update broken package.");
                                }

                                // Add package modules to mpm register.
                                if (array_key_exists('modules', $newPackageProperties)) {
                                    if (array_key_exists(ucfirst($newPackage), $newPackageProperties['modules']) === true) {
                                        self::$content['modules'] = array_merge(self::$content['modules'], $newPackageProperties['modules']);
                                    } else {
                                        throw new RuntimeException("The {$newPackage} loader file property not found. Please remove broken package or update broken package.");
                                    }
                                } else {
                                    throw new RuntimeException("The {$newPackage} modules property not found. Please remove broken package or update broken package.");
                                }

                                // end of importing package property
                            } else {
                                throw new RuntimeException("The {$newPackage} name is not matched with property. Please remove broken package or update broken package.");
                            }//end if
                        } else {
                            throw new RuntimeException("The properties of New {$newPackage} is corrupted. Please remove broken package or update broken package.");
                        }//end if

                        // collected data save to register file
                        FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                    }//end if

                    if (file_exists(Storage::applicationPackagesPath()."$newPackage.json") === false) {
                        throw new RuntimeException("New {$newPackage} have no properties. Please remove broken package or update broken package.");
                    }

                    if (file_exists(Storage::applicationPackagesPath()."$newPackage.loader.php") === false) {
                        throw new RuntimeException("The loader of New {$newPackage} is not exists. Please remove broken package or update broken package.");
                    }
                } else {
                    self::freshInstall();
                }//end if
            }//end if
        } else {
            self::freshInstall();
        }//end if
    }//end install()


    /**
     * @throws Exceptions\RuntimeException
     */
    private static function freshInstall(): void
    {
        if (file_exists(dirname(self::configFile())) === false) {
            FileSystem::makeDirectory(dirname(self::configFile()));
        }
        // Preparing to create mpm config file.
        FileSystem\Yaml::emitFile(self::configFile(), [
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
        ]);
    }//end freshInstall()


    /**
     * @param string $moduleName
     * @param string $controllerName
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function templatesHtmlResourcesRoot(string $moduleName, string $controllerName): string
    {
        return implode(DS, [self::resourcesPath().'Templates', $moduleName, $controllerName.DS]);
    }//end templatesHtmlResourcesRoot()


    /**
     * @param string $packageName
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function resourcesPath(string $packageName = ''): string
    {
        if (empty($packageName) === true) {
            $packageName = Memory::Data('mpm')->packages->default;
        }

        // make temp modules path
        return Storage::applicationPackagesPath()."$packageName/Resources/";
    }//end resourcesPath()


    /**
     * @param string $moduleName
     * @param string $controllerName
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws JsonException
     * @throws RuntimeException
     */
    public static function templatesJavascriptResourcesRoot(string $moduleName, string $controllerName): string
    {
        return implode(DS, [Storage::webResourcesPath().'related', 'Javascripts', $moduleName, $controllerName.DS]);
    }//end templatesJavascriptResourcesRoot()


    /**
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function templatesJavascriptResourcesRootLocal(): string
    {
        return self::resourcesPath().'Javascripts'.DS;
    }//end templatesJavascriptResourcesRootLocal()


    /**
     * @param string $module_name
     * @param string $packageName
     * @param string $status
     * @param boolean $set_default
     * @throws RuntimeException
     */
    public static function addModule(string $module_name, string $packageName, string $status = 'disabled', bool $set_default = false)
    {
        if (!empty($module_name)) {
            if (self::readConfigure()) {
                if (in_array($packageName, self::$content['modules'])) {
                    if (is_array(self::$content['modules'][$packageName]['all'])) {
                        if (in_array($module_name, self::$content['modules'][$packageName]['all'], true)) {
                            throw new RuntimeException("New module \"$module_name\" is already exists on ".self::configFile().' file.');
                        } else {
                            array_push(self::$content['modules'][$packageName]['all'], [$module_name => ['status' => $status]]);
                            if ($set_default) {
                                self::$content['modules'][$packageName]['default'] = $module_name;
                            }

                            FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                        }
                    }
                }
            }
        } else {
            throw new RuntimeException('Empty module name set.');
        }//end if
    }//end addModule()


    /**
     * @param string $module_name
     * @param string $packageName
     * @param string $status
     * @param boolean $set_default
     * @throws RuntimeException\NotFoundException
     * @throws RuntimeException
     */
    public static function updateModule(string $module_name, string $packageName, string $status = 'disabled', bool $set_default = false): void
    {
        if (!empty($module_name)) {
            if (self::readConfigure()) {
                if (in_array($packageName, self::$content['modules'])) {
                    if (is_array(self::$content['modules'][$packageName]['all'])) {
                        if (in_array($module_name, self::$content['modules'][$packageName]['all'])) {
                            self::$content['modules'][$packageName]['all'][$module_name]['status'] = $status;
                            if ($set_default) {
                                self::$content['modules'][$packageName]['default'] = $module_name;
                            }

                            FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                        } else {
                            throw new RuntimeException\NotFoundException(
                                "Module \"$module_name\" is not exists on ".self::configFile().' file.'
                            );
                        }
                    }
                }
            }
        } else {
            trigger_error('Empty module name set.');
        }//end if
    }//end updateModule()


    /**
     * @param string $module_name
     * @param string $packageName
     * @throws RuntimeException
     */
    public static function removeModule(string $module_name, string $packageName): void
    {
        if (!empty($module_name)) {
            if (self::readConfigure()) {
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

                            FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                        } else {
                            throw new RuntimeException\NotFoundException("Module \"$module_name\" is not exists on ".self::configFile().' file.');
                        }//end if
                    }//end if
                }//end if
            }
        } else {
            trigger_error('Empty module name set.');
        }//end if
    }//end removeModule()


    /**
     * @param string $module_name
     * @param string $packageName
     * @return mixed
     * @throws RuntimeException
     */
    public static function isEnabledModule(string $module_name, string $packageName): mixed
    {
        if (self::readConfigure()) {
            if (self::$content['modules'][$packageName]['all'][$module_name]['status'] = 'enable') {
                return true;
            }

            return false;
        }
        return false;
    }//end isEnabledModule()


    /**
     * @param string $module_name
     * @param string $packageName
     * @return bool
     * @throws RuntimeException
     */
    public static function isDisabledModule(string $module_name, string $packageName): bool
    {
        if (self::readConfigure()) {
            if (self::$content['modules'][$packageName]['all'][$module_name]['status'] = 'disabled') {
                return true;
            }

            return false;
        }
        return false;
    }//end isDisabledModule()


    /**
     * @param string $property
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function getProperty(string $property, string $package = ''): string
    {
        $package = empty($package) ? Memory::Data('mpm')->packages->default : $package;
        if (!empty(Memory::Data('mpm')->packages->default)) {
            $properties = json_decode(file_get_contents(self::propertiesFile($package)), true, 512, JSON_THROW_ON_ERROR);
            if (is_array($properties) && count($properties) > 0) {
                if (array_key_exists($property, $properties)) {
                    return $properties[$property];
                }
            }
        }

        return false;
    }//end getProperty()


    /**
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function propertiesFile(string $package = ''): string
    {
        $package = empty($package) ? self::defaultPackage() : $package;
        return Storage::applicationPackagesPath()."$package.json";
    }//end propertiesFile()


    /**
     * @param string $packageName
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function databasesPath(string $packageName = ''): string
    {
        // Make temp modules path.
        if (empty($packageName) === true) {
            $packageName = Memory::Data('mpm')->packages->default;
        }

        return Storage::applicationPackagesPath()."$packageName/Databases/";
    }//end databasesPath()


    /**
     * @param string $controller
     * @param string $module
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\JsonException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws JsonException
     */
    public static function runtimeRootController(string $controller, string $module = ''): string
    {
        // Check module is set or not.
        if (empty($module) === true) {
            $module = self::defaultModule();
        }

        return self::getControllerOfModule($module, $controller);
    }//end runtimeRootController()


    public static function importMysqlDB($db, $filename, $db_prefix = false, $pattern = false): void
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
