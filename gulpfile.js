'use strict';

var gulp = require('gulp');
var rubySass = require('gulp-ruby-sass');
var browserSync = require('browser-sync');

    gulp.task('server', ['watch'], function() {
        browserSync({
            files: [
                '**/*.html',
                '**/*.css',
                '**/*.js'
            ],
            server: {
                baseDir: './'
            },
            browser: ['chrome']
        });
    });

gulp.task('styles', function() {
    return gulp.src('scss/styles.scss')
        .pipe(rubySass())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('scss/**/*.scss', ['styles']);
});

gulp.task('default', function () {
    gulp.start('watch');
});