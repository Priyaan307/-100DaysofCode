// *************************************      JavaScript Regular Expressions       ******************************************

// What is a Regular Expression?
// A regular expression is a sequence of characters that forms a search pattern.

// When we search for data in a text, you can use this search pattern to describe what we are searching for.

// A regular expression can be a single character, or a more complicated pattern.

// Regular expressions can be used to perform all types of text search and text replace operations.

// Syntax
// /pattern/modifiers;

// Example :

// const regex = /very/g

// const text = "Priya is very very nyc and very awesome girl"
// console.log(text.replace(regex, "very"))                // used this website for better understanding: https://regexr.com/


/******************************** Practice Questions ************************************/

// ## Question 1:

// `countNumbers`

// Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.
// ```js
// countNumbers("321321dsadsa930-29d132b13a") // 16
// countNumbers("this is so wonderful") // 0
// countNumbers("this is so 1234") // 4
// ```

function countNumbers(str) {
    const regex = /[0-9]/g; // Regular expression to match numbers between 0 and 9
  
    const numbers = str.match(regex); // Match all numbers in the string
  
    if (!numbers) {
      return 0; // If no numbers are found, return 0
    }
  
    return numbers.length; // Return the count of numbers found
  }
  
  // Test cases
  console.log(countNumbers("321321dsadsa930-29d132b13a")); // Output: 16
  console.log(countNumbers("this is so wonderful")); // Output: 0
  console.log(countNumbers("this is so 1234")); // Output: 4


  // ## Question 2:*************************************************************************************************************

// `capitalSentence`

// Write a function called capitalSentence which accepts a string and returns another string with all the capital 
// letters joined together.
// ```js
// capitalSentence("The Cat In The Hat") // "TCITH"
// capitalSentence("And I Think to Myself What a Wonderful World") // "AITMWWW"
// ```

function capitalSentence(str) {
    const capitalLetters = str.match(/[A-Z]/g); // Matches all capital letters in the string
  
    if (!capitalLetters) {
      return ''; // If no capital letters found, return an empty string
    }
  
    return capitalLetters.join(''); // Join the array of capital letters and return as a string
  }
  
  // Test cases
  console.log(capitalSentence("The Cat In The Hat")); // Output: "TCITH"
  console.log(capitalSentence("And I Think to Myself What a Wonderful World")); // Output: "AITMWWW"
  
// Question 3.****************************************************************************************************

//   What are the two ways to create regular expression in JavaScript?

// Two ways to create regular expressions in JavaScript:

// a. Using a Regular Expression Literal: Regular expression literals are defined by enclosing the pattern
// in forward slashes (/pattern/). For example:
const regex1 = /pattern/;

// b. Using the 'RegExp' constructor: The 'RegExp' constructor is used to create a regular expression object. 
// It takes two arguments: the pattern as a string and an optional flag. For example:
const regex2 = new RegExp("pattern");

// Question 4: ****************************************************************************************************

// What is a flag?

// In JavaScript regular expressions, flags are used to change how the pattern is interpreted. 
// They are added after the closing slash of a regular expression literal (in the case of using the literal) 
// or passed as a string to the RegExp constructor. Commonly used flags include:
// i: Case-insensitive matching.
// g: Global matching (find all matches rather than stopping after the first match).
// m: Multiline matching. Treats beginning and end characters (^ and $) as working across multiple lines.

// Question 5: ****************************************************************************************************

// Difference between ?, +, *:

// ? denotes that the preceding element in the regex pattern is optional. It matches 0 or 1 occurrence of the preceding element.
// + matches one or more occurrences of the preceding element in the pattern.
// * matches zero or more occurrences of the preceding element.
// Example:

// a? will match an empty string or 'a'.
// a+ will match 'a', 'aa', 'aaa', and so on.
// a* will match an empty string, 'a', 'aa', 'aaa', and so forth.

// Question 6: ****************************************************************************************************
// Difference between [] and {}:

// [] is a character class. It matches any single character within the brackets. For example, 
// [abc] will match any 'a', 'b', or 'c' in the string.
// {} is used for specifying the quantity or repetition of the preceding character or group. 
// For example, a{3} will match exactly three consecutive 'a's in the string.
// It us you to define a specific number or a range of occurrences.





  