// Iterators and Generators: 
// Iterators are objects that allow us to loop through a collection of items (such as an array) and access each item in the collection.
// Generators are functions that return an iterator and also provide an easy way to create iterators. 

// Iterators:

// function makeRangeIterator(start =0, end =  Infinity, step =1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     var rangeIterator = {
//         next: function () {
//             let result;
//             if(nextIndex < end) {
//                 result = {value: nextIndex , done : false}
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//         }
//         return {value: iterationCount, done: true}
//     }
//     };
// return rangeIterator;
// }

// let it = makeRangeIterator(1, 10); // it =>Iterator
// let result = it.next();
// console.log(result);
// result = it.next();
// console.log(result);
// while(!result.done){
//     console.log(result);
//     result = it.next();
// }
// console.log(result)
// result = it.next();
// console.log(result.value)


// Generators: 

// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {

//     let iterationCount = 0;
//     for (let i = start; i <= end; i+= step) {
//         iterationCount++;
//         yield i; // stops function execution and returns yielding value. In this case it returns '1' 
//     }
//     return iterationCount;
// }

// var gen = makeRangeIterator(1, 10, 1); //  Iterable

// for (const itItem of gen) {
//     console.log(itItem);
// }
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())
//  console.log(gen.next())

// function* idMaker(){
//     var index = 0;
//     while(true)
//     yield index++;
// }
// var gen = idMaker();
// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // 3
// console.log(gen.next().value); // 4
// console.log(gen.next().value); // 5
// console.log(gen.next().value); // 6