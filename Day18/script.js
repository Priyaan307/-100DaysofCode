//************ Basic Data Structures ************/

// 1. Use an Array to Store a Collection of Data

// 2. Access an Array's Contents Using Bracket Notation

// 3. Add Items to an Array with push() and unshift()

// 4.An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are mutable

// the push() method adds elements to the end of an array, and unshift() adds elements to the beginning.

// 5. Remove Items from an Array with pop() and shift()

// pop() removes an element from the end of an array, while shift() removes an element from the beginning. The key difference between pop() and shift() and their cousins push() and unshift(), is that neither method takes parameters, and each only allows an array to be modified by a single element at a time.

// 6. Remove Items Using splice()

// splice() allows us to remove any number of consecutive elements from anywhere in an array.
// splice() can take up to 3 parameters, The first two parameters of splice() are integers which represent indexes, or positions, of items in the array that splice() is being called upon. And remember, arrays are zero-indexed, so to indicate the first element of an array, we would use 0. splice()'s first parameter represents the index on the array from which to begin removing elements, while the second parameter indicates the number of elements to delete.
// ex:
// let array = ['today', 'was', 'not', 'so', 'great'];

// array.splice(2, 2); // output:['today', 'was', 'great'].

// splice() not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements:

// 7.

// 8.

// 9.

// 10.

// 11.

// 12.

// 13.

// 14.

// 15.

// 16.

// 17.

//18.

//19.

//20.

