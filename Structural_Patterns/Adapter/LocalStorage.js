const { writeFile, existsSync, readFileSync, unlink } = require("fs");

// Create a Local Storage-like adapter for using it in node js env.
class LocalStorage {
  constructor() {
    if (existsSync("localStorage.json")) {
      console.log("Loading items from localStorage.json");
      const txt = readFileSync("localStorage.json");
      this.items = JSON.parse(txt);
      return;
    }

    this.items = {};
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;

    writeFile("localStorage.json", JSON.stringify(this.items), error => {
      if (error) {
        console.error(error);
      }
    });
  }

  clear() {
    this.items = {};
    unlink("localStorage.json", () => {
      console.log("Local Storage cleared!");
    });
  }
}

module.exports = new LocalStorage();
