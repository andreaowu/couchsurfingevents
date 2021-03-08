/**
 * Gets Couchsurfing events from the website to populate a
 * spreadsheet and calendar.
 * 
 * Copyright 2021, Andrea Wu, All rights reserved.
 */

let added = new Set();
let calendarDeleted = false;

function parseDay(number) {
  switch(number) {
    case 0.0:
      return 'Sun';
    case 1.0:
      return 'Mon';
    case 2.0:
      return 'Tues';
    case 3.0:
      return 'Wed';
    case 4.0:
      return 'Thurs';
    case 5.0:
      return 'Fri';
    default:
      return 'Sat';
  }
}

function parseTime(eventId, startDate, endDate, startYear, endYear) {
  let url = `https://www.couchsurfing.com/calendars/google/event/${eventId}`;

  startDate = new Date(startDate);
  startDate.setYear(startYear);
  endDate = new Date(endDate);
  endDate.setYear(endYear);
  
  while (true) {
    try {
      let response = UrlFetchApp.fetch(url, headers).getContentText();
      const regex = /dates=(\d*)T(\d*)Z.*F(\d*)T(\d*)Z/;
      const match = response.match(regex);
      const startYear = match[1].substr(0, 4);
      const startMonth = match[1].substr(4, 2);
      const startDate = match[1].substr(6, 2);
      const startTime = match[2].substr(0, 4);
      const endYear = match[3].substr(0, 4);
      const endMonth = match[3].substr(4, 2);
      const endDate = match[3].substr(6, 2);
      const endTime = match[4].substr(0, 4);

      const start = new Date(Date.UTC(parseInt(startYear), parseInt(startMonth) - 1, parseInt(startDate), parseInt(startTime.substr(0, 2)), parseInt(startTime.substr(2, 2))));
      const end = new Date(Date.UTC(parseInt(endYear), parseInt(endMonth) - 1, parseInt(endDate), parseInt(endTime.substr(0, 2)), parseInt(endTime.substr(2, 2))));
      return [start, end];
    } catch (err) {
      Logger.log(`error in getting event, event id: ${eventId}`);
    }
  }
}

function parseResponse(response, sheet) {
  try {  
    // date, time, day of week
    let regex = /From: <span class='dtstart'>(.*), (\d*), (.*)<\/span> to <span class='dtend'>(.*), (\d*), (.*)<\/span>/;
    let match = response.match(regex);
    const startDate = match[1].replace(" 0", " ").toString().trim();
    const startYear = match[2];
    const startTime = match[3].trim().replace(" ", "").replace(":00", "");
    const endDate = match[4].replace(" 0", " ").toString().trim();
    const endYear = match[5];
    const endTime = match[6].trim().replace(" ", "").replace(":00", "");
    const time = startTime + "-" + endTime;
    const day = parseDay(new Date(startDate + ", 2021").getDay()).toString();

    let newResponse = response.replace(match[0], "");

    // event location
    regex = /<p class=\"card__location\">(.*)<\/p>/;
    match = response.match(regex);
    const location = match[1].replace("United States of America", "USA").replace("United States", "USA");
    newResponse = newResponse.replace(match[0], "");

    // URL and event name
    regex = /<h3 class=\"card__title\"><a href=\"(.*)\">(.*)<\/a><\/h3>/;
    match = response.match(regex);
    const url = "couchsurfing.com" + match[1];
    let eventName = match[2].trim();

    // remove images
    const imgRegex = /<img.*?\/>/;
    while (eventName.match(imgRegex) != null) {
      eventName = eventName.replace(eventName.match(imgRegex)[0], "").trim();
    }

    const link = `=HYPERLINK("${url}", "${eventName}")`;
    newResponse = newResponse.replace(match[0], "");

    // eventId
    regex = /href=\"\/events\/(\d*)\/[a-zA-Z]*\"/;
    match = response.match(regex);
    const eventId = match[1];
    newResponse = newResponse.replace(match[0], "");

    // number of attendees
    regex = /<p class=\"event__attendance\">(.*) attending<\/p>/;
    match = response.match(regex);
    newResponse = newResponse.replace(match[0], "");

    // startDate, day, startTime-endTime, location, eventName with url, url, eventName, eventId, endDate, startYear, endYear
    const row = [startDate, day, time, location, link, url, eventName, eventId, endDate, startYear, endYear];

    // add only if attendees exceed 5, not already added, and not ambassador event
    const same = startDate + eventName
    if (parseInt(match[1]) >= 5 && !added.has(same) && eventName.search('mbassador') < 0) {
      added.add(same);
      addToSheet(row, sheet);
      if (!calendarDeleted) {
        calendarDeleted = true;
        calendar.getEvents(today, future).forEach(event => {
          try {
            event.deleteEvent();
          } catch (err) {
            Logger.log("couldn't delete event: " + err);
          }
        });
      }
      addToCalendar(row); // don't know why the earlier !added.has(same) doesn't work so adding another check
    }
    return newResponse;
  } catch (err) {
    return response;
  }
}

function addToSheet(row, sheet) {
  const newRow = sheet.getLastRow() + 1;
  const allRow = allSheet.getLastRow() + 1;

  for (let i = 1; i < rowItemsCount + 1; i++) {
    sheet.getRange(newRow, i).setValue(row[i - 1]);
    allSheet.getRange(allRow, i).setValue(row[i - 1]);
  }
}

function addToCalendar(row) {
  const times = parseTime(row[itemToIndexMapping['eventId']], row[itemToIndexMapping['startDate']], row[itemToIndexMapping['endDate']],row[itemToIndexMapping['startYear']], row[itemToIndexMapping['endYear']]);
  calendar.createEvent(row[itemToIndexMapping['eventName']], times[0], times[1], {location: row[itemToIndexMapping['location']], description: row[itemToIndexMapping['url']]});
}

function clean(sheet) {
  for (let rowCount = sheet.getLastRow(); rowCount > 1; rowCount--) {
    sheet.deleteRow(rowCount);
  }
}

function getAllEvents() {
  // delete all rows in all sheet
  clean(allSheet);

  for (let i = 0; i < allCountries.length; i++) {
    added = new Set();
    const sheet = sheets[i];

    // delete all rows just in case events got updated
    clean(sheet);

    for (let j = 0; j < allCountries[i].length; j++) {
      let count = 1;
      let page = 2;
      const country = allCountries[i][j];
      while (count < page) {
        let url = `https://www.couchsurfing.com/events/search/${count}?search_query=${country}&start_date=${dates['todayYear']}-${dates['todayMonth']}-${dates['todayDate']}&end_date=${dates['futureYear']}-${dates['futureMonth']}-${dates['futureDate']}`;

        while (true) {
          try {
            let response = UrlFetchApp.fetch(url, headers).getContentText();

            const regex = /<i class=\"icon icon-local_advice\"><\/i> Page (.*) of (.*)<\/div>/;
            const match = response.match(regex);
            page = match ? parseInt(match[2]) : 1;
            count += 1;

            let newResponse = parseResponse(response, sheet);

            while (newResponse != response) {
              temp = parseResponse(newResponse, sheet);
              response = newResponse;
              newResponse = temp;
            }
            break;
          } catch (err) {
            Logger.log("getAllEvents country: " + country);
          }
        }
      }
    }
    sheet.sort(1);
  }
  allSheet.sort(1);
}
