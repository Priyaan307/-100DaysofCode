// 1.Create an empty function with multiple comments inside of it
const empty = () => {
    //comment1
    //comment2
}
 //2. Create an function `FirstFunction` that would return a string "Finding Fanny"

// const FirstFunction = () => {
//     console.log('Finding Fanny');
// }
// FirstFunction();

//3.Write a function called add that takes in two parameters - number1 and number2 - and returns their sum.


// const add = (number1, number2) => {
//     return number1 + number2;
// }
// console.log(add(5,6));

//4. What will be printed on the console?

// (function() {
//     var a = b = 5;
//  })();
 
//  console.log(b);

 // 5. native methods refer to functions or methods that are built into the language 

// Create “native” methods
// Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified.

//  String.prototype.repeatify = function (times) {
//     if (times <= 0) {
//         return '';
//     } else {
//         return new Array(times + 1).join(this);
//     }
// };

// console.log('hello'.repeatify(3)); // Output: hellohellohello

// 6. Hoisting
// What’s the result of executing this code and why.

// function test() {
//     console.log(a);      // output : undefined 
//     console.log(foo());  // output: 2
    
//     var a = 1;
//     function foo() {
//        return 2;
//     }
//  }
 
//  test();
 /*
 console.log(a);:

The variable a is declared using var, which means it's hoisted to the top of the function scope.
However, it's not initialized yet (assigned a value), so at this point, its value is undefined.
console.log(foo());:

The foo function is declared and defined within the test() function.
Function declarations are hoisted entirely, so the function foo is available to be called at any point within the test() function. */

// 7. How `this` works in JavaScript.

/*
In JavaScript, the this keyword is a special identifier that refers to the context within which a function is executed. It's a fundamental concept and its value is determined by how a function is called.

The value of this is not determined by where a function is written but by how the function is called or invoked. There are several rules that define what this refers to:

1. Global Context: When this is used in the global scope or outside of any function, it refers to the global object, which is window in a browser (or global in Node.js). For example:

console.log(this); // Refers to the global object (window in a browser)

2. Function Context: Inside a function, what this refers to depends on how the function is called. There are a few ways this is determined:

###Implicit Binding: When a method is called on an object, this refers to the object to the left of the dot at the call time.

const myObject = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};
myObject.greet(); // Output: Hello, John


###Explicit Binding: You can explicitly specify what this refers to using call(), apply(), or bind() methods.

function sayName() {
  console.log('My name is ' + this.name);
}

const obj1 = { name: 'Alice' };
const obj2 = { name: 'Bob' };

sayName.call(obj1); // Output: My name is Alice
sayName.apply(obj2); // Output: My name is Bob
const sayNameForBob = sayName.bind(obj2);
sayNameForBob(); // Output: My name is Bob

###New Binding (Constructor Functions): When a function is used as a constructor with the new keyword, this refers to the newly created object.

function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Output: John

###Arrow Functions: In arrow functions, the value of this is lexically determined by the surrounding execution context. Arrow functions do not have their own this binding; they inherit the this value from the enclosing function.

3.Event Handlers: When a function is used as an event handler, this usually refers to the element that triggered the event.

const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // Refers to the button element
});

const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log(this); // Refers to the button element
});

Understanding the context in which a function is invoked is crucial to correctly determine the value of this in JavaScript.

*/

//What is the result of the following code? Explain your answer.

var fullname = 'John Doe';//declaring the variable fullname and assigning the a string John Doe into that variable. 
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
console.log(obj.prop.getFullname()); // Output: Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // output: undefined

/***************************       Debugging in JS        **************************/

// Debugging is finding an error or resolving bugs.
// Types of errors: (Three):  
// (i)Syntax error: made by coder;  
// (ii)Runtime errors: arise after execution of code
// (iii) Logical error: Errors in approach we are using to solve a problem.

// How can we debug error? or Ways to debug a js code?

// ####1. Write a small code to see what it would be like using throw, try, and catch. In this problem, all you are doing is

// generating a random number between 0 and 1.
// If that number is >= 0.5, create an error and so you move to the catch.
// However, your code continues to run even if an error happens.

function generateRandomError() {
    const randomNumber = Math.random();
  
    try {
      if (randomNumber >= 0.5) {
        throw new Error('Random number is greater than or equal to 0.5');
      }
  
      // If no error is thrown, continue executing
      console.log('Random number is less than 0.5:', randomNumber);
      
      // Other code can continue running even after the error is caught
      console.log('Continuing code execution after error check...');
    } catch (error) {
      console.log('Error occurred:', error.message);
      // The code continues running after catching the error
      console.log('Continuing code execution after catching the error...');
    }
  }
  
  // Run the function
  generateRandomError();
  

// ###2.
// How do you create a snippet in the Chrome dev tools?
// In the Chrome dev tools, on the right hand side of the sources tab, there is a "pause" button 
// which allows you to "pause on caught exceptions." What is an exception?

