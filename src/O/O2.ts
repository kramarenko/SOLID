class Discount {
	price: number;
	constructor(price: number) {
		this.price = price;
	}

	getDiscount() {
		return this.price;
	}
}

class Favorite extends Discount {
	getDiscount(): number {
		return super.getDiscount() * 2;
	}
}

class Vip extends Favorite {
	getDiscount(): number {
		return super.getDiscount() * 3;
	}
}

const discounts: Array<Discount> = [new Favorite(100), new Vip(100)];

const discountCalculator = (discounts: Array<Discount>): string | void => {
	for (const discount of discounts) {
		discount.getDiscount();
	}
};

discountCalculator(discounts);
