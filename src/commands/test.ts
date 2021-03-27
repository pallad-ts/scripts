import Command from "@oclif/command";
import {paths, runScript} from "../common";

export class Test extends Command {
	static description = 'Runs tests';

	static strict = false;

	// eslint-disable-next-line @typescript-eslint/require-await
	async run() {
		const {argv} = this.parse(Test);
		runScript(
			paths.bin('jest'),
			argv
		);
	}
}