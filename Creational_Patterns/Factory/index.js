class Person {
  constructor(name = "unnamed person") {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Shopper extends Person {
  constructor(name, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}

class Employee extends Shopper {
  constructor(name, money = 0, employer = "") {
    super(name, money);
    this.employer = employer;
    this.employed = true;
  }

  payDay(money = 0) {
    this.money += money;
  }
}

const userFactory = (name, money = 0, type, employer) => {
  if (type === "employee") {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
};

const personOne = userFactory("Person One", 100);
const personTwo = userFactory("Person Two", 100, "employee", "This and That");

personTwo.payDay(200);

console.log(personOne.toString());
console.log(personTwo.toString());
