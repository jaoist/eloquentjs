/**
 * Create a function that turns an array into a list, and a function that does
 * the opposite. Create a recursive version of nth.
 */

/* let list = {
    value: 1, rest: {
        value: 2, rest: {
            value: 3, rest: null
            }
        }
    }

console.log(list)
*/
let arr = [1, 2, 3, 4]

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

function arrayToList(arr) {    
    let previousList = null;
    let list = {};
    for (let e of arr) {
        console.log(e)
        list.value = e;
        list.next = previousList;
        previousList = list;
    }
    return list
}

console.log("List: " + arrayToList(reverseArray(arr)))