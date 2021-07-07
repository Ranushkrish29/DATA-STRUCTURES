/**
  * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.
Example 2:
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

function findMedianSortedArrays(list1, list2) {
    //required variables
    let p1 = 0,
        p2 = 0,
        result,
        resultarr = [];

    //merge the two sorted array
    while (p1 < list1.length && p2 < list2.length) {
        if (list1[p1] <= list2[p2]) {
            resultarr.push(list1[p1])
            p1++;
        } else {
            resultarr.push(list2[p2])
            p2++;
        }
    }
    while (p1 < list1.length) {
        resultarr.push(list1[p1])
        p1++;
    }
    while (p2 < list2.length) {
        resultarr.push(list2[p2])
        p2++;
    }

    // To find the median
    if ((resultarr.length - 1) % 2 === 1) {
        //if length of the resultarr is even
        result = (resultarr[Math.floor((resultarr.length - 1) / 2)] + resultarr[Math.ceil((resultarr.length - 1) / 2)]) / 2;
    } else {
        //if length of the resultarr is odd 
        result = (resultarr[(resultarr.length - 1) / 2]);
    }
    //return result with decimal point 
    return result.toFixed(5);
}

console.log(findMedianSortedArrays([5, 6, 7, 8], [45, 56, 67, 100]));//26.50000



function findMedianSortedArraysimproved1(list1, list2) {
    //required variables
    let p1 = 0,
        p2 = 0,
        result = 0,
        resultarr = [],
        check;

    //merge the two sorted array
    for (let i = 0; i < list1.length + list2.length; i++) {

        if ((p1 < list1.length && p2 < list2.length && list1[p1] <= list2[p2]) || (p1 < list1.length && p2 >= list2.length))
            check = true;
        else
            check = false;

        //push elements to the result list based on the check condition
        if (check) {
            resultarr.push(list1[p1])
            p1++;
        } else {
            resultarr.push(list2[p2])
            p2++;
        }
    }
    // To find the median
    if ((resultarr.length - 1) % 2 === 1) {
        //if length of the resultarr is even
        result = (resultarr[Math.floor((resultarr.length - 1) / 2)] + resultarr[Math.ceil((resultarr.length - 1) / 2)]) / 2;
    } else {
        //if length of the resultarr is odd 
        result = (resultarr[(resultarr.length - 1) / 2]);
    }
    //return result with decimal point 
    return result.toFixed(5);
}

console.log(findMedianSortedArraysimproved1([1, 3], [2]));//2.0000
