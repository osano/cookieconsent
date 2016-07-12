var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyJS = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var deleteDirs = require('del');
var runSequence = require('run-sequence');

var buildFolder = './build';

gulp.task('cleanup:begin', function () {
  return deleteDirs(['./build']);
});

gulp.task('minify:js', function () {
  return _minify({
    in: './cookieconsent.js',
    out: 'cookieconsent.min.js',
    dest: buildFolder,
    minifyFunc: minifyJS
  });
});

gulp.task('minify:css', function () {
  return _minify({
    in: './styles/*.css',
    out: 'cookieconsent.min.css',
    dest: buildFolder,
    minifyFunc: minifyCSS
  });
});

gulp.task('build', function(callback) {
  return runSequence('cleanup:begin', 'minify:js', 'minify:css', callback);
});

function _minify(opts) {
  return gulp.src(opts.in)       // get files
    .pipe(opts.minifyFunc())     // minify them
    .pipe(concat(opts.out))      // combine them
    .pipe(gulp.dest(opts.dest)); // save under a new name
}
