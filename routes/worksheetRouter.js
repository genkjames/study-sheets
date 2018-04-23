const worksheetsRouter = require('express').Router();

const wkc = require('../controllers/worksheets/controller');
const wkvc = require('../controllers/worksheets/viewController');
const wc = require('../controllers/workspace/controller');
const wvc = require('../controllers/workspace/viewController');
const ac = require('../controllers/auth/controller');
const ec = require('../controllers/errorController');

worksheetsRouter.route('/')
  .get(ac.isLoggedIn, wkc.getAllWorksheets, wkvc.seeAllWorksheets, ec.sendError)

worksheetsRouter.route('/type/:id')
  .get(ac.isLoggedIn, wkc.getSubjectWorksheets, wkvc.seeAllWorksheets, ec.sendError)

worksheetsRouter.route('/:id')
  .post(wkc.addToUserWorksheet, wkvc.seeOneWorksheet, ec.sendError)
  .delete(wkc.deleteUserWorksheet, wkc.deleteUserOptions, wkc.deleteUserCards, wc.getUserWorksheets, wvc.redirectWorkspace, ec.sendError)

module.exports = worksheetsRouter;
