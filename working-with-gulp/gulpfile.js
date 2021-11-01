var gulp = require('gulp');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('hello', function () {
  console.log('Hello, World!');
});

gulp.task('uglify', function () {
  gulp.src('js/**/*.js').pipe(uglify()).pipe(gulp.dest('build'));
});

gulp.task('processCSS', function () {
  gulp
    .src('styles/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});

gulp.task('default', ['uglify', 'processCSS']);

gulp.task('watch', function () {
  gulp.watch('styles/**/*.css', ['processCSS']);
});
