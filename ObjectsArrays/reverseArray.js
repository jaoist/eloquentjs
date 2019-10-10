/**
 * Write reverseArray and reverseArrayInPlace.
 */

 //jshint esversion: 6

function reverseArray(arr) {
    console.log(arr);
    let arrLen = arr.length;
    let reversed = [];

    for (let i = 0; i < arrLen ; i++) {
        console.log(arr);
        reversed.push(arr.pop());
    }
    return reversed;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function revereseInPlace(arr) {
    let arrLen = arr.length;
    console.log(arrLen);

    for (let i = 0; i < arrLen; i++) {
        
        console.log(arr);
        let shifted = arr.shift();
        console.log(shifted);
        arr.push(shifted);
    }
}

console.log(revereseInPlace([1, 2, 3, 4, 5]));