<?php declare(strict_types=1);

namespace Mishusoft\System;

use DateTime;

class Time extends DateTime
{
    // declare version
    public const VERSION = '1.0.2';

    /**
     * @return string
     */
    public static function fullTime(): string
    {
        return date('d-m-Y h:i A');
    }//end getFullTime()


    /**
     * @return string
     */
    public static function today(): string
    {
        return date('Y-m-d H:i:s');
    }//end getToday()


    /**
     * @return string
     */
    public static function todayFull(): string
    {
        return date('Y-m-d H:i:s A');
    }//end getTodayFull()


    /**
     * @param int $date
     * @return string
     */
    public static function todayFullBeautify(int $date): string
    {
        return date('D d, M Y H:i:s A', $date);
    }//end getTodayFullBeautify()


    /**
     * @return array|false
     */
    public static function current(): bool|array
    {
        return date_parse(date('Y-m-d H:i:s A'));
    }//end current()


    /**
     * @return string
     */
    public static function currentMonthNumber(): string
    {
        return date('m');
    }//end getCurrentMonthNumber()


    /**
     * @param string $date
     * @return string
     */
    public static function dateOnly(string $date): string
    {
        return date('Y-m-d', strtotime($date));
    }//end getDateOnly()


    /**
     * @param int $time
     * @return string
     */
    public static function dateOnlyFromTime(int $time): string
    {
        return date('Y-m-d', $time);
    }//end getDateOnlyFromTime()


    /**
     * @param string $date
     * @return string
     */
    public static function hours(string $date): string
    {
        return date('h', strtotime($date));
    }//end getHours()


    /**
     * @param string $date
     * @return float|int
     */
    public static function minutes(string $date): float|int
    {
        return ((time() - strtotime($date)) / 60);
    }//end getMinutes()


    /**
     * @return string
     */
    public static function currentMonthName(): string
    {
        return date('M');
    }//end getCurrentMonthName()


    /**
     * @return string
     */
    public static function currentYearNumber(): string
    {
        return date('Y');
    }//end getCurrentYearNumber()


    /**
     * @return string
     */
    public static function todayDateOnly(): string
    {
        return date('Y-m-d');
    }//end getTodayDateOnly()


    /**
     * @return string
     */
    public static function todayTimeOnly(): string
    {
        return date('H:i:s');
    }//end getTodayDateOnly()


    /**
     * @return string
     */
    public function yesterdayDate(): string
    {
        return date('F j, Y', (time() - 60 * 60 * 24));
    }//end getYesterdayDate()


    /**
     * @return int
     */
    public function daysInMonth(): int
    {
        return cal_days_in_month(CAL_GREGORIAN, (int)date('m'), (int)date('Y'));
    }//end getDaysInMonth()


    /**
     * @return string
     */
    public static function nextMonthDate(): string
    {
        // minutes = minutes < 10 ? "0" + minutes : minutes;
        $m = ((int)date('m') + 1);
        return date('Y-'.($m < 10 ? '0'.$m : $m).'-d H:i:s');
    }//end getNextMonthDate()


    /**
     * @return string
     */
    public static function nextDayDate(): string
    {
        // minutes = minutes < 10 ? "0" + minutes : minutes;
        $d = ((int)date('d') + 1);
        return date('Y-m-'.($d < 10 ? '0'.$d : $d).' H:i:s');
    }//end getNextDayDate()


    public function __destruct()
    {
    }//end __destruct()
}//end class
