/*
Given a string containing digits from 2 - 9 inclusive, return all possible letter combinations that 
the number could represent.Return the answer in any order.

A mapping of digit to letters(just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

//

    1       2       3
    -      abc     def
    4       5       6
   ghi     jkl     mno
    7       8       9   
   pqrs    tuv     wxyz

//
Example 1:
    Input: digits = "23"
    Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
Example 2:
    Input: digits = ""
    Output: []
Example 3:
    Input: digits = "2"
    Output: ["a", "b", "c"]*/



//Navie Implementation    --- runtime of O(n)    
var letterCombinations = function (digits) {
    if (digits.length === 0)
        return [];
    let lettermap = {
        1: [''],
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    },
        l1 = lettermap[digits[0] ? digits[0] : 1],
        l2 = lettermap[digits[1] ? digits[1] : 1],
        l3 = lettermap[digits[2] ? digits[2] : 1],
        l4 = lettermap[digits[3] ? digits[3] : 1],
        result = [];
    for (let i of l1)
        for (let j of l2)
            for (let k of l3)
                for (let l of l4)
                    result.push(i + j + k + l);
    return result;
};
console.log(letterCombinations("23"))//["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("2"))//["a" "b", "c"]
console.log(letterCombinations("9"))//[ 'w', 'x', 'y', 'z' ]