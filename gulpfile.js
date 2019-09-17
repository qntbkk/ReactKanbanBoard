var gulp = require("gulp");
var clean = require("gulp-clean");
var ts = require('gulp-typescript');
var zip = require('gulp-zip');
var webpack = require("webpack-stream");
var merge2 = require("merge2");
var sequence = require('run-sequence');

var tsProject = ts.createProject('tsconfig.json');
gulp.task('compileTs', function () {
    var tsResult = tsProject.src()
        .pipe(tsProject());
    return tsResult.js
        .pipe(gulp.dest('./release/ReactKanbanBoard/widget'));

});

gulp.task("otherFiles", function () {
    return merge2([
        gulp.src(["ReactKanbanBoard/widget/ui/*.*"])
            .pipe(gulp.dest("./bundle/com/mendix/widget/custom/ReactKanbanBoard/ui/")),
        gulp.src(["./*.xml"])
            .pipe(gulp.dest("bundle/")),
        gulp.src(["ReactKanbanBoard/*.xml"])
            .pipe(gulp.dest("bundle/ReactKanbanBoard/")),
    ])
});

gulp.task("clean", function () {
    return gulp.src("./release/")
        .pipe(clean({ force: true }));
});
gulp.task("zip", function () {
    return gulp.src("./bundle/**/*")
        .pipe(zip("ReactKanbanBoard.mpk"))
        .pipe(gulp.dest("./test/widgets/"))
})
gulp.task('webpack', () =>
    gulp.src("./release/ReactKanbanBoard/widget/ReactKanbanBoard.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./bundle"))
)
gulp.task("taskList", sequence(["compileTs", "otherFiles"], "webpack", "zip"));
gulp.task("watch", function () {
    gulp.watch("./ReactKanbanBoard/**/*", ["taskList"]);
});
gulp.task("default", ["clean", "watch"]);
