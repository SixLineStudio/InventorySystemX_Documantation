---
sidebar_position: 0

title: "Integration With Weapon Systems"

---

# Integration With Weapon Systems

## Weapon Base Component

To simplify the integration of the inventory with the weapon systems, a special component called "WeaponBase_ISX" was
created. It contains only one delegate, which triggers upon weapon equip or unequip, along with useful functions.

There are two ways to use it:

- Inherit from it.

![img_2.png](img%2Fimg_2.png)

- Add it to the character.

![img_1.png](img%2Fimg_1.png)

Inheriting from it provides more flexibility, for example, you can override functions like Can Fire and Can Reload if
you are not satisfied with their default implementations.

![img_3.png](img%2Fimg_3.png)

## Delegate

When selecting a weapon from a shortcut or equipping it through the context menu in the inventory, the **``On Equip``**
delegate
is triggered. It also triggers when you discard the equipped weapon.

![img.png](img%2Fimg.png)

## Functions

### Reload

It deducts the necessary amount of ammunition from the inventory if available and adds it to the weapon's clip.

![img_4.png](img%2Fimg_4.png)

### Remove Ammo

It deducts ammunition from the weapon's magazine. You can use it when you fire.

![img_5.png](img%2Fimg_5.png)

### Hide / Show Weapon

This function either removes the equipped weapon or adds it back. Additionally, when used, the OnEquip delegate is
triggered.

![img_6.png](img%2Fimg_6.png)

### Get Equipped Item

It returns the weapon item if it is equipped.

![img_7.png](img%2Fimg_7.png)

### Get Inventory Component

It returns the inventory component. It can be overridden.

![img_8.png](img%2Fimg_8.png)

### Can Reload

It returns true if the clip is not full and there is ammunition in the inventory available for reloading. It can be
overridden.

![img_9.png](img%2Fimg_9.png)

### Can Fire

It returns true if there is a sufficient number of ammo in the clip. It can be overridden.

![img_10.png](img%2Fimg_10.png)

Here's an example of how you can override this function:

![img_11.png](img%2Fimg_11.png)

## Tips

### How to get the amount of ammunition for UI

Ammo in a weapon clip:

![img_18.png](img%2Fimg_18.png)

Total number of ammo in inventory:

![img_19.png](img%2Fimg_19.png)

### How I implemented adding weapons to hands

You can see how I implemented a weapon component (AC_WeaponComponent) using this component.

I have created a data table that contains the inventory item class and the weapon actor class.

![img_14.png](img%2Fimg_14.png)

In the weapon component,
I have created a function that takes the inventory item class as input and returns the weapon actor class.

![img_15.png](img%2Fimg_15.png)

Upon the triggering of the OnEquip delegate, I compare the inventory item class using this function and obtain the
weapon actor class.

![img_12.png](img%2Fimg_12.png)

![img_13.png](img%2Fimg_13.png)

![img_16.png](img%2Fimg_16.png)


Afterward, I spawn the required weapon from this class and attach it to the socket.

![img_17.png](img%2Fimg_17.png)