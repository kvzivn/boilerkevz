import gulp from 'gulp';
import stylus from 'gulp-stylus';
import browserSync from 'browser-sync';

const reload = browserSync.reload;



gulp.task('bs', () => {
    browserSync({
        server: {
            baseDir: './'
        },
        browser: ['google chrome canary']
    });
});



gulp.task('watch', () => {
    gulp.watch('stylesheets/*.styl', ['styles']);
    gulp.watch('*.html', reload);
});



gulp.task('styles', () => {
    return gulp.src('stylesheets/*.styl')
        .pipe(stylus({
            compress: false
         }))
        .pipe(gulp.dest('stylesheets/'))
        .pipe(reload({stream:true}));
});



gulp.task('default', ['watch', 'bs']);