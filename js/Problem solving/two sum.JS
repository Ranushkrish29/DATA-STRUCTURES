// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example :
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].



//Program...
//method one...
function findtwosum(nums, target) {
    let object = {}, complement;
    //store all the elements in the list as a object { key as the element and value as index of the number}  
    for (let i in nums) {
        object[nums[i]] = i;
    }
    //loop the list once again 
    for (let i in nums) {
        //complement of the number is target - number
        complement = object[target - nums[i]];
        //if the complement of the element is present 
        if (complement && i !== complement) {
            //return the index of the nums
            return [i, complement]
        }
    }
}

//method 2...

function findtwosum2(nums, target) {
    let object = {}, complement;
    //store all the elements in the list as a object { key as the element and value as index of the number}  
    // and look up the complement of the number in the object 
    for (let i in nums) {
        object[nums[i]] = i;
        //complement of the number is target - number
        complement = object[target - nums[i]];
        if (complement && i !== complement) {
            //return the index of the nums
            return [complement, i]
        }
    }
}


//output
console.log(findtwosum([3, 2, 4], 6))      //[ '1', '2']
console.log(findtwosum([2, 7, 11, 15], 9))//[ '0', '1' ]

//method 2
console.log(findtwosum2([3, 2, 4], 6))      //[ '1', '2']
console.log(findtwosum2([2, 7, 11, 15], 9))//[ '0', '1' ]
