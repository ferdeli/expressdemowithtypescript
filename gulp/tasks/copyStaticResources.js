var gulp = require('gulp');

var staticResourcesFolder = './src/public/**';

gulp.task('copyStaticResources', () => {
    return gulp.src(staticResourcesFolder).pipe(gulp.dest('dist/public'));
});