const db = require('../config/connection');

// function getUserWorksheets() {
//   return db.any(`
//     SELECT userworksheets.id, userworksheets.worksheet_id, subjects.subject, worksheets.name
//     FROM userworksheets
//     JOIN worksheets
//     ON worksheets.id = userworksheets.worksheet_id
//     JOIN subjects
//     ON subjects.id = worksheets.subject_id
//   `);
// }

function getUserWorksheets() {
  return db.any(`
    SELECT usw.id, usw.worksheet_id, s.subject, w.name
    FROM userworksheets usw
    JOIN worksheets w
    ON w.id = usw.worksheet_id
    JOIN subjects s
    ON s.id = w.subject_id
  `);
}

function getOptions(id) {
  return db.any(`
    SELECT * FROM options
    WHERE card_id = $1
  `, id);
}

function getUserCards() {
  return db.any(`
    SELECT c.id, c.user_id, c.question, c.worksheet_id, w.name
    FROM cards c
    JOIN userworksheets usw
    ON c.worksheet_id = usw.worksheet_id
    JOIN worksheets w
    ON c.worksheet_id = w.id
  `);
}

function getDisplayedCard(id) {
  return db.one(`
    SELECT DISTINCT c.id, c.user_id, c.question, c.worksheet_id, w.name, t.type
    FROM cards c
    JOIN worksheets w
    ON c.worksheet_id = w.id
    JOIN options o
    ON o.card_id = c.id
    JOIN types t
    ON t.id = o.type_id
    WHERE c.id = $1
  `, id);
}

module.exports = {
  getUserWorksheets,
  getOptions,
  getUserCards,
  getDisplayedCard
}
