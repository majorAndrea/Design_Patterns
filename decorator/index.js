/**
 * Beverages must inherit from this "abstract" class.
 * @class
 * @abstract
 **/
class Beverage {
	description = "Unknown Beverage";

	constructor() {
		if (this.constructor === Beverage)
			throw new Error (
				"Beverage is an abstract class and can not be instantiated directly."
			);
	}

	getDescription() {
		return this.description;
	}

	cost() {
		return 0.00;
	}

	test() {
		console.log("OK");
	}
}

/**
 * Condiment Decorators must inherit from this "abstract" class.
 * @class
 * @abstract
 * @extends Beverage
 **/
class CondimentDecorator extends Beverage {
	constructor() {
		super();

		if (this.constructor === CondimentDecorator)
			throw new Error (
				"CondimentDecorator is an abstract class and can not be instantiated directly."
			);
	}

	getDescription() {
		return this.description;
	}

	test2() {
		console.log("OK 2")
	}
}

// --- Beverages

/**
 * Espresso is a concrete class and must 
 * inherit the beverage abstract class
 * @class
 * @extends Beverage
 **/
class Espresso extends Beverage {
	constructor() {
		super();
		this.description = "Espresso"
	}

	getDescription() {
		return this.description;
	}

	cost() {
		return 1.99;
	}
}

/**
 * Decaf is a concrete class and must 
 * inherit the beverage abstract class
 * @class
 * @extends Beverage
 **/
class Decaf extends Beverage {
	constructor() {
		super();
		this.description = "Decaffeinated"
	}

	getDescription() {
		return this.description;
	}

	cost() {
		return 1.05;
	}
}

/**
 * HouseBlend is a concrete class and must 
 * inherit the beverage abstract class
 * @class
 * @extends Beverage
 **/
class HouseBlend extends Beverage {
	constructor() {
		super();
		this.description = "House Blend"
	}

	getDescription() {
		return this.description;
	}

	cost() {
		return 0.89;
	}
}

/**
 * DarkRoast is a concrete class and must 
 * inherit the beverage abstract class
 * @class
 * @extends Beverage
 **/
class DarkRoast extends Beverage {
	constructor() {
		super();
		this.description = "Dark Roast"
	}

	getDescription() {
		return this.description;
	}

	cost() {
		return 0.99;
	}
}

// --- Condiments

/**
 * SteamedMilk is a concrete class decorator and must
 * inherit the CondimentDecorator abstract class
 * @class
 * @decorator
 * @extends CondimentDecorator
 **/
class SteamedMilk extends CondimentDecorator {
	constructor(beverage) {
		super();

		if (!beverage)
			throw new Error("A Beverage class instance object must be provided to use decorators!");

		this.beverage = beverage;
	}

	getDescription() {
		return this.beverage.getDescription() + ", Steamed Milk";
	}

	cost() {
		return 0.10 + this.beverage.cost();
	}
}

/**
 * Mocha is a concrete class decorator and must
 * inherit the CondimentDecorator abstract class
 * @class
 * @decorator
 * @extends CondimentDecorator
 **/
class Mocha extends CondimentDecorator {
	constructor(beverage) {
		super();

		if (!beverage)
			throw new Error("A Beverage class instance object must be provided to use decorators!");

		this.beverage = beverage;
	}

	getDescription() {
		return this.beverage.getDescription() + ", Mocha";
	}

	cost() {
		return 0.20 + this.beverage.cost();
	}
}

/**
 * Soy is a concrete class decorator and must
 * inherit the CondimentDecorator abstract class
 * @class
 * @decorator
 * @extends CondimentDecorator
 **/
class Soy extends CondimentDecorator {
	constructor(beverage) {
		super();

		if (!beverage)
			throw new Error("A Beverage class instance object must be provided to use decorators!");

		this.beverage = beverage;
	}

	getDescription() {
		return this.beverage.getDescription() + ", Soy";
	}

	cost() {
		return 0.15 + this.beverage.cost();
	}
}

/**
 * Whip is a concrete class decorator and must
 * inherit the CondimentDecorator abstract class
 * @class
 * @decorator
 * @extends CondimentDecorator
 **/
class Whip extends CondimentDecorator {
	constructor(beverage) {
		super();

		if (!beverage)
			throw new Error("A Beverage class instance object must be provided to use decorators!");

		this.beverage = beverage;
	}

	getDescription() {
		return this.beverage.getDescription() + ", Whip";
	}

	cost() {
		return 0.10 + this.beverage.cost();
	}
}

/*
*
* --- Usage examples --->
*
*/


let beverage = new HouseBlend();
beverage = new Soy(beverage);
beverage = new Mocha(beverage);
beverage = new Whip(beverage);

console.log(`
	Beverage:
		${beverage.getDescription()}
	Total Cost:
		$${beverage.cost()}
`);
