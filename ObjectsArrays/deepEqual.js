/**
 * Compare two vaules and return true only if they are the same value or are 
 * objects with the same properties. 
 */

obj1 = {value: "test"};
obj2 = {value: "test"};
obj3 = {value1: 1, value2: 2};
obj4 = {value: "x"};

arr1 = [1,2,3];
arr2 = [1,2,3];
arr3 = [2,3,4];

function deepEqual(a, b) {
    if ((a !== null && typeof a == 'object') &&
        (b !== null && typeof b == 'object')) {
            //Compare length of property list
            if (Object.keys(a).length === Object.keys(b).length) {
                for (let k of Object.keys(a)) {
                    return deepEqual(a[k], b[k]);
                }
            }
            else {
                return false;
            }
        }
    else {
        return (a === b);
    }
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(arr1, arr2));
console.log(deepEqual(arr1, arr3));
console.log(deepEqual(1, null));
console.log(deepEqual(null, null));
console.log(deepEqual(obj1, obj4));

// Authors tests
console.log("Authors tests below.");
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
