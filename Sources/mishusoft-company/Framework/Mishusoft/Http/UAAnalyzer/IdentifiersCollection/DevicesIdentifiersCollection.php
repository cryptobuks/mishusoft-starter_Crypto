<?php


namespace Mishusoft\Http\UAAnalyzer\IdentifiersCollection;

use Mishusoft\Exceptions\RuntimeException;
use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesIdentifiersCollection extends Collection
{
    public function __construct()
    {
        parent::__construct();
    }

    public function all(): array
    {
        return [
            'iphone' => [
                'name' => 'iPhone',
                'type' => 'Mobile phone',
                'pointer' => 'Touch Screen',
                'vendor' => 'Apple Inc',
                'brand' => 'Apple',
            ],
            'mobile' => [
                'name' => 'Mobile',
                'type' => 'Mobile phone',
                'pointer' => 'Touch Screen',
                'vendor' => 'Unknown',
                'brand' => 'Generic',
            ],
            'android' => [
                'name' => 'Android Mobile',
                'type' => 'Mobile phone',
                'pointer' => 'Touch Screen',
                'vendor' => 'Google Inc',
                'brand' => 'Generic',
            ],
            'linux' => [
                'name' => 'linux Desktop',
                'type' => 'Desktop',
                'pointer' => 'Mouse',
                'vendor' => 'Linux Foundation',
                'brand' => 'Linux',
            ],
            'mac' => [
                'name' => 'Macintosh',
                'type' => 'Desktop',
                'pointer' => 'Mouse',
                'vendor' => 'Apple Inc',
                'brand' => 'MAC',
            ],
            'win' => [
                'name' => 'Windows Desktop',
                'type' => 'Desktop',
                'pointer' => 'Mouse',
                'vendor' => 'Microsoft Co',
                'brand' => 'Windows',
            ],
        ];
    }

    public function samples(): array
    {
        return array();
    }

    public function details(): array
    {
        return array();
    }


    /**
     * List of devices category
     *
     * @return array
     */
    public function categories(): array
    {
        // Devices Categories.
        return [
            'linux' => 'linux ',
            'iphone' => 'iPhone',
            'mac' => 'mac OS',
            'win' => 'windows',
            'android' => 'Android',
            'mobi' => 'Mobile',
        ];
    }//end getCategories()

    /**
     * List of devices architecture
     *
     * @return array
     */
    public function architectures(): array
    {
        // Devices architecture List.
        return [

            // Old model computers.
            'Babbage' => '50 d',
            'Zuse Z3' => '22 Bit',
            'ABC' => '50 Bit',
            'Harvard Mark I' => '23 d',
            'ENIAC I' => '20 d',
            'Manchester Baby' => '32 Bit',
            'UNIVAC I' => '12 d',
            'IAS machine' => '40 Bit',
            'Fast Universal Digital Computer M-2' => '34 bit',
            'IBM 701' => '36 bit',
            'UNIVAC 60|IBM 702|UNIVAC 120|IBM 705|IBM 305' => 'n d',
            'ARRA I|ARRA II' => '30 bit',
            'IBM 650|IBM 653' => '10 d',
            'IBM 704' => '10 d',
            'IBM NORC' => '16 d',
            'ARMAC' => '34 bit',
            'Autonetics Recomp I' => '40 bit',


            // ARM architecture.
            'ARMv1' => '32 bit',
            'ARMv2' => '32 bit',
            'ARMv3' => '32 bit',
            'ARMv4' => '32 bit',
            'ARMv4T' => '32 bit',
            'ARMv5TE' => '32 bit',
            'ARMv6' => '32 bit',
            'ARMv6-M' => '32 bit',
            'ARMv7-M' => '32 bit',
            'ARMv7E-M' => '32 bit',
            'ARMv8-M' => '32 bit',
            'ARMv7-R' => '32 bit',
            'ARMv8-R' => '32 bit',
            'ARMv7-A' => '32 bit',
            'ARMv8-A' => '64 bit',
            'ARMv8.1-A' => '64/32 bit',
            'ARMv8.2-A' => '64/32 bit',
            'ARMv8.3-A' => '64/32 bit',
            'ARMv8.4-A' => '64/32 bit',
            'ARMv8.5-A' => '64/32 bit',
            'ARMv8.6-A' => '64/32 bit',

            // Windows/Linux/Mac.
            /*
             * Intel's consumer-grade processors have followed an *86 naming convention,
             * dating back to the 8086 chip released in 1978. Later iterations included the 16-bit i286 in 1983,
             *  the 32-bit i386 in 1985, the 32-bit i486 in 1989, the i586 (the original Pentium chip) in 1993,
             *  the i686 (the Pentium Pro) in 1995, and the i786 (Pentium 4, or NetBurst) in 2000.
             */

            'i286' => '16 Bit',
            'Win16' => '16 Bit',
            'i386' => '32 Bit',
            'i486' => '32 Bit',
            'i586' => '32 Bit',
            'i686' => '32 Bit',
            'i786' => '32 Bit',
            'x86' => '32 Bit',
            'x64' => '64 Bit',
            'WOW64' => '64 Bit',
            'Win64' => '64 Bit',
            'x86_64' => '64 Bit',
            'x86-64' => '64 Bit',
            'x64/x86' => '64 Bit',
            'IA-64' => '64 Bit',
            'ARM64' => '64 Bit',
            'AMD64' => '64 Bit',
            'Intel64' => '64 Bit',
        ];
    }//end getDevicesArchitectureList()
}
