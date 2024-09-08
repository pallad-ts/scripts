import {Command} from "@oclif/core";
import {paths, execCommand, runScript} from "../common";

export class Compile extends Command {
	static description = 'Compiles project using typescript';

	static strict = false;

	async run() {
		execCommand(
			`rm -rf ${paths.project('compiled')}`
		);
		const {argv} = await this.parse(Compile);
		runScript(
			paths.bin('typescript', 'tsc'),
			[
				"--project",
				"src",
				"--incremental",
				...argv
			]
		);
	}
}
