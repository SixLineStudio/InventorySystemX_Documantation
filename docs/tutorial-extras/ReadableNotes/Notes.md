---
sidebar_position: 1

title: "Integration And Note Creation"

---

## Add Notes Component

Open your character's blueprint and add **AC Notes Component** to it.

![img.png](img%2Fimg.png)

## Create a note

First, you need to create a new data asset. To do this, right-click in the content browser, and in the **Miscellaneous**
tab, select the **Data Asset** option.

![img_1.png](img%2Fimg_1.png)

In the window that appears, choose **PDA_NoteText**.

![img_2.png](img%2Fimg_2.png)

Open the newly created file.
Add the required number of pages to the Pages array and fill them with the text that you want to display in your note.

![img_3.png](img%2Fimg_3.png)

Select the tab where your note will appear after being read in the widget that displays all the notes. If you don't want
the note to appear there, simply choose "None."

Also, choose a name for the note to display it in the list of notes.

![img_4.png](img%2Fimg_4.png)

Select mesh to visually display your note when you place it on the map.

![img_5.png](img%2Fimg_5.png)

Here you can select the mesh that will be displayed in the background of your note. Set its position, rotation and
scale.
You can also choose for this mesh to occupy either the entire first or last pages of your note.
![img_6.png](img%2Fimg_6.png)

## Place a note on the map

Drag and drop the BP_ReadableNote onto the map.

![img_7.png](img%2Fimg_7.png)

In the Details tab, choose the Data Asset you created for the note. Choose whether the item should be destroyed after
reading.

![img_8.png](img%2Fimg_8.png)

Done. Now you can interact with the note and read it.

![img_9.png](img%2Fimg_9.png)