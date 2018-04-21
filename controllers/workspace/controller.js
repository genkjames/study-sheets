const workspaceDb = require('../../models/workspace');

function getUserWorksheets(req, res, next) {
  if(req.params.id === undefined) {
    req.params.id = 1;
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

function getOptions(req, res, next) {
  workspaceDb.getOptions(req.params.id)
  .then(data => {
    res.locals.options = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getDisplayedCard(req, res, next) {
  workspaceDb.getDisplayedCard(req.params.id)
  .then(data => {
    res.locals.card = data;
    next();
  })
  .catch(err => {
    next(err);
  });

}

module.exports = {
  getUserWorksheets,
  getUserCards,
  getOptions,
  getDisplayedCard
}
