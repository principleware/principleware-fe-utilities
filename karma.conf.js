// Karma configuration
// Generated on Sat Dec 16 2017 21:57:37 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        browsers: ["Chrome"]
    });
};
