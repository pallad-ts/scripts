import Command from "@oclif/command";
import {paths, execCommand, projectPath, runScript} from "../common";

export class Compile extends Command {
    static description = 'Compiles project using typescript';

    static strict = false;

    async run() {
        execCommand(
            `rm -rf ${projectPath('compiled')}`
        );
        const {argv} = this.parse(Compile);
        runScript(
            paths.bin('tsc'),
            argv
        );
    }
}