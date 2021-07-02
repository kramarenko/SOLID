class Car {
	constructor(public model: string) {}
	getModel() {}
}

abstract class CarPrice {
	abstract getPrice(): string;
}

class Tesla extends CarPrice {
	getPrice() {
		return '80000$';
	}
}

class BMW extends CarPrice {
	getPrice() {
		return '60000$';
	}
}

const shop: Array<CarPrice> = [new Tesla(), new BMW()];

const getPrice = (cars: Array<CarPrice>): string | void => {
	for (const car of cars) {
		car.getPrice();
	}
};

getPrice(shop);
