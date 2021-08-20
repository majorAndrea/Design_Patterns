class Shop {
  constructor(menu) {
    this.menu = menu;
  }

  printMenu() {
    // If the menu has more data, print the new data.
    while (this.menu.hasNext()) {
      this.menu.next();
    }
  }
}

class Iterator {
  constructor(menu) {
    this.menu = menu;

    // Return the appropriate Iterator instance for
    // the type of the menu to be used as loop.
    switch (typeof this.menu) {
      case "string":
        return new StringIterator(this.menu);

      case "object":
        if (Array.isArray(this.menu)) {
          return new ArrayIterator(this.menu);
        }
        return new ObjectIterator(this.menu);
    }
  }
}

class ArrayIterator {
  constructor(menu) {
    this.menu = menu;
  }

  hasNext() {
    // If length is true, continue to iterate over the array.
    return this.menu.length;
  }

  next() {
    // Shift the first value out to be printed.
    console.log(this.menu.shift());

    // Aside: This will change the original array, but I think is fine 
    // for this demonstration of my implementation of the iterator pattern.
  }
}

class ObjectIterator {
  constructor(menu) {
    this.menu = menu;
    this.index = 0;
  }

  hasNext() {
    // Get the value of the object at the current index.
    // If none, then the iteration will stop.
    return Object.values(this.menu)[this.index];
  }

  next() {
    // Print out the key and the value at the current index.
    console.log(
      `${Object.keys(this.menu)[this.index]} : ${
        Object.values(this.menu)[this.index]
      }`
    );

    // Increase the index for the next iteration.
    this.index++;
  }
}

class StringIterator {
  constructor(menu) {
    this.menu = menu;
    // Make an array out of the string by splitting the words
    // by the comma and remove the white space.
    this.items = menu.split(",").map((item) => item.trim());
  }

  hasNext() {
    // If length is true, continue to iterate over the array.
    return this.items.length;
  }

  next() {
    // Pop out the last entry of the array to be printed.
    console.log(this.items.pop());
  }
}

class Menu {
  constructor(menu) {
    this.menu = new Iterator(menu);
    return this.menu;
  }
}

/*

  Usage examples --->
  
*/

const firstMenu = new Menu(["Item 1", "Item 2", "Item 3", "Item 4"]);
const secondMenu = new Menu({
  first: "Object 1",
  second: "Object 2",
  third: "Object 3",
  fourth: "Object 4",
});
const thirdMenu = new Menu("Thing One, Thing Two, Thing Three, Thing Four");
const newShop = new Shop(thirdMenu);

newShop.printMenu();
