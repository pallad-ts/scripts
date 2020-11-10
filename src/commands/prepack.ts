import Command from "@oclif/command";
import {execCommand} from "../common";

export class Prepack extends Command {
    async run() {
        execCommand(`pre compiled`);
    }
}