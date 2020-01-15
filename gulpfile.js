const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const webpackStream = require('webpack-stream');

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./"
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
        .pipe(gulp.dest('build/css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', () => {
    return gulp.src([
        'assets/js/getGoodsData.js',
        'assets/js/mainEventHandler.js',
        'assets/js/showMainAndCategoryPage.js',
        'assets/js/showSlider.js',
        'assets/js/renderGoods.js',
        'assets/js/showGoodsItemOnPage.js',
        'assets/js/showCartWithGoods.js',
        'assets/js/showFilters.js',
        'assets/js/filterGoods.js',
        'assets/js/app.js',
    ])
        .pipe(concat('main.min.js'))
        .pipe((gulp.dest('build/js')))
        .pipe(webpackStream({
            devtool: 'source-map',
            output: {
                filename: 'main.min.js',
            },
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                                plugins: ['@babel/plugin-transform-runtime']
                            }
                        }
                    }
                ]
            }
        }))
        .pipe((gulp.dest('build/js')))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', () => {
    gulp.watch('*.html', gulp.parallel('html'));
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('assets/js/**/*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('scss', 'js', 'browser-sync', 'watch'));
