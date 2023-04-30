---
sidebar_position: 2

title: "2 : Copy Plugin To Project"

---

# Copy plugin to project folder

##  Console Command

All Engine plugins are located in the **Engine** folder. To move all files to the **Plugin** folder in your project directory,
open the console and enter:
```js
isx.CopyInventoryToProjectFolder
```
The editor may freeze for a few seconds, which is normal.
After that, close your project and reopen it.

![Screenshot 2023-04-30 145944.png](..%2Fimages%2Fstep2%2FScreenshot%202023-04-30%20145944.png)

![Screenshot 2023-04-30 150049.png](..%2Fimages%2Fstep2%2FScreenshot%202023-04-30%20150049.png)

![Screenshot 2023-04-30 150148.png](..%2Fimages%2Fstep2%2FScreenshot%202023-04-30%20150148.png)
## To copy the plugin files manually

Unreal Engine stores all plugins at the following locations:

- ``C:\Program Files\Epic Games\UE_[version]\Engine\Plugins on Windows``

- ``/Users/Shared/Epic Games/UE_[version]/Engine/Plugins on macOS``