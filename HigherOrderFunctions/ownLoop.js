/**
 * A higher order function that works somewhat like a for-loop. The function has a value, test function,
 * update function, and a body function. Each iteration the test is run on the current loop value and
 * stops if that returns false. It will then call the body function, giving it the current value,
 * and then calls the update function to create a new value and start from the beginning. 
 */

 // jshint esversion: 6

function loop(val, test, update, body) {
    let currentValue = val;
    if (test(currentValue)) {
        body(currentValue);
    }
    else {
        return false;
    }
    currentValue = update(currentValue);
    loop(currentValue, test, update, body);

}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1