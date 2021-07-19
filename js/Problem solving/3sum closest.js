/** Given an array nums of n integers and an integer target,
 *  find three integers in nums such that the sum is closest to target.
 *  Return the sum of the three integers.
 *  You may assume that each input would have exactly one solution.

Example 1:
    Input: */let nums = [-1, 2, 1, -4], target = 1;
/*Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/


//navie implementation      ----- runtime O(n^2 + sumlist)
function threeSumClosest(list, target) {
    list.sort((a, b) => a - b);
    let sumlist = [];

    for (let i = 0; i < list.length - 2; i++) {
        if (list[i] === list[i - 1])
            continue;
        let p1 = i + 1,
            p2 = list.length - 1;
        while (p1 < p2) {
            sumlist.push(list[i] + list[p1] + list[p2]);
            if (list[p1] + list[p2] + list[i] > target) {
                p2--
            } else {
                p1++;
            }
        }
    }

    let result = sumlist[0];
    for (let i = 1; i < sumlist.length; i++) {
        if (Math.abs(sumlist[i] - target) > Math.abs(result - target))
            result = result;
        else
            result = sumlist[i]
    }
    return result
}
console.log(threeSumClosest(nums, 1))



//Optimized Implementation   --------- runtime  O(n^2)
function threeSumClosest2(list, target) {
    list.sort((a, b) => a - b);
    let closest = Infinity,
        sum, p1, p2;
    for (let i = 0; i < list.length - 2; i++) {
        if (list[i] === list[i - 1])
            continue;
        p1 = i + 1;
        p2 = list.length - 1;
        while (p1 < p2) {
            sum = list[i] + list[p1] + list[p2]
            closest = Math.abs(sum - target) > Math.abs(closest - target) ? closest : sum;
            if (closest === target)
                return sum;
            if (sum > target)
                p2--
            else
                p1++;
        }
    }
    return closest === Infinity ? sum : closest;
}
console.log(threeSumClosest2([0, 1, 0, 2], 1))
