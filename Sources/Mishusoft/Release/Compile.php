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

require_once PHP_SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/FileSystem.php';
require_once PHP_SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Media.php';
require_once PHP_SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Media/Mime.php';
require_once PHP_SOURCES_ROOT_PATH.'/Mishusoft/Framework/Chipsets/Utility/_String.php';

use CURLFile;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Media;

use ZipArchive;

class Compile
{
    public const PACKAGE_NAME      = 'Mishusoft Release';
    public const PACKAGE_NAME_FULL = 'Mishusoft Release Manager';
    public const PACKAGE_VERSION   = '0.2';
    public const CURRENT_YEAR      = CURRENT_YEAR;
    public const FILE_BASE_NAME    = FILE_BASE_NAME;
    public const PACKAGE_COMPANY   = 'Mishusoft Systems Incorporated';


    /**
     * Write log for default.
     */
    public static function defaultInfo(): void
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
     * @param string $operation
     * @param array  $options
     */
    public static function start(string $operation, array $options): void
    {
        $sourcesIdentify  = array_shift($options);
        $sourcesDirectory = array_shift($options);

        if (strtolower($sourcesIdentify) === '-s') {
            $sourcesDirectory = FileSystem::realpath($sourcesDirectory);
            if (count($options) > 1) {
                $outputIdentify  = array_shift($options);
                $outputDirectory = array_shift($options);
                $flash           = array_shift($options);

                if (strtolower($outputIdentify) === '-d') {
                    $outputDirectory = FileSystem::realpath($outputDirectory);
                    $sourcesPathBase = pathinfo($sourcesDirectory, PATHINFO_BASENAME);
                    $outputPathBase  = pathinfo($outputDirectory, PATHINFO_BASENAME);

                    if ($operation === 'copy') {
                        self::log(self::FILE_BASE_NAME.' is started.');

                        self::log(self::PACKAGE_NAME.' :: Copy Operation is running.');
                        self::log('Source:: '.$sourcesDirectory);
                        self::log('Output:: '.$outputDirectory);
                        if (empty($sourcesDirectory) === false && empty($outputDirectory) === false) {
                            foreach (FileSystem::glob_recursive($sourcesDirectory.'/*', GLOB_MARK) as $file) {
                                if (is_file($file) === true) {
                                    if (copy($file, str_replace($sourcesDirectory, $outputDirectory, $file)) === true) {
                                        self::log($file.' copied!!');
                                    } else {
                                        self::log($file.' could not copied!!');
                                    }
                                }
                            }
                        }
                    }//end if

                    if ($operation === 'rThemes') {
                        self::log(self::FILE_BASE_NAME.' is started.');

                        if (file_exists("$sourcesDirectory/positions.config.standard.php")) {
                            self::log(self::PACKAGE_NAME.' :: Themes Release Operation is running.');
                            self::log('Source:: '.$sourcesDirectory);
                            self::log('Output:: '.$outputDirectory);
                            if (count(self::getThemesList($sourcesDirectory)) > 0) {
                                foreach (self::getThemesList($sourcesDirectory) as $theme) {
                                    $themeDirectory = pathinfo($theme, PATHINFO_FILENAME);
                                    $themeFormat    = pathinfo($theme, PATHINFO_EXTENSION);
                                    if (!file_exists("$outputDirectory/$themeDirectory")) {
                                        if (!mkdir("$outputDirectory/$themeDirectory", 0777, true) && !is_dir("$outputDirectory/$themeDirectory")) {
                                            throw new \RuntimeException(sprintf('Directory "%s" was not created', "$outputDirectory/$themeDirectory"));
                                        }

                                        exec("chmod -R 777 $outputDirectory/$themeDirectory");
                                    }//end if

                                    self::log(
                                        'Compiling [...]/'.$sourcesPathBase.'/positions.config.standard.php to [...]/'.$outputPathBase."/$themeDirectory/configs.php.."
                                    );
                                    self::Compiler(
                                        "$sourcesDirectory/positions.config.standard.php",
                                        "$outputDirectory/$themeDirectory/configs.php",
                                        ($flash === '-flash')
                                    );
                                    self::log(
                                        'Compiling [...]/'.$sourcesPathBase."/$theme to [...]/".$outputPathBase."/$themeDirectory/template.$themeFormat.."
                                    );
                                    self::Compiler(
                                        "$sourcesDirectory/$theme",
                                        "$outputDirectory/$themeDirectory/template.$themeFormat",
                                        ($flash === '-flash')
                                    );
                                }//end foreach
                            }//end if

                            self::log('Operation completed!!');
                        } else {
                            self::log("$sourcesDirectory/positions.config.standard.php not exists.", 'error');
                            self::defaultInfo();
                        }//end if
                    } elseif ($operation === 'rWidgets') {
                        self::log(self::FILE_BASE_NAME.' is started.');

                        if (file_exists($sourcesDirectory)) {
                            self::log(self::PACKAGE_NAME.' :: Widgets Release Operation is running.');
                            self::log('Source:: '.$sourcesDirectory);
                            self::log('Output:: '.$outputDirectory);

                            if (count(self::getDirectoryList($sourcesDirectory)) > 0) {
                                foreach (self::getDirectoryList($sourcesDirectory) as $widget) {
                                    $widgetDirectory = pathinfo($widget, PATHINFO_FILENAME);
                                    if (!file_exists("$outputDirectory/$widgetDirectory")) {
                                        if (!mkdir("$outputDirectory/$widgetDirectory", 0777, true) && !is_dir("$outputDirectory/$widgetDirectory")) {
                                            throw new \RuntimeException(sprintf('Directory "%s" was not created', "$outputDirectory/$widgetDirectory"));
                                        }

                                        exec("chmod -R 777 $outputDirectory/$widgetDirectory");
                                    }

                                    self::log(
                                        'Compiling [...]/'.$sourcesPathBase."/$widget to [...]/".$outputPathBase."/$widgetDirectory.."
                                    );
                                    self::Compiler(
                                        "$sourcesDirectory/$widget",
                                        "$outputDirectory/$widgetDirectory",
                                        ($flash === '-flash')
                                    );
                                }
                            }//end if

                            self::log('Operation completed!!');
                        } else {
                            self::log("$sourcesDirectory not exists.", 'error');
                            self::defaultInfo();
                        }//end if
                    } elseif ($operation === 'rStaticHTMLPages') {
                        self::log(self::FILE_BASE_NAME.' is started.');

                        if (file_exists($sourcesDirectory)) {
                            self::log(self::PACKAGE_NAME.' :: Templates Release Operation is running.');
                            self::log('Source:: '.$sourcesDirectory);
                            self::log('Output:: '.$outputDirectory);

                            if (count(self::getDirectoryList($sourcesDirectory)) > 0) {
                                foreach (self::getDirectoryList($sourcesDirectory) as $packageDirectory) {
                                    foreach (self::getDirectoryList("$sourcesDirectory/$packageDirectory") as $moduleDirectory) {
                                        if (!file_exists("$outputDirectory/$packageDirectory/Resources/Templates/$moduleDirectory")) {
                                            if (!mkdir("$outputDirectory/$packageDirectory/Resources/Templates/$moduleDirectory", 0777, true) && !is_dir("$outputDirectory/$packageDirectory/Resources/Templates/$moduleDirectory")) {
                                                throw new \RuntimeException(sprintf('Directory "%s" was not created', "$outputDirectory/$packageDirectory/Resources/Templates/$moduleDirectory"));
                                            }

                                            exec("chmod -R 777 $outputDirectory/$packageDirectory/Resources/Templates/$moduleDirectory");
                                        }

                                        self::log(
                                            'Compiling [...]/'.$sourcesPathBase."/$packageDirectory/$moduleDirectory to [...]/".$outputPathBase."/$packageDirectory/Resources/Templates/$moduleDirectory.."
                                        );
                                        self::Compiler(
                                            "$sourcesDirectory/$packageDirectory/$moduleDirectory",
                                            "$outputDirectory/$packageDirectory/Resources/Templates/$moduleDirectory",
                                            ($flash === '-flash')
                                        );
                                    }
                                }
                            }//end if

                            self::log('Operation completed!!');
                        } else {
                            self::log("$sourcesDirectory not exists.", 'error');
                            self::defaultInfo();
                        }//end if
                    } else {
                        self::log(self::FILE_BASE_NAME.' is started.');
                        self::log(self::PACKAGE_NAME.' Operation is running.');

                        self::log('Source:: '.$sourcesDirectory);
                        self::log('Output:: '.$outputDirectory);

                        self::log("Compiling $sourcesDirectory to ".FileSystem::realpath($outputDirectory));

                        self::Compiler($sourcesDirectory, FileSystem::realpath($outputDirectory), ($flash === '-flash'));
                        self::log('Operation completed!!');
                    }//end if
                }//end if
            } else {
                self::log('Error in argument 3, no destination location provided.', 'error');
                self::defaultInfo();
            }//end if
        }//end if
    }//end start()


    /**
     * @param  string $directory
     * @return array|false
     */
    private static function getThemesList(string $directory): bool|array
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === '.' || $file === '..' || $file === 'positions.config.standard.php') {
                unset($files[$id]);
            }
        }

        return $files;
    }//end getThemesList()


    /**
     * @param  string $directory
     * @return array|false
     */
    private static function getDirectoryList(string $directory): bool|array
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === '.' || $file === '..') {
                unset($files[$id]);
            }
        }

        return $files;
    }//end getDirectoryList()


    /**
     * @param string $packagesRootDir
     */
    public static function updatePRVALlPackages(string $packagesRootDir): void
    {
        $packages = scandir($packagesRootDir);
        foreach ($packages as $index => $package) {
            if ($package === '.' || $package === '..') {
                unset($packages[$index]);
            }

            if (is_file($package) === true) {
                unset($packages[$index]);
            }
        }

        // update package release version for all packages
        foreach ($packages as $package) {
            if (is_file(FileSystem::realpath($packagesRootDir."/$package.json")) === true) {
                self::updatePRV(FileSystem::realpath($packagesRootDir."/$package.json"));
            }
        }
    }//end updatePRVALlPackages()


    /**
     * @param string $packageJsonFile
     */
    public static function updatePRV(string $packageJsonFile): void
    {
        $packageJsonContents = json_decode(file_get_contents($packageJsonFile), true);
        if (is_array($packageJsonContents) and count($packageJsonContents) > 0) {
            if (array_key_exists('version', $packageJsonContents)) {
                $old_version = $packageJsonContents['version'];
                $versions    = explode('.', $packageJsonContents['version']);
                // extract version string into array
                $firstArrKey = (count($versions) - 3);
                // find out first array key index
                $middleArrKey = (count($versions) - 2);
                // find out middle array key index
                $lastArrKey = (count($versions) - 1);
                // find out last array key index
                if (array_key_exists($lastArrKey, $versions)) {
                    if ($versions[$lastArrKey] === 9) {
                        $versions[$lastArrKey] = 0;
                        if (array_key_exists($middleArrKey, $versions)) {
                            if ($versions[$middleArrKey] === 9) {
                                $versions[$middleArrKey] = 0;
                                if (array_key_exists($firstArrKey, $versions)) {
                                    $versions[$firstArrKey] = ($versions[$firstArrKey] + 1);
                                }
                            } else {
                                $versions[$middleArrKey] = ($versions[$middleArrKey] + 1);
                            }
                        }
                    } else {
                        $versions[$lastArrKey] = ($versions[$lastArrKey] + 1);
                    }
                }

                $new_version                    = implode('.', $versions);
                $packageJsonContents['version'] = $new_version;
                if (is_readable($packageJsonFile)) {
                    if (is_writable($packageJsonFile)) {
                        if (file_put_contents($packageJsonFile, json_encode($packageJsonContents))) {
                            self::log("Version $old_version to $new_version updated from $packageJsonFile.");
                        } else {
                            self::log('Error in updating version, version setting failed.', 'error');
                            self::defaultInfo();
                        }
                    } else {
                        self::log(
                            "Error in updating version, $packageJsonFile write permission denied.",
                            'error'
                        );
                        self::defaultInfo();
                    }
                } else {
                    self::log("Error in updating version, $packageJsonFile read permission denied.", 'error');
                    self::defaultInfo();
                }
            }//end if
        }//end if
    }//end updatePRV()


    /**
     * @param string $message
     * @param string $type
     */
    public static function log(string $message, string $type='log'): void
    {
        echo '['.date('Y-m-d H:i:s A').'] ['.strtoupper($type).'] '.$message.PHP_EOL;
    }//end log()


    /**
     * Root compiler
     *
     * @param string  $sourcesDirectory source directory of system.
     * @param string  $outputDirectory  file or folder new compilation.
     * @param boolean $flash
     */
    public static function Compiler(string $sourcesDirectory, string $outputDirectory, bool $flash=false): void
    {
        if (is_file($sourcesDirectory) === false) {
            if (file_exists($outputDirectory) === false) {
                if (mkdir($outputDirectory, 0777, true) === false && is_dir($outputDirectory) === false) {
                    throw new \RuntimeException(sprintf('Directory "%s" was not created', $outputDirectory));
                }

                exec('chmod -R 777 '.$outputDirectory);
            }//end if

            if ($flash === true) {
                if (file_exists($outputDirectory) === true) {
                    self::deleteFiles($outputDirectory);
                }//end if

                if (file_exists($outputDirectory) === false) {
                    if (mkdir($outputDirectory, 0777, true) === false && is_dir($outputDirectory) === false) {
                        throw new \RuntimeException(sprintf('Directory "%s" was not created', $outputDirectory));
                    }

                    exec('chmod -R 777 '.$outputDirectory);
                }//end if
            }//end if
        }//end if

        if (is_file($sourcesDirectory) === true) {
            self::writeFile($outputDirectory, $sourcesDirectory);
        } else {
            $files = glob($sourcesDirectory.'*', GLOB_MARK);
            foreach ($files as $file) {
                if (is_dir($file) === true) {
                    if ((basename($outputDirectory) !== basename($file))) {
                        $target = $outputDirectory.DIRECTORY_SEPARATOR.basename($file);
                    } else {
                        $target = $outputDirectory;
                    }//end if

                    self::Compiler($file, $target);
                } else {
                    if (is_file($sourcesDirectory) === true) {
                        self::writeFile($outputDirectory, $file);
                    } else {
                        self::writeFile($outputDirectory.DIRECTORY_SEPARATOR.basename($file), $file);
                    }//end if
                }//end if
            }
        }//end if
    }//end Compiler()


    /**
     * Delete file or folder.
     *
     * @param string $target valid filename.
     */
    private static function deleteFiles(string $target): void
    {
        if (is_dir($target)) {
            $files = glob($target.'*', GLOB_MARK);
            // GLOB_MARK adds a slash to directories returned
            foreach ($files as $file) {
                self::deleteFiles($file);
            }

            if (file_exists($target)) {
                rmdir(FileSystem::realpath($target));
            }//end if
        } else {
            if (is_file($target)) {
                unlink(FileSystem::realpath($target));
            }//end if
        }//end if
    }//end deleteFiles()


    /**
     * Write new file form source.
     *
     * @param string $newFile    new output filename.
     * @param string $sourceFile source filename.
     */
    private static function writeFile(string $newFile, string $sourceFile): void
    {
        if (is_file($newFile)) {
            if (file_exists($newFile)) {
                unlink($newFile);
            }//end if
        } else {
            if (is_dir($newFile)) {
                rmdir($newFile);
            }//end if
        }//end if

        $cpm_src_file = fopen($newFile, 'wb+');

        if ($cpm_src_file) {
            fwrite($cpm_src_file, self::compressPhpSource($sourceFile));
            fclose($cpm_src_file);
            exec('chmod -R 777 '.$newFile);
        }//end if
    }//end writeFile()


    /**
     * With this function You can compress Your PHP source code.
     *
     * @param  string $source
     * @return boolean|string
     */
    public static function compressPhpSource(string $source): bool|string
    {
        // Whitespaces left and right from this signs can be ignored
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

        $new = "";
        $c   = sizeof($tokens);
        $iw  = false;
        // ignore whitespace
        $ih = false;
        // in HEREDOC
        $ls = "";
        // last sign
        $ot = null;
        // open tag
        for ($i = 0; $i < $c; $i++) {
            $token = $tokens[$i];
            if (is_array($token) === true) {
                list($tn, $ts) = $token;
                // tokens: number, string, line
                // $tname = token_name($tn);
                if ($tn === T_INLINE_HTML) {
                    $new .= $ts;
                    $iw   = false;
                } elseif ($tn === T_OPEN_TAG) {
                    if (strpos($ts, " ") === true  || strpos($ts, "\n") === true  ||
                        strpos($ts, "\t") === true || strpos($ts, "\r") === true) {
                        $ts = rtrim($ts);
                    }

                    $ts  .= " ";
                    $new .= $ts;
                    $ot   = T_OPEN_TAG;
                    $iw   = true;
                } elseif ($tn === T_OPEN_TAG_WITH_ECHO) {
                    $new .= $ts;
                    $ot   = T_OPEN_TAG_WITH_ECHO;
                    $iw   = true;
                } elseif ($tn === T_CLOSE_TAG) {
                    if ($ot === T_OPEN_TAG_WITH_ECHO) {
                        $new = rtrim($new, "; ");
                    } else {
                        $ts = " ".$ts;
                    }

                    $new .= $ts;
                    $ot   = null;
                    $iw   = false;
                } elseif (in_array($tn, $IW) === true) {
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
                        if (!$iw && (!is_string($nt) || $nt === "$") && !in_array($nt[0], $IW)) {
                            $new .= ' ';
                        }
                    }

                    $iw = false;
                } elseif ($tn === T_START_HEREDOC) {
                    $new .= "<<<S\n";
                    $iw   = false;
                    $ih   = true;
                // in HEREDOC
                } elseif ($tn === T_END_HEREDOC) {
                    $new .= "S;";
                    $iw   = true;
                    $ih   = false;
                    // in HEREDOC
                    for ($j = ($i + 1); $j < $c; $j++) {
                        if (is_string($tokens[$j]) === true && $tokens[$j] === ";") {
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
                if (($token !== ";" && $token !== ":") || $ls !== $token) {
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
    public static function zip(string $srcDirectory, string $identity): bool|string
    {
        $tempDir = '/srv/http/tmp/caches/updates/';
        $update  = $identity.'-update-['.date('YmdH').'].zip';
        $archive = $tempDir.$update;

        // Output check start.
        self::log("Preparing to check $tempDir");

        if (file_exists($tempDir) === false) {
            self::log("Creating new $tempDir");
            if (!mkdir($tempDir, 0777, true) && !is_dir($tempDir)) {
                throw new \RuntimeException(sprintf('Directory "%s" was not created', $tempDir));
            }
            exec('chmod -R 777 '.$tempDir);
        } elseif (file_exists($archive) === true) {
            self::log('Removing exists update '.$archive);
            self::deleteFiles($archive);
        }//end if

        self::log('Check completed of '.$tempDir);
        // Output check end.
        // Check src files permissions start.
        $files = FileSystem::glob_recursive($srcDirectory.'/*', GLOB_MARK);
        if (is_array($files) and count($files) > 0) {
            self::log('Preparing to check permissions '.$srcDirectory);
            foreach ($files as $file) {
                // self::log(
                // 'Exploit permission for $file, permission is ' .
                // substr(sprintf('%o', fileperms($file)), -4)
                // );
                if (is_readable($file) === false) {
                    self::log('Changing permission for '.$file);
                    exec('chmod -R 777 '.$file);
                }//end if
            }
        }//end if

        // Check src files permissions end.
        $zip = new ZipArchive();
        $ret = $zip->open($archive, (ZipArchive::CREATE | ZipArchive::OVERWRITE));
        if ($ret !== true) {
            self::log('Failed with code '.$ret, 'error');
            exit();
        }

        foreach ($files as $file) {
            if (is_file($file) === true) {
                // self::log('Added to archive $file');
                $zip->addFile($file, str_replace('/srv/http', '', $file));
            }//end if
        }

        $zip->close();

        if (file_exists($archive) === true) {
            self::log('New archive '.$archive.' created');
            return $archive;
        }

        return false;
    }//end zip()


    /**
     * Make web request.
     *
     * @param  string $url
     * @param  mixed   $data
     * @param  mixed   $headers
     * @return boolean|string
     */
    public static function curlPost(string $url, mixed $data='', mixed $headers=''): bool|string
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, 1);
        // 0 for a get request
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        /* curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));*/
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($ch, CURLOPT_TIMEOUT, 300);

        if (empty($headers) === false) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }//end if

        if (empty($data) === false) {
            // Attach encoded JSON string to the POST fields.
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            // Set the content type to application/json.
            // curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        }//end if

        $response = curl_exec($ch);

        if (curl_error($ch)) {
            self::log('Connection Error: '.curl_error($ch), 'error');
            exit();
        }//end if

        curl_close($ch);
        return $response;
    }//end curlPost()


    /**
     * Update package version.
     *
     * @param array $parameters
     */
    public static function updateOldVersion(array $parameters): void
    {
        $sourcesIdentify  = array_shift($parameters);
        $sourcesDirectory = array_shift($parameters);

        if (strtolower($sourcesIdentify) === '-s') {
            $sourcesDirectory = FileSystem::realpath($sourcesDirectory);
            if (count($parameters) > 1) {
                $outputIdentify  = array_shift($parameters);
                $outputDirectory = array_shift($parameters);

                if (strtolower($outputIdentify) === '-d') {
                    /*
                     * Valid location for compressed code
                     * */

                    $outputDirectory = str_replace('./', '', $outputDirectory);

                    self::log(self::FILE_BASE_NAME.' is started.');

                    if (file_exists($sourcesDirectory) === true) {
                        self::log(self::PACKAGE_NAME_FULL.' :: update Operation is running.');
                        self::log('Source:: '.$sourcesDirectory);
                        self::log('Output:: WebDirectory/'.$outputDirectory);

                        $destinationIdentify = array_shift($parameters);
                        $destinationServer   = array_shift($parameters);

                        if (strtolower($destinationIdentify) === '-w') {
                            if ($destinationServer) {
                                if (str_ends_with($destinationServer, '/') === true) {
                                    $destinationServer = rtrim($destinationServer, '/');
                                }

                                self::log('Archiving '.$sourcesDirectory);
                                $filename = self::zip($sourcesDirectory, $outputDirectory);

                                if (is_file($filename) === true) {
                                    $response = self::curlPost(
                                        $destinationServer.'/update',
                                        [
                                            'update' => new CURLFile(
                                                $filename,
                                                Media::getMimeContent($filename),
                                                pathinfo($filename, PATHINFO_BASENAME)
                                            ),
                                        ]
                                    );

                                    self::log($response);
                                }
                            }//end if
                        } else {
                            self::log('Remote server name not exists.', 'error');
                            self::defaultInfo();
                        }//end if
                    } else {
                        self::log('Remote server identity not exists.', 'error');
                        self::defaultInfo();
                    }//end if

                    self::log('Operation completed!!');
                } else {
                    self::log($sourcesDirectory.' not exists.', 'error');
                    self::defaultInfo();
                }//end if
            }//end if
        } else {
            self::log('Error in argument 3, no destination location provided.', 'error');
            self::defaultInfo();
        }//end if
    }//end updateOldVersion()
}//end class
