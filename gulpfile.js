const gulp = require('gulp');
const scss = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
  // 1. where is my scss file
  return gulp.src('assets/scss/**/*.scss')
  // 2. pass that file though scss compiler
    .pipe(scss().on('error', scss.logError))
    .pipe(prefix({grid: true, browsers: ['last 2 versions', 'ie 6-11', 'Firefox > 20']}))
  // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('assets/css'))
  //4. stream changes to all browserSync
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('assets/scss/**/*.scss', style);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('assets/js/**/*.js').on('change', browserSync.reload);

}

exports.style = style;
exports.watch = watch;
