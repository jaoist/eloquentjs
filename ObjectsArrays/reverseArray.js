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
    for (i = 0; i < Math.floor(arr.length / 2); i++){
        let savedVal = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = savedVal;
    }
    return arr;
}

console.log(revereseInPlace([1, 2, 3, 4, 5]));