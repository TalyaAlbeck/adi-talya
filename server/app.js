var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/file');
var loginRouter = require('./routes/login');
var signUpRoute = require('./routes/signup');
var folderRoute = require('./routes/folder');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/file', usersRouter);
app.use('/login', loginRouter);
app.use('/signup', signUpRoute);
app.use('/folder', folderRoute);

module.exports = app;
