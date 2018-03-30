'use strict';

let gulp = require('gulp')
let sass = require('gulp-sass')
let cleanCSS = require('gulp-clean-css')

var cssSources = [
  'src/css/*.scss',
  'bower_components/bootstrap/scss/bootstrap.scss'
];

var compileSass = () => {
  return gulp.src(cssSources)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css'))
};

gulp.task('compileSass', compileSass)
gulp.task('default', compileSass)
