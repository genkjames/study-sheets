const worksheetsDb = require('../../models/worksheets');

function getAllWorksheets(req, res, next) {
  worksheetsDb.getAllWorksheets(req.session.user.id)
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
  worksheetsDb.addToUserWorksheet(ids)
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
