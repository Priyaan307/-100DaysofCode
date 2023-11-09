// ### 1. Create a function that takes in an array and returns an iterator using the "Symbol.iterator" method.

// function arrayIterator(arr) {
//     let index = 0;
  
//     return {
//       next: function() {
//         return index < arr.length ?
//           { value: arr[index++], done: false } :
//           { done: true };
//       },
//       [Symbol.iterator]: function() { return this; } // Symbol.iterator method
//     };
//   }
  
//   // Example usage:
//   const myArray = [1, 2, 3, 4, 5];
//   const iterator = arrayIterator(myArray);
  
//   for (const element of iterator) {
//     console.log(element);
//   }


// ### 2. Use a for-of loop to iterate through the array, and log each item of the array to the console.

// let array = [1, 2, 3, 4, 5];
// for (i=0; i<array.length; i++) {
//     console.log(array[i]);}

// function arrayIterator(arr) {
//     let index = 0;
  
//     return {
//       next: function() {
//         return index < arr.length ?
//           { value: arr[index++], done: false } :
//           { done: true };
//       },
//       [Symbol.iterator]: function() { return this; } // Symbol.iterator method
//     };
//   }
  
//   const myArray = ['apple', 'banana', 'orange', 'grapes'];
  
//   const iterator = arrayIterator(myArray);
  
//   for (const item of iterator) {
//     console.log(item);
//   }
  
//  ### 3. Create a generator function that takes in an array and returns a new array of the same items, but in reverse order.

// function* reverseArrayGenerator(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       yield arr[i];
//     }
//   }
  
//   // Example usage:
//   const originalArray = [1, 2, 3, 4, 5];
//   const reversedArray = [...reverseArrayGenerator(originalArray)];
//   console.log(reversedArray); // Output the reversed array
  

// ### 4. Use a for-of loop to iterate through the new array and log each item to the console.

function* reverseArrayGenerator(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      yield arr[i];
    }
  }
  
  const originalArray = [1, 2, 3, 4, 5];
  const reversedArray = [...reverseArrayGenerator(originalArray)];
  
  for (const item of reversedArray) {
    console.log(item);
  }
  