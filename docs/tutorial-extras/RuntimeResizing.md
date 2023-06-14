---
sidebar_position: 5

title: "Run-Time Resizing"

---

You can resize inventory in real time if you execute "Server Resize Inventory" function.

![img.png](..%2FImages_extras%2FResize%2Fimg.png)

You can also change the inventory size with an item by running the "Server Resize Inventory From Item" function.

![img_1.png](..%2FImages_extras%2FResize%2Fimg_1.png)

Please note that we are feeding an item into the function itself. Also, we do not delete the item after resizing, as
it will be deleted automatically.

Now you need to set the position of the inventory, the size, the location of some widgets, the background image and its
location.
For each size, we have to do it manually. This is not the most convenient way, but I did not think of another.
For each size, we create a separate element and feed it into an array.
This function is located in the evnt graph in the AC Inventory HUD Component. For each size, we create a separate
element and feed it into an array.

![img_8.png](..%2FImages_extras%2FAppearance%2Fimg_8.png)