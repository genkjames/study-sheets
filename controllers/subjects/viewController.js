function showSubjects(req, res) {
  res.render('worksheets/subjects', {
    subjects: res.locals.subjects
  })
}

module.exports = {
  showSubjects
}
