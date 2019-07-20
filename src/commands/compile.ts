import Command from "@oclif/command";
import {paths, execCommand, projectPath, runScript} from "../common";

export class Compile extends Command {
    static description = 'Compiles project using typescript';

    async run() {
        execCommand(
            `rm -rf ${projectPath('compiled')}`
        );
        runScript(
            paths.bin('tsc')
        );
    }
}