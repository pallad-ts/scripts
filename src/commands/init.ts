import Command from "@oclif/command";
import {copyFile, mkdir} from 'fs';
import {promisify} from "util";
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
        await promisify(mkdir)(
            paths.project('src')
        );

        await promisify(copyFile)(
            paths.template('tsconfig.json'),
            paths.project('src/tsconfig.json')
        );

        await promisify(mkdir)(
            paths.project('test')
        );

        await promisify(copyFile)(
            paths.template('tsconfig-test.json'),
            paths.project('test/tsconfig.json')
        )
    }

    private async initEditorconfig() {
        await promisify(copyFile)(
            paths.template('.editorconfig'),
            paths.project('.editorconfig')
        );
    }

    private async initTSLintConfig() {
        await promisify(copyFile)(
            paths.template('tslint.json'),
            paths.project('tslint.json')
        )
    }

    private async initJestConfig() {
        await promisify(copyFile)(
            paths.template('jest.config.js'),
            paths.project('jest.config.js')
        );
    }
}