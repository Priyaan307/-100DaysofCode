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
Question 2. 
*/