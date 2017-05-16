var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/chooseGroups', require('connect-ensure-login').ensureLoggedIn(), function (req, res, next) {
    res.render('chooseGroups',{ user: req.user });
});

router.get('/adminView', require('connect-ensure-login').ensureLoggedIn(), function (req, res, next) {
    router.post('/adminProfile',function(req,res){
        var test = req.body.check;
        if (test != "soren"){
            console.log("yes");
            }else{
            console.log("no");
        }

    });
    res.render('adminView',{ user: req.user });

});



module.exports = router;
