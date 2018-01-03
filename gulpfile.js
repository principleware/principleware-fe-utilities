var gulp = require("gulp");
var typedoc = require("gulp-typedoc");
var gulpIgnore = require('gulp-ignore');
gulp.task("doc", function() {
    return gulp
        .src(["src/lib/**/*.ts"])
        .pipe(gulpIgnore.exclude("*.spec.ts"))
        .pipe(typedoc({
            name: "Principleware typescript utilites (1.0.0)",            
            out: "docs/",            
            
            module: "commonjs",
            target: "es5",

            exclude: "src/**/t.spec.ts",

            experimentalDecorators: true,
            excludePrivate: true,
            excludeExternals: true,
            "lib": [
                "lib.dom.d.ts",
                "lib.es2015.d.ts",
                "lib.es2016.d.ts"
            ]

        }));
});
