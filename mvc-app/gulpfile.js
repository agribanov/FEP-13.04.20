const { dest, src, parallel } = require('gulp');
const concat = require('gulp-concat');

function copyHtml() {
    return src('./src/index.html').pipe(dest('./dist/'));
}

function copyJs() {
    return src('./src/js/*.js').pipe(concat('all.js')).pipe(dest('./dist/'));
}

function copyVendors(cb) {
    return src(['./node_modules/jquery/dist/jquery.min.js'])
        .pipe(concat('vendors.js'))
        .pipe(dest('./dist/'));
}

module.exports.build = parallel(copyHtml, copyVendors, copyJs);
