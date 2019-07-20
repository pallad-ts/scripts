import Command from "@oclif/command";
import {paths, runScript} from "../common";

export class Lint extends Command {
    static description = 'Lints project';

    static strict = false;

    async run() {
        const {argv} = this.parse(Lint);
        runScript(
            paths.bin('tslint'),
            [
                '--project',
                'tsconfig.json',
                ...argv,
                `./src/**/*.ts`,
                `./test/**/*.ts`
            ]
        );
    }
}