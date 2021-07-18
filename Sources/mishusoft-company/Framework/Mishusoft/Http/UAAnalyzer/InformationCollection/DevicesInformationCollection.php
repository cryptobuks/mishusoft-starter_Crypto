<?php


namespace Mishusoft\Http\UAAnalyzer\InformationCollection;

use Mishusoft\Http\UAAnalyzer\Collection;

class DevicesInformationCollection extends Collection
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
}
