const gulp = require("gulp");
const webpack = require("webpack-stream");

const configuration = require("./webpack.config.js");
const sourcePath = "./sources/Assets/typescripts";
const outputPath = "./storages/app/assets";

gulp.task("build:app", function () {
  return gulp
    .src(sourcePath)
    .pipe(webpack(configuration({ product: "app", mode: "development" })))
    .pipe(gulp.dest(outputPath));
});
gulp.task("build:prod:app", function () {
  return gulp
    .src(sourcePath)
    .pipe(webpack(configuration({ product: "app", mode: "production" })))
    .pipe(gulp.dest(outputPath));
});

gulp.task("build:framework", function () {
  return gulp
    .src(sourcePath)
    .pipe(webpack(configuration({ product: "framework", mode: "development" })))
    .pipe(gulp.dest(outputPath));
});

gulp.task("build:prod:framework", function () {
  return gulp
    .src(sourcePath)
    .pipe(webpack(configuration({ product: "framework", mode: "production" })))
    .pipe(gulp.dest(outputPath));
});

gulp.task("default", function () {
  return gulp
    .src("./sources/Assets/typescripts")
    .pipe(
      webpack(
        require("./webpack.config.js")({ product: "app", mode: "development" })
      )
    )
    .pipe(gulp.dest("./storages/app/assets"));
});
