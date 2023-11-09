/* I am learning Functional Programming from freeCodeCamp: */

/* ### 1. About Functional Programming

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT

Functional programming is about:

**Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

**Pure functions - the same input always gives the same output

**Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
*/

// const prepareTea = () => 'greenTea';
// const getTea = (numOfCups) => {
//     const teaCups = [];
  
//     for(let cups = 1; cups <= numOfCups; cups += 1) {
//       const teaCup = prepareTea();
//       teaCups.push(teaCup);
//     }
//     return teaCups;
//   };
  
//   let x = getTea(40);
//   const tea4TeamFCC = x;
//   getTea();
//   console.log(x);

/*
 Let's break down this JavaScript code line by line:

1. `const prepareTea = () => 'greenTea';`
   - This line declares a constant variable named `prepareTea`.
   - `prepareTea` is a function that takes no arguments (indicated by `()`) and returns the string `'greenTea'`.

2. `const getTea = (numOfCups) => { ... };`
   - This line declares a constant variable named `getTea`.
   - `getTea` is a function that takes an argument `numOfCups`.
   - Inside the function, an empty array `teaCups` is declared.
   - A `for` loop runs from 1 to the value of `numOfCups`, and in each iteration:
     - It calls the `prepareTea()` function to get a cup of tea.
     - The obtained tea is added to the `teaCups` array using `teaCups.push(teaCup)`.
   - After the loop, the function returns the `teaCups` array.

3. `let x = getTea(40);`
   - Declares a variable `x` and assigns it the result of calling the `getTea` function with an argument of `40`.
   - This means `x` will contain an array with 40 elements, each element being `'greenTea'`.

4. `const tea4TeamFCC = x;`
   - Declares a constant variable `tea4TeamFCC` and assigns it the value of `x` (which is the array of 40 `'greenTea'` cups).

5. `getTea();`
   - Calls the `getTea` function without passing any argument. However, this call doesn't do anything with the returned value because it's not assigned to any variable.

6. `console.log(x);`
   - Prints the value of `x` to the console.
   - It will display the array assigned to `x` which contains 40 elements, each being `'greenTea'`.

Overall, this code defines two functions: `prepareTea` which simply returns the string `'greenTea'`, and `getTea` which creates an array of `'greenTea'` cups based on the number of cups specified when calling the function. The `getTea` function is used to create an array of 40 cups of green tea, stored in the `x` variable. The value of `x` is then logged to the console, displaying the array of 40 `'greenTea'` elements.
*/

/* Question which came in my mind : is it necessary here to create a prepareTea function => No, it seems unnecessary, as it only returns a constant string "greenTea". The prepareTea function is called within the getTea function to simulate preparing a cup of tea, but it doesn't perform any complex logic or operations.

*/
// The code could be simplified by eliminating the prepareTea function and directly assigning the string 'greenTea' within the getTea function. Here's how the getTea function could be modified:

// const getTea = (numOfCups) => {
//     const teaCups = [];
//     const teaType = 'greenTea';
//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         teaCups.push(teaType);
//         //teaCups.push(numOfCups); 
//     }
//     return teaCups;
//   };
  
//   let x = getTea(40);
//   getTea();
//   console.log(x);
  


/*
### 2. Understand Functional Programming Terminology

**Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
the callback function tells JavaScript the criteria for how to filter an array.

**Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.

**The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

**When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.
*/

// const prepareGreenTea = () => 'greenTea';
// const prepareBlackTea = () => 'blackTea';
// const getTea = (prepareTea, numOfCups) => {
//     const teaCups = [];
  
//     for(let cups = 1; cups <= numOfCups; cups += 1) {
//       const teaCup = prepareTea();
//       teaCups.push(teaCup);
//     }
//     return teaCups;
//   };
//   let x = getTea(prepareGreenTea, 27);
//   let y =getTea(prepareBlackTea, 13);
//   const tea4GreenTeamFCC = x;
//   const tea4BlackTeamFCC = y;  
//   console.log(
//     tea4GreenTeamFCC,
//     tea4BlackTeamFCC
//   );

/* ### 3. the Hazards of Using Imperative Code

*/