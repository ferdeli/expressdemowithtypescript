var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('compileTsFiles', () => {
    return tsProject
        .src()
        .pipe(tsProject())
        .js
        .pipe(gulp.dest('dist'));
});
