import { ExecSyncOptions } from 'child_process';
export declare function runScript(path: string, args?: string[]): any;
export declare function execCommand(command: string, options?: ExecSyncOptions): any;
export declare const ROOT_DIR: any;
export declare const PROJECT_ROOT_DIR: any;
export declare namespace paths {
    function template(name: string): any;
    function bin(name: string): any;
    function project(path: string): any;
}
