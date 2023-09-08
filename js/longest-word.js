// ❓DESCRIPTION:
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// ✅SOLUTION:

function findLongestWordLength(str) {
    return str.split(' ').map(el => el.length).reduce((a, b) => Math.max(a, b), -Infinity);
}

console.log('findLongestWordLength: ', findLongestWordLength("The quick brown fox jumped over the lazy dog"))