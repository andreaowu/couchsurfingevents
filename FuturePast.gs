// Moves all past events from "Future" tab to "Past" tab
function moveToPast() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  const pastSheet = active.getSheetByName("Past");
  const todaySheet = active.getSheetByName("Today");
  const today = Utilities.formatDate(new Date(), "GMT", "MM/dd/yyyy");
  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();

  // delete all rows in "Today" sheet
  for (let rowCount = todaySheet.getLastRow(); rowCount > 1; rowCount--) {
    todaySheet.deleteRow(rowCount);
  }

  for (let i = 0; i < sheets.length - 1; i++) {
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

  past.sort(1);
}
