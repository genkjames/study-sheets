const workspaceDb = require('../../models/workspace');

function getUserWorksheets(req, res, next) {
  console.log('hello');
  workspaceDb.getUserWorksheets(req.session.user.id)
  .then(data => {
    res.locals.worksheets = data;
    res.locals.id = req.params.id;
    console.log(res.locals);
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getUserCards(req, res, next) {
  console.log('bye');
  console.log(req.session.user.id);
  workspaceDb.getUserCards(req.session.user.id)
  .then(data => {
    res.locals.cards = data;
    console.log(data);
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
  console.log('get options');
  workspaceDb.getOptions(req.params.id)
  .then(data => {
    console.log(data);
    res.locals.options = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}

function getEditedOptions(req, res, next) {
  workspaceDb.getEditedOptions(req.session.user.id)
  .then(data => {
    res.locals.options = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getDisplayedCard(req, res, next) {
  console.log('get displayed card');
  console.log(res.locals);
  workspaceDb.getDisplayedCard(req.params.id)
  .then(data => {
    console.log(data);
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

function getCreatedCards(req, res, next) {
  workspaceDb.getCreatedCards(req.session.user.id)
  .then(data => {
    res.locals.cards = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function createNewCard(req, res, next) {
  req.body.user_id = req.session.user.id;
  workspaceDb.createNewCard(req.body)
  .then(data => {
    res.locals.card = data;
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

function deleteOptions(req, res, next) {
  workspaceDb.deleteOptions(req.params.id)
  .then(data => {
    next();
  })
  .catch(err => {
    next(err);
  })
}

function deleteUserCard(req, res, next) {
  workspaceDb.deleteUserCard(req.params.id)
  .then(data => {
    next();
  })
  .catch(err => {
    next(err);
  })
}

function getUpdateOption(req, res, next) {
  workspaceDb.getUpdateOption(req.params.id)
  .then(data => {
    res.locals.option = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function updateCard(req, res, next) {
  req.body.id = req.params.id;
  console.log('update card');
  console.log(req.body);
  workspaceDb.updateCard(req.body)
  .then(data => {
    res.locals.card = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function updateOption(req, res, next) {
  req.body.card_id = req.params.id;
  console.log('update option');
  console.log(req.body);
  workspaceDb.updateOption(req.body)
  .then(data => {
    res.locals.option = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

function isByUser(req, res, next) {
  const id = {
    user_id: req.session.user.id,
    id: req.params.id
  }
  workspaceDb.isByUser(id)
  .then(data => {
    console.log(data);
    res.locals.card = data;
    console.log('inside');
    next();
  })
  .catch(err => {
    res.redirect('/workspace');
  })
}

module.exports = {
  getUserWorksheets,
  getUserCards,
  getOptions,
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
