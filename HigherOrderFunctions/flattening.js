/**
 * Use the reduce method with concat to 'flatten' an array of arrays.
 */

// jshint esversion: 6

let arrays = [[1, 2, 3], [4, 5], [6]];

// This works, but there is a better way.
console.log(arrays.reduce( () => { 
    flat = [];
    for ( let i in arrays) {
        flat = flat.concat(arrays[i]);
    }
    return flat;
}));

//The better way. Reduce has some very particular arguments.
console.log(arrays.reduce((flat, current) => flat.concat(current), []));


// → [1, 2, 3, 4, 5, 6]