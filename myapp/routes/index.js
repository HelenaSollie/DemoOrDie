var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Demo or Die' });
});
router.get('/choosegroups', function(req, res, next){
    res.render("chooseGroups");
});
router.get('/profile', function(req, res, next){
    res.render("profile");
});
router.get('/vote', function(req, res, next){
    res.render("vote");
});
router.get('/adminview', function(req, res, next){
    res.render("adminView");
});

module.exports = router;
