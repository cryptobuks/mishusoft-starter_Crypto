<?php
  
  // original source: http://kuwamoto.org/2007/12/17/improved-pluralizing-in-php-actionscript-and-ror/
  // collected source: https://gist.github.com/tbrianjones/ba0460cc1d55f357e00b

  // ORIGINAL NOTES
  //
  // Thanks to http://www.eval.ca/articles/php-pluralize (MIT license)
  //           http://dev.rubyonrails.org/browser/trunk/activesupport/lib/active_support/inflections.rb (MIT license)
  //           http://www.fortunecity.com/bally/durrus/153/gramch13.html
  //           http://www2.gsu.edu/~wwwesl/egw/crump.htm
  //


namespace Mishusoft\Utility;

class Inflect
{
    private static array $plural = [
        '/(quiz)$/i'               => "$1zes",
        '/^(ox)$/i'                => "$1en",
        '/([m|l])ouse$/i'          => "$1ice",
        '/(matr|vert|ind)ix|ex$/i' => "$1ices",
        '/(x|ch|ss|sh)$/i'         => "$1es",
        '/([^aeiouy]|qu)y$/i'      => "$1ies",
        '/(hive)$/i'               => "$1s",
        '/(?:([^f])fe|([lr])f)$/i' => "$1$2ves",
        '/(shea|lea|loa|thie)f$/i' => "$1ves",
        '/sis$/i'                  => "ses",
        '/([ti])um$/i'             => "$1a",
        '/(tomat|potat|ech|her|vet)o$/i'=> "$1oes",
        '/(bu)s$/i'                => "$1ses",
        '/(alias)$/i'              => "$1es",
        '/(octop)us$/i'            => "$1i",
        '/(ax|test)is$/i'          => "$1es",
        '/(us)$/i'                 => "$1es",
        '/s$/i'                    => "s",
        '/$/'                      => "s",
    ];

    private static array $singular = [
        '/(quiz)zes$/i'             => "$1",
        '/(matr)ices$/i'            => "$1ix",
        '/(vert|ind)ices$/i'        => "$1ex",
        '/^(ox)en$/i'               => "$1",
        '/(alias)es$/i'             => "$1",
        '/(octop|vir)i$/i'          => "$1us",
        '/(cris|ax|test)es$/i'      => "$1is",
        '/(shoe)s$/i'               => "$1",
        '/(o)es$/i'                 => "$1",
        '/(bus)es$/i'               => "$1",
        '/([m|l])ice$/i'            => "$1ouse",
        '/(x|ch|ss|sh)es$/i'        => "$1",
        '/(m)ovies$/i'              => "$1ovie",
        '/(s)eries$/i'              => "$1eries",
        '/([^aeiouy]|qu)ies$/i'     => "$1y",
        '/([lr])ves$/i'             => "$1f",
        '/(tive)s$/i'               => "$1",
        '/(hive)s$/i'               => "$1",
        '/(li|wi|kni)ves$/i'        => "$1fe",
        '/(shea|loa|lea|thie)ves$/i'=> "$1f",
        '/(^analy)ses$/i'           => "$1sis",
        '/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i'  => "$1$2sis",
        '/([ti])a$/i'               => "$1um",
        '/(n)ews$/i'                => "$1ews",
        '/(h|bl)ouses$/i'           => "$1ouse",
        '/(corpse)s$/i'             => "$1",
        '/(us)es$/i'                => "$1",
        '/s$/i'                     => "",
    ];

    private static array $irregular = [
        'move'   => 'moves',
        'foot'   => 'feet',
        'goose'  => 'geese',
        'sex'    => 'sexes',
        'child'  => 'children',
        'man'    => 'men',
        'tooth'  => 'teeth',
        'person' => 'people',
        'valve'  => 'valves',
    ];

    private static array $uncountable = [
        'sheep',
        'fish',
        'deer',
        'series',
        'species',
        'money',
        'rice',
        'information',
        'equipment',
    ];
      
    public static function pluralize($string)
    {
        // save some time in the case that singular and plural are the same
        if (in_array(strtolower($string), self::$uncountable, true)) {
            return $string;
        }
              
      
        // check for irregular singular forms
        foreach (self::$irregular as $pattern => $result) {
            $pattern = '/' . $pattern . '$/i';
              
            if (preg_match($pattern, $string)) {
                return preg_replace($pattern, $result, $string);
            }
        }
          
        // check for matches using regular expressions
        foreach (self::$plural as $pattern => $result) {
            if (preg_match($pattern, $string)) {
                return preg_replace($pattern, $result, $string);
            }
        }
          
        return $string;
    }
      
    public static function singularize($string)
    {
        // save some time in the case that singular and plural are the same
        if (in_array(strtolower($string), self::$uncountable, true)) {
            return $string;
        }
  
        // check for irregular plural forms
        foreach (self::$irregular as $result => $pattern) {
            $pattern = '/' . $pattern . '$/i';
              
            if (preg_match($pattern, $string)) {
                return preg_replace($pattern, $result, $string);
            }
        }
          
        // check for matches using regular expressions
        foreach (self::$singular as $pattern => $result) {
            if (preg_match($pattern, $string)) {
                return preg_replace($pattern, $result, $string);
            }
        }
          
        return $string;
    }
      
    public static function pluralizeIf($count, $string): string
    {
        if ($count === 1) {
            return "1 $string";
        }

        return $count . " " . self::pluralize($string);
    }


    /**
     * Make a string lowercase
     * @link https://php.net/manual/en/function.strtolower.php
     * @param string $string
     * @return string the lowercased string.
     */
    public static function lower(string $string): string
    {
        return "" !== $string ? strtolower($string) : "";
    }

    /**
     * Make a string uppercase
     * @link https://php.net/manual/en/function.strtoupper.php
     * @param string $string
     * @return string the uppercased string.
     */
    public static function upper(string $string): string
    {
        return "" !== $string ? strtoupper($string) : "";
    }


    /**
     * Make a string's first character uppercase
     * @link https://php.net/manual/en/function.ucfirst.php
     * @param string $string <p>
     * The input string.
     * </p>
     * @return string the resulting string.
     */
    public static function ucfirst(string $string): string
    {
        return "" !== $string ? ucfirst($string) : "";
    }

    /**
     * Make a string's first character lowercase
     * @link https://php.net/manual/en/function.lcfirst.php
     * @param string $string <p>
     * The input string.
     * </p>
     * @return string the resulting string.
     */
    public static function lcfirst(string $string): string
    {
        return "" !== $string ? lcfirst($string) : "";
    }

    /**
     * Uppercase the first character of each word in a string
     * @link https://php.net/manual/en/function.ucwords.php
     * @param string $string <p>
     * The input string.
     * </p>
     * @param string $separators [optional] <p>
     * @return string the modified string.
     */
    public static function ucwords(string $string, $separators = " \t\r\n\f\v"): string
    {
        return "" !== $string ? ucwords($string, $separators) : "";
    }

    /**
     * Find the position of the first occurrence of a substring in a string
     * @link https://php.net/manual/en/function.strpos.php
     * @param string $haystack
     * @param mixed $needle
     * @param int $offset [optional]
     * @return int
     */
    public static function position(string $haystack, mixed $needle, int $offset = 0): int
    {
        return strpos($haystack, $needle, $offset);
    }

    /**
     * @param string $contents
     * @return string
     */
    public static function removeTags(string $contents): string
    {
        return "" !== $contents ? trim(strip_tags($contents)) : "";
    }

    public static function strpos(string $needle, string $string): int
    {
        return strpos($string, $needle);
    }

    /**
     * @param string $contents
     * @return string
     */
    public static function toHtml(string $contents): string
    {
        return "" !== $contents ? htmlspecialchars($contents, ENT_QUOTES) : "";
    }


    /**
     * @param string $haystack
     * @param string $needle
     * @return bool
     */
    public static function contains(string $haystack, string $needle): bool
    {
        return '' === $needle || false !== strpos($haystack, $needle);
    }

    /**
     * @param string $haystack
     * @param string $needle
     * @return bool
     */
    public static function startsWith(string $haystack, string $needle): bool
    {
        return 0 === strncmp($haystack, $needle, strlen($needle));
    }

    /**
     * @param string $haystack
     * @param string $needle
     * @return bool
     */
    public static function endsWith(string $haystack, string $needle): bool
    {
        return '' === $needle || ('' !== $haystack && 0 === substr_compare($haystack, $needle, -strlen($needle)));
    }

    public static function getClassBaseName(string $classname): ?string
    {
        $path = explode('\\', $classname);
        return array_pop($path);
    }

    public static function search(string $haystack, string $needle, int $offset = 0): bool|int
    {
        return strpos($haystack, $needle);
    }
}
