---
sidebar_position: 0

title: "Part 2"

---

# Player Controller And Character

## Player Controller

Open the **ALS_Player_Controller**.

![img_9.png](img%2Fimg_9.png)

Add two components to it: **Inventory HUD Component** and **Inventory**.

![img_10.png](img%2Fimg_10.png)

![img_11.png](img%2Fimg_11.png)

Configure the inventory parameters: Specify unique identifier (it will be used by the save and load system). Also,
define its size and the size of temporary slots if you intend to use them.

![img_17.png](img%2Fimg_17.png)

Now, add the function call **``Open Inventory``** from the **Inventory HUD Component** to any key. In the example, I
chose the key
"B" because in this Player Controller other keys are already assigned, but you can reassign them.

![img_16.png](img%2Fimg_16.png)

Now you can launch the game and open the inventory.

![img_18.png](img%2Fimg_18.png)

## Character

Find the class **ALS_AnimMan_CharacterBP** and create a child from it. This is desired to avoid mixing the logic of bots
and the player.

![img_8.png](img%2Fimg_8.png)

![img_12.png](img%2Fimg_12.png)

Name the new class as you wish, and then open it.

![img_13.png](img%2Fimg_13.png)

Add the **Notes Component** and **Player Interaction Component** to this character.

![img_21.png](img%2Fimg_21.png)

![img_22.png](img%2Fimg_22.png)

Also, if you are going to use the camera from ALS, you will have to add a **Camera** component to the character.

![img_23.png](img%2Fimg_23.png)

Add a Box Collision Component.

![img_24.png](img%2Fimg_24.png)

Set the collision so that it covers the area where items can be highlighted. The display range of widgets is configured
in the Player Interaction Component, so this area should be slightly larger.

![img_25.png](img%2Fimg_25.png)

Using the components we added, repeat this logic on the Event Tick.

![img_26.png](img%2Fimg_26.png)

Now assign a key to interact with Items.

![img_27.png](img%2Fimg_27.png)

**Remove** the character from the scene, otherwise this whole thing won't work.

![img_29.png](img%2Fimg_29.png)

Add Player Start to the map.

![img_30.png](img%2Fimg_30.png)

![img_31.png](img%2Fimg_31.png)

Open **ALS_GameMode_SP** and in the **Default Pawn** field, add our inherited character.

![img_32.png](img%2Fimg_32.png)

![img_33.png](img%2Fimg_33.png)

Make sure that the **World settings** are also set to this character.

![img_34.png](img%2Fimg_34.png)

You can now start the game and interact with items. How to add new items:
[Create New Inventory Item](..%2F..%2F..%2Ftutorial-basics%2FStep_5_CreateItem.md) /
[Add Pickup Item](..%2F..%2F..%2Ftutorial-basics%2FStep_6_PickupItem.md)

![img_28.png](img%2Fimg_28.png)

If you need references for the Inventory HUD Component and Inventory in your character, which are in the player
component, then add two interfaces to your
character: [Add Interfaces](..%2F..%2F..%2Ftutorial-basics%2FStep_7_AddInterfaces.md).

After adding interfaces, you can set up item drops so that it appears in front of you after
removal: [Drop Item](..%2F..%2F..%2Ftutorial-basics%2FStep_8_DropItem.md).