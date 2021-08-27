'use strict'

const gulp = require('gulp')
const typescript = require('gulp-typescript')
const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglifyCss = require('gulp-uglifycss')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('ts', function () {
  return gulp.src('./Sources/Assets/typescripts/*.ts')
    .pipe(typescript({
      noImplicitAny: true,
      noImplicitReturns: true,
      noUnusedLocals: true,
      removeComments: true,
      moduleResolution: 'node',
      module: 'ESNext',
      target: 'ESNext',
      lib: [
        'ESNext',
        'DOM'
        // "WebWorker"
      ]
      // outFile: 'output.js'
    }))
    .pipe(gulp.dest('./gulp-built/ts'))
})

gulp.task('sass', function () {
  return gulp.src('./Sources/Assets/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./gulp-built/css'))
})

gulp.task('css', function () {
  return gulp.src('./gulp-built/css/*.css')
    .pipe(uglifyCss({
      uglifyComments: true
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./gulp-built/css'))
})

gulp.task('images', function () {
  return gulp.src('./Sources/Assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./gulp-built/images'))
})

exports.watch = function () {
  // gulp.watch('./Sources/Assets/typescripts/*.ts', ['ts']);
  gulp.watch('./Sources/Assets/sass/*.scss', ['sass', 'scss'])
  gulp.watch('./gulp-built/css', ['css'])
}
