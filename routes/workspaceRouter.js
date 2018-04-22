const workspaceRouter = require('express').Router();

const workSpaceC = require('../controllers/workspace/controller');
const workSpaceVC = require('../controllers/workspace/viewController');
const error = require('../controllers/errorController');

workspaceRouter.route('/')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceC.getOptions, workSpaceC.getDisplayedCard, workSpaceVC.seeUserWorksheets, error.sendError)
  .post(workSpaceC.createNewCard, workSpaceC.createNewOptions, workSpaceVC.redirectWorkspace, error.sendError)

workspaceRouter.route('/edit')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceVC.seeEdited, error.sendError)

workspaceRouter.route('/new')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getAllTypes, workSpaceVC.newCardForm)

workspaceRouter.route('/:id')
  .get(workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceC.getOptions, workSpaceC.getDisplayedCard, workSpaceVC.seeUserCard, error.sendError)

module.exports = workspaceRouter;
