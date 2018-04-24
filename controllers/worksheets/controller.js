// import worksheets model
const wkdb = require('../../models/worksheets');

function getAllWorksheets(req, res, next) {
  wkdb.getAllWorksheets(req.session.user.id)
  .then(data => {
    res.locals.worksheets = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// adds created Card to Worksheet
function addToUserWorksheet(req, res, next) {
  const ids = {
    user_id: req.session.user.id,
    worksheet_id: req.params.id
  }
  wkdb.addToUserWorksheet(ids)
  .then(data => {
    res.locals.worksheet = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// deletes worksheet from workspace
function deleteUserWorksheet(req, res, next) {
  wkdb.deleteUserWorksheet(req.params.id)
  .then(data => {
    res.locals.worksheet = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function deleteUserOptions(req, res, next) {
  const id = {
    worksheet_id: res.locals.worksheet.worksheet_id,
    user_id: req.session.user.id
  }
  wkdb.deleteUserOptions(id)
  .then(data => {
    res.locals.options = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function deleteUserCards(req, res, next) {
  const id = {
    worksheet_id: res.locals.worksheet.worksheet_id,
    user_id: req.session.user.id
  }
  wkdb.deleteUserCards(id)
  .then(data => {
    res.locals.cards = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// gets worksheet with specific subject
function getSubjectWorksheets(req, res, next) {
  const ids = {
    user_id: req.session.user.id,
    subject_id: req.params.id
  }
  wkdb.getSubjectWorksheets(ids)
  .then(data => {
    res.locals.worksheets = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getAllWorksheets,
  addToUserWorksheet,
  deleteUserWorksheet,
  deleteUserOptions,
  deleteUserCards,
  getSubjectWorksheets
}
