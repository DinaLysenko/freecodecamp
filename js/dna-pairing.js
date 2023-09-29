// ❓DESCRIPTION:
// Pairs of DNA strands consist of nucleobase pairs.
// Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element.
// Write a function to match the missing base pairs for the provided DNA strand.
// For each character in the provided string, find the base pair character.
// Return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// ✅SOLUTION:

function pairElement(str) {
    let encArr = []
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case ("G"):
                encArr.push(["G", "C"]);
                break;
            case ("C"):
                encArr.push(["C", "G"]);
                break;
            case ("A"):
                encArr.push(["A", "T"]);
                break;
            case ("T"):
                encArr.push(["T", "A"]);
                break;
        }
    }
    return encArr
}

console.log('pairElement: ', pairElement("GCG"))