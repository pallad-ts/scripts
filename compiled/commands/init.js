"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const fs_1 = require("fs");
const util_1 = require("util");
const common_1 = require("../common");
class Init extends command_1.default {
    async run() {
        await Promise.all([
            this.initTsconfig(),
            this.initEditorconfig(),
            this.initTSLintConfig(),
            this.initJestConfig()
        ]);
    }
    async initTsconfig() {
        await util_1.promisify(fs_1.mkdir)(common_1.paths.project('src'));
        await util_1.promisify(fs_1.copyFile)(common_1.paths.template('tsconfig.json'), common_1.paths.project('src/tsconfig.json'));
        await util_1.promisify(fs_1.mkdir)(common_1.paths.project('test'));
        await util_1.promisify(fs_1.copyFile)(common_1.paths.template('tsconfig-test.json'), common_1.paths.project('test/tsconfig.json'));
    }
    async initEditorconfig() {
        await util_1.promisify(fs_1.copyFile)(common_1.paths.template('.editorconfig'), common_1.paths.project('.editorconfig'));
    }
    async initTSLintConfig() {
        await util_1.promisify(fs_1.copyFile)(common_1.paths.template('tslint.json'), common_1.paths.project('tslint.json'));
    }
    async initJestConfig() {
        await util_1.promisify(fs_1.copyFile)(common_1.paths.template('jest.config.js'), common_1.paths.project('jest.config.js'));
    }
}
Init.description = 'Initializes project';
exports.Init = Init;
