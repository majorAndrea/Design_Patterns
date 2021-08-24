class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.nextStorage = null;
  }

  // Find item in the inventory
  lookInLocalInventory(itemName) {
    const foundItem = this.inventory.find(
      item => item.name.toLowerCase() === itemName.toLowerCase()
    );
    return foundItem || null;
  }

  // Set the next storage to be recursively search
  setNextStorage(storage) {
    this.nextStorage = storage;
  }

  find(itemName) {
    const foundItem = this.lookInLocalInventory(itemName);

    if (foundItem) {
      return {
        name: foundItem.name,
        qty: foundItem.qty,
        location: this.name,
        deliveryTime:
          this.deliveryTime === 0 ? "now" : `${this.deliveryTime} day(s)`
      };
    } else if (this.nextStorage) {
      // Recursively search in the next storage.
      return this.nextStorage.find(itemName);
    } else {
      return `We do not have ${itemName}`;
    }
  }
}

module.exports = Storage;
