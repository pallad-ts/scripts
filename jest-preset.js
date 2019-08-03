const {defaults: preset} = require('ts-jest/presets');
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
    roots: [
        "<rootDir>/test"
    ],
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
    transform: preset.transform,
    testEnvironment: "node",
    testRegex: ".*Test.ts$",
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/test/tsconfig.json'
        }
    }
};