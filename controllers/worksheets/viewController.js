function seeAllWorksheets(req, res) {
  res.render('worksheets', {
    worksheets: res.locals.worksheets
  });
}

function seeOneWorksheet(req, res) {
  res.redirect('/worksheets');
}

module.exports = {
  seeAllWorksheets,
  seeOneWorksheet
}
