## Build on change

TweakStyle v0.9.0 introduced a new "Build Settings" button, available on pined local files (blue ones).
It opens a dialog allowing to setup a build command that will be executed on file change.

_Path_: The path of the file(s) that should be watched for change.
_Build command_: The command line to execute. The following variables can be used in the command line:
- `$workingdir`: The directory from where the command is executed. This is the project root directory (ex: `/path/to/my/project`)
- `$fullpath`: The full absolute path (ex: `/path/to/my/project/subdir/myfile.sass`)
- `$relpath`: The full path relative to the working directory (ex: `subdir/myfile.sass`)
- `$dirpath`: The absolute path of the containing directory (ex: `/path/to/my/project/subdir`)
- `$reldirpath`: The full absolute path (ex: `subdir`)
- `$filename`: The name of the file with its extension (ex: `myfile.sass`)
- `$basename`: The name of the file without its extension (ex: `myfile`)
- `$extension`: the file extension starting with dot (ex: `.sass`)

For a few known Preprocessors, the "Build command" field is prefilled with a default command line:
- _less_: `lessc $relpath $reldirpath/$basename.css --source-map`
- _SASS & SCSS_: `node-sass $relpath $reldirpath/$basename.css --source-map`
- _Stylus_: `stylus --compress < $relpath > $reldirpath/$basename.css --sourcemap`
- _TypeScript_: `tsc $relpath $reldirpath/$basename.js --sourceMap`
- _Coffee_: `coffee -c $relpath $reldirpath/$basename.js --map`
- _Dart_: `dart2js --out=$reldirpath/$basename.js $relpath`

Note: Compiler binaries are not included with TweakStyle. You'll have to install them separatly.

The command line will be executed each time one of the matching files change or is saved.
To trigger a build manually you can open the file, focus the editor and press <kbd>Ctrl</kbd>+<kbd>S</kbd> / <kbd>⌘</kbd>+<kbd>S</kbd>.