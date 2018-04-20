const workspaceDb = require('../../models/workspace');

function getUserWorksheets(req, res, next) {
  workspaceDb.getUserWorksheets()
  .then(data => {
    res.locals.worksheets = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

module.exports = {
  getUserWorksheets
}
