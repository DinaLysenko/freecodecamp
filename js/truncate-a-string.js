// ❓DESCRIPTION:
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// ✅SOLUTION:

function truncateString(str, num) {
    if (num >= str.length) {
        return str;
    }
    return str.slice(0, num) + '...';
}

console.log('truncateString: ', truncateString("A-tisket a-tasket A green and yellow basket", 8))