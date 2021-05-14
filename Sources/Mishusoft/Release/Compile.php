<?php

namespace Mishusoft\Release;

require_once PHP_SOURCES_ROOT_PATH . '/Mishusoft/Framework/Chipsets/FileSystem.php';
require_once PHP_SOURCES_ROOT_PATH . '/Mishusoft/Framework/Chipsets/Media.php';
require_once PHP_SOURCES_ROOT_PATH . '/Mishusoft/Framework/Chipsets/Media/Mime.php';
require_once PHP_SOURCES_ROOT_PATH . '/Mishusoft/Framework/Chipsets/Utility/_String.php';

use CURLFile;
use Mishusoft\Framework\Chipsets\FileSystem;
use Mishusoft\Framework\Chipsets\Media;

/*
use Mishusoft\Framework\Chipsets\Media\Mime;*/

use Mishusoft\Framework\Chipsets\Utility\_String;
use ZipArchive;


/**
 * Release Manager
 * @package Mishusoft
 * @subpackage Release
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
 *
 * mishusoft-release -u
 * mishusoft-release -h
 * mishusoft-release -update  -s ./Sources/http.htaccess -d ./.htaccess -w ["https://www.mishusoft.com"]
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
class Compile
{
    const PACKAGENAME = "Mishusoft Release";
    const PACKAGENAMEFULL = "Mishusoft Release Manager";
    const package_version = "0.2";
    const currentYear = CURRENT_YEAR;
    const fileBaseName = FILE_BASE_NAME;
    const package_company = "Mishusoft Systems Incorporated";

    const defaultInfo = self::PACKAGENAME . " version " . self::package_version . " (" . "PHP " . PHP_VERSION . ")" . PHP_EOL
    . "Copyright " . self::currentYear . " (c) " . self::package_company . "" . PHP_EOL . PHP_EOL
    . "Usage:\t php " . self::fileBaseName . " [options] [-s] <location> [-d] <location>" . PHP_EOL
    . "\t php " . self::fileBaseName . " [-c] [-s] <location> [-d] <location>" . PHP_EOL
    . "\t php " . self::fileBaseName . " [-t] [-s] <location> [-d] <location>" . PHP_EOL
    . "\t php " . self::fileBaseName . " [-tc] [-s] <location> [-d] <location>" . PHP_EOL
    . "\t php " . self::fileBaseName . " [-sp] [-s] <location> [-d] <location>" . PHP_EOL
    . "\t php " . self::fileBaseName . " [-spc] [-s] <location> [-d] <location>" . PHP_EOL
    . "\t php " . self::fileBaseName . " [-u] " . PHP_EOL
    . "\t php " . self::fileBaseName . " [-h] " . PHP_EOL /*end of uses*/
    . PHP_EOL /*this function has been built*/
    . "Information about options" . PHP_EOL /*this function has been built*/
    . "\t -c \t Compress sources code" . PHP_EOL /*this function has been built*/
    . "\t -s \t Valid location for sources code" . PHP_EOL /*this function has been built*/
    . "\t -d \t Valid location for compressed code" . PHP_EOL /*this function has been built*/
    . "\t -t \t Release themes for Mishusoft Framework" . PHP_EOL
    . "\t -sp \t Release static pages for Mishusoft Framework" . PHP_EOL
    . "\t -u \t Update node-app and Mishusoft Framework release versions" . PHP_EOL /*this function has been built*/
    . "\t -h \t help for release" . PHP_EOL; /*this function has been built*/

    public static function start(string $operation, array $options)
    {
        $sources_identify = array_shift($options);
        $sources_directory = array_shift($options);

        if (strtolower($sources_identify) === "-s") {
            $sources_directory = FileSystem::realpath($sources_directory);/*Valid location for sources code*/

            if (count($options) > 1) {
                $output_identify = array_shift($options);
                $output_directory = array_shift($options);
                $flash = array_shift($options);

                if (strtolower($output_identify) === "-d") {
                    $output_directory = FileSystem::realpath($output_directory);/*Valid location for compressed code*/

                    if ($operation === "copy") {
                        self::release_log(self::fileBaseName . " is started.");

                        self::release_log(self::PACKAGENAME . " :: Copy Operation is running.");
                        self::release_log("Source:: " . $sources_directory);
                        self::release_log("Output:: " . $output_directory);
                        if (!empty($sources_directory) and !empty($output_directory)) {
                            foreach (FileSystem::glob_recursive($sources_directory . '/*', GLOB_MARK) as $file) {
                                if (is_file($file)) {
                                    //copy($file, str_replace($sources_directory, $output_directory, $file));
                                    //copy($sources_directory, $output_directory);
                                    if (copy($file, str_replace($sources_directory, $output_directory, $file))) {
                                        self::release_log("$file copied!!");
                                    } else {
                                        self::release_log("$file could not copied!!");
                                    }
                                }
                            }
                        }

                        //self::release_log("------------------END----------------------");
                    } //end if

                    if ($operation === "rThemes") {
                        self::release_log(self::fileBaseName . " is started.");

                        if (file_exists("$sources_directory/positions.config.standard.php")) {
                            self::release_log(self::PACKAGENAME . " :: Themes Release Operation is running.");
                            self::release_log("Source:: " . $sources_directory);
                            self::release_log("Output:: " . $output_directory);
                            if (count(self::getThemesList($sources_directory)) > 0) {
                                foreach (self::getThemesList($sources_directory) as $theme) {
                                    $themeDirectory = pathinfo($theme, PATHINFO_FILENAME);
                                    $themeFormat = pathinfo($theme, PATHINFO_EXTENSION);

                                    /*
                                     * if (!file_exists("$output_directory/$themeDirectory/configs")) {
                                     *  mkdir("$output_directory/$themeDirectory/configs", 0777, true);
                                     *  exec("chmod -R 777 $output_directory/$themeDirectory/configs");
                                     * }
                                    */
                                    if (!file_exists("$output_directory/$themeDirectory")) {
                                        mkdir("$output_directory/$themeDirectory", 0777, true);
                                        exec("chmod -R 777 $output_directory/$themeDirectory");
                                    }

                                    self::release_log("Compiling [...]/" . pathinfo($sources_directory, PATHINFO_BASENAME) . "/positions.config.standard.php to [...]/" . pathinfo($output_directory, PATHINFO_BASENAME) . "/$themeDirectory/configs.php..");
                                    self::Compiler("$sources_directory/positions.config.standard.php", "$output_directory/$themeDirectory/configs.php", ($flash === "-flash"));
                                    self::release_log("Compiling [...]/" . pathinfo($sources_directory, PATHINFO_BASENAME) . "/$theme to [...]/" . pathinfo($output_directory, PATHINFO_BASENAME) . "/$themeDirectory/template.$themeFormat..");
                                    self::Compiler("$sources_directory/$theme", "$output_directory/$themeDirectory/template.$themeFormat", ($flash === "-flash"));
                                }
                            }

                            self::release_log("Operation completed!!");
                        } else {
                            self::release_log("$sources_directory/positions.config.standard.php not exists.", "error");
                            echo self::defaultInfo;
                        }
                        //self::release_log("------------------END----------------------");
                    } elseif ($operation === "rWidgets") {
                        self::release_log(self::fileBaseName . " is started.");

                        if (file_exists($sources_directory)) {
                            self::release_log(self::PACKAGENAME . " :: Widgets Release Operation is running.");
                            self::release_log("Source:: " . $sources_directory);
                            self::release_log("Output:: " . $output_directory);

                            if (count(self::getDirectoryList($sources_directory)) > 0) {
                                foreach (self::getDirectoryList($sources_directory) as $widget) {
                                    $widgetDirectory = pathinfo($widget, PATHINFO_FILENAME);
                                    if (!file_exists("$output_directory/$widgetDirectory")) {
                                        mkdir("$output_directory/$widgetDirectory", 0777, true);
                                        exec("chmod -R 777 $output_directory/$widgetDirectory");
                                    }

                                    self::release_log("Compiling [...]/" . pathinfo($sources_directory, PATHINFO_BASENAME) . "/$widget to [...]/" . pathinfo($output_directory, PATHINFO_BASENAME) . "/$widgetDirectory..");
                                    self::Compiler("$sources_directory/$widget", "$output_directory/$widgetDirectory", ($flash === "-flash"));
                                }
                            }

                            self::release_log("Operation completed!!");
                        } else {
                            self::release_log("$sources_directory not exists.", "error");
                            echo self::defaultInfo;
                        }
                        //self::release_log("------------------END----------------------");
                    } elseif ($operation === "rStaticHTMLPages") {
                        self::release_log(self::fileBaseName . " is started.");

                        if (file_exists($sources_directory)) {
                            self::release_log(self::PACKAGENAME . " :: Templates Release Operation is running.");
                            self::release_log("Source:: " . $sources_directory);
                            self::release_log("Output:: " . $output_directory);

                            if (count(self::getDirectoryList($sources_directory)) > 0) {
                                foreach (self::getDirectoryList($sources_directory) as $packageDirectory) {
                                    foreach (self::getDirectoryList("$sources_directory/$packageDirectory") as $moduleDirectory) {
                                        if (!file_exists("$output_directory/$packageDirectory/Resources/Templates/$moduleDirectory")) {
                                            mkdir("$output_directory/$packageDirectory/Resources/Templates/$moduleDirectory", 0777, true);
                                            exec("chmod -R 777 $output_directory/$packageDirectory/Resources/Templates/$moduleDirectory");
                                        }

                                        self::release_log("Compiling [...]/" . pathinfo($sources_directory, PATHINFO_BASENAME) . "/$packageDirectory/$moduleDirectory to [...]/" . pathinfo($output_directory, PATHINFO_BASENAME) . "/$packageDirectory/Resources/Templates/$moduleDirectory..");
                                        self::Compiler("$sources_directory/$packageDirectory/$moduleDirectory", "$output_directory/$packageDirectory/Resources/Templates/$moduleDirectory", ($flash === "-flash"));
                                    }
                                }
                            }

                            self::release_log("Operation completed!!");
                        } else {
                            self::release_log("$sources_directory not exists.", "error");
                            echo self::defaultInfo;
                        }
                        //self::release_log("------------------END----------------------");
                    } else {
                        self::release_log(self::fileBaseName . " is started.");
                        self::release_log(self::PACKAGENAME . " Operation is running.");


                        self::release_log("Source:: " . $sources_directory);
                        self::release_log("Output:: " . $output_directory);


                        self::release_log("Compiling $sources_directory to " . FileSystem::realpath($output_directory));

                        self::Compiler($sources_directory, FileSystem::realpath($output_directory), ($flash === "-flash"));
                        self::release_log("Operation completed!!");
                        //self::release_log("------------------END----------------------");
                    }
                }
            } else {
                self::release_log("Error in argument 3, no destination location provided.", "error");
                echo self::defaultInfo;
            }
        }
    }

    /**
     * @param string $directory
     * @return array|false
     */
    private static function getThemesList(string $directory)
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === "." || $file === ".." || $file === "positions.config.standard.php") {
                unset($files[$id]);
            }
        }

        return $files;
    }

    /**
     * @param string $directory
     * @return array|false
     */
    private static function getDirectoryList(string $directory)
    {
        $files = scandir($directory);

        foreach ($files as $id => $file) {
            if ($file === "." || $file === "..") {
                unset($files[$id]);
            }
        }

        return $files;
    }

    /**
     * @param string $packagesRootDir
     */
    public static function updatePRVALlPackages(string $packagesRootDir)
    {
        $packages = scandir($packagesRootDir);
        /*filter array for all actual packages*/
        foreach ($packages as $index => $package) {
            if ($package === "." || $package === "..") {
                unset($packages[$index]);
            }
            if (is_file($package)) {
                unset($packages[$index]);
            }
        }

        /*update package release version for all packages*/
        foreach ($packages as $package) {
            if (is_file(FileSystem::realpath($packagesRootDir . "/$package.json"))) {
                self::updatePRV(FileSystem::realpath($packagesRootDir . "/$package.json"));
            }
        }
    }

    /**
     * @param string $packageJsonFile
     */
    public static function updatePRV(string $packageJsonFile)
    {
        $packageJsonContents = json_decode(file_get_contents($packageJsonFile), true);
        if (is_array($packageJsonContents) and count($packageJsonContents) > 0) {
            if (array_key_exists("version", $packageJsonContents)) {
                $old_version = $packageJsonContents["version"];
                $versions = explode(".", $packageJsonContents["version"]); /*extract version string into array*/
                $firstArrKey = count($versions) - 3; /*find out first array key index*/
                $middleArrKey = count($versions) - 2; /*find out middle array key index*/
                $lastArrKey = count($versions) - 1; /*find out last array key index*/
                if (array_key_exists($lastArrKey, $versions)) {
                    if ($versions[$lastArrKey] === 9) {
                        $versions[$lastArrKey] = 0;
                        if (array_key_exists($middleArrKey, $versions)) {
                            if ($versions[$middleArrKey] === 9) {
                                $versions[$middleArrKey] = 0;
                                if (array_key_exists($firstArrKey, $versions)) {
                                    $versions[$firstArrKey] = $versions[$firstArrKey] + 1;
                                }
                            } else {
                                $versions[$middleArrKey] = $versions[$middleArrKey] + 1;
                            }
                        }
                    } else {
                        $versions[$lastArrKey] = $versions[$lastArrKey] + 1;
                    }

                }

                $new_version = implode(".", $versions);
                $packageJsonContents["version"] = $new_version;
                if (is_readable($packageJsonFile)) {
                    if (is_writable($packageJsonFile)) {
                        if (file_put_contents($packageJsonFile, json_encode($packageJsonContents))) {
                            self::release_log("Version $old_version to $new_version updated from $packageJsonFile.");
                        } else {
                            self::release_log("Error in updating version, version setting failed.", "error");
                            echo self::defaultInfo;
                        }

                    } else {
                        self::release_log("Error in updating version, $packageJsonFile write permission denied.", "error");
                        echo self::defaultInfo;
                    }
                } else {
                    self::release_log("Error in updating version, $packageJsonFile read permission denied.", "error");
                    echo self::defaultInfo;
                }
            }
        }
    }

    /**
     * @param string $message
     * @param string $type
     */
    public static function release_log(string $message, string $type = "log")
    {
        echo "[" . date("Y-m-d H:i:s A") . "] [" . strtoupper($type) . "] $message" . PHP_EOL;
    }

    /**
     * @param string $sources_directory
     * @param string $out_dir
     * @param bool $flash
     */
    public static function Compiler(string $sources_directory, string $out_dir, bool $flash = false)
    {
        if (!is_file($sources_directory)) {
            if (!file_exists($out_dir)) {
                mkdir($out_dir, 0777, true);
                exec("chmod -R 777 $out_dir");
            }

            if ($flash) {
                if (file_exists($out_dir)) {
                    self::deleteFiles($out_dir);
                }
                if (!file_exists($out_dir)) {
                    mkdir($out_dir, 0777, true);
                    exec("chmod -R 777 $out_dir");
                }
            }
        }

        if (is_file($sources_directory)) {
            self::writeFile($out_dir, $sources_directory);
        } else {
            $files = glob($sources_directory . '*', GLOB_MARK);
            foreach ($files as $file) {
                if (is_dir($file)) {
                    self::Compiler($file, (basename($out_dir) !== basename($file)) ? $out_dir . DIRECTORY_SEPARATOR . basename($file) : $out_dir);
                } else {
                    if (is_file($sources_directory)) {
                        self::writeFile($out_dir, $file);
                    } else {
                        self::writeFile($out_dir . DIRECTORY_SEPARATOR . basename($file), $file);
                    }
                }
            }
        }
    }

    /**
     * @param string $target
     */
    private static function deleteFiles(string $target)
    {
        if (file_exists($target)) {
            if (is_dir($target)) {
                $files = glob($target . '*', GLOB_MARK); //GLOB_MARK adds a slash to directories returned

                foreach ($files as $file) {
                    self::deleteFiles($file);
                }

                if (file_exists($target)) {
                    rmdir(FileSystem::realpath($target));
                }
            } elseif (is_file($target)) {
                unlink(FileSystem::realpath($target));
            }
        }
    }

    /**
     * @param string $newFile
     * @param string $sourceFile
     */
    private static function writeFile(string $newFile, string $sourceFile)
    {
        if (is_file($newFile)) {
            if (file_exists($newFile)) {
                unlink($newFile);
            }
        } else {
            if (is_dir($newFile)) {
                rmdir($newFile);
            }
        }
        $cpm_src_file = fopen($newFile, 'w+');

        if ($cpm_src_file) {
            fwrite($cpm_src_file, self::compress_php_src($sourceFile));
            fclose($cpm_src_file);
            exec("chmod -R 777 " . $newFile);
        }
    }

    /**
     * With this function You can compress Your PHP source code.
     * @param $src
     * @return false|string
     */
    public static function compress_php_src($src)
    {
        // Whitespaces left and right from this signs can be ignored
        static $IW = array(
            T_CONCAT_EQUAL,             // .=
            T_DOUBLE_ARROW,             // =>
            T_BOOLEAN_AND,              // &&
            T_BOOLEAN_OR,               // ||
            T_IS_EQUAL,                 // ==
            T_IS_NOT_EQUAL,             // != or <>
            T_IS_SMALLER_OR_EQUAL,      // <=
            T_IS_GREATER_OR_EQUAL,      // >=
            T_INC,                      // ++
            T_DEC,                      // --
            T_PLUS_EQUAL,               // +=
            T_MINUS_EQUAL,              // -=
            T_MUL_EQUAL,                // *=
            T_DIV_EQUAL,                // /=
            T_IS_IDENTICAL,             // ===
            T_IS_NOT_IDENTICAL,         // !==
            T_DOUBLE_COLON,             // ::
            T_PAAMAYIM_NEKUDOTAYIM,     // ::
            T_OBJECT_OPERATOR,          // ->
            T_DOLLAR_OPEN_CURLY_BRACES, // ${
            T_AND_EQUAL,                // &=
            T_MOD_EQUAL,                // %=
            T_XOR_EQUAL,                // ^=
            T_OR_EQUAL,                 // |=
            T_SL,                       // <<
            T_SR,                       // >>
            T_SL_EQUAL,                 // <<=
            T_SR_EQUAL,                 // >>=
        );
        if (is_file($src)) {
            if (!$src = file_get_contents($src)) {
                return false;
            }
        }
        $tokens = token_get_all($src);

        $new = "";
        $c = sizeof($tokens);
        $iw = false; // ignore whitespace
        $ih = false; // in HEREDOC
        $ls = "";    // last sign
        $ot = null;  // open tag
        for ($i = 0; $i < $c; $i++) {
            $token = $tokens[$i];
            if (is_array($token)) {
                list($tn, $ts) = $token; // tokens: number, string, line
                //$tname = token_name($tn);
                if ($tn == T_INLINE_HTML) {
                    $new .= $ts;
                    $iw = false;
                } else {
                    if ($tn == T_OPEN_TAG) {
                        if (strpos($ts, " ") || strpos($ts, "\n") || strpos($ts, "\t") || strpos($ts, "\r")) {
                            $ts = rtrim($ts);
                        }
                        $ts .= " ";
                        $new .= $ts;
                        $ot = T_OPEN_TAG;
                        $iw = true;
                    } elseif ($tn == T_OPEN_TAG_WITH_ECHO) {
                        $new .= $ts;
                        $ot = T_OPEN_TAG_WITH_ECHO;
                        $iw = true;
                    } elseif ($tn == T_CLOSE_TAG) {
                        if ($ot == T_OPEN_TAG_WITH_ECHO) {
                            $new = rtrim($new, "; ");
                        } else {
                            $ts = " " . $ts;
                        }
                        $new .= $ts;
                        $ot = null;
                        $iw = false;
                    } elseif (in_array($tn, $IW)) {
                        $new .= $ts;
                        $iw = true;
                    } elseif ($tn == T_CONSTANT_ENCAPSED_STRING
                        || $tn == T_ENCAPSED_AND_WHITESPACE) {
                        if ($ts[0] == '"') {
                            $ts = addcslashes($ts, "\n\t\r");
                        }
                        $new .= $ts;
                        $iw = true;
                    } elseif ($tn == T_WHITESPACE) {
                        if (array_key_exists($i + 1, $tokens)) {
                            $nt = @$tokens[$i + 1];
                            if (!$iw && (!is_string($nt) || $nt == '$') && !in_array($nt[0], $IW)) {
                                $new .= " ";
                            }
                        }

                        $iw = false;
                    } elseif ($tn == T_START_HEREDOC) {
                        $new .= "<<<S\n";
                        $iw = false;
                        $ih = true; // in HEREDOC
                    } elseif ($tn == T_END_HEREDOC) {
                        $new .= "S;";
                        $iw = true;
                        $ih = false; // in HEREDOC
                        for ($j = $i + 1; $j < $c; $j++) {
                            if (is_string($tokens[$j]) && $tokens[$j] == ";") {
                                $i = $j;
                                break;
                            } else if ($tokens[$j][0] == T_CLOSE_TAG) {
                                break;
                            }
                        }
                    } elseif ($tn == T_COMMENT || $tn == T_DOC_COMMENT) {
                        $iw = true;
                    } else {
                        if (!$ih) {
                            $ts = $ts;
                            //$ts = strtolower($ts);
                        }
                        $new .= $ts;
                        $iw = false;
                    }
                }
                $ls = "";
            } else {
                if (($token != ";" && $token != ":") || $ls != $token) {
                    $new .= $token;
                    $ls = $token;
                }
                $iw = true;
            }
        }
        return $new;
    }

    static function zip(string $src_directory, string $identity)
    {
        $temp_dir = "/srv/http/tmp/caches/updates/";
        $update = "{$identity}-update-[" . date("YmdH") . "].zip";
        $archive = "{$temp_dir}{$update}";


        /*output check start*/
        self::release_log("Preparing to check $temp_dir");

        if (!file_exists($temp_dir)) {
            self::release_log("Creating new $temp_dir");
            mkdir($temp_dir, 0777, true);
            exec("chmod -R 777 $temp_dir");
        } else {
            if (file_exists($archive)) {
                self::release_log("Removing exists update $archive");
                self::deleteFiles($archive);
            }
        }

        self::release_log("Check completed of $temp_dir");
        /*output check end*/

        /*check src files permissions start*/
        $files = FileSystem::glob_recursive($src_directory . '/*', GLOB_MARK);
        //preOutput($files);

        if (is_array($files) and count($files) > 0) {
            self::release_log("Preparing to check permissions $src_directory");
            foreach ($files as $file) {
                //self::release_log("Exploit permission for $file, permission is " . substr(sprintf('%o', fileperms($file)), -4));
                if (!is_readable($file)) {
                    self::release_log("Changing permission for $file");
                    exec("chmod -R 777 $file");
                }
            }
        }
        /*check src files permissions end*/


        $zip = new ZipArchive();
        $ret = $zip->open($archive, ZipArchive::CREATE | ZipArchive::OVERWRITE);
        if ($ret !== TRUE) {
            self::release_log("Failed with code $ret", "error");
            exit();
        } else {
            foreach ($files as $file) {
                if (is_file($file)) {
                    //self::release_log("Added to archive $file");
                    $zip->addFile($file, str_replace("/srv/http", "", $file));
                }
            }
            $zip->close();
        }

        if (file_exists($archive)) {
            self::release_log("New archive $archive created");
            return $archive;
        } else {
            return false;
        }
    }

    static function curlPost($url, $data = NULL, $headers = NULL)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_POST, 1);                //0 for a get request
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        //curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
        curl_setopt($ch, CURLOPT_TIMEOUT, 300);

        if (!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }

        if (!empty($data)) {
            // Attach encoded JSON string to the POST fields
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            // Set the content type to application/json
            //curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        }

        $response = curl_exec($ch);

        if (curl_error($ch)) {
            self::release_log('Connection Error: ' . curl_error($ch), "error");
            exit();
        }

        curl_close($ch);
        return $response;
    }

    public static function updateOldVersion(array $parameters)
    {
        $sources_identify = array_shift($parameters);
        $sources_directory = array_shift($parameters);

        if (strtolower($sources_identify) === "-s") {
            $sources_directory = FileSystem::realpath($sources_directory);/*Valid location for sources code*/

            if (count($parameters) > 1) {
                $output_identify = array_shift($parameters);
                $output_directory = array_shift($parameters);

                if (strtolower($output_identify) === "-d") {
                    //$output_directory = FileSystem::realpath($output_directory);/*Valid location for compressed code*/
                    $output_directory = str_replace("./", "", $output_directory);

                    self::release_log(self::fileBaseName . " is started.");

                    if (file_exists($sources_directory)) {
                        self::release_log(self::PACKAGENAMEFULL . " :: update Operation is running.");
                        self::release_log("Source:: " . $sources_directory);
                        self::release_log("Output:: WebDirectory/" . $output_directory);

                        $dest_identify = array_shift($parameters);
                        $dest_server = array_shift($parameters);

                        if (strtolower($dest_identify) === "-w") {
                            if ($dest_server) {
                                if (_String::endsWith($dest_server, "/")) {
                                    $dest_server = rtrim($dest_server, "/");
                                }

                                self::release_log("Archiving $sources_directory");
                                $filename = self::zip($sources_directory, $output_directory);

                                if (is_file($filename)) {
                                    /*test servername */
                                    $response = self::curlPost("{$dest_server}/update", [
                                        "update" => new CURLFile($filename,
                                            Media::getMimeContent($filename),
                                            pathinfo($filename, PATHINFO_BASENAME))
                                    ]);

                                    self::release_log($response);
                                }
                            }
                            //exec("chmod -R 777 $sources_directory");
                        } else {
                            self::release_log("Remote server name not exists.", "error");
                            echo self::defaultInfo;
                        }

                    } else {
                        self::release_log("Remote server identity not exists.", "error");
                        echo self::defaultInfo;
                    }

                    self::release_log("Operation completed!!");
                } else {
                    self::release_log("$sources_directory not exists.", "error");
                    echo self::defaultInfo;
                }
            }
        } else {
            self::release_log("Error in argument 3, no destination location provided.", "error");
            echo self::defaultInfo;
        }
    }
}