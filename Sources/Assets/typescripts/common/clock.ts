import {captureElement} from "./app-common-required";

export function refreshDigitalClock() {
    let refresh = 1000; // Refresh rate in milli seconds
    setTimeout('Mishusoft.DigitalClock()', refresh)
}

export function DigitalClock() {
    let date = new Date();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let toDayNumber = date.getDate();
    let toDayName = days[date.getDay()];
    let thisMonth = months[date.getMonth()];
    let thisYear = date.getFullYear();
    let hour: string | number = date.getHours();
    let minute: string | number = date.getMinutes();
    let second: string | number = date.getSeconds();
    let session = "AM";
    let text = '';
    /*
    getFullYear()	Get the year as a four digit number (yyyy)
    getMonth()	Get the month as a number (0-11)
    getDate()	Get the day as a number (1-31)
    getHours()	Get the hour (0-23)
    getMinutes()	Get the minute (0-59)
    getSeconds()	Get the second (0-59)
    getMilliseconds()	Get the millisecond (0-999)
    getTime()	Get the time (milliseconds since January 1, 1970)
    getDay()	Get the weekday as a number (0-6)
    Date.now()	Get the time. ECMAScript 5.
    */

    if (hour === 0) {
        hour = 12;
    }
    if (hour > 12) {
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    text += toDayName + ',&nbsp;' + toDayNumber + '&nbsp;' + thisMonth + '&nbsp;' + thisYear + '&nbsp;&nbsp;';
    text += hour + '&nbsp;:&nbsp;' + minute + '&nbsp;:&nbsp;' + second + '&nbsp;' + session;
    let tag = captureElement('#ct');
    if (tag) {
        tag.innerHTML = text;
        refreshDigitalClock();
    }
}