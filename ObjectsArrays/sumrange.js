/**
 * Write a function that returns an array of all numbers in a range. Then,
 * write a function that sums an array. Then combine to sum a range.
 */

 // jshint esversion: 6

function range(start, end){
    let arr = [];
    for (i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function sum(arr){
    let result = 0;
    for (i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

console.log(sum(range(1,10)));