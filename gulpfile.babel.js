import gulp from 'gulp';
import stylus from 'gulp-stylus';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('bs', ['styles'], () => {
    browserSync({
        server: {
            baseDir: './'
        },
        browser: ['google chrome canary']
    });

    gulp.watch(['*.html'], reload);
    gulp.watch(['stylesheets/*.styl'], ['styles', reload]);
});

gulp.task('styles', () => {
    return gulp.src('stylesheets/*.styl')
        .pipe(stylus({
            compress: false
         }))
        .pipe(gulp.dest('stylesheets/'));
});

gulp.task('default', ['bs']);