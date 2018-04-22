const db = require('../config/connection');

function registerUser(user) {
  return db.one(`
    INSERT INTO users (username, email, password_digest)
    VALUES ($/username/, $/email/, $/password_digest/)
    RETURNING *
  `, user);
}

function findUser(uname) {
  return db.one(`
    SELECT * FROM users
    WHERE username = $1
  `, uname);
}

module.exports = {
  registerUser,
  findUser
}
