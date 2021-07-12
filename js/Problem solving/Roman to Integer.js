/**Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as 
XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
Instead, the number four is written as IV. Because the one is before the five we subtract it making
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 1:
    Input: s = "III"
    Output: 3
Example 2:
    Input: s = "IV"
    Output: 4
Example 3:
    Input: s = "IX"
    Output: 9
Example 4:
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
Example 5:
    Input: s = "MCMXCIV"
    Output: 1994
    Explanation: M = 1000, CM = 900, XC = 90 and IV = 4. */




//Navie Implemetation        runtime = O(N + romanlist[i])     
function helper(position, substring) {
    romanlist = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['M', 'MM', 'MMM']];

    for (let i in romanlist[position]) {
        if (substring === romanlist[position][i]) {
            if (i == '3' || i == '8')
                return - Math.pow(10, position) * 2;
            else if (i == '4')
                return Math.pow(10, position) * 5;
            else
                return Math.pow(10, position);
        }
    }
    return false;
}
function romanToInt(romans) {
    let p1 = 0,
        p2 = 1,
        result = 0,
        position,
        value;

    while (p1 <= romans.length && p2 <= romans.length) {
        if (romans[p1] === 'M')
            position = 3;
        else if (romans[p1] === 'D' || romans[p1] === 'C')
            position = 2;
        else if (romans[p1] === 'L' || romans[p1] === 'X')
            position = 1;
        else if (romans[p1] === 'V' || romans[p1] === 'I')
            position = 0;
        else return 0;

        value = helper(position, romans.slice(p1, p2));

        if (value > 0) {
            result += value;
            p2++
        } else if (value < 0) {
            result += value;
            p1++;
        } else {
            p1 = p2 - 1;
        }
    }
    return result;
}
console.log(romanToInt("MCMIXV"));//1994




//Optimized Implementation
function romanToIntOptimized(roman) {
    let romanvalue = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    },
        currentvalue,
        nextvalue,
        result = 0;

    for (let i = 0; i < roman.length; i++) {
        currentvalue = romanvalue[roman[i]];
        nextvalue = Number(i) + 1;
        if (nextvalue < roman.length && currentvalue < romanvalue[roman[nextvalue]]) {
            result += (romanvalue[roman[nextvalue]] - currentvalue);
            i++;
        } else
            result += currentvalue
    }
    return result
}
console.log(romanToIntOptimized("MCMIXV"));