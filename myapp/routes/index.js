var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/home', function (req, res, next) {
   res.render('home');
});

router.get('/chooseGroups', function (req, res, next) {
    res.render('chooseGroups');
});

router.get('/adminView', function (req, res, next) {
    res.render('adminView');
});


module.exports = router;
