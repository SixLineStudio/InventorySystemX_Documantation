---
sidebar_position: 8

title: "8 : Drop Item"

---

# Drop Item

Currently, when we discard an item, it just gets deleted and its physical copy doesn't appear on the scene.

To make the discarded item appear on the scene, we need to implement the "On Discard Item" event in the interface in our
character.

Please refer to the previous guide ( [Step 7: Add Interfaces](Step_7_AddInterfaces.md) ) if you haven't implemented
the "I Inventory System Interface" in your
character.

First, let's implement the On **``Discard Item event``** in character.

![img.png](..%2Fimages%2Fstep8%2Fimg.png)

Now, call the function **``Server Spawn World Item``** from the variable that stores the inventory component. We
obtained it
in the previous chapter.

Connect it to the **``On Discard Item event``** as shown on the screenshot.

In the ***Spawn Location*** and ***Spawn Rotation*** fields, you can input any values. The screenshot shows an example
function that
spawns an item one meter in front of the character and the Rotation is randomly generated.

![img_1.png](..%2Fimages%2Fstep8%2Fimg_1.png)

## Congratulations

Congratulations, you have completed the basic guide to implementing an inventory system into your project. Everything
should work fine, but if you encounter any difficulties, feel free to ask for help on our [**Discord Server**](https://discord.gg/tzjEdvcb) or send me
a [**direct message**](https://discordapp.com/users/Shank#2410) on Discord. You can also contact me via email at **m19tes@gmail.com**. 