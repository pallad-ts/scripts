import Command from "@oclif/command";
import {paths, runScript} from "../common";
import * as fs from 'fs';

export class Lint extends Command {
	static description = 'Lints project';

	static strict = false;

	// eslint-disable-next-line @typescript-eslint/require-await
	async run() {
		const filesPaths = [`./src/**/*.ts`];

		if (fs.existsSync(paths.project('eslint'))) {
			filesPaths.push(`./test/**/*.ts`);
		}
		const {argv} = this.parse(Lint);
		runScript(
			paths.bin('eslint'),
			[
				...argv,
				...filesPaths
			]
		);
	}
}