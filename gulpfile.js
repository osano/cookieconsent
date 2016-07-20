var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyJS = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var deleteDirs = require('del');
var runSequence = require('run-sequence');


var buildFolder = './build';
var jsBuildFiles = [
  './cookieconsent.js'
];
var cssBuildFiles = [
  // defined explicitly so they are combined in order
  './styles/base.css',
  './styles/layout.css',
  './styles/classes.css',
  './styles/animation.css',
  './styles/media.css',

  // all theme files
  './styles/themes/*.css',
];


gulp.task('cleanup:begin', function () {
  return deleteDirs(['./build']);
});

gulp.task('minify:js', function () {
  return _minify({
    in: jsBuildFiles,
    out: 'cookieconsent.min.js',
    dest: buildFolder,
    minifyFunc: minifyJS
  });
});

gulp.task('minify:css', function () {
  return _minify({
    in: cssBuildFiles,
    out: 'cookieconsent.min.css',
    dest: buildFolder,
    minifyFunc: minifyCSS
  });
});

gulp.task('build', function(callback) {
  return runSequence('cleanup:begin', 'minify:js', 'minify:css', callback);
});

gulp.task('watch', function() {
  gulp.watch(cssBuildFiles.concat(jsBuildFiles), ['build']);
});

function _minify(opts) {
  return gulp.src(opts.in)       // get files
    .pipe(opts.minifyFunc())     // minify them
    .pipe(concat(opts.out))      // combine them
    .pipe(gulp.dest(opts.dest)); // save under a new name
}
