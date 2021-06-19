<?php
/**
 * Release Manager
 *
 * @package    Mishusoft/Release
 * @subpackage Compile
 * @author     Squiz Pty Ltd <products@squiz.net>
 * @copyright  2021 Squiz Pty Ltd (ABN 77 084 670 600)
 *
 * @uses php cli to use the valid command as belows
 * <pre>
 * geoipupdate && cp -r /var/lib/GeoIP ./Storages/0/GeoIP
 * sudo geoipupdate && sudo cp -r /var/lib/GeoIP ./Storages/0/GeoIP
 * php ./Sources/Release.php -u
 * php ./Sources/Release.php -update
 * php ./Sources/Release.php -h
 * php ./Sources/Release.php -c  -s ./Sources/http.htaccess -d ./.htaccess
 * php ./Sources/Release.php -c  -s ./Sources/robots.txt -d ./robots.txt
 * php ./Sources/Release.php -c  -s ./Sources/app.php -d ./index.php
 * php ./Sources/Release.php -c  -s ./Sources/app.html -d ./index.html
 * php ./Sources/Release.php -c  -s ./Sources/Mishusoft/Framework -d ./Framework
 * php ./Sources/Release.php -c  -s ./Sources/Mishusoft/Ema -d ./Ema
 * php ./Sources/Release.php -c  -s ./Sources/Mishusoft/Packages -d ./Packages
 * php ./Sources/Release.php -t  -s ./Sources/Mishusoft/Views/Themes -d ./Framework/Themes
 * php ./Sources/Release.php -w  -s ./Sources/Mishusoft/Views/Widgets -d ./Framework/Widgets/Views
 * php ./Sources/Release.php -c  -s ./Sources/Mishusoft/Views/Templates/Packages -d ./Packages
 *
 * mishusoft-release -u
 * mishusoft-release -h
 * mishusoft-release -update  -s ./Sources/http.htaccess -d ./.htaccess -w ['https://www.mishusoft.com']
 * mishusoft-release -c  -s ./Sources/http.htaccess -d ./.htaccess
 * mishusoft-release -c  -s ./Sources/robots.txt -d ./robots.txt
 * mishusoft-release -c  -s ./Sources/app.php -d ./index.php
 * mishusoft-release -c  -s ./Sources/app.html -d ./index.html
 * mishusoft-release -c  -s ./Sources/Mishusoft/Framework -d ./Mishusoft/Framework
 * mishusoft-release -c  -s ./Sources/Mishusoft/Ema -d ./Mishusoft/Ema
 * mishusoft-release -c  -s ./Sources/Mishusoft/Packages -d ./Mishusoft/Packages
 * mishusoft-release -t  -s ./Sources/Mishusoft/Views/Themes -d ./Mishusoft/Themes
 * mishusoft-release -c  -s ./Sources/Mishusoft/Widgets -d ./Mishusoft/Widgets
 * mishusoft-release -w  -s ./Sources/Mishusoft/Views/Widgets -d ./Mishusoft/Widgets/Views
 * mishusoft-release -c  -s ./Sources/Mishusoft/Views/Templates/Packages -d ./Packages
 * mishusoft-release -copy  -s ./Sources/Assets/media -d ./Storages/0/media
 *
 *
 * </pre>
 * */

declare(strict_types=1);

namespace Mishusoft\Release;

require_once SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/FileSystem.php';
require_once SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Media.php';
require_once SOURCES_ROOT_PATH.'/Mishusoft/Framework/DataObjects/MediaMimeDataObject.php';
require_once SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Media/Mime.php';
require_once SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Utility/_String.php';
require_once SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Http/CurlRequest.php';

use CURLFile;
use JsonException;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Http\CurlRequest;
use Mishusoft\Framework\Chipsets\Media;

use RuntimeException;
use ZipArchive;

/**
 * Compile class for Mishusoft\Release package
 */
class Compile extends FileSystem
{
    public const PACKAGE_NAME      = 'Mishusoft Release';
    public const PACKAGE_NAME_FULL = 'Mishusoft Release Manager';
    public const PACKAGE_VERSION   = '0.2';
    public const CURRENT_YEAR      = CURRENT_YEAR;
    public const FILE_BASE_NAME    = FILE_BASE_NAME;
    public const PACKAGE_COMPANY   = 'Mishusoft Systems Incorporated';


    public function __construct()
    {
    }


    /**
     * Write log for default.
     *
     * @return void
     */
    public function defaultInfo(): void
    {
        echo self::PACKAGE_NAME.' version '.self::PACKAGE_VERSION.' (PHP '.PHP_VERSION.')'.PHP_EOL;
        echo 'Copyright '.self::CURRENT_YEAR.' (c) '.self::PACKAGE_COMPANY.''.PHP_EOL.PHP_EOL;
        echo 'Usage:\t php '.self::FILE_BASE_NAME.' [options] [-s] <location> [-d] <location>'.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-c] [-s] <location> [-d] <location>'.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-t] [-s] <location> [-d] <location>'.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-tc] [-s] <location> [-d] <location>'.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-sp] [-s] <location> [-d] <location>'.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-spc] [-s] <location> [-d] <location>'.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-u] '.PHP_EOL;
        echo '\t php '.self::FILE_BASE_NAME.' [-h] '.PHP_EOL.PHP_EOL;
        // End of uses.
        // This function has been built.
        echo 'Information about options'.PHP_EOL;
        echo '\t -c \t Compress sources code'.PHP_EOL;
        echo '\t -s \t Valid location for sources code'.PHP_EOL;
        echo '\t -d \t Valid location for compressed code'.PHP_EOL;
        echo '\t -t \t Release themes for Mishusoft Framework'.PHP_EOL;
        echo '\t -sp \t Release static pages for Mishusoft Framework'.PHP_EOL;
        echo '\t -u \t Update node-app and Mishusoft Framework release versions'.PHP_EOL;
        echo '\t -h \t help for release'.PHP_EOL;
    }//end defaultInfo()


    /**
     * Start php file compiling.
     *
     * @param  string $operation Compilation command.
     * @param  array  $options   Resources of compilation.
     * @param  string $mode
     * @return void              No action return.
     */
    public function start(string $operation, array $options, string $mode): void
    {
        $sourcesIdentify  = array_shift($options);
        $sourcesDirectory = array_shift($options);

        if (strtolower($sourcesIdentify) === '-s') {
            $sourcesDirectory = self::realpath($sourcesDirectory);
            if (count($options) > 1) {
                $outputIdentify  = array_shift($options);
                $outputDirectory = array_shift($options);
                $flash           = array_shift($options);

                if (strtolower($outputIdentify) === '-d') {
                    $outputDirectory = self::realpath($outputDirectory);
                    $sourcesPathBase = pathinfo($sourcesDirectory, PATHINFO_BASENAME);
                    $outputPathBase  = pathinfo($outputDirectory, PATHINFO_BASENAME);

                    if ($operation === 'copy') {
                        $this->log(self::FILE_BASE_NAME.' is started.');

                        $this->log(self::PACKAGE_NAME.' :: Copy Operation is running.');
                        $this->log('Source:: '.$sourcesDirectory);
                        $this->log('Output:: '.$outputDirectory);
                        if (empty($sourcesDirectory) === false && empty($outputDirectory) === false) {
                            foreach (self::globRecursive($sourcesDirectory.'/*', GLOB_MARK) as $file) {
                                if (is_file($file) === true) {
                                    if (copy($file, str_replace($sourcesDirectory, $outputDirectory, $file)) === true) {
                                        $this->log($file.' copied!!', 'success');
                                    } else {
                                        $this->log($file.' could not copied!!', 'error');
                                    }//end if
                                }//end if
                            }
                        }//end if

                        $this->log('Operation completed!!');
                        exit();
                    }//end if

                    if ($operation === 'rThemes') {
                        $this->log(self::FILE_BASE_NAME.' is started.');

                        if (file_exists($sourcesDirectory.'/positions.config.standard.php') === true) {
                            $this->log(self::PACKAGE_NAME.' :: Themes Release Operation is running.');
                            $this->log('Source:: '.$sourcesDirectory);
                            $this->log('Output:: '.$outputDirectory);
                            if (count($this->getThemesList($sourcesDirectory)) > 0) {
                                foreach ($this->getThemesList($sourcesDirectory) as $theme) {
                                    $themeDirectory = pathinfo($theme, PATHINFO_FILENAME);
                                    $themeFormat    = pathinfo($theme, PATHINFO_EXTENSION);

                                    $sourceConfigPathRoot = $sourcesPathBase.'/positions.config.standard.php';
                                    $outputConfigPathRoot = $outputPathBase.'/'.$themeDirectory.'/configs.php';

                                    $sourceThemePathRoot = $sourcesPathBase.'/'.$theme;
                                    $outputThemePathRoot = $outputPathBase.'/'.$themeDirectory.'/template.'.$themeFormat;

                                    self::createDirectory($outputDirectory.'/'.$themeDirectory);
                                    $this->log(
                                        'Compiling [..]/'.$sourceConfigPathRoot.' to [..]/'.$outputConfigPathRoot,
                                        'following'
                                    );
                                    $this->compiler(
                                        $sourcesDirectory.'/positions.config.standard.php',
                                        $outputDirectory.'/'.$themeDirectory.'/configs.php',
                                        $mode,
                                        ($flash === '-flash')
                                    );
                                    $this->log(
                                        'Compiling [..]/'.$sourceThemePathRoot.' to [..]/'.$outputThemePathRoot,
                                        'following'
                                    );
                                    $this->compiler(
                                        $sourcesDirectory.'/'.$theme,
                                        $outputDirectory.'/'.$themeDirectory.'/template.'.$themeFormat,
                                        $mode,
                                        ($flash === '-flash')
                                    );
                                }//end foreach
                            }//end if

                            $this->log('Operation completed!!');
                        } else {
                            $this->log($sourcesDirectory.'/positions.config.standard.php not exists.', 'error');
                            $this->defaultInfo();
                        }//end if

                        exit();
                    }//end if

                    if ($operation === 'rWidgets') {
                        $this->log(self::FILE_BASE_NAME.' is started.');

                        if (file_exists($sourcesDirectory) === true) {
                            $this->log(self::PACKAGE_NAME.' :: Widgets Release Operation is running.');
                            $this->log('Source:: '.$sourcesDirectory);
                            $this->log('Output:: '.$outputDirectory);

                            if (count(self::getList($sourcesDirectory, 'directory')) > 0) {
                                foreach (self::getList($sourcesDirectory, 'directory') as $widget) {
                                    $widgetDirectory = pathinfo($widget, PATHINFO_FILENAME);
                                    $sourceRoot      = $sourcesPathBase.'/'.$widget;
                                    $outputRoot      = $outputPathBase.'/'.$widgetDirectory;
                                    self::createDirectory($outputDirectory.'/'.$widgetDirectory);
                                    $this->log(
                                        'Compiling [...]/'.$sourceRoot.' to [...]/'.$outputRoot,
                                        'following'
                                    );
                                    $this->compiler(
                                        $sourcesDirectory.'/'.$widget,
                                        $outputDirectory.'/'.$widgetDirectory,
                                        $mode,
                                        ($flash === '-flash')
                                    );
                                }
                            }//end if

                            $this->log('Operation completed!!');
                        } else {
                            $this->log($sourcesDirectory.' not exists.', 'error');
                            $this->defaultInfo();
                        }//end if

                        exit();
                    }//end if

                    if ($operation === 'rStaticHTMLPages') {
                        $this->log(self::FILE_BASE_NAME.' is started.');

                        if (file_exists($sourcesDirectory) === true) {
                            $this->log(self::PACKAGE_NAME.' :: Templates Release Operation is running.');
                            $this->log('Source:: '.$sourcesDirectory);
                            $this->log('Output:: '.$outputDirectory);

                            if (count(self::getList($sourcesDirectory, 'directory')) > 0) {
                                foreach (self::getList($sourcesDirectory, 'directory') as $package) {
                                    foreach (self::getList($sourcesDirectory.'/'.$package, 'directory') as $module) {
                                        $sourceRoot          = $sourcesPathBase.'/'.$package.'/'.$module;
                                        $outputPathCommon    = $package.'/Resources/Templates/'.$module;
                                        $outputPathRoot      = $outputPathBase.'/'.$outputPathCommon;
                                        $outputDirectoryRoot = $outputDirectory.'/'.$outputPathCommon;
                                        self::createDirectory($outputDirectoryRoot);
                                        $this->log(
                                            'Compiling [...]/'.$sourceRoot.' to [...]/'.$outputPathRoot,
                                            'following'
                                        );
                                        $this->compiler(
                                            $sourcesDirectory.'/'.$package.'/'.$module,
                                            $outputDirectoryRoot,
                                            $mode,
                                            ($flash === '-flash')
                                        );
                                    }//end foreach
                                }//end foreach
                            }//end if

                            $this->log('Operation completed!!');
                        } else {
                            $this->log($sourcesDirectory.' not exists.', 'error');
                            $this->defaultInfo();
                        }//end if

                        exit();
                    }//end if

                    if (empty($sourcesDirectory) === false && empty($outputDirectory) === false) {
                        $this->log(self::FILE_BASE_NAME.' is started.');
                        $this->log(self::PACKAGE_NAME.' Operation is running.');

                        $this->log('Source:: '.$sourcesDirectory);
                        $this->log('Output:: '.$outputDirectory);

                        $this->log(
                            'Compiling '.$sourcesDirectory.' to '.self::realpath($outputDirectory),
                            'following'
                        );

                        $this->compiler(
                            $sourcesDirectory,
                            self::realpath($outputDirectory),
                            $mode,
                            ($flash === '-flash')
                        );
                        $this->log('Operation completed!!');
                    }//end if
                }//end if
            } else {
                $this->log('Error in argument 3, no destination location provided.', 'error');
                $this->defaultInfo();
            }//end if
        }//end if
    }//end start()


    /**
     * Get theme list of sources folder.
     *
     * @param  string $directory Theme folder root.
     * @return array|false       Return array or false by collecting info from sources folder.
     */
    private function getThemesList(string $directory): bool|array
    {
        $files = self::getList($directory, 'file');

        foreach ($files as $id => $file) {
            if ($file === 'positions.config.standard.php') {
                unset($files[$id]);
            }
        }

        return $files;
    }//end getThemesList()


    /**
     * Update package release version for all packages.
     *
     * @param  string $directory
     * @throws JsonException
     */
    public function updatePRVALlPackages(string $directory): void
    {
        $packages = self::getList($directory, 'directory');

        // Update package release version for all packages.
        foreach ($packages as $package) {
            if (is_file(self::realpath($directory.'/'.$package.'.json')) === true) {
                $this->updatePRV(self::realpath($directory.'/'.$package.'.json'));
            }
        }
    }//end updatePRVALlPackages()


    /**
     * @param  string $packageJsonFile
     * @throws JsonException
     */
    public function updatePRV(string $packageJsonFile): void
    {
        $packageJsonContents = json_decode(file_get_contents($packageJsonFile), true, 512, JSON_THROW_ON_ERROR);
        if (is_array($packageJsonContents) === true) {
            if (count($packageJsonContents) > 0) {
                if (array_key_exists('version', $packageJsonContents) === true) {
                    $oldVersion = $packageJsonContents['version'];
                    // Extract version string into array.
                    $versions = explode('.', $packageJsonContents['version']);
                    // Find out first array key index.
                    $firstArrKey = (count($versions) - 3);
                    // Find out middle array key index.
                    $middleArrKey = (count($versions) - 2);
                    // Find out last array key index.
                    $lastArrKey = (count($versions) - 1);
                    if (array_key_exists($lastArrKey, $versions) === true) {
                        if ($versions[$lastArrKey] === 9) {
                            $versions[$lastArrKey] = 0;
                            if (array_key_exists($middleArrKey, $versions) === true) {
                                if ($versions[$middleArrKey] === 9) {
                                    $versions[$middleArrKey] = 0;
                                    if (array_key_exists($firstArrKey, $versions) === true) {
                                        ++$versions[$firstArrKey];
                                    }
                                } else {
                                    ++$versions[$middleArrKey];
                                }
                            }
                        } else {
                            ++$versions[$lastArrKey];
                        }
                    }

                    $newVersion = implode('.', $versions);
                    $packageJsonContents['version'] = $newVersion;
                    if (is_readable($packageJsonFile) === true) {
                        if (is_writable($packageJsonFile) === true) {
                            if (self::saveToFile(
                                $packageJsonFile,
                                json_encode($packageJsonContents, JSON_THROW_ON_ERROR)
                            ) === true
                            ) {
                                $this->log('Version '.$oldVersion.' to '.$newVersion.' updated from '.$packageJsonFile.'.');
                            } else {
                                $this->log('Error in updating version, version setting failed.', 'error');
                            }
                        } else {
                            $this->log(
                                'Error in updating version, '.$packageJsonFile.' write permission denied.',
                                'error'
                            );
                        }
                    } else {
                        $this->log('Error in updating version, '.$packageJsonFile.' read permission denied.', 'error');
                    }//end if
                } else {
                    $this->log('Error in updating version, version number not found in '.$packageJsonFile.'.', 'error');
                }//end if
            } else {
                $this->log('Error in updating version, '.$packageJsonFile.' is empty.', 'error');
            }//end if
        } else {
            $this->log('Error in updating version, '.$packageJsonFile.' corrupted.', 'error');
        }//end if
    }//end updatePRV()


    /**
     * Log message to screen.
     *
     * @param string $message
     * @param string $type
     */
    public function log(string $message, string $type='log'): void
    {
        echo '['.date('Y-m-d H:i:s A').'] ['.strtoupper($type).'] '.$message.PHP_EOL;
    }//end log()


    /**
     * Root compiler
     *
     * @param string  $sources Source directory of system.
     * @param string  $output  File or folder new compilation.
     * @param boolean $flash   Boolean command fetching.
     */
    public function compiler(string $sources, string $output, string $mode, bool $flash=false): void
    {
        /*
         * If the given source file is a confirmed directory
         * then the output has to be created from the directory.
         * */

        if (is_dir($sources) === true) {
            /*
             * If the given output is exists and it's child are no empty
             * then compiler will be delete all child item.
             * */

            if ((file_exists($output) === true) && count(self::getList($output)) > 0) {
                foreach (self::globRecursive($output) as $item) {
                    self::remove($item);
                }
            }

            self::createDirectory($output);
        }//end if

        /*
         * If flash command found, then delete exists output
         * and create new.
         * */

        if ($flash === true) {
            /*
             * If the given output is exists
             * then compiler will be delete all child item.
             * */

            if (file_exists($output) === true) {
                self::remove($output);
            }//end if

            self::createDirectory($output);
        }//end if

        /*
         * Now we compile source to output
         * step 1 : if source is file, then write
         * step 2 : if source is not file, then recursively scan and follow step 1
         * step 3 : if source is file, then write
         *
         * */

        if (is_file($sources) === true) {
            $this->log('Waiting '.$output, 'pending');
            $this->writeFile($output, $sources, $mode);
        } else {
            $files = glob($sources.'*', GLOB_MARK);
            foreach ($files as $file) {
                if (basename($output) !== basename($file)) {
                    $target = $output.DIRECTORY_SEPARATOR.basename($file);
                } else {
                    $target = $output;
                }//end if

                if (is_file($file) === true) {
                    $this->log('Waiting '.$target, 'pending');
                    $this->writeFile($target, $file, $mode);
                }//end if

                if (is_dir($file) === true) {
                    self::compiler($file, $target, $mode, $flash);
                }//end if
            }
        }//end if
    }//end compiler()


    /**
     * Write new file form source.
     *
     * @param string $newFile    New output filename.
     * @param string $sourceFile Source filename.
     * @param string $mode
     */
    private function writeFile(string $newFile, string $sourceFile, string $mode): void
    {
        if ((file_exists($newFile) === true) && (is_file($newFile) === true)) {
            unlink($newFile);
        }//end if

        if (is_file($sourceFile) === true) {
            $compliedFile = fopen($newFile, 'wb+');

            if (is_resource($compliedFile) === true) {
                if ($mode === '-compile') {
                    fwrite($compliedFile, $this->compressPhpSource($sourceFile));
                } elseif ($mode === '-test') {
                    fwrite($compliedFile, file_get_contents($sourceFile));
                } else {
                    $message = 'Unable to write '.$compliedFile.'. Invalid command.';
                    fwrite($compliedFile, $message.debug_backtrace());
                    $this->log($message, 'error');
                }

                fclose($compliedFile);
                self::exec($newFile);
            }//end if
        }//end if

        $this->log('File '.$newFile.' has been complied.', 'success');
    }//end writeFile()


    /**
     * @param string $source
     * @param string $lebel
     * @param string $version
     */
    private function convert(string $source, string $lebel='latest', string $version='8'): void
    {
    }//end convert()


    /**
     * With this function You can compress Your PHP source code.
     *
     * @param  string $source
     * @return boolean|string
     */
    public function compressPhpSource(string $source): bool|string
    {
        // Whitespaces left and right from this signs can be ignored.
        static $IW = [
            T_CONCAT_EQUAL,
        // .=
            T_DOUBLE_ARROW,
        // =>
            T_BOOLEAN_AND,
        // &&
            T_BOOLEAN_OR,
        // ||
            T_IS_EQUAL,
        // ==
            T_IS_NOT_EQUAL,
        // != or <>
            T_IS_SMALLER_OR_EQUAL,
        // <=
            T_IS_GREATER_OR_EQUAL,
        // >=
            T_INC,
        // ++
            T_DEC,
        // --
            T_PLUS_EQUAL,
        // +=
            T_MINUS_EQUAL,
        // -=
            T_MUL_EQUAL,
        // *=
            T_DIV_EQUAL,
        // /=
            T_IS_IDENTICAL,
        // ===
            T_IS_NOT_IDENTICAL,
        // !==
            T_DOUBLE_COLON,
        // ::
            T_PAAMAYIM_NEKUDOTAYIM,
        // ::
            T_OBJECT_OPERATOR,
        // ->
            T_DOLLAR_OPEN_CURLY_BRACES,
        // ${
            T_AND_EQUAL,
        // &=
            T_MOD_EQUAL,
        // %=
            T_XOR_EQUAL,
        // ^=
            T_OR_EQUAL,
        // |=
            T_SL,
        // <<
            T_SR,
        // >>
            T_SL_EQUAL,
        // <<=
            T_SR_EQUAL,
        // >>=
        ];
        if (is_file($source) === true) {
            if (!$source = file_get_contents($source)) {
                return false;
            }//end if
        }//end if

        $tokens = token_get_all($source);

        $new = '';
        $c   = sizeof($tokens);
        $iw  = false;
        // ignore whitespace
        $ih = false;
        // in HEREDOC
        $ls = '';
        // last sign
        $ot = null;
        // open tag
        for ($i = 0; $i < $c; $i++) {
            $token = $tokens[$i];
            if (is_array($token) === true) {
                [
                    $tn,
                    $ts,
                ] = $token;
                // tokens: number, string, line
                // $tname = token_name($tn);
                if ($tn === T_INLINE_HTML) {
                    $new .= $ts;
                    $iw   = false;
                } elseif ($tn === T_OPEN_TAG) {
                    if (strpos($ts, ' ') === true || strpos($ts, "\n") === true
                        || strpos($ts, "\t") === true || strpos($ts, "\r") === true
                    ) {
                        $ts = rtrim($ts);
                    }

                    $ts  .= ' ';
                    $new .= $ts;
                    $ot   = T_OPEN_TAG;
                    $iw   = true;
                } elseif ($tn === T_OPEN_TAG_WITH_ECHO) {
                    $new .= $ts;
                    $ot   = T_OPEN_TAG_WITH_ECHO;
                    $iw   = true;
                } elseif ($tn === T_CLOSE_TAG) {
                    if ($ot === T_OPEN_TAG_WITH_ECHO) {
                        $new = rtrim($new, '; ');
                    } else {
                        $ts = ' '.$ts;
                    }

                    $new .= $ts;
                    $ot   = null;
                    $iw   = false;
                } elseif (in_array($tn, $IW, true) === true) {
                    $new .= $ts;
                    $iw   = true;
                } elseif ($tn === T_CONSTANT_ENCAPSED_STRING
                    || $tn === T_ENCAPSED_AND_WHITESPACE
                ) {
                    if ($ts[0] === '"') {
                        $ts = addcslashes($ts, "\n\t\r");
                    }

                    $new .= $ts;
                    $iw   = true;
                } elseif ($tn === T_WHITESPACE) {
                    if (array_key_exists(($i + 1), $tokens) === true) {
                        $nt = @$tokens[($i + 1)];
                        if (!$iw && (!is_string($nt) || $nt === '$') && !in_array($nt[0], $IW)) {
                            $new .= ' ';
                        }
                    }

                    $iw = false;
                } elseif ($tn === T_START_HEREDOC) {
                    $new .= "<<<S\n";
                    $iw   = false;
                    $ih   = true;
                // in HEREDOC.
                } elseif ($tn === T_END_HEREDOC) {
                    $new .= 'S;';
                    $iw   = true;
                    $ih   = false;
                    // in HEREDOC.
                    for ($j = ($i + 1); $j < $c; $j++) {
                        if (is_string($tokens[$j]) === true && $tokens[$j] === ';') {
                            $i = $j;
                            break;
                        }

                        if ($tokens[$j][0] === T_CLOSE_TAG) {
                            break;
                        }
                    }
                } elseif ($tn === T_COMMENT || $tn === T_DOC_COMMENT) {
                    $iw = true;
                } else {
                    if (!$ih) {
                        $ts = $ts;
                        // $ts = strtolower($ts);
                    }

                    $new .= $ts;
                    $iw   = false;
                }//end if

                $ls = '';
            } else {
                if (($token !== ';' && $token !== ':') || $ls !== $token) {
                    $new .= $token;
                    $ls   = $token;
                }

                $iw = true;
            }//end if
        }//end for

        return $new;
    }//end compressPhpSource()


    /**
     * Make a zip file for sources.
     *
     * @param  string $srcDirectory Source directory for zip.
     * @param  string $identity     File identy.
     * @return false|string Return filename or false.
     */
    public function zip(string $srcDirectory, string $identity): bool|string
    {
        $tempDir = '/srv/http/tmp/caches/updates/';
        $update  = $identity.'-update-['.date('YmdH').'].zip';
        $archive = $tempDir.$update;

        // Output check start.
        $this->log('Preparing to check '.$tempDir);

        self::createDirectory($tempDir);

        if (file_exists($tempDir) === false) {
            $this->log('Creating new '.$tempDir);
            self::createDirectory($tempDir);
        } elseif (file_exists($archive) === true) {
            $this->log('Removing exists update '.$archive);
            self::remove($archive);
        }//end if

        $this->log('Check completed of '.$tempDir);
        // Output check end.
        // Check src files permissions start.
        $files = self::globRecursive($srcDirectory.'/*', GLOB_MARK);
        if (is_array($files) === true && count($files) > 0) {
            $this->log('Preparing to check permissions '.$srcDirectory);
            foreach ($files as $file) {
                if (is_readable($file) === false) {
                    $this->log(
                        'Exploit permission for '.$file.', permission is '.substr(sprintf('%o', fileperms($file)), -4),
                        'permission'
                    );
                    $this->log('Changing permission for '.$file, 'processing');
                    exec('chmod -R 777 '.$file);
                }//end if
            }
        }//end if

        // Check src files permissions end.
        $zip = new ZipArchive();
        $ret = $zip->open($archive, (ZipArchive::CREATE | ZipArchive::OVERWRITE));
        if ($ret !== true) {
            $this->log('Failed with code '.$ret, 'error');
            exit();
        }

        foreach ($files as $file) {
            if (is_file($file) === true) {
                $zip->addFile($file, str_replace('/srv/http', '', $file));
            }//end if
        }

        $zip->close();

        if (file_exists($archive) === true) {
            $this->log('New archive '.$archive.' created');
            return $archive;
        }

        return false;
    }//end zip()


    /**
     * Make web request.
     *
     * @param  string $url
     * @param  mixed  $data
     * @param  mixed  $headers
     * @return boolean|string
     */
    public function curlPost(string $url, mixed $data='', mixed $headers=''): bool|string
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, 1);
        // 0 for a get request
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // Set the content type to application/json.
        // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($ch, CURLOPT_TIMEOUT, 300);

        if (empty($headers) === false) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }//end if

        if (empty($data) === false) {
            // Attach encoded JSON string to the POST fields.
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            // curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        }//end if

        $response = curl_exec($ch);

        if (is_string(curl_error($ch)) === true) {
            $this->log('Connection Error: '.curl_error($ch), 'error');
            exit();
        }//end if

        curl_close($ch);
        return $response;
    }//end curlPost()


    /**
     * Update package version.
     *
     * @param array $parameters
     * @return void Noting return.
     * @throws JsonException
     */
    public function updateOldVersion(array $parameters): void
    {
        $sourcesIdentify  = array_shift($parameters);
        $sourcesDirectory = array_shift($parameters);

        if (strtolower($sourcesIdentify) === '-s') {
            $sourcesDirectory = self::realpath($sourcesDirectory);
            if (count($parameters) > 1) {
                $outputIdentify  = array_shift($parameters);
                $outputDirectory = array_shift($parameters);

                if (strtolower($outputIdentify) === '-d') {
                    /*
                     * Valid location for compressed code
                     * */

                    $outputDirectory = str_replace('./', '', $outputDirectory);

                    $this->log(self::FILE_BASE_NAME.' is started.');

                    if (file_exists($sourcesDirectory) === true) {
                        $this->log(self::PACKAGE_NAME_FULL.' :: update Operation is running.');
                        $this->log('Source:: '.$sourcesDirectory);
                        $this->log('Output:: WebDirectory/'.$outputDirectory);

                        $destinationIdentify = array_shift($parameters);
                        $destinationServer   = array_shift($parameters);

                        if (strtolower($destinationIdentify) === '-w') {
                            if (is_string($destinationServer) === true) {
                                if (str_ends_with($destinationServer, '/') === true) {
                                    $destinationServer = rtrim($destinationServer, '/');
                                }

                                $this->log('Archiving '.$sourcesDirectory);
                                $filename = $this->zip($sourcesDirectory, $outputDirectory);

                                if (is_file($filename) === true) {
                                    $response = CurlRequest::uploadFile(
                                        '{valid-full-host-address}',
                                        [
                                            'update' => new \CURLFile(
                                                $filename,
                                                Media::getMimeContent($filename),
                                                pathinfo($filename, PATHINFO_BASENAME)
                                            ),
                                        ]
                                    );

//                                    $response = $this->curlPost(
//                                        $destinationServer.'/update',
//                                        [
//                                            'update' => new CURLFile(
//                                                $filename,
//                                                Media::getMimeContent($filename),
//                                                pathinfo($filename, PATHINFO_BASENAME)
//                                            ),
//                                        ]
//                                    );

                                    $this->log($response['response']);
                                }
                            }//end if
                        } else {
                            $this->log('Remote server name not exists.', 'error');
                            $this->defaultInfo();
                        }//end if
                    } else {
                        $this->log('Remote server identity not exists.', 'error');
                        $this->defaultInfo();
                    }//end if

                    $this->log('Operation completed!!');
                } else {
                    $this->log($sourcesDirectory.' not exists.', 'error');
                    $this->defaultInfo();
                }//end if
            }//end if
        } else {
            $this->log('Error in argument 3, no destination location provided.', 'error');
            $this->defaultInfo();
        }//end if
    }//end updateOldVersion()
}//end class
