/**
 * Given a string s, return the longest palindromic substring in s.

Example 1:
    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.
Example 2:
    Input: s = "cbbd"
    Output: "bb"
Example 3:
    Input: s = "a"
    Output: "a"
 */


//Navie implementation  = runtime --> O(n^3)  | space --> O(n)   
function ispalindromicSubstring(str) {
    let strrev = '';
    for (let i = str.length - 1; i >= 0; i--)
        strrev += str[i];
    return strrev === str ? true : false;
}
function longestPalindromicSubstring(string) {
    let longestSubstring = 0, result;
    for (let i = 0; i < string.length; i++) {
        let substring = ''
        for (let j = i; j < string.length; j++) {
            substring += string[j];
            if (ispalindromicSubstring(substring)) {
                if (longestSubstring < j - i + 1) {
                    result = substring;
                    longestSubstring = j - i + 1
                }
            }
        }
    }
    return result
}
console.log(longestPalindromicSubstring("babad"));//bab

//Optimized  Implementation  = runtime --> O(n^2)  | space --> O(1) 
function longestPalindromicSubstringOptimized(string) {
    if (string === null || string.length < 1) return "";
    let start = 0,
        end = 0,
        len;

    //helper function 
    var palindromicsubstring = (string, left, right) => {
        if (string.lenght > 1 || left > right) return 0;
        while (left >= 0 && right < string.length && string[left] === string[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < string.length; i++) {
        len = Math.max(palindromicsubstring(string, i, i), palindromicsubstring(string, i, i + 1));
        if (len > end - start) {
            start = Math.ceil(i - ((len - 1) / 2));
            end = i + (len / 2);
        }
    }

    return string.slice(start, end + 1)
}
console.log(longestPalindromicSubstringOptimized("babad"));//aba
