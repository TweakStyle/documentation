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

The command line will be executed each time one of the matching files change or is saved.
To trigger a build manually you can open the file, focus the editor and press <kbd>Ctrl</kbd>+<kbd>S</kbd> / <kbd>⌘</kbd>+<kbd>S</kbd>.