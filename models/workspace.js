const db = require('../config/connection');

function getUserWorksheets() {
  return db.any(`
    SELECT userworksheets.id, subjects.subject, worksheets.name
    FROM userworksheets
    JOIN worksheets
    ON worksheets.id = userworksheets.worksheet_id
    JOIN subjects
    ON subjects.id = worksheets.subject_id
  `);
}

function getUserCards() {
  return db.any(`
    SELECT * FROM cards
    JOIN userworksheets
    ON cards.worksheet_id = userworksheets.worksheet_id
  `);
}

module.exports = {
  getUserWorksheets,
  getUserCards
}
