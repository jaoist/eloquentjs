/**
 * This recursive function will test the evenness of a number, given that 0 is even, 1 is odd, and
 * any other number N has the same evenness as N-2. 
 */

function isEven(n){
  if (n == 0){
    return true;
  }
  else if (n == 1){
    return false;
  }
  else if (n < 0){
    return "Not a positive integer";
  }
  else {
    // Must return for the value to bubble up.
    return isEven(n - 2);
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));