// Question 1

// let userAge = 21;
// console.log(userAge);

// Question 2

// let dogYears;
// let humanYears;
// function calculateDogYears(dogYears) {  
//     return (humanYears = 7 * dogYears);
// }
// console.log(calculateDogYears(4));
// // console.log(calculateDogYears(7));

// function calculateDogYears(dogYears) {
//     // Assuming one dog year is equal to seven human years
//     const humanYears = dogYears * 7;
//     return humanYears;
//   }
  
//   // Example usage
//   const dogAge = 3; // Replace with the actual dog's age
//   const humanAge = calculateDogYears(dogAge);
//   console.log(`The equivalent human age is: ${humanAge} years`);
  

// Question 3

// let person = 
// {
//     name : "Priya",
//     Age : 21
// }
// console.log(person);

// Question 4

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);

// Question 5

// class Car {
//     constructor (make, model, year) {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
// }
// let myCar = new Car('Toyota', 'Camry', 2023);
// console.log(myCar);

// let herCar = new Car ('xyz', 'pqr', 2022);
// console.log(herCar);

// Question 6

// const PI = 3.14;
// console.log(PI);


// Question 7

// let sum = 0;

// function sumArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3]));

// Question 8 

// const firstName = 'Priya';
// const lastName = 'darshani';

// const person = {
//   firstName,
//   lastName
// };
// console.log(person);

// const person = {
//     firstname: 'Riya',
//     lastName: 'Sahani'
// }
// console.log(person);

// Question 9

// var favoriteBooks = [
//     book1 ={
//         name: 'abc'
//     },
//     book2 ={
//         name: 'xyz'
//     }
// ]
// console.log(favoriteBooks);
// console.log(`my fav books are ${favoriteBooks}`);

// Question 10

// class Person {
//     constructor(name, age, address) {
// this.name= name;
// this.age = age;
// this.address = address;
//     }
// }

// let myPerson = new Person ("priya", 21, "india");
// console.log(myPerson);

// Question 11

function dataType(input) {
    if (typeof input === 'string') {
      return 'String';
    } else if (typeof input === 'number') {
      return 'Number';
    } else if (typeof input === 'undefined') {
      return 'Undefined';
    } else if (input === null) {
      return 'Null';
    } else if (typeof input === 'boolean') {
      return 'Boolean';
    } else {
      return 'Unknown Type';
    }
  }
  console.log(dataType("Hello"));      // Output: String
  console.log(dataType(42));           // Output: Number
  console.log(dataType(undefined));    // Output: Undefined
  console.log(dataType(null));         // Output: Null
  console.log(dataType(true));         // Output: Boolean
  console.log(dataType([1, 2, 3]));     // Output: Unknown Type
  