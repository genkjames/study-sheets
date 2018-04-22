const worksheetsRouter = require('express').Router();

const worksheetsC = require('../controllers/worksheets/controller');
const worksheetsVC = require('../controllers/worksheets/viewController');
const workspaceC = require('../controllers/workspace/controller');
const workspaceVC = require('../controllers/workspace/viewController');
const ac = require('../controllers/auth/controller');
const errorC = require('../controllers/errorController');

worksheetsRouter.route('/')
  .get(ac.isLoggedIn, worksheetsC.getAllWorksheets, worksheetsVC.seeAllWorksheets, errorC.sendError)

worksheetsRouter.route('/:id')
  .post(worksheetsC.addToUserWorksheet, worksheetsVC.seeOneWorksheet, errorC.sendError)
  .delete(worksheetsC.deleteUserWorksheet, workspaceC.getUserWorksheets, workspaceVC.redirectWorkspace, errorC.sendError)

module.exports = worksheetsRouter;
