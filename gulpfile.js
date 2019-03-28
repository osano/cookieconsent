const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const deleteDirs = require('del');
const runSequence = require('run-sequence');
const autoprefixer = require('gulp-autoprefixer');
const bump = require('gulp-bump');
const yargs = require('yargs');
const diff = require('gulp-diff');

let buildFolder = './build';
const buildFiles = {
    js: [
        './src/cookieconsent.js'
    ],
    css: [
        // defined explicitly so they are combined in order
        './src/styles/animation.css',
        './src/styles/base.css',
        './src/styles/layout.css',
        './src/styles/media.css',

        // all theme files
        './src/styles/themes/*.css',
    ]
};

gulp.task('cleanup:begin', () => deleteDirs([buildFolder]));

gulp.task('minify:js', () =>
    gulp.src(buildFiles.js) // get files
      .pipe(minifyJS()) // minify them
      .pipe(concat('cookieconsent.min.js')) // combine them
      .pipe(gulp.dest(buildFolder)) // save under a new name
);

gulp.task('minify:css', () =>
  gulp.src(buildFiles.css) // get files
    .pipe(autoprefixer({browsers: ['IE 10', 'last 2 versions']}))
    .pipe(minifyCSS()) // minify them
    .pipe(concat('cookieconsent.min.css')) // combine them
    .pipe(gulp.dest(buildFolder)) // save under a new name
);

gulp.task('bump', () =>
  gulp.src(['./bower.json', './package.json'])
   .pipe(bump({'version': yargs.argv.tag}))
   .pipe(gulp.dest('./'))
);

gulp.task('build', callback => runSequence('cleanup:begin', 'minify:js', 'minify:css', callback));

gulp.task('verify', callback => {
  buildFolder = './build-verify';
  return runSequence('cleanup:begin', 'minify:js', 'minify:css', 'verify:diff', callback);
});

gulp.task('verify:diff', () =>
  gulp.src('./build/*')
   .pipe(diff('./build-verify'))
   .pipe(diff.reporter({fail: true}))
);

gulp.task('build:release', callback => {
  if (yargs.argv.tag === undefined) {
    throw "A version number (e.g. 3.0.1) is required to build a release of cookieconsent";
  }

  return runSequence('build', 'bump', callback);
});

gulp.task('watch', () => gulp.watch(buildFiles.css.concat(buildFiles.js), ['build']));
