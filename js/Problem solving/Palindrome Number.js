/**Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
    Input: x = 121
    Output: true

Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
    Input: x = 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

// navie implementation  = runtime O(n) sapce O(n^2)   
function isPalindrome(num) {
    let string = String(num),
        revstr = '';
    for (let i = string.length - 1; i > -1; i--) {
        revstr += string[i];
    }
    return (string === revstr) ? true : false
}
console.log(isPalindrome(123));//false


// // Optimized implementation method 1 = runtime O(n/2) sapce O(n)    
function isPalindrome1(num) {
    let string = String(num),
        i,
        j = Math.floor(string.length / 2);

    if ((string.length - 1) % 2 === 1)
        i = j - 1;
    else {
        i = j - 1; j = j + 1;
    }

    while (i > -1 && j < string.length) {
        if (string[i] === string[j]) {
            i--;
            j++;
        }
        else
            return false;
    }
    return true;
}
console.log(isPalindrome1(2134554312));//true


// Optimized implementation method 2 = runtime O(n/2) sapce O(n)    
function isPalindrome2(num) {
    let string = String(num),
        i = 0,
        j = string.length - 1;
    while (i < j) {
        if (string[i] === string[j]) {
            i++;
            j--;
        } else
            return false;
    }
    return true;
}
console.log(isPalindrome2(213456777654312));//true



// Optimized implementation method 3 = runtime O(n/2) sapce O(1)    
function isPalindrome3(num) {
    if (num < 0) return false;
    let numrev = 0, com = num;
    while (num != 0) {
        numrev = (numrev * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    return numrev === Math.abs(com);
}

console.log(isPalindrome3(-121));//false
