---
sidebar_position: 0

title: "Part 3"

---

# Weapons And Animations

## Weapon Base ISX Component

To change the animation state when you select a weapon in shortcuts or equip it through your inventory, you need to add
the **Weapon Base ISX** Component to your character.

![img_35.png](img%2Fimg_35.png)

Now subscribe to the **OnEquip** delegate.

![img_36.png](img%2Fimg_36.png)

![img_37.png](img%2Fimg_37.png)

Create an **Item class** variable and make it **Map**.

![img_38.png](img%2Fimg_38.png)

Add ALS Overlay State as a second variable in the map.

![img_39.png](img%2Fimg_39.png)

Click the compile button to be able to edit the variable.

![img_40.png](img%2Fimg_40.png)

Now add some items. The first variable is the key. In it, the class of the inventory item is selected. The second
variable is the animation state. Now you can find the desired animation state when we feed the object class into it.

![img_41.png](img%2Fimg_41.png)

Connect this logic to the **On Equip** delegate.

![img_44.png](img%2Fimg_44.png)

Now when you select a weapon or item in shortcuts or equip it through the inventory, you can change the animation in
this way.

![img_47.png](img%2Fimg_47.png)

## Controls

An example of choosing shortcuts:

![img_42.png](img%2Fimg_42.png)

An example of hiding a weapon:

![img_43.png](img%2Fimg_43.png)

## Examples Of Using

In this way, you can check whether there are cartridges in the weapon and take them away during the shot.

![img_45.png](img%2Fimg_45.png)

This way you can reload your weapon if your inventory contains the necessary ammo.

![img_46.png](img%2Fimg_46.png)

I also advise you to read more about this component in this article: [Weapon Base Component](..%2FWeaponBase.md).