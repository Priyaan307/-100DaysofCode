//Async task: This is supposed to return string after 5 seconds.

// const pr = new Promise((resolve, reject) =>
// setTimeout(() => resolve("Returned value"), 5000)
// );


// function test() {
//     val = pr; // call to async task
//     console.log(`val is`, val);
// }

// test(); // Output : val is Promise { <pending> } => why?

// const pr = new Promise((resolve, reject) =>
// setTimeout(() => resolve("Returned value"), 5000)
// );

// // Async await - can only be used with promises
// async function test() {
//     console.log(`wait for the promise to be resolved before proceeding`)
//     val = await pr; // call to async task
//     console.log(`val is`, val); // output: val is Returned value
//     console.log(`After calling async task`);
// }
// test();


// #### Promises

// const promiseFunction = function(value) {
//     return new Promise(function(resolve, reject){
// if ( value === "resolve") {
//     return resolve("Inside Resolve block");
// }else{
//     return reject("Inside Reject Block");
// }
//     });
// };
// // promise chaining

// promiseFunction("resolve")
// .then(dta => {
//     console.log(dta);
// })
// .catch(err => {
//     console.log(err);
// });

