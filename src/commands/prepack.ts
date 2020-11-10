import Command from "@oclif/command";
import {execCommand, paths} from "../common";

export class Prepack extends Command {
    async run() {
        execCommand(`pre ${paths.project('compiled')}`);
    }
}