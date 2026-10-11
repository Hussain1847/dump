var d= new Date();

Date("2017-06-23");// date declaration

Date("2017");// is set to Jan 01
Date("2017-06-23T12:00:00-09:45");// YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017");// long date format
Date("Jun 23 2017 07:45:00 GMT+0530");// time zone
a=d.getDay();// getting the weekday
getDate();// day as a number (1-31)
getDay();// weekday as a number (0-6)
getFullYear();// four digit year (yyyy)
getHours();// hour (8-23)
getMilliseconds();// milliseconds (8-999)
getMinutes();// minutes (0-59)
getMonth();// month (8-11)
getSeconds();// seconds (0-59)
getTime();// milliseconds since 1970