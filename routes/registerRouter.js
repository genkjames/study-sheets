const registerRouter = require('express').Router();

const rc = require('../controllers/auth/controller');
const rvc = require('../controllers/auth/viewController');
const ec = require('../controllers/errorController');

registerRouter.route('/')
  .get(rvc.showRegisterForm)
  .post(rc.registerUser, rvc.redirectWorksheets, ec.authError)

module.exports = registerRouter;
