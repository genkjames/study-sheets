function seeAllWorksheets(req, res) {
  res.render('worksheets', {
    worksheets: res.locals.worksheets
  });
}

function seeOneWorksheet(req, res) {
  console.log('here');
  res.redirect('/worksheets');
}

module.exports = {
  seeAllWorksheets,
  seeOneWorksheet
}
