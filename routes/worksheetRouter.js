const worksheetsRouter = require('express').Router();

const worksheetsC = require('../controllers/worksheets/controller');
const worksheetsVC = require('../controllers/worksheets/viewController');
const errorC = require('../controllers/errorController');

worksheetsRouter.route('/')
  .get(worksheetsC.getAllWorksheets, worksheetsVC.seeAllWorksheets, errorC.sendError)

worksheetsRouter.route('/:id')
  .post(worksheetsC.addToUserWorksheet, worksheetsVC.seeOneWorksheet, errorC.sendError)

module.exports = worksheetsRouter;
