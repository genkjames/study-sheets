const db = require('../config/connection');

function getSubjects() {
  return db.any(`
    SELECT * FROM subjects
  `);
}

module.exports = {
  getSubjects
}
