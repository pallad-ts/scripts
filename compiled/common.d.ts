/// <reference types="node" />
import { ExecSyncOptions } from 'child_process';
export declare function runScript(path: string, args?: string[]): import("child_process").SpawnSyncReturns<Buffer>;
export declare function execCommand(command: string, options?: ExecSyncOptions): Buffer;
export declare const ROOT_DIR: string;
export declare namespace paths {
    function template(name: string): string;
    function bin(name: string): string;
}
export declare const PROJECT_ROOT_DIR: string;
export declare function projectPath(path: string): string;
