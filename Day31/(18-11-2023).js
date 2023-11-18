// Question 1
// Write a JavaScript program which return the first element of an array which have 5 elements by removing in different ways.
// Method 1:
// function returnFirstElementOfArray(arr) {
//     if(arr.length>0){
//         return arr[0];
//     }else{
//         return "This is an empty array";
//     }

// }
// let arr = [1,2,3];
// console.log(`The first element of this array is ${returnFirstElementOfArray(arr)}`);

/* Array Methods: 
1. Array length
2. Array toString()
3. Array pop()
4. Array push()
5. Array shift()
6. Array unshift()
7. Array join()
8. Array delete()
9. Array concat()
10.Array flat()
11.Array splice()
12.Array slice()
*/

/*
1. Array length: The length property returns the length (size) of an array:
Example:
let Array = [ 1,2,3,4,5];
console.log(Array.length); // Output: 5

=> The length property provides an easy way to append new elements to an array without using the push() method:
let Array = [ 1,2,3,4,5];
console.log(Array[Array.length]= 6); // output: 6
console.log(Array); // output:[ 1, 2, 3, 4, 5, 6 ]
*/

/*
2.Array toString(): The JavaScript method toString() converts an array to a string of (comma separated) array values.
Example:
let Array = ["a", '123a', 'apple'];
console.log(Array.toString()); // Output: a,123a,apple
*/

/*
7. Array join(): 
The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:
Example:
let Array = ["a", 'B', 'apple'];
console.log(Array.join()); // Output: a,B,apple
console.log(Array.join('')); // Output: aBapple
console.log(Array.join(';')); // Output: a;B;apple
console.log(Array.join('*')); // Output:  a*B*apple
console.log(Array.join('-')); // Output: a-B-apple
*/

/*
3. Array pop() : The pop() method removes the last element from an array:
Example: 
const girls = ["Priya", "Riya", "Siya"];
console.log(girls.pop()); // output: Siya (The pop() method returns the value that was "popped out")
console.log(girls); // output: [ 'Priya', 'Riya' ]

4. Array push():
The push() method adds a new element to an array (at the end):
Example:
const girls = ["Priya", "Riya", "Siya"];
console.log(girls.push('Diya')); // output: 4 (The push() method returns the new array length)
console.log(girls); // output: [ 'Priya', 'Riya', 'Siya', 'Diya' ]
*/

/*
5. Array shift():The shift() method removes the first array element and "shifts" all other elements to a lower index.
Example:
const girls = ["Priya", "Riya", "Siya"];
console.log(girls.shift()); //output: Priya(The shift() method returns the value that was "shifted out".)
console.log(girls); //output: [ 'Riya', 'Siya' ]

6. Array unshift():The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements.
Example:
const girls = ["Priya", "Riya", "Siya"];
console.log(girls.unshift()); // output: 3
console.log(girls.unshift('Diya')); // output: 4
console.log(girls); // output: [ 'Diya', 'Priya', 'Riya', 'Siya' ]

*/

/*
8. Array delete():
Deleting elements leaves undefined holes in an array
Example1:
const girls = ["Priya", "Riya", "Siya"];
console.log(delete girls); // output: false
console.log(delete girls[1]); // output: true
console.log(girls); // output: [ 'Priya', <1 empty item>, 'Siya' ]
console.log(delete girls[0]); // output: true
console.log(girls); // output: [ <2 empty items>, 'Siya' ]

Example: 
const Numbers = [1,2,3,4,5,6]
console.log(Numbers[0,1,2]); // output: 3
console.log(delete[]) // true
console.log(delete Numbers[0,1,2]) // true
console.log(Numbers); // [ 1, 2, <1 empty item>, 4, 5, 6 ]
console.log(Numbers[2]) // undefined 
delete Numbers[1];
console.log(Numbers); // [ 1, <2 empty items>, 4, 5, 6 ]
*/

/*
9. Array concat():The concat() method creates a new array by merging (concatenating) existing arrays
Example: 
let numbers =[1,2,3];
let anotherNumbers =[4,5,6];
let totalNumbers = numbers.concat(anotherNumbers);
console.log(totalNumbers); // [ 1, 2, 3, 4, 5, 6 ]
*/

/*
10.Array flat(): 
Example:
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr) // [ 1, 2, 3, 4, 5, 6 ]
*/

/*
11.Array splice()

*/

/*
12.Array slice()

*/