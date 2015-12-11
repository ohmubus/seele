const g     = require("gulp-load-plugins")()
    , gulp  = require("gulp")

const paths = {
    src: "src/seele.js",
    html: "src/index.html",
    dev: "dev",
    dest: "dist"
}

gulp.task("serve", () => {
    g.connect.server({
        root: paths.dev,
        port: process.env.PORT || 3000,
        livereload: process.env.RELOAD = "true" ? true : false
    })
})

gulp.task("reload", () => {
    gulp.src(paths.dev).pipe(g.connect.reload())
})

gulp.task("watch", () => {
    gulp.watch([paths.src, paths.html], ["copyDev"])
    gulp.watch(paths.dev, ["reload"])
})

gulp.task("copy", () => {
    gulp.src(paths.src).pipe(gulp.dest(paths.dest))
})

gulp.task("copyDev", () => {
    gulp.src([paths.src, paths.html]).pipe(gulp.dest(paths.dev))
})

const tasks = [
    "copyDev",
    "serve",
    "watch"
]

gulp.task("default", tasks)
gulp.task("ship", ["copy"])
