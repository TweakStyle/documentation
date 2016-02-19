## Preview

### Navigating

The preview pane lets you navigate like in a browser[^browserengine].
To navigate, you can either type an url in the address bar and press <kbd>Enter</kbd> or open a file from the workspace.
When opening a file from the workspace, the preview will browse an URL that depends on your [Project setup](#project-setup). It defaults to the embedded local static server.

### Request mapping & Override

When navigation occurs, a new [Code tab](#code-tab) is opened in the left side, with the files involved in the previewed page.
TweakStyle tries to map the requests to your project files. All the files successfully mapped, are colored in blue while others remain in orange.
At the same time, Stylesheets (usually `.css` files) are Overridden with the resolved local files and synced with the code tab.
This means that the preview is updated live and instantly:
- When loading the page (may occasionally cause a very short blinking)
- When local stylesheet files change on the file system
- When changing a stylesheet in the code pane (while typing)

Since v0.9.0, TweakStyle supports Override for all kind of files (HTML, Javascript, Images, ...). But Live Update without reloading is only available for Stylesheets. 
You'll have to save the changes (<kbd>Ctrl</kbd>+<kbd>S</kbd> / <kbd>⌘</kbd>+<kbd>S</kbd>) and refresh preview in order to see the changes applied.
If the _Auto Reload_ feature of the preview is toggled on, it will automatically reload on save.

[^browserengine]: TweakStyle browser engine is based on latest Blink (Chrome/Chromium engine)


