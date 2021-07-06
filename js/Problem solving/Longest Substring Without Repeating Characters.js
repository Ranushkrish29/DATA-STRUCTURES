/**Given a string s, find the length of the longest substring without repeating characters.

Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1. */



//Naive Implementation  =  runtime -->  O(n^2) ||  space -->  O(n)
function lengthOfLongestSubstringNaive(string) {
    let substring = [],
        Result;
    for (let i = 0; i < string.length; i++) {
        let memoj = {},
            count = 0;
        for (let j = i; j < string.length; j++) {
            if (!memoj[string[j]]) {
                memoj[string[j]] = true;
                count++;
            } else {
                break;
            }
        }
        substring.push(count);
    }
    Result = substring[0];
    for (let i = 1; i < substring.length - 1; i++) {
        if (Result < substring[i]) {
            Result = substring[i];
        }
    }
    return Result ? Result : 0;
}



//Optimized Implementation    =  runtime -->  O(n) ||  space -->  O(n)
//using sliding window method
var lengthOfLongestSubstring = function (string) {
    let i = 0,
        j = 0,
        substringsize = 0,
        hashmap = {};

    while (j < string.length) {
        //if hash of the elemetnt is present then update the i 
        if (hashmap[string[j]]) {
            i = Math.max(i, hashmap[string[j]]);
        }
        //update the substringsize
        substringsize = Math.max(substringsize, (j - i) + 1);
        //save the element in the hash with (elements index +1) as the value
        hashmap[string[j]] = j + 1;
        //increament j 
        j++;
    }

    return substringsize;
}



console.log(lengthOfLongestSubstringNaive("abcebcbb"));  //4
console.log(lengthOfLongestSubstringNaive("ranush"));    //6
console.log(lengthOfLongestSubstringNaive("pwwkew"));    //3
console.log(lengthOfLongestSubstringNaive("dvdf"));      //3
console.log(lengthOfLongestSubstringNaive("aab"));       //2
console.log(lengthOfLongestSubstringNaive("tmmzuxt"));   //5
console.log(lengthOfLongestSubstringNaive("tmt"));       //2

console.log(lengthOfLongestSubstring("abcebcbb"));  //4
console.log(lengthOfLongestSubstring("ranush"));    //6
console.log(lengthOfLongestSubstring("pwwkew"));    //3
console.log(lengthOfLongestSubstring("dvdf"));      //3
console.log(lengthOfLongestSubstring("aab"));       //2
console.log(lengthOfLongestSubstring("tmmzuxt"));   //5
console.log(lengthOfLongestSubstring("tmt"));       //2