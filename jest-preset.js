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
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/test/tsconfig.json'
			}
		]
	},
	testEnvironment: "node",
	testRegex: ".*Test.ts$",
	reporters: [
		'default',
		'jest-junit'
	]
};
