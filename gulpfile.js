var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyJS = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var deleteDirs = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');


var buildFolder = './build';
var jsBuildFiles = [
  './src/cookieconsent.js'
];
var cssBuildFiles = [
  // defined explicitly so they are combined in order
  './src/styles/animation.css',
  './src/styles/base.css',
  './src/styles/layout.css',
  './src/styles/media.css',

  // all theme files
  './src/styles/themes/*.css',
];


gulp.task('cleanup:begin', function () {
  return deleteDirs(['./build']);
});

gulp.task('minify:js', function () {
  return gulp.src(jsBuildFiles)            // get files
    .pipe(minifyJS())                      // minify them
    .pipe(concat('cookieconsent.min.js'))  // combine them
    .pipe(gulp.dest(buildFolder));          // save under a new name
});

gulp.task('minify:css', function () {
  return gulp.src(cssBuildFiles)            // get files
    .pipe(autoprefixer({browsers: ['IE 10', 'last 2 versions']}))
    .pipe(minifyCSS())                      // minify them
    .pipe(concat('cookieconsent.min.css'))  // combine them
    .pipe(gulp.dest(buildFolder));          // save under a new name
});

gulp.task('build', function(callback) {
  return runSequence('cleanup:begin', 'minify:js', 'minify:css', callback);
});

gulp.task('watch', function() {
  gulp.watch(cssBuildFiles.concat(jsBuildFiles), ['build']);
});

function _minify(opts) {
}
