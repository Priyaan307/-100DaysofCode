//............18.

// The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
// this character class also includes the underscore character (_).
// These shortcut character classes are also known as shorthand character classes.
//  \w

// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; 
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log(result);

//19.

// Match Everything But Letters and Numbers:

// \W : (capital letter) => [^A-Za-z0-9_].
// we use this shorthand character class to count the number of non-alphanumeric characters in various quotes and strings.

// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log(result);

// 20. Match All Numbers:

// The shortcut to look for a digit character is \d. with a lowercase d. This is equal to the character class [0-9]. Which looks for a single character of any number between zero and Nine.

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;
// console.log(result);

// 21.Match All Non-Numbers =>  \D

// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;
// console.log(result);

// 22. Restrict Possible Usernames:

// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

// we need to check all the usernames in a database.
// Here are some simple rules that users have to follow when creating their username.

// Usernames can only use alphanumeric characters.
// The only numbers in the username have to be at the end.
//  There can be zero or more of them at the end. 
// Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long.
// A two-character username can only use alphabet letters as characters.

// let username = "JackOfAllTrades";
// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
// let result = userCheck.test(username);

// console.log(result);

/* Explained:

^ - start of input
[a-z] - first character is a letter
[0-9]{2,} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input

*/

// 23. \s => Match Whitespace: we can search for whitespace using \s, which is a lowercase s.

// 24. \S => match non-whitespace

// 25. {} =>  Specify Upper and Lower Number of Matches:

// 26. 

// 27.

//28.

//29.

//30.

//31.

//32.

//33.
