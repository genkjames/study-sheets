const sdb = require('../../models/subjects');

function getSubjects(req, res, next) {
  sdb.getSubjects()
  .then(data => {
    res.locals.subjects = data;
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getSubjects
}
