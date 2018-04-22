const workspaceRouter = require('express').Router();

const workSpaceC = require('../controllers/workspace/controller');
const workSpaceVC = require('../controllers/workspace/viewController');
const ac = require('../controllers/auth/controller');
const error = require('../controllers/errorController');

workspaceRouter.route('/')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceC.getOptions, workSpaceC.getDisplayedCard, workSpaceVC.seeUserWorksheets, error.sendError)
  .post(workSpaceC.createNewCard, workSpaceC.createNewOptions, workSpaceVC.redirectWorkspace, error.sendError)

workspaceRouter.route('/edit')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceVC.seeEdited, error.sendError)

workspaceRouter.route('/new')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getAllTypes, workSpaceVC.newCardForm)

workspaceRouter.route('/:id')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceC.getOptions, workSpaceC.getDisplayedCard, workSpaceVC.seeUserCard, error.sendError)

module.exports = workspaceRouter;
