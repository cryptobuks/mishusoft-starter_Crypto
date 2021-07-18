<?php


namespace Mishusoft\Http\UAAnalyzer\PatternsCollection;

use Mishusoft\Exceptions\LogicException\InvalidArgumentException;
use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesPatternsCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }


    /**
     * @throws InvalidArgumentException
     * @throws \Mishusoft\Framework\Chipsets\Exceptions\RuntimeException
     */
    public function platforms(string $identifier):string
    {
        return match (strtolower($identifier)) {
            // Device platform.
            // Mozilla/5.0 (X11; U; AIX 0048013C4C00; en-US; rv:1.0.1) Gecko/20021009 Netscape/7.0
            //'aix'=>'/(?<name>(aix))\s*(?<version>\w+)/i',
            // AmigaoS3.1
            // AmigaOS 4.2;
            // AmigaOS 3.9
            // AmigaOs; 4.0;
            // AmigaOS 3.1.2
            // Amiga-AWeb
            // AmigaVoyager/3.4.4
            //'amigaos'=>'/(?<name>(amiga(os|voyager(\/)|-aweb)))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            // Android 10
            // Android 7.0
            // Android 5.1.1
            //'android'=>'/(?<name>(android))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            // GoogleTV 4.0.4
            // GoogleTV 3.2
            // 'googletv'=>'/(?<name>(googletv))\s*(?<version>(\d+[.]\d+[.]\d+)|(\d+[.]\d+)|(\d+))/i',
            'aix','amigaos','android','googletv'=>$this->makePattern('(aix|amiga(os|voyager(\/)|\-aweb)|android|googletv)', true, true),

            // CPU OS 11_2_6
            // CPU iPhone OS 12_5_3
            //'ios'=>'/(?<name>(cpu (os|iphone os)))\s*(?<version>(\d+[_]\d+[_]\d+)|(\d+[_]\d+)|(\d+))/i',
            'ios'=>$this->makePattern('(cpu (os|iphone os))', true, true),

            // Windows 10
            // Windows NT 10.0;
            // Windows 2000
            // Windows NT 5.0;
            // Win31
            // Windows NT 5.0;
            // Win31
            // Windows NT 5.0;
            //'windows 10', 'windows 2000', 'win31', 'win16', 'win32' =>'/(?<name>(windows))\s*(?<version>(nt)\s*(\d+[.]\d+)|(\d+))/i',
            'windows 10', 'windows 2000', 'win31', 'win16', 'win32' =>$this->makePattern('(windows)', true, true),

            default => throw new InvalidArgumentException('Unexpected platform : '.$identifier)
        };//end match
    }

    /**
     * @throws InvalidArgumentException
     */
    public function match(string $identifier):string
    {
        return match (strtolower($identifier)) {
            // Device of platform.
            'iphone'=>'/(?<name>(iphone))/i',
            'android'=>'/(?<name>(android))/i',
            'mobile'=>'/(?<name>(mobile))/i',
            'mac'=>'/(?<name>(mac))/i',
            'linux'=>'/(?<name>(linux))/i',
            'win'=>'/(?<name>(windows|win))/i',
            default => throw new InvalidArgumentException('Unexpected device : '.$identifier)
        };
    }
}
