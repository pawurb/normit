var gulp   = require('gulp');
var watch  = require('gulp-watch');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');

gulp.task('default', function() {
  gulp.start('lint', 'test');
  gulp.watch(['lib/*.js', 'test/*js'], ['lint', 'test'])
});

gulp.task('lint', function() {
  gulp.src(['./lib/*.js', './test/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

gulp.task('test', function () {
  gulp.src('./test/*_test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});
