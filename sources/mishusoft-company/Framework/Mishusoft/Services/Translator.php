<?php declare(strict_types=1);

namespace Mishusoft\Services;

use Locale;
use MessageFormatter;

class Translator
{
    /*declare version*/
    public const VERSION = "1.0.2";

    public static function localeDefault(): string
    {
        return Locale::getDefault();
    }

    /**
     * @param int $number
     * @param string $language
     * @return false|string
     */
    public static function translateNumber(int $number, string $language = "en_US"): bool|string
    {
        return MessageFormatter::formatMessage(
            $language,
            "{number_apples, number, integer}",
            [ 'number_apples' => $number ]
        );
    }


    /**
     * @param $number
     * @param false|string $language
     * @return string
     */
    public static function translateNumberToWords($number, false|string $language = false): string
    {
        $number = (int) $number;
        if (!is_string($language)) {
            $language = 'english';
        }

        $one_to_teen = [
            'english' => [
                1 => "one",
                2 => "two",
                3 => "three",
                4 => "four",
                5 => "five",
                6 => "six",
                7 => "seven",
                8 => "eight",
                9 => "nine",
                10 => "ten",
                11 => "eleven",
                12 => "twelve",
                13 => "thirteen",
                14 => "fourteen",
                15 => "fifteen",
                16 => "sixteen",
                17 => "seventeen",
                18 => "eighteen",
                19 => "nineteen",
            ],
            'bangla' => [
                1 => "এক",
                2 => "দুই",
                3 => "তিন",
                4 => "চার",
                5 => "পাঁচ",
                6 => "ছয়",
                7 => "সাত",
                8 => "আট",
                9 => "নয়",
                10 => "দশ",
                11 => "এগার",
                12 => "বারো",
                13 => "তের",
                14 => "চৌদ্দ",
                15 => "পনের",
                16 => "ষোল",
                17 => "সতের",
                18 => "আটর",
                19 => "ঊনিশ",
            ], ];

        $tens = [
            'english' => [
                1 => "ten",
                2 => "twenty",
                3 => "thirty",
                4 => "forty",
                5 => "fifty",
                6 => "sixty",
                7 => "seventy",
                8 => "eighty",
                9 => "ninety",
            ],
            'bangla' => [
                1 => "দশ",
                2 => "বিশ",
                3 => "ত্রিশ",
                4 => "চল্লিশ",
                5 => "পঞ্চাশ",
                6 => "ষাট",
                7 => "সত্তর",
                8 => "আশি",
                9 => "নব্বই",
            ],
        ];

        $hundreds =
            [
                'english' => [
                    "hundred",
                    "thousand",
                    "million",
                    "billion",
                    "trillion",
                    "quadrillion",
                ],
                'bangla' => [
                    "শত",
                    "হাজার",
                    "লক্ষ",
                    "কোটি",
                ], ];
        //limit t quadrillion

        $number = number_format($number, 2);
        $num_arr = explode('.', $number);
        $taka = $num_arr[0];
        $paisha = $num_arr[1];
        $total_taka = array_reverse(explode(',', $taka));
        krsort($total_taka);
        $text = '';
        foreach ($total_taka as $key => $i) {
            if ($i < 20) {
                if (self::ifGreaterThanZero($i)) {
                    $text .= $one_to_teen[$language][$i];
                }
            } elseif ($i < 100) {
                $text .= $tens[$language][$i[0]];
                if (self::ifGreaterThanZero($i[1])) {
                    $text .= " " . $one_to_teen[$language][$i[1]];
                }
            } else {
                if (self::ifGreaterThanZero($i[0])) {
                    $text .= $one_to_teen[$language][$i[0]] . " " . $hundreds[$language][0];
                }
                if (self::ifGreaterThanZero($i[1])) {
                    $text .= " " . $tens[$language][$i[1]];
                }
                if (self::ifGreaterThanZero($i[2])) {
                    $text .= " " . $one_to_teen[$language][$i[2]];
                }
            }

            if ($key > 0) {
                $text .= " " . $hundreds[$language][$key] . " ";
            }
        }
        if ($paisha > 0) {
            $text .= " and ";
            if ($paisha < 20) {
                $text .= $one_to_teen[$language][$paisha];
            } elseif ($paisha < 100) {
                if (self::ifGreaterThanZero($paisha[0])) {
                    $text .= " " . $tens[$language][$paisha[0]];
                }
                if (self::ifGreaterThanZero($paisha[1])) {
                    $text .= " " . $one_to_teen[$language][$paisha[1]];
                }
            }
        }
        if ($language === 'english') {
            return ucfirst($text);
        }
        return $text;
    }

    /**
     * @param $i
     * @return bool
     */
    private static function ifGreaterThanZero($i): bool
    {
        return $i > 0;
    }
}
