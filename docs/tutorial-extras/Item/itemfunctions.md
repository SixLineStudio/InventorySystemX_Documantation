---
sidebar_position: 3

title: "Functions"

---

# Functions

Each inventory item is an object of the UObject type. With the help of many functions in the inventory component, we can
obtain a reference to this item. But what should we do with it?

![img_2.png](Images%2Fimg_2.png)

For example, we obtained a reference to an item using this method. Having the reference, we can extract the necessary
information from this item. For instance, the number of rounds or items in a stack, whether this item is a weapon or
ammunition. Additionally, we can determine the class of ammunition that we can use to search for rounds in the inventory
for the weapon.

Here is a useful list of functions that you can call from an item:

![img_1.png](Images%2Fimg_1.png)

But how else can we get a link to an inventory item? Here are examples. These functions can be called from the inventory
component:

![img_3.png](Images%2Fimg_3.png)

Also, from the delegates:

![img_4.png](Images%2Fimg_4.png)

What actions can we take when we have a reference to an element? We can remove it, change the amount of item or ammo.
Here are the functions that will help you with this:

![img_5.png](Images%2Fimg_5.png)

![img_6.png](Images%2Fimg_6.png)

![img_8.png](Images%2Fimg_8.png)

But is it really necessary to have a reference to the item if we simply want to remove one item of a certain class?
Absolutely not. There are numerous functions that can help us determine how many items of a certain class are left in
the inventory and which one we need to remove.

I will provide a list of functions that you can use:

![img_7.png](Images%2Fimg_7.png)

