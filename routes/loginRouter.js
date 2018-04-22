const loginRouter = require('express').Router();

const ac = require('../controllers/auth/controller');
const avc = require('../controllers/auth/viewController');
const ec = require('../controllers/errorController');

loginRouter.route('/')
  .get(avc.showLoginForm)
  .post(ac.findUser, avc.redirectWorksheets, ec.authError)

loginRouter.route('/out')
  .get(ac.logout, avc.redirectHome, ec.sendError)

module.exports = loginRouter;
