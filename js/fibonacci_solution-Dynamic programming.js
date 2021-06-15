/// ------------------------------FIBONACCI SOLUTION ----------------------

/**
 * line -13  ----> using pure recursion
 * line -20  ----> using recursion with memoziation { Dynamic Programming}
 * 
 * line -31  ----> using Iterative ---> Bottom-Up approach
 * line -44  ----> using Iterative with memoziation   {Dyanmic programming}
 */


//using the pure recurison
function findFibonacci(val) {
    if (val <= 2) return 1;
    return findFibonacci(val - 1) + findFibonacci(val - 2);
}
console.log(findFibonacci(10));

//using recursion with memoziation   -----> Dynamic programming
let memo = {}
function findFibonacciDp(val) {
    if (memo[val]) return memo[val]
    if (val <= 2) return 1;
    else memo[val] = findFibonacciDp(val - 1) + findFibonacciDp(val - 2)
    return memo[val];
}
console.log(findFibonacciDp(11));


//using Iterative -----> Bottom Up approach
function findFibonacciIterative(val) {
    let sum1 = 1, sum2 = 1, temp;
    if (val <= 2) return 1;
    for (let i = 2; i <= val; i++) {
        temp = sum2;
        sum2 = sum2 + sum1;
        sum1 = temp;
    }
    return sum1
}
console.log(findFibonacciIterative(11))

//using Iterative with memoziation   ------>Dyanmic programming
function findFibonacciIterativeDp(val) {
    let memo = [0, 1, 1];
    for (let i = 2; i <= val; i++) {
        memo[i] = memo[i - 1] + memo[i - 2];
    }
    return memo[val]
}
console.log(findFibonacciIterativeDp(10));