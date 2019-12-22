const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const svgstore = require("gulp-svgstore");

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
});

gulp.task('html', () => {
    return gulp.src('*.html')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('scss', () => {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            grid: true
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('css-libs', () => {
    return gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('_libs.scss'))
        .pipe(gulp.dest('assets/scss/vendors'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', () => {
    return gulp.src('assets/js/**/*.js')
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-libs', () => {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ])
        .pipe(concat('libs.min.js'))
        .pipe(gulp.dest('assets/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("sprite", () => {
    return gulp.src("assets/img/svg/icon-*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("source/img/svg"));
});

gulp.task('watch', () => {
    gulp.watch('*.html', gulp.parallel('html'));
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('css-libs', 'scss', 'js-libs', 'browser-sync', 'watch'));
