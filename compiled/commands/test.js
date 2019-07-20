"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const common_1 = require("../common");
class Test extends command_1.default {
    async run() {
        const { argv } = this.parse(Test);
        common_1.runScript(common_1.paths.bin('jest'), argv);
    }
}
Test.description = 'Runs tests';
Test.strict = false;
exports.Test = Test;
