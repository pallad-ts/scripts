import Command from "@oclif/command";
import {promises} from 'fs';
import {paths} from "../common";

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
        await promises.mkdir(
            paths.project('src')
        );

        await promises.copyFile(
            paths.template('tsconfig.json'),
            paths.project('src/tsconfig.json')
        );

        await promises.mkdir(
            paths.project('test')
        );

        await promises.copyFile(
            paths.template('tsconfig-test.json'),
            paths.project('test/tsconfig.json')
        )
    }

    private async initEditorconfig() {
        await promises.copyFile(
            paths.template('.editorconfig'),
            paths.project('.editorconfig')
        );
    }

    private async initTSLintConfig() {
        await promises.copyFile(
            paths.template('tslint.json'),
            paths.project('tslint.json')
        )
    }

    private async initJestConfig() {
        await promises.copyFile(
            paths.template('jest.config.js'),
            paths.project('jest.config.js')
        );
    }
}