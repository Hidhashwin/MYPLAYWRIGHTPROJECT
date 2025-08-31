// utils/excelreader.js
const XLSX = require('xlsx');

function getTestData(filePath, sheetName) {
    try {
        const workbook = XLSX.readFile(filePath);
        const worksheet = workbook.Sheets[sheetName];
        if (!worksheet) throw new Error(`Sheet "${sheetName}" not found.`);
        return XLSX.utils.sheet_to_json(worksheet); // returns array of objects
    } catch (error) {
        console.error('Error reading Excel file:', error.message);
        return [];
    }
}

module.exports = { getTestData };
