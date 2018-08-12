var gulp = require("gulp");
var typedoc = require("gulp-typedoc");
var gulpIgnore = require('gulp-ignore');
gulp.task("doc", function() {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(gulpIgnore.exclude("*.spec.ts"))
        .pipe(typedoc({
            name: "Polpware typescript utilites (2.1.1)",            
            out: "docs/",            
            
            module: "commonjs",
            target: "es6",

            exclude: "src/**/t.spec.ts",

            experimentalDecorators: true,
            excludePrivate: true,
            excludeExternals: true
        }));
});
