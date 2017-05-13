var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Demo or die' });
});

router.get('/login', function (req, res, next) {
   res.render('login');
});

router.get('/home', function (req, res, next) {
   res.render('home');
});

router.get('/profile', function (req, res, next) {
   res.render('profile');
});

router.get('/chooseGroups', function (req, res, next) {
    res.render('chooseGroups');
});

router.get('/adminView', function (req, res, next) {
    res.render('adminView');
});

router.get('/adminlogin', function(req, res, next) {
  res.render('adminlogin', { title: 'Demo or die | Admin Log In' });
});


module.exports = router;
