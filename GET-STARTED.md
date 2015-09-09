# Get started

## 1. Create a project

### From scratch
  - Create an empty project [^1]
    - Click on the "Add project" button in the workspace tab (left pane)
    - You can leave all options to default or change the project location
    - Then click on "Ok", this will creates an empty project directory, at the bottom of the workspace tab.
  - Creates directory structure(^2)
    - Right click on the project to get a context menu and click on "New directory"
    - Name the directory and apply
    - Do the same for each directory you want to creates
    - To creates a subdirectory, right click on the parent directory instead of the project
  - Creates new files
    - Right click on the project or a directory and click on "New file"
    - Name your file
    - Then open it to edit it (Either double click, or drag it to a tab or right click > pin in code tab)
  - Copy files from another project(^3)
    - Right click on the project or a directory and click on "Open in explorer/finder"
    - Makes your file operations and come back to TweakStyle
    - TweakStyle workspace should updates automatically. If not, you can force it using right click > "Refresh"
  - Edit files
    - Double click on the files you want to edit or drag it to a code tab or right click > "Pin in code tab"
    - Tips: you can recursivly pin all files in a directory by dragging it to a code tab or right click > "Pin all in code tab"
  - Preview html files
    - Double click on html files or drag it to a preview tab or right click > "Preview"
  
[^1]: We're considering the implementation of a "Create project from template" feature that would make creating projects from scratch much easier.
[^2]: You can also do it in explorer/finder. Right click on the project or directory and click on "Open in explorer/finder"
[^3]: TweakStyle does not handle yet dragging files from a directory to another or from explorer/finder to workspace.

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
    - Click on the "Save" or "Add to workspace" button (or use Control/Command + S)
    - This will open the "Add to workspace" tool
    - Click on the first arrow of the "To" field and select the project you want to save the file(s) in.
    - Then click on the next arrow(s) to select the directory path inside the project
    - Click on OK to save/dump the file
    - _Tip: You can several requests in bulk by changing the "From" path with wildcards. Click on the parts of the path you want to change into a wildcard._

### From a git/github repository
_For now, TweakStyle does not natively support version control. You can use TweakStyle to work on a git project but you'll have to use a third party software for all git operations (clone, pull, compare, commit, ...)._
  - Clone repository: Use third party software or command line: `git clone https://github.com/xxx/xxx`
  - Create the project in TweakStyle: [From existing files on your computer](#from-existing-files-on-your-computer)
  - Makes your changes
  - Commit/Push: Use third party software or command line: `git commit` `git push`

### From a remote server (ftp/sftp)
_For now, TweakStyle does not natively support FTP or SFTP. You can use TweakStyle to work on a remote project but you'll have to use a third party software for all ftp operations (get source and push to remote server)._
  - Get source: Use third party software
  - Create the project in TweakStyle: [From existing files on your computer](#from-existing-files-on-your-computer)
  - Makes your changes
  - Push to remote server: Use third party software

## 2. Setup project
### Use embedded static server

TweakStyle is shipped with an embedded static server. It is the default option when creating a new project, and you don't have anything to do to use it.
When opening an html file in the preview, it will automatically starts, on an available port and with root path equals to the project root.
It allows to preview html files seemlessly, without having to wonder about root path or security restriction issues.
But this is a basic static server: It does not supports any configuration files nor server side languages (PHP, Nodejs, Rails, Java).
For thoose, you'll have to use your own local server.

### Use your own local server
  - In the workspace tab, right click on the project and choose "Project settings"
  - Uncheck "Use Embedded static server" and fill in the base url of your local server corresponding to the project root (Example: `http://localhost:8000/myproject/`)
  - Click on OK. Opening a file in the preview will now use your local server and requests will be automatically mapped to your project files. If parts of the requests are not well mapped (in orange instead of blue), you can add a mapping rule using the "[Add to workspace](#from-an-online-website)" tool
  - _Tip: your can also do it when creating the project by clicking on the "Advanced settings" button_

### Work directly on an online website
_TweakStyle allow you to preview stylesheets changes on an online website, though a feature called "CSS Override".
However, for now only CSS files can be overrided and it is not yet possible to preview changes to HTML or Javascript on an online website._

  - Navigates to the website
    - In the right pane, type the url of the website in the url bar and press Enter
    - Navigates to the desired page(s)
    - Requests involved in the display are automatically listed in the left pane
    - You can open each files and edit them. Just click on it and edit. When editing a stylesheet, preview is updated live, while typing.
  - Save / Dump files in the project
    - You can save the changes and/or dump requests to your project
    - Click on the "Save" or "Add to workspace" button (or use Control/Command + S)
    - This will open the "Add to workspace" tool
    - Click on the first arrow of the "To" field and select the project you want to save the file(s) in.
    - Then click on the next arrow(s) to select the directory path inside the project
    - Click on OK to save/dump the file
    - _Tip: You can several requests in bulk by changing the "From" path with wildcards. Click on the parts of the path you want to change into a wildcard._
  - Publish changes to the website
    - For now, TweakStyle does not have any publishing feature, so you'll have to use a thrid party software(^4)
    
If you want to set this as the default for a project, you can set the project host:
  - In the workspace tab, right click on the project and choose "Project settings"
  - Uncheck "Use Embedded static server" and fill in the base url of the online website corresponding to the project root (Example: `http://mywebsite.com/myproject/`)
  - Click on OK. Opening a file in the preview will now open the corresponding url online and requests will be automatically mapped to your project files. If parts of the requests are not well mapped (in orange instead of blue), you can add a mapping rule using the "[Add to workspace](#from-an-online-website)" tool
    
[^4]: We're considering the implementation of a simple FTP publish feature.
  
## 3. Troubleshooting and Feedback

If you get a crash, an error or an unexpected behavior, please [Report a bug](https://feedback.userreport.com/4c0a2f4d-0129-4a8c-88f3-cbbf6052f814/#submit/bug).

If you want to help us to improve TweakStyle, please [Give us feedback](https://feedback.userreport.com/4c0a2f4d-0129-4a8c-88f3-cbbf6052f814/), by voting for the features you would like and posting your ideas.