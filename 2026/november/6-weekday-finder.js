/*
Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"

Be sure to ignore time zones.
*/
function getWeekday(dateString) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = new Date(dateString).getUTCDay()
  return days[day];
}