function seeUserWorksheets(req, res) {
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
    cards: res.locals.cards
  })
}

module.exports = {
  seeUserWorksheets,
  seeUserCard,
  redirectWorkspace,
  seeEdited
}
