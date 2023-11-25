---
sidebar_position: 0

title: "Part 1"

---

# Create A Project

## Create A New Project

Create a new project in ALS version 5.0 (the latest available at the time of publication). If there are newer versions,
create them. If you already have a project, you can proceed to the next step.

![img.png](img%2Fimg.png)

![img_1.png](img%2Fimg_1.png)

## Switch Unreal Engine Version

The marketplace rules do not allow updates for engine plugins on old versions. Only the latest three versions are
supported. Therefore, you need to change the engine version in the ALS project. I recommend getting the latest
information on updates from the Discord community if you do not want to use the latest engine versions.

![img_2.png](img%2Fimg_2.png)

![img_3.png](img%2Fimg_3.png)

As of now, the latest engine version is 5.3. Therefore, you can switch the engine version in the project to be within
the range of 5.1 to 5.3.

![img_4.png](img%2Fimg_4.png)

This may take some time.

## Enable Plugin

Enable the **Inventory System X** plugin in the project. If you can't find it in the search, make sure you have
downloaded
it for this engine version.

![img_5.png](img%2Fimg_5.png)

After enabling the plugin, restart the project.

![img_6.png](img%2Fimg_6.png)

Now, enter the command **``isx.CopyInventoryToProjectFolder``** in the console to move the plugin from the engine folder
to
the project folder. This may cause a slight freeze while copying. After that, **restart the project**. This is
necessary for the engine to recognize the new files in the project.

![img_7.png](img%2Fimg_7.png)
