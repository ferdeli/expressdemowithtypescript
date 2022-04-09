var gulp = require('gulp');
var del = require('del');

var task = 'cleanDistFolder';

gulp.task(task, () => {
    return del('dist/**');
});

module.exports = task;