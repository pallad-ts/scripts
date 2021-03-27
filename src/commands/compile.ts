import Command from "@oclif/command";
import {paths, execCommand, runScript} from "../common";

export class Compile extends Command {
	static description = 'Compiles project using typescript';

	static strict = false;

	// eslint-disable-next-line @typescript-eslint/require-await
	async run() {
		execCommand(
			`rm -rf ${paths.project('compiled')}`
		);
		const {argv} = this.parse(Compile);
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