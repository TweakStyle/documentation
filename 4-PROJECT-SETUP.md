## Project setup

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
    - For now, TweakStyle does not have any publishing feature, so you'll have to use a thrid party software[^ftppublish]
    
If you want to set this as the default for a project, you can set the project host:
  - In the workspace tab, right click on the project and choose "Project settings"
  - Uncheck "Use Embedded static server" and fill in the base url of the online website corresponding to the project root (Example: `http://mywebsite.com/myproject/`)
  - Click on OK. Opening a file in the preview will now open the corresponding url online and requests will be automatically mapped to your project files. If parts of the requests are not well mapped (in orange instead of blue), you can add a mapping rule using the "[Add to workspace](#from-an-online-website)" tool
    
[^ftppublish]: We're considering the implementation of a simple FTP publish feature.
