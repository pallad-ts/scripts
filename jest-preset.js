module.exports = {
    collectCoverage: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    coverageReporters: [
        "json",
        "text",
        "lcov",
    ],
    errorOnDeprecated: false,
    moduleFileExtensions: [
        "js",
        "json",
        "ts",
    ],

    preset: "ts-jest",

    roots: [
        "<rootDir>/test"
    ],
    testEnvironment: "node",
    testRegex: ".*Test.ts$"
};