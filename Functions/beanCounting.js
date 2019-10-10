/**
 * Write two functions, one that counts Bs, 
 * and another that will count any character given.
 */

// jshint esversion: 6 

function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, char) {
  count = 0;
  for (i = 0; i < str.length; i++){
    if (str[i] == char){
      count++;
    }
  }
  return count;
}

console.log(countBs("Baby birds bite butterflys"));
console.log(countChar("Similar simians sound so sleepy", 's'));