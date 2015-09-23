var gulp = require('gulp');

var addsrc = require('gulp-add-src');
var browserSync = require('browser-sync');
var del = require('del');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var uglify = require('gulp-uglify');

gulp.task('clean', function() {
  return del(['static', 'production']);
});

gulp.task('images', ['clean'], function() {
    return gulp.src([
                'images/**'
            ])
        .pipe(gulp.dest('static/images'))
        .pipe(gulp.dest('production/images'))
});

gulp.task('sass', ['clean'], function() {
    return gulp.src(['css/*.scss'])
        .pipe(scsslint({
            'endless': true
        }))
        .pipe(sass({ includePaths : ['_/scss/'] }))
        .pipe(addsrc([
                'node_modules/normalize.css/normalize.css'
            ]))
        .pipe(gulp.dest('static/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest('production/css'))
});

gulp.task('js', ['clean'], function() {
    return gulp.src([
                        'js/*.js'
                    ])
        .pipe(gulp.dest('static/js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('production/js'))
});

gulp.task('html', ['clean'], function() {
    var opts = {
        conditionals: true,
        spare:true,
        quotes: true
    };

    return gulp.src(['html/*.html'])
        .pipe(gulp.dest('static'))
        .pipe(replace('.css', '.min.css'))
        .pipe(replace('.js', '.min.js'))
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('production'))
});

gulp.task('browser-sync', function() {
    browserSync.init(['**/css/*', '**/js/*', '**/html/*', '**/images/*'], {
        server: {
            host: "local.dev",
            baseDir: "./static/"
        },
        open: true,
        ghostMode: false
    });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('html/*.html', ['html']);
  gulp.watch('images/**', ['images']);
  gulp.watch('css/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['html', 'images', 'sass', 'js', 'browser-sync', 'watch']);






