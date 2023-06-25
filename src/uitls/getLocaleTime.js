/**
 * @function getLocaleTime - Converts a date and time in Beijing time to the local time zone.
 *
 * @param {Integer} hours An integer between 0 and 23 representing the hours.
 * @param {Integer} minutes An integer between 0 and 59 representing the minutes.
 * @param {Integer} seconds An integer between 0 and 59 representing the seconds. If you specify seconds, you must also specify minutes.
 * @param {Integer} milliseconds An integer between 0 and 999 representing the milliseconds. If you specify milliseconds, you must also specify minutesValue and seconds.
 * @returns timestamps
 */
export function getLocaleTime(
  hours,
  minutes = 0,
  seconds = 0,
  milliseconds = 0
) {
  // Create a new Date object with the current date and time
  const time = new Date();

  // Set the time
  time.setHours(hours, minutes, seconds, milliseconds);

  // Get the current timezone offset in minutes
  const currentTimezoneOffset = time.getTimezoneOffset();

  // Calculate the timezone offset for Beijing in minutes (Beijing is UTC+8)
  const beijingTimezoneOffset = -480; // UTC+8 is -480 minutes

  // Calculate the UTC time by subtracting the current timezone offset
  const utcTime = new Date(time.getTime() - currentTimezoneOffset * 60000);

  // Adjust the UTC time by adding the Beijing timezone offset
  const adjustedTime = new Date(
    utcTime.getTime() + beijingTimezoneOffset * 60000
  );

  return adjustedTime;
}
