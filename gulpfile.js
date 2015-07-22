var gulp = require('gulp')
  , jade = require('gulp-jade')
  , browserify = require('gulp-browserify')
  , stylus = require('gulp-stylus')

gulp.task('default', ['jade', 'browserify', 'stylus', 'fonts'])

gulp.task('jade', function() {
  return gulp.src('lib/app/views/*.jade')
        .pipe(gulp.dest('build/views'))
})

gulp.task('browserify', function() {
  return gulp.src('lib/public/js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('build/public/js'))
})

gulp.task('stylus', function() {
  return gulp.src('lib/public/css/*.styl')
        .pipe(stylus({
          compress: true
        }))
        .pipe(gulp.dest('build/public/css'))
})

gulp.task('fonts', function() {
  return gulp.src('lib/public/fonts/*')
        .pipe(gulp.dest('build/public/fonts'))
})
