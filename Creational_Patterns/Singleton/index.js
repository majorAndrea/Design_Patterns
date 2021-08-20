class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class Singleton {
  constructor() {
    // Only instantiate one time.
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

// Get the instance
const logger = new Singleton().getInstance();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New Shopper: ${name} has ${money} in their account.`);
  }
}

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New Store: ${name} has ${inventory.length} items in stock.`);
  }
}

logger.log("starting app...");

const PersonOne = new Shopper("PersonOne", 500);
const ski_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750
  },
  {
    item: "Knit Hat",
    qty: 20,
    price: 5
  }
]);

logger.log("finished config...");

console.log(`${logger.count} logs total`);
logger.logs.map(log => console.log(`   ${log.message}`));
