var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require("vinyl-source-stream");
var browserSync = require('browser-sync');
var del = require('del');

var SOURCE_PATH = './src';
var ENTRY_FILE = SOURCE_PATH + '/js/index.js';
var BUILD_PATH = './dist';
var JS_BUILD_PATH = BUILD_PATH + '/js';

var browserify_option = {
    entries: ENTRY_FILE,
    debug : true,
};

gulp.task('clean', function(){
    return del([
        'dist/**/*'
    ]);
});

gulp.task('html', ['clean'], function(){
    return gulp.src(SOURCE_PATH + '/*.html')
    .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('css', ['html'], function(){
    return gulp.src(SOURCE_PATH + '/css/*')
    .pipe(gulp.dest(BUILD_PATH + '/css/'));
});

gulp.task('build', ['css'], function(){
    browserify(browserify_option)
    .transform(babelify, {presets:["env"]})
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest(JS_BUILD_PATH));
});

gulp.task('serve', function(){
    browserSync({
        server:{
            baseDir: BUILD_PATH,
            directory: false
        },
        open: true
    });
});



gulp.task('default', ['build']);