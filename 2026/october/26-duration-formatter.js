/*
Duration Formatter

Given an integer number of seconds, return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

    Seconds: Should always be two digits.
    Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
    Hours: Should be included only if they're greater than zero.

*/
function format(seconds) {
  let totalHours = Math.trunc(seconds / 3600);
  let totalMinutes = Math.trunc((seconds % 3600) / 60);
  let totalSeconds = seconds % 60;
  let result = "";
  if (totalHours > 0) {
    result = totalHours + ":";
    result += String(totalMinutes).padStart(2, "0") + ":";
    result += String(totalSeconds).padStart(2, "0");
  } else {
    result = totalMinutes + ":" + String(totalSeconds).padStart(2, "0");
  }
  return result;
}
