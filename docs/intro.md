---
sidebar_position: 1
---

# Inventory System Documentation

The Inventory System consists of three key components and several additional components that work together to provide a
complete inventory management solution. The three key components are:

### Key components

- **``Inventory Component``** - This is a **C++** class that serves as the backbone of the Inventory System. It is
  responsible
  for
  managing the contents of the player's inventory and exposing its functionality to the game code. The Inventory
  Component
  is attached to the player character or the player controller. The Inventory Component stores information about the
  primary and additional inventory slots, where their sizes can be configured. Additional slots serve as temporary
  storage where items can be placed during inventory reorganization or to discard items. They can be disabled if
  desired.

- **``Inventory HUD Component``** - This is a **Blueprint** class that is responsible for displaying the contents of the
  player's
  inventory on the screen. It works in conjunction with the Inventory Component and provides an intuitive way for the
  player to interact with their inventory. The Inventory HUD Component is highly customizable and can be extended to
  support new features.

- **``Player Interaction Component``** - This is a **Blueprint** class that enables the player to interact with objects
  in
  the
  game
  world. It works by detecting when the player is in range of an object that has an **Actor Interaction Component**
  attached
  to it. Player Interaction Component includes client-server functions that ensure all interactions work correctly in
  multiplayer.

### Additional components

In addition to the three key components, the Inventory System also includes several additional components that provide
additional functionality. These include:

- **``Storage Component``** - It is implemented in **C++** and inherited in **Blueprints** for integration with
  interaction systems. The Storage Component is
  used to manage the storage of items in the game world, including determining how many slots are available and which
  items are currently stored in those slots.
    - The Storage Component can also be turned into a Global Storage. This means
      that all the chests with Global Storage will have shared slots and items. In other words, any item added to one
      chest
      with a Global Storage will be
      accessible from any other chest with the same component. This is useful for creating a shared
      inventory system across multiple locations.

- **``Actor Interaction Component``** - This is a **Blueprint** class that can be added to any actor. Events are called
  upon interaction, to
  which you can add any logic, such as reactions of the item to the interaction. It is already added to **World Item**,
  **Storage Component**, and **Scene Interaction Component**. You can choose an additional interaction type, where an
  inventory
  opens up, and you must select the correct item for interaction.
- **``Scene Interaction Component``** - Similar to the **Actor Interaction Component**, but has physical coordinates in
  the world,
  which allows for more precise placement of the interaction point. Unlike the Actor Interaction Component, **you can
  add
  multiple Scene Interaction Components to a single actor**.
- **``Save And Load Component``** - This **Blueprint** class provides functions for saving and loading the contents of
  the
  inventory
  and the entire world, including Storage Components, Interaction Components, and World Items. It can be added anywhere,
  but it is recommended to add it to the GameMode.

## Actors

The inventory system also includes several actors:

- **``World Item``** - This is a **Blueprint** class used to display an item in the game world that can be picked up. It
  can be
  configured to allow the player to inspect the item before picking it up, or to only allow inspection without the
  ability to pick it up.
- **``Global Storage``** is a **C++** class that stores information about slots and items, which can be accessed by
  enabling the
  ***IsGlobalStorage*** checkbox in the **Storage Component**. You can choose the size of the storage. Only one Global
  Storage can
  be placed on the map.

## Inventory Component

The Inventory Component is the core of the Inventory System and is responsible for managing the contents of the player's
inventory. It provides a set of functions that can be used to add, remove, and query items in the inventory.

The following table lists some of the key functions provided by the Inventory Component:

| Function	                           | Description                                                                         |
|-------------------------------------|-------------------------------------------------------------------------------------|
| Server AddItem                      | Adds an item to the inventory                                                       | 
| Server Remove Item By Ref           | Removes an item from the inventory                                                  | 
| Find Item In Inventory              | Finds and returns the first instance of an item of a specific type in the inventory | 
| Get Number Of Items                 | Returns the number of items of a specific type in the inventory                     | 
| Can Add Item Count                  | Returns whether a certain amount of an item can be added to the inventory           |
| Server Remove Items Of Class        | Removes items of a specific class from the inventory                                |
| Get All Items Of Class              | Finds and returns all items of a specific class in the inventory                    |
| Get Selected Shortcut Data          | Returns information about the currently selected shortcut item                      |
| Server Set Selected Shortcut Amount | Sets the amount of the currently selected shortcut item                             |
| Server Add Selected Shortcut Amount | Adds or decreases the number of the currently selected shortcut item.               |
| Is Shortcut Item                    | Checks if a specified item is a shortcut item                                       | 

  