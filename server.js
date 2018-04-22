 require('dotenv').config();

const path = require('path');

const express = require('express');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const session = require('express-session');

const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter');
const worksheetsRouter = require('./routes/worksheetRouter');
const workspaceRouter = require('./routes/workspaceRouter');
const ac = require('./controllers/auth/controller');

const port = process.env.port || 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('server_secret', process.env.SERVER_SECRET);
app.use(session({
  secret: app.get('server_secret'),
  resave: false,
  saveUninitialized: false
}));

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/worksheets', worksheetsRouter);
app.use('/workspace', workspaceRouter);

app.get('/tutorial', (req, res) => {
  res.render('tutorial');
});

app.get('/subjects', ac.isLoggedIn, (req, res) => {
  res.render('subjects');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
