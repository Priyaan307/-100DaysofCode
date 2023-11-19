// ### Array Basics
// Question 1
// Write a JavaScript program which return the first element of an array which have 5 elements by removing in different ways.
//Method-1
// const array = [1,2,3,4,5];
// console.log(`first Element of this Array is ${array[0]}`);

// Method-2
// function firstElementArray(arr){
//     return arr[0];
// }
// let arr = [1,2,3,4,5];
// console.log("First element of the array is: " + firstElementArray(arr));   

// Method - 3
// const array = [1,2,3,4,5];
// console.log(`The first Element of this array is ${array.shift()}`);

//Method -4 
// const array = [1,2,3,4,5];
// console.log(array); // Output: [ 1, 2, 3, 4, 5 ]
// console.log(array.pop()) // Output: 5
// console.log(array); //Output: [ 1, 2, 3, 4 ]
// console.log(array.pop()) // Output: 4
// console.log(array); // Output: [ 1, 2, 3 ]
// console.log(array.pop()) // Output: 3
// console.log(array); // Output: [ 1, 2 ]
// console.log(array.pop()) // Output: 2
// console.log(array); // Output: [ 1 ]
// console.log(array.pop()) // Output: 1
// console.log(array); // Output: []
// console.log(array.pop()) // Output: undefined

// Method - 5
// const array = [1,2,3,4,5];
// console.log((array.slice(0,1)).unshift()) ; // [ 1 ]
// console.log(array); // [ 1, 2, 3, 4, 5 ]
//...................................................
// const array = [1,2,3,4,5];
// console.log(array.slice(0,1)[0]); // 1

// Method - 6
// const array = [1,2,3,4,5];
// console.log(array.reverse()); // [ 5, 4, 3, 2, 1 ]
// console.log(array) // [ 5, 4, 3, 2, 1 ]
// console.log(array.pop()); // 1

// Method - 7
// const array = [1,2,3,4,5];
// console.log(array.shift()); // 1

// Method - 8
// const array = [1,2,3,4,5];
// console.log(array.splice(0,1)[0]); // 1

// Question 2
// Write n array with 20 elements. These could be numbers, words, sentences etc. Write a simple JavaScript program to join all elements of the following array into a string.


// Question 3
// Create and array of your choice of length and elements then write a JavaScript program to compute the sum and product of an array of integers.

// Question 4
// Create and array of your choice of length and elements then write a JavaScript program to remove duplicate items from an array

// ### Nested Data Structure Arrays

// Question 5
// Given the following array, write a function called printEvens that console.logs all of the even numbers

// var nestedArr = [[1,2,3],[4,5,6],[7,8],[9,10,11,12]];

// printEvens(); 

// // 2
// // 4
// // 6
// // 8
// // 10
// // 12

// Question 6
// Given the following array, write a function called sumTotal returns the sum of all numbers in the array
// var nestedArr = [[[1,2],[3,4]],[[5,6]]];

// sumTotal(); // 21

// Question 7
// Given the following array, write a function called countVowels, which returns the count of all of the vowels in each string regardless of case. To see if a value is an array, you can not use typeof since that will return 'object', so one way to do this is by using the Array.isArray function.

// var arr = []
// Array.isArray(arr) // true
// Array.isArray('Hello') // false

// var nestedArr = ['Elie', ['Matt', ['Tim']],['Colt',['Whisky',['Janey'], 'Tom']], 'Lorien'];

// countVowels() // 13

// Question 8
// Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

// rotate([1,2,3], 1) // [3,1,2]
// rotate([1,2,3], 2) // [2,3,1]
// rotate([1,2,3], 3) // [1,2,3]

// Question 9 
// Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

// /*/
// [["X","O","X","O"]]
// /*/

// makeXOGrid(3,2) 

// /*/
// [["X","O"],["X","O"],["X","O"]]
// /*/

// makeXOGrid(3,3) 
// /*/
// [["X","O","X"],["O","X","O"],["X","O","X"]]
// /*/