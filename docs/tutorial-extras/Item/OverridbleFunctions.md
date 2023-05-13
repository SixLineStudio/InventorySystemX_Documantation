---
sidebar_position: 1

title: "Overridable Functions [Use, ...]"

---

# Overridable Functions

In each item, there are three overrideable functions.


![img.png](..%2F..%2FImages_extras%2Fimg.png)

Each of these functions checks the information every time you want to perform specific actions. For example, if you want
to use a healing item, but you already have 100% health, you can check for HP in the canUse function, and then the "Use"
button won't appear if you have the maximum number of health points. Or if you want to discard a quest item before it
has been used as part of the storyline, you can block the ability to discard it until that point in the story has been
reached.

## Can Destroy

Can Destroy - Determines whether the item can be discarded.

The screenshot shows an example of logic where we get a reference to the character and check which chapter we are
currently on. If the chapter is greater than or equal to 4, then the item can be discarded; otherwise, it cannot be
discarded.

![CanDestroy.png](..%2F..%2FImages_extras%2FCanDestroy.png)

## Can Use

Can Use - Determines whether the item can be used. If it can be used, a corresponding button will appear in the context
menu when the item is clicked. You can choose any icon and name for this button.

![CanUse.png](..%2F..%2FImages_extras%2FCanUse.png)


![CanUse2.png](..%2F..%2FImages_extras%2FCanUse2.png)

## On Use Item

On Use Item - defines the logic that will be executed when the "Use" button is clicked. You can also define whether the
item will be removed after use or not.

![OnUse.png](..%2F..%2FImages_extras%2FOnUse.png)

The screenshot below shows an example of logic where we look for a free slot in the shortcut bar, and if it exists, we
add the item to it and then select it. If the item is already in the shortcut bar, we select it instead of adding it
again.

![OnUse2.png](..%2F..%2FImages_extras%2FOnUse2.png)
