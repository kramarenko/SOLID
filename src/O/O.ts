// Open–closed principle

class Shape {
	area(): number | void {
		throw new Error('Area method should be implemented!');
	}
}

class Square extends Shape {
	size: number;

	constructor(size: number) {
		super();
		this.size = size;
	}

	area(): number {
		return this.size ** 2;
	}
}

class Circle extends Shape {
	radius: number;

	constructor(radius: number) {
		super();
		this.radius = radius;
	}

	area(): number {
		return this.radius ** 2 * Math.PI;
	}
}

class Triangle extends Shape {
	a: number;
	b: number;

	constructor(a: number, b: number) {
		super();
		this.a = a;
		this.b = b;
	}

	area(): number {
		return (this.a * this.b) / 2;
	}
}

class AreaCalculator {
	shapes: Array<Shape>;

	constructor(shapes: Array<Shape> = []) {
		this.shapes = shapes;
	}

	sum(): number {
		return this.shapes.reduce((acc: number, shape: Shape) => acc + +shape.area(), 0);
	}
}

const calc = new AreaCalculator([
	new Square(5),
	new Circle(5),
	new Circle(15),
	new Triangle(15, 10),
]);

console.log(calc.sum());
