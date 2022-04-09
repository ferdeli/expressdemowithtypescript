var gulp = require('gulp');
var del = require('del');

gulp.task('cleanDistFolder', () => {
    return del('dist/**');
});