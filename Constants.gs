const calendarId = $CALENDAR_ID;

const cookie = $COOKIE;

const headers = $HEADERS;

const rowItemsCount = 5; // number of items in the spreadsheet

// should use a class for this instead of an array with indices
const itemToIndexMapping = {
  'startDate': 0, 
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
const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
const calendar = CalendarApp.getCalendarById(calendarId);

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
