function seeAllWorksheets(req, res) {
  res.render('worksheets/index', {
    worksheets: res.locals.worksheets,
    uid: req.session.user.id
  });
}

function seeOneWorksheet(req, res) {
  res.redirect('/worksheets/');
}

module.exports = {
  seeAllWorksheets,
  seeOneWorksheet
}
