var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var cleanCSS = require('gulp-clean-css');


gulp.task('sass', function () {
    return gulp.src('public/stylesheets/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function() {
    return gulp.src('public/stylesheets/style.sass/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('start', function () {
    nodemon({
        script: 'app.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});



