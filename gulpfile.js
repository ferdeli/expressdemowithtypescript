var gulp = require('gulp');

var tasks = require('./gulp/index');

gulp.task(
    'default', gulp.series(tasks)
);