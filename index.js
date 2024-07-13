// 1. Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const numbers = [3, 5, 2, 3, 5, 3, 1, 4, 1, 2, 6, 6, 2];
const filterDuplicates = (arr) => {
	const uniqueNumbers = new Set(arr);
	console.log('Unique Numbers:', [...uniqueNumbers]);
};

filterDuplicates(numbers);

// 2. Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const books = [
	{ title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
	{ title: '1984', author: 'George Orwell', year: 1949 },
	{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
	{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
	{ title: 'Moby-Dick', author: 'Herman Melville', year: 1851 }
];

const getBookTitles = (arr) => {
	const result = arr.map((book) => book.title);
	console.log('Array of titles', result);
};

getBookTitles(books);

// 3. Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
	{ make: 'Toyota', model: 'Corolla', year: 2015 },
	{ make: 'Honda', model: 'Civic', year: 2012 },
	{ make: 'Ford', model: 'Mustang', year: 2018 },
	{ make: 'Chevrolet', model: 'Camaro', year: 2010 },
	{ make: 'BMW', model: '3 Series', year: 2016 }
];

const sortCarsByYear = (arr) => {
	const result = arr.sort((a, b) => a.year - b.year);
	console.log('sorted cars', result);
};

sortCarsByYear(cars);

// 4. Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
	{ name: 'Gour', age: 25 },
	{ name: 'Joy', age: 30 },
	{ name: 'Asif', age: 35 },
	{ name: 'Fahad', age: 40 }
];

const updatePersonAg = (arr, name, newAge) => {
	const person = arr.find((person) => person.name === name);
	if (person) {
		person.age = newAge;
	}
	console.log(`updated age of ${name}`, arr);
};

updatePersonAg(people, 'Asif', 32);

// 5. Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const numbersToSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOfEvenNumbers = (arr) => {
	const result = arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc), 0);
	console.log('Sum of even numbers:', result);
};

sumOfEvenNumbers(numbersToSum);
