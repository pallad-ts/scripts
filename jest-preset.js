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
    errorOnDeprecated: true,
    moduleFileExtensions: [
        "js",
        "json",
        "ts",
    ],
    preset: "ts-jest",
    roots: [
        "<rootDir>/test"
    ],
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
    testEnvironment: "node",
    testRegex: ".*Test.ts$"
};