var gulp = require("gulp");
var typedoc = require("gulp-typedoc");
var gulpIgnore = require('gulp-ignore');
gulp.task("typedoc", function() {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(gulpIgnore.exclude("*.spec.ts"))
        .pipe(typedoc({
            name: "Principleware typescipt utilites",            
            out: "docs/",            
            
            module: "commonjs",
            target: "es5",

            exclude: "src/**/t.spec.ts",

            experimentalDecorators: true,
            excludePrivate: true,
            excludeExternals: true
        }));
});
