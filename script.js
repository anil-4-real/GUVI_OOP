//Simple person class with 7 class properties
const Person = class {
	constructor(title, name, age, gender, profession, location, dob) {
		this.title = title;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.profession = profession;
		this.location = location;
		this.dob = dob;
	}
};

//creating person objects
const anil = new Person(
	"Mr",
	"Anil",
	22,
	"Male",
	"Software Developer",
	"Bangalore",
	"19/05/1999"
);
const simran = new Person(
	"Ms",
	"Simran",
	24,
	"Female",
	"Quality Analyst",
	"Punjab",
	"04/12/1996"
);

//printing person object to the console
console.log(anil.name, anil.age);
console.log(simran.profession, simran.location);

//------------------------------------------------------------------------------------------------------------

//Class to calculate UBER trip fare
const Uber = class {
	constructor(distance, timeTaken, carType, discount) {
		this.distance = distance;
		this.timeTaken = timeTaken;
		this.carType = carType;
		this.discount = discount;
	}

	//creating a method to get price based on the given data
	getPrice() {
		//base price of certain cars
		let cars = { prime: 5, go: 3.5, XL: 7, pool: 1.5 };
		const price =
			cars[this.carType] * this.distance + this.timeTaken * 1.5 - this.discount;
		return `Your trip fare is $${price}`;
	}
};

//creating Uber trip objects
const trip1 = new Uber(5.5, 30, "prime", 2);
const trip2 = new Uber(2, 25, "XL", 5);
const trip3 = new Uber(
	(distance = 4),
	(timeTaken = 103),
	(carType = "pool"),
	(discount = 3)
);

//printing the price to the console
console.log(trip1.getPrice());
console.log(trip2.getPrice());
console.log(trip3.getPrice());

//--------------------------------------------------------------------------------------------------------------

//class to filter movies by rating

const Movie = class {
	constructor(title, studio, rating, movies) {
		this.title = title;
		this.studio = studio;
		this.rating = rating;
		this.movies = movies;
	}

	getPG() {
		return this.movies.filter((movie) => movie[2] === "PG");
	}

	getPG13() {
		return this.movies.filter((movie) => movie[2] === "PG13");
	}

	getG() {
		return this.movies.filter((movie) => movie[2] === "G");
	}
};

const dune = ["Dune", "Prince Studios", "PG"];
const juvenile = ["Juvenile", "Insanity Productions", "PG13"];
const avengers = ["Avengers", "Marvel", "G"];
const sherlock = ["Sherlock Holmes", "Sony", "PG"];
const allMovies = [juvenile, avengers, sherlock, dune];

//new object instantiated
const movieObj = new Movie(
	"Black Panther",
	"Marvel Studios",
	"PG13",
	allMovies
);

console.log(movieObj.getPG());
console.log(movieObj.getG());
console.log(movieObj.getPG13());

//---------------------------------------------------------------------------------------------------------------------
//class to get radius, circumference, area and diameter of a circle

const pi = 3.14159;
class Circle {
	constructor(radius, color) {
		this.radius = radius;
		this.color = color;
	}

	setRadius() {
		void this.radius;
	}

	setColor() {
		void this.color;
	}

	getRadius() {
		return `The radius of the circle is : ${this.radius}`;
	}

	getDiameter() {
		const diameter = this.radius * 2;
		return `The diameter of the given circle is : ${diameter}`;
	}

	getCircumference() {
		const circumference = 2 * pi * this.radius;
		return `The circumference of the given circle is : ${circumference}`;
	}

	getArea() {
		const area = pi * Math.pow(this.radius, 2);
		return `The area of the given circle is : ${area}`;
	}
}

//new circle object
let circle = new Circle(3.4, "red");
console.log(circle.getDiameter());
console.log(circle.getRadius());
console.log(circle.getCircumference());
console.log(circle.getArea());

//------------------------------------------------------------------------------------------------------------------------------------------------------
