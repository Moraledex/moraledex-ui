'use strict'

var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
//var rename = require('gulp-rename')
var runSequence = require('run-sequence');
var del = require('del');
var fs = require('fs');

var config = {
    src: 'src/',
    buildDest: './build/',
};

gulp.task('clean', function(cb) {
    return del([config.buildDest + '*']);
});

gulp.task('build:copy', function() {
    return gulp.src([config.src + '**/*', '!' + config.src + '**/*.js'])
        .pipe(gulp.dest(config.buildDest));
});

//main build
gulp.task('build:compile', function() {
    return gulp.src(config.src + '**/*.js')
        .pipe(concat('content.js'))
        .pipe(gulp.dest(config.buildDest));
});

gulp.task('build', function(cb) {
    runSequence('clean', ['build:compile', 'build:copy'], cb);
});

gulp.task('default', ['build']);