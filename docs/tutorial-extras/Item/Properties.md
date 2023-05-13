---
sidebar_position: 1

title: "Properties"

---

# Properties

## Properties Array

You can add any float variables to the item, such as damage, reload speed, or healing, and read them when you need to.

To do this, create new variables in the Properties array and give them suitable names.

To get these variables from the item, you need to call the Get Property function from the item object.

The screenshot below shows examples where we get a reference to the item and retrieve the corresponding property from it
by the property name.

![img.png](..%2F..%2FImages_extras%2FProperties%2Fimg.png)

## Main Property

You can also use the Main Property variable, which will be more convenient if you don't need more than one variable in
the item.

## Socket

The Socket variable can be used to specify the name of a socket or bone to which the item will be attached if you want
to add logic for equipping the item on a character. For example, a socket to which a pistol or rifle will be attached.

## Additionally

You can also add your own variables of any type, as in any other blueprint, in order to get them, you will need to cast
on this item.

