/**
 *  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
   to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
    Input: x = 123
    Output: 321

Example 2:
    Input: x = -123
    Output: -321

Example 3:
    Input: x = 120
    Output: 21

Example 4:
    Input: x = 0
    Output: 0
 */

//Navie  Implemetation  =   runtime -->  O(x) ||  space -->  O(n)
//converting to string and processing
function reverse(x) {
    let string = String(x);
    let result = (x < 0) ? '-' : '';
    for (let i = string.length - 1; i > -1; i--)
        result += string[i];
    result = parseInt(result);
    return (result > -2147483649 && result < 2147483648) ? result : 0;
}
console.log(reverse(-2147483648))


//Optimized Implementation =   runtime -->  O(log(x)) ||  space -->  O(1)
function reverse2(x) {
    let rev = 0;
    while (x != 0) {
        rev = (rev * 10) + (x % 10);
        x = parseInt(x / 10);
    }
    return (rev > -2147483649 && rev < 2147483648) ? rev : 0;
}
console.log(reverse2(-123))