var gulp = require('gulp');

// var paths = {
//     templatesFolder: ["src/views/**/*.ejs"],
// };

var templatesFolder = "src/views/**/*.ejs";

gulp.task("copyPageTemplates", () => {
    return gulp.src(templatesFolder).pipe(gulp.dest('dist/views'));
});