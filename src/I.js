// Interface segregation principle

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {}

class Owl extends Animal {}

class Shark extends Animal {}

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  }
}

const flier = {
	fly() {
		console.log(`${this.name} can fly`);
	},
};

const walker = {
	walk() {
		console.log(`${this.name} can walk`);
	},
};

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Owl.prototype, flier, walker);
Object.assign(Shark.prototype, swimmer);


const dog = new Dog('Rex');
dog.walk()
dog.swim();

const owl = new Owl('Mery');
owl.fly();
owl.walk();

const shark = new Shark('Winnie');
shark.swim()