import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';
import index from './routes/index';
import auth from './routes/auth';
import review from './routes/review';
import mongoose from 'mongoose';
import multer from 'multer';
import cloudinary from 'cloudinary';

import session from 'express-session';
import passport from 'passport';

const app = express();

/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');

mongoose.connect('mongodb://admin:admin@ds151242.mlab.com:51242/food-awesome');
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'secret-name'
  // store: new MongoStore({
  //   url: 'mongodb://admin:admin@ds151242.mlab.com:51242/food-awesome',
  //   autoReconnect: true,
  //   clear_interval: 3600
  // })
}));
app.use(passport.initialize());
app.use(passport.session());

cloudinary.config({
  cloud_name: 'dxmdjcspm',
  api_key: '326963819454321',
  api_secret: '7A0-lZzv7kBuQnpBrs5vlnKAk7s'
});


//const debug = Debug('backend:app');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', index);
app.use('/review',review);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  console.log(err);
  //debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
