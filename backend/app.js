import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
// import favicon from 'serve-favicon';
import path from 'path';
import lessMiddleware from 'less-middleware';

import mongoose from 'mongoose';
import multer from 'multer';
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import fs from 'fs';


import session from 'express-session';
import passport from 'passport';

import index from './routes/index';
import auth from './routes/auth';
import review from './routes/review';

dotenv.load( { path: '.env' })
const app = express();
app.set('port', process.env.PORT || 3001)
const server = require('http').Server(app);
/**
 * API keys and Passport configuration.
 */
const passportConfig = require('./config/passport');



cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET
});


const debug = Debug('backend:app');

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

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGOLAB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
const MongoStore = require('connect-mongo')(session);
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGOLAB_URI,
    autoReconnect: true,
    clear_interval: 3600
  })
}));
app.use(passport.initialize());
app.use(passport.session());

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
//
// const key = fs.readFileSync('./food-awesome-key.pem')
// const cert = fs.readFileSync('./food-awesome-cert.pem')
//
// const option = {
// 	key: key,
// 	cert: cert
// }
// const app = express();

server.listen(app.get('port'),() => {
console.log('App is running at http://localhost:' + app.get('port'));
});


export default app;
