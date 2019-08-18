var gulp = require("gulp"),
  sass = require("gulp-sass"),
  htmlMin = require("gulp-htmlmin"),
  cleanCss = require("gulp-clean-css");

gulp.task("html", function() {
  return gulp
    .src("src/*.html")
    .pipe(htmlMin())
    .pipe(gulp.dest("dist"));
});

gulp.task("scss", function() {
  return gulp
    .src("src/*.scss")
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
  gulp.watch("src/*.html", gulp.parallel("html"));
  gulp.watch("src/*.sass", gulp.parallel("scss"));
});

gulp.task("default", gulp.parallel("html", "scss"));
