function showRegisterForm(req, res) {
  res.render('auth/register');
}

function showLoginForm(req, res) {
  res.render('auth/login');
}

function redirectWorksheets(req, res) {
  res.redirect('/worksheets');
}

function redirectHome(req, res) {
  res.redirect('/');
}

module.exports = {
  showRegisterForm,
  showLoginForm,
  redirectWorksheets,
  redirectHome
}
