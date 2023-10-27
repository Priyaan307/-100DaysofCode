/* 
Question 1. Create a function called `sendMessage` that accepts a string and a function. 
The `sendMessage` function will return the result of the function being passed to it with the message as a parameter
*/
function sendMessage(message, func) {
    return func(message)
};

 function printMessage(message) {
console.log(message);
};
sendMessage('Hare Krishna !', printMessage)

/*
Question 2. Write a function called `each` which accepts two parameters: an array and a callback function. 
The `each` function should loop over the array passed to it and run the callback function on each element in it.
*/
function each(array, func) {
    for (let i = 0; i < array.length; i++) {
      func(array[i]);
    }
  }
  each([1,2,3,4], function(val){
    console.log(val);
});
each([1,2,3,4], function(val){
    console.log(val*2);
});