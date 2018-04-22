const workspaceDb = require('../../models/workspace');

function getUserWorksheets(req, res, next) {
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
  if (req.params.id === undefined) {
    if (res.locals.cards[0]) {
      req.params.id = res.locals.cards[0].id;
    } else {
      req.params.id = 1;
    }
  }
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

function getAllTypes(req, res, next) {
  workspaceDb.getAllTypes()
  .then(data => {
    res.locals.types = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function createNewCard(req, res, next) {
  console.log(req.body);
  workspaceDb.createNewCard(req.body)
  .then(data => {
    console.log(data);
    res.locals.card = data;
    console.log(req.body);
    next();
  })
  .catch(err => {
    next(err);
  })
}

function createNewOptions(req, res, next) {
  req.body.card_id = res.locals.card.id;
  function cno(body) {
     workspaceDb.createNewOptions(body)
    .then(data => {
      res.locals.options = data;
      next();
    })
    .catch(err => {
      next(err);
    })
  }

  const simplify = req.body.options.reduce((acc, current) => acc + current);

  if(simplify !== '') {
    for(let i = 0; i < req.body.options.length; i++) {
        req.body.option = req.body.options[i];
      if(parseInt(req.body.istrue_id) === i) {
        req.body.istrue = true;
      } else {
        req.body.istrue = false;
      }
      req.body[i] = {
        card_id: req.body.card_id,
        type_id: req.body.type_id,
        option: req.body.option,
        istrue: req.body.istrue
      };
    }
    for(let j = 0; j < req.body.options.length; j++) {
      cno(req.body[j]);
    }
  } else if (req.body.option != "") {
    req.body.istrue = true;
    cno(req.body);
  } else {
    req.body.option = req.body.option1;
    req.body.istrue = true;
    cno(req.body);
  }
}

module.exports = {
  getUserWorksheets,
  getUserCards,
  getOptions,
  getDisplayedCard,
  getAllTypes,
  createNewCard,
  createNewOptions
}
