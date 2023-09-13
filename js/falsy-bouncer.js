// ❓DESCRIPTION:
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

// ✅SOLUTION:

function bouncer(arr) {
    let arr2 = arr.filter(el => el);
    return arr2
}

console.log('bouncer: ', bouncer([7, "ate", "", false, 9]))