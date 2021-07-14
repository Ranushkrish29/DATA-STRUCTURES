/**Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 *  such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
    Input: nums = [0, 1, 2, -1, -1, -4,]
    Output: [[-1,-1,2],[-1,0,1]]
Example 2:
    Input: nums = []
    Output: []
Example 3:
    Input: nums = [0]
    Output: [] */




//Navie Implementation  ----------------------- Worst implementation  = runtime  O(n^3 + result) && space = O(n)
//never use this method
function threesum(nums) {
    let result = {};
    let final = []
    for (let i = 0; i < nums.length; i++)
        for (let j = i + 1; j < nums.length; j++)
            for (let k = j + 1; k < nums.length; k++)
                if ((nums[i] + nums[j] + nums[k] == 0) && (i != j && i != k && j != k))
                    if (!result[String([nums[k], nums[i], nums[j]].sort())]) {
                        result[String([nums[k], nums[i], nums[j]].sort())] = true
                        final.push([nums[k], nums[i], nums[j]].sort())
                    }
    return final;
}
console.log(threesum([0, 1, 2, -1, -1, -4,]));//[ [ -1, 0, 1 ], [ -1, -1, 2 ] ]


//Optimized Implementation  --------------------- runtime  O(n^2) && space = O(n)
function threesumOptimized(nums) {
    nums.sort((a, b) => a - b)
    let result = [];

    for (let p1 = 0; p1 < nums.length - 2; p1++) {

        if (nums[p1] > 0)
            break;
        if (nums[p1] === nums[p1 - 1])
            continue;
        let p2 = p1 + 1,
            p3 = nums.length - 1;

        while (p2 < p3)
            if (nums[p2] + nums[p3] === -nums[p1]) {
                let triplets = [nums[p1], nums[p2], nums[p3]];
                result.push(triplets);
                //not to contain duplicate triplets
                while (p2 < p3 && nums[p2] === triplets[1])
                    p2++;
                while (p2 < p3 && nums[p3] === triplets[2])
                    p3--;
            } else if (nums[p2] + nums[p3] > -nums[p1])
                p3--;
            else
                p2++;

    }
    return result
}
console.log(threesumOptimized([-1, -2, -3, 4, 1, 3, 0, 3, -2, 1, -2, 2, -1, 1, -5, 4, -3]));
//   [ [ -5, 1, 4 ],
//     [-5, 2, 3],
//     [-3, -1, 4],
//     [-3, 0, 3],
//     [-3, 1, 2],
//     [-2, -2, 4],
//     [-2, -1, 3],
//     [-2, 0, 2],
//     [-2, 1, 1],
//     [-1, -1, 2],
//     [-1, 0, 1] ]

