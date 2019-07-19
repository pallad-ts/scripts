import Command from "@oclif/command";
import {runScript} from "../../alpha-scripts/src/common";

export class Compile extends Command {
    static description = 'Compiles project using typescript';

    async run() {
        runScript('tsc')
    }
}