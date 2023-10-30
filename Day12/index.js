// **************** Functions in JS ************************

// 1. Function to compute the product of two numbers

// function product(a,b){
// return (a*b);
// };
// let result = product(3,4);
// console.log(result);

//============================================================
// Call a function which performs a calculation and returns the result:

// let x = productFunction(4,3);
// console.log(x);
// function productFunction(a, b) {
//     return a*b;
// }

// call a function that converts from Fahrenheit to Celsius:

// function toCelsius(f) {
//     return (5/9) * (f-32);
//   }
//   let value = toCelsius(77);
//   console.log(`The Celsius value is ${value}`);

//
// function myFunction() {
//     alert("Hello World!")
//   }
//   myFunction(); // getting referenceError in vscode but will work in browser

//******************* JavaScript Objects *****************/

//we know that JavaScript variables are containers for data values. Objects are variables too. But objects can contain many values.

// const car = {
//     type:"Fiat",
//     model:"500",
//     color:"white"
// };
// //console.log(`The car is ${car.type}`); // Output: The car is Fiat
// console.log(`The car is ${car.type} and model and color of this car is ${car.model} and ${car.color}.`) 

//************************** What is This? **********************/
/*

In JavaScript, the this keyword refers to an object.
Which object depends on how this is being called.
The this keyword refers to different objects depending on how it is used:
In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.
this is not a variable. It is a keyword. We cannot change the value of this.

*/
// Create an object:
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };//In this example, this refers to the person object.Because fullName is a method of the person object.
//   console.log(person.fullName()); //Output: John Doe


// let x = this;
// console.log(this); // Output: {}
// console.log(typeof(this)); //object

/**************************************************************************

Common HTML Events
Here is a list of some common HTML events:

Event	     Description
onchange	 An HTML element has been changed
onclick	The  user clicks an HTML element
onmouseover	 The user moves the mouse over an HTML element
onmouseout	 The user moves the mouse away from an HTML element
onkeydown	 The user pushes a keyboard key
onload	     The browser has finished loading the page

*/




// JavaScript Strings:********************************************************
// A JavaScript string is zero or more characters written inside quotes.
// String Length:
// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// console.log(typeof(text));
// console.log(text.length);


// let text1 = "We are the so-called \"Vikings\" from the north.";
// console.log(text1); // We are the so-called "Vikings" from the north.

// let text2= 'It\'s alright.';
// console.log(text2); // It's alright.

// let text3 = "The character \\ is called backslash.";
// console.log(text3); // The character \ is called backslash.

// Six other escape sequences are valid in JavaScript:

// Code	Result
// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

// let text4 = "This is \bBackspace."
// console.log(text4); // This isBackspace.

// let text5 = "This is \f form Feed."
// console.log(text5); // This is ♀ form Feed.

// let text6 = "This is \n New Line."
// console.log(text6); // 

// let text7 = "This is \r Carriage Return."
// console.log(text7); //  Carriage Return.

// let text8 = "This is \t Horizontal Tabulator."
// console.log(text8); // This is          Horizontal Tabulator.

// let text9 = "This is \v Vertical Tabulator."
// console.log(text9);  // This is ♂ Vertical Tabulator.

/************************* JavaScript Strings as Objects *****************************/

// Normally, JavaScript strings are primitive values, created from literals.
// But strings can also be defined as objects with the keyword new:
// let x = "John";
// let y = new String("John");
// let z = new String("John");

// console.log(typeof(x)); // string
// console.log(typeof(y)); // object
// console.log(typeof(z)); // object

// // Comparing two JavaScript objects always returns false.

// console.log(x==y); // false
// console.log(x===y); // false
// console.log(y===z); // false
// console.log(x===x); // true

/************************* JavaScript String Methods ***************************/

//  1.  String length ***********************************************************
// The length property returns the length of a string:
// let str = "Hello World!";
// console.log(str.length); // output: 12

//===============================================================================
// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)
//  2.  String slice() **********************************************************'

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).
// let text = "Apple, Banana, Kiwi";ss
// let part = text.slice(7,13);
// console.log(part); // Banana ;JavaScript counts positions from zero.First position is 0.Second position is 1.

// If you omit the second parameter, the method will slice out the rest of the string:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7)
// console.log(part) // Banana, Kiwi

//If a parameter is negative, the position is counted from the end of the string:

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12);
// console.log(part); // Banana, Kiwi

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(-12, -6);
// console.log(part); //Banana





//  3.  String substring()
//  4.  String substr()


//  5.  String replace()**********************************************************
//  6.  String replaceAll()
//  7.  String toUpperCase()
//  8.  String toLowerCase()
//  9.  String concat()
//  10. String trim()
//  11. String trimStart()
//  12. String trimEnd()
//  13. String padStart()
//  14. String padEnd()
//  15. String charAt()
//  16. String charCodeAt()
//  17. String split()