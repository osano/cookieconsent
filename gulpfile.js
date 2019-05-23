const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyJS = require('gulp-terser');
const minifyCSS = require('gulp-clean-css');
const deleteDirs = require('del');
const autoprefixer = require('gulp-autoprefixer');
const bump = require('gulp-bump');
const yargs = require('yargs');
const diff = require('gulp-diff-4');


let buildFolder = './build';
const jsBuildFiles = [
  './src/cookieconsent.js'
];
const cssBuildFiles = [
  // defined explicitly so they are combined in order
  './src/styles/animation.css',
  './src/styles/base.css',
  './src/styles/layout.css',
  './src/styles/media.css',

  // all theme files
  './src/styles/themes/*.css',
];


gulp.task('cleanup:begin', function () {
  return deleteDirs([buildFolder]);
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

gulp.task('bump', function() {
  return gulp.src(['./bower.json', './package.json'])
             .pipe(bump({'version': yargs.argv.tag}))
             .pipe(gulp.dest('./'))
});

gulp.task('build', gulp.series('cleanup:begin', 'minify:js', 'minify:css'));

gulp.task('verify', function() {
  buildFolder = "./build-verify";
  return new Promise(gulp.series('cleanup:begin', 'minify:js', 'minify:css', 'verify:diff'));
});

gulp.task('verify:diff', function() {
  return gulp.src('./build/*')
             .pipe(diff('./build-verify'))
             .pipe(diff.reporter({ fail: true }));
});

gulp.task('build:release', function() {
  if (yargs.argv.tag===undefined) {
    throw "A version number (e.g. 3.0.1) is required to build a release of cookieconsent"
  }

  return new Promise(gulp.series('build', 'bump'));
});

gulp.task('watch', function() {
  gulp.watch(cssBuildFiles.concat(jsBuildFiles), ['build']);
});