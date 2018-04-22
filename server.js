const path = require('path');

const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const worksheetsRouter = require('./routes/worksheetRouter');
const workspaceRouter = require('./routes/workspaceRouter');

const port = process.env.port || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/tutorial', (req, res) => {
  res.render('tutorial');
});

app.get('/subjects', (req, res) => {
  res.render('subjects');
});

app.use('/worksheets', worksheetsRouter);
app.use('/workspace', workspaceRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
