function showSubjects(req, res) {
  console.log(res.locals);
  res.render('worksheets/subjects', {
    subjects: res.locals.subjects
  })
}

module.exports = {
  showSubjects
}
