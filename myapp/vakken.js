var mongoose = require('mongoose');

// create a user model
var Vakken = mongoose.model('Vakken', {
    oauthID: Number,
    php: Boolean,
    project: Boolean,
    webtech: Boolean,
    userid: Number
});

module.exports = Vakken;