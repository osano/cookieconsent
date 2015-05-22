var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var yargs = require("yargs");

var tag = yargs.argv.tag;

if (tag===undefined) {
  throw "Required argument --tag not found";
}

gulp.task('sass', function () {
  gulp.src('./styles/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
  gulp.src('./cookieconsent.js')
    .pipe(uglify())
    .pipe(rename('cookieconsent.latest.min.js'))
    .pipe(gulp.dest('./build'))
    .pipe(rename('cookieconsent.'+tag+'.min.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('copy-images', function () {
  gulp.src('theme-previews/*.png')
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['sass', 'minify', 'copy-images']);
