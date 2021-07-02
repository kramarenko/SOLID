// Liskov substitution principle
interface Figure {
	setWidth(width: number): void;
	setHeight(height: number): void;
	areaOf(): void;
}

class Rectangle implements Figure {
	setWidth(width: number) {}
	setHeight(height: number) {}
	areaOf() {}
}

class Square implements Figure {
	setWidth(width: number) {}
	setHeight(height: number) {}
	areaOf() {}
}
