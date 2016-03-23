## Build on change

TweakStyle v0.9.0 introduced a new "Build On Change" feature, available on local files (blue ones).
Click on the wrench icon to open the build settings dialog:

- __Path__: The path of the file(s) that should be watched for change.
- __Build command__: The command line to execute. TweakStyle provide some variables about the changed file to help you specify the input and output path of you command:
  - `$workingdir`: The directory from where the command is executed (ex:\xA0`/path/to/my/project`)
  - `$fullpath`: The absolute path (ex:\xA0`/path/to/my/project/subdir/myfile.sass`)
  - `$relpath`: The path relative to the working directory (ex:\xA0`subdir/myfile.sass`)
  - `$dirpath`: The absolute path of the directory (ex:\xA0`/path/to/my/project/subdir`)
  - `$reldirpath`: The relative path of the directory (ex:\xA0`subdir`)
  - `$filename`: The name of the file including extension (ex:\xA0`myfile.sass`)
  - `$basename`: The name of the file without extension (ex:\xA0`myfile`)
  - `$extension`: the file extension (ex:\xA0`.sass`)

For a few known Preprocessors, the Build command is prefilled with a default command line:
- LESS: `lessc $relpath $reldirpath/$basename.css --source-map`
- SASS & SCSS: `node-sass $relpath $reldirpath/$basename.css --source-map`
- Stylus: `stylus --compress < $relpath > $reldirpath/$basename.css --sourcemap`
- TypeScript: `tsc $relpath $reldirpath/$basename.js --sourceMap`
- Coffee: `coffee -c $relpath $reldirpath/$basename.js --map`
- Dart: `dart2js --out=$reldirpath/$basename.js $relpath`

Note: Compiler binaries are not included with TweakStyle. You'll have to install them separatly.

The command line will be executed each time one of the matching files change or is saved.
To trigger a build manually you can open the file, focus the editor and press <kbd>Ctrl</kbd>+<kbd>S</kbd> / <kbd>⌘</kbd>+<kbd>S</kbd>.