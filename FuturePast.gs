/**
 * Moves all past events from "Future" tab to "Past" tab.
 * 
 * Copyright 2021, Andrea Wu, All rights reserved.
 */

function moveToPast() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  const pastSheet = active.getSheetByName("Past");
  const todaySheet = active.getSheetByName("Today");
  const todayDate = new Date();
  const today = Utilities.formatDate(todayDate, "GMT", "MM/dd/yyyy");
  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  // delete all rows in "Today" sheet
  for (let rowCount = todaySheet.getLastRow(); rowCount > 1; rowCount--) {
    todaySheet.deleteRow(rowCount);
  }

  // delete rows in past and all sheet
  let rowCount = 2;
  while (pastSheet.getRange("A2").getValues()[0][0].getDay() < todayDate.getDay()) {
    pastSheet.deleteRow(rowCount);
    allSheet.deleteRow(rowCount);
  }

  for (let i = 0; i < allCountries.length; i++) {
    const future = sheets[i];
    var index = 1;
    while (index < future.getDataRange().getValues().length - 1 && future.getDataRange().getValues()[index][0] != "") {
      var curr = Utilities.formatDate(new Date(future.getDataRange().getValues()[index][0]), "GMT", "MM/dd/yyyy");
      if (curr.valueOf() < today.valueOf()) {
        future.getRange(index + 1, 1, 1, future.getMaxColumns()).moveTo(pastSheet.getRange(pastSheet.getLastRow() + 1, 1, 1, pastSheet.getMaxColumns()));
        future.deleteRow(index + 1);
        continue;
      } else if (curr.valueOf() == today.valueOf()) {
        future.getRange(index + 1, 1, 1, future.getMaxColumns()).copyTo(todaySheet.getRange(todaySheet.getLastRow() + 1, 1, 1, todaySheet.getMaxColumns()));
        index++;
        continue;
      }
      break;
    }
  }

  pastSheet.sort(1);
}
