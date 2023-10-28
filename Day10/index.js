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