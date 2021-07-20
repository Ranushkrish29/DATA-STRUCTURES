/**
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 
    0 <= a, b, c, d < n
    a, b, c, and d are distinct.
    nums[a] + nums[b] + nums[c] + nums[d] == target
    You may return the answer in any order.

Example 1:
    Input: nums = [1,0,-1,0,-2,2], target = 0
    Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
Example 2:
    Input: nums = [2,2,2,2,2], target = 8
    Output: [[2,2,2,2]] */



//Navie Implementation         ------ runtime O(n^4)   
//worst method :(   ---  but works 
var fourSum_Navie = function (nums, target) {
    let result = [],
        hash = {};
    for (let i = 0; i < nums.length - 3; i++)
        for (let j = i + 1; j < nums.length - 2; j++)
            for (let k = j + 1; k < nums.length - 1; k++)
                for (let l = k + 1; l < nums.length; l++)
                    if (nums[i] + nums[j] + nums[k] + nums[l] === target && !hash[[nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b)]) {
                        hash[[nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b)] = true;
                        result.push([nums[i], nums[j], nums[k], nums[l]].sort((a, b) => a - b));
                    }
    return result
};
console.log(fourSum_Navie([-5, 5, 4, -3, 0, 0, 4, -2], 4))//[ [ -5, 0, 4, 5 ], [ -3, -2, 4, 5 ] ]




//Optimized Implementation     ------ runtime O(n^3)
function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];
    console.log(nums)
    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] === nums[i - 1])
            continue;
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target)
            break;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (nums[j] === nums[j - 1] && j - i != 1)
                continue;

            let p3 = j + 1,
                p4 = nums.length - 1;

            while (p3 < p4) {

                if (nums[i] + nums[j] + nums[p3] + nums[p4] === target) {
                    result.push([nums[i], nums[j], nums[p3], nums[p4]]);
                    p3++;
                    p4--;
                } else if (nums[i] + nums[j] + nums[p3] + nums[p4] > target)
                    p4--;
                else
                    p3++;

                while (nums[p3] === nums[p3 - 1] && p3 - j != 1)
                    p3++;
                while (nums[p4] === nums[p4 + 1])
                    p4--;
            }
        }
    }
    return result
}
console.log(fourSum([1, 0, -1, 0, -2, 2], 0))//[ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
