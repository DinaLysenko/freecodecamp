// ❓DESCRIPTION:
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

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