---
sidebar_position: 2


title: "Interaction Component"

---

# Interaction Component Custom Save Data

:::danger

At the moment, this only works if you've chosen to have the inventory open to select an interaction item, and then
you've made a successful interaction. In a future update will be made for any interactions.

:::

:::caution

Don't forget to generate the GUID in the component when it is placed on the map.

:::

## Custom Save Data

In order to store some data in an interaction component, you must add the necessary variables to this structure.

![img_13.png](..%2F..%2FImages_extras%2FSave%2Fimg_13.png)

:::info

Such data, whether the desired item for interaction was selected, is saved automatically.

:::

## Example

I added one variable to keep track of whether the door is open or not.

![img_14.png](..%2F..%2FImages_extras%2FSave%2Fimg_14.png)

After I open or close the door, I call the "Set Custom Save Data" function in each of the door components. There are two
handles, so I pass it to both components at once.

![img_15.png](..%2F..%2FImages_extras%2FSave%2Fimg_15.png)

Now, when loading, if there was a successful interaction, I set the door to the open or closed position.

![img_16.png](..%2F..%2FImages_extras%2FSave%2Fimg_16.png)

You can see for yourself how this is implemented in the BP_Door blueprint.