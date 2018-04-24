const db = require('../config/connection');

function getAllWorksheets(id) {
  return db.any(`
    SELECT DISTINCT w.name, w.id, s.subject, usw.user_id
    FROM worksheets w
    JOIN subjects s
    ON w.subject_id = s.id
    FULL JOIN userworksheets usw
    ON w.id = usw.worksheet_id
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
  return db.one(`
    DELETE FROM userworksheets
    WHERE id = $1
    RETURNING *
  `, id);
}

// once a users worksheet is dropped from workspace, the answers for the created are deleted
function deleteUserOptions(options) {
  return db.any(`
    DELETE FROM options
    WHERE options.card_id
    IN (SELECT id FROM cards
      WHERE cards.user_id = $/user_id/
      AND worksheet_id = $/worksheet_id/
    )
    RETURNING *
  `, options);
}

// once a users worksheet is dropped from workspace, the cards they created are deleted
function deleteUserCards(card) {
  return db.any(`
    DELETE FROM cards
    WHERE user_id = $/user_id/
    AND worksheet_id = $/worksheet_id/
    RETURNING *
  `, card);
}

// get worksheets that have a certain subject
function getSubjectWorksheets(subject) {
  return db.any(`
    SELECT w.name, w.id, s.subject, usw.user_id
    FROM worksheets w
    JOIN subjects s
    ON w.subject_id = s.id
    FULL JOIN userworksheets usw
    ON w.id = usw.worksheet_id
    WHERE w.subject_id = $/subject_id/
  `, subject);
}

module.exports = {
  getAllWorksheets,
  addToUserWorksheet,
  deleteUserWorksheet,
  deleteUserOptions,
  deleteUserCards,
  getSubjectWorksheets
}
