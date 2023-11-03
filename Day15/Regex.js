// Regular Expressions:

// 1. Test Method:

// let myString = "Priya, darshani!";
// let myRegex = /darshani/;
// let result = myRegex.test(myString);
// console.log(result); // true

// 2. Match Literal Strings:

// let priyaIsHiding  = "Somewhere Priya is hiding in this text."
// let priyaRegex = /Hiding/;
// let result = priyaRegex.test(priyaIsHiding);
// console.log(result); // false

// 3. Match a Literal String with Different Possibilities:

// let petString = "Priya has a pet cat.";
// let petRegex = /cat|dog|bird|fish/;
// let result = petRegex.test(petString);
// console.log(result); // true

// 4. Ignore Case While Matching:

// let myString = "Priyadarshani";
// let fccRegex = /priyaDarshani/i; // i flag ignores case(uppercase letters and lowercase letters)
// let result = fccRegex.test(myString);
// console.log(result); // true

// 5. Extract Matches: .match syntax is the "opposite" of the .test method 
// 'string'.match(/regex/);
// /regex/.test('string');

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; 
// let result = extractStr.match(codingRegex);
// console.log(result); 

// 6. Find More Than the First Match:

// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; // global flag: g; case insensitive flag: i
// let result = twinkleStar.match(starRegex); 
// console.log(result); // [ 'Twinkle', 'twinkle' ]

// 7.  Match Anything with Wildcard Period:

// The wildcard character . will match any one character. The wildcard is also called dot and period. 

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// let result1 = huRegex.test(humStr);
// let result2 = huRegex.test(hugStr);

// console.log(result1); // true
// console.log(result2); // true

// 8.Match Single Character with Multiple Possibilities
//  find all the vowels in the string quoteSample.

// Character classes allow us to define a group of characters we wish to match by placing them inside square ([ and ]) brackets.

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result =quoteSample.match(vowelRegex);
// console.log(result);

// 9. Match Letters of the Alphabet: 

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);
// console.log(result);

// 10. Match Numbers and Letters of the Alphabet:

//let regexp = /[a-z1-100]/gi;
// above code returns all characters from A to Z, along with all numbers from 1 to 100
//Create a single regex that matches a range of letters and a range of numbers.

// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/gi;
// let result = quoteSample.match(myRegex); 
// console.log(result);


// 11. Match Single Characters Not Specified
//To create a negated character set, we place a caret character (^) after the opening bracket and before the characters we do not want to match.
//characters like ., !, [, @, / and white space are matched 

// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou^0-9]/gi;
// let result = quoteSample.match(myRegex); 
// console.log(result);

// 12. Match Characters that Occur One or More Times:

// an use the + character to check if a character or group of characters  occurs at least once, and may be repeated..

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g;
// let result = difficultSpelling.match(myRegex);
// console.log (result);

// 13. * matches characters that occur zero or more times.

// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh! "
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);
// console.log(result);

// 14. return the HTML tag <h1> and not the text <h1>Winter is coming</h1>. Remember the wildcard . in a regular expression matches any character.

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; 
// let result = text.match(myRegex);

// let text = "titanic";
// let Regex1 =/t[a-z]*i/;
// let Regex2 = /t[a-z]*?i/
// let result1 = text.match(Regex1);
// console.log(result1);
// let result2 = text.match(Regex2);
// console.log(result2);

// 15. Find One or More Criminals in a Hunt:

// Write a greedy regex that finds one or more criminals
// let criminal1="C";
// let criminal2="Cc";
// let criminal3="P1P5P4CCCcP2P6P3";
// let criminal4="P6P2P7P4P5CCCCCP3P1";
// let criminal5="";
// let criminal6="P1P2";
// let reCriminals = /C+/;

// let result1 = criminal1.match(reCriminals);
// console.log(result1);

// let result2 = criminal2.match(reCriminals);
// console.log(result2);

// let result3 = criminal3.match(reCriminals);
// console.log(result3);

// let result4 = criminal4.match(reCriminals);
// console.log(result4);

// let result5 = criminal5.match(reCriminals);
// console.log(result5);

// let result6 = criminal6.match(reCriminals);
// console.log(result6);


// 16.  Match Beginning String Patterns:

// the caret ^ is used to search for patterns at the beginning of strings.

// Ex:

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; 
// let result = calRegex.test(rickyAndCal);
// console.log(result);

// 17. Match Ending String Patterns:

// We can search the end of strings using the dollar sign character $ at the end of the regex.

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result);

// 18. Match All Letters and Numbers:

//**** I'll be continuing it tomorrow for now let's jump into challenges => 


// Challenges : //

// ## Question1:

// What does the `search` function do?

// The search() method searches a string for a specified value and returns the position of the match:
// - If no matches are found, it returns -1.

// Example: 

// const str = 'This is Priya, a sweet little girl.';
// const str1 = "";
// const pattern = /sweet/;

// const position = str.search(pattern);
// console.log(position); // Output: 17

// const position1 = str1.search(pattern);
// console.log(position1); // Output: -1

// Question2:

// What do the `exec` and `test` functions do (these functions exist on the `RegExp` prototype)?

// In JavaScript, both `exec` and `test` are methods available on the `RegExp` prototype, 
// allowing us to work with regular expressions. Here's what they do:

// ### `exec` Method:
// The `exec` method is used to execute a search for a match in a string. It searches the string for a specified pattern
//(regular expression), and if it finds a match, it returns an array containing the matched results. If no match is found, 
// it returns `null`.

//When a match is found, the `exec` method returns an array with the matched text and capturing groups,
//along with additional properties indicating the index of the match within the input string.

// Example:


// const regex = /quick\s(brown).+?(jumps)/i;
// const str = 'The quick brown fox jumps over the lazy dog';

// const result = regex.exec(str);
// console.log(result);


// The output will be an array with the entire match at index 0 and the captured groups at subsequent indices (if any). 
// The `exec` method also includes properties like `index` (the position of the match) and `input` (the original string).



// ### `test` Method:

// The `test` method, unlike `exec`, doesn’t return the actual matched string or its parts. Instead, 
// it checks for a match between a regular expression and a string. It returns `true` if a match is found
//  and `false` if no match is found.

// Example:

// const regex = /fox/;
// const str = 'The quick brown fox jumps over the lazy dog';

// const isMatch = regex.test(str);
// console.log(isMatch); // Output: true


// In this case, the `test` method returns `true` because the string contains the word 'fox',
//  which matches the regular expression `/fox/`.

// ### Differences:
// - `exec` returns an array with details of the match and its captured groups or `null` if no match is found.
// - `test` returns a boolean value (`true` or `false`) indicating whether the pattern is found in the string.

// // Both methods are handy for working with regular expressions in JavaScript, but they serve slightly different purposes: 
// `exec` is useful when you need details about the match, while `test` is often used when
//  you only need to check for the presence of a match.

// Question3: 

// Write a function called `isValidPassword`, which accepts a string. If the string is longer than 7 characters 
// and includes at least one special character (!,@,#, or $) , the function should return `true`.Otherwise, return `false`

// function isValidPassword (string) {
//     if (string.length > 7 && /[!@#$]/.test(string) ){
//     return true;
// }else{
//         return false;
//     }
// };
// Test cases
// console.log(isValidPassword('TacoCat'));    // Output: false
// console.log(isValidPassword('foo'));        // Output: false
// console.log(isValidPassword('awesome!'));   // Output: true
// console.log(isValidPassword('win!@'));      // Output: false

// Question4.

// write a JavaScript function `validatePassword(str)`. The function takes in one argument:`str` (string): a string of any length

//The function should return `true` if the input string is exactly 8 characters long and contains at least one lowercase letter.

// function validatePassword(str){
//     if (str.length === 8 && /[a-z]/.test(str)) {
// return true;
//     }else{
//         return false;
//     }
// };
// // Test cases
// console.log(validatePassword('Passw@rd'));    // Output: true
// console.log(validatePassword('Secr3t'));      // Output: false
// console.log(validatePassword('AbcdefgH'));    // Output: true
// console.log(validatePassword('ABCDEFGH'));    // Output: false

// Question5.