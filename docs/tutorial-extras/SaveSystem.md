---
sidebar_position: 5

title: "Save And Load"

---

# Save And Load

## Add Component

Add a Save Load Component to any of your actors. For single player games, it can be Player Controller or Player
Character. For multiplayer, it can be Game Mode. In the example, I added it to the Player Controller.

![img.png](..%2FImages_extras%2FSave%2Fimg.png)

Now you can use the **Server Load All** and **Server Save All** functions and bind them to any events.

![img_1.png](..%2FImages_extras%2FSave%2Fimg_1.png)

You can also save and load individual parts, such as only the character's inventory slots or only World Objects, which
include picked up items, items in storage, and interaction components.

![img_2.png](..%2FImages_extras%2FSave%2Fimg_2.png)

Note that if you want to save these parameters separately, they must be located in different save slots. However, you
can still use the Server Save All function and load only the necessary parts.

## Integration with your save system

From the Save Load Component, you can get variables that you can save to your save file, and then load everything from
these variables when loading.

![img_3.png](..%2FImages_extras%2FSave%2Fimg_3.png)

## Preparing Items for Save

- In the **Inventory component**, you should manually add a unique identifier. This identifier should be unique
across all characters with different inventories.

![img_6.png](..%2FImages_extras%2FSave%2Fimg_6.png)

- In each **Storage Component**, only if it is not a Global Storage, a GUID should be generated.

![img_3.png](..%2FImages_extras%2FStorage%2Fimg_3.png)

- If you add an **Actor Interaction Component** somewhere, it must also have a generated GUID.

- If you add a **Scene Interaction Component**, it should also have a generated GUID.

![img_7.png](..%2FImages_extras%2FSave%2Fimg_7.png)

:::tip
**All GUIDs should be generated when the actor has already been added to the scene, not in the blueprint itself.**
:::

:::info

You don't need to generate GUIDs for BP_World_Item.

:::

:::caution

I noticed a small mistake in the first version. If you don't have a GUID variable in the Scene Interaction Component,
you need to open this component, find this variable and check the boxes "Expose On Spawn" and "Instance Editable".

![img_4.png](..%2FImages_extras%2FSave%2Fimg_4.png)

![img_5.png](..%2FImages_extras%2FSave%2Fimg_5.png)

:::



