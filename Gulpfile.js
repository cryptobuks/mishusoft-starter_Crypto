// https://gulpjs.com/docs/en/getting-started/quick-start/
// https://www.typescriptlang.org/docs/handbook/gulp.html

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const ts = require("gulp-typescript");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const merge = require("merge2"); // Requires separate installation

const tsProject = ts.createProject("tsconfig.json");

const paths = {
  styles: {
    common: ["sources/Assets/sass/includes/common/colors.scss"],
    app: {
      src: "sources/Assets/sass",
      srcGlob: "sources/Assets/sass/**/*.{sass,scss}",
      files: [
        "sources/Assets/sass/webfonts.scss",
        "sources/Assets/sass/themes/mishusoft.scss",
        "sources/Assets/sass/app.scss",
        "sources/Assets/sass/app-v3.scss",
        "sources/Assets/sass/app-v4.scss",
        "sources/Assets/sass/loader.scss",
      ],
      dest: "storages/app/assets/css",
    },
    framework: {
      src: "sources/Assets/sass",
      srcGlob: "sources/Assets/sass/**/*.{sass,scss}",
      files: [
        "sources/Assets/sass/webfonts.framework.scss",
        "sources/Assets/sass/embedded.scss",
        "sources/Assets/sass/resources.scss",
      ],
      dest: "storages/framework/views/css",
    },
  },
  scripts: {
    src: "sources/Assets/typescripts/loader.ts",
    dest: "storages/app/assets/js/",
  },
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del(["storages/app/assets", "storages/framework/views"]);
}

/*
 * Define our tasks using gulp.task functions
 */
gulp.task("build:app:styles", function () {
  return gulp
    .src([...paths.styles.common, ...paths.styles.app.files])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.app.dest));
});

gulp.task("build:framework:styles", function () {
  return gulp
    .src([...paths.styles.common, ...paths.styles.framework.files])
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.framework.dest));
});

function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
  const tsResult = gulp
    .src(paths.scripts.src, { sourcemaps: true })
    // .pipe(uglify())
    .pipe(tsProject());

  return merge([
    tsResult.dts.pipe(gulp.dest(`${paths.scripts.dest}/definitions`)),
    tsResult.js.pipe(gulp.dest(paths.scripts.dest)),
  ]);
}

/*
 * You could even use `export as` to rename exported tasks
 */
function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
const build = gulp.series(clean, gulp.parallel(styles, scripts));

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;
