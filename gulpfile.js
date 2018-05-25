var gulp = require("gulp");
var typedoc = require("gulp-typedoc");
var gulpIgnore = require('gulp-ignore');
gulp.task("doc", function() {
    return gulp
        .src(["src/**/*.ts"])
        .pipe(gulpIgnore.exclude("*.spec.ts"))
        .pipe(typedoc({
            name: "Principleware typescript utilites (2.0.0)",            
            out: "docs/",            
            
            module: "commonjs",
            target: "es5",

            exclude: "src/**/t.spec.ts",

            experimentalDecorators: true,
            excludePrivate: true,
            excludeExternals: true
        }));
});
