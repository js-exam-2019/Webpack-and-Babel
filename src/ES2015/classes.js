// Classes
class Person {
	constructor(name) {
		this.name = name;
	}
	greeting() {
		return `Hi, my name is ${this.name}.`;
	}
}

let marc = new Person("Marc");
console.log("Class Person::", marc.greeting());

// Inheritance
class Developer extends Person {
	subject() {
		return "I am a Developer";
	}
}

let noah = new Developer("Noah");
console.log("Class Developer::", noah.greeting());
console.log("Class Developer::", noah.subject());

// Static Methods
class Coder {
    static genericHello() {
        return "Hello";
    }
}

console.log("Class Coder::", Coder.genericHello())

// Getters and Setters
class Human {
    constructor(name) {
        this._name = name;
    }

    set name(value) {
        this._name = name;
    }

    get name() {
        return TouchList._name;
    }
}