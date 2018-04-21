function seeUserWorksheets(req, res) {
  res.render('workspace/index', {
    worksheets: res.locals.worksheets,
    cards: res.locals.cards
  });
}

function seeUserCard(req, res) {
  res.render('workspace', {
    worksheets: res.locals.worksheets,
    cards: res.locals.cards,
    id: res.locals.id
  })
}

function redirectWorkspace(req, res) {
  res.redirect('workspace');
}

module.exports = {
  seeUserWorksheets,
  seeUserCard,
  redirectWorkspace
}
