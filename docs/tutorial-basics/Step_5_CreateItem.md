---
sidebar_position: 5

title: "5 : Add New Item"

---

# Add new item

## Create Item Class

Right-click on the Content Browser, hover over the Inventory System X and select 'Item Class' from the dropdown menu.

![img.png](..%2Fimages%2Fstep5%2Fimg.png)

Name it whatever you want. Open it.

![img2.png](..%2Fimages%2Fstep5%2Fimg2.png)

## Configuration

Now, you need to open the Class Defaults tab and fill in all the necessary parameters.

Below, as an example, there is a screenshot of an already prepared item.

![img_1.png](..%2Fimages%2Fstep5%2Fimg_1.png)

The item icon should match the aspect ratio of the item's size.

For example, if you have chosen 3 columns and 2 rows, the aspect ratio of the icon should be 3:2. Examples of
resolutions for such an icon are 1536 x 512, 384 x 128, and 768 x 256. Similarly, if Rows and Columns are equal, such as
1 and 1 or 5 and 5, then the resolution should also be the same. For example, 128 x 128, 512 x 512, and 1024 x 1024.

## Types

![img_2.png](..%2Fimages%2Fstep5%2Fimg_2.png)

Each item can be one of three types: Item, Weapon, Ammo. All types except Weapon can stack. For the Weapon type, the
number of rounds in the magazine is displayed instead of the number of items in the stack.



![img_3.png](..%2Fimages%2Fstep5%2Fimg_3.png)

For the Weapon type, you can choose an Ammo Class. The Ammo Class should be an item of the Ammo type. When reloading,
the rounds are automatically subtracted from the inventory items if they match the type of ammunition for the selected
Weapon item.