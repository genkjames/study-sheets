const sdb = require('../../models/subjects');

function getSubjects(req, res, next) {
  console.log('getting subjects')
  sdb.getSubjects()
  .then(data => {
    res.locals.subjects = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  })
}

module.exports = {
  getSubjects
}
