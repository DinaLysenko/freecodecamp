// ❓DESCRIPTION:
// Flatten a nested array. You must account for varying levels of nesting.

// ✅SOLUTION:

function smallestCommons(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    function isDivisible(num, min, max) {
        for (let i = min; i <= max; i++) {
            if (num % i !== 0) {
                return false;
            }
        }
        return true;
    }

    let smallestCommonMultiple = max;

    while (!isDivisible(smallestCommonMultiple, min, max)) {
        smallestCommonMultiple += max;
    }

    return smallestCommonMultiple;
}

console.log('smallestCommons: ', smallestCommons([1,5]))
console.log('smallestCommons: ', smallestCommons([1,3]))