function sendError(err, req, res, next) {
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

function authError(err, req, res, next) {
  res.render('auth/login')
}

module.exports = {
  sendError,
  authError
}
