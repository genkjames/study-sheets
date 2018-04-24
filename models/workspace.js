const db = require('../config/connection');

function getUserWorksheets(id) {
  return db.any(`
    SELECT usw.id, usw.worksheet_id, s.subject, w.name
    FROM userworksheets usw
    JOIN worksheets w
    ON w.id = usw.worksheet_id
    JOIN subjects s
    ON s.id = w.subject_id
    JOIN users u
    ON u.id = usw.user_id
    WHERE u.id = $1
  `, id);
}

function getOptions(id) {
  return db.any(`
    SELECT * FROM options
    WHERE card_id = $1
  `, id);
}

// get option that is true for a card you can update
function getEditedOptions(id) {
  return db.any(`
    SELECT o.card_id, o.type_id, o.option, o.istrue, t.type
    FROM options o
    JOIN types t
    ON o.type_id = t.id
    JOIN cards c
    ON c.id = o.card_id
    WHERE c.user_id = $1
    AND o.istrue = true
  `, id);
}

function getUserCards(id) {
  return db.any(`
    SELECT DISTINCT c.id, c.user_id, c.question, c.worksheet_id, w.name, t.type
    FROM cards c
    JOIN userworksheets usw
    ON c.worksheet_id = usw.worksheet_id
    JOIN worksheets w
    ON c.worksheet_id = w.id
    JOIN options o
    ON o.card_id = c.id
    JOIN types t
    ON t.id = o.type_id
    WHERE usw.user_id = $1
  `, id);
}

function getCreatedCards(id) {
  return db.any(`
    SELECT c.id, c.user_id, c.question, c.worksheet_id, w.name
    FROM cards c
    JOIN worksheets w
    ON c.worksheet_id = w.id
    WHERE user_id = $1
  `, id);
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

function getAllTypes() {
  return db.any(`
    SELECT * FROM types
  `);
}

function createNewCard(card) {
  return db.one(`
    INSERT INTO cards (user_id, question, worksheet_id)
    VALUES ($/user_id/, $/question/, $/worksheet_id/)
    RETURNING *
  `, card);
}

function createNewOptions(option) {
  return db.one(`
    INSERT INTO options (card_id, type_id, option, istrue)
    VALUES ($/card_id/, $/type_id/, $/option/, $/istrue/)
    RETURNING *
  `, option);
}

function deleteOptions(id) {
  return db.any(`
    DELETE FROM options
    WHERE card_id = $1
    RETURNING *
  `, id);
}

function deleteUserCard(id) {
  return db.one(`
    DELETE FROM cards
    WHERE id = $1
    RETURNING *
  `, id);
}

function getUpdateOption(id) {
  return db.one(`
    SELECT * FROM options
    WHERE card_id = $1
    AND istrue = true
  `, id);
}

function updateCard(question) {
  return db.one(`
    UPDATE cards
    SET question = $/question/
    WHERE id = $/id/
    RETURNING *
  `, question);
}

function updateOption(option) {
  return db.one(`
    UPDATE options
    SET option = $/option/
    WHERE card_id = $/card_id/
    AND istrue = true
    RETURNING *
  `, option);
}

// checks to see if a card was created by that user
function isByUser(id) {
  return db.one(`
    SELECT * FROM cards
    WHERE user_id = $/user_id/
    AND id = $/id/
  `, id);
}

module.exports = {
  getUserWorksheets,
  getOptions,
  getUserCards,
  getEditedOptions,
  getDisplayedCard,
  getAllTypes,
  getCreatedCards,
  createNewCard,
  createNewOptions,
  deleteOptions,
  deleteUserCard,
  getUpdateOption,
  updateCard,
  updateOption,
  isByUser
}
