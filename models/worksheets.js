const db = require('../config/connection');

function getAllWorksheets(id) {
  return db.any(`
    SELECT w.name, w.id, s.subject
    FROM worksheets w
    JOIN subjects s
    ON w.subject_id = s.id
    LEFT JOIN userworksheets usw
    ON w.id = usw.worksheet_id
    WHERE usw.worksheet_id IS NULL
    OR usw.user_id != $1
  `, id);
}

function addToUserWorksheet(ids) {
  return db.one(`
    INSERT INTO userworksheets (user_id, worksheet_id)
    VALUES ($/user_id/, $/worksheet_id/)
    RETURNING *
  `, ids);
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
