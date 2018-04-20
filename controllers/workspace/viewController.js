function seeUserWorksheets(req, res) {
  res.render('workspace', {
    worksheets: res.locals.worksheets
  });
}

module.exports = {
  seeUserWorksheets
}
