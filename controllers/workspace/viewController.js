function seeUserWorksheets(req, res) {
  res.render('workspace/index', {
    worksheets: res.locals.worksheets,
    cards: res.locals.cards
  });
}

function seeUserCard(req, res) {
  res.render('workspace/show', {
    worksheets: res.locals.worksheets,
    cards: res.locals.cards,
    id: res.locals.id
  })
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
