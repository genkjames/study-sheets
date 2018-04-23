const wkdb = require('../../models/worksheets');

function getAllWorksheets(req, res, next) {
  console.log('hi');
  wkdb.getAllWorksheets(req.session.user.id)
  .then(data => {
    res.locals.worksheets = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

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

function deleteUserWorksheet(req, res, next) {
  console.log(req.params.id);
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

function getSubjectWorksheets(req, res, next) {
  const ids = {
    user_id: req.session.user.id,
    subject_id: req.params.id
  }
  console.log('subject worshts');
  wkdb.getSubjectWorksheets(ids)
  .then(data => {
    res.locals.worksheets = data;
    console.log('the data');
    console.log(data);
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
