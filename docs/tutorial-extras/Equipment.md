---
sidebar_position: 3

title: "Equipment Slots"

---

# Equipment Slots

You have the flexibility to add an unlimited number of equipment slots, allowing you to create multiple slots of the
same type. These slots can be positioned anywhere according to your preference. Once the controls are configured, the
gamepad will seamlessly function with the equipment slots.

![img_1.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_1.png)

## Add Slots

Add the necessary number of slots to the "DefaultSlots" array and specify their respective types.
Please note that each slot has its own index, which will be useful when we add equipment slot widgets.

![img.png](..%2FImages_extras%2FEquipmentSlots%2Fimg.png)

## Add Widgets

Open the inventory widget.

![img_2.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_2.png)

All equipment slot widgets should be added to the EquipmentSlotsCanvas. You can nest them within other widgets if
desired, but they must all be located within the EquipmentSlotsCanvas.For demonstration purposes, an example has been
provided to show how slots can be arranged. However, you can remove the Overlay widget and add the slots yourself

![img_3.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_3.png)

:::info
If you haven't added any equipment slots to the DefaultSlots array in the inventory component, everything within the
EquipmentSlotsCanvas will be removed.
:::

It is advisable to set the size of the slot to match the size of the items you intend to place in them. While I haven't
tested how the inventory will behave with items of different sizes, it is generally recommended to ensure consistency in
slot and item sizes for better visual representation and functionality.

Set the slot index to correspond with the index in DefaultSlots within the Inventory component.

![img_4.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_4.png)

## Item Configuration

Open the item blueprint and override the "CanEquip" function.

![img_5.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_5.png)

Now, let's determine if the item can be equipped. Select the type of slots in which it can be equipped and the rotation
in which the item will fit into the slot.

![img_6.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_6.png)

Now you can place this item into an equipment slot.

![img_7.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_7.png)

## Delegate

You can subscribe to the delegate to find out whether an item has been added or removed from any of the equipment
slots. Additionally, you can retrieve all the equipment slots using the "Get Slots"
function.

![img_14.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_14.png)

## Options

In the [Options](Inventory%2FOptions.md), you can choose the option for automatically adding picked-up items to empty
equipment slots.

![img_8.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_8.png)

## Gamepad Support

### Transitions from the main slots to the equipment slots

Open the DA_Equipment file.

![img_9.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_9.png)

In this array, you need to specify from which edge of the inventory and which slots you will transition into the
equipment slots.

![img_10.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_10.png)

![img_11.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_11.png)

### Transitions between equipment slots.

In each equipment slot widget, we need to specify which slot it transitions to when an item is dragged and when there is
no item being dragged.

On the screenshot, when pressing the right button, you transition to Slot 1, which is located on the right. However,
when dragging an item and pressing the right button, you transition to the main inventory slots, specifically Row 5 and
Column 0. But you can also choose automatic searching for empty slots to move the item there.

![img_12.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_12.png)

![img_13.png](..%2FImages_extras%2FEquipmentSlots%2Fimg_13.png)