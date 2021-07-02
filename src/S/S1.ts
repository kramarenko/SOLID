// Single Responsibility Principle

class Auto {
	constructor(model: string) {}
	setCarModel() {}
	getCarModel() {}
}

class CustomerAuto {
	saveCustomerOrder(order: Auto) {}
	getCustomerOrder(id: number) {}
	removeCustomerOrder(id: number) {}
}

class AutoDB {
	updateCarSet(set: object) {}
}
