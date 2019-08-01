"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
function runScript(path, args = []) {
    const result = child_process_1.spawnSync(path, args, {
        stdio: 'inherit',
        cwd: exports.PROJECT_ROOT_DIR
    });
    console.log(path, args);
    if (result.signal) {
        if (result.signal === 'SIGKILL') {
            console.log('The script failed because the process exited too early. ' +
                'This probably means the system ran out of memory or someone called ' +
                '`kill -9` on the process.');
        }
        else if (result.signal === 'SIGTERM') {
            console.log('The script failed because the process exited too early. ' +
                'Someone might have called `kill` or `killall`, or the system could ' +
                'be shutting down.');
        }
        process.exit(1);
    }
    return result;
}
exports.runScript = runScript;
function execCommand(command, options) {
    return child_process_1.execSync(command, Object.assign({ stdio: 'inherit' }, (options || {})));
}
exports.execCommand = execCommand;
exports.ROOT_DIR = path_1.resolve(__dirname, '../');
exports.PROJECT_ROOT_DIR = process.cwd();
var paths;
(function (paths) {
    function template(name) {
        return path_1.resolve(exports.ROOT_DIR, 'templates', name);
    }
    paths.template = template;
    function bin(name) {
        return path_1.resolve(exports.ROOT_DIR, 'node_modules', '.bin', name);
    }
    paths.bin = bin;
    function project(path) {
        return path_1.resolve(exports.PROJECT_ROOT_DIR, path);
    }
    paths.project = project;
})(paths = exports.paths || (exports.paths = {}));
