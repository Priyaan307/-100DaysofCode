// ### Q.No:0 

function myName(name) {
    if(name=="priya"){
        return "hello priya";
    }else{
        return "Hii";
    }
    }
    let p= myName("priya");
    console.log(`${p}`);
    
// #### Q.No 1

// Declare a constant named `PI` and assign it the value of the mathematical constant pi.

const PI = 3.14;

// #### Q,No: 2

// Declare a function named `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
let x = sumArray([1,2,3,4,5]);
console.log(x);

// #### Q,No:3

// Declare an object named `person` with the properties `firstName` and `lastName`. Set the value of `firstName` to your first name and the value of `lastName` to your last name. Use the object shorthand notation.

const firstName = "Priya"; 
const lastName = "darshani"; 

const person = {
    firstName,
    lastName
};
console.log(person);

/*

#### Q.No:4

Declare a variable named `favoriteBooks` and assign it an array of objects. Each object should have the properties `title` and `author`. Choose at least two books that you like and include them in the array.*/

var favoriteBooks = [book1={
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy"
},
book2={
    title: "How to Win Friends and Influence People",
        author: "Dale Carnegie"}]
    console.log(favoriteBooks);

/*
#### Question-No:5

Create a class named `Person` with the properties `name`, `age`, and `address`. Write a constructor function that initializes the properties with the values passed in as arguments. Use the `this` keyword to set the properties.
*/
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

// Creating an instance of the Person class with values
const person1 = new Person('John Doe', 30, '123 Main St');

// Accessing the properties of the created person
console.log(person1.name); // Output: John Doe
console.log(person1.age); // Output: 30
console.log(person1.address); // Output: 123 Main St


