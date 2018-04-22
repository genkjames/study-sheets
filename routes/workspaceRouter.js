const workspaceRouter = require('express').Router();

const workSpaceC = require('../controllers/workspace/controller');
const workSpaceVC = require('../controllers/workspace/viewController');
const ac = require('../controllers/auth/controller');
const error = require('../controllers/errorController');

workspaceRouter.route('/')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceC.getOptions, workSpaceC.getDisplayedCard, workSpaceVC.seeUserWorksheets, error.sendError)
  .post(workSpaceC.createNewCard, workSpaceC.createNewOptions, workSpaceVC.redirectWorkspace, error.sendError)

workspaceRouter.route('/edit')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getCreatedCards, workSpaceC.getEditedOptions, workSpaceVC.seeEdited, error.sendError)

workspaceRouter.route('/new')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getAllTypes, workSpaceVC.newCardForm, error.sendError)

workspaceRouter.route('/update/:id')
  .get(ac.isLoggedIn, workSpaceC.isByUser, workSpaceC.getDisplayedCard,workSpaceC.getUpdateOption, workSpaceVC.getUpdateForm, error.sendError)

workspaceRouter.route('/:id')
  .get(ac.isLoggedIn, workSpaceC.getUserWorksheets, workSpaceC.getUserCards, workSpaceC.getOptions, workSpaceC.getDisplayedCard, workSpaceVC.seeUserCard, error.sendError)
  .put(workSpaceC.updateCard, workSpaceC.updateOption, workSpaceVC.redirectWorkspace, error.sendError)
  .delete(workSpaceC.isByUser, workSpaceC.deleteOptions, workSpaceC.deleteUserCard, workSpaceVC.redirectWorkspace, error.sendError)

module.exports = workspaceRouter;
