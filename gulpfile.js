var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var replace = require("gulp-replace");
var yargs = require("yargs");

gulp.task('sass', function () {
  gulp.src('./styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
  var pipeline = gulp.src('./cookieconsent.js');

  if (yargs.argv.tag!==undefined) {
    pipeline.pipe(replace(/(var THEME_BUCKET_PATH(?: )*=(?: )*')(.*)(';)/, '$1//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/'+yargs.argv.tag+'/$3'));
  }

  pipeline
  .pipe(uglify())
  .pipe(rename('cookieconsent.min.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('build', ['sass', 'minify']);
