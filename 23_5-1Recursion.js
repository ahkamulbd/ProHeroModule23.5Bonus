// let sum = 0;

// for (let i = 5; i >= 1; i--) {
//     sum = sum + i;
// }
// console.log(sum);

// Solving the above program by using Recursion

function sum(i) {
    if (i === 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);
