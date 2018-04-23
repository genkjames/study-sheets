function seeUserWorksheets(req, res) {
  console.log('see user worksheets');
  res.render('workspace/index', {
    worksheets: res.locals.worksheets,
    cards: res.locals.cards,
    options: res.locals.options,
    displayedCard: res.locals.card
  });
}

function seeUserCard(req, res) {
  if(res.locals.cards.map(x => x.id).includes(parseInt(req.params.id))) {
    res.render('workspace/show', {
      worksheets: res.locals.worksheets,
      cards: res.locals.cards,
      id: res.locals.id,
      options: res.locals.options,
      displayedCard: res.locals.card
    })
  }
  else {
    res.redirect('/workspace');
  }
}

function redirectWorkspace(req, res) {
  res.redirect('/workspace/edit');
}

function seeEdited(req, res) {
  res.render('workspace/edit', {
    worksheets: res.locals.worksheets,
    cards: res.locals.cards,
    options: res.locals.options
  })
}

function newCardForm(req, res) {
  res.render('workspace/new', {
    worksheets: res.locals.worksheets,
    types: res.locals.types
  });
}

function getUpdateForm(req, res) {
  res.render('workspace/update', {
    id: req.params.id,
    card: res.locals.card,
    option: res.locals.option
  });
}

module.exports = {
  seeUserWorksheets,
  seeUserCard,
  redirectWorkspace,
  seeEdited,
  newCardForm,
  getUpdateForm
}
