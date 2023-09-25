// ❓DESCRIPTION:
// You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments.
// The function must accept an indeterminate number of arguments, also known as a variadic function.
// You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

// ✅SOLUTION:

function destroyer(arr, ...arg) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arg.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log('destroyer: ', destroyer([1, 2, 3, 1, 2, 3], 2, 3))