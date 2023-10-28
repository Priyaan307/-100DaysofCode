// 1. What is the Output :
(function () {
    var test = 5;

    if (false) {
        test = 7;
    } else {
        console.log(test + 2);
    }
}()); // 7

// 2. hat is the output? Is `test` global?
(function () {
    test = 5;

    if (false) {
        var test;
    } else {
        console.log(test + 2);
    }
}()); // 7

// 3. What is the output?
// Will it error and break? Is `test` defined?

(function () {
    if (false) {
        var test = 3;
    } else {
        console.log(test + 2);
    }
}()); // NaN

// 4 : What is the output? Is `one` defined?
//  Will it error? 
//  is it one of these digits: 3, 4, 5, or 6?

(function () {
    test = 5;

    if (false) {
        var test = 3;
    } else {
        console.log(one(test));
    }

    function one(value) {
        return value + 1;
    }
}()); // 6 

// 5. Write a function that reverses an array..

function reverseArray(arr) {
    let reversedArray = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
  
    return reversedArray;
  }
  let myArray = [5,8,2,9,5,6,3,1];
let reversedArray = reverseArray(myArray);
console.log(reversedArray);
console.log(myArray);

// 6. 