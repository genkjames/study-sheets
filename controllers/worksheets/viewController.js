function seeAllWorksheets(req, res) {
  console.log('see work');
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
