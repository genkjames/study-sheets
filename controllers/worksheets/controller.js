const worksheetsDb = require('../../models/worksheets');

function getAllWorksheets(req, res, next) {
  worksheetsDb.getAllWorksheets()
  .then(data => {
    res.locals.worksheets = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function addToUserWorksheet(req, res, next) {
  worksheetsDb.addToUserWorksheet(req.params.id)
  .then(data => {
    res.locals.worksheet = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function deleteUserWorksheet(req, res, next) {
  worksheetsDb.deleteUserWorksheet(req.params.id)
  .then(data => {
    res.locals.worksheet = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

module.exports = {
  getAllWorksheets,
  addToUserWorksheet,
  deleteUserWorksheet
}
