var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var yargs = require("yargs");
var del = require("del");
var runSequence = require("run-sequence");
var baseCdnUrl = '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/';

gulp.task('sass:copy', function(){
  return gulp.src('./styles/**/*')
    .pipe(gulp.dest('sass-tmp'));
});

gulp.task('sass:tag', function(){
  if (yargs.argv.tag===undefined) {
    return;
  }

  return gulp.src("./sass-tmp/_variables.scss")
    .pipe(replace(/(\$logo:(?: )?url\()(.*)(\);)/, '$1' + baseCdnUrl + yargs.argv.tag+'/logo.png$3'))
    .pipe(gulp.dest('./sass-tmp'));
    //.pipe(gulp.dest('./tmp'));
});

gulp.task('sass:build', function(){
  return gulp.src('./sass-tmp/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build'));
});


gulp.task('minify', function () {
  var pipeline = gulp.src('./cookieconsent.js');

  if (yargs.argv.tag!==undefined) {
    pipeline.pipe(replace(/(var THEME_BUCKET_PATH(?: )*=(?: )*')(.*)(';)/, '$1' + baseCdnUrl + yargs.argv.tag+'/$3'));
  }

  return pipeline
  .pipe(uglify())
  .pipe(rename('cookieconsent.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('copy:images', function() {
  return gulp.src('./images/*')
    .pipe(gulp.dest('./build'));
});

gulp.task('cleanup:begin', function() {
  return del([
    "./sass-tmp",
    "./build"
  ]);
});

gulp.task('cleanup:end', function() {
  return del([
    "./sass-tmp"
  ]);
});

gulp.task('build', function(callback){
  runSequence(
    'cleanup:begin',
    'minify',
    'sass:copy',
    'sass:tag',
    'sass:build',
    'copy:images',
    'cleanup:end',
    callback
  );
});
