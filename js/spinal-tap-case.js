// ❓DESCRIPTION:
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// ✅SOLUTION:

function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

console.log('spinalCase: ', spinalCase('This Is Spinal Tap'))