// ❓DESCRIPTION:
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//  Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

// ✅SOLUTION:

function dropElements(arr, func) {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if (func(arr[index])) {
            newArr = arr.slice(index)
            return newArr
        }
    }
    return newArr
}

console.log('dropElements: ', dropElements([1, 2, 3], function(n) {return n < 3; }))