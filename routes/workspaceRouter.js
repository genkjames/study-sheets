const workspaceRouter = require('express').Router();

const workSpaceC = require('../controllers/workspace/controller');
const workSpaceVC = require('../controllers/workspace/viewController');
const error = require('../controllers/errorController');

workspaceRouter.route('/')
  .get(workSpaceC.getUserWorksheets, workSpaceVC.seeUserWorksheets , error.sendError)

module.exports = workspaceRouter;
