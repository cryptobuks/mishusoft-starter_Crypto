<?php

namespace Mishusoft\MPM;

use Mishusoft\Exceptions;
use Mishusoft\Exceptions\PermissionRequiredException;
use Mishusoft\MPM;
use Mishusoft\Storage;
use Mishusoft\Storage\FileSystem;
use Mishusoft\Storage\FileSystem\Yaml\Exception\RuntimeException;
use Mishusoft\System\Memory;
use Mishusoft\Utility\Debug;
use Mishusoft\Utility\Implement;

class Classic extends MPM
{

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
    public static function configFile(): string
    {
        return self::dFile(self::configDataFile('MPM', 'config.classic'));
    }


    /**
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function defaultPackage(): string
    {
        Debug::preOutput(Memory::data('mpm'));
        return Memory::data('mpm')->packages->default;
    }//end defaultPackage()


    /**
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function validDefaultPackage(string $package): string
    {
        return empty($package) ? self::defaultPackage() : $package;
    }//end defaultPackage()

    /**
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function defaultModule(): string
    {
        return Memory::data('mpm', ['format' => 'array'])['modules'][self::defaultPackage()]['default'];
    }//end defaultModule()


    /**
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function propertiesFile(string $package = ''): string
    {
        //return app databases path [root://app/Packages/databases/]
        return sprintf('%1$s%2$s.json', Storage::applicationPackagesPath(), self::validDefaultPackage($package));
    }//end propertiesFile()


    /**
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function modulesPath(string $package = ''): string
    {
        // return app modules path [root://app/Packages/PackageName/Modules/]
        return sprintf(
            '%1$s%2$sModules%3$s',
            Storage::applicationPackagesPath(),
            self::validDefaultPackage($package),
            DS
        );
    }//end modulesPath()


    /**
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function appDatabasesPath(string $package = ''): string
    {
        //return app databases path [root://app/Packages/PackageName/databases/]
        return sprintf(
            '%1$s%2$s%3$sDatabases%3$s',
            Storage::applicationPackagesPath(),
            self::validDefaultPackage($package),
            DS
        );
    }//end appDatabasesPath()

    /**
     * @param string $package
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function resourcesPath(string $package = ''): string
    {
        // return app resources path [root://app/Packages/PackageName/Modules/]
        return sprintf(
            '%1$s%2$sResources%3$s',
            Storage::applicationPackagesPath(),
            self::validDefaultPackage($package),
            DS
        );
    }//end resourcesPath()


    /**
     * @param string $moduleName
     * @param string $controllerName
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function templatesHtmlResourcesRoot(string $moduleName, string $controllerName): string
    {
        return implode(DS, [self::resourcesPath() . 'Templates', $moduleName, $controllerName . DS]);
    }//end templatesHtmlResourcesRoot()

    /**
     * @param string $moduleName
     * @param string $controllerName
     * @return string
     */
    public static function templatesJSResourcesRoot(string $moduleName, string $controllerName): string
    {
        return implode(DS, [Storage::webResourcesPath() . 'related', 'Javascripts', $moduleName, $controllerName . DS]);
    }//end templatesJavascriptResourcesRoot()


    /**
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     */
    public static function templatesJSResourcesRootLocal(): string
    {
        return self::resourcesPath() . 'Javascripts' . DS;
    }//end templatesJavascriptResourcesRootLocal()


    /**
     * @param string $module
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function moduleRootController(string $module): string
    {
        // Return root controller file of module.
        return self::controllerWithModule(self::defaultModule(), $module);
    }//end moduleRootController()

    /**
     * @param string $module
     * @param string $controller
     * @return string
     */
    private static function controllerWithModule(string $module, string $controller): string
    {
        //return app databases path [like root://app/Packages/Modules/ModuleName/Controllers/NameController.php]
        return sprintf(
            '%1$s%2$s%4$sControllers%3$sController.php',
            Storage::applicationPackagesPath(),
            $module,
            $controller,
            DS
        );
    }//end controllerWithModule()


    /**
     * @param string $controller
     * @param string $module
     * @return string
     * @throws Exceptions\ErrorException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function runtimeRootController(string $controller, string $module = ''): string
    {
        // Check module is set or not.
        $module = empty($module) ? self::defaultModule() : $module;
        return self::controllerWithModule($module, $controller);
    }//end runtimeRootController()


    /**
     * Get all records from configure file
     *
     * @return boolean
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\PermissionRequiredException
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
                            throw new RuntimeException(
                                sprintf('Invalid format. %s is not exists on %s file', $key, self::configFile())
                            );
                        }
                    }

                    return true;
                }

                throw new RuntimeException(
                    sprintf('The content of file %s extracting failure', self::configFile())
                );
            }

            throw new RuntimeException(
                sprintf('Empty file %s', self::configFile())
            );
            // end if
        }//end if

        throw new PermissionRequiredException(
            sprintf('File %s in %s is not readable.', self::configFile(), self::$configFileDirectory)
        );
        // end if
    }//end readConfigure()


    /**
     * @throws Exceptions\ErrorException
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function load(): void
    {
        self::moduleMonitor();
        // Verify name from mishusoft package manager.
        // Verify installed packages.
        if (self::readConfigure() === true) {
            if (is_array(self::$content['packages']) === true && count(self::$content['packages']['all']) > 0) {
                // Verify validation of current package.
                // Verify validation of current package directory.
                if (empty(self::$content['packages']['default']) === false) {
                    $defaultPackage = self::$content['packages']['default'];
                    $packageDirectory = Storage::applicationPackagesPath() . $defaultPackage;
                    if (in_array($defaultPackage, self::$content['packages']['all'], true) === true) {
                        if (is_dir($packageDirectory) === true) {
                            // Verify validation of current package loader.
                            $fileName = self::$content['loader'][self::$content['packages']['default']];
                            if (strpos($fileName, '.php') === true) {
                                $currentPackageLoaderFile = Storage::applicationPackagesPath() . $fileName;
                                if (file_exists($currentPackageLoaderFile) === true) {
                                    // Include current package loader.
                                    include_once $currentPackageLoaderFile;
                                } else {
                                    throw new Exceptions\RuntimeException\NotFoundException(
                                        sprintf(' %s not found', $currentPackageLoaderFile)
                                    );
                                }
                            }
                        } else {
                            throw new Exceptions\RuntimeException\NotFoundException(
                                sprintf('%s is not a directory', $packageDirectory)
                            );
                        }
                    }
                } else {
                    throw new Exceptions\RuntimeException\NotFoundException(
                        sprintf('Default package not found in %s', self::configFile())
                    );
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
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function moduleMonitor(): void
    {
        // Check orphan modules.
        foreach (self::modulesAll(self::defaultPackage(), ['status' => 'enable']) as $module) {
            if (file_exists(self::moduleRootController($module)) === false) {
                throw new Exceptions\RuntimeException\NotFoundException(
                    sprintf('The root controller of installed module <b>%s</b> is not found.', $module)
                );
//                System::setRuntimeErrors(
//                    [
//                        'cors'   => 'The root controller of installed module <b>'.$module.'</b> is not found.',
//                        'normal' => 'one-of-module-broken',
//                    ]
//                );
            }
        }

        // Check uninstalled modules.
        if (count(self::modulesAll(self::defaultPackage(), ['item' => 'new'])) > 0) {
            foreach (self::modulesAll(self::defaultPackage(), ['item' => 'new']) as $module) {
//                System::setRuntimeErrors(
//                    [
//                        'cors'   => 'The module <b>'.$module.'</b> is not installed.',
//                        'normal' => 'one-of-module-broken',
//                    ]
//                );
                throw new Exceptions\RuntimeException\NotFoundException(
                    sprintf('The module <b>%s</b> is not installed.', $module)
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
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function modulesAll(string $packageName, array $filter = []): mixed
    {
        $result = '';
        $array = [];
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

                                        $newModules = self::modulesAll(self::defaultPackage(), ['status' => 'enable']);
                                        if (in_array($dir, $newModules, true) === true) {
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
                                $modulesAll = self::$content['modules'][$packageName]['all'];
                                $moduleDefault = self::$content['modules'][$packageName]['default'];
                                if ($value === 'enable') {
                                    foreach ($modulesAll as $module => $moduleDetails) {
                                        if (($moduleDetails['status'] === 'enable')
                                            && ($moduleDefault === $module) === false) {
                                            $array[] = $module;
                                        }
                                    }
                                }

                                if ($value === 'disabled') {
                                    foreach ($modulesAll as $module => $moduleDetails) {
                                        if ($moduleDetails['status'] === 'disabled') {
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
     * @param array $filter
     * @return mixed
     * @throws Exceptions\ErrorException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function packagesAll(array $filter = []): mixed
    {
        $result = '';
        $array = [];
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
                                /*error(
                                    sprintf('%s not found', Storage::applicationPackagesPath()),
                                    E_USER_WARNING
                                );*/
                                throw new Exceptions\RuntimeException\NotFoundException(
                                    sprintf('%s not found', Storage::applicationPackagesPath())
                                );
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
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function install(string $newPackage = '', bool $setDefault = false): void
    {
        //Debug::preOutput(debug_backtrace());
        // Preparing to check configure file.
        if (file_exists(self::configFile()) === true) {
            if (self::readConfigure() === true) {
                if (is_array(self::$content['packages']['all']) === true) {
                    if (in_array($newPackage, self::$content['packages']['all'], true) === true) {
                        throw new RuntimeException(sprintf('New %s is already installed', $newPackage));
                    } else {
                        self::$content['packages']['all'][] = $newPackage;

                        if (empty(self::$content['packages']['default']) === true) {
                            self::$content['packages']['default'] = $newPackage;
                        }

                        if ($setDefault === true) {
                            self::$content['packages']['default'] = $newPackage;
                        }

                        $configFile = Storage::applicationPackagesPath() . $newPackage . '.json';
                        if (file_exists($configFile) === true) {
                            // Importing package property.
                            $properties = Implement::jsonDecode(
                                file_get_contents(Storage::applicationPackagesPath() . $newPackage . '.json'),
                                IMPLEMENT_JSON_IN_ARR
                            );

                            if (array_key_exists('name', $properties) === true) {
                                if ($properties['name'] === $newPackage) {
                                    /*
                                     * Start of importing package property
                                     * */
                                    // Add package loader to mpm register.
                                    if (array_key_exists('loader', $properties) === true) {
                                        if (array_key_exists(ucfirst($newPackage), $properties['loader']) === true) {
                                            self::$content['loader'] = array_merge(
                                                self::$content['loader'],
                                                $properties['loader']
                                            );
                                        } else {
                                            throw new RuntimeException(
                                                sprintf('The %s loader file property not found', $newPackage)
                                            );
                                        }
                                    } else {
                                        throw new RuntimeException(
                                            sprintf('The %s loader property not found', $newPackage)
                                        );
                                    }

                                    // Add package modules to mpm register.
                                    if (array_key_exists('modules', $properties)) {
                                        if (array_key_exists(ucfirst($newPackage), $properties['modules']) === true) {
                                            self::$content['modules'] = array_merge(
                                                self::$content['modules'],
                                                $properties['modules']
                                            );
                                        } else {
                                            throw new RuntimeException(
                                                sprintf('The %s modules property is broken', $newPackage)
                                            );
                                        }
                                    } else {
                                        throw new RuntimeException(
                                            sprintf('The %s modules property not found', $newPackage)
                                        );
                                    }

                                    // end of importing package property
                                } else {
                                    throw new RuntimeException(
                                        sprintf('The %s name is not matched with property', $newPackage)
                                    );
                                }//end if
                            } else {
                                throw new RuntimeException(
                                    sprintf(
                                        'The properties of New %s package is corrupted',
                                        $newPackage
                                    )
                                );
                            }//end if

                            // collected data save to register file
                            FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                        } else {
                            throw new RuntimeException(sprintf('New %s not found', $configFile));
                        }
                    }//end if

                    if (file_exists(Storage::applicationPackagesPath() . "$newPackage.json") === false) {
                        throw new RuntimeException(
                            sprintf(
                                'New %s have no properties',
                                $newPackage
                            )
                        );
                    }

                    if (file_exists(Storage::applicationPackagesPath() . "$newPackage.loader.php") === false) {
                        throw new RuntimeException(
                            sprintf(
                                'The loader of New %s is not exists',
                                $newPackage
                            )
                        );
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
            'name' => self::NAME,
            'version' => self::VERSION,
            'packages' => [
                'default' => '',
                'all' => [],
            ],
            'loader' => [],
            'modules' => [],
            'config' => [
                'database' => ['activation' => true],
            ],
        ]);
    }//end freshInstall()

    /**
     * @param string $module_name
     * @param string $packageName
     * @param string $status
     * @param boolean $set_default
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function addModule(
        string $module_name,
        string $packageName,
        string $status = 'disabled',
        bool $set_default = false
    ) : void {
        if (empty($module_name)=== false) {
            if ((self::readConfigure() === true)
                && in_array($packageName, self::$content['modules'], true)
                && is_array(self::$content['modules'][$packageName]['all'])) {
                if (in_array($module_name, self::$content['modules'][$packageName]['all'], true)) {
                    throw new RuntimeException(
                        sprintf('New module "%s" is already exists on %s file', $module_name, self::configFile())
                    );
                } else {
                    self::$content['modules'][$packageName]['all'][$module_name]['status'] = $status;

                    if ($set_default === true) {
                        self::$content['modules'][$packageName]['default'] = $module_name;
                    }

                    FileSystem\Yaml::emitFile(self::configFile(), self::$content);
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
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function updateModule(
        string $module_name,
        string $packageName,
        string $status = 'disabled',
        bool $set_default = false
    ): void {
        if (empty($module_name) === false) {
            if (self::readConfigure()
                && in_array($packageName, self::$content['modules'], true)
                && is_array(self::$content['modules'][$packageName]['all'])) {
                if (in_array($module_name, self::$content['modules'][$packageName]['all'], true)) {
                    self::$content['modules'][$packageName]['all'][$module_name]['status'] = $status;
                    if ($set_default === true) {
                        self::$content['modules'][$packageName]['default'] = $module_name;
                    }

                    FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                } else {
                    throw new Exceptions\RuntimeException\NotFoundException(
                        "Module \"$module_name\" is not exists on " . self::configFile() . ' file.'
                    );
                }
            }
        } else {
            trigger_error('Empty module name set.');
        }//end if
    }//end updateModule()


    /**
     * @param string $module_name
     * @param string $packageName
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     * @throws Exceptions\RuntimeException\NotFoundException
     */
    public static function removeModule(string $module_name, string $packageName): void
    {
        if (!empty($module_name)) {
            if (self::readConfigure()
                && in_array($packageName, self::$content['modules'], true)
                && is_array(self::$content['modules'][$packageName]['all'])) {
                if (in_array($module_name, self::$content['modules'][$packageName]['all'], true)) {
                    foreach (self::$content['modules'][$packageName]['all'] as $module => $details) {
                        if ($module === $module_name) {
                            unset(self::$content['modules'][$packageName]['all'][$module]);
                            if (self::$content['modules'][$packageName]['default'] === $module_name) {
                                if (in_array('Main', self::$content['modules'][$packageName]['all'], true)) {
                                    self::$content['modules'][$packageName]['default'] = 'Main';
                                    self::$content['modules'][$packageName]['all']['Main']['status'] = 'enable';
                                } elseif (in_array('Mishusoft', self::$content['modules'][$packageName]['all'], true)) {
                                    self::$content['modules'][$packageName]['default'] = 'Mishusoft';
                                    self::$content['modules'][$packageName]['all']['Mishusoft']['status'] = 'enable';
                                }
                            }
                        }
                    }

                    FileSystem\Yaml::emitFile(self::configFile(), self::$content);
                } else {
                    throw new RuntimeException(
                        sprintf('Module "%s" is not exists on %s file', $module_name, self::configFile())
                    );
                }//end if
            }
        } else {
            throw new RuntimeException('Empty module name set.');
        }//end if
    }//end removeModule()


    /**
     * @param string $module_name
     * @param string $packageName
     * @return bool
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function isEnabledModule(string $module_name, string $packageName): bool
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
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
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
     * @throws Exceptions\LogicException\InvalidArgumentException
     * @throws Exceptions\PermissionRequiredException
     * @throws Exceptions\RuntimeException
     */
    public static function getProperty(string $property, string $package = ''): string
    {
        $package = empty($package) ? Memory::Data('mpm')->packages->default : $package;
        if (!empty(Memory::Data('mpm')->packages->default)) {
            $properties = Implement::jsonDecode(
                Storage\FileSystem::read(self::propertiesFile($package)),
                IMPLEMENT_JSON_IN_ARR
            );
            if (is_array($properties) && count($properties) > 0) {
                if (array_key_exists($property, $properties)) {
                    return $properties[$property];
                }
            } else {
                throw new RuntimeException(sprintf('Property %s not exists', $property));
            }
        }

        return '';
    }//end getProperty()


    /**
     * @param object $db
     * @param string $filename
     * @param string $db_prefix
     * @param string $pattern
     */
    public static function importMysqlDB(
        object $db,
        string $filename,
        string $db_prefix = DB_PREFIX,
        string $pattern = '/\{DB_PREFIX\}/'
    ): void {
        // check $filename
        if (file_exists($filename)) {
            $tempLine = '';
            $lines = file($filename);
            // Read entire file.
            foreach ($lines as $line) {
                // Skip it if it's a comment
                if ($line === '' || str_starts_with($line, '--') || str_starts_with($line, '/*')) {
                    continue;
                }

                // Add this line to the current segment.
                $tempLine .= $line;
                // If it has a semicolon at the end, it's the end of the query.
                if (substr(trim($line), -1, 1) === ';') {
                    $realData = preg_replace($pattern, $db_prefix, $tempLine);
                    $status = $db->query($realData);
                    if (!$status) {
                        print('Error performing query: \'<strong>' . $realData . '\'. <br /><br />');
                    }

                    $tempLine = '';
                }
            }
        }//end if
    }//end importMysqlDB()
}
