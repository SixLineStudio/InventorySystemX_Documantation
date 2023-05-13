---
sidebar_position: 3

title: "Storage Component"

---

# Storages

## Storage Component

You can turn any of your actors into a storage by simply adding an AC Storage Component to it.

![img.png](..%2FImages_extras%2FStorage%2Fimg.png)

You can choose the size of the storage and the items that will be stored in it initially. You can also check the Is
Global Storage checkbox, which will make all the chests with
this checkbox have shared slots and items.

![img_1.png](..%2FImages_extras%2FStorage%2Fimg_1.png)

But I recommend changing these parameters after you have added this actor to the scene.

![img_2.png](..%2FImages_extras%2FStorage%2Fimg_2.png)

**After you added this actor to the scene, you should generate a new GUID for it for the proper functioning of the save
system.**

![img_3.png](..%2FImages_extras%2FStorage%2Fimg_3.png)

## Global Storage

To work with global storages, you need to navigate to this directory:

- **``Plugins/Inventory System X C++ Classes/InventorySystemX/Public/Actors``**

And place GlobalStorage onto the scene.

![img_4.png](..%2FImages_extras%2FStorage%2Fimg_4.png)

Now click on this actor on the scene and select the size of the global storage.

![img_5.png](..%2FImages_extras%2FStorage%2Fimg_5.png)

Now we can set any AC Storage Component as a Global Storage. Please note that all other parameters, such as starting
items, will not be taken into account.

![img_6.png](..%2FImages_extras%2FStorage%2Fimg_6.png)