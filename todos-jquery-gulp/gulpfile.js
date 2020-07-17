const { dest, src, parallel } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist/'));
}

function copyJs() {
    return src('./src/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('./dist/'));
}

function copyVendors(cb) {
    return src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(concat('vendors.js'))
        .pipe(dest('./dist/'));
}

function copyCss() {
    return src([
        '../common/css/normalize.css',
        '../common/css/skeleton.css',
        '../common/css/dark-theme.css',
        './src/*.css',
    ])
        .pipe(concat('styles.css'))
        .pipe(dest('./dist/'));
}

module.exports.build = parallel(copyHtml, copyCss, copyVendors, copyJs);
