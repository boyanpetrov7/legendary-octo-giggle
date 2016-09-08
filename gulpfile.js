var gulp = require('gulp')
var jasmine = require('gulp-jasmine')
var uglify = require('gulp-uglify')
var pump = require('pump')
var runSequence = require('run-sequence')
var sass = require('gulp-sass');

gulp.task('test', function () {
  return gulp.src('spec/*-spec.js')
    .pipe(jasmine())
})

gulp.task('watch', function () {
  gulp.watch('lib/*.js', ['build'])
})

gulp.task('sass-watch', function () {
  gulp.watch('scss/**/*.scss', ['sass'])
})

gulp.task('minify', function (cb) {
  pump([
    gulp.src('lib/*.js'),
    uglify(),
    gulp.dest('minified')
    ],
    cb
    )
})

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('build', function (cb) {
  runSequence(
    'test',
    'minify',
    cb)
})

gulp.task('default', ['build', 'watch', 'sass-watch'], function () {
  console.log("done");  
})