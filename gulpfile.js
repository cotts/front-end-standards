const gulp = require('gulp')
    , clean = require('gulp-clean')
    , cssmin = require('gulp-cssmin')
    , autoprefixer = require('gulp-autoprefixer')
    , csslint = require('gulp-csslint')
    , sass = require('gulp-sass')
    , uglify = require('gulp-uglify')
    , babel = require('gulp-babel')
    , jshint = require('gulp-jshint')
    , jshintStylish = require('jshint-stylish')
    , usemin = require('gulp-usemin')
    , browserSync = require('browser-sync');

csslint.addFormatter('csslint-stylish');
prefixerOpts = {browsers: ['last 15 versions']};
 
gulp.task('default', ['clearPublic'], () => gulp.start('copyImg', 'minifyAll', 'copyBowerComponents', 'copyFonts' ));

gulp.task('clearPublic', () => gulp.src('public').pipe(clean()));

gulp.task('copyBowerComponents', () => gulp.src('src/vendor/**/*').pipe(gulp.dest('public/vendor')));

gulp.task('copyImg', () => gulp.src('src/img/**/*').pipe(gulp.dest('public/img')));

gulp.task('copyFonts', () => gulp.src('src/fonts/**/*').pipe(gulp.dest('public/fonts')));

gulp.task('sass', () =>  gulp.src('src/sass/**/*.scss').pipe(sass().on('error', sass.logError)).pipe(autoprefixer(prefixerOpts)).pipe(gulp.dest('src/css')));

gulp.task('minifyAll', ['sass'], () => gulp.src('src/**/*.html').pipe(usemin({
    'js': [babel({presets: ['es2015']}),uglify({ mangle: false })],
    'css': [autoprefixer(prefixerOpts), cssmin]
})).pipe(gulp.dest('public')));

gulp.task('develop',  () => {
    
    browserSync.init({server : {baseDir : 'src'}});

     gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch('src/js/**/*.js').on('change', (event) => {
        console.log(`Linting.js: ${event.path}`);
        gulp.src(event.path).pipe(jshint({"esversion": 6})).pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('src/sass/**/*.scss', ['sass']);

    gulp.watch('src/css/**/*.css').on('change', (event) => {
        console.log(`Linting.css ${event.path}`);
        gulp.src(event.path).pipe(csslint()).pipe(csslint.formatter('stylish'));
    });
});


