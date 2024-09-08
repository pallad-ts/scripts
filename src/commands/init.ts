import {Command} from "@oclif/core";
import {promises} from 'fs';
import {paths} from "../common";

export class Init extends Command {
	static description = 'Initializes project';

	async run() {
		await Promise.all([
			this.initDirectories(),
			this.initTsconfig(),
			this.initEditorconfig(),
			this.initESLintConfig(),
			this.initJestConfig()
		])
	}

	private async initDirectories() {
		await promises.mkdir(
			paths.project('src')
		);
		await promises.mkdir(
			paths.project('test')
		);
	}

	private async initTsconfig() {
		await promises.copyFile(
			paths.template('tsconfig.json'),
			paths.project('src/tsconfig.json')
		);
		await promises.copyFile(
			paths.template('tsconfig.test.json'),
			paths.project('tsconfig.test.json')
		)
	}

	private async initEditorconfig() {
		await promises.copyFile(
			paths.template('.editorconfig'),
			paths.project('.editorconfig')
		);
	}

	private async initESLintConfig() {
		await promises.copyFile(
			paths.template('eslint.config.js'),
			paths.project('eslint.config.js')
		)
	}

	private async initJestConfig() {
		await promises.copyFile(
			paths.template('jest.config.js'),
			paths.project('jest.config.js')
		);
	}
}
