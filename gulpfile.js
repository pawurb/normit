var gulp  = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  gulp.watch(['lib/*.js'], ['lint']);
});

gulp.task('lint', function() {
  return gulp.src('./lib/*.js')
  .pipe(jshint());
});

gulp.task('test', function () {
  return gulp.src('./test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});