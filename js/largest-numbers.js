// ❓DESCRIPTION:
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// ✅SOLUTION:

function largestOfFour(arr) {
    return arr.map(el => el.sort((a, b) => b - a)).map(el => el[0])
}

console.log('largestOfFour: ', largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))