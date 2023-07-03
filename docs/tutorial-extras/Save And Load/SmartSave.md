---
sidebar_position: 1


title: "Smart Save And Load"

---

# Smart Save And Load

This is a more advanced version of saves that allows you to move between levels and everything that you have changed on
one level will be saved when you leave it and come back. There is also an additional function to travel to another level.

:::caution
**These saves do not work in multiplayer, but you can change them for yourself to make it work.**
:::

## Add Component

Add a Save Load Component to **Game Mode**.

![img.png](..%2F..%2FImages_extras%2FSave%2Fimg.png)

Subscribe to the On Load delegate, this will allow you to restore the data you saved in Custom Save Data after the game
is loaded. For example, the position of the character.

![img_8.png](..%2F..%2FImages_extras%2FSave%2Fimg_8.png)

## Functions

Here is a set of functions that you can use anywhere.

![img_9.png](..%2F..%2FImages_extras%2FSave%2Fimg_9.png)

## Custom Save Data

You can add your own variables to a custom save data and also save them when saving, and then after loading or
traveling, you can restore this data.

![img_10.png](..%2F..%2FImages_extras%2FSave%2Fimg_10.png)

To do this, go to the folder indicated in the screenshot and add the variables you need to the desired structure.

![img_11.png](..%2F..%2FImages_extras%2FSave%2Fimg_11.png)

![img_12.png](..%2F..%2FImages_extras%2FSave%2Fimg_12.png)