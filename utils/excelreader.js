const xlsx = require('xlsx');

function getTestData(filePath, sheetName) {
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  const jsonData = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  const headers = jsonData[0];
  const dataRows = jsonData.slice(1);

  return dataRows.map((row, index) => {
    const rowData = {};
    headers.forEach((header, i) => {
      rowData[header] = row[i];
    });
    rowData._rowIndex = index + 2; // +2 because Excel rows start at 1 and row 1 is header
    return rowData;
  });
}

module.exports = { getTestData };
