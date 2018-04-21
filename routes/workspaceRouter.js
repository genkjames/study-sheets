const workspaceRouter = require('express').Router();

const workSpaceC = require('../controllers/workspace/controller');
const workSpaceVC = require('../controllers/workspace/viewController');
const error = require('../controllers/errorController');

workspaceRouter.route('/')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceVC.seeUserWorksheets, error.sendError)

workspaceRouter.route('/edit')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceVC.seeEdited, error.sendError)

workspaceRouter.route('/:id')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceVC.seeUserCard, error.sendError)

module.exports = workspaceRouter;
