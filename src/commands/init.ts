import Command from "@oclif/command";
import {copyFile} from 'fs';
import {promisify} from "util";
import {projectPath, paths} from "../common";

export class Init extends Command {
    static description = 'Initializes project';

    async run() {
        await Promise.all([
            this.initTsconfig(),
            this.initEditorconfig(),
            this.initTSLintConfig(),
            this.initJestConfig()
        ])
    }

    private async initTsconfig() {
        await promisify(copyFile)(
            paths.template('tsconfig.json'),
            projectPath('tsconfig.json')
        );
    }

    private async initEditorconfig() {
        await promisify(copyFile)(
            paths.template('.editorconfig'),
            projectPath('.editorconfig')
        );
    }

    private async initTSLintConfig() {
        await promisify(copyFile)(
            paths.template('tslint.json'),
            projectPath('tslint.json')
        )
    }

    private async initJestConfig() {
        await promisify(copyFile)(
            paths.template('jest.config.js'),
            projectPath('jest.config.js')
        );
    }
}