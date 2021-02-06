const calendarId = $CALENDAR_ID;

const cookie = $COOKIE;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua+and+Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia+and+Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina+Faso",
  "Burundi",
  "Cabo+Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central+African+Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa+Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech+Republic",
  "Côte+d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican+Republic",
  "DR+Congo",
  "Ecuador",
  "Egypt",
  "El+Salvador",
  "Equatorial+Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Holy+See",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israe",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall+Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New+Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North+Korea",
  "North+Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua+New+Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint+Kitts+and+Nevis",
  "Saint+Lucia",
  "Saint+Vincent+and+Grenadines",
  "Samoa",
  "San+Marino",
  "Sao+Tome+and+Principe",
  "Saudi+Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra+Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon+Islands",
  "Somalia",
  "South+Africa",
  "South+Korea",
  "South+Sudan",
  "Spain",
  "Sri+Lanka",
  "State+of+Palestine",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad+and+Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United+Arab+Emirates",
  "United+Kingdom",
  "United+States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const northAmerica = [
  "Antigua+and+Barbuda",
  "Bahamas",
  "Barbados",
  "Belize",
  "Canada",
  "Costa+Rica",
  "Cuba",
  "Dominica",
  "Dominican+Republic",
  "El+Salvador",
  "Grenada",
  "Guatemala",
  "Haiti",
  "Honduras",
  "Jamaica",
  "Mexico",
  "Nicaragua",
  "Panama",
  "Saint+Kitts+and+Nevis",
  "Saint+Lucia",
  "Saint+Vincent+and+Grenadines",
  "Trinidad+and+Tobago",
  "United+States",
];

const southAmerica = [
  "Argentina",
  "Bolivia",  
  "Brazil",
  "Chile",
  "Colombia",
  "Ecuador",
  "Guyana",
  "Paraguay",
  "Peru",
  "Suriname", 
  "Uruguay",  
  "Venezuela"
];

const europe = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia+and+Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Israel",
  "Italy",
  "Kazakhstan",
  "Kyrgyzstan",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Monaco",
  "Montenegro",
  "Netherlands",
  "North+Macedonia",
  "Norway",
  "Poland",
  "Portugal",
  "Moldova",
  "Romania",
  "Russia",
  "San+Marino",
  "Serbia",
  "Slovakia",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Tajikistan",
  "Turkey",
  "Turkmenistan",
  "United+Kingdom",
  "Ukraine",
  "Uzbekistan"
];

const africa = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina+Faso",
  "Burundi",
  "Cameroon",
  "Cabo+Verde",
  "Central+African+Republic",
  "Chad",
  "Comoros",
  "Côte+d'Ivoire",
  "Djibouti",
  "Egypt",
  "Eritrea",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Equatorial+Guinea",
  "Guinea",
  "Guinea-Bissa",
  "Kenya",
  "Sierra+Leone",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nigeria",
  "Congo",
  "Rwanda",
  "Réunion",
  "South+Africa",
  "Senegal",
  "Somalia",
  "Sudan",
  "Swaziland",
  "Tanzania",
  "Togo",
  "Sao+Tome+and+Principe",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

const asia = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North+Korea",
  "Oman",
  "Pakistan",
  "Philippines",
  "Qatar",
  "Saudi+Arabia",
  "Singapore",
  "South+Korea",
  "Sri+Lanka",
  "State+of+Palestine",
  "Syria",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Turkey",
  "Turkmenistan",
  "United+Arab+Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
];

const oceania = [
  "Australia",
  "Fiji",
  "Kiribati",
  "Marshall+Islands",
  "Micronesia",
  "Nauru",
  "New+Zealand",
  "Palau",
  "Papua+New+Guinea",
  "Samoa",
  "Solomon+Islands",
  "Tonga",
  "Tuvalu",
  "Vanuatu",
];

const today = new Date();
const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
const allCountries = [northAmerica, europe, southAmerica, oceania, africa, asia];

const calendar = CalendarApp.getCalendarById(calendarId);
const dates = {
  'todayYear': today.getFullYear(),
  'todayMonth': today.getMonth() + 1,
  'todayDate': today.getDate(),
  'futureYear': today.getFullYear(),
  'futureMonth': today.getMonth() + 2,
  'futureDate': today.getDate() - 1,
}
const future = new Date(dates['futureYear'], dates['futureMonth'], dates['futureDate']);
let calendarDeleted = false;

const rowItemsCount = 5;
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

let added = new Set();
let addedCal = new Set();

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
  const headers = {
    "headers": {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "none",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
      "cookie": cookie
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors"
  };

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
    if (parseInt(match[1]) >= 5 && !added.has(same) && !addedCal.has(same) && eventName.search('mbassador') < 0) {
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
      addToCalendar(row, same); // don't know why the earlier !addedCal.has(same) doesn't work so adding another check
      added.add(same);
      addedCal.add(same);
    }
    return newResponse;
  } catch (err) {
    return response;
  }
}

function addToSheet(row, sheet) {
  const newRow = sheet.getLastRow() + 1;
  for (let i = 1; i < rowItemsCount + 1; i++) {
    sheet.getRange(newRow, i).setValue(row[i - 1]);
  }
}

function addToCalendar(row, same) {
  if (!addedCal.has(same)) {
    const times = parseTime(row[itemToIndexMapping['eventId']], row[itemToIndexMapping['startDate']], row[itemToIndexMapping['endDate']],row[itemToIndexMapping['startYear']], row[itemToIndexMapping['endYear']]);
    calendar.createEvent(row[itemToIndexMapping['eventName']], times[0], times[1], {location: row[itemToIndexMapping['location']], description: row[itemToIndexMapping['url']]});
  }
}

function getAllEvents() {
  for (let i = 0; i < allCountries.length; i++) {
    added = new Set();
    addedCal = new Set();
    const sheet = sheets[i];

    // delete all rows just in case events got updated
    for (let rowCount = sheet.getLastRow(); rowCount > (i == 0 ? 2 : 1); rowCount--) {
      sheet.deleteRow(rowCount);
    }

    for (let j = 0; j < allCountries[i].length; j++) {
      let count = 1;
      let page = 2;
      const country = allCountries[i][j];
      while (count < page) {
        let url = `https://www.couchsurfing.com/events/search/${count}?search_query=${country}&start_date=${dates['todayYear']}-${dates['todayMonth']}-${dates['todayDate']}&end_date=${dates['futureYear']}-${dates['futureMonth']}-${dates['futureDate']}`;
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

        while (true) {
          (async () => {
            sleep(60000);
          })();
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
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
