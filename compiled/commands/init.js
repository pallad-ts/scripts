"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const fs_1 = require("fs");
const util_1 = require("util");
const common_1 = require("../common");
class Init extends command_1.default {
    async run() {
        await Promise.all([
            this.initTsconfig()
        ]);
    }
    async initTsconfig() {
        await util_1.promisify(fs_1.copyFile)(common_1.paths.template('tsconfig.json'), common_1.projectPath('tsconfig.json'));
    }
}
Init.description = 'Initializes project';
exports.Init = Init;
