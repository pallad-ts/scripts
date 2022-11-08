import {Command} from "@oclif/core";
import {paths, runScript} from "../common";

export class Test extends Command {
	static description = 'Runs tests';

	static strict = false;

	// eslint-disable-next-line @typescript-eslint/require-await
	async run() {
		const {argv} = await this.parse(Test);
		runScript(
			paths.bin('jest'),
			argv
		);
	}
}
