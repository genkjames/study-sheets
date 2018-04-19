const path = require('path');

const express = require('express');
const logger = require('morgan');

const port = process.env.port || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/tutorial', (req, res) => {
  res.render('tutorial');
});

app.post('/tutorial', (req, res) => {
  res.render('tutorial');
});

app.get('/workspace', (req, res) => {
  res.render('workspace');
});

app.post('/workspace', (req, res) => {
  res.render('workspace');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
