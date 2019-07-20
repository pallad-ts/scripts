"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const common_1 = require("../common");
class Lint extends command_1.default {
    async run() {
        const { argv } = this.parse(Lint);
        common_1.runScript(common_1.paths.bin('tslint'), [
            '--project',
            'tsconfig.json',
            ...argv,
            `./src/**/*.ts`,
            `./test/**/*.ts`
        ]);
    }
}
Lint.description = 'Lints project';
Lint.strict = false;
exports.Lint = Lint;
