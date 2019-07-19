alpha-scripts
=============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/alpha-scripts.svg)](https://npmjs.org/package/alpha-scripts)
[![Downloads/week](https://img.shields.io/npm/dw/alpha-scripts.svg)](https://npmjs.org/package/alpha-scripts)
[![License](https://img.shields.io/npm/l/alpha-scripts.svg)](https://github.com/alpha-scripts/alpha-scripts/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g alpha-scripts
$ alpha-scripts COMMAND
running command...
$ alpha-scripts (-v|--version|version)
alpha-scripts/0.0.0 darwin-x64 node-v10.15.0
$ alpha-scripts --help [COMMAND]
USAGE
  $ alpha-scripts COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`alpha-scripts hello [FILE]`](#alpha-scripts-hello-file)
* [`alpha-scripts help [COMMAND]`](#alpha-scripts-help-command)

## `alpha-scripts hello [FILE]`

describe the command here

```
USAGE
  $ alpha-scripts hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ alpha-scripts hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/alpha-scripts/alpha-scripts/blob/v0.0.0/src/commands/hello.ts)_

## `alpha-scripts help [COMMAND]`

display help for alpha-scripts

```
USAGE
  $ alpha-scripts help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.0/src/commands/help.ts)_
<!-- commandsstop -->
