---
sidebar_position: 7

title: "7 : Add Interfaces"

---

# Add interfaces

In order to get links to our components in the character from the Player Controller that we added, we need to add
several interfaces to our class.

## Inventory System Interface

- Open your character Blueprint.
- Go to the "Class Settings" tab (located in the top right corner of the Blueprint window).
- Scroll down to the "Interfaces" section and click on the "Add" button next to it.
- Select the "IInventorySystemInterface" interface from the dropdown list.
- Click on the "Compile" button in the top of the Blueprint window to save the changes.

![img.png](..%2Fimages%2Fstep7%2Fimg.png)

- Go to the "My Blueprint" tab where all your class functions and variables are located.
- Under the "Interfaces" category, right-click on the "On Inventory Component Initialized" function and select "
  Implement
  Event" from the context menu.

![img_1.png](..%2Fimages%2Fstep7%2Fimg_1.png)

Record the return value of this event into a variable. This will be useful for us in the future.

![img_2.png](..%2Fimages%2Fstep7%2Fimg_2.png)

## Inventory HUD Interface

Repeat the same steps as with the first interface, but with the "IInventoryHUD" interface.

![img_3.png](..%2Fimages%2Fstep7%2Fimg_3.png)

## Explanations

Once you have obtained references to the Inventory Component and Inventory HUD Component in your character, you can call
methods from these components.

For example, you can open the inventory or call the reload function of a weapon. In more detail, we will consider the
methods of these components in the following sections.

We can also subscribe to dispatchers, such as On Shortcut Item Selected or others.
