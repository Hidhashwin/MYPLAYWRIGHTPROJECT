const ExcelJS = require('exceljs');

async function writeCustomerID(filePath, sheetName, rowIndex, customerID) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);

  const row = worksheet.getRow(rowIndex);
  row.getCell(6).value = customerID; // Column F = 6
  row.commit();

  await workbook.xlsx.writeFile(filePath);
}

module.exports = { writeCustomerID };
