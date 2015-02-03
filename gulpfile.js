var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");


gulp.task('sass', function () {
  gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'));
});

gulp.task('minify', function () {
  gulp.src('./cookieconsent.js')
    .pipe(uglify())
    .pipe(rename('cookieconsent.min.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('build', ['sass', 'minify']);
