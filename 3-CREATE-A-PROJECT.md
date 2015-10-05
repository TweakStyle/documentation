## Create a project

In TweakStyle, there are several ways of starting a project. You can either create a project from scratch, from existing files or from an online website.

### From scratch
  - Create an empty project [^createfromtemplate]
    - Click on the "Add project" button in the workspace tab (left pane)
    - You can leave all options to default or change the project location
    - Then click on "Ok", this will creates an empty project directory, at the bottom of the workspace tab.
  - Creates directory structure [^openinexplorer]
    - Right click on the project to get a context menu and click on "New directory"
    - Name the directory and apply
    - Do the same for each directory you want to creates
    - To creates a subdirectory, right click on the parent directory instead of the project
  - Creates new files
    - Right click on the project or a directory and click on "New file"
    - Name your file
    - Then open it to edit it (Either double click, or drag it to a tab or right click > pin in code tab)
  - Copy files from another project [^copypastedrag]
    - Right click on the project or a directory and click on "Open in explorer/finder"
    - Makes your file operations and come back to TweakStyle
    - TweakStyle workspace should updates automatically. If not, you can force it using right click > "Refresh"
  - Edit files
    - Double click on the files you want to edit or drag it to a code tab or right click > "Pin in code tab"
    - Tips: you can recursivly pin all files in a directory by dragging it to a code tab or right click > "Pin all in code tab"
  - Preview html files
    - Double click on html files or drag it to a preview tab or right click > "Preview"
  
[^createfromtemplate]: We're considering the implementation of a "Create project from template" feature that would make creating projects from scratch much easier.
[^openinexplorer]: You can also do it in explorer/finder. Right click on the project or directory and click on "Open in explorer/finder"
[^copypastedrag]: TweakStyle does not handle yet dragging files from a directory to another or from explorer/finder to workspace.

### From existing files on your computer
  - Add the project to workspace
    - Click on the "Add project" button in the workspace tab (left pane)
    - Select the root directory of your project
    - Then click on "Ok", this will add the project at the bottom of the workspace tab.
  - Edit files
    - Double click on the files you want to edit or drag it to a code tab or right click > "Pin in code tab"
    - _Tip: you can recursivly pin all files in a directory by dragging it to a code tab or right click > "Pin all in code tab"_
  - Preview html files
    - Double click on html files or drag it to a preview tab or right click > "Preview"

### From an online website
  - Create an empty project
    - Click on the "Add project" button in the workspace tab (left pane)
    - You can leave all options to default or change the project location
    - Then click on "Ok", this will creates an empty project directory, at the bottom of the workspace tab.
  - Navigates to the website
    - In the right pane, type the url of the website in the url bar and press Enter
    - Navigates to the desired page(s)
    - Requests involved in the display are automatically listed in the left pane
    - You can open each files and edit them. Just click on it and edit.
  - Save / Dump files in the project
    - You can save the changes and/or dump requests to your project
    - Click on the "Save" or "Add to workspace" button (or use <kbd>⌘</kbd>+<kbd>S</kbd> / <kbd>Ctrl</kbd>+<kbd>S</kbd>)
    - This will open the "Add to workspace" tool
    - Click on the first arrow of the "To" field and select the project you want to save the file(s) in.
    - Then click on the next arrow(s) to select the directory path inside the project
    - Click on OK to save/dump the file
    - _Tip: You can several requests in bulk by changing the "From" path with wildcards. Click on the parts of the path you want to change into a wildcard._

### From a git/github repository
_For now, TweakStyle does not natively support version control. You can use TweakStyle with a versioned project, but you'll have to use a third party software for all git operations (clone, pull, compare, commit, ...)._
  - Clone repository: Use third party software or command line: `git clone https://github.com/xxx/xxx`
  - Create the project in TweakStyle: [From existing files on your computer](#from-existing-files-on-your-computer)
  - Makes your changes
  - Commit/Push: Use third party software or command line: `git commit`, `git push`

### From a remote server (ftp/sftp)
_For now, TweakStyle does not natively support FTP or SFTP. You can use TweakStyle on a project published on FTP, but you'll have to use a third party software for all ftp operations (get source and push to remote server)._
  - Get source: Use third party software
  - Create the project in TweakStyle: [From existing files on your computer](#from-existing-files-on-your-computer)
  - Makes your changes
  - Push to remote server: Use third party software
