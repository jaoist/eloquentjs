/**
 * Implementation of Array.every(), using a function that takes an array and a function,
 * one using a loop, the other using the some method.
 * The someEvery
 */

 // jshint esversion: 6

function loopEvery(arr, fn) {
    for (let i in arr) {
        if (!fn(arr[i])) {
            return false;
        }
    }
    return true;
}

// This was a tough one.
function someEvery(arr, fn) {
    //Every element can be tested individually by 
    //a nested calling of fn() for each element.
    return !arr.some(elem => !fn(elem));
}

//tests from author
console.log(loopEvery([1, 3, 5], n => n < 10));
// → true
console.log(loopEvery([2, 4, 16], n => n < 10));
// → false
console.log(loopEvery([], n => n < 10));
// → true

console.log(someEvery([1, 3, 5], n => n < 10));
// → true
console.log(someEvery([2, 4, 16], n => n < 10));
// → false
console.log(someEvery([], n => n < 10));
// → true