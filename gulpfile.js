'use strict'

var through = require('through2');
var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
//var rename = require('gulp-rename')
var runSequence = require('run-sequence');
var del = require('del');
var fs = require('fs');
function replace(searchStr, replacement) {
    var regex = new RegExp(searchStr, 'g');

    return through.obj(function(file, enc, callback) {
        if (!('contents' in file) || file.isNull()) {
            this.push(file);
            return callback();
        }
        else if (file.isStream()) {
            throw new gutil.PluginError('replace', 'streams not implemented');
        }
        else if (file.isBuffer()) {
            var contents = String(file.contents);

            contents = contents.replace(regex, replacement);

            file.contents = new Buffer(contents);
        }

        this.push(file);
        return callback();
    });
}

var config = {
    src: 'src/',
    buildDest: './build/',
    config: JSON.parse(fs.readFileSync('./config.json'))
};

gulp.task('clean', function(cb) {
    return del([config.buildDest + '*']);
});


console.log('Google Maps Api Key: ', config.config.mapsApiKey);
gulp.task('build:copy:all', function() {
    return gulp.src([config.src + '**/*', '!' + config.src + '**/*.js', '!' + config.src + 'sandbox.html'])
        .pipe(gulp.dest(config.buildDest));
});
gulp.task('build:copy:sandbox', function() {
    return gulp.src(config.src + 'sandbox.html')
        .pipe(replace('%MAPS_API_KEY%', config.config.mapsApiKey))
        .pipe(gulp.dest(config.buildDest));
});

function compile(name) {
    return gulp.src(config.src + name + '/**/*.js')
        .pipe(concat(name + '.js'))
        .pipe(gulp.dest(config.buildDest));
}

gulp.task('build:compile:sandbox', compile.bind(null, 'sandbox'));
gulp.task('build:compile:content', compile.bind(null, 'content'));

//main build
gulp.task('build:copy', ['build:copy:all', 'build:copy:sandbox']);
gulp.task('build:compile', ['build:compile:sandbox', 'build:compile:content']);

gulp.task('build', function(cb) {
    runSequence('clean', ['build:compile', 'build:copy'], cb);
});

gulp.task('default', ['build']);