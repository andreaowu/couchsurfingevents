// Moves all past events from each continent to "Past" tab
function moveToPast() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  const past = active.getSheetByName("Past");
  const today = Utilities.formatDate(new Date(), "GMT", "MM/dd/yyyy");

  const sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (let i = 0; i < sheets.length - 1; i++) {
    const future = sheets[i];
    var index = 1;
    while (index < future.getDataRange().getValues().length - 1 && future.getDataRange().getValues()[index][0] != "") {
      var curr = Utilities.formatDate(new Date(future.getDataRange().getValues()[index][0]), "GMT", "MM/dd/yyyy");
      if (curr.valueOf() < today.valueOf()) {
        future.getRange(index + 1, 1, 1, future.getMaxColumns()).moveTo(past.getRange(past.getLastRow() + 1, 1, 1, past.getMaxColumns()));
        future.deleteRow(index + 1);
        continue;
      }
      break;
    }
  }

  past.sort(1);
}
