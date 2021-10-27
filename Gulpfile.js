const gulp = require("gulp");
const ts = require("gulp-typescript");
let tsProject = ts.createProject("tsconfig.json");
const path = require("path");

// https://gulpjs.com/docs/en/getting-started/quick-start/
// https://www.typescriptlang.org/docs/handbook/gulp.html

function streamTask() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(gulp.dest(path.resolve(__dirname, "./storages/app/assets/js")));
}

exports.default = streamTask;
