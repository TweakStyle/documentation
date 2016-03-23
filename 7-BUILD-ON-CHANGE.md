## Build on change

TweakStyle v0.9.0 introduced a new "Build On Change" feature, available on local files (blue ones).
Click on the wrench icon to open the build settings dialog:

- __Path__: The path of the file(s) that should be watched for change.
- __Build command__: The command line to execute. TweakStyle provide some variables about the changed file to help you specify the input and output path of you command:
  - `$workingdir`: The directory from where the command is executed (ex:&nbsp;`/path/to/my/project`)
  - `$fullpath`: The absolute path (ex:&nbsp;`/path/to/my/project/subdir/myfile.sass`)
  - `$relpath`: The path relative to the working directory (ex:&nbsp;`subdir/myfile.sass`)
  - `$dirpath`: The absolute path of the directory (ex:&nbsp;`/path/to/my/project/subdir`)
  - `$reldirpath`: The relative path of the directory (ex:&nbsp;`subdir`)
  - `$filename`: The name of the file including extension (ex:&nbsp;`myfile.sass`)
  - `$basename`: The name of the file without extension (ex:&nbsp;`myfile`)
  - `$extension`: the file extension (ex:&nbsp;`.sass`)

For a few known Preprocessors, the __Build command__ is prefilled with a default command line:
- _less_: `lessc $relpath $reldirpath/$basename.css --source-map`
- _SASS & SCSS_: `node-sass $relpath $reldirpath/$basename.css --source-map`
- _Stylus_: `stylus --compress < $relpath > $reldirpath/$basename.css --sourcemap`
- _TypeScript_: `tsc $relpath $reldirpath/$basename.js --sourceMap`
- _Coffee_: `coffee -c $relpath $reldirpath/$basename.js --map`
- _Dart_: `dart2js --out=$reldirpath/$basename.js $relpath`

Note: Compiler binaries are not included with TweakStyle. You'll have to install them separatly.

The command line will be executed each time one of the matching files change or is saved.
To trigger a build manually you can open the file, focus the editor and press <kbd>Ctrl</kbd>+<kbd>S</kbd> / <kbd>⌘</kbd>+<kbd>S</kbd>.