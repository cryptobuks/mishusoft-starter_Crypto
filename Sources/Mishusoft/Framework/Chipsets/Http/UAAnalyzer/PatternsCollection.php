<?php


namespace Mishusoft\Framework\Chipsets\Http\UAAnalyzer;

use Mishusoft\Framework\Chipsets\Exceptions\RuntimeException;

class PatternsCollection extends Collection
{
    public PatternsCollection\BrowsersIdentificationPatternsCollection $browsers;
    public PatternsCollection\DevicesIdentificationPatternsCollection $devices;
    public PatternsCollection\PlatformsIdentificationPatternsCollection $platforms;

    private string $defaultSeparators = '(\s*|\/|\_|\-|\:|\;|\()';
    //private string $defaultVersionsString = '(v|y|yb\/|nt)?\s*(\d+[.-_]\d+[.-]\d+[.-_]\d+)|(\d+[.-_]\d+[.-_]\d+)|(\d+[.-_]\d+)|(\d+)|(\w+)';
    private string $defaultVersionsString = '(v|y|yb\/|nt)?\s*((\d+[.-_])?(\d+[.-_])?(\d+[.-])?(\d+[.-_])?(\d+))|(\w+)';

    /**
     * PatternsCollection constructor.
     */
    public function __construct()
    {
        $this->browsers = new PatternsCollection\BrowsersIdentificationPatternsCollection();
        $this->devices = new PatternsCollection\DevicesIdentificationPatternsCollection();
        $this->platforms = new PatternsCollection\PlatformsIdentificationPatternsCollection();
    }

    /**
     * @return string[]
     */
    public function all(): array
    {
        return array(
            'browser',
            'platforms',
            'devices'
        );
    }

    /**
     * @param string $category
     * @param string $identifier
     * @return array
     */
    public function query(string $category, string $identifier): array
    {
        return match (strtolower($category)) {
            'browsers' => $this->browsers->query($identifier),
            'platforms' => $this->platforms->query($identifier),
            'devices' => $this->devices->query($identifier),
        };
    }


    /**
     * @param string $name
     * @param string|bool $separator
     * @param string|bool $version
     * @return string
     * @throws RuntimeException
     */
    protected function makePattern(string $name, string|bool $separator, string|bool $version):string
    {
        //https://www.php.net/manual/en/regexp.reference.subpatterns.php
        //https://www.php.net/manual/en/reference.pcre.pattern.modifiers.php

        //Simple regex
        //
        //Regex quick reference
        //[abc]     A single character: a, b or c
        //[^abc]     Any single character but a, b, or c
        //[a-z]     Any single character in the range a-z
        //[a-zA-Z]     Any single character in the range a-z or A-Z
        //^     Start of line
        //$     End of line
        //\A     Start of string
        //\z     End of string
        //.     Any single character
        //\s     Any whitespace character
        //\S     Any non-whitespace character
        //\d     Any digit
        //\D     Any non-digit
        //\w     Any word character (letter, number, underscore)
        //\W     Any non-word character
        //\b     Any word boundary character
        //(...)     Capture everything enclosed
        //(a|b)     a or b
        //a?     Zero or one of a
        //a*     Zero or more of a
        //a+     One or more of a
        //a{3}     Exactly 3 of a
        //a{3,}     3 or more of a
        //a{3,6}     Between 3 and 6 of a
        //
        //options:
        // i case insensitive m make dot match newlines x ignore whitespace in regex
        // o perform #{...} substitutions only once

        //$default = '/(?<name>(mozilla))(?<separator>(\s*|\/|\-|\:))(?<version>(\d+[.]\d+))/i';
        //$defaultSeparatorPattern = '(\s*|\/|\_|\-|\:)';

        // Android 6.0.1
        // Baiduspider/2.0
        // Chrome/91.0.4472.77
        // PTST/210609.200427
        // Apache-HttpClient/4.5.5
        // ActiveBookmark 1.x
        // Muncher YB/3.5.1
        // Ad Muncher YB/3.5.1
        // Ad Muncher v4.94.34121/7137 (Free)
        // Windows NT 10.0
        // 1337Browser_V3.1
        // 2345chrome v3.0.0.9739 ok
        //Silk/1.0.13.81_10003810
        //CPU OS 11_2_2
        //$defaultVersionPattern = '(v|y|yb\/|nt)?\s*(\d+[.-]\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+)|(\d+)|(\w+)';
        //$defaultVersionPattern = 'v?(\d+[.-]\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+[.-]\d+)|(\d+[.-]\d+)|(\d+)|(\w+)';
        if ($name!=='') {
            $namePattern = sprintf('(?<name>%s)', $name);
        } else {
            throw new RuntimeException('\$name can not be empty');
        }


        return sprintf(
            '/%s%s%s/imu',
            $namePattern,
            $this->validate('separator', $this->defaultSeparators, $separator),
            $this->validate('version', $this->defaultVersionsString, $version)
            //$this->validate('version', $defaultVersionPattern, $version)
        );
    }

    /**
     * @param string $identifier
     * @param string $default
     * @param string|bool $variable
     * @return string
     */
    private function validate(string $identifier, string $default, string|bool $variable):string
    {
        if (is_string($variable) && $variable !=='') {
            return sprintf('(?<%s>%s)', $identifier, $variable);
        }

        if (is_bool($variable) && $variable === false) {
            return '';
        }

        return sprintf('(?<%s>%s)', $identifier, $default);
    }
}
