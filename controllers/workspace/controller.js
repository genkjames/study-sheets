const workspaceDb = require('../../models/workspace');

function getUserWorksheets(req, res, next) {
  if(req.params.id === undefined) {
    req.params.id = 0;
  }
  workspaceDb.getUserWorksheets()
  .then(data => {
    res.locals.worksheets = data;
    res.locals.id = req.params.id;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getUserCards(req, res, next) {
  workspaceDb.getUserCards(res.locals.worksheets)
  .then(data => {
    res.locals.cards = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getUserWorksheets,
  getUserCards
}
