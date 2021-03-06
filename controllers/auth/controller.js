//import node modules
const bcrypt = require('bcrypt');

const authdb = require('../../models/auth');

// registers user into database
function registerUser(req, res, next) {
  req.body.password_digest = bcrypt.hashSync(req.body.password, parseInt(process.env.SALT));
  authdb.registerUser(req.body)
  .then(data => {
    req.session.user = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// finds if user is in database
function findUser(req, res, next) {
  let user;
  authdb.findUser(req.body.username)
  .then(data => {
    user = data;
    return bcrypt.compareSync(req.body.password, data.password_digest);
  })
  .then(isValid => {
    if(!isValid) {
      throw {
        message: 'Wrong log in'
      }
    }
    req.session.user = user;
    next();
  })
  .catch(err => {
    next(err);
  })
}

// checks to see if user is logged in
function isLoggedIn(req, res, next) {
  if (req.session.user) {
    return next();
  }

  res.redirect('/login');
}

// Logs user out
function logout(req, res, next) {
  req.session.destroy(err => next(err));
}

// checks to see if user is logged in to set text of header button
function setStatus(req, res, next) {
  if (req.session.user) {
    res.locals.status = 'Log Out';
    res.locals.url = '/login/out';
  } else {
    res.locals.status = 'Log In';
    res.locals.url = '/login';
  }
  return next();
}

module.exports = {
  registerUser,
  findUser,
  logout,
  isLoggedIn,
  setStatus
}
