/**
 * # WATCH GULP TASK
 * Watches files and/or folders for changes and runs a set of tasks on it.
 */

;(function() {
    'use strict';

    var gulp = require('gulp');

    gulp.task('watch', ['styles'] ,function () {
      gulp.watch('stylesheets/**/*.scss', ['styles']);
//      gulp.watch('modules/**/*.js', ['scripts']);
    });

}());