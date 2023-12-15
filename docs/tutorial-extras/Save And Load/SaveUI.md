---
sidebar_position: 4


title: "Save And Load UI"

---

# Save And Load UI

![img.png](img%2Fimg.png)

## Add Component

:::caution

This UI works in conjunction with the [Smart Save System](SmartSave.md). Therefore, you need to configure it before
proceeding with
further steps.

:::

You need to add **AC Save Load HUD Component Child** to the **Player Controller** or **HUD**.

![img_1.png](img%2Fimg_1.png)

## BP Save Actor

Place the BP Save actor in the scene. It is located in the folder:
**`/Plugins/InventorySystemX/Content/Modules/SaveAndLoad/Actors/`**

![img_2.png](img%2Fimg_2.png)

In the **Details tab**, you can specify whether to use the item for saving.

![img_3.png](img%2Fimg_3.png)

If you have set up the [interaction system](..%2F..%2Ftutorial-basics%2FStep_4_AddInteractionComponent.md), you can
interact with this actor and save the game.

## Options

To configure certain parameters, such as sounds and text messages, you need to open the **DA Save Load Options** settings
file located at:
**`/Plugins/InventorySystemX/Content/Modules/SaveAndLoad/Data/`**

![img_5.png](img%2Fimg_5.png)

![img_4.png](img%2Fimg_4.png)

## Displayed Data

Open **AC Save Load HUD Component Child.**

![img_6.png](img%2Fimg_6.png)

To modify the text, image, difficulty, and other data written in the save widget, you need to edit these functions. For
instance, you can obtain information from other actors here.

![img_7.png](img%2Fimg_7.png)

![img_8.png](img%2Fimg_8.png)

## Save Custom Data

Open **AC Save Load HUD Component Child.**

If you want to save your data, you should override these two functions: ***Get Global Save Data*** and
***Get Level Save Data***.

![img_9.png](img%2Fimg_9.png)

Here is how I save the character's position on the level.

![img_10.png](img%2Fimg_10.png)

You need to subscribe to the **On Load** delegate in the **Game Mode**, which is located in
the [**AC Save Load Component
**](SmartSave.md) , to
restore the character's position upon loading.

![img_11.png](img%2Fimg_11.png)

## Auto saving

You can call the **Autosave** function anywhere in your code to save the game. This save will be displayed as a separate
item in the load menu.

![img_12.png](img%2Fimg_12.png)

![img_13.png](img%2Fimg_13.png)

## Appearance

If you want to make visual changes, such as changing the font or size of the save widget, you can do so in **WB Save
Button**.

![img_15.png](img%2Fimg_15.png)

![img_16.png](img%2Fimg_16.png)