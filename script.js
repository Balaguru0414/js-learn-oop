'use strict';
/*
// Noraml Object
const dhana = {
	name : 'DhanaSekar',
	age : 23,
}
// console.log(dhana)

// 1. new {} is created
// 2. function is called. this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// %%%%%%%%%%%%%%%%%%% constructer function %%%%%%%%%%%%%%%%%%%%%%

const Person = function (firsrName,birthYear) {
	// console.log(this);    Person {}
	this.firsrName = firsrName;
	this.birthYear = birthYear;

	// Don't do this | also work
	// this.calcAge = function() {
	// 	console.log(2023 - birthYear);
	// }
}

const bala = new Person('Bala Guru',2000);
const abi = new Person('Abinesh',2000);
const mari = new Person('Mari Muthu',1999);
console.log(bala,abi,mari);

const ganesh = 'Ganesh';
console.log(bala instanceof Person);
console.log(ganesh instanceof Person);

// static
Person.hey = function () {
	console.log('Hey there');
	console.log(this);
};
Person.hey();
// ---------------- Prototypes ------------------
console.log(Person.prototype)

Person.prototype.calcAge = function () {
	console.log(2023 - this.birthYear)
}
bala.calcAge();
abi.calcAge();
mari.calcAge();

console.log(bala.__proto__);
console.log(bala.__proto__ === Person.prototype);	// true
console.log(Person.prototype.isPrototypeOf(bala));	// true
console.log(Person.prototype.isPrototypeOf(mari));	// true
console.log(Person.prototype.isPrototypeOf(Person));// false

// .prototypeOfLinkedObject
Person.prototype.favFood = 'Dosa';
console.log(bala.favFood,abi.favFood);

console.log(bala.hasOwnProperty('firsrName'));	// true
console.log(bala.hasOwnProperty('favFood'));	// false

console.log(bala.__proto__)

// Object prototype | top of pototype chain
console.log(bala.__proto__.__proto__)
console.log(bala.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor);

const arr = [3,2,5,1,4,4,5,1,9,6,3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype) // true
console.log(arr.__proto__.__proto__)

Array.prototype.unique = function () {
	return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

1. Use a constructor function to implement a Car. A car 
has a make and a speed property. The speed property is 
the current speed of the car in km/h;

2. Implement an 'accelerate' method that will increase 
the car's speed by 10, and log the new speed to the 
console;

3. Implement a 'brake' method that will decrease the car's 
speed by 5, and log the new speed to the console;

4. Create 2 car objects and experiment with calling 
'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function (name,speed) {
	this.name = name
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.name} is going to ${this.speed} km/h`)
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.name} is going to ${this.speed} km/h`)
};

const bmw = new Car('BMW',120);
const mercedes = new Car('Mercedes',95)
console.log(bmw,mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();

// class Expression
const PersonCl = class{};

// class declaration

class PersonCl{
	constructor(fullName,birthYear){
		this.fullName = fullName;
		this.birthYear = birthYear;		
	};

// Methods will be added prototype property
	calcAge(){
		console.log(2023 - this.birthYear);
	};

	greet(){
		console.log(`Hey ${this.fullName}`);
	};

	get age(){
		return 2023 - this.birthYear;
	};

// set a property that already exits
	set fullName(name) {
		// console.log(name);
		if(name.includes(' ')) this._fullName = name;
		else alert(`${name} is not a full name`);
	};

	get fullName(){
		return this._fullName;
	};

	// Static Method
	static hey(){
		console.log('hey there');
		console.log(this);
	};
};

const surya = new PersonCl('surya Narayanan',1997);
const bala = new PersonCl('Bala Guru',2000);
console.log(bala,surya);

// Static 
PersonCl.hey();

console.log(bala.age);
console.log(surya.age);

bala.calcAge();
console.log(bala.__proto__ === PersonCl.prototype)

Manual type create prototype
PersonCl.prototype.greet = function () {
	console.log(`Hey ${this.firstName}`)
}

bala.greet();

1.classes are NOT hoisted
2.classes are first class citizens
3.classes are excuted in strict mode

const account = {
	name : 'Balaguru',
	movements : [200,500,1000,-500,300],

	get latest(){
		return this.movements.slice(-1).pop();
	},

	set latest(mov){
		return this.movements.push(mov)
	}
}

// console.log(account.latest);		// get
// console.log(account.latest = 500);	// set

///////////////////////////////////////////////////////

// Object Create

const PersonProto = {
	calcAge(){
		console.log(2023 - this.birthYear);
	},

	init(firstName,birthYear){
		this.firstName = firstName;
		this.birthYear = birthYear;
	},
};

const abinesh = Object.create(PersonProto);
console.log(abinesh);

abinesh.name = 'Abinesh';
abinesh.birthYear = 2000;
abinesh.calcAge();
console.log(abinesh);

const ganesh = Object.create(PersonProto);
ganesh.init('Ganesh',1999);
ganesh.calcAge();
console.log(ganesh);

///////////////////////////////////////
// Coding Challenge #2

1. Re-create challenge 1, but this time using an ES6 
class;

2. Add a getter called 'speedUS' which returns the current 
speed in mi/h (divide by 1.6);

3. Add a setter called 'speedUS' which sets the current 
speed in mi/h (but converts it to km/h before storing the 
value, by multiplying the input by 1.6);

4. Create a new car and experiment with the accelerate and 
brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

const Car = {
	get speedUS(){
		return this.speed / 1.6;
	},

	set speedUS(speed){
		this.speed = speed * 1.6;
	},

	accelerate(){
		this.speed += 10;
		console.log(`${this.brand} is going to ${this.speed} km/h`);
	},

	break(){
		this.speed -= 5;
		console.log(`${this.brand} is going to ${this.speed} km/h`);
	},

	inti(brand,speed){
		this.brand = brand;
		this.speed = speed;
	},
};

const ford = Object.create(Car);
ford.inti('Ford',120);
console.log(ford);

console.log(ford.speedUS);
ford.speedUS = 50;
console.log(ford);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.break();
// ford.break();
// ford.accelerate();
// ford.accelerate();

//////////////////////////////////////////////////////////

// Inheritance between classes

const Person = function (firstName,birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
	console.log(2023 - this.birthYear);
}
const Student = function (firstName,birthYear,course) {
	Person.call(this,firstName,birthYear);
	this.course = course;
}

// Linking Prototype
// Student.prototype = Object.create(Person.prototype) // Good
// Student.prototype = Person.prototype  			// Bad

Student.prototype.introduce = function () {
	console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const surya = new Student('Surya Narayanan',1997,'Mechanic');
console.log(surya)
surya.introduce();
// surya.calcAge();

console.log(surya.__proto__);
console.log(surya.__proto__.__proto__);

console.log(surya instanceof Student);
console.log(surya instanceof Person);
console.log(surya instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

1. Use a constructor function to implement an Electric Car 
(called EV) as a CHILD "class" of Car. Besides a make and 
current speed, the EV also has the current battery charge 
in % ('charge' property);

2. Implement a 'chargeBattery' method which takes an 
argument 'chargeTo' and sets the battery charge to 
'chargeTo';

3. Implement an 'accelerate' method that will increase 
the car's speed by 20, and decrease the charge by 1%. 
Then log a message like this: 'Tesla going at 140 km/h, 
with a charge of 22%';

4. Create an electric car object and experiment with 
calling 'accelerate', 'brake' and 'chargeBattery' 
(charge to 90%). Notice what happens when you 'accelerate'
! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 
23%

GOOD LUCK 😀
////////////////////////////////////////////////////////
const Car = function (name,speed) {
	this.name = name
	this.speed = speed;
};

Car.prototype.accelerate = function () {
	this.speed += 10;
	console.log(`${this.name} is going at ${this.speed} km/h.`)
};

Car.prototype.brake = function () {
	this.speed -= 5;
	console.log(`${this.name} is going at ${this.speed} km/h.`)
};

const EV = function (name,speed,charge) {
	Car.call(this,name,speed);
	this.charge = charge;
}

// Linking the Prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chrageBattery = function (chargeTo) {
	this.charge = chargeTo;
}

EV.prototype.accelerate = function () {
	this.speed += 20;
	this.charge--;
	console.log(`${this.name} is going at ${this.speed} km/h, with a charge of ${this.charge}%`)
}

const tesla = new EV('Tesla',120,23);
tesla.chrageBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
*/














