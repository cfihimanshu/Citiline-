const SHEET_NAME = 'Contact Responses';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const expectedSecret = PropertiesService.getScriptProperties().getProperty('WEBHOOK_SECRET');

    if (!expectedSecret || data.secret !== expectedSecret) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Submitted At', 'First Name', 'Last Name', 'Email',
        'Phone', 'Company', 'Service Required', 'Message'
      ]);
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      safeCell(data.submittedAt), safeCell(data.firstName), safeCell(data.lastName),
      safeCell(data.email), safeCell(data.phone), safeCell(data.company),
      safeCell(data.service), safeCell(data.message)
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function safeCell(value) {
  const text = String(value || '');
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
