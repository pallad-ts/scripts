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
                'src/tsconfig.json',
                ...argv,
                `./src/**/*.ts`
            ]
        );

        runScript(
            paths.bin('tslint'),
            [
                '--project',
                'test/tsconfig.json',
                ...argv,
                `./test/**/*.ts`
            ]
        );
    }
}