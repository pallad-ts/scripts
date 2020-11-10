import Command from "@oclif/command";
import {execCommand} from "../common";

export class Postpack extends Command {
    async run() {
        execCommand(`pr:post`);
    }
}