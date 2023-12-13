// ❓DESCRIPTION:
// Flatten a nested array. You must account for varying levels of nesting.

// ✅SOLUTION:

function steamrollArray(arr) {
    let flatNums = []
    const map = arr.map((item) => Array.isArray(item) ? flatNums = [...flatNums, ...steamrollArray(item)] : flatNums = [...flatNums, item]);
    return flatNums;
}

console.log('steamrollArray: ', steamrollArray([1, [2], [3, [[4]]]]))