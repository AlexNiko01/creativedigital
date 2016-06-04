var gulp = require('gulp'),
    scss = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    browser = require('browser-sync'),
    prefix = require('gulp-autoprefixer');

function swallowError(error) {
    console.log(error.toString());
}
gulp.task('styles', function () {
    gulp.src('css/*.scss')
        .pipe(scss({style: 'expanded',}))
        .on('error', swallowError)
        .pipe(prefix('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssmin())
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['styles'], function () {
    gulp.watch('css/**/*.scss', ['styles']);
});

