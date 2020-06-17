const gulp = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const concat = require("gulp-concat");
const terser = require("gulp-terser");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const { src, series, parallel, dest } = require("gulp");
const jsPath = "src/assets/js/**/*.js";
const stylePath = "src/assets/scss/**/*.scss";

function copyHtml() {
  return src("src/*.html").pipe(gulp.dest("dist"));
}
function imgTask() {
  return src("src/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
}
function jsTask() {
  return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat("all.js"))
    .pipe(terser())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js/"));
}

// //compile scss into css
function styleTask() {
  return gulp
    .src(stylePath)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());
}

function watchTask() {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: "/index.html",
    },
  });
  gulp.watch(stylePath, styleTask);
  gulp.watch("./src/*.html").on("change", browserSync.reload);
  gulp.watch(jsPath).on("change", browserSync.reload);
}

exports.copyHtml = copyHtml;
exports.imgTask = imgTask;
exports.jsTask = jsTask;
exports.styleTask = styleTask;
exports.watchTask = watchTask;
exports.default = parallel(copyHtml, imgTask, jsTask, styleTask, watchTask);
