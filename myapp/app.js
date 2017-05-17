var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var fbAuth = require('./authentication.js');

var User = require('./user.js');
var Vakken = require('./vakken.js');
var teacherstudent = require('./teacherstudent.js');

var mongoose = require('mongoose');
var config = require('./oauth.js');

var index = require('./routes/index');
mongoose.connect('mongodb://127.0.0.1/demoordie');


passport.serializeUser(function(user, cb) {
    cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());


// Define routes.
app.get('/vote', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
    res.render('vote', { user: req.user });
});

app.get('/adminView', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
    res.render('adminview', { user: req.user });
});

app.get('/adminConsole', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
    res.render('adminview', { user: req.user });
});


app.get('/', function(req, res) {
    res.render('home', { user: req.user });
});

app.get('/login', function(req, res){
    res.render('login', { title: 'Demo or die' });
});

app.get('/login/facebook', passport.authenticate('facebook'));

app.get('/login/facebook/return', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('/');
});

app.get('/profile', require('connect-ensure-login').ensureLoggedIn(), function(req, res){
    res.render('profile', { user: req.user });
});
app.post('/chooseGroups', function (req, res) {
    vakken = new Vakken({
        php: req.body.php,
        webtech: req.body.webtech,
        project: req.body.project,
        userid: req.user.oauthID //hier moet profile id komen
    });
    vakken.save(function (err, doc) {
        if (err) res.json(err);
        else    res.redirect('/profile');
    });
});


/*app.post('/home', function(req, res) {

    teacherstudent = new TeacherStudent({
        student: req.body.student,
        teacher: req.body.teacher,
        userid: req.user.oauthID
    });

    teacherstudent.save(function (err, doc) {
        if (err) res.json(err);
        else    res.redirect('/profile');
    });

});*/

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;