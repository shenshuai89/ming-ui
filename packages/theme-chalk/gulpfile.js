const { series, src, dest } = require("gulp");
const sass = require("gulp-dart-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const path = require("path");

function compile() {
  return src("./src/*.scss")
    .pipe(sass.sync())
    .pipe(autoprefixer({}))
    .pipe(cssmin())
    .pipe(dest(path.resolve(__dirname, "../../lib/theme-chalk")));
}
function copyfont() {
  // copy iconfont file
  return src("./src/fonts/**").pipe(cssmin()).pipe(dest(path.resolve(__dirname, "../../lib/theme-chalk/fonts")));
}

exports.build = series(compile, copyfont);
