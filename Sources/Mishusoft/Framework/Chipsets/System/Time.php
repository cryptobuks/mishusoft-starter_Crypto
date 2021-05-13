<?php

namespace Mishusoft\Framework\Chipsets\System;

use DateTime;
use DateTimeZone;

class Time extends DateTime
{
    /*declare version*/
    const VERSION = "1.0.2";

    public function __construct($time = 'now', DateTimeZone $timezone = null)
    {
        parent::__construct($time, $timezone);
    }

    public static function getFullTime()
    {
        return date('d-m-Y h:i A', time());
    }

    public static function getToday()
    {
        return date("Y-m-d H:i:s");
    }

    public static function getTodayFull()
    {
        return date("Y-m-d H:i:s A");
    }

    public static function getTodayFullBeautify(int $date)
    {
        return date("D d, M Y H:i:s A", $date);
    }

    /**
     * @return array|false
     */
    public static function current()
    {
        return date_parse(date("Y-m-d H:i:s A"));

    }

    public static function getCurrentMonthNumber()
    {
        return date("m");
    }

    public static function getDateOnly(string $date)
    {
        return date("Y-m-d", strtotime($date));
    }

    public static function getDateOnlyFromTime(int $time)
    {
        return date("Y-m-d", $time);
    }

    public static function getHours(string $date)
    {
        return date("h", strtotime($date));
    }

    public static function getMinutes(string $date)
    {
        return (time() - strtotime($date)) / 60;
    }

    public static function getCurrentMonthName()
    {
        return date("M");
    }

    public static function getCurrentYearNumber()
    {
        return date("Y");
    }

    public static function getTodayDateOnly()
    {
        return date("Y-m-d");

    }

    public function getYesterdayDate(): string
    {
        return date("F j, Y", time() - 60 * 60 * 24);
    }

    public function getDaysInMonth(): int
    {
        return cal_days_in_month(CAL_GREGORIAN, date('m'), date('Y'));
    }

    public static function getNextMonthDate()
    {
        /*minutes = minutes < 10 ? "0" + minutes : minutes;*/
        $m = (date("m") + 1);
        return date("Y-" . ($m < 10 ? "0" . $m : $m) . "-d H:i:s");
    }

    public static function getNextDayDate()
    {
        /*minutes = minutes < 10 ? "0" + minutes : minutes;*/
        $d = (date("d") + 1);
        return date("Y-m-" . ($d < 10 ? "0" . $d : $d) . " H:i:s");
    }

    function __destruct()
    {

    }
}