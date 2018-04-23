const subjectsRouter = require('express').Router();

const sc = require('../controllers/subjects/controller');
const svc = require('../controllers/subjects/viewController');
const ac = require('../controllers/auth/controller');
const ec = require('../controllers/errorController');

subjectsRouter.route('/')
  .get(ac.isLoggedIn, sc.getSubjects, svc.showSubjects, ec.sendError)

module.exports = subjectsRouter;
