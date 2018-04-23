function seeAllWorksheets(req, res) {
  res.render('worksheets/index', {
    worksheets: res.locals.worksheets
  });
}

function seeOneWorksheet(req, res) {
  res.redirect('/worksheets/');
}

module.exports = {
  seeAllWorksheets,
  seeOneWorksheet
}
