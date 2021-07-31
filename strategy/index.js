class PayPal {
	constructor() {
		this.name = "PayPal"
		this.fee = 1.99;
	}
}

class Stripe {
	constructor() {
		this.name = "Stripe"
		this.fee = 0.99;
	}
}

class DHL {
	constructor() {
		this.name = "DHL Express"
		this.fee = 6.99;
	}
}

class UPS {
	constructor() {
		this.name = "UPS Standard"
		this.fee = 4.99;
	}
}

class Order {
	#orderId;

	constructor({ orderPrice } = {}) {
		this.#orderId = Math.floor(Math.random() * 100_000_000) + 1;
		this.orderPrice = orderPrice || 301.56;
		this.paymentMethod = null;
		this.shippingCompany = null;
	}

	// Store a instance of one of the payment methods inside the class Order.
	setPaymentMethod(payMethod) {
		this.paymentMethod = payMethod;
	}

	// Same as above.
	setShippingCompany(company) {
		this.shippingCompany = company
	}

	printOrderDetails() {
		this.#checkOrderValidity();

		const payment = this.paymentMethod;
		const company = this.shippingCompany;
		const orderPrice = this.orderPrice;
		const orderTotal = this.#calculateOrderFinalPrice();

		return console.log(`
			Order ID: ${this.#orderId}
			___________________________
			Payment Method: ${payment.name}
			Shipping Company: ${this.shippingCompany.name}
			___________________________

			Order: ${orderPrice} $
				Paymethod fee: + ${payment.fee} $
				Shipment Company fee: + ${company.fee} $

			Calculated Total: $ ${orderTotal}
		`);
	}

	placeOrder() {
		this.#checkOrderValidity();

		const payment = this.paymentMethod;
		const company = this.shippingCompany;

		return console.log(`
			ORDER RECEIVED!

			Order ID: ${this.#orderId}
			Paid With: ${payment.name}
			Shipped By: ${company.name}

			Total: $ ${this.#calculateOrderFinalPrice()}
		`);
	}

	#checkOrderValidity() {
		if (!this.paymentMethod)
			throw new Error("You must select a payment method!");
		if (!this.shippingCompany)
			throw new Error("You must select a shipment company!");
	}

	#calculateOrderFinalPrice() {
		const payment = this.paymentMethod;
		const company = this.shippingCompany;
		const orderPrice = this.orderPrice;

		return parseFloat(orderPrice + payment.fee + company.fee).toFixed(2);
	}
}

/*

  Usage examples --->
  
*/

const myOrder = new Order({ orderPrice: 100.99 });

myOrder.setPaymentMethod(new PayPal());
myOrder.setShippingCompany(new UPS());

myOrder.printOrderDetails();
myOrder.placeOrder();
