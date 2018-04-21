const db = require('../config/connection');

function getAllWorksheets() {
  return db.any(`
    SELECT worksheets.name, worksheets.id, subjects.subject
    FROM worksheets
    JOIN subjects
    ON worksheets.subject_id = subjects.id
    LEFT JOIN userworksheets
    ON worksheets.id = userworksheets.worksheet_id
    WHERE userworksheets.worksheet_id IS NULL
  `);
}

function addToUserWorksheet(id) {
  return db.one(`
    INSERT INTO userworksheets (worksheet_id)
    VALUES ($1)
    RETURNING *
  `, id);
}

function deleteUserWorksheet(id) {
  console.log(id);
  return db.one(`
    DELETE FROM userworksheets
    WHERE id = $1
    RETURNING *
  `, id);
}

module.exports = {
  getAllWorksheets,
  addToUserWorksheet,
  deleteUserWorksheet
}