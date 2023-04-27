---
sidebar_position: 1
---

# Inventory System Documentation

The Inventory System consists of three key components and several additional components that work together to provide a
complete inventory management solution. The three key components are:

- **``Inventory Component``** - This is a **C++** class that serves as the backbone of the Inventory System. It is
  responsible
  for
  managing the contents of the player's inventory and exposing its functionality to the game code. The Inventory
  Component
  is attached to the player character or the player controller and works seamlessly with other Unreal Engine components.

- **``Inventory HUD Component``** - This is a **Blueprint** class that is responsible for displaying the contents of the
  player's
  inventory on the screen. It works in conjunction with the Inventory Component and provides an intuitive way for the
  player to interact with their inventory. The Inventory HUD Component is highly customizable and can be extended to
  support new features.

- **``Player Interaction Component``** - This is a **Blueprint** class that enables the player to interact with objects
  in
  the
  game
  world. It works by detecting when the player is in range of an object that has an Actor Interaction Component attached
  to it. The Player Interaction Component can be customized to support a variety of interaction types, such as picking
  up
  items, opening doors, or activating switches.

In addition to the three key components, the Inventory System also includes several additional components that provide
additional functionality. These include:

- **``Storage Component``** - This is a **C++** and **Blueprint** class that manages the storage of items in the
  storage. It is responsible for keeping track of the available slots in the storage and storing items in those slots.

## Inventory Component

The Inventory Component is the core of the Inventory System and is responsible for managing the contents of the player's
inventory. It provides a set of functions that can be used to add, remove, and query items in the inventory.

The following table lists some of the key functions provided by the Inventory Component:

| Function	                          | Description                                                                         |
|------------------------------------|-------------------------------------------------------------------------------------|
| `Server_AddItem`                   | Adds an item to the inventory                                                       | 
| `Server_RemoveItemByRef`           | Removes an item from the inventory                                                  | 
| `FindItemInInventory`              | Finds and returns the first instance of an item of a specific type in the inventory | 
| `GetNumberOfItems`                 | Returns the number of items of a specific type in the inventory                     | 
| `Server_RemoveItemsOfClass`        | Removes items of a specific class from the inventory                                |
| `GetAllItemsOfClass`               | Finds and returns all items of a specific class in the inventory                    |
| `GetSelectedShortcutData`          | Returns information about the currently selected shortcut item                      |
| `Server_SetSelectedShortcutAmount` | Sets the amount of the currently selected shortcut item                             |
| `Server_AddSelectedShortcutAmount` | Adds or decreases the number of the currently selected shortcut item.               |
| `IsShortcutItem`                   | Checks if a specified item is a shortcut item                                       | 

