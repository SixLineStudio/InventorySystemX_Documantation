---
sidebar_position: 1

title: "Appearance"

---

# Widget

The main inventory widget is located in this directory:

- **``/Plugins/Inventory System X Content/InventorySystemX/UMG/Inventory/``**

![img.png](..%2F..%2FImages_extras%2FAppearance%2Fimg.png)

:::caution

In version 1.3 it was possible to change the size of the inventory in real time, so some changes that you can make in
the widget will not work. If you are going to use real-time inventory resizing, then you can change the options in this
function where you select the inventory size and set display options.

![img_8.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_8.png)

If you are not going to change the size of the inventory, then you can remove this function and change all the
parameters in the widget itself.

:::

## Size

Click on the slots widget and choose the desired width and height of the inventory. These parameters only affect the
displayed size of the inventory
grid in the widget. If you want to actually change the size of the inventory, change these parameters in the inventory
component.

![img_1.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_1.png)

Now open the **[Options file](Options)**    and change these two parameters to the desired values:

![img_2.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_2.png)

- **Inventory Slot Size** - size of inventory slot cell.

- **Slot Offset** - offset between slots.

To apply the settings to the slots, go back to the inventory widget and modify one of the slot parameters, for example,
add one to the width, and then return it back.

![img_3.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_3.png)

![img_4.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_4.png)

## Location

I recommend changing the position of only these two elements, but if you know what you need, you can also change others.

![img_5.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_5.png)

The Anchors of the HorizontalBox_Inventory element are attached to the top center point, but the inventory itself is
offset from it. This is done so that when you open the storage, it can automatically be centered on the
screen.

![img_6.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_6.png)

## Slots Background

I added a case image to the background of the slots, but to position it in the center, I had to input negative values
in the Padding. To do this, you need to expand this variable and set each value individually, otherwise, negative
numbers will not be accepted.

![img_7.png](..%2F..%2FImages_extras%2FAppearance%2Fimg_7.png)