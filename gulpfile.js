var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
    cssnano = require('gulp-cssnano');
    browserSync = require("browser-sync");

// Сервер
gulp.task ('server', function () {
    browserSync ({
        port: 9000,
        server: {
            baseDir: ''
        }
    });
});

gulp.task('autoprefix - плагин', function () {
    return gulp.src('src/css/sass-style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css/'));
});

gulp.task('nano', function() {
    return gulp.src('src/css/style.css')
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});

gulp.task('default', ['server','watch','nano']);

gulp.task('watch', function() {
    gulp.watch ([
        '*.html',
        'js/*.js',
        'css/*.css'
    ]).on('change', browserSync.reload);
    // watch all source for rebuild
    gulp.watch('src/css/**/*', ['default']);
});