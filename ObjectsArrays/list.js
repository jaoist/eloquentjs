/**
 * Create a function that turns an array into a list, and a function that does
 * the opposite. Create a recursive version of nth.
 */



let arr = [1, 2, 3, 4]

let list = {
    value: 1, rest: {
        value: 2, rest: {
            value: 3, rest: null
            }
        }
    }

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
        list.rest = previousList;
        previousList = list;
    }
    return list
}

function listToArray(list) {
    let arr = [];

    while (list) {
        arr.push(list.value);
        var list = list.rest;
    }
    return arr
}

function prepend(elem, list) {
    elem.rest = list;
    var list = elem;

    return list;
}


function printListValues(list) {
    let currentElem = list;
    
    while (currentElem){
        console.log(currentElem.value);
        currentElem = currentElem.rest;
    }
}

function nth(list, n) {
    console.log(n)
    if (n === 0) {
        return list.value
    }
    else {
        return nth(list.rest, n - 1)
    }
}
    

printListValues(list);
console.log(listToArray(list))
console.log(list)
console.log(prepend({value: 0}, list))
console.log(nth(list, 1))