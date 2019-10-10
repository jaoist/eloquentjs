/**
 * Write two functions, one that counts Bs, 
 * and another that will count any character given.
 */

// jshint esversion: 6 

function countBs(str) {
  count = 0;
  for (i = 0; i < str.length; i++){
    if (str[i].toLowerCase() == 'b'){
      count++;
    }
  }
  return count;
}

console.log(countBs("Baby birds bite butterflys"));