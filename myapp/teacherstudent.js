var mongoose = require('mongoose');

// create a user model
var TeacherStudent = mongoose.model('TeacherStudent', {
    oauthID: Number,
    student: Boolean,
    teacher: Boolean,
    userid: Number
});

module.exports = TeacherStudent;
