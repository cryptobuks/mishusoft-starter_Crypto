<?php


namespace Mishusoft\Framework\Chipsets\System;


use Mishusoft\Framework\Chipsets\Utility\_String;

class Device
{
    /*declare version*/
    const VERSION = "1.0.2";
    private string $osReleaseFile = "/etc/os-release";
    private string $hostNameCtlFile = PHP_RUNTIME_REGISTRIES_PATH . "hostnamectl.txt";
    private string $lsbReleaseFile = PHP_RUNTIME_REGISTRIES_PATH . "lsb_release.txt";
    private array $data = array();

    public function __construct()
    {
        if (function_exists("system")) {
            system("hostnamectl > $this->hostNameCtlFile");
            system("lsb_release -a > $this->lsbReleaseFile");
        }
    }

    /**
     * @param string $filename
     * @param string $delimiter
     * @return array
     */
    private function extract(string $filename, string $delimiter): array
    {
        if (is_readable($filename)) {
            if (strlen(file_get_contents($filename)) !== 0) {
                $contents = file_get_contents($filename);
                $contents = explode("\n", $contents);
                $contents = array_filter($contents);
                foreach ($contents as $i => $v) {
                    $contents[$i] = explode($delimiter, $v);
                    $this->data[preg_replace("[\s]","_",ltrim(_String::lower($contents[$i][0])))] = preg_replace("[\"]","",ltrim($contents[$i][1]));
                }
                //preOutput($this->data);
                return $this->data;
            }
        }
        return $this->data;
    }

    public function osRelease(): array
    {
        /*
         * Array
         * (
         *     [name] => "Manjaro Linux"
         *     [id] => manjaro
         *     [id_like] => arch
         *     [build_id] => rolling
         *     [pretty_name] => "Manjaro Linux"
         *     [ansi_color] => "32;1;24;144;200"
         *     [home_url] => "https://manjaro.org/"
         *     [documentation_url] => "https://wiki.manjaro.org/"
         *     [support_url] => "https://manjaro.org/"
         *     [bug_report_url] => "https://bugs.manjaro.org/"
         *     [logo] => manjarolinux
         * )*/

        return $this->extract($this->osReleaseFile, "=");

        /*if (is_readable($this->osReleaseFile)) {
            if (strlen(file_get_contents($this->osReleaseFile)) !== 0) {
                $contents = file_get_contents($this->osReleaseFile);
                $contents = explode("\n", $contents);
                $contents = array_filter($contents);
                foreach ($contents as $i => $v) {
                    $contents[$i] = explode("=", $v);
                    $this->data[strtolower($contents[$i][0])] = $contents[$i][1];
                }
                return $this->data;
            }
        }*/
    }

    public function hostnamectl(): array
    {
        /*
         * Array
         * (
         *     [static hostname] =>  abir-ms7b53
         *     [icon name] =>  computer-desktop
         *     [chassis] =>  desktop
         *     [machine id] =>  1e5556959f7b4d47b22b842eadb337fc
         *     [boot id] =>  03c86c30c3f544a4880f3ccf9d0e9bce
         *     [operating system] =>  Manjaro Linux
         *     [kernel] =>  Linux 5.9.8-2-MANJARO
         *     [architecture] =>  x86-64
         * )*/

        return $this->extract($this->hostNameCtlFile, ":");
    }

    public function lsbRelease(): array
    {
        /*
         * Array
         * (
         *     [lsb version] => 	n/a
         *     [distributor id] => 	ManjaroLinux
         *     [description] => 	Manjaro Linux
         *     [release] => 	20.2
         *     [codename] => 	Nibia
         * )*/
        return $this->extract($this->lsbReleaseFile, ":");
    }

    function __destruct()
    {

    }

}