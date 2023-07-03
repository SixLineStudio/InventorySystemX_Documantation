---
sidebar_position: 5

title: "Run-Time Resizing"

---

In order for the User Interface to change when the inventory size changes, you need to enable "Allow Resize at Runtime"
in the DA_Options.
:::info

If you are not going to resize the inventory in real time, uncheck this box to be able to reposition
items in the inventory widget manually.

:::

![img_3.png](..%2FImages_extras%2FResize%2Fimg_3.png)

![img_2.png](..%2FImages_extras%2FResize%2Fimg_2.png)

For each inventory size, you must create a new element in the "Resizing Settings" array and set the inventory size and
elements position in it. Please note that in order to set the "ImagePadding" to a negative value, it must first be
expanded.

![img_4.png](..%2FImages_extras%2FResize%2Fimg_4.png)

You can resize inventory in real time if you execute "Server Resize Inventory" function.

![img.png](..%2FImages_extras%2FResize%2Fimg.png)

You can also change the inventory size with an item by running the "Server Resize Inventory From Item" function.

![img_1.png](..%2FImages_extras%2FResize%2Fimg_1.png)

Please note that we are feeding an item into the function itself. Also, we do not delete the item after resizing, as
it will be deleted automatically.