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
	transform: {
		'^.+\\.tsx?$': [
			'ts-jest'
		]
	},
	testEnvironment: "node",
	testMatch: ['**/__tests__/**/*.spec.ts?(x)'],
	reporters: [
		'default',
		'jest-junit'
	]
};
