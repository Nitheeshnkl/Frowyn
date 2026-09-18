/**
 * =============================================================================
 * FORWYN ENTERPRISES — GOOGLE APPS SCRIPT WEB APP FOR INQUIRY SUBMISSIONS
 * =============================================================================
 *
 * HOW TO DEPLOY:
 * 1. Open Google Sheets (https://sheets.new) or open an existing spreadsheet.
 * 2. Rename the active sheet to "Inquiries" (or keep default Sheet1).
 * 3. Add header row in Row 1:
 *    | Timestamp | Name | Email | Phone | Company | Service | Budget | Message |
 * 4. Click "Extensions" > "Apps Script" in the top menu bar of Google Sheets.
 * 5. Paste the contents of this Code.gs file into the Apps Script editor.
 * 6. Click "Deploy" > "New deployment" (top right button).
 * 7. Click the gear icon next to "Select type" and select "Web app".
 * 8. Set Configuration:
 *    - Description: "ForWyn Inquiry Endpoint"
 *    - Execute as: "Me" (your Google account)
 *    - Who has access: "Anyone"  <-- CRITICAL: Allows website visitors to submit
 * 9. Click "Deploy", grant permissions when prompted.
 * 10. Copy the generated "Web app URL" (starts with https://script.google.com/macros/s/...).
 * 11. Open your project's js/script.js file and update:
 *     const GOOGLE_SHEETS_ENDPOINT = "PASTE_YOUR_WEB_APP_URL_HERE";
 * =============================================================================
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName("Inquiries") || doc.getSheets()[0];

    // Automatically append header row if sheet is completely empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Company",
        "Service",
        "Budget",
        "Message"
      ]);
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Generate formatted ISO timestamp
    var timestamp = new Date().toLocaleString("en-US", { timeZoneName: "short" });

    var name = data.name || data.Name || "Anonymous";
    var email = data.email || data.Email || "N/A";
    var phone = data.phone || data.Phone || "N/A";
    var company = data.company || data.Company || "N/A";
    var service = data.service || data.projectType || data.Service || "N/A";
    var budget = data.budget || data.Budget || "N/A";
    var message = data.message || data.description || data.Message || "N/A";

    // Append new row to Google Sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      company,
      service,
      budget,
      message
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Inquiry stored successfully" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "active", service: "ForWyn Enterprises Inquiry API" }))
    .setMimeType(ContentService.MimeType.JSON);
}
