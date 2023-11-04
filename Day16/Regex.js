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

// 24. \S(uppercase s) => we can search for Search for non-whitespace using \S.


// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; 
// let result = sample.match(countNonWhiteSpace);

// 25. {} =>  Specify Upper and Lower Number of Matches:

// We use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes we want to match a certain range of patterns.
// we can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). we put two numbers between the curly brackets - for the lower and upper number of patterns.
// Ex:

// let str1 = "ooohh";
// let str2 = "ohh";
// let str3 = "ohhhh";
// let regexp = /o{3,5}h{2,5}/;
// let result = regexp.test(str1);
// console.log(result);


// 26.Specify Only the Lower Number of Matches:
// we can specify the lower and upper number of patterns with quantity specifiers using curly brackets. sometimes we only want to specify the lower number of patterns with no upper limit.
//  To only specify the lower number of patterns with no upper limit.

//ex:
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/;
// let result = haRegex.test(haStr);

// 27.Specify Exact Number of Matches: 
//  we can also specify  the lower and upper number of patterns with quantity specifiers using curly brackets.
// To specify a certain number of patterns, just have that one number between the curly brackets.

// Example: 
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/;
// let result = timRegex.test(timStr);

//28. Check for All or None:

// let favWord = "favorite";
// let favRegex = /favou?rite/;
// let result = favRegex.test(favWord);


// //29.Positive and Negative Lookahead

// lookahead are patterns that tell javascript to look-ahead in our string to check for patterns further along. This can be useful when we want to search for multiple patterns over the same string.
//  There are two kinds of lookhead: positive and negative.
// positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// a negative lookahead will look to make sure the element in the search pattern is not there.A negative lookhead is used as (?!...) where the ... is the pattern that we do not want to be there.The rest of the pattern is returned if the negative lookahead part is not present.
// ex.  passwords that are greater than 5 characters long, and have two consecutive digits.
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
// let result = pwRegex.test(sampleWord);

// //30.Check For Mixed Grouping of Characters

// //31.Reuse Patterns Using Capture Groups

// //32.Use Capture Groups to Search and Replace

//33. Remove Whitespace from Start and End
