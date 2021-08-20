class Shopper {
  constructor(name = "unnamed person") {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }

  // Clone the Shopper Class.
  clone() {
    const prototype = Object.getPrototypeOf(this);
    const cloned = Object.create(prototype);

    cloned._name = this._name;
    cloned._shoppingList = [...this._shoppingList];

    return cloned;
  }
}

const shopper = new Shopper();

shopper.addItemToList("camping knife");
shopper.addItemToList("tent");
shopper.addItemToList("backpack");
shopper.addItemToList("map");

const personOne = shopper.clone();
personOne.name = "Person One";
personOne.addItemToList("slingshot");

const personTwo = shopper.clone();
personTwo.name = "Person Two";
personTwo.addItemToList("reading light");

console.log(`${personOne.name}: ${personOne.shoppingList}`);
console.log(`${personTwo.name}: ${personTwo.shoppingList}`);
