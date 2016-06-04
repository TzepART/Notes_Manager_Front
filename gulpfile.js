var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');

gulp.task('autoprefix - плагин', function () {
    return gulp.src('src/css/sass-style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('nano ', function() {
    return gulp.src('src/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});