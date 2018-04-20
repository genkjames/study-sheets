const db = require('../config/connection');

function getUserWorksheets() {
  return db.any(`
    SELECT * FROM userworksheets
    JOIN worksheets
    ON worksheets.id = userworksheets.worksheet_id
    JOIN subjects
    ON subjects.id = worksheets.subject_id
  `);
}

module.exports = {
  getUserWorksheets
}
