/**Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn 
 * such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together 
 * with the x-axis forms a container, such that the container contains the most water.
Notice that you may not slant the container.

Example 1:
    Input: height = [1,8,6,2,5,4,8,3,7]
    Output: 49
    Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
    In this case, the max area of water (blue section) the container can contain is 49.
Example 2:
    Input: height =
    Output: 1
Example 3:
    Input: height = [4,3,2,1,4]
    Output: 16
Example 4:
    Input: height = [1,2,1]
    Output: 2 
*/

//Naive Implementation  =  runtime -->  O(n^2) ||  space -->  O(1)
var maxArea = (arr) => {
    let res = 0, temp = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            temp = Math.min(arr[j], arr[i]) * (j - i);
            res = res > temp ? res : temp;
        }
    }
    return res
}
console.log(maxArea([4, 3, 2, 1, 4]));//16


//Optimized Implementation = runtime-- > O(n) || space-- > O(n)
var maxAreaOptimized = (arr) => {
    let p1 = 0, p2 = arr.length - 1, temp = 0, res = 0;
    while (p1 < p2) {
        temp = Math.min(arr[p2], arr[p1]) * (p2 - p1);
        res = res > temp ? res : temp;

        if (arr[p1] >= arr[p2])
            p2--;
        else
            p1++;

    }
    return res;
}
console.log(maxAreaOptimized([1, 8, 6, 2, 5, 4, 8, 3, 7]));//49
