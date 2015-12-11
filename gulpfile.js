const g     = require("gulp-load-plugins")()
    , gulp  = require("gulp")

const paths = {
    src: "src/seele.js",
    dev: "dev",
    dest: "dist"
}

gulp.task("watch", () => {
    gulp.watch(paths.src, ["copy"])
})

gulp.task("copy", () => {
    gulp.src(paths.src).pipe(gulp.dest(paths.dest))
})

const tasks = [
    "copy",
    "watch"
]

gulp.task("default", tasks)
