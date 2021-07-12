/**Write a function to find the longest common prefix string amongst an array of strings.
 * 
If there is no common prefix, return an empty string "".
Example 1:
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
Example 2:
    Input: strs = ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings. */

let value = ["flower", "flow", "flx"];

//Navie  Implementation 
//with while loop 
function longestCommonPrefix(list) {
    let common = list[0];
    for (let i = 1; i < list.length; i++) {
        let j = 0;
        while (j <= common.length) {
            if (common[j] !== list[i][j]) {
                common = common.slice(0, j);
                break;
            }
            j++;
        }
        if (common == '')
            return common;
    }
    return common;
}
console.log(longestCommonPrefix(value), value.sort());


//Optimized Implementaion   

var longestCommonPrefixOptimied = function (strs) {
    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) return strs[0].slice(0, i);
    }
    return strs[0];
};
console.log(longestCommonPrefixOptimied(value));
