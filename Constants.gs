/**
 * Constants relevant to URL, sheets, dates, etc.
 * 
 * Copyright 2021, Andrea Wu, All rights reserved.
 */

const calendarId = CALENDA_ID;

const cookie = COOKIE;

const headers = {
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "headers":{
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "cookie": cookie
    }
  };

const rowItemsCount = 5; // number of items in the spreadsheet

// should use a class for this instead of an array with indices
const itemToIndexMapping = {
  'startDate': 0, // string
  'day': 1, 
  'time': 2, 
  'location': 3, 
  'hyperlink': 4, 
  'url': 5, 
  'eventName': 6, 
  'eventId': 7, 
  'endDate': 8,
  'startYear': 9,
  'endYear': 10
}

// getting Google sheet and calendar
const activeSheet = SpreadsheetApp.getActiveSpreadsheet();
const sheets = activeSheet.getSheets();
const calendar = CalendarApp.getCalendarById(calendarId);
const allSheet = activeSheet.getSheetByName("All");
const todaySheet = activeSheet.getSheetByName("Today");
const pastSheet = activeSheet.getSheetByName("Past");

// setting dates to be used for today and one month from today
const today = new Date();
const dates = {
  'todayYear': today.getFullYear(),
  'todayMonth': today.getMonth() + 1,
  'todayDate': today.getDate(),
  'futureYear': today.getFullYear(),
  'futureMonth': today.getMonth() + 2,
  'futureDate': today.getDate() - 1,
}
const future = new Date(dates['futureYear'], dates['futureMonth'], dates['futureDate']);
