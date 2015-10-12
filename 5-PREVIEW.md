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

For now[^overridesupport] TweakStyle does not support Override nor Live Update for other kind of files (HTML, Javascript, Images, ...).
For those kind of files, you'll need to save changes, push your changes (in case of remote server), and refresh the preview (by using the refresh button or by pressing <kbd>⌘</kbd>+<kbd>R</kbd> / <kbd>F5</kbd>)

[^overridesupport]: We plan to implements "Override for all files" and "Reload when saving" in the next couple months
[^browserengine]: TweakStyle browser engine is based on latest Blink (Chrome/Chromium engine)


