---
sidebar_position: 3

title: "Tabs"

---

# Tabs

## Add Tab

Open the WB_TabSwitcher.

![img.png](..%2FImages_extras%2FTabs%2Fimg.png)

Move any widget of your choice that you want to place in a tab to the WidgetSwitcher.

![img_2.png](..%2FImages_extras%2FTabs%2Fimg_2.png)

Click on the menu widget and add a new element to the Tabs array. Add an image and text according to your preference.
The Widget Index should correspond to the ordinal number in the WidgetSwitcher hierarchy so that this tab opens the
desired widget for you.

![img_1.png](..%2FImages_extras%2FTabs%2Fimg_1.png)

![img_3.png](..%2FImages_extras%2FTabs%2Fimg_3.png)

## Setting control for in tab widget

Open your widget. Override the **On Key Down** function and add the **Tab Switcher Inputs** function to it.

![img_4.png](..%2FImages_extras%2FTabs%2Fimg_4.png)

![img_6.png](..%2FImages_extras%2FTabs%2Fimg_6.png)

Override the **On Mouse Button Down** function and add the **Close Tab Switcher On Right Mouse** function to it.

![img_7.png](..%2FImages_extras%2FTabs%2Fimg_7.png)

![img_5.png](..%2FImages_extras%2FTabs%2Fimg_5.png)

### Optimization

Add the **I_TabWidgetInterface** to your widget.

![img_8.png](..%2FImages_extras%2FTabs%2Fimg_8.png)

Using the **Get Tab Switcher Widget** function, assign the **Tab Switcher Widget** to a variable.

![img_9.png](..%2FImages_extras%2FTabs%2Fimg_9.png)

Now, add this variable to the functions you previously added.

![img_10.png](..%2FImages_extras%2FTabs%2Fimg_10.png)

![img_11.png](..%2FImages_extras%2FTabs%2Fimg_11.png)

This will allow you to avoid searching for the Tab Switcher Widget every time you switch tabs and instead directly
access it through the variable.